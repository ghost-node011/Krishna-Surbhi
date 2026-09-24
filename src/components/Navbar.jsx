import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // "Volunteers" stays highlighted on /volunteers/rakesh too
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    // White is the brand's primary ground, so the bar stays white throughout and
    // only lifts with a shadow once the page scrolls.
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-500 border-b ${
      scrolled ? 'shadow-md border-forest/10' : 'border-forest/8'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex items-center justify-between relative">

        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <img
            src="/brand/logo-mark.png"
            alt="Krishna Surabhi Gau Seva Sadan"
            className="w-11 h-11 object-contain flex-shrink-0"
          />
          <div>
            <div className="font-serif text-[1.08rem] leading-tight font-bold text-forest-dark">
              Krishna Surabhi
            </div>
            <div className="text-[7.5px] tracking-[0.28em] uppercase text-gold font-black">
              Gau Seva Sadan
            </div>
          </div>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden xl:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link key={label} to={href}
                className={`text-[11px] tracking-[0.15em] uppercase font-bold whitespace-nowrap transition-all duration-300 relative group ${
                  active ? 'text-forest-dark' : 'text-forest-dark/70 hover:text-forest-dark hover:scale-105'
                }`}>
                {label}
                <span className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Right — outlined CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link to="/volunteers"
            className="hidden md:inline-flex items-center justify-center text-[10px] font-bold tracking-[0.22em] uppercase px-6 py-3 border-2 border-forest-dark text-forest-dark rounded-sm hover:bg-forest-dark hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
            Join Us
          </Link>
          <button className="xl:hidden p-1.5" onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
            {menuOpen ? <X className="text-forest-dark" size={22} /> : <Menu className="text-forest-dark" size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="xl:hidden bg-white border-t border-forest/10 overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} to={href}
                  className={`text-sm py-3 border-b border-forest/8 transition-colors ${isActive(href) ? 'text-forest font-bold' : 'text-forest-dark/75'}`}>
                  {label}
                </Link>
              ))}
              <Link to="/volunteers" className="mt-3 bg-forest-dark text-white text-sm font-black py-3.5 rounded-xl text-center">
                Join as a Volunteer
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
