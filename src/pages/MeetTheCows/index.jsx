import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { COWS, NANDIS, PHOTOS } from '../../data';
import { ArrowRight, Heart } from 'lucide-react';

const ALL_TAGS = ['All', ...new Set(COWS.map((c) => c.tag))];

const TAG_STYLES = {
  'Recovered': 'bg-gold text-white',
  'In Treatment': 'bg-white/90 text-forest-dark',
  'In Our Memory': 'bg-forest-dark/85 text-white',
};

/* ── Resident card — real photograph, real story, links to their own page ── */
function CowCard({ cow, delay }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-forest-dark/6"
    >
      <Link to={`/meet-the-cows/${cow.id}`} className="block">
        <div className="relative overflow-hidden h-64 bg-mint arch-sm">
          <img
            src={cow.image}
            alt={cow.name}
            style={{ objectPosition: cow.imagePosition || 'center 35%' }}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
              cow.memorial ? 'grayscale-[0.35]' : ''
            }`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          <span className={`absolute top-4 left-4 text-[9px] tracking-[0.2em] font-bold uppercase px-3 py-1.5 rounded-full ${
            TAG_STYLES[cow.tag] || 'bg-white/90 text-forest-dark'
          }`}>
            {cow.tag}
          </span>

          <h3 className="absolute bottom-4 left-5 font-serif text-2xl text-white leading-tight drop-shadow-sm">
            {cow.name}
          </h3>
        </div>

        <div className="p-6">
          <p className="text-forest-dark/75 text-sm leading-relaxed line-clamp-3 font-medium">{cow.story}</p>
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-forest-dark/8">
            <span className="text-forest-dark/60 text-[10px] tracking-wider uppercase font-semibold">
              {cow.rescuedBy ? `Rescued by ${cow.rescuedBy}` : 'Raised at the sadan'}
            </span>
            <span className="text-gold text-[11px] font-black inline-flex items-center gap-1">
              Her story
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function MeetTheCows() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? COWS : COWS.filter((c) => c.tag === activeTag);

  return (
    <div className="bg-white">
      <PageHero
        label="Our Residents"
        title="Meet Our Residents"
        subtitle="Every cow here was found on a street, injured, abandoned or newborn. These are their names and their stories."
        image={PHOTOS.herdYard.src}
        imagePosition={PHOTOS.herdYard.position}
      />

      {/* ── The rescues ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel text="Rescues" centered />
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Found on the street. <em className="italic text-gold font-bold">Home for good.</em>
              </h2>
            </div>
          </FadeIn>

          {/* Filter */}
          <FadeIn delay={0.05}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`text-[10px] tracking-[0.18em] font-bold uppercase px-4 py-2 rounded-full transition-all ${
                    activeTag === tag
                      ? 'bg-forest-dark text-white'
                      : 'bg-forest-dark/6 text-forest-dark/70 hover:bg-forest-dark/12'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((cow, i) => (
                <CowCard key={cow.id} cow={cow} delay={i * 0.05} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── The Nandi family ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionLabel text="The Nandi Family" centered />
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Fourteen male calves, <em className="italic text-gold font-bold">raised beside their mothers</em>
              </h2>
              <p className="text-forest-dark/75 leading-relaxed mt-5 font-medium">
                A male calf has no value to anyone who keeps cows for milk, which is why so few of
                them are allowed to grow up. Ours are raised alongside their mothers — a rarity in
                the world of gaushalas, and the thing we are proudest of.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {NANDIS.map((nandi, i) => (
              <FadeIn key={nandi.id} delay={(i % 5) * 0.05}>
                <figure className="group relative overflow-hidden aspect-square bg-mint shadow-sm hover:shadow-lg transition-shadow duration-500 arch-sm">
                  <img
                    src={nandi.image}
                    alt={nandi.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-3 left-4 right-3 font-serif text-lg text-white leading-tight drop-shadow-sm">
                    {nandi.name}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20 px-6 md:px-12 bg-forest-dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-gold-light text-[11px] tracking-[0.35em] font-black uppercase mb-4">
                  Stand With Them
                </div>
                <h2 className="font-serif font-bold text-4xl text-white leading-tight mb-4">
                  Some bonds can&rsquo;t be <br />
                  <em className="italic text-gold-light font-bold">felt from afar</em>
                </h2>
                <p className="text-white/85 leading-relaxed mb-8 font-medium">
                  Their feed, their medicine and their treatment take hands, every single day.
                  Join the community that keeps that going.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/volunteers#join"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-white font-black text-[11px] tracking-wider uppercase px-7 py-4 rounded-full hover:bg-gold-dark hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <Heart size={13} fill="white" /> Join as a Volunteer
                  </Link>
                  <Link
                    to="/support"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-black text-[11px] tracking-wider uppercase px-7 py-4 rounded-full hover:bg-white hover:text-forest-dark hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Other Ways to Help
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {COWS.slice(0, 4).map((cow) => (
                  <Link
                    key={cow.id}
                    to={`/meet-the-cows/${cow.id}`}
                    className="relative rounded-2xl overflow-hidden h-28 block group"
                  >
                    <img
                      src={cow.image}
                      alt={cow.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    <span className="absolute bottom-2 left-3 font-serif text-sm text-white">{cow.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
