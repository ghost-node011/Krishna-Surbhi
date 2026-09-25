import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { Sun, Leaf, Heart, Users, Sparkles } from 'lucide-react';

const PILLARS = [
  { word: 'Sacred', desc: 'Ancient wisdom, cow reverence & spiritual roots', Icon: Sun },
  { word: 'Natural', desc: 'Eco-conscious, organic & earth-connected living', Icon: Leaf },
  { word: 'Compassionate', desc: 'Rescue-driven, welfare-focused & empathetic', Icon: Heart },
  { word: 'Community', desc: 'Volunteers, visitors, supporters & advocates', Icon: Users },
  { word: 'Peaceful', desc: 'A quiet place to sit, breathe and be near the herd', Icon: Sparkles },
];

export default function BrandPillars() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-forest-dark">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest/25 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-saffron/8 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-8 mb-10 items-end">
          <FadeIn>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
              <span className="text-saffron text-[12px] tracking-[0.5em] font-black uppercase">Who We Are</span>
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight">
              Five values.<br />
              <em className="italic text-saffron font-bold">One sanctuary.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white leading-relaxed max-w-sm font-medium">
              Every decision we make — from how we rescue to how we welcome visitors — is guided by these five pillars.
            </p>
          </FadeIn>
        </div>

        {/* Pillars with Lucide icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {PILLARS.map(({ word, desc, Icon }, i) => (
            <FadeIn key={word} delay={i * 0.08}>
              <div className="group bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-saffron/20 flex items-center justify-center mb-5 group-hover:bg-saffron/30 transition-colors">
                  <Icon size={18} className="text-saffron" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">{word}</h3>
                <p className="text-white text-xs leading-relaxed font-medium">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 pt-6 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-serif font-bold text-xl md:text-2xl italic text-white/85 max-w-2xl leading-relaxed">
              "The website should feel Warm. Peaceful. Authentic. Emotional. Modern yet Grounded."
            </p>
            <Link to="/our-story" className="text-saffron text-sm font-bold flex items-center gap-2 flex-shrink-0 group">
              Our full story
              <span className="w-2 h-2 rotate-45 bg-saffron group-hover:scale-125 transition-all duration-300" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
