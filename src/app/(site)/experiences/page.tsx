import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ExperienceRow from '@/components/ExperienceRow'
import { EXPERIENCES } from '@/content/experiences'

export const metadata = {
  title: 'Experiences — Ayaan Munshi',
}

export default function ExperiencesPage() {
  return (
    <>
      <Header showHomeLink />

      <h1 className="text-title">Experiences</h1>
      <p className="pt-1 text-[var(--step-small)] text-muted">
        where I&rsquo;ve worked. click a role for detail.
      </p>

      <ul className="pt-[var(--space-group)]">
        {EXPERIENCES.map(e => (
          <ExperienceRow key={e.slug} experience={e} />
        ))}
      </ul>

      <Footer />
    </>
  )
}
