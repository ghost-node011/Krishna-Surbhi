import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background — dark enough so white text pops */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#0F2B1E' }}>
        <img
          src="/hero/web/6.jpg"
          alt="Sanctuary landscape at dawn"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18, filter: 'saturate(0.5)' }}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Left — copy */}
          <FadeIn direction="left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
              <span className="text-gold-light text-[12px] tracking-[0.5em] font-black uppercase">Stay Connected</span>
              <div className="w-2 h-2 rotate-45 bg-saffron shadow-lg shadow-saffron/30" />
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
              Monthly letters<br />
              <em className="italic text-gold-light font-bold">from the sanctuary</em>
            </h2>
            <p className="text-white text-base leading-relaxed mb-8 max-w-md font-medium">
              Rescue stories, cow updates, sanctuary events, and quiet moments of beauty — delivered once a month to your inbox.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Link to="/contact"
                className="inline-flex items-center gap-2 text-white text-sm hover:text-gold-light transition-colors font-bold">
                Contact us <ArrowRight size={13} />
              </Link>
              <span className="text-white/40">·</span>
              <Link to="/support"
                className="inline-flex items-center gap-2 text-white text-sm hover:text-gold-light transition-colors font-bold">
                Volunteer <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          {/* Right — form card */}
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="font-serif font-bold text-2xl text-white mb-1">Join the family</h3>
                    <p className="text-white text-sm mb-2 font-medium">No spam. One email a month. Unsubscribe anytime.</p>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="bg-white/15 border border-white/30 rounded-xl px-5 py-3.5 text-white placeholder-white/80 text-sm focus:outline-none focus:border-saffron focus:bg-white/20 transition-colors"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      className="bg-white/15 border border-white/30 rounded-xl px-5 py-3.5 text-white placeholder-white/80 text-sm focus:outline-none focus:border-saffron focus:bg-white/20 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-saffron text-white font-bold text-[11px] tracking-wider uppercase py-4 rounded-xl hover:bg-saffron/85 active:scale-[0.98] transition-all mt-1"
                    >
                      Subscribe — It's Free
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <CheckCircle size={52} className="text-gold-light mx-auto mb-4" />
                    <h3 className="font-serif font-bold text-2xl text-white mb-2">Welcome to the family!</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                      Your first letter arrives next month — full of stories and quiet moments.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
