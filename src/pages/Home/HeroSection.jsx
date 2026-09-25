import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PHOTOS } from '../../data';

const ease = [0.22, 1, 0.36, 1];

// The real sanctuary photos are all portrait, so the hero shows them as a portrait
// card beside the headline instead of stretching them full-bleed behind the text.
// Each slide pairs a photo with its own headline — they change together.
const SLIDES = [
  {
    photo: { src: '/cows/shankar.jpg', position: 'center 35%', alt: 'Shankar, rescued from the streets and recovered' },
    title: 'Every cow here',
    accent: 'was found on a street',
    text: 'Injured, abandoned, or only days old. They are treated, fed and kept for life — and none of them is ever sent away.',
  },
  {
    photo: { src: '/nandis/tejas.jpg', position: 'center 40%', alt: 'Tejas, one of our fourteen Nandis' },
    title: 'Fourteen male calves,',
    accent: 'raised beside their mothers',
    text: 'A rarity in the world of gaushalas. We take no milk, so no calf is ever separated from her.',
  },
  {
    photo: { src: '/cows/nandini.jpg', position: 'center 40%', alt: 'Nandini, who stands tall after losing a leg' },
    title: 'Nandini lost a leg.',
    accent: 'She still stands tall.',
    text: 'Her surgery was a success. This is what your hands and your seva make possible, every single day.',
  },
];

const INSET = PHOTOS.heroInset;

const FACTS = [
  { value: '133', label: 'Rescued cows' },
  { value: '14', label: 'Nandis raised with their mothers' },
  { value: 'No milk', label: 'Never taken, not once' },
];

const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease },
});

export default function HeroSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <section className="relative bg-transparent overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-12 md:pb-16 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* ── Copy ── */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div {...rise(0.2)} className="flex items-center justify-center lg:justify-start mb-4">
            <span className="text-gold text-[13px] tracking-[0.5em] uppercase font-black drop-shadow-sm">Gau Seva Sadan</span>
          </motion.div>

          {/* All headlines share one grid cell, so the block keeps the tallest one's height and nothing below jumps */}
          <motion.div {...rise(0.35)} className="grid">
            {SLIDES.map((s, i) => {
              const active = i === idx;
              const Heading = i === 0 ? 'h1' : 'p';
              return (
                <motion.div
                  key={s.title}
                  aria-hidden={!active}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20, scale: active ? 1 : 0.95 }}
                  transition={{ duration: 0.8, ease }}
                  className={`col-start-1 row-start-1 ${active ? '' : 'pointer-events-none'}`}
                >
                  <Heading
                    className="font-serif font-extrabold text-forest-dark leading-[1.02]"
                    style={{ fontSize: 'clamp(2.7rem, 5vw, 4.75rem)' }}
                  >
                    {s.title} <em className="italic text-gold font-bold block">{s.accent}</em>
                  </Heading>
                  <p className="text-forest-dark text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mt-5 leading-relaxed font-medium">
                    {s.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div {...rise(0.65)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-7">
            <Link to="/volunteers" className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white font-bold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-forest/30">
              Join as a Volunteer <ArrowRight size={13} />
            </Link>
            <Link to="/meet-the-cows" className="inline-flex items-center justify-center gap-2 border-2 border-forest-dark text-forest-dark font-bold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest-dark hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300">
              Meet Our Residents
            </Link>
          </motion.div>

          <motion.dl {...rise(0.8)} className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-forest/20 max-w-lg mx-auto lg:mx-0">
            {FACTS.map((f, i) => (
              <motion.div 
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.1), duration: 0.6, ease }}
              >
                <dt className="font-serif font-bold text-3xl md:text-4xl text-forest leading-none">{f.value}</dt>
                <dd className="text-forest-dark text-[11px] md:text-xs leading-snug mt-2 font-bold uppercase tracking-wide">{f.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* ── Photos ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease }}
          className="lg:col-span-5"
        >
          <div className="relative max-w-[26rem] lg:max-w-[30rem] mx-auto lg:mr-0 lg:ml-auto">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-forest/15 ring-1 ring-forest/10 bg-mint">
              {SLIDES.map(({ photo }, i) => (
                <motion.img
                  key={photo.src}
                  src={photo.src}
                  alt={i === idx ? photo.alt : ''}
                  aria-hidden={i !== idx}
                  initial={false}
                  animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 1.05 }}
                  transition={{ opacity: { duration: 1.1, ease }, scale: { duration: 6, ease: 'linear' } }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: photo.position }}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 inset-x-0 flex justify-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === idx ? 'w-7 h-1.5 bg-gold-light' : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>

            {/* Second photo, tucked behind the main card (hidden at lg, where it would cover the copy) */}
            <div className="hidden sm:block lg:hidden xl:block absolute -left-20 lg:-left-28 bottom-16 w-36 lg:w-44 aspect-[3/4] rounded-2xl overflow-hidden ring-4 ring-white shadow-2xl shadow-forest/20">
              <img src={INSET.src} alt={INSET.alt} className="w-full h-full object-cover" style={{ objectPosition: INSET.position }} />
            </div>

            {/* Visit badge */}
            <Link
              to="/volunteers"
              className="absolute -top-5 right-5 sm:-right-5 bg-white ring-1 border border-forest-dark/15 rounded-2xl pl-4 pr-5 py-3 shadow-xl flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
              <span className="text-left">
                <span className="block text-forest-dark text-sm font-bold leading-tight">Volunteers welcome</span>
                <span className="block text-forest-dark text-xs font-semibold">Join the seva</span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
