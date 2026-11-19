'use client';
import { useEffect, useRef } from 'react';
import useMotion from './useMotion';

/** Progressive enhancement: the document stays visible if scripts or animation fail. */
export default function ScrollReveal() {
  const motion = useMotion();
  const seen = useRef(new WeakSet<Element>());
  useEffect(() => {
    if (!motion || typeof Element.prototype.animate !== 'function') return;
    const animations = new Set<Animation>();
    const targets = document.querySelectorAll<HTMLElement>('.portfolio .profile-header, .portfolio .life-section, .portfolio .section-heading, .portfolio .work-card, .portfolio .portfolio-disclosure, .portfolio .footer-topline, .portfolio .blackjack-launch');
    const order = new Map(Array.from(targets, (element, index) => [element, index]));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting || seen.current.has(entry.target)) continue;
        seen.current.add(entry.target);
        observer.unobserve(entry.target);
        const animation = entry.target.animate(
          [{ opacity: .08, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 620, delay: ((order.get(entry.target as HTMLElement) ?? 0) % 3) * 55, easing: 'cubic-bezier(.2,.65,.3,1)', fill: 'backwards' },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: .08, rootMargin: '0px 0px -16px 0px' });
    targets.forEach(element => { if (!seen.current.has(element)) observer.observe(element); });
    // Keyboard navigation never waits for a reveal to finish.
    const finishForFocus = () => { animations.forEach(animation => animation.finish()); animations.clear(); };
    document.addEventListener('focusin', finishForFocus);
    return () => {
      observer.disconnect();
      document.removeEventListener('focusin', finishForFocus);
      animations.forEach(animation => animation.cancel());
    };
  }, [motion]);
  return null;
}
