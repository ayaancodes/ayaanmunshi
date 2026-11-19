'use client';
import { useEffect, useRef } from 'react';
import useMediaActivity from './useMediaActivity';

export default function CaseVideo({ src, poster, title, preview = false, enabled = true }: { src: string; poster: string; title: string; preview?: boolean; enabled?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const active = useMediaActivity(video, enabled);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (!active) element.pause();
    else if (preview) { element.muted = true; void element.play().catch(() => {}); }
    return () => element.pause();
  }, [active, preview]);
  return <div className="case-video"><video ref={video} controls={!preview} autoPlay={preview && active} muted={preview} loop={preview} playsInline preload="none" poster={poster} aria-label={preview ? undefined : title} aria-hidden={preview || undefined} tabIndex={preview ? -1 : undefined}><source src={src} type="video/mp4"/>Your browser does not support this video. <a href={src}>Open the presentation excerpt</a>.</video></div>;
}
