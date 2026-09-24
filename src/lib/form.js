import { CONTACT } from '../data';

export const FIELD =
  'w-full border-2 border-forest-dark/50 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all shadow-sm';

export const LABEL =
  'block text-[10px] tracking-widest uppercase text-forest-dark/70 font-black mb-1.5';

// There is no backend, so every form hands off to WhatsApp with the details
// already written out — the sender just presses send.
// Lines set to null are dropped; '' keeps a blank line in the message.
export const whatsappLink = (lines) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    lines.filter((l) => l !== null && l !== undefined).join('\n'),
  )}`;
