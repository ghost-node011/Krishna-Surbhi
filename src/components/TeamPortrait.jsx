// Fills its (sized) parent with a team member's photo, or a neutral silhouette
// while the client's photo is still pending (`image: null` in data/index.js).
export default function TeamPortrait({ person, className = '' }) {
  if (person.image) {
    return (
      <img
        src={person.image}
        alt={person.name}
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
        style={{ objectPosition: person.imagePosition || 'center' }}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${person.name} — photo coming soon`}
      className={`w-full h-full ${className}`}
    >
      <rect width="120" height="120" fill="#D4DED4" />
      <circle cx="60" cy="42" r="22" fill="#9BAEAB" />
      <ellipse cx="60" cy="105" rx="38" ry="28" fill="#9BAEAB" />
    </svg>
  );
}
