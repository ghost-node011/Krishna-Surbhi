export default function SectionLabel({ text, centered = false }) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
      <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30 flex-shrink-0" />
      <span className="text-gold text-[11px] tracking-[0.35em] font-black uppercase">
        {text}
      </span>
      {centered && <div className="w-2 h-2 rotate-45 bg-gold shadow-lg shadow-gold/30 flex-shrink-0" />}
    </div>
  );
}
