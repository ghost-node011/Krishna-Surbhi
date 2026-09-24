import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight, HeartHandshake, Stethoscope, Hammer, Camera } from 'lucide-react';

// These cards describe work a volunteer does — dressing a wound, mixing fodder,
// laying a water line. There are no photographs of any of that, and pairing
// them with cow portraits made the images read as unrelated to the text. An
// icon states the job plainly and stays honest: no stock, nothing implied that
// hasn't happened. Swap in real photographs here the day they're taken.
const CONTRIBUTIONS = [
  {
    title: 'Care',
    roles: 'Feeding · Grooming · Sitting with the herd',
    Icon: HeartHandshake,
    note: 'No experience needed',
  },
  {
    title: 'Heal',
    roles: 'Vets · Dressings · Daily medicine',
    Icon: Stethoscope,
    note: 'Vets & para-vets',
  },
  {
    title: 'Build',
    roles: 'Sheds · Fencing · Water lines',
    Icon: Hammer,
    note: 'Needed most right now',
  },
  {
    title: 'Tell',
    roles: 'Photographers · Writers · Filmmakers',
    Icon: Camera,
    note: 'Remote is fine',
  },
];

export default function BuildSanctuary() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
              <span className="text-gold text-[12px] tracking-[0.5em] font-black uppercase">Build Krishna Surabhi</span>
              <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30" />
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark leading-tight mb-4">
              A sanctuary built by <em className="italic text-gold font-bold">many hands</em>
            </h2>
            <p className="text-forest-dark/75 leading-relaxed font-medium">
              Krishna Surabhi is not built by one person. It is being rebuilt right now, by whoever
              turns up with what they have. Find the one that sounds like you.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CONTRIBUTIONS.map(({ title, roles, Icon, note }, i) => (
            <FadeIn key={title} delay={i * 0.08} className="h-full">
              <Link
                to="/volunteers#join"
                className="group flex flex-col h-full bg-sand rounded-2xl border border-forest-dark/8 p-7 hover:bg-white hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="w-14 h-14 flex items-center justify-center bg-white ring-1 ring-forest-dark/8 mb-6 arch-sm transition-colors group-hover:bg-gold group-hover:ring-gold">
                  <Icon size={24} strokeWidth={1.5} className="text-gold transition-colors group-hover:text-white" />
                </span>

                <h3 className="font-serif font-bold text-2xl text-forest-dark mb-2">{title}</h3>
                <p className="text-forest-dark/75 text-sm leading-relaxed flex-grow font-medium">{roles}</p>

                <span className="inline-flex items-center gap-2 mt-6 pt-4 border-t border-forest-dark/10 text-gold text-[10px] tracking-[0.18em] uppercase font-bold">
                  {note}
                  <ArrowRight size={12} className="ml-auto group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTAs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <Link
              to="/volunteers#join"
              className="inline-flex items-center justify-center gap-2 bg-forest-dark text-white font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-gold hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Join as a Volunteer <ArrowRight size={14} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 border-2 border-forest-dark text-forest-dark font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest-dark hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              See Ways to Help
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
