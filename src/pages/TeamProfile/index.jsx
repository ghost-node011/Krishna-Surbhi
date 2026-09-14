import { useParams, Navigate, Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import TeamPortrait from '../../components/TeamPortrait';
import { TEAM, getTeamMember, profilePath } from '../../data';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';

// One page per person in TEAM — served at /team/:id, and at /volunteers/:id for the volunteers.
export default function TeamProfile() {
  const { id } = useParams();
  const person = getTeamMember(id);

  if (!person) return <Navigate to="/core-team" replace />;

  const others = TEAM.filter((p) => p.id !== person.id && p.story);
  const back = person.group === 'volunteer'
    ? { to: '/volunteers', label: 'Our Volunteers' }
    : { to: '/core-team', label: 'Our Core Team' };

  return (
    <div className="bg-cream">

      {/* ── Header: portrait + name + pull quote ── */}
      <section className="bg-forest-dark pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <FadeIn className="md:col-span-7 order-2 md:order-1">
            <Link
              to={back.to}
              className="inline-flex items-center gap-1.5 text-white/45 text-[11px] font-semibold uppercase tracking-wider mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft size={12} /> {back.label}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-saffron flex-shrink-0" />
              <span className="text-saffron text-[10px] tracking-[0.3em] font-semibold uppercase">{person.classification}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.05] mb-3">{person.name}</h1>
            <div className="text-white/55 text-xs tracking-widest uppercase font-semibold mb-10">{person.role}</div>
            {person.quote && (
              <blockquote className="font-serif text-2xl md:text-[1.75rem] italic text-white/85 leading-snug border-l-2 border-saffron pl-6 max-w-xl">
                "{person.quote}"
              </blockquote>
            )}
          </FadeIn>

          <FadeIn direction="left" delay={0.1} className="md:col-span-5 order-1 md:order-2">
            <div className="relative max-w-[340px] mx-auto">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[#D4DED4]">
                <TeamPortrait person={person} />
              </div>
              <div className="absolute -bottom-4 left-6 bg-saffron text-white text-[10px] tracking-widest uppercase font-bold px-4 py-2 rounded-full shadow-lg">
                Krishna Surbhi
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            {person.story ? (
              <>
                <div className="space-y-6">
                  {person.story.map((para, i) => (
                    <p
                      key={i}
                      className={i === 0
                        ? 'font-serif text-2xl md:text-[1.6rem] text-forest-dark leading-relaxed'
                        : 'text-brown/75 text-lg leading-relaxed'}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-3xl border border-forest/10 p-8 md:p-10 text-center">
                <p className="font-serif text-2xl text-forest-dark leading-relaxed mb-5">{person.summary}</p>
                <span className="inline-block bg-saffron/15 text-saffron text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  Full story coming soon
                </span>
              </div>
            )}

            <div className="flex items-center gap-4 flex-wrap mt-12 pt-8 border-t border-forest/10">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-forest-dark transition-colors"
              >
                <Heart size={13} fill="white" /> Support Gau Seva
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-7 py-3.5 rounded-full hover:bg-forest hover:text-white transition-all"
              >
                Plan Your Visit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── More of the family ── */}
      <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel text="The Krishna Surbhi Family" />
            <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mb-10">
              More of the people <em className="italic text-forest">behind the seva</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {others.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.06}>
                <Link to={profilePath(p)} className="group block">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#D4DED4] mb-3 shadow-sm">
                    <TeamPortrait person={p} className="group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="font-serif text-lg text-forest-dark leading-tight group-hover:text-forest transition-colors">{p.name}</div>
                  <div className="text-saffron text-[10px] tracking-widest uppercase font-semibold mt-1">{p.role}</div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <Link
              to="/core-team"
              className="inline-flex items-center gap-2 text-forest text-xs font-semibold uppercase tracking-wider mt-10 hover:gap-3 transition-all"
            >
              See the whole core team <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
