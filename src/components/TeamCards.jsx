import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TeamPortrait from './TeamPortrait';
import { profilePath } from '../data';

// Shared by the Core Team and Volunteers pages.

export function GroupHeader({ label, title, text }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-x-10 gap-y-3 mb-8 pb-5 border-b border-forest/10">
      <div>
        <div className="text-saffron text-[10px] tracking-[0.3em] uppercase font-bold mb-2">{label}</div>
        <h2 className="font-serif text-3xl md:text-[2.1rem] text-forest-dark leading-tight">{title}</h2>
      </div>
      {text && <p className="text-brown/55 text-sm leading-relaxed max-w-md">{text}</p>}
    </div>
  );
}

// Wide card: photo on the left, pull quote + summary on the right.
export function FeatureCard({ person }) {
  return (
    <Link
      to={profilePath(person)}
      className="group grid sm:grid-cols-5 bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5 hover:shadow-xl transition-shadow duration-500 h-full"
    >
      <div className="sm:col-span-2 aspect-square sm:aspect-auto sm:min-h-[360px] overflow-hidden bg-[#D4DED4]">
        <TeamPortrait person={person} className="group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="sm:col-span-3 p-7 md:p-9 flex flex-col">
        <h3 className="font-serif text-3xl text-forest-dark leading-tight">{person.name}</h3>
        <div className="text-saffron text-[11px] tracking-widest uppercase font-semibold mt-1.5 mb-6">{person.role}</div>
        <blockquote className="font-serif text-xl italic text-forest-dark/85 leading-snug border-l-2 border-saffron pl-4 mb-5">
          "{person.quote}"
        </blockquote>
        <p className="text-brown/65 text-sm leading-relaxed mb-7">{person.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-forest text-[11px] font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
          Read full story <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}

// Portrait card for the trustees grid. Links to the profile only once a story exists.
export function PersonCard({ person }) {
  const body = (
    <>
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#D4DED4] mb-5 shadow-sm">
        <TeamPortrait
          person={person}
          className={person.story ? 'group-hover:scale-105 transition-transform duration-700' : ''}
        />
      </div>
      <h3 className="font-serif text-2xl text-forest-dark leading-tight">{person.name}</h3>
      <div className="text-saffron text-[11px] tracking-widest uppercase font-semibold mt-1 mb-3">{person.role}</div>
      <p className="text-brown/60 text-sm leading-relaxed mb-4">{person.summary}</p>
      {person.story ? (
        <span className="inline-flex items-center gap-1.5 text-forest text-[11px] font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
          Read story <ArrowRight size={12} />
        </span>
      ) : (
        <span className="text-forest/40 text-[10px] font-semibold uppercase tracking-widest">Profile coming soon</span>
      )}
    </>
  );

  return person.story
    ? <Link to={profilePath(person)} className="group block">{body}</Link>
    : <div>{body}</div>;
}
