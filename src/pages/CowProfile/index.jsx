import { useParams, Navigate, Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import { COWS, getCow } from '../../data';
import { ArrowRight, ArrowLeft, Heart } from 'lucide-react';

function OtherCowCard({ cow }) {
  return (
    <Link to={`/meet-the-cows/${cow.id}`} className="group block">
      <div className="aspect-[4/3] rounded-xl overflow-hidden relative mb-3 bg-mint">
        <img
          src={cow.image}
          alt={cow.name}
          style={{ objectPosition: cow.imagePosition || 'center 35%' }}
          className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
            cow.memorial ? 'grayscale-[0.35]' : ''
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-3 left-3 font-serif text-lg text-white leading-tight">{cow.name}</h3>
      </div>
      <span className="text-gold text-xs font-semibold flex items-center gap-1">
        Her story <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}

export default function CowProfile() {
  const { id } = useParams();
  const cow = getCow(id);

  if (!cow) return <Navigate to="/meet-the-cows" replace />;

  const others = COWS.filter((c) => c.id !== id).slice(0, 4);

  return (
    <div className="bg-white">
      <PageHero
        label={cow.tag}
        title={cow.name}
        subtitle={cow.rescuedBy ? `Rescued by ${cow.rescuedBy}` : 'One of our residents'}
        image={cow.image}
        imagePosition={cow.imagePosition || 'center 35%'}
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link to="/meet-the-cows" className="inline-flex items-center gap-1.5 text-forest/55 text-xs font-semibold uppercase tracking-wider mb-8 hover:text-forest-dark transition-colors">
              <ArrowLeft size={12} /> All Residents
            </Link>

            {cow.memorial && (
              <div className="w-fit bg-forest-dark/8 text-forest-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                In our memory
              </div>
            )}

            {cow.fullStory.map((para, i) => (
              <p
                key={para}
                className={`text-brown/75 leading-relaxed mb-5 ${i === 0 ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}
              >
                {para}
              </p>
            ))}

            <div className="flex items-center gap-4 flex-wrap pt-8 mt-6 border-t border-forest-dark/10">
              <Link
                to="/volunteers#join"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-gold-dark transition-colors"
              >
                <Heart size={13} fill="white" /> Help care for {cow.name}
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 border border-forest-dark/25 text-forest-dark text-[11px] tracking-wider font-semibold uppercase px-7 py-3.5 rounded-full hover:bg-forest-dark hover:text-white transition-all"
              >
                Other ways to help
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Other residents ── */}
      <section className="bg-sand py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl text-forest-dark mb-8">
              Meet more of the <em className="italic text-gold">herd</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((c, i) => (
              <FadeIn key={c.id} delay={i * 0.06}>
                <OtherCowCard cow={c} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
