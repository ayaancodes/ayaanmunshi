'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useMotion from './useMotion';

const walkthroughs = {
  aker: [
    { image: '/experience/aker-dashboard-public.jpg', title: 'Portfolio overview', detail: 'A connected view of the portfolio', x: 37, y: 49 },
    { image: '/experience/aker-analytics-public.jpg', title: 'Operating analytics', detail: 'Follow the metrics that matter', x: 48, y: 58 },
    { image: '/experience/aker-workflow-public.jpg', title: 'Agents & workflows', detail: 'From source data to the next action', x: 65, y: 46 },
  ],
  rippling: [
    { image: '/experience/rippling-schedule.png', title: 'Build the schedule', detail: 'Find the right people for each shift', x: 65, y: 52 },
    { image: '/experience/rippling-insights.png', title: 'Review the details', detail: 'Bring availability and insights together', x: 63, y: 49 },
    { image: '/experience/rippling-publish.png', title: 'Publish the week', detail: 'Move from a plan to a shared schedule', x: 28, y: 39 },
  ],
};

export default function ProductWalkthrough({ company }: { company: keyof typeof walkthroughs }) {
  const frames = walkthroughs[company];
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const animate = useMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => setVisible(entries.some(entry => entry.isIntersecting)), { threshold: 0.15 });
    if (host.current) observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!animate || !visible) return;
    const timer = setInterval(() => setActive(current => (current + 1) % frames.length), 6500);
    return () => clearInterval(timer);
  }, [animate, visible, frames.length]);
  const current = frames[active];
  return <div ref={host} className={`product-walkthrough walkthrough-${company} ${animate && visible ? 'walkthrough-playing' : ''}`}>
    <div className="product-heading"><span>{company === 'aker' ? 'AKER AI' : 'RIPPLING'}</span><span>{company === 'aker' ? 'INVESTMENT WORKSPACE' : 'TIME & SCHEDULING'}</span></div>
    <div className="product-screen">{frames.map((frame, index) => <div className={`product-slide ${active === index ? 'is-active' : ''}`} key={frame.image}><Image src={frame.image} alt="" fill sizes="(max-width: 580px) 90vw, 650px" quality={95}/></div>)}<div className="product-focus" key={active} style={{ left: `${current.x}%`, top: `${current.y}%` }}><svg className="product-cursor" viewBox="0 0 24 24"><path d="M4 3l4.3 16 3.6-5 5.6-.7L4 3z"/></svg><span/></div></div>
    <div className="product-story"><div><strong>{current.title}</strong><span>{current.detail}</span></div><div className="product-steps">{frames.map((frame,index)=><i key={frame.title} className={index === active ? 'is-active' : ''}/>)}</div></div>
  </div>;
}
