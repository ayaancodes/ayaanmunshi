'use client';
import { useEffect, useRef, useState } from 'react';
import useMotion from './useMotion';

/** Original slow pixel field inspired by the reference's restrained background behavior. */
export default function PixelBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const phase = useRef(0);
  const [paused, setPaused] = useState(false);
  const motionAllowed = useMotion();
  const running = motionAllowed && !paused;
  useEffect(() => {
    const surface = canvas.current;
    const context = surface?.getContext('2d');
    if (!surface || !context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let lastPaint = 0;
    let lastClock = performance.now();
    const paint = () => {
      context.clearRect(0, 0, width, height);
      // Bounded grid: at most 96 columns and 72 rows, with less work on phones.
      const step = Math.max(14, Math.ceil(width / 96), Math.ceil(height / 72));
      const time = phase.current;
      for (let y = 7; y < height; y += step) {
        for (let x = 7; x < width; x += step) {
          const edge = 0.025 + 0.975 * Math.pow(Math.abs(x - width / 2) / Math.max(width / 2, 1), 3.2);
          const wave = (Math.sin(x * 0.004 + time * 0.035) + Math.cos(y * 0.005 - time * 0.027) + Math.sin((x + y) * 0.003 - time * 0.019)) / 3;
          const cloud = Math.max(0, Math.min(1, (wave + 0.35) * 0.9));
          const alpha = edge * (0.009 + cloud * 0.075);
          const tint = Math.sin(x * 0.002 - y * 0.003 + time * 0.012);
          const color = tint > 0.4 ? '153,177,177' : tint < -0.4 ? '174,162,182' : '170,174,172';
          context.fillStyle = `rgba(${color},${alpha})`;
          context.fillRect(x, y, 2, 2);
        }
      }
    };
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.width = Math.round(width * ratio); surface.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      paint();
    };
    const tick = (now: number) => {
      if (!running || document.hidden) { frame = 0; return; }
      // Paint at most eight times a second; elapsed motion is preserved on pause.
      if (now - lastPaint >= 125) {
        phase.current += Math.min(now - lastClock, 250) / 1000;
        lastClock = now; lastPaint = now; paint();
      }
      frame = requestAnimationFrame(tick);
    };
    const visibility = () => {
      cancelAnimationFrame(frame); frame = 0;
      if (running && !document.hidden) { lastClock = performance.now(); lastPaint = 0; frame = requestAnimationFrame(tick); }
    };
    resize(); visibility();
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', visibility);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', visibility); };
  }, [running]);
  return <><canvas id="pixel-background" className="pixel-background" ref={canvas} aria-hidden="true"/><button className="background-toggle" type="button" aria-controls="pixel-background" aria-pressed={paused || !motionAllowed} disabled={!motionAllowed} onClick={() => setPaused(current => !current)}>{!motionAllowed ? 'Background paused' : paused ? 'Resume background' : 'Pause background'}</button></>;
}
