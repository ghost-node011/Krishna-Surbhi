import { motion } from 'framer-motion';

const directions = {
  up:    { y: 32, x: 0 },
  down:  { y: -32, x: 0 },
  left:  { x: 32, y: 0 },
  right: { x: -32, y: 0 },
};

// Sideways slides start 32px off to one side; on phones that pushes content past the
// screen edge (sideways scrolling), so below md they slide up instead.
const isNarrow = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const dir = (direction === 'left' || direction === 'right') && isNarrow() ? 'up' : direction;

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
