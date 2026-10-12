import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { READING } from '@/content/reading'

export const metadata = {
  title: 'Reading — Ayaan Munshi',
}

export default function ReadingPage() {
  const periods = READING.reduce<Record<string, typeof READING>>(
    (acc, item) => {
      acc[item.period] = acc[item.period] ?? []
      acc[item.period].push(item)
      return acc
    },
    {},
  )

  return (
    <>
      <Header showHomeLink />

      <h1 className="text-title">Reading</h1>
      <p className="pt-1 text-[var(--step-small)] text-muted">
        things worth keeping, and why.
      </p>

      {Object.entries(periods).map(([period, items]) => (
        <section key={period} className="pt-[var(--space-section)]">
          <h2 className="text-meta uppercase tracking-wider">{period}</h2>

          <ul className="pt-[var(--space-group)]">
            {items.map(item => (
              <li key={item.href} className="border-b hairline py-4">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span className="block font-medium transition-colors group-hover:text-accent">
                    {item.title}
                  </span>
                  <span className="block text-[var(--step-meta)] text-muted">
                    {item.author}
                  </span>
                </a>
                <p className="max-w-content pt-2 text-[var(--step-small)] text-muted">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <Footer />
    </>
  )
}
