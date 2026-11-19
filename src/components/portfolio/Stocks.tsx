'use client';
import { useEffect, useRef, useState } from 'react';
import Disclosure from './Disclosure';
import { marketWidgetFor, widgetStatus, WATCHED_SYMBOLS, WATCHED_COMPANIES, type WatchedSymbol, type MarketSelection, selectMarketSymbol } from '@/lib/market-widget';

function MarketChart({ symbol }: { symbol: WatchedSymbol }) {
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
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript'; script.async = true;
    script.textContent = JSON.stringify(marketWidgetFor(symbol));
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
        iframe.title = 'TradingView price chart and stock watchlist';
        iframe.addEventListener('load', onFrameLoad);
      }
    };
    const observer = new MutationObserver(observeFrame);
    observer.observe(container, { childList: true, subtree: true });
    observeFrame();
    return () => { mounted = false; clearTimeout(timer); observer.disconnect(); observedFrame?.removeEventListener('load', onFrameLoad); window.removeEventListener('message', onMessage); script.onerror = null; container.replaceChildren(); };
  }, [symbol]);
  return <div className="market-chart-frame" id="market-price-chart"><div ref={host} className="market-widget"/>{status !== 'ready' && <div className={`market-status ${status}`} role="status">{status === 'loading' ? 'Loading market data…' : <><span>View market data at the source.</span><a href="https://www.tradingview.com/markets/stocks-usa/" target="_blank" rel="noopener noreferrer">Open TradingView ↗</a></>}</div>}</div>;
}

export default function Stocks() {
  const [selection, setSelection] = useState<MarketSelection>({ symbol: WATCHED_SYMBOLS[0], nonce: 0 });
  const selectedSymbol = selection.symbol;
  return <Disclosure title="Stocks I’m watching" subtitle="A few companies that keep me curious." className="stocks-section"><div className="market-widget-shell"><MarketChart key={`${selectedSymbol}-${selection.nonce}`} symbol={selectedSymbol}/><div className="mobile-watchlist"><div className="mobile-watchlist-heading"><span>Watchlist <small>{WATCHED_SYMBOLS.length}</small></span><span aria-live="polite">Last picked: {selectedSymbol.split(':')[1]}</span></div><div className="mobile-watchlist-scroll" role="group" aria-label="Choose a stock to reload the chart. The pressed button is the last stock picked here.">{WATCHED_SYMBOLS.map(symbol => <button type="button" key={symbol} aria-pressed={selectedSymbol === symbol} aria-controls="market-price-chart" onClick={() => setSelection(previous => selectMarketSymbol(previous, symbol))}><strong>{symbol.split(':')[1]}</strong><span>{WATCHED_COMPANIES[symbol]}</span></button>)}</div></div></div><div className="market-caption"><p>Market data by <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView</a>. Quotes may be delayed. Quote times and availability are supplied by the provider.</p><a className="market-source-link" href="https://www.tradingview.com/markets/stocks-usa/" target="_blank" rel="noopener noreferrer">Explore markets ↗</a></div></Disclosure>;
}
