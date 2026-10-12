export type ReadingItem = {
  title: string
  author: string
  href: string
  /** Why it was worth keeping — the point of the whole page. */
  note: string
  /** Grouping label, e.g. "October 2026". Newest group first. */
  period: string
}

// Placeholders — replace these with what you've actually been reading.
export const READING: ReadingItem[] = [
  {
    title: 'Kelly Criterion',
    author: 'Wikipedia',
    href: 'https://en.wikipedia.org/wiki/Kelly_criterion',
    note: 'Position sizing is a solved problem and almost nobody sizes correctly. The same logic applies to how many things you try at once.',
    period: 'October 2026',
  },
  {
    title: 'Running a Software Business on 5 Hours a Week',
    author: 'Patrick McKenzie',
    href: 'https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/',
    note: 'Changed how I think about what a business actually has to be. Most of the work is not the code.',
    period: 'October 2026',
  },
  {
    title: 'The Bitter Lesson',
    author: 'Rich Sutton',
    href: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html',
    note: 'Ostensibly about ML, but the real claim is that general methods plus compute beat clever hand-built structure. Holds well beyond research.',
    period: 'September 2026',
  },
]
