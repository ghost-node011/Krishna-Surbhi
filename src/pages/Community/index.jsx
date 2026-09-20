import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, Heart, HandHeart, Sprout } from 'lucide-react';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import TeamPortrait from '../../components/TeamPortrait';
import { GALLERY, PHOTOS, FOUNDER, TEAM } from '../../data';

// Real voices only — every quote below is one this person actually gave us.
const VOICES = [
  FOUNDER,
  ...['yagna', 'sharma', 'pooja'].map((id) => TEAM.find((p) => p.id === id)).filter(Boolean),
];

const WAYS = [
  {
    Icon: Heart,
    title: 'Come and sit with them',
    text: 'Spend a morning at the sanctuary. Meet the herd, help with the feed, and stay as long as you like.',
    to: '/contact',
    cta: 'Ask about visiting',
  },
  {
    Icon: HandHeart,
    title: 'Give your time',
    text: 'Fodder, feeding, cleaning the sheds, caring for the sick — the daily seva is always short of hands.',
    to: '/volunteers',
    cta: 'Volunteer with us',
  },
  {
    Icon: Sprout,
    title: 'Support the work',
    text: 'Feed, medicine, treatment and shelter for 133 rescued cows — every contribution goes straight to their care.',
    to: '/support',
    cta: 'Support the sanctuary',
  },
];

function Lightbox({ index, onClose, onStep }) {
  const photo = GALLERY[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-forest-dark/95 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      <button onClick={onClose} aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/25 text-white/80 flex items-center justify-center hover:bg-white/10 transition-colors">
        <X size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onStep(-1); }} aria-label="Previous photo"
        className="absolute left-3 md:left-8 w-11 h-11 rounded-full border border-white/25 text-white/80 flex items-center justify-center hover:bg-white/10 transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onStep(1); }} aria-label="Next photo"
        className="absolute right-3 md:right-8 w-11 h-11 rounded-full border border-white/25 text-white/80 flex items-center justify-center hover:bg-white/10 transition-colors">
        <ChevronRight size={20} />
      </button>

      <figure className="max-w-4xl w-full text-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[75vh] w-auto mx-auto rounded-xl shadow-2xl object-contain"
        />
        <figcaption className="text-white/70 text-sm mt-5">
          {photo.caption}
          <span className="text-white/35 ml-3">{index + 1} / {GALLERY.length}</span>
        </figcaption>
      </figure>
    </motion.div>
  );
}

export default function Community() {
  const [open, setOpen] = useState(null);
  const step = useCallback(
    (dir) => setOpen((p) => (p === null ? p : (p + dir + GALLERY.length) % GALLERY.length)),
    [],
  );

  return (
    <div className="bg-white">
      <PageHero
        label="Community"
        title="Life at the Sanctuary"
        subtitle="Photographs from our own yard, the voices of the people who keep it running, and the ways you can be part of it."
        image={PHOTOS.herdYard.src}
        imagePosition={PHOTOS.herdYard.position}
      />

      {/* ── Gallery ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel text="Gallery" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Glimpses of the <em className="italic text-gold">sanctuary</em>
              </h2>
              <p className="text-brown/60 mt-4 leading-relaxed">
                Every photograph here was taken at Krishna Surabhi — no stock images, no staging.
              </p>
            </div>
          </FadeIn>

          {/* Three explicit columns rather than CSS `columns`: the motion wrappers
              break column flow and leave a hole in the middle of the grid. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex flex-col gap-5">
                {GALLERY.filter((_, i) => i % 3 === col).map((photo, row) => {
                  const index = row * 3 + col;
                  return (
                    <FadeIn key={photo.src} delay={row === 0 ? col * 0.08 : 0}>
                      <button
                        onClick={() => setOpen(GALLERY.indexOf(photo))}
                        className="group relative block w-full overflow-hidden bg-mint shadow-sm hover:shadow-xl transition-shadow duration-500 arch"
                        style={{ aspectRatio: index % 4 === 0 ? '3 / 4' : index % 4 === 2 ? '1 / 1' : '4 / 5' }}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          style={{ objectPosition: photo.imagePosition || 'center 40%' }}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
                          loading="lazy"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="absolute inset-x-0 bottom-0 p-5 text-left text-white text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          {photo.caption}
                        </span>
                      </button>
                    </FadeIn>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voices ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sand">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Voices" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                The people who <em className="italic text-gold">keep it running</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {VOICES.map((v, i) => (
              <FadeIn key={v.name} delay={(i % 2) * 0.1} className="h-full">
                <figure className="bg-white rounded-2xl p-7 md:p-8 h-full border border-forest-dark/6 shadow-sm flex flex-col">
                  <div className="font-serif text-4xl text-gold/35 leading-none mb-3 select-none">"</div>
                  <blockquote className="font-serif text-lg md:text-xl text-forest-dark leading-relaxed italic flex-grow">
                    {v.quote}
                  </blockquote>
                  <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-forest-dark/8">
                    <span className="w-11 h-11 rounded-full overflow-hidden bg-mint flex-shrink-0">
                      <TeamPortrait person={v} />
                    </span>
                    <span>
                      <span className="block font-serif text-lg text-forest-dark leading-tight">{v.name}</span>
                      <span className="block text-gold text-[10px] tracking-[0.22em] uppercase font-semibold mt-0.5">{v.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways to be part of it ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Join Us" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Three ways to <em className="italic text-gold">be part of it</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {WAYS.map((way, i) => (
              <FadeIn key={way.title} delay={i * 0.1} className="h-full">
                <Link
                  to={way.to}
                  className="group bg-white rounded-2xl p-7 h-full border border-forest-dark/8 shadow-sm hover:shadow-md hover:border-gold/40 transition-all flex flex-col"
                >
                  <span className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <way.Icon size={19} className="text-gold" />
                  </span>
                  <h3 className="font-serif text-xl text-forest-dark mb-3">{way.title}</h3>
                  <p className="text-brown/65 text-sm leading-relaxed mb-6 flex-grow">{way.text}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-[11px] font-bold tracking-wider uppercase">
                    {way.cta}
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark">
          <img
            src={PHOTOS.calfBanner.src}
            alt={PHOTOS.calfBanner.alt}
            style={{ objectPosition: PHOTOS.calfBanner.position }}
            className="w-full h-full object-cover opacity-35"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
              Mothers and calves <em className="italic text-gold-light">stay together here</em>
            </h2>
            <p className="text-white/65 mb-9 leading-relaxed">
              Krishna Surabhi does not take milk from its cows. Come and see for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/volunteers"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-sand transition-all">
                Join as a Volunteer <ArrowRight size={14} />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={() => setOpen(null)} onStep={step} />}
      </AnimatePresence>
    </div>
  );
}
