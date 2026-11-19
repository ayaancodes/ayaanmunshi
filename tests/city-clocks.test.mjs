import test from 'node:test';
import assert from 'node:assert/strict';
import { cityTime, CLOCK_CITIES } from '../src/lib/city-clocks.ts';

test('both city clocks use their IANA zones and switch between standard and daylight time', () => {
  for (const city of CLOCK_CITIES) {
    assert.deepEqual(cityTime(new Date('2026-01-15T12:00:00Z'), city.zone), { time: '07:00:00', zone: 'EST' });
    assert.deepEqual(cityTime(new Date('2026-07-15T12:00:00Z'), city.zone), { time: '08:00:00', zone: 'EDT' });
  }
});
test('clocks cross the spring DST boundary without showing a nonexistent local hour', () => {
  assert.equal(cityTime(new Date('2026-03-08T06:59:59Z'), 'America/Toronto').time, '01:59:59');
  assert.equal(cityTime(new Date('2026-03-08T07:00:00Z'), 'America/Toronto').time, '03:00:00');
  assert.equal(cityTime(new Date('2026-01-15T05:00:00Z'), 'America/New_York').time, '00:00:00');
});
