import { CircleCheck, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data';

// Shown after a form opens WhatsApp — the sender still has to press send there.
export default function SentCard({ title, message, link, onReset, resetLabel }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-forest-dark/6 text-center">
      <div className="w-14 h-14 rounded-full bg-gold/12 flex items-center justify-center mx-auto mb-5">
        <CircleCheck size={28} className="text-gold" />
      </div>
      <h3 className="font-serif text-3xl text-forest-dark mb-2">{title}</h3>
      <p className="text-brown/65 text-sm leading-relaxed max-w-sm mx-auto mb-7">
        {message || (
          <>
            WhatsApp has opened with your details filled in — just press send and we&rsquo;ll reply.
            If it didn&rsquo;t open, use the button below or call us on{' '}
            <a href={CONTACT.phoneHref} className="text-gold font-semibold whitespace-nowrap">
              {CONTACT.phoneDisplay}
            </a>
            .
          </>
        )}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:brightness-95 transition-all"
        >
          <MessageCircle size={15} /> Open WhatsApp again
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center border border-forest-dark/25 text-forest-dark text-[11px] tracking-wider font-semibold uppercase px-7 py-3.5 rounded-full hover:bg-forest-dark hover:text-white transition-all"
        >
          {resetLabel}
        </button>
      </div>
    </div>
  );
}
