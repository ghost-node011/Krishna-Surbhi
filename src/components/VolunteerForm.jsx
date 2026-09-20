import { useState } from 'react';
import { MessageCircle, Check } from 'lucide-react';
import SentCard from './SentCard';
import { FIELD, LABEL, whatsappLink } from '../lib/form';
import { SEVA_OPTIONS, AVAILABILITY_OPTIONS, CONTACT } from '../data';

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  city: '',
  availability: '',
  seva: [],
  about: '',
};

export default function VolunteerForm() {
  const [form, setForm] = useState(INITIAL);
  const [link, setLink] = useState(null);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleSeva = (value) =>
    setForm((f) => ({
      ...f,
      seva: f.seva.includes(value) ? f.seva.filter((s) => s !== value) : [...f.seva, value],
    }));

  const blocker =
    !form.name.trim() || !form.phone.trim()
      ? 'Add your name and phone number'
      : form.seva.length === 0
        ? 'Pick at least one kind of seva'
        : null;

  const submit = (e) => {
    e.preventDefault();
    if (blocker) return;
    const url = whatsappLink([
      'Namaste Krishna Surabhi 🙏',
      'I would like to join as a volunteer.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      form.city.trim() ? `City: ${form.city.trim()}` : null,
      form.availability ? `Available: ${form.availability}` : null,
      '',
      `I can help with: ${form.seva.join(', ')}`,
      form.about.trim() ? '' : null,
      form.about.trim() ? `About me: ${form.about.trim()}` : null,
    ]);
    window.open(url, '_blank', 'noopener');
    setLink(url);
  };

  if (link) {
    return (
      <SentCard
        title="Almost there"
        link={link}
        resetLabel="Send another"
        onReset={() => {
          setLink(null);
          setForm(INITIAL);
        }}
      />
    );
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-3xl p-6 md:p-9 shadow-xl border border-forest-dark/6">
      <h3 className="font-serif text-2xl md:text-3xl text-forest-dark mb-1">Join as a volunteer</h3>
      <p className="text-brown/60 text-sm mb-7">
        No fee, no application process. Tell us a little about yourself and one of us will call you.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={LABEL} htmlFor="vol-name">Your name *</label>
          <input id="vol-name" className={FIELD} value={form.name} onChange={set('name')} required placeholder="Full name" />
        </div>
        <div>
          <label className={LABEL} htmlFor="vol-phone">Phone *</label>
          <input id="vol-phone" type="tel" className={FIELD} value={form.phone} onChange={set('phone')} required placeholder="+91 98765 43210" />
        </div>
        <div>
          <label className={LABEL} htmlFor="vol-email">Email</label>
          <input id="vol-email" type="email" className={FIELD} value={form.email} onChange={set('email')} placeholder="you@email.com" />
        </div>
        <div>
          <label className={LABEL} htmlFor="vol-city">Where you live</label>
          <input id="vol-city" className={FIELD} value={form.city} onChange={set('city')} placeholder="City or area" />
        </div>
      </div>

      {/* Seva — what they actually want to do */}
      <fieldset className="mb-5">
        <legend className={LABEL}>What would you like to help with? *</legend>
        <div className="flex flex-wrap gap-2 mt-1">
          {SEVA_OPTIONS.map((option) => {
            const on = form.seva.includes(option);
            return (
              <button
                type="button"
                key={option}
                onClick={() => toggleSeva(option)}
                aria-pressed={on}
                className={`inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-full border transition-all ${
                  on
                    ? 'bg-forest-dark text-white border-forest-dark'
                    : 'bg-white text-brown/70 border-forest-dark/15 hover:border-gold hover:text-forest-dark'
                }`}
              >
                {on && <Check size={12} />}
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mb-4">
        <label className={LABEL} htmlFor="vol-when">When are you usually free?</label>
        <select id="vol-when" className={FIELD} value={form.availability} onChange={set('availability')}>
          <option value="">Choose one</option>
          {AVAILABILITY_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className={LABEL} htmlFor="vol-about">Anything you&rsquo;d like us to know</label>
        <textarea
          id="vol-about"
          rows={4}
          className={`${FIELD} resize-none`}
          value={form.about}
          onChange={set('about')}
          placeholder="Skills, experience with animals, why you want to do this — whatever you like."
        />
      </div>

      <button
        type="submit"
        disabled={Boolean(blocker)}
        className="w-full inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold text-[12px] tracking-wider uppercase py-4 rounded-full hover:bg-gold-dark disabled:bg-forest-dark/25 disabled:cursor-not-allowed transition-colors"
      >
        <MessageCircle size={15} /> {blocker || 'Send on WhatsApp'}
      </button>

      <p className="text-brown/50 text-xs leading-relaxed text-center mt-4">
        This opens WhatsApp with your details written out — you press send. Prefer to write?{' '}
        <a href={`mailto:${CONTACT.email}`} className="text-gold font-semibold">{CONTACT.email}</a>
      </p>
    </form>
  );
}
