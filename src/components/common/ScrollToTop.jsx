import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      // Wait briefly for route render before attempting anchor scroll
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);

  return null;
}
