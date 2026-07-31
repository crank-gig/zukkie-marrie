import { useEffect, useState } from 'react';

/** Returns the page scroll progress (0–1) and whether the page has scrolled past the hero. */
export function useScrollProgress(): { progress: number; scrolled: boolean } {
  const [state, setState] = useState({ progress: 0, scrolled: false });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const top = window.scrollY;
      setState({ progress: max > 0 ? Math.min(top / max, 1) : 0, scrolled: top > 40 });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return state;
}
