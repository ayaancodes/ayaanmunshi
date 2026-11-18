'use client';
import { useEffect, useState } from 'react';

/** Match both the page's pause button and the system's motion preference. */
export default function useMotion() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.querySelector('.portfolio-root');
    const update = () => setAnimate(!media.matches && !root?.classList.contains('motion-paused'));
    const observer = new MutationObserver(update);
    if (root) observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    media.addEventListener('change', update);
    update();
    return () => { observer.disconnect(); media.removeEventListener('change', update); };
  }, []);
  return animate;
}
