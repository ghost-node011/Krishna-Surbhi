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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-saffron flex-shrink-0" />
              <span className="text-gold-light text-[10px] tracking-[0.3em] font-semibold uppercase">{label}</span>
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 max-w-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-lg">{subtitle}</p>
          )}
        </motion.div>
      </div>

      {/* Bottom breadcrumb strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-cream/95 backdrop-blur-sm border-t border-forest/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2.5 flex items-center gap-2 text-xs text-forest/40">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <span>/</span>
          <span className="text-forest/65">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
