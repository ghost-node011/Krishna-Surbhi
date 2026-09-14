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
    photo: PHOTOS.restingCow,
    title: 'Where rescued cows',
    accent: 'are loved back to life',
    text: 'A home for 133 rescued cows in Guwara, Rajasthan — where every one of them is fed, treated and loved, every single day.',
  },
  {
    photo: PHOTOS.shedHug,
    title: 'No cow should ever feel',
    accent: 'abandoned, hungry or unsafe',
    text: 'That is Rakhi’s only dream — and why we are here every single day, for their rescue, their food, their treatment and their love.',
  },
  {
    photo: PHOTOS.yardCalm,
    title: 'Mothers and calves',
    accent: 'stay together, always',
    text: 'Krishna Surbhi does not take milk from its cows. Every cow here lives out her life in peace, with her family around her.',
  },
];
const INSET = PHOTOS.visitorCow;

const FACTS = [
  { value: '133', label: 'Rescued cows' },
  { value: 'No milk', label: 'Mothers & calves together' },
  { value: 'Every day', label: 'Rescue, food, care & love' },
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
    <section className="relative bg-forest-dark overflow-hidden">
      <div aria-hidden="true" className="absolute -top-48 -right-48 w-[40rem] h-[40rem] rounded-full bg-forest/50 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-saffron/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-16 md:pb-24 lg:min-h-screen grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">

        {/* ── Copy ── */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div {...rise(0.2)} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="w-8 h-px bg-saffron/70" />
            <span className="text-saffron text-[10.5px] tracking-[0.34em] uppercase font-bold">The Cow-Love Sanctuary</span>
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
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : 14 }}
                  transition={{ duration: 0.8, ease }}
                  className={`col-start-1 row-start-1 ${active ? '' : 'pointer-events-none'}`}
                >
                  <Heading
                    className="font-serif text-white leading-[1.02]"
                    style={{ fontSize: 'clamp(2.7rem, 5vw, 4.75rem)' }}
                  >
                    {s.title} <em className="italic text-saffron block">{s.accent}</em>
                  </Heading>
                  <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mt-6 leading-relaxed">
                    {s.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div {...rise(0.65)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-9">
            <Link to="/visit" className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream transition-all shadow-lg">
              Plan Your Visit <ArrowRight size={13} />
            </Link>
            <Link to="/meet-the-cows" className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all">
              Meet the Family
            </Link>
          </motion.div>

          <motion.dl {...rise(0.8)} className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="font-serif text-2xl md:text-3xl text-white leading-none">{f.value}</dt>
                <dd className="text-white/50 text-[11px] md:text-xs leading-snug mt-2">{f.label}</dd>
              </div>
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
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-forest">
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
                    className={`rounded-full transition-all duration-300 ${i === idx ? 'w-7 h-1.5 bg-saffron' : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>

            {/* Second photo, tucked behind the main card (hidden at lg, where it would cover the copy) */}
            <div className="hidden sm:block lg:hidden xl:block absolute -left-20 lg:-left-28 bottom-16 w-36 lg:w-44 aspect-[3/4] rounded-2xl overflow-hidden ring-4 ring-forest-dark shadow-2xl">
              <img src={INSET.src} alt={INSET.alt} className="w-full h-full object-cover" style={{ objectPosition: INSET.position }} />
            </div>

            {/* Visit badge */}
            <Link
              to="/visit#book"
              className="absolute -top-5 right-5 sm:-right-5 bg-cream rounded-2xl pl-4 pr-5 py-3 shadow-xl flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-forest-light flex-shrink-0" />
              <span className="text-left">
                <span className="block text-forest-dark text-sm font-semibold leading-tight">Visitors welcome</span>
                <span className="block text-brown/55 text-xs">Book a Gau Seva visit</span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
