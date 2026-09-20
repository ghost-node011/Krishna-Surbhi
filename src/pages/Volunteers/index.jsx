import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { GroupHeader, FeatureCard } from '../../components/TeamCards';
import VolunteerForm from '../../components/VolunteerForm';
import { PHOTOS, teamByGroup, CONTACT, VISITS_PAUSED_NOTE } from '../../data';

// Per the founder, trustees are never called volunteers — this page lists only group 'volunteer'.
const VOLUNTEERS = teamByGroup('volunteer');

// The work itself, as Pooja describes it in her write-up.
const SEVA = [
  { title: 'Preparing fodder', text: 'Preparing nutritious organic fodder for the herd.' },
  { title: 'Daily feeding', text: 'Helping with the daily feeding routines.' },
  { title: 'Clean shelters', text: 'Keeping the shelter areas clean and safe for the cows.' },
  { title: 'Caring for the sick', text: 'Helping care for sick and rescued cattle.' },
  { title: 'Organic farming', text: 'Organic farming, vermicomposting and eco-friendly work that keeps the sanctuary in balance.' },
];

export default function Volunteers() {
  return (
    <div className="bg-cream">
      <PageHero
        label="Krishna Surabhi"
        title="Our Volunteers"
        subtitle="The hands behind the daily seva — feeding, cleaning and caring for our rescued cows."
        image={PHOTOS.cowHug.src}
        imagePosition={PHOTOS.cowHug.position}
      />

      {/* ── The volunteers ── */}
      <section className="bg-sand py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <GroupHeader
              label="Meet Our Volunteers"
              title="The hands behind the daily seva"
              text="Rakesh joined as our gardener and is today the backbone of Krishna Surabhi. Pooja gives her time to feeding, cleaning and caring for the cows."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {VOLUNTEERS.map((person, i) => (
              <FadeIn key={person.id} delay={i * 0.1} className="h-full">
                <FeatureCard person={person} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What the seva looks like ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="A Day of Gau Seva" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2">
                What our volunteers <em className="italic text-gold">do here</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SEVA.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06} className="h-full">
                <div className="bg-white rounded-2xl p-6 h-full border border-forest/6 shadow-sm">
                  <div className="font-serif text-3xl text-saffron leading-none mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-serif text-xl text-forest-dark leading-tight mb-2">{item.title}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to join, with the form right beside the steps ── */}
      <section id="join" className="bg-sand py-20 md:py-28 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel text="Joining Us" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Join the <em className="italic text-gold">seva</em>
              </h2>
              <p className="text-brown/65 leading-relaxed mt-5">
                There is no fee and no application to be approved. We are building a community of
                people who show up for the herd — tell us a little about yourself and we will call.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <ol className="border-t border-forest-dark/10">
                  {[
                    { n: '01', t: 'Tell us about yourself', d: 'Fill in the form here, or message us on WhatsApp. Say what you would like to help with.' },
                    { n: '02', t: 'We talk it through', d: 'One of us calls you back to understand your time, your skills, and what the herd needs right now.' },
                    { n: '03', t: 'Start your seva', d: 'Come for a morning or a week. Fodder, feeding, shelters, or care for the sick — whatever fits.' },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-5 py-6 border-b border-forest-dark/10">
                      <span className="font-serif text-2xl text-gold leading-none pt-1 w-9 flex-shrink-0 tabular-nums">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl text-forest-dark leading-tight mb-1.5">{step.t}</h3>
                        <p className="text-brown/65 text-sm leading-relaxed">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Visits are paused, but volunteering is not — be explicit about both */}
                <div className="flex items-start gap-3 bg-white border border-gold/25 rounded-2xl p-5 mt-8">
                  <Info size={17} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-brown/75 text-sm leading-relaxed">
                    <strong className="text-forest-dark">A note on visiting:</strong> {VISITS_PAUSED_NOTE}{' '}
                    Volunteering carries on right through the rebuild.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn direction="right" delay={0.1}>
                <VolunteerForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark">
          <img
            src={PHOTOS.herdYard.src}
            alt={PHOTOS.herdYard.alt}
            style={{ objectPosition: PHOTOS.herdYard.position }}
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
              Want to give your time <em className="italic text-gold-light">to Gau Seva?</em>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Write to us and our team will tell you how you can help at the sanctuary.
            </p>
            <div className="flex justify-center">
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-gold-dark transition-all"
              >
                Join as a Volunteer <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
