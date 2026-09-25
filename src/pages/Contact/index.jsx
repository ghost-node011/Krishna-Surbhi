import { useState } from 'react';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { MapPin, Phone, Mail, Instagram, Info } from 'lucide-react';
import { PHOTOS, CONTACT, VISITS_PAUSED_NOTE } from '../../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen">
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Volunteering, supporting the herd, or just wanting to know more — write to us."
        image={PHOTOS.restingCow.src}
        imagePosition={PHOTOS.restingCow.position}
      />

      {/* ── Contact content ── */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left: info */}
          <FadeIn direction="left">
            <SectionLabel text="Reach Out" />
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
              We love hearing <br />
              <em className="italic text-gold font-bold">from you</em>
            </h2>
            <p className="text-forest-dark leading-relaxed mb-8 font-medium">
              Whether you want to volunteer, support the herd&rsquo;s care, or simply want to know
              more about the sanctuary, one of us will get back to you.
            </p>

            {/* Visits are paused — say so plainly rather than leaving people guessing */}
            <div className="flex items-start gap-3 bg-sand border border-gold/25 rounded-2xl p-5 mb-6">
              <Info size={17} className="text-gold flex-shrink-0 mt-0.5" />
              <p className="text-forest-dark text-sm leading-relaxed font-medium">{VISITS_PAUSED_NOTE}</p>
            </div>

            <div className="flex flex-col gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-black text-forest-dark uppercase mb-1">Find Us</div>
                  <div className="text-forest-dark text-sm leading-relaxed font-medium">{CONTACT.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-black text-forest-dark uppercase mb-1">Call Us</div>
                  {CONTACT.people.map((person) => (
                    <div key={person.name} className="text-forest-dark text-sm">
                      <a href={person.href} className="hover:text-gold transition-colors font-bold">{person.display}</a>
                      <span className="text-forest-dark font-medium"> · {person.name}, {person.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-black text-forest-dark uppercase mb-1">Email Us</div>
                  <a href={`mailto:${CONTACT.email}`} className="text-forest-dark text-sm hover:text-gold transition-colors font-bold">{CONTACT.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-black text-forest-dark uppercase mb-1">Follow Along</div>
                  <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="text-forest-dark text-sm hover:text-gold transition-colors font-bold">{CONTACT.instagram}</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
              <iframe
                title="Krishna Surabhi Sanctuary location"
                src="https://maps.google.com/maps?q=Krishna+Surabhi+gov+Seva+Sadan%2C+Sitapur%2C+Guwara%2C+Rajasthan+301402&z=14&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-forest text-xs font-bold border-2 border-forest-dark px-4 py-2 rounded-full hover:bg-forest-dark hover:text-white hover:scale-105 transition-all duration-300"
            >
              Open in Google Maps ↗
            </a>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-sand rounded-3xl p-8 md:p-10 shadow-sm border border-forest-dark/6 h-fit sticky top-24">
              {!sent ? (
                <>
                  <h3 className="font-serif font-bold text-2xl text-forest-dark mb-1">Send a Message</h3>
                  <p className="text-forest-dark text-sm mb-7 font-medium">We'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest uppercase text-forest-dark font-black">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Rakhi Anuradha"
                          className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-forest-dark/60 focus:outline-none focus:border-forest transition-colors bg-white font-medium"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest uppercase text-forest-dark font-black">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-forest-dark/60 focus:outline-none focus:border-forest transition-colors bg-white font-medium"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest-dark font-black">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-forest-dark/60 focus:outline-none focus:border-forest transition-colors bg-white font-medium"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest-dark font-black">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark focus:outline-none focus:border-forest transition-colors bg-white font-medium"
                      >
                        <option value="">Select a subject</option>
                        <option>Volunteer with us</option>
                        <option>Support the herd</option>
                        <option>Corporate Partnership</option>
                        <option>Media Enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest-dark font-black">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what's on your heart..."
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-forest-dark/60 focus:outline-none focus:border-forest transition-colors resize-none bg-white font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-gold text-white font-black text-[11px] tracking-wider uppercase py-4 rounded-xl hover:bg-gold-dark hover:scale-105 hover:shadow-xl transition-all duration-300 mt-1"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-serif font-bold text-2xl text-forest-dark mb-2">Thank you, {form.name}!</h3>
                  <p className="text-forest-dark/70 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                    Your message has been received. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }}
                    className="mt-6 text-forest text-xs font-black border-2 border-forest-dark px-5 py-2 rounded-full hover:bg-forest-dark hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
