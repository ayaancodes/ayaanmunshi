'use client';
import { useState } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';

export default function MotionToggle() {
  const [paused, setPaused] = useState(false);
  return <button className="motion-toggle" type="button" aria-label={paused ? 'Play illustrations' : 'Pause illustrations'} aria-pressed={paused} onClick={() => { const next = !paused; setPaused(next); document.querySelector('.portfolio-root')?.classList.toggle('motion-paused', next); }}>{paused ? <FiPlay/> : <FiPause/>}</button>;
}
