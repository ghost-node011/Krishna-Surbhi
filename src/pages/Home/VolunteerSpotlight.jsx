import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import TeamPortrait from '../../components/TeamPortrait';
import { VOLUNTEER_SPOTLIGHT } from '../../data';
import { ArrowRight } from 'lucide-react';

export default function VolunteerSpotlight() {
  const v = VOLUNTEER_SPOTLIGHT;

  return (
    <section className="bg-sand py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">

        <FadeIn direction="left" className="md:col-span-4">
          <div className="relative max-w-[260px] mx-auto md:mx-0">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl ring-8 ring-white bg-[#EAE6DE]">
              <TeamPortrait person={v} />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-[10px] tracking-widest uppercase font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
              Volunteer Spotlight
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15} className="md:col-span-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.3em] font-semibold uppercase">A Life That Gives Freely</span>
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-forest-dark leading-[1.4] italic mb-6">
            "{v.quote}"
          </blockquote>
          <p className="text-brown/70 leading-relaxed mb-7 max-w-xl">
            {v.summary}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <div className="font-serif text-xl text-forest-dark">{v.name}</div>
              <div className="text-saffron text-xs tracking-widest uppercase font-semibold">{v.descriptor}</div>
            </div>
            <Link
              to="/volunteers"
              className="inline-flex items-center gap-2 bg-forest text-white text-[11px] tracking-wider font-semibold uppercase px-6 py-3 rounded-full hover:bg-forest-dark transition-all ml-auto"
            >
              Read Our Volunteer Stories <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
