import test from 'node:test';
import assert from 'node:assert/strict';
import { MARKET_WIDGET_ORIGIN, WATCHED_SYMBOLS, marketWidgetConfig, marketWidgetFor, WATCHED_COMPANIES, widgetStatus } from '../src/lib/market-widget.ts';

test('advanced chart keeps the core symbols and a fixed broader watchlist without invented quotes', () => {
  assert.deepEqual(WATCHED_SYMBOLS.slice(0, 4), ['NASDAQ:PLTR', 'NASDAQ:TSLA', 'NASDAQ:NVDA', 'NASDAQ:GOOGL']);
  assert.deepEqual(marketWidgetConfig.watchlist, WATCHED_SYMBOLS);
  assert.equal(new Set(WATCHED_SYMBOLS).size, WATCHED_SYMBOLS.length);
  assert.equal(WATCHED_SYMBOLS.length, 24);
  assert.equal(marketWidgetConfig.symbol, WATCHED_SYMBOLS[0]);
  assert.equal(marketWidgetConfig.editablewatchlist, false);
  assert.equal(JSON.stringify(marketWidgetConfig).includes('apiKey'), false);
  assert.equal(marketWidgetConfig.autosize, true);
});
test('widget availability accepts only the expected frame and exact provider origin', () => {
  assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, true, { name: 'tv-widget-ready' }), 'ready');
  assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, true, { name: 'tv-widget-no-data' }), 'unavailable');
  assert.equal(widgetStatus('https://www.tradingview-widget.com.attacker.example', true, { name: 'tv-widget-ready' }), null);
  assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, false, { name: 'tv-widget-ready' }), null);
  for (const input of [null, '', 'tv-widget-ready', {}, { name: 'other' }]) assert.equal(widgetStatus(MARKET_WIDGET_ORIGIN, true, input), null);
});


test('mobile selections use only allowlisted symbols and preserve independent chart configs', () => {
  assert.deepEqual(Object.keys(WATCHED_COMPANIES).sort(), [...WATCHED_SYMBOLS].sort());
  const tesla = marketWidgetFor('NASDAQ:TSLA');
  const disney = marketWidgetFor('NYSE:DIS');
  assert.equal(tesla.symbol, 'NASDAQ:TSLA');
  assert.equal(disney.symbol, 'NYSE:DIS');
  assert.equal(marketWidgetConfig.symbol, 'NASDAQ:PLTR');
  assert.deepEqual(tesla.watchlist, WATCHED_SYMBOLS);
  tesla.watchlist.pop();
  assert.equal(disney.watchlist.length, 24);
  assert.equal(marketWidgetConfig.watchlist.length, 24);
  for (const symbol of ['', 'TSLA', 'NASDAQ:TSLA&redirect=example', 'https://example.com']) {
    assert.throws(() => marketWidgetFor(symbol), RangeError);
  }
});
