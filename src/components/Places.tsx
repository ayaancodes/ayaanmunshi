import { PLACES } from '@/content/places'

export default function Places() {
  return (
    <section className="pt-[var(--space-section)]">
      <h2 className="text-[var(--step-small)] font-medium">Places</h2>
      <p className="pt-1 text-meta">four that shaped me.</p>

      <ul className="grid grid-cols-2 gap-3 pt-[var(--space-group)] sm:grid-cols-4">
        {PLACES.map(place => (
          <li key={place.city}>
            {/* The tint shows through until a photo is dropped in. */}
            <div className="surface-subtle aspect-[4/5] overflow-hidden rounded-md">
              <img
                src={place.image}
                alt={place.city}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
            <p className="pt-2 text-[var(--step-meta)] font-medium">
              {place.city}
            </p>
            <p className="text-meta">{place.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
