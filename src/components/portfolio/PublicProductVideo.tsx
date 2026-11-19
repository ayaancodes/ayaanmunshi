'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useMediaActivity from './useMediaActivity';

export default function PublicProductVideo({ cover = false, preview = false, enabled = true }: { cover?: boolean; preview?: boolean; enabled?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  const active = useMediaActivity(host, enabled);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { if (!entries.some(entry => entry.isIntersecting)) setPlaying(false); });
    if (host.current) observer.observe(host.current);
    const pauseHidden = () => { if (document.hidden) setPlaying(false); };
    document.addEventListener('visibilitychange', pauseHidden);
    const root = document.querySelector('.portfolio-root');
    const motionObserver = new MutationObserver(() => { if (root?.classList.contains('motion-paused')) setPlaying(false); });
    if (root) motionObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pauseForPreference = () => { if (media.matches) setPlaying(false); };
    media.addEventListener('change', pauseForPreference);
    return () => { observer.disconnect(); motionObserver.disconnect(); media.removeEventListener('change', pauseForPreference); document.removeEventListener('visibilitychange', pauseHidden); };
  }, []);
  const poster = <><span className="video-poster"><Image src="/experience/rbc-aiden-public-poster.jpg" alt="" width={1280} height={720} sizes="(max-width: 580px) 90vw, 650px"/>{!preview && <span aria-hidden="true">▷</span>}</span><span className="public-video-title"><strong>Discover Aiden</strong><small>RBC’s public product explainer</small></span><span className="video-duration">2:15</span></>;
  const shouldPlay = preview ? active : playing;
  const source = preview ? '/embeds/rbc-aiden-preview.html' : 'https://players.brightcove.net/6021289101001/eY0NaFfEF_default/index.html?videoId=6089356568001&autoplay=true';
  return <div ref={host} className={`public-video ${cover ? 'public-video-cover' : ''}`}><div className="public-video-player">{shouldPlay ? <iframe src={source} title="Discover Aiden, an RBC public product explainer" allow="autoplay; fullscreen; encrypted-media" sandbox={preview ? 'allow-scripts' : undefined} allowFullScreen={!preview} tabIndex={preview ? -1 : undefined} aria-hidden={preview || undefined} referrerPolicy="strict-origin-when-cross-origin"/> : preview ? <div className="public-video-still" aria-hidden="true">{poster}</div> : <button type="button" onClick={() => setPlaying(true)}>{poster}</button>}</div>{!preview && <p>Public product preview from <a href="https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading" target="_blank" rel="noopener noreferrer">RBC Capital Markets</a>.</p>}</div>;
}
