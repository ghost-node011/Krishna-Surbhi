import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../../components/FadeIn';
import TeamPortrait from '../../components/TeamPortrait';
import { teamByGroup } from '../../data';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

// Driven straight off the volunteer list — add someone with group: 'volunteer'
// in data/index.js and they appear in this slider automatically, no edit here.
const VOLUNTEERS = teamByGroup('volunteer');

export default function VolunteerSpotlight() {
  const [idx, setIdx] = useState(0);
  const count = VOLUNTEERS.length;

  const go = useCallback(
    (dir) => setIdx((p) => (p + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (count < 2) return undefined;
    const t = setInterval(() => setIdx((p) => (p + 1) % count), 7000);
    return () => clearInterval(t);
  }, [idx, count]);

  if (count === 0) return null;
  const v = VOLUNTEERS[idx];

  return (
    <section className="bg-sand py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
                <span className="text-gold text-[12px] tracking-[0.5em] font-black uppercase">
                  Our Volunteers
                </span>
                <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
              </div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark leading-tight">
                The people who <em className="italic text-gold font-bold">show up</em>
              </h2>
            </div>

            {count > 1 && (
              <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous volunteer"
                  className="w-10 h-10 rounded-full border border-forest-dark/20 text-forest-dark/70 flex items-center justify-center hover:bg-forest-dark hover:text-white hover:border-forest-dark transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next volunteer"
                  className="w-10 h-10 rounded-full border border-forest-dark/20 text-forest-dark/70 flex items-center justify-center hover:bg-forest-dark hover:text-white hover:border-forest-dark transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Portrait — in the sanctuary's own arch frame */}
          <div className="md:col-span-4">
            <div className="relative max-w-[260px] mx-auto md:mx-0">
              <div className="aspect-[4/5] overflow-hidden shadow-xl shadow-forest-dark/10 ring-8 ring-white bg-mint arch">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="w-full h-full"
                  >
                    <TeamPortrait person={v} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] tracking-widest uppercase font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                {v.classification || 'Volunteer'}
              </div>
            </div>
          </div>

          {/* Words */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease }}
              >
                <blockquote className="font-serif font-bold text-2xl md:text-3xl text-forest-dark leading-[1.4] italic mb-6">
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p className="text-forest-dark/80 leading-relaxed mb-7 max-w-xl font-medium">{v.summary}</p>
                <div>
                  <div className="font-serif font-bold text-xl text-forest-dark">{v.name}</div>
                  <div className="text-gold text-xs tracking-widest uppercase font-bold">
                    {v.descriptor || v.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4 flex-wrap mt-8 pt-7 border-t border-forest-dark/10">
              {/* Every volunteer, as a jump-to strip */}
              {count > 1 && (
                <div className="flex items-center gap-2">
                  {VOLUNTEERS.map((person, i) => (
                    <button
                      key={person.id}
                      onClick={() => setIdx(i)}
                      aria-label={person.name}
                      aria-current={i === idx}
                      title={person.name}
                      className={`w-11 h-11 rounded-full overflow-hidden bg-mint transition-all ${
                        i === idx
                          ? 'ring-2 ring-gold ring-offset-2 ring-offset-sand'
                          : 'opacity-55 hover:opacity-100'
                      }`}
                    >
                      <TeamPortrait person={person} />
                    </button>
                  ))}
                </div>
              )}

              <Link
                to="/volunteers"
                className="inline-flex items-center gap-2 bg-forest-dark text-white text-[11px] tracking-wider font-black uppercase px-7 py-3.5 rounded-full hover:bg-gold hover:scale-105 hover:shadow-xl transition-all duration-300 ml-auto"
              >
                All Our Volunteers <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
