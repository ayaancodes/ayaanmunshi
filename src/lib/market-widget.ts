/** Fixed public-display widget configuration: no client API key or arbitrary ticker input. */
export const WATCHED_SYMBOLS = ['NASDAQ:PLTR', 'NASDAQ:TSLA', 'NASDAQ:NVDA', 'NASDAQ:GOOGL'] as const;
export const MARKET_WIDGET_ORIGIN = 'https://www.tradingview-widget.com';
export const marketWidgetConfig = {
  colorTheme: 'dark', dateRange: '1M', showChart: true, locale: 'en',
  width: '100%', height: 430, isTransparent: true, showSymbolLogo: true,
  showFloatingTooltip: true, plotLineColorGrowing: 'rgba(159, 196, 143, 1)',
  plotLineColorFalling: 'rgba(218, 143, 134, 1)', gridLineColor: 'rgba(255, 255, 255, 0.04)',
  scaleFontColor: 'rgba(170, 170, 170, 1)', belowLineFillColorGrowing: 'rgba(159, 196, 143, 0.1)',
  belowLineFillColorGrowingBottom: 'rgba(159, 196, 143, 0)', belowLineFillColorFalling: 'rgba(218, 143, 134, 0.1)',
  belowLineFillColorFallingBottom: 'rgba(218, 143, 134, 0)', symbolActiveColor: 'rgba(159, 196, 143, 0.08)',
  tabs: [{ title: 'Watchlist', symbols: WATCHED_SYMBOLS.map((s, i) => ({ s, d: ['Palantir', 'Tesla', 'NVIDIA', 'Alphabet'][i] })), originalTitle: 'Watchlist' }],
};
export function widgetStatus(origin: string, fromExpectedFrame: boolean, data: unknown): 'ready' | 'unavailable' | null {
  if (origin !== MARKET_WIDGET_ORIGIN || !fromExpectedFrame || !data || typeof data !== 'object') return null;
  const name = (data as { name?: unknown }).name;
  return name === 'tv-widget-ready' ? 'ready' : name === 'tv-widget-no-data' ? 'unavailable' : null;
}
