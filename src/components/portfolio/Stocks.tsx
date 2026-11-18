'use client';
import { useEffect, useRef, useState } from 'react';
import { marketWidgetConfig, widgetStatus, WATCHED_SYMBOLS } from '@/lib/market-widget';

export default function Stocks() {
  const host = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading');
  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let mounted = true;
    const wrapper = document.createElement('div');
    wrapper.className = 'tradingview-widget-container';
    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    wrapper.appendChild(widget);
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript'; script.async = true;
    script.textContent = JSON.stringify(marketWidgetConfig);
    script.onerror = () => { if (mounted) setStatus('unavailable'); };
    wrapper.appendChild(script); container.appendChild(wrapper);
    const timer = setTimeout(() => { if (mounted) setStatus(current => current === 'loading' ? 'unavailable' : current); }, 15000);
    const onMessage = (event: MessageEvent) => {
      const iframe = container.querySelector('iframe');
      const next = widgetStatus(event.origin, Boolean(iframe && event.source === iframe.contentWindow), event.data);
      if (next && mounted) { clearTimeout(timer); setStatus(next); }
    };
    window.addEventListener('message', onMessage);
    let observedFrame: HTMLIFrameElement | null = null;
    const onFrameLoad = () => { if (mounted) { clearTimeout(timer); setStatus('ready'); } };
    const observeFrame = () => {
      const iframe = container.querySelector('iframe');
      if (iframe && iframe !== observedFrame) {
        observedFrame?.removeEventListener('load', onFrameLoad);
        observedFrame = iframe;
        iframe.title = 'TradingView stock watchlist: Palantir, Tesla, NVIDIA, and Alphabet';
        iframe.addEventListener('load', onFrameLoad);
      }
    };
    const observer = new MutationObserver(observeFrame);
    observer.observe(container, { childList: true, subtree: true });
    observeFrame();
    return () => { mounted = false; clearTimeout(timer); observer.disconnect(); observedFrame?.removeEventListener('load', onFrameLoad); window.removeEventListener('message', onMessage); script.onerror = null; container.replaceChildren(); };
  }, []);
  return <section className="stocks-section" aria-labelledby="stocks-title"><div className="section-heading"><div><h2 id="stocks-title">Stocks I’m watching</h2><p>A few companies that keep me curious.</p></div><span className="stocks-unit">USD</span></div><div className="market-widget-shell"><div ref={host} className="market-widget"/>{status !== 'ready' && <div className={`market-status ${status}`} role="status">{status === 'loading' ? 'Loading market data…' : <><span>View market data at the source.</span><a href="https://www.tradingview.com/markets/stocks-usa/" target="_blank" rel="noopener noreferrer">Open TradingView ↗</a></>}</div>}</div><div className="market-caption"><p>Market data by <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView</a>. Quotes may be delayed. Quote times and availability are supplied by the provider.</p><nav aria-label="Stock pages">{WATCHED_SYMBOLS.map(symbol=><a key={symbol} href={`https://www.tradingview.com/symbols/${symbol.replace(':','-')}/`} target="_blank" rel="noopener noreferrer">{symbol.split(':')[1]}<span className="sr-only"> on TradingView (opens in a new tab)</span></a>)}</nav></div></section>;
}
