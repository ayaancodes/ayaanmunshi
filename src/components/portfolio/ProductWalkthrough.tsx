'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useMotion from './useMotion';

const walkthroughs = {
  aker: [
    { image: '/experience/aker-dashboard-public.jpg', title: 'Portfolio overview', detail: 'A connected view of the portfolio' },
    { image: '/experience/aker-analytics-public.jpg', title: 'Operating analytics', detail: 'Follow the metrics that matter' },
    { image: '/experience/aker-workflow-public.jpg', title: 'Agents & workflows', detail: 'From source data to the next action' },
  ],
  // Public Wealthsimple trading reference: https://www.wealthsimple.com/en-ca/trade
  // This screenshot is not BMO product UI or a claim of personal authorship.
  trading: [{ image: '/experience/wealthsimple-public-trading.webp', title: 'The trading workspace', detail: 'Public platform reference' }],
  rippling: [
    { image: '/experience/rippling-schedule.png', title: 'Build the schedule', detail: 'Find the right people for each shift' },
    { image: '/experience/rippling-insights.png', title: 'Review the details', detail: 'Bring availability and insights together' },
    { image: '/experience/rippling-publish.png', title: 'Publish the week', detail: 'Move from a plan to a shared schedule' },
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
    if (!animate || !visible || frames.length < 2) return;
    const timer = setInterval(() => setActive(current => (current + 1) % frames.length), 6500);
    return () => clearInterval(timer);
  }, [animate, visible, frames.length]);
  const current = frames[active];
  return <div ref={host} className={`product-walkthrough walkthrough-${company} ${animate && visible ? 'walkthrough-playing' : ''}`}>
    <div className="product-heading"><span>{company === 'aker' ? 'AKER AI' : company === 'rippling' ? 'RIPPLING' : 'TRADING WORKSPACE'}</span><span>{company === 'aker' ? 'INVESTMENT WORKSPACE' : company === 'rippling' ? 'TIME & SCHEDULING' : 'PUBLIC REFERENCE'}</span></div>
    <div className="product-screen">{frames.map((frame, index) => <div className={`product-slide ${active === index ? 'is-active' : ''}`} key={frame.image}><Image src={frame.image} alt="" fill sizes="(max-width: 580px) 90vw, 650px" quality={95}/></div>)}</div>
    <div className="product-story"><div><strong>{current.title}</strong><span>{current.detail}</span></div><div className="product-steps">{frames.map((frame,index)=><i key={frame.title} className={index === active ? 'is-active' : ''}/>)}</div></div>
  </div>;
}
