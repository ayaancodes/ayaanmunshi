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
      <Header showHomeLink={true} />

      <h1 className="font-serif text-[2.5rem] tracking-tight text-primary">
        Reading
      </h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        things worth keeping, and why.
      </h2>

      {Object.entries(periods).map(([period, items]) => (
        <section key={period} className="pt-8">
          <h3 className="text-xs uppercase tracking-wider text-foreground/60">
            {period}
          </h3>

          <div className="flex flex-col pt-2">
            {items.map(item => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-3 mt-2 rounded-xl px-3 py-3 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium tracking-tight text-primary group-hover:text-accent">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-sm text-foreground">
                    {item.author}
                  </span>
                </div>
                <p className="pt-1 text-sm text-foreground/75 leading-snug">
                  {item.note}
                </p>
              </a>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </>
  )
}
