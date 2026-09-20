import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight, TreePine, Home as HomeIcon, Users } from 'lucide-react';

const REAL_WORK = [
  {
    Icon: TreePine,
    title: 'Tree Plantation Drives',
    desc: 'Our trustees and visitors plant native trees together to shade our herds and restore the land.',
  },
  {
    Icon: HomeIcon,
    title: 'Cottages Under Construction',
    desc: 'New quarters are being built by hand, section by section, funded and supported by the community as it grows.',
  },
  {
    Icon: Users,
    title: 'Run by Our Trustees',
    desc: 'Krishna Surabhi is a trust. Our trustees — with Rakesh, our all-rounder, on the ground every day — are the backbone that keeps the sanctuary running.',
  },
];

export default function SupportDonate() {
  return (
    <section id="support" className="bg-sand py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[10px] tracking-[0.3em] font-semibold uppercase">Real, Ongoing Work</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              We are asking for<br />
              <em className="italic text-gold">hands, not rupees</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-brown/55 leading-relaxed max-w-sm">
              The gaushala is mid-rebuild, so we have closed donations for now. What keeps this
              place standing is people who show up — for the fodder, the sheds, and the cow who
              needs her dressing changed.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {REAL_WORK.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="rounded-3xl p-8 flex flex-col h-full bg-white shadow-sm border border-forest/8">
                <div className="w-12 h-12 rounded-2xl bg-forest/8 flex items-center justify-center mb-5">
                  <item.Icon size={22} className="text-forest" />
                </div>
                <h3 className="font-serif text-2xl text-forest-dark mb-3">{item.title}</h3>
                <p className="text-brown/60 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <Link to="/support" className="inline-flex items-center gap-2 text-forest/55 text-sm hover:text-forest transition-colors">
              Explore ways to get involved — visit, volunteer, or give
              <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
