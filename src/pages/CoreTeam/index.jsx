import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../../components/FadeIn';
import TeamPortrait from '../../components/TeamPortrait';
import { GroupHeader, FeatureCard, PersonCard } from '../../components/TeamCards';
import { getTeamMember, teamByGroup } from '../../data';

// Per the founder (Recording 3): Dr. C.B. Singh is our Chief Patron and must be mentioned as such —
// so he leads this page, and the trustees grid below skips him.
const PATRON = getTeamMember('cb-singh');
const FOUNDATION = teamByGroup('foundation');
const TRUSTEE_LIST = teamByGroup('trustee').filter((p) => p.id !== PATRON.id);
const MEMBERS = teamByGroup('member');

const ease = [0.22, 1, 0.36, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease },
});

export default function CoreTeam() {
  return (
    <div className="min-h-screen">

      {/* ── Hero: our Chief Patron ── */}
      <section className="relative bg-forest-dark pt-24 md:pt-28 pb-12 md:pb-16 px-6 md:px-12 overflow-hidden">
        <div aria-hidden="true" className="absolute -top-48 -right-48 w-[40rem] h-[40rem] rounded-full bg-forest/50 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-saffron/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <motion.div {...rise(0.15)} className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
              <span className="text-gold-light text-[12px] tracking-[0.5em] uppercase font-black">Our Core Team</span>
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
            </motion.div>

            <motion.h1
              {...rise(0.3)}
              className="font-serif font-bold text-white leading-[1.02]"
              style={{ fontSize: 'clamp(2.7rem, 5vw, 4.75rem)' }}
            >
              {PATRON.name}
            </motion.h1>
            <motion.div {...rise(0.4)} className="text-gold-light text-xs md:text-sm tracking-[0.22em] uppercase font-black mt-4">
              {PATRON.role}
            </motion.div>

            <motion.blockquote
              {...rise(0.5)}
              className="font-serif font-bold text-2xl md:text-[1.75rem] italic text-white leading-snug border-l-2 border-saffron pl-6 mt-10 max-w-xl mx-auto lg:mx-0 text-left"
            >
              "{PATRON.quote}"
            </motion.blockquote>
            <motion.p {...rise(0.6)} className="text-white text-base md:text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0 font-medium">
              {PATRON.story[2]}
            </motion.p>

            <motion.div {...rise(0.7)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-9">
              <Link
                to={`/team/${PATRON.id}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                Read His Story <ArrowRight size={13} />
              </Link>
              <a
                href="#team"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white hover:text-forest-dark hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Meet the Core Team
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative max-w-[22rem] lg:max-w-[26rem] mx-auto lg:mr-0 lg:ml-auto">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-[#EAE6DE]">
                <TeamPortrait person={PATRON} />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-saffron text-white text-[10px] tracking-widest uppercase font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                Chief Patron
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Trust ── */}
      <section id="team" className="bg-transparent py-12 md:py-16 px-6 md:px-12 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-serif font-bold text-2xl md:text-3xl text-forest-dark leading-snug text-center max-w-3xl mx-auto mb-8 md:mb-10">
              Krishna Surabhi is a trust. Alongside our core committee, a team of trustees helps run the
              organisation — they are the ones on the ground, doing the work every day. They are
              the <em className="italic text-gold font-bold">backbone of Krishna Surabhi</em>.
            </p>
          </FadeIn>

          {/* The foundation — without them there would be no Krishna Surabhi */}
          <FadeIn>
            <GroupHeader
              label="The Foundation"
              title="The ones who made it possible"
              text="From buying the land and laying the first brick to the paperwork that keeps the sanctuary running."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {FOUNDATION.map((person, i) => (
              <FadeIn key={person.id} delay={i * 0.1} className="h-full">
                <FeatureCard person={person} />
              </FadeIn>
            ))}
          </div>

          {/* Trustees */}
          <div id="trustees" className="mt-10 md:mt-14 scroll-mt-24">
            <FadeIn>
              <GroupHeader
                label="Our Trustees"
                title="Guiding the Trust, every day"
                text="Rescuers, healers and guides — each brings their own seva to the welfare of our cows."
              />
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {TRUSTEE_LIST.map((person, i) => (
                <FadeIn key={person.id} delay={i * 0.08}>
                  <PersonCard person={person} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Members + a pointer to the volunteers page */}
          <FadeIn delay={0.1}>
            <div className="mt-10 md:mt-14 bg-white/60 border border-forest/10 rounded-3xl p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex-1">
                <div className="text-forest-dark text-[11px] tracking-[0.3em] uppercase font-black mb-5">Also part of the family</div>
                <ul className="flex flex-wrap gap-x-10 gap-y-4">
                  {MEMBERS.map((m) => (
                    <li key={m.id} className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-[#EAE6DE] flex-shrink-0 ring-2 ring-white shadow-sm">
                        <TeamPortrait person={m} />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-xl text-forest-dark leading-tight">{m.name}</div>
                        <div className="text-forest-dark text-sm leading-snug font-medium">{m.summary}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t md:pt-0 md:border-t-0 md:pl-12 md:border-l border-forest/10">
                <p className="font-serif font-bold text-xl text-forest-dark leading-snug mb-4">Meet the hands behind the daily seva</p>
                <Link
                  to="/volunteers"
                  className="inline-flex items-center gap-2 bg-forest text-white font-black text-[11px] tracking-wider uppercase px-6 py-3 rounded-full hover:bg-forest-dark hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Our Volunteers <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
