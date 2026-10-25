import fs from 'node:fs'
import path from 'node:path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PLACES } from '@/content/places'

export const metadata = {
  title: 'Places — Ayaan Munshi',
}

export default function PlacesPage() {
  // Photos are added by hand over time; skip any that aren't on disk yet
  // rather than shipping a broken <img> to the page.
  const places = PLACES.filter(p =>
    fs.existsSync(path.join(process.cwd(), 'public', p.image)),
  )

  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="font-serif text-[2.5rem] tracking-tight text-primary">
        Places
      </h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        the ones that shaped me.
      </h2>

      <section className="flex flex-col gap-10 pt-8">
        {places.map(place => (
          <figure key={place.city}>
            <div className="overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={place.image}
                alt={place.city}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out md:hover:scale-[1.03]"
              />
            </div>

            <figcaption className="flex items-baseline justify-between gap-4 pt-3">
              <span className="font-medium tracking-tight text-primary">
                {place.city}
                <span className="pl-2 text-sm font-normal text-foreground/60">
                  {place.region}
                </span>
              </span>
            </figcaption>

            <p className="pt-1 text-sm leading-snug text-foreground/75">
              {place.note}
            </p>
          </figure>
        ))}
      </section>

      <Footer />
    </>
  )
}
