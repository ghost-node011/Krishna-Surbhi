import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';
import { CONTACT, SOCIALS } from '../data';

const SOCIAL_ICONS = { Instagram, YouTube: Youtube, Facebook };

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
    { label: 'Ways to Help', href: '/support' },
    { label: 'Community', href: '/community' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

/* Sanctuary silhouette signature — the recoloured PNG sits on the light page
   background and its baseline merges into the dark footer body below. */
function SanctuarySilhouette() {
  return (
    <div className="w-full leading-[0] bg-transparent">
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

      <div className="bg-forest-dark px-6 md:px-12 pt-10 md:pt-12 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-[1.6fr_1fr_1fr] pb-8 border-b border-white/15">

            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5 w-fit">
                <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img src="/brand/logo-mark.png" alt="" aria-hidden="true" className="w-11 h-11 object-contain" />
                </span>
                <span>
                  <span className="block font-serif font-bold text-xl text-white leading-tight">Krishna Surabhi</span>
                  <span className="block text-gold-light text-[9px] tracking-[0.26em] uppercase mt-0.5 font-black">Gau Seva Sadan</span>
                </span>
              </Link>
              <p className="text-white text-sm leading-relaxed max-w-sm mb-6 font-medium">
                A sanctuary where rescued cows live out their lives in peace, with their families
                beside them. We do not take milk from our cows.
              </p>

              <div className="flex gap-2.5">
                {SOCIALS.map(({ label, href }) => {
                  const Icon = SOCIAL_ICONS[label];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="w-9 h-9 bg-white/12 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-white transition-all"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Real nav columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h5 className="text-gold-light text-[10px] tracking-[0.28em] font-black uppercase mb-5">{heading}</h5>
                <ul className="flex flex-col gap-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link to={href} className="text-white text-sm hover:text-gold-light transition-colors font-medium">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border-b border-white/15">
            <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer"
              className="flex items-start gap-2.5 text-white text-sm hover:text-gold-light transition-colors">
              <MapPin size={15} className="text-gold-light mt-0.5 flex-shrink-0" />
              <span className="font-medium">{CONTACT.location}</span>
            </a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 text-white text-sm hover:text-gold-light transition-colors">
              <Phone size={15} className="text-gold-light flex-shrink-0" /> <span className="font-medium">{CONTACT.phoneDisplay}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 text-white text-sm hover:text-gold-light transition-colors">
              <Mail size={15} className="text-gold-light flex-shrink-0" /> <span className="font-medium">{CONTACT.email}</span>
            </a>
            <Link to="/volunteers#join"
              className="md:ml-auto bg-gold text-white text-xs font-black tracking-wider uppercase px-7 py-3 rounded-full hover:bg-gold-dark hover:scale-105 hover:shadow-xl transition-all duration-300 text-center">
              Join the Seva
            </Link>
          </div>

          <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/90">
            <p className="font-medium">© {new Date().getFullYear()} Krishna Surabhi Gau Seva Sadan. All rights reserved.</p>
            <p className="font-medium">A Non-Profit Trust registered by the Government of the National Capital Territory · # IN-DL64461961576448W</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
