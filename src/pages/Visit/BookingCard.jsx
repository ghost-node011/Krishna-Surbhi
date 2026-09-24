import { useState } from 'react';
import { Minus, Plus, CalendarDays, MessageCircle } from 'lucide-react';
import { VISIT } from '../../data';
import SentCard from './SentCard';
import {
  FIELD, LABEL, inr, seasonFor, isWeekend, parseDateInput, toDateInput, formatDate, whatsappLink,
} from './booking';

function Stepper({ label, hint, value, onChange, max = 30 }) {
  const btn = 'w-9 h-9 rounded-full border border-forest/25 text-forest flex items-center justify-center hover:bg-forest hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors';
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div>
        <div className="text-forest-dark text-sm font-bold">{label}</div>
        <div className="text-forest-dark/60 text-xs mt-0.5">{hint}</div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button type="button" aria-label={`Remove one — ${label}`} onClick={() => onChange(value - 1)} disabled={value <= 0} className={btn}>
          <Minus size={15} />
        </button>
        <span className="w-6 text-center font-bold text-forest-dark tabular-nums" aria-live="polite">{value}</span>
        <button type="button" aria-label={`Add one — ${label}`} onClick={() => onChange(value + 1)} disabled={value >= max} className={btn}>
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-forest-dark/75">{label}</dt>
      <dd className="text-forest-dark font-bold tabular-nums">{value}</dd>
    </div>
  );
}

const INITIAL = { date: '', visitors: 1, little: 0, baskets: 0, name: '', phone: '' };

export default function BookingCard() {
  const [form, setForm] = useState(INITIAL);
  const [link, setLink] = useState(null);
  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  const day = form.date ? parseDateInput(form.date) : null;
  const closed = day?.getDay() === VISIT.closedDay;
  const season = seasonFor(day ?? new Date());
  const weekend = day ? isWeekend(day) : false;
  const rate = weekend ? season.weekend : season.weekday;
  const entry = form.visitors * rate;
  const basketTotal = form.baskets * VISIT.basket.price;
  const total = entry + basketTotal;

  const blocker = !day ? 'Pick a date to continue'
    : closed ? `We're closed on ${VISIT.closedDayLabel}`
    : form.visitors < 1 ? 'Add at least one visitor'
    : !form.name.trim() || !form.phone.trim() ? 'Add your name & phone'
    : null;

  const submit = (e) => {
    e.preventDefault();
    if (blocker) return;
    const url = whatsappLink([
      'Namaste Krishna Surabhi 🙏',
      'I would like to book a Gau Seva visit.',
      '',
      `Date: ${formatDate(day)}`,
      `Visitors: ${form.visitors} × ${inr(rate)} = ${inr(entry)}`,
      form.little ? `Little ones (under ${VISIT.freeUnderAge}): ${form.little} — free` : null,
      form.baskets ? `${VISIT.basket.name}s: ${form.baskets} × ${inr(VISIT.basket.price)} = ${inr(basketTotal)}` : null,
      `Total (to pay at the sanctuary): ${inr(total)}`,
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
        title="Almost done!"
        link={link}
        resetLabel="Book another visit"
        onReset={() => { setLink(null); setForm(INITIAL); }}
      />
    );
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-3xl p-6 md:p-9 shadow-xl border border-forest/5">
      <h3 className="font-serif font-bold text-2xl md:text-3xl text-forest-dark mb-6">Book your visit</h3>

      <label className={LABEL} htmlFor="visit-date">Date</label>
      <div className="relative">
        <CalendarDays size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/50 pointer-events-none" />
        <input
          id="visit-date"
          type="date"
          min={toDateInput(new Date())}
          value={form.date}
          onChange={(e) => set('date')(e.target.value)}
          required
          className={`${FIELD} pl-11`}
        />
      </div>
      {day && (
        <p className={`text-xs mt-2 ${closed ? 'text-saffron font-bold' : 'text-forest-dark/70'}`}>
          {closed
            ? `We're closed on ${VISIT.closedDayLabel} — please pick another day.`
            : `${formatDate(day)} · ${season.hours} · ${weekend ? 'weekend' : 'weekday'} rate`}
        </p>
      )}

      <div className="mt-5 divide-y divide-forest/10 border-y border-forest/10">
        <Stepper
          label="Visitors"
          hint={day
            ? `Age ${VISIT.freeUnderAge} and above · ${inr(rate)} each`
            : `${inr(season.weekday)} weekdays · ${inr(season.weekend)} weekends`}
          value={form.visitors}
          onChange={set('visitors')}
        />
        <Stepper label="Little ones" hint={`Under ${VISIT.freeUnderAge} · free`} value={form.little} onChange={set('little')} />
        <Stepper
          label={`${VISIT.basket.name}s`}
          hint={`${inr(VISIT.basket.price)} each · green fodder, gud & roti`}
          value={form.baskets}
          onChange={set('baskets')}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-5">
        <div>
          <label className={LABEL} htmlFor="visit-name">Your name</label>
          <input
            id="visit-name"
            autoComplete="name"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => set('name')(e.target.value)}
            required
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="visit-phone">Phone / WhatsApp</label>
          <input
            id="visit-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98xxx xxxxx"
            pattern="[0-9+ \-]{10,16}"
            title="Enter a 10-digit mobile number"
            value={form.phone}
            onChange={(e) => set('phone')(e.target.value)}
            required
            className={FIELD}
          />
        </div>
      </div>

      <dl className="mt-6 rounded-2xl bg-cream border border-forest/10 p-5 space-y-2 text-sm">
        <Row label={`Visitors (${form.visitors} × ${inr(rate)})`} value={inr(entry)} />
        {form.little > 0 && <Row label={`Little ones (${form.little})`} value="Free" />}
        {form.baskets > 0 && <Row label={`Seva baskets (${form.baskets} × ${inr(VISIT.basket.price)})`} value={inr(basketTotal)} />}
        <div className="flex justify-between items-baseline gap-4 pt-3 mt-1 border-t border-forest/10">
          <dt className="font-bold text-forest-dark">
            Total <span className="font-normal text-forest-dark/60 text-xs">· pay at the sanctuary</span>
          </dt>
          <dd className="font-serif font-bold text-3xl text-forest-dark tabular-nums">{inr(total)}</dd>
        </div>
      </dl>

      <button
        type="submit"
        disabled={Boolean(blocker)}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-forest text-white font-black text-[12px] tracking-wider uppercase py-4 rounded-full hover:bg-forest-dark hover:scale-105 hover:shadow-xl disabled:bg-forest/35 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none transition-all duration-300"
      >
        {blocker ?? <><MessageCircle size={15} /> Send booking on WhatsApp</>}
      </button>
      <p className="text-center text-xs text-forest-dark/60 mt-3 font-medium">No payment online. We'll confirm your visit on WhatsApp.</p>
    </form>
  );
}
