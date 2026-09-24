import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { PHOTOS } from '../../data';

const GALLERY = [
  {
    title: 'Our Residents',
    label: 'Rescued & Recovered',
    photo: { src: '/cows/shankar.jpg', position: 'center 35%', alt: 'Shankar, rescued from the streets and recovered' },
    to: '/meet-the-cows',
    offset: 'lg:mt-0',
  },
  {
    title: 'The Nandi Family',
    label: '14 Calves, Raised With Their Mothers',
    photo: { src: '/nandis/tejas.jpg', position: 'center 40%', alt: 'Tejas, one of our fourteen Nandis' },
    to: '/meet-the-cows',
    offset: 'lg:mt-16',
  },
  {
    title: 'Sanctuary Life',
    label: 'Every Single Day',
    photo: PHOTOS.herdYard,
    to: '/community',
    offset: 'lg:mt-0',
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Minimal header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
                <span className="text-gold text-[12px] tracking-[0.5em] font-black uppercase">Gallery</span>
                <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
              </div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark leading-tight">
                Glimpses of the <em className="italic text-gold font-bold">sanctuary</em>
              </h2>
            </div>
            <Link to="/community"
              className="inline-flex items-center gap-2 border-2 border-forest-dark text-forest-dark text-[11px] tracking-wider font-black uppercase px-7 py-3.5 rounded-full hover:bg-forest-dark hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 flex-shrink-0">
              Explore Gallery <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>

        {/* Organic, staggered image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {GALLERY.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12} className={item.offset}>
              <Link
                to={item.to}
                className="relative block w-full aspect-[4/5] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 arch"
              >
                <img
                  src={item.photo.src}
                  alt={item.photo.alt}
                  style={{ objectPosition: item.photo.position }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1100ms]"
                  loading="lazy"
                />
                {/* soft overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-7 pb-7">
                  <h3 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight drop-shadow-lg">
                    {item.title}
                  </h3>
                  <span className="block text-white/95 text-[11px] tracking-[0.35em] uppercase font-bold mt-2">
                    {item.label}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
