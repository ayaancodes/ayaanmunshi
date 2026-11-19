export const CLOCK_CITIES = [
  { name: 'Toronto', zone: 'America/Toronto' },
  { name: 'New York', zone: 'America/New_York' },
] as const;

export function cityTime(date: Date, zone: typeof CLOCK_CITIES[number]['zone']) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', timeZoneName: 'short' }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find(item => item.type === type)?.value ?? '';
  return { time: `${part('hour')}:${part('minute')}:${part('second')}`, zone: part('timeZoneName') };
}
