import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { PHOTOS, CONTACT, VISITS_PAUSED_NOTE } from '../../data';
import {
  ArrowRight, Heart, Leaf, Camera, Users, BookOpen, Stethoscope,
  Truck, Wrench, HandHeart, Info,
} from 'lucide-react';

// Money is not being collected while the gaushala is rebuilt (DONATIONS_OPEN in
// data/index.js). Everything on this page asks for hands, skills or things —
// never a rupee.
const SEVA_ROLES = [
  { Icon: Heart, title: 'Animal Care', desc: 'Feed, groom, and sit with the herd. The most direct seva there is.', commitment: 'Weekends or full weeks' },
  { Icon: Leaf, title: 'Farm & Garden', desc: 'Grow fodder, keep the grounds, and run the composting.', commitment: '2-day minimum' },
  { Icon: Stethoscope, title: 'Veterinary Help', desc: 'Support our vets through check-ups, medication and wound care.', commitment: 'Qualified vets' },
  { Icon: Truck, title: 'Transport & Rescues', desc: 'Drive a rescue run, or bring fodder and supplies across the city.', commitment: 'Own vehicle helps' },
  { Icon: Camera, title: 'Photos & Stories', desc: 'Document the herd so their stories reach people who can help.', commitment: 'Remote or on-site' },
  { Icon: Wrench, title: 'The Rebuild', desc: 'Sheds, fencing, water lines — hands and trades for the work going on now.', commitment: 'During the rebuild' },
  { Icon: BookOpen, title: 'Teaching & Outreach', desc: 'Take the story to schools, and build the community around the sadan.', commitment: 'Flexible' },
  { Icon: Users, title: 'Bringing People In', desc: 'The strongest thing you can give us is one more person who shows up.', commitment: 'Anytime' },
];

// Things the herd needs that are not money.
const IN_KIND = [
  'Green fodder, chaara and jaggery',
  'Medicines and dressing supplies',
  'Tarpaulin, rope and fencing material',
  'Water troughs and feeding bins',
  'Blankets and jute sacks for winter',
  'A vet who can spare a morning',
];

