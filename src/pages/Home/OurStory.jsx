import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../../components/FadeIn';

export default function OurStory() {
  return (
    <section id="our-story" className="py-14 md:py-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
            <span className="text-gold text-[12px] tracking-[0.5em] font-black uppercase">Our Story</span>
            <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Left — editorial text block */}
          <div className="md:col-span-5">
            <FadeIn direction="left">
              <h2 className="font-serif font-bold text-5xl md:text-6xl text-forest-dark leading-[1.05] mb-8">
                Born from one<br />small love<br />
                <em className="italic text-gold font-bold">for animals</em>
              </h2>

              <p className="text-forest-dark leading-relaxed mb-5 font-medium">
                It started with Rakhi's small love for animals in Guwara, Rajasthan. No grand plan —
                just one woman who couldn't look away, and kept showing up.
              </p>
              <p className="text-forest-dark leading-relaxed mb-10 font-medium">
                That love became Krishna Surabhi — today a home for our rescued cows, and a place of
                healing for the humans who visit them.
              </p>

              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 text-forest font-bold text-sm group"
              >
                Read our full story
                <span className="w-2 h-2 rotate-45 bg-forest group-hover:scale-125 transition-all duration-300" />
              </Link>
            </FadeIn>
          </div>

          {/* Center — large year element */}
          <div className="md:col-span-2 flex md:flex-col items-center justify-center gap-4">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1.2 }}
                  className="font-serif font-light leading-none text-forest/12 select-none"
                  style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', writingMode: 'vertical-rl' }}
                >
                  2018
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right — quote + image */}
          <div className="md:col-span-5">
            <FadeIn direction="right" delay={0.15}>

              {/* Pull quote */}
              <div className="bg-forest rounded-2xl p-8 mb-6">
                <div className="font-serif text-5xl text-saffron/40 leading-none mb-2 select-none">"</div>
                <blockquote className="font-serif font-bold text-xl text-white italic leading-relaxed mb-4">
                  I may be soft-spoken, but I will fight the whole world for my cows.
                </blockquote>
                <cite className="text-white text-sm not-italic font-semibold">
                  — Rakhi, Founder
                </cite>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: '500+', label: 'Cows' },
                  { num: '7 yrs', label: 'Journey' },
                  { num: '12 ac', label: 'Land' },
                ].map((s) => (
                  <div key={s.label} className="bg-mint/50 rounded-xl p-4 text-center">
                    <div className="font-serif font-bold text-2xl text-forest-dark">{s.num}</div>
                    <div className="text-forest-dark text-[10px] tracking-widest uppercase mt-0.5 font-bold">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
