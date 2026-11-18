/** Fixed public-display widget configuration: no client API key or arbitrary ticker input. */
export const WATCHED_SYMBOLS = [
  'NASDAQ:PLTR', 'NASDAQ:TSLA', 'NASDAQ:NVDA', 'NASDAQ:GOOGL',
  'NASDAQ:AAPL', 'NASDAQ:MSFT', 'NASDAQ:AMZN', 'NASDAQ:META',
  'NASDAQ:AVGO', 'NASDAQ:AMD', 'NASDAQ:NFLX', 'NYSE:ORCL',
  'NYSE:CRM', 'NYSE:JPM', 'NYSE:V', 'NYSE:MA', 'NASDAQ:COST',
  'NASDAQ:WMT', 'NYSE:LLY', 'NYSE:XOM', 'NYSE:UNH', 'NYSE:HD',
  'NYSE:KO', 'NYSE:DIS',
] as const;
export const MARKET_WIDGET_ORIGIN = 'https://www.tradingview-widget.com';
/** Official Advanced Chart: price scale and scrolling watchlist live inside the provider frame. */
export const marketWidgetConfig = {
  autosize: true, symbol: WATCHED_SYMBOLS[0], interval: 'D', range: '1M',
  timezone: 'America/Toronto', theme: 'dark', style: '3', locale: 'en',
  allow_symbol_change: true, backgroundColor: '#191919', gridColor: 'rgba(255, 255, 255, 0.04)',
  hide_volume: true, hide_top_toolbar: false, hide_side_toolbar: true,
  watchlist: [...WATCHED_SYMBOLS], editablewatchlist: false, widgetbar_width: 240,
  withdateranges: true, save_image: false, details: false, hotlist: false,
};
export function widgetStatus(origin: string, fromExpectedFrame: boolean, data: unknown): 'ready' | 'unavailable' | null {
  if (origin !== MARKET_WIDGET_ORIGIN || !fromExpectedFrame || !data || typeof data !== 'object') return null;
  const name = (data as { name?: unknown }).name;
  return name === 'tv-widget-ready' ? 'ready' : name === 'tv-widget-no-data' ? 'unavailable' : null;
}
