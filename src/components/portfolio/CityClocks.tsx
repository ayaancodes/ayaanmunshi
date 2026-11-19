'use client';
import { useEffect, useRef, useState } from 'react';
import { cityTime, CLOCK_CITIES } from '@/lib/city-clocks';

export default function CityClocks() {
  const host = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    let inView = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => setNow(new Date());
    const synchronize = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
      if (inView && !document.hidden) { update(); timer = setInterval(update, 1000); }
    };
    const observer = new IntersectionObserver(entries => { inView = entries.some(entry => entry.isIntersecting); synchronize(); });
    if (host.current) observer.observe(host.current);
    document.addEventListener('visibilitychange', synchronize);
    return () => { if (timer) clearInterval(timer); observer.disconnect(); document.removeEventListener('visibilitychange', synchronize); };
  }, []);
  return <div ref={host} className="city-clocks" aria-label="Local time in Toronto and New York">{CLOCK_CITIES.map(city => {
    const clock = now ? cityTime(now, city.zone) : { time: '--:--:--', zone: 'ET' };
    return <div className="city-monitor" key={city.name}><div><span>{city.name}</span><small>{clock.zone}</small></div><time dateTime={now?.toISOString()} aria-label={`${city.name}: ${clock.time} ${clock.zone}`}>{clock.time}</time><span className="monitor-label"><i aria-hidden="true"/> LOCAL TIME</span></div>;
  })}</div>;
}
