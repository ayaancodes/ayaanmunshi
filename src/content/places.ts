export type Place = {
  city: string
  region: string
  note: string
  image: string
}

// Reword the notes however you like — these are my guess at the arc.
// Drop the photos into public/places/ with these exact filenames.
export const PLACES: Place[] = [
  {
    city: 'Brampton',
    region: 'Ontario',
    note: 'Home. Where the baseline got set.',
    image: '/places/brampton.jpg',
  },
  {
    city: 'London',
    region: 'Ontario',
    note: 'Western, and the Mustangs.',
    image: '/places/london.jpg',
  },
  {
    city: 'Toronto',
    region: 'Ontario',
    note: 'Where most of the work happened.',
    image: '/places/toronto.jpg',
  },
  {
    city: 'New York',
    region: 'New York',
    note: 'Next summer.',
    image: '/places/nyc.jpg',
  },
]
