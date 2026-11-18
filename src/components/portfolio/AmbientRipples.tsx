'use client';
import { useEffect, useRef } from 'react';
import useMotion from './useMotion';

export default function AmbientRipples() {
  const layer = useRef<HTMLDivElement>(null);
  const animate = useMotion();
  useEffect(() => {
    const container = layer.current;
    if (!container || !animate) return;
    let lastTime = 0;
    let lastX = -1000;
    let lastY = -1000;
    let hue = 0;
    const ripple = (event: PointerEvent) => {
      const now = performance.now();
      if (event.type === 'pointermove' && (event.pointerType !== 'mouse' || now - lastTime < 260 || Math.hypot(event.clientX - lastX, event.clientY - lastY) < 70)) return;
      lastTime = now; lastX = event.clientX; lastY = event.clientY;
      const ring = document.createElement('span');
      ring.className = `color-ripple ripple-${hue++ % 3}`;
      ring.style.left = `${event.clientX}px`; ring.style.top = `${event.clientY}px`;
      ring.addEventListener('animationend', () => ring.remove(), { once: true });
      while (container.childElementCount >= 6) container.firstElementChild?.remove();
      container.appendChild(ring);
    };
    window.addEventListener('pointermove', ripple, { passive: true });
    window.addEventListener('pointerdown', ripple, { passive: true });
    return () => { window.removeEventListener('pointermove', ripple); window.removeEventListener('pointerdown', ripple); container.replaceChildren(); };
  }, [animate]);
  return <div className="ambient-ripples" ref={layer} aria-hidden="true"/>;
}
