import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '');
      let cancelled = false;

      const scrollToTarget = () => {
        if (cancelled) return false;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToTarget()) {
        const t1 = setTimeout(scrollToTarget, 60);
        const t2 = setTimeout(scrollToTarget, 180);
        const t3 = setTimeout(scrollToTarget, 360);
        const t4 = setTimeout(scrollToTarget, 600);
        return () => {
          cancelled = true;
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
          clearTimeout(t4);
        };
      } else {
        // Re-align in case preceding images or animations shifted layout height
        const t = setTimeout(scrollToTarget, 250);
        return () => {
          cancelled = true;
          clearTimeout(t);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
