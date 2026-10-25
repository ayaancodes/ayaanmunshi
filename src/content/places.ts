export type Place = {
  city: string
  region: string
  note: string
  image: string
  /** Required while these are CC BY-SA placeholders. Drop it with your own photo. */
  credit?: string
}

// Reword the notes however you like — these are my guess at the arc.
// Drop the photos into public/places/ with these exact filenames.
export const PLACES: Place[] = [
  {
    city: 'Brampton',
    region: 'Ontario',
    note: 'Home. Where the baseline got set.',
    image: '/places/brampton.jpg',
    credit: 'Peter K Burian, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    city: 'London',
    region: 'Ontario',
    note: 'Western, and the Mustangs.',
    image: '/places/london.jpg',
    credit: 'Mcalpinestudios, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    city: 'Toronto',
    region: 'Ontario',
    note: 'Where most of the work happened.',
    image: '/places/toronto.jpg',
    credit: 'Dillan Payne, CC BY-SA 4.0, via Wikimedia Commons',
  },
  {
    city: 'New York',
    region: 'New York',
    note: 'Rippling, summer 2026.',
    image: '/places/nyc.jpg',
  },
]
