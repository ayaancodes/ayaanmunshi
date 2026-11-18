'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function PublicProductVideo() {
  const [playing, setPlaying] = useState(false);
  return <div className="public-video">{playing ? <iframe src="https://players.brightcove.net/6021289101001/eY0NaFfEF_default/index.html?videoId=6089356568001&autoplay=true" title="Discover Aiden, an RBC public product explainer" allow="autoplay; fullscreen; encrypted-media" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <button type="button" onClick={() => setPlaying(true)}><span className="video-poster"><Image src="/experience/rbc-aiden-public-poster.jpg" alt="" width={96} height={54}/><span aria-hidden="true">▷</span></span><span><strong>Discover Aiden</strong><small>Watch RBC’s public product explainer</small></span><span className="video-duration">2:15</span></button>}<p>Public product explainer from <a href="https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading" target="_blank" rel="noopener noreferrer">RBC Capital Markets</a>.</p></div>;
}
