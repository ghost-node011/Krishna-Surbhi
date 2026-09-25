import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import BookingCard from './BookingCard';
import GroupEnquiry from './GroupEnquiry';
import { VISIT, CONTACT, PHOTOS } from '../../data';
import { inr, seasonFor, isWeekend, whatsappLink } from './booking';
import {
  MapPin, Clock, Baby, ShoppingBasket, ChevronDown, Phone, Mail, MessageCircle, ArrowRight,
} from 'lucide-react';

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest/10 last:border-0">
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-medium text-forest-dark text-sm md:text-base">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-forest/50 flex-shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-forest-dark/75 text-sm leading-relaxed pb-5 font-medium">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const PRIMARY_BTN = 'inline-flex items-center justify-center gap-2 bg-forest text-white font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest-dark hover:scale-105 hover:shadow-xl transition-all duration-300';
const OUTLINE_BTN = 'inline-flex items-center justify-center gap-2 border-2 border-forest text-forest font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300';

export default function Visit() {
  const now = new Date();
  const current = seasonFor(now);
  const closedToday = now.getDay() === VISIT.closedDay;
  const todayRate = isWeekend(now) ? 'weekend' : 'weekday';
  const [seasonId, setSeasonId] = useState(current.id);
  const season = VISIT.seasons.find((s) => s.id === seasonId);

  const facts = [
    { Icon: MapPin, title: 'Where', text: CONTACT.location },
    { Icon: Clock, title: current.hours, text: `Closed ${VISIT.closedDayLabel}` },
    { Icon: Baby, title: `Under ${VISIT.freeUnderAge}`, text: 'Free entry' },
    { Icon: ShoppingBasket, title: VISIT.basket.name, text: `${inr(VISIT.basket.price)} each` },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        label="Plan Your Visit"
        title="Visit Krishna Surabhi"
        subtitle="Feed the cows with your own hands, meet the calves and their mothers, and spend a quiet hour at the sanctuary."
        image={PHOTOS.visitorCow.src}
        imagePosition={PHOTOS.visitorCow.position}
      />

      {/* ── At a glance ── */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark leading-tight">
              Come for <em className="italic text-gold font-bold">Gau Seva</em>
            </h2>
            <p className="text-forest-dark/75 mt-4 max-w-xl mx-auto leading-relaxed font-medium">
              Bring your family and feed our rescued cows by hand. Book in a minute — you pay at the
              sanctuary, and we confirm on WhatsApp.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 text-sm text-forest-dark bg-white border border-forest/10 rounded-full px-4 py-2 shadow-sm">
              <span className={`w-2 h-2 rounded-full ${closedToday ? 'bg-saffron' : 'bg-forest-light'}`} />
              {closedToday ? `Closed today — we're closed on ${VISIT.closedDayLabel}` : `Open today · ${current.hours}`}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/visit#book" className={PRIMARY_BTN}>Book Your Visit <ArrowRight size={13} /></Link>
              <Link to="/visit#prices" className={OUTLINE_BTN}>Prices & Timings</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-14 pt-10 border-t border-forest/10">
              {facts.map(({ Icon, title, text }) => (
                <div key={text} className="flex flex-col items-center gap-2">
                  <Icon size={20} className="text-saffron" />
                  <div className="text-forest-dark text-sm font-bold">{title}</div>
                  <div className="text-forest-dark/60 text-xs">{text}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Prices & timings ── */}
      <section id="prices" className="bg-transparent py-12 md:py-16 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <SectionLabel text="Prices & Timings" centered />
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-forest-dark mt-2">
                Simple, <em className="italic text-gold font-bold">honest pricing</em>
              </h2>
              <p className="text-forest-dark/70 mt-3 font-medium">Your visit contribution helps feed and care for the cows.</p>
            </div>

            <div role="tablist" aria-label="Season" className="grid grid-cols-2 gap-1.5 bg-white p-1.5 rounded-2xl shadow-sm border border-forest/10 mb-5">
              {VISIT.seasons.map((s) => {
                const active = s.id === seasonId;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSeasonId(s.id)}
                    className={`rounded-xl py-3 px-3 text-sm transition-colors ${active ? 'bg-forest text-white shadow' : 'text-forest/70 hover:bg-forest/5'}`}
                  >
                    <span className="font-bold">{s.label}</span>
                    <span className={`block text-xs mt-0.5 ${active ? 'text-white/70' : 'text-forest-dark/50'}`}>{s.months}</span>
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl border border-forest/10 p-5 md:px-6 flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-saffron" />
                <span className="font-semibold text-forest-dark">{season.hours}</span>
              </div>
              <div className="text-forest-dark/70 text-sm">Last entry {season.lastEntry} · Closed {VISIT.closedDayLabel}</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                { key: 'weekday', label: 'Weekdays', days: VISIT.weekdayLabel },
                { key: 'weekend', label: 'Weekends', days: VISIT.weekendLabel },
              ].map(({ key, label, days }) => {
                const isToday = seasonId === current.id && key === todayRate && !closedToday;
                return (
                  <div
                    key={key}
                    className={`relative bg-white rounded-2xl p-5 md:p-6 text-center border ${isToday ? 'border-forest ring-1 ring-forest' : 'border-forest/10'}`}
                  >
                    {isToday && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-forest text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                        Today
                      </span>
                    )}
                    <div className="text-forest-dark font-bold">{label}</div>
                    <div className="text-forest-dark/60 text-xs mb-3">{days}</div>
                    <div className="font-serif font-bold text-4xl text-forest-dark">{inr(season[key])}</div>
                    <div className="text-forest-dark/60 text-xs mt-1">per person</div>
                  </div>
                );
              })}
            </div>

            <div className="bg-forest-dark text-white rounded-2xl p-5 md:px-6 flex items-center gap-4 mb-4">
              <Baby size={22} className="text-saffron flex-shrink-0" />
              <div>
                <div className="font-bold">Free entry</div>
                <div className="text-white/85 text-sm">Little ones under {VISIT.freeUnderAge} years</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-forest/10 p-5 md:px-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBasket size={20} className="text-saffron" />
              </div>
              <div className="flex-grow">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <div className="font-bold text-forest-dark">{VISIT.basket.name}</div>
                  <div className="font-bold text-forest-dark">
                    {inr(VISIT.basket.price)} <span className="text-forest-dark/60 text-xs font-normal">each</span>
                  </div>
                </div>
                <p className="text-forest-dark/70 text-sm mt-1 leading-relaxed font-medium">{VISIT.basket.contents}</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/visit#book" className={PRIMARY_BTN}>Book Your Visit <ArrowRight size={13} /></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Booking ── */}
      <section id="book" className="py-12 md:py-16 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <SectionLabel text="Book Your Visit" />
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark leading-tight mb-4">
              Your day of <em className="italic text-gold font-bold">Gau Seva</em>
            </h2>
            <p className="text-forest-dark/75 leading-relaxed mb-10 font-medium">
              Pick a date and tell us who's coming. We'll confirm on WhatsApp — nothing is paid online.
            </p>
            <ol className="space-y-6">
              {VISIT.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="w-9 h-9 rounded-full bg-forest text-white font-serif text-lg flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-forest-dark">{s.title}</div>
                    <p className="text-forest-dark/70 text-sm leading-relaxed mt-0.5 font-medium">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl bg-saffron/10 border border-saffron/20 p-5 text-sm text-forest-dark/75 leading-relaxed font-medium">
              <strong className="text-forest-dark font-bold">Please note:</strong> {VISIT.note}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7 lg:sticky lg:top-24">
            <BookingCard />
          </FadeIn>
        </div>
      </section>

      {/* ── Occasions & groups ── */}
      <section id="groups" className="py-12 md:py-16 px-6 md:px-12 bg-forest-dark scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30 flex-shrink-0" />
              <span className="text-gold-light text-[11px] tracking-[0.35em] font-black uppercase">Occasions & Groups</span>
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30 flex-shrink-0" />
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
              Celebrate with <em className="italic text-gold-light font-bold">the cows</em>
            </h2>
            <p className="text-white/85 leading-relaxed mb-10 font-medium">
              Mark a birthday, remember a loved one, or bring your school or team for a day of seva.
              Tell us what you have in mind and we'll plan it with you.
            </p>
            <ul className="space-y-5">
              {VISIT.occasions.filter((o) => o.desc).map((o) => (
                <li key={o.label} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">{o.label}</div>
                    <div className="text-white/70 text-sm">{o.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <GroupEnquiry />
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ + contact ── */}
      <section id="faq" className="py-12 md:py-16 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-7">
            <SectionLabel text="FAQ" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-forest-dark mb-8">
              Common <em className="italic text-gold font-bold">questions</em>
            </h2>
            <div className="bg-white rounded-2xl px-6 md:px-8 py-2 shadow-sm border border-forest/5">
              {VISIT.faqs.map((f) => <FaqItem key={f.q} {...f} />)}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <SectionLabel text="Contact" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-forest-dark mb-8">
              Still have a <em className="italic text-gold font-bold">question?</em>
            </h2>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-forest/5">
              <ul className="space-y-5 mb-7">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-saffron mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-forest-dark text-sm">{CONTACT.location}</div>
                    <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="text-forest text-xs font-bold hover:underline">
                      Open in Google Maps ↗
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={18} className="text-saffron flex-shrink-0" />
                  <a href={CONTACT.phoneHref} className="text-forest-dark text-sm hover:text-forest">{CONTACT.phoneDisplay}</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={18} className="text-saffron flex-shrink-0" />
                  <a href={`mailto:${CONTACT.email}`} className="text-forest-dark text-sm hover:text-forest">{CONTACT.email}</a>
                </li>
              </ul>
              <a
                href={whatsappLink(['Namaste Krishna Surabhi 🙏', 'I have a question about visiting the sanctuary.'])}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-black text-[11px] tracking-wider uppercase py-4 rounded-full hover:brightness-95 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
