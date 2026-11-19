'use client';
import { useEffect, useState, type RefObject } from 'react';
import useMotion from './useMotion';

/** Preview playback needs motion permission, an onscreen host, and a visible page. */
export default function useMediaActivity<T extends Element>(host: RefObject<T>, enabled = true) {
  const motion = useMotion();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let inView = false;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(entries => { inView = entries.some(entry => entry.isIntersecting); update(); }, { threshold: .15 });
    if (host.current) observer.observe(host.current);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); };
  }, [host]);
  return enabled && motion && visible;
}
