import test from 'node:test';
import assert from 'node:assert/strict';
import { MARKET_WIDGET_ORIGIN, WATCHED_SYMBOLS, marketWidgetConfig, widgetStatus } from '../src/lib/market-widget.ts';

test('market widget keeps the four owner-selected symbols and no invented quotes', () => {
  assert.deepEqual(WATCHED_SYMBOLS, ['NASDAQ:PLTR', 'NASDAQ:TSLA', 'NASDAQ:NVDA', 'NASDAQ:GOOGL']);
  assert.deepEqual(marketWidgetConfig.tabs[0].symbols.map(s => s.s), WATCHED_SYMBOLS);
  assert.equal(JSON.stringify(marketWidgetConfig).includes('apiKey'), false);
  assert.equal(marketWidgetConfig.width, '100%');
});
test('widget availability accepts only the expected frame and exact provider origin', () => {
  assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, true, { name: 'tv-widget-ready' }), 'ready');
  assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, true, { name: 'tv-widget-no-data' }), 'unavailable');
  assert.equal(widgetStatus('https://www.tradingview-widget.com.attacker.example', true, { name: 'tv-widget-ready' }), null);
  assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, false, { name: 'tv-widget-ready' }), null);
  for (const input of [null, '', 'tv-widget-ready', {}, { name: 'other' }]) assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, true, input), null);
});
