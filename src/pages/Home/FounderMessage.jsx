import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import TeamPortrait from '../../components/TeamPortrait';
import { ArrowRight } from 'lucide-react';
import { FOUNDER, TEAM, PHOTOS } from '../../data';

const ALONGSIDE = TEAM.filter((p) => p.group === 'foundation' || p.group === 'trustee');

export default function FounderMessage() {
  return (
    <section className="bg-transparent py-14 md:py-18 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* Founder portrait */}
        <FadeIn direction="left" className="md:col-span-5">
          <div className="relative max-w-[340px] mx-auto md:mx-0">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl ring-8 ring-white bg-[#EAE6DE]">
              <TeamPortrait person={FOUNDER} />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-[10px] tracking-widest uppercase font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
              Founder
            </div>
          </div>
        </FadeIn>

        {/* Message */}
        <FadeIn direction="right" delay={0.15} className="md:col-span-7">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
            <span className="text-gold text-[12px] tracking-[0.5em] font-black uppercase">A Message from Our Founder</span>
            <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
          </div>
          <blockquote className="font-serif font-bold text-2xl md:text-3xl text-forest-dark leading-[1.4] italic mb-6">
            "{FOUNDER.quote}"
          </blockquote>
          {FOUNDER.message.slice(0, 2).map((para) => (
            <p key={para} className="text-forest-dark leading-relaxed mb-4 max-w-xl font-medium">{para}</p>
          ))}
          <div className="flex items-center gap-4 flex-wrap mt-7">
            <div>
              <div className="font-serif font-bold text-xl text-forest-dark">{FOUNDER.name}</div>
              <div className="text-saffron text-xs tracking-widest uppercase font-bold">{FOUNDER.role}</div>
            </div>
            <Link
              to="/our-story"
              className="inline-flex items-center gap-2 border-2 border-forest-dark text-forest-dark text-[11px] tracking-wider font-black uppercase px-7 py-3.5 rounded-full hover:bg-forest-dark hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ml-auto"
            >
              Read Our Story <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-forest/20">
            <div className="text-forest-dark text-[11px] tracking-[0.3em] uppercase font-black mb-3">
              Alongside the people who made it possible
            </div>
            <Link to="/core-team" className="group inline-flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-3">
                {ALONGSIDE.map((p) => (
                  <div key={p.id} title={p.name} className="w-11 h-11 rounded-full ring-2 ring-[#F8F7F4] overflow-hidden bg-[#EAE6DE]">
                    <TeamPortrait person={p} />
                  </div>
                ))}
              </div>
              <span className="text-forest-dark text-sm font-bold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Meet the backbone of Krishna Surabhi <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* The sanctuary's own photograph — mothers and calves, never separated */}
      <FadeIn delay={0.2}>
        <figure className="relative mt-12 md:mt-16 -mb-14 md:-mb-18 -mx-6 md:-mx-12 h-48 md:h-64 overflow-hidden">
          <img
            src={PHOTOS.calfBanner.src}
            alt={PHOTOS.calfBanner.alt}
            style={{ objectPosition: PHOTOS.calfBanner.position }}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark/80 to-transparent text-white font-serif italic text-lg md:text-2xl text-center px-6 pb-6 pt-16">
            We do not take milk. Every calf drinks her mother's.
          </figcaption>
        </figure>
      </FadeIn>
    </section>
  );
}
