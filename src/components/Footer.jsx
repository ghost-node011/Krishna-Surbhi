import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT } from '../data';

// Only links that lead somewhere real — the old footer repeated the same three
// pages under a dozen invented labels.
const FOOTER_LINKS = {
  Sanctuary: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Meet Our Residents', href: '/meet-the-cows' },
    { label: 'Core Team', href: '/core-team' },
    { label: 'Volunteers', href: '/volunteers' },
  ],
  'Get Involved': [
    { label: 'Volunteer With Us', href: '/volunteers' },
    { label: 'Support Our Work', href: '/support' },
    { label: 'Community', href: '/community' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

/* Sanctuary silhouette signature — the recoloured PNG sits on the light page
   background and its baseline merges into the dark footer body below. */
function SanctuarySilhouette() {
  return (
    <div className="w-full leading-[0] bg-sand">
      <img
        src="/brand/footer-silhouette.png"
        alt=""
        aria-hidden="true"
        className="w-full block select-none pointer-events-none"
        style={{ marginBottom: -1 }}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      <SanctuarySilhouette />

      <div className="bg-forest-dark px-6 md:px-12 pt-14 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-[1.6fr_1fr_1fr] pb-12 border-b border-white/15">

            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5 w-fit">
                <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img src="/brand/logo-mark.png" alt="" aria-hidden="true" className="w-11 h-11 object-contain" />
                </span>
                <span>
                  <span className="block font-serif text-xl text-white leading-tight">Krishna Surabhi</span>
                  <span className="block text-gold-light text-[9px] tracking-[0.26em] uppercase mt-0.5">Gau Seva Sadan</span>
                </span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                A sanctuary where rescued cows live out their lives in peace, with their families
                beside them. We do not take milk from our cows.
              </p>
            </div>

            {/* Real nav columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h5 className="text-gold-light text-[10px] tracking-[0.28em] font-bold uppercase mb-5">{heading}</h5>
                <ul className="flex flex-col gap-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link to={href} className="text-white/75 text-sm hover:text-white transition-colors">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border-b border-white/15">
            <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer"
              className="flex items-start gap-2.5 text-white/75 text-sm hover:text-white transition-colors">
              <MapPin size={15} className="text-gold-light mt-0.5 flex-shrink-0" />
              <span>{CONTACT.location}</span>
            </a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 text-white/75 text-sm hover:text-white transition-colors">
              <Phone size={15} className="text-gold-light flex-shrink-0" /> {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-white/75 text-sm hover:text-white transition-colors">
              <Mail size={15} className="text-gold-light flex-shrink-0" /> {CONTACT.email}
            </a>
            <Link to="/support"
              className="md:ml-auto bg-gold text-white text-xs font-bold tracking-wider uppercase px-7 py-3 rounded-full hover:bg-gold-dark transition-colors text-center">
              Support the Sanctuary
            </Link>
          </div>

          <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/55">
            <p>© {new Date().getFullYear()} Krishna Surabhi Gau Seva Sadan. All rights reserved.</p>
            <p>A Non-Profit Trust registered by the Government of the National Capital Territory · # IN-DL64461961576448W</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
