'use client';
import { useEffect, useRef } from 'react';
import useMotion from './useMotion';

export default function CaseVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const animate = useMotion();
  useEffect(() => { if (!animate) video.current?.pause(); }, [animate]);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => { if (!entries.some(entry => entry.isIntersecting)) element.pause(); });
    observer.observe(element);
    const pauseHidden = () => { if (document.hidden) element.pause(); };
    document.addEventListener('visibilitychange', pauseHidden);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', pauseHidden); element.pause(); };
  }, []);
  return <div className="case-video"><video ref={video} controls playsInline preload="none" poster={poster} aria-label={title}><source src={src} type="video/mp4"/>Your browser does not support this video. <a href={src}>Open the presentation excerpt</a>.</video></div>;
}
