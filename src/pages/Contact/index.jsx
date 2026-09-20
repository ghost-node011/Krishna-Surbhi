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
    <div className="bg-white">
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Volunteering, supporting the herd, or just wanting to know more — write to us."
        image={PHOTOS.restingCow.src}
        imagePosition={PHOTOS.restingCow.position}
      />

      {/* ── Contact content ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <FadeIn direction="left">
            <SectionLabel text="Reach Out" />
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
              We love hearing <br />
              <em className="italic text-gold">from you</em>
            </h2>
            <p className="text-brown/70 leading-relaxed mb-8">
              Whether you want to volunteer, support the herd&rsquo;s care, or simply want to know
              more about the sanctuary, one of us will get back to you.
            </p>

            {/* Visits are paused — say so plainly rather than leaving people guessing */}
            <div className="flex items-start gap-3 bg-sand border border-gold/25 rounded-2xl p-5 mb-10">
              <Info size={17} className="text-gold flex-shrink-0 mt-0.5" />
              <p className="text-brown/75 text-sm leading-relaxed">{VISITS_PAUSED_NOTE}</p>
            </div>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-bold text-forest/60 uppercase mb-1">Find Us</div>
                  <div className="text-forest-dark text-sm leading-relaxed">{CONTACT.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-bold text-forest/60 uppercase mb-1">Call Us</div>
                  {CONTACT.people.map((person) => (
                    <div key={person.name} className="text-forest-dark text-sm">
                      <a href={person.href} className="hover:text-gold transition-colors">{person.display}</a>
                      <span className="text-brown/50"> · {person.name}, {person.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-bold text-forest/60 uppercase mb-1">Email Us</div>
                  <a href={`mailto:${CONTACT.email}`} className="text-forest-dark text-sm hover:text-gold transition-colors">{CONTACT.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest font-bold text-forest/60 uppercase mb-1">Follow Along</div>
                  <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="text-forest-dark text-sm hover:text-gold transition-colors">{CONTACT.instagram}</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
              <iframe
                title="Krishna Surabhi Sanctuary location"
                src="https://maps.google.com/maps?q=Neb+Sarai+Extension%2C+New+Delhi&z=14&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-forest text-xs font-semibold border border-forest/25 px-4 py-2 rounded-full hover:bg-forest hover:text-white transition-all"
            >
              Open in Google Maps ↗
            </a>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-sand rounded-3xl p-8 md:p-10 shadow-sm border border-forest-dark/6 h-fit sticky top-24">
              {!sent ? (
                <>
                  <h3 className="font-serif text-2xl text-forest-dark mb-1">Send a Message</h3>
                  <p className="text-brown/55 text-sm mb-7">We'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Rakhi Anuradha"
                          className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark focus:outline-none focus:border-forest transition-colors bg-white"
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
                      <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what's on your heart..."
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-gold text-white font-semibold text-[11px] tracking-wider uppercase py-4 rounded-xl hover:bg-gold-dark active:scale-95 transition-all mt-1"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-serif text-2xl text-forest-dark mb-2">Thank you, {form.name}!</h3>
                  <p className="text-brown/60 text-sm leading-relaxed max-w-xs mx-auto">
                    Your message has been received. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }}
                    className="mt-6 text-forest text-xs font-semibold border border-forest/25 px-5 py-2 rounded-full hover:bg-forest/5 transition-colors"
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
