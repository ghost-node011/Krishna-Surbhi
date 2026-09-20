import { CONTACT } from '../data';

export const FIELD =
  'w-full border border-forest-dark/15 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 bg-white focus:outline-none focus:border-gold transition-colors';

export const LABEL =
  'block text-[10px] tracking-widest uppercase text-forest/60 font-semibold mb-1.5';

// There is no backend, so every form hands off to WhatsApp with the details
// already written out — the sender just presses send.
// Lines set to null are dropped; '' keeps a blank line in the message.
export const whatsappLink = (lines) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    lines.filter((l) => l !== null && l !== undefined).join('\n'),
  )}`;
