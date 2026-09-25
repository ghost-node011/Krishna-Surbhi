import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../../components/FadeIn';
import { TESTIMONIALS } from '../../data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-14 md:py-20 overflow-hidden relative bg-forest-dark">
      {/* Decorative serif quote mark — intentionally very faint */}
      <div
        className="absolute top-8 right-8 md:right-16 font-serif select-none pointer-events-none leading-none"
        style={{ fontSize: '18rem', color: 'rgba(255,255,255,0.04)' }}
      >
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
            <span className="text-gold-light text-[12px] tracking-[0.5em] font-black uppercase">Visitor Stories</span>
            <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
          </div>
        </FadeIn>

        <div className="min-h-[180px] flex flex-col justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-white italic leading-[1.3] max-w-4xl mb-6">
                "{TESTIMONIALS[current].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-saffron/30 border border-saffron/50 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold-light font-bold text-base">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{TESTIMONIALS[current].name}</div>
                  <div className="text-white text-xs mt-0.5 font-semibold">
                    {TESTIMONIALS[current].role} · {TESTIMONIALS[current].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots + Google rating */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-1.5 bg-saffron' : 'w-2 h-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white/12 border border-white/20 rounded-full px-4 py-2">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={11} fill="#E0BC7A" className="text-gold-light" />
              ))}
            </div>
            <span className="text-white text-xs font-bold">4.9 on Google · 240+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
