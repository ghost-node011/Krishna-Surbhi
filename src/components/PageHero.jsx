import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHero({ label, title, subtitle, image, imagePosition = 'center' }) {
  const crumb = typeof title === 'string' ? title : label;

  return (
    <section className="relative h-[100svh] min-h-[560px] flex items-end overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 bg-forest-dark">
        <img
          src={image}
          alt={crumb}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
          loading="eager"
        />
        {/* Overlay only where the text sits (left + bottom) — the rest of the photo keeps its colours */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && (
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30 flex-shrink-0" />
              <span className="text-gold-light text-[11px] tracking-[0.35em] font-black uppercase">{label}</span>
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30 flex-shrink-0" />
            </div>
          )}

          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 max-w-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-lg font-medium">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