export default function Support() {
  return (
    <div className="bg-white">
      <PageHero
        label="Seva"
        title="We Need Hands, Not Rupees"
        subtitle="The gaushala is being rebuilt, so we are not collecting donations right now. What we need is people — and there is more than enough work to go round."
        image={PHOTOS.herdYard.src}
        imagePosition={PHOTOS.herdYard.position}
      />

      {/* ── Why seva, not money ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel text="Why Seva" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Seva is worth more <em className="italic text-gold">than a donation</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                n: '01',
                t: 'Money cannot lift a cow',
                d: 'When a cow goes down, it takes four people and a sling to get her up. No amount of money does that at six in the morning.',
              },
              {
                n: '02',
                t: 'Seva is what lasts',
                d: 'A donation is spent once. Someone who comes back every week becomes part of how this place runs.',
              },
              {
                n: '03',
                t: 'It changes you too',
                d: 'Everyone here started as somebody who turned up once. Rakesh came as a gardener fifteen years ago.',
              },
            ].map((item) => (
              <FadeIn key={item.n} className="h-full">
                <div className="bg-sand rounded-2xl p-7 h-full border border-forest-dark/6">
                  <div className="font-serif text-3xl text-gold leading-none mb-4">{item.n}</div>
                  <h3 className="font-serif text-xl text-forest-dark leading-tight mb-2">{item.t}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed">{item.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Say plainly that donations are closed, so nobody goes looking */}
          <FadeIn delay={0.15}>
            <div className="flex items-start gap-3 bg-white border border-gold/30 rounded-2xl p-5 md:p-6 max-w-3xl mx-auto">
              <Info size={18} className="text-gold flex-shrink-0 mt-0.5" />
              <p className="text-brown/75 text-sm leading-relaxed">
                <strong className="text-forest-dark">We are not taking donations at the moment.</strong>{' '}
                The gaushala is mid-rebuild and we would rather ask for money when we can show you
                exactly what it built. If you want to give something, give a morning — or the things
                listed further down this page.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Ways to give seva ── */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-sand">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <FadeIn direction="left">
                <SectionLabel text="Give Your Time" />
                <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-[1.08] mt-2">
                  Eight ways to
                  <em className="italic text-gold block">be useful here</em>
                </h2>
                <p className="text-brown/65 leading-relaxed mt-6 max-w-md">
                  Fodder before sunrise, sheds to clean, a cow who needs her dressing changed, and a
                  rebuild going on around all of it. Pick whichever one sounds like you.
                </p>

                <figure className="relative mt-9 rounded-2xl overflow-hidden shadow-xl shadow-forest-dark/10 max-w-md">
                  <img
                    src={PHOTOS.calfBanner.src}
                    alt={PHOTOS.calfBanner.alt}
                    style={{ objectPosition: PHOTOS.calfBanner.position }}
                    className="w-full h-36 md:h-40 object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark/85 to-transparent px-5 pt-12 pb-4 text-white/90 font-serif italic text-base">
                    133 cows, every single day.
                  </figcaption>
                </figure>

                <Link
                  to="/volunteers#join"
                  className="group inline-flex items-center gap-2 bg-forest-dark text-white font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 rounded-full hover:bg-gold transition-colors mt-9"
                >
                  Join as a Volunteer
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="border-t border-forest-dark/10">
              {SEVA_ROLES.map((role, i) => (
                <FadeIn key={role.title} delay={(i % 3) * 0.06}>
                  <li className="group relative flex gap-5 md:gap-7 py-7 border-b border-forest-dark/10 transition-colors hover:bg-white/70 lg:px-4 lg:-mx-4 rounded-xl">
                    <span className="font-serif text-2xl text-forest-dark/20 leading-none pt-1 w-9 flex-shrink-0 tabular-nums transition-colors group-hover:text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="w-9 h-9 rounded-full bg-white ring-1 ring-forest-dark/8 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold group-hover:ring-gold">
                          <role.Icon size={16} className="text-gold transition-colors group-hover:text-white" />
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl text-forest-dark leading-snug pt-1">
                          {role.title}
                        </h3>
                      </div>
                      <p className="text-brown/65 text-sm leading-relaxed sm:pl-12 max-w-xl">{role.desc}</p>
                      <span className="inline-flex items-center gap-2 mt-3 sm:ml-12 text-gold text-[10px] tracking-[0.2em] uppercase font-bold">
                        <span className="w-4 h-px bg-gold/50" />
                        {role.commitment}
                      </span>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Things, not rupees ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel text="In Kind" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                If you want to send <em className="italic text-gold">something</em>
              </h2>
              <p className="text-brown/65 leading-relaxed mt-5">
                Send the thing itself rather than the money for it. Call us first so it reaches the
                herd and not a storeroom.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {IN_KIND.map((item, i) => (
              <FadeIn key={item} delay={(i % 3) * 0.06}>
                <div className="flex items-start gap-3 bg-sand rounded-2xl p-5 h-full border border-forest-dark/6">
                  <HandHeart size={17} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-brown/75 text-sm leading-relaxed">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-center text-brown/60 text-sm mt-8">
              Call{' '}
              <a href={CONTACT.phoneHref} className="text-gold font-semibold whitespace-nowrap">
                {CONTACT.phoneDisplay}
              </a>{' '}
              before you send anything.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20 px-6 md:px-12 bg-forest-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              The herd does not need <em className="italic text-gold-light">your money</em>
            </h2>
            <p className="text-white/65 leading-relaxed mb-4 max-w-xl mx-auto">
              It needs somebody to turn up on Tuesday. {VISITS_PAUSED_NOTE}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link
                to="/volunteers#join"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-gold-dark transition-all"
              >
                Join as a Volunteer <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                Talk to Us First
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
