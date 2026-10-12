export type Place = {
  city: string
  note: string
  image: string
}

// Reword these notes however you like — they're my guess at the arc.
export const PLACES: Place[] = [
  {
    city: 'Brampton',
    note: 'home.',
    image: '/places/brampton.jpg',
  },
  {
    city: 'London',
    note: 'school, and the Mustangs.',
    image: '/places/london.jpg',
  },
  {
    city: 'Toronto',
    note: 'where most of the work happened.',
    image: '/places/toronto.jpg',
  },
  {
    city: 'New York',
    note: 'next summer.',
    image: '/places/nyc.jpg',
  },
]
