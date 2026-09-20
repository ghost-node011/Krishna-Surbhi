import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { DONATE_TIERS, PHOTOS } from '../../data';
import { useModal } from '../../context/ModalContext';
import { Check, ArrowRight, Heart, Leaf, Camera, Users, BookOpen, Stethoscope } from 'lucide-react';

const VOLUNTEER_ROLES = [
  { Icon: Heart, title: 'Animal Care Volunteer', desc: 'Feed, groom, and spend time with our residents. The most direct form of service.', commitment: 'Weekends or full weeks' },
  { Icon: Leaf, title: 'Farm & Garden', desc: 'Grow organic feed, maintain the sanctuary grounds, and support sustainable practices.', commitment: '2-day minimum' },
  { Icon: Camera, title: 'Creative & Media', desc: 'Help document stories, create content, and amplify our mission to the world.', commitment: 'Remote or on-site' },
  { Icon: Users, title: 'Welcoming Visitors', desc: 'Walk visitors through the sheds, tell the cows\' stories, and help them feed the herd by hand.', commitment: 'Weekends' },
  { Icon: BookOpen, title: 'Education & Outreach', desc: 'Teach school children, lead awareness workshops, and build community engagement.', commitment: 'Flexible' },
  { Icon: Stethoscope, title: 'Veterinary Volunteers', desc: 'Support our vet team in routine check-ups, medication, and wound care.', commitment: 'Degree required' },
];

const IMPACT_BREAKDOWN = [
  { amount: '₹500', desc: 'Feeds one cow for a full month' },
  { amount: '₹1,500', desc: 'Pays for treatment when a cow falls ill' },
  { amount: '₹5,000', desc: 'Brings one cow home from the roadside' },
  { amount: '₹10,000', desc: 'Covers a month of fodder for a small group' },
  { amount: '₹25,000', desc: 'Carries one cow through a full year' },
  { amount: '₹1,00,000', desc: 'Builds one section of a new shed' },
];

export default function Support() {
  const { openDonate } = useModal();

  return (
    <div className="bg-cream">
      <PageHero
        label="Support"
        title="Feed, Medicine, Shelter"
        subtitle="What you give pays for the fodder, the treatment and the roof over 133 rescued cows. Nothing is taken out of it."
        image={PHOTOS.shedHug.src}
        imagePosition={PHOTOS.shedHug.position}
      />

      {/* ── Donation tiers ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Give" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Two ways to <br/>
                <em className="italic text-gold">stand with the herd</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
            {DONATE_TIERS.map((tier, i) => (
              <FadeIn key={tier.id} delay={i * 0.1}>
                <div className="rounded-3xl p-8 flex flex-col h-full bg-forest-dark text-white shadow-xl shadow-forest-dark/15">
                  <h3 className="font-serif text-2xl mb-1 text-white">{tier.title}</h3>
                  <div className="font-semibold text-xl mb-5 text-gold-light">{tier.amount}</div>
                  <p className="text-sm leading-relaxed mb-6 text-white/70">{tier.description}</p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={13} className="mt-0.5 flex-shrink-0 text-gold-light" />
                        <span className="text-xs leading-relaxed text-white/65">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openDonate(tier)}
                    className="mt-auto w-full py-3.5 rounded-xl font-semibold text-[11px] tracking-wider uppercase transition-all active:scale-95 bg-gold text-white hover:bg-gold-dark shadow-lg"
                  >
                    {tier.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Trust bar */}
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                '80G Tax Exemption',
                'FCRA Registered NGO',
                '100% Secure Donations',
                'Transparent Impact Reports',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-forest/60 text-sm">
                  <Check size={13} className="text-forest flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Where your money goes ── */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="Transparency" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                Where the money <em className="italic text-gold">actually goes</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IMPACT_BREAKDOWN.map((item, i) => (
              <FadeIn key={item.amount} delay={i * 0.07}>
                <div className="bg-sand rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-forest-dark/6">
                  <div className="bg-gold/10 rounded-xl px-3 py-2 flex-shrink-0">
                    <span className="font-serif text-gold font-bold text-lg">{item.amount}</span>
                  </div>
                  <p className="text-brown/65 text-sm leading-relaxed pt-1.5">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volunteer ── */}
      {/* No overflow-hidden on the section itself — it would turn this into a
          scroll container and kill the sticky left column. The decorative wash
          is clipped by its own wrapper instead. */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-sand">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — the invitation, held in place while the roles scroll past */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <FadeIn direction="left">
                <SectionLabel text="Volunteer" />
                <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-[1.08] mt-2">
                  Give your
                  <em className="italic text-gold block">time & heart</em>
                </h2>
                <p className="text-brown/65 leading-relaxed mt-6 max-w-md">
                  Krishna Surabhi is run by a trust, and the work is daily — fodder before sunrise,
                  sheds to clean, a cow who needs her dressing changed. There is always room for
                  more hands.
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

                <button
                  onClick={() => openDonate({ title: 'Volunteer Application' })}
                  className="group inline-flex items-center gap-2 bg-forest-dark text-white font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 rounded-full hover:bg-gold transition-colors mt-9"
                >
                  Apply to Volunteer
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Right — the roles, as an editorial list rather than a card grid */}
          <div className="lg:col-span-7">
            <ol className="border-t border-forest-dark/10">
              {VOLUNTEER_ROLES.map((role, i) => (
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
                      <p className="text-brown/65 text-sm leading-relaxed sm:pl-12 max-w-xl">
                        {role.desc}
                      </p>
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

      {/* ── Corporate ── */}
      <section className="py-16 px-6 md:px-12 bg-forest-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-saffron" />
                <span className="text-gold-light text-[10px] tracking-[0.28em] font-semibold uppercase">Corporate</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
                Partner with us for <em className="italic text-gold-light">meaningful impact</em>
              </h2>
              <p className="text-white/55 leading-relaxed mb-6">
                Corporate partnerships with Krishna Surabhi offer genuine CSR impact, team-building
                experiences, and a brand story that resonates deeply with conscious consumers.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {['Corporate mindfulness days', 'Team volunteering packages', 'Co-branded impact campaigns', 'Annual impact reporting'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="text-gold-light">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:corporate@krishnasurabhi.org" className="inline-flex items-center gap-2 bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-saffron/85 transition-all">
                Partner With Us <ArrowRight size={13} />
              </a>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/hero/web/3.jpg"
                  alt="The herd in the sanctuary yard"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
