import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import TeamPortrait from '../../components/TeamPortrait';
import { TIMELINE, FOUNDER, PHOTOS, TEAM } from '../../data';
import { ArrowRight, Target, Sparkles } from 'lucide-react';

// The people have their own pages (/core-team and /volunteers); Our Story just points to them.
const PEOPLE = [
  {
    href: '/core-team',
    label: 'Our Core Team',
    title: 'The Trust behind the sanctuary',
    text: 'Our Chief Patron Dr. C.B. Singh, the people who made Krishna Surbhi possible, and our trustees — who guide the sanctuary and keep it running.',
    cta: 'Meet the core team',
    people: TEAM.filter((p) => p.group === 'foundation' || p.group === 'trustee'),
  },
  {
    href: '/volunteers',
    label: 'Our Volunteers',
    title: 'The hands behind the daily seva',
    text: 'Rakesh and Pooja give their time to feeding, cleaning and caring for our rescued cows.',
    cta: 'Meet our volunteers',
    people: TEAM.filter((p) => p.group === 'volunteer'),
  },
];

export default function OurStory() {
  return (
    <div className="bg-cream ">
      <PageHero
        label="Krishna Surbhi"
        title="Our Story"
        subtitle="One woman's small love for animals, grown into a home for 133 rescued cows in Guwara, Rajasthan."
        image={PHOTOS.cowCuddle.src}
        imagePosition={PHOTOS.cowCuddle.position}
      />

      {/* ── Founding Story ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-[#D4DED4]">
                <TeamPortrait person={FOUNDER} />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-saffron text-white rounded-2xl px-5 py-4 shadow-xl hidden sm:block">
                <div className="font-serif text-3xl font-light leading-none">133</div>
                <div className="text-white/80 text-[10px] mt-1 leading-snug">rescued cows<br/>call it home</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <SectionLabel text="The Beginning" />
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
              A small love for animals, <br/>
              <em className="italic text-forest">and a life changed forever</em>
            </h2>
            {FOUNDER.message.map((para) => (
              <p key={para} className="text-brown/75 leading-relaxed mb-5">{para}</p>
            ))}
            <blockquote className="border-l-4 border-saffron pl-5 py-1 my-8">
              <p className="font-serif text-xl italic text-forest-dark leading-relaxed">"{FOUNDER.quote}"</p>
              <cite className="text-forest/50 text-sm mt-2 block not-italic">— {FOUNDER.name}, {FOUNDER.role}</cite>
            </blockquote>
            <Link
              to="/core-team"
              className="inline-flex items-center gap-2 text-forest text-[11px] font-semibold uppercase tracking-wider hover:gap-3 transition-all"
            >
              Meet the people who made it possible <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 md:py-24 px-6 bg-forest-dark">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-saffron" />
                <span className="text-saffron text-[10.5px] tracking-[0.3em] font-semibold uppercase">Mission & Vision</span>
                <div className="w-8 h-px bg-saffron" />
              </div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                Icon: Target,
                heading: 'Our Mission',
                text: 'To rescue, rehabilitate, and provide lifelong sanctuary to abused and abandoned cows in India — and to share the profound healing power of the human-bovine bond with all who seek it.',
              },
              {
                Icon: Sparkles,
                heading: 'Our Vision',
                text: 'A world where every cow is treated with sacred reverence, and where the ancient wisdom of the human-animal connection is accessible to all who need healing, belonging, and peace.',
              },
            ].map((item) => (
              <FadeIn key={item.heading} delay={0.1}>
                <div className="bg-white/8 border border-white/12 rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-saffron/15 border border-saffron/25 flex items-center justify-center mb-5">
                    <item.Icon size={20} className="text-saffron" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-4">{item.heading}</h3>
                  <p className="text-white/55 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Our Journey" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2">
                Seven years of <em className="italic text-forest">sacred work</em>
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-forest/15 md:-translate-x-px" />

            {TIMELINE.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <FadeIn key={item.year} delay={i * 0.08}>
                  <div className={`relative flex gap-8 mb-10 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>

                    {/* Desktop: spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-saffron border-2 border-cream -translate-x-1.5 md:-translate-x-1.5 z-10" />

                    {/* Card */}
                    <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isRight ? 'md:pl-10' : 'md:pr-10'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-forest/6 hover:shadow-md transition-shadow">
                        <span className="inline-block bg-saffron text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl text-forest-dark mb-2">{item.title}</h3>
                        <p className="text-brown/65 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The people — each group has its own page ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="The People" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2">
                The backbone of <em className="italic text-forest">Krishna Surbhi</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {PEOPLE.map((group, i) => (
              <FadeIn key={group.href} delay={i * 0.1} className="h-full">
                <Link
                  to={group.href}
                  className="group flex flex-col h-full bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-forest/5 hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="flex -space-x-3 mb-8">
                    {group.people.map((p) => (
                      <div key={p.id} title={p.name} className="w-11 h-11 rounded-full ring-4 ring-white overflow-hidden bg-[#D4DED4]">
                        <TeamPortrait person={p} />
                      </div>
                    ))}
                  </div>
                  <div className="text-saffron text-[10px] tracking-[0.3em] uppercase font-bold mb-2">{group.label}</div>
                  <h3 className="font-serif text-3xl text-forest-dark leading-tight mb-3">{group.title}</h3>
                  <p className="text-brown/65 leading-relaxed mb-8">{group.text}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-forest text-[11px] font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    {group.cta} <ArrowRight size={13} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark">
          <img
            src={PHOTOS.yardCalm.src}
            alt={PHOTOS.yardCalm.alt}
            style={{ objectPosition: PHOTOS.yardCalm.position }}
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
              Be part of <em className="italic text-saffron">this story</em>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Whether you visit, volunteer, donate, or simply share our mission — you become part of
              Krishna Surbhi's living story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/visit"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream transition-all"
              >
                Visit Us <ArrowRight size={14} />
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center justify-center gap-2 bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-saffron/85 transition-all"
              >
                Join the Community <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
