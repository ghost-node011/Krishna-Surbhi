import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight } from 'lucide-react';

const CONTRIBUTIONS = [
  {
    title: 'Care',
    roles: 'Feeding · Grooming · Sitting with the herd',
    image: '/hero/web/6.jpg',
    imagePosition: 'center 45%',
  },
  {
    title: 'Heal',
    roles: 'Vets · Dressings · Daily medicine',
    image: '/cows/laxmi.jpg',
    imagePosition: 'center 40%',
  },
  {
    title: 'Build',
    roles: 'Sheds · Fencing · Water lines',
    image: '/hero/web/7.jpg',
    imagePosition: 'center 50%',
  },
  {
    title: 'Tell',
    roles: 'Photographers · Writers · Filmmakers',
    image: '/hero/web/4.jpg',
    imagePosition: 'center 32%',
  },
];

export default function BuildSanctuary() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[10px] tracking-[0.3em] font-semibold uppercase">Build Krishna Surabhi</span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight mb-4">
              A sanctuary built by <em className="italic text-gold">many hands</em>
            </h2>
            <p className="text-brown/60 leading-relaxed">
              Krishna Surabhi is not built by one person. It is being rebuilt right now, by whoever
              turns up with what they have. Find the one that sounds like you.
            </p>
          </div>
        </FadeIn>

        {/* Image cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {CONTRIBUTIONS.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <Link to="/support" className="group block text-center">
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-forest-dark/8 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-mint arch-sm">
                    <img
                      src={c.image}
                      alt={c.roles}
                      style={{ objectPosition: c.imagePosition }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-forest-dark mt-5 mb-1.5">{c.title}</h3>
                <p className="text-brown/55 text-xs leading-relaxed px-2">{c.roles}</p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTAs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Link
              to="/volunteers#join"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-gold transition-colors"
            >
              Join as a Volunteer <ArrowRight size={14} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 border border-forest-dark/30 text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest-dark hover:text-white transition-all"
            >
              See Ways to Help
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
