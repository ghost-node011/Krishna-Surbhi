import { VISIT, CONTACT } from '../../data';

export const FIELD = 'w-full border border-forest/20 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 bg-white focus:outline-none focus:border-forest transition-colors';
export const LABEL = 'block text-[10px] tracking-widest uppercase text-forest/60 font-semibold mb-1.5';

export const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

export const seasonFor = (date) =>
  VISIT.seasons.find((s) => s.monthIndexes.includes(date.getMonth())) ?? VISIT.seasons[0];

export const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6;

// "2026-09-19" → local midnight (new Date('2026-09-19') would be UTC and can land on the previous day)
export const parseDateInput = (value) => {
  const [y, m, d] = value.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const toDateInput = (date) =>
  [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');

export const formatDate = (date) =>
  date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

// Lines set to null are dropped; '' keeps a blank line in the message.
export const whatsappLink = (lines) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.filter((l) => l !== null).join('\n'))}`;
