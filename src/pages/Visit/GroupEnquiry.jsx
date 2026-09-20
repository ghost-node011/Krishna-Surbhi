import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { VISIT } from '../../data';
import SentCard from './SentCard';
import { FIELD, LABEL, parseDateInput, toDateInput, formatDate, whatsappLink } from './booking';

const EMPTY = { name: '', phone: '', occasion: '', date: '', size: '', message: '' };

export default function GroupEnquiry() {
  const [form, setForm] = useState(EMPTY);
  const [link, setLink] = useState(null);
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const url = whatsappLink([
      'Namaste Krishna Surabhi 🙏',
      `I'd like to plan: ${form.occasion}`,
      '',
      form.date ? `Preferred date: ${formatDate(parseDateInput(form.date))}` : null,
      form.size ? `Group size: ${form.size}` : null,
      form.message.trim() ? `Details: ${form.message.trim()}` : null,
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ]);
    window.open(url, '_blank', 'noopener');
    setLink(url);
  };

  if (link) {
    return (
      <SentCard
        title="Thank you!"
        link={link}
        resetLabel="Send another enquiry"
        onReset={() => { setLink(null); setForm(EMPTY); }}
      />
    );
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-3xl p-6 md:p-9 shadow-xl">
      <h3 className="font-serif text-2xl md:text-3xl text-forest-dark mb-1">Plan an occasion or group visit</h3>
      <p className="text-brown/55 text-sm mb-6">Tell us a little and we’ll get back to you on WhatsApp.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={LABEL} htmlFor="enq-name">Your name *</label>
          <input id="enq-name" name="name" autoComplete="name" placeholder="Full name" value={form.name} onChange={update} required className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="enq-phone">Phone / WhatsApp *</label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98xxx xxxxx"
            pattern="[0-9+ \-]{10,16}"
            title="Enter a 10-digit mobile number"
            value={form.phone}
            onChange={update}
            required
            className={FIELD}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className={LABEL} htmlFor="enq-occasion">Occasion *</label>
        <select id="enq-occasion" name="occasion" value={form.occasion} onChange={update} required className={FIELD}>
          <option value="">Choose one</option>
          {VISIT.occasions.map((o) => <option key={o.label}>{o.label}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label className={LABEL} htmlFor="enq-date">Preferred date</label>
          <input id="enq-date" name="date" type="date" min={toDateInput(new Date())} value={form.date} onChange={update} className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="enq-size">Group size</label>
          <input id="enq-size" name="size" type="number" min="1" inputMode="numeric" placeholder="e.g. 15" value={form.size} onChange={update} className={FIELD} />
        </div>
      </div>

      <div className="mt-4">
        <label className={LABEL} htmlFor="enq-message">Anything else?</label>
        <textarea
          id="enq-message"
          name="message"
          rows={3}
          placeholder="Whose birthday, how many children, any special requests…"
          value={form.message}
          onChange={update}
          className={`${FIELD} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-forest text-white font-semibold text-[12px] tracking-wider uppercase py-4 rounded-full hover:bg-forest-dark transition-colors"
      >
        <MessageCircle size={15} /> Send enquiry on WhatsApp
      </button>
    </form>
  );
}
