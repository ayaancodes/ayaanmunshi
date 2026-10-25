'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import { THOUGHTS } from '@/content/thoughts'
import { EXPERIENCES } from '@/content/experiences'

function Section({
  title,
  href,
  moreLabel,
  children,
}: {
  title: string
  href?: string
  moreLabel?: string
  children: React.ReactNode
}) {
  return (
    <section className="pt-[var(--space-section)]">
      <div className="flex items-baseline justify-between">
        <h2 className="text-[var(--step-small)] font-medium">{title}</h2>
        {href && (
          <Link
            href={href}
            className="text-meta transition-colors hover:text-accent"
          >
            {moreLabel} →
          </Link>
        )}
      </div>
      <ul className="pt-[var(--space-group)]">{children}</ul>
    </section>
  )
}

function WorkRow({
  href,
  company,
  role,
  meta,
  image,
}: {
  href: string
  company: string
  role: string
  meta: string
  image: string
}) {
  return (
    <li className="border-b hairline last:border-0">
      <Link
        href={href}
        className="group relative -mx-3 flex min-h-[80px] items-center overflow-hidden rounded-lg px-3 py-4"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 38%, hsl(var(--background) / 0) 92%), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 flex w-full items-baseline justify-between gap-4">
          <span className="min-w-0">
            <span className="block font-medium transition-colors md:group-hover:text-accent">
              {company}
            </span>
            <span className="block pt-0.5 text-[var(--step-small)] text-muted">
              {role}
            </span>
          </span>
          <span className="shrink-0 text-meta">{meta}</span>
        </div>
      </Link>
    </li>
  )
}

function WritingRow({
  href,
  title,
  meta,
}: {
  href: string
  title: string
  meta: string
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-baseline justify-between gap-6 py-2"
      >
        <span className="truncate transition-colors group-hover:text-accent">
          {title}
        </span>
        <span className="shrink-0 text-meta">{meta}</span>
      </Link>
    </li>
  )
}

// Content dates are hand-written strings, some non-standard ("Sept 02, 2025").
const shortDate = (date: string) => {
  const parts = date.match(/^([A-Za-z]{3})[a-z]*\s+\d+,?\s*(\d{4})$/)
  return parts ? `${parts[1]} ${parts[2]}` : date
}

export default function Home() {
  const [blackjackUnlocked, setBlackjackUnlocked] = React.useState(false)

  const recentWriting = THOUGHTS.slice().reverse().slice(0, 3)
  const recentWork = EXPERIENCES.slice(0, 4)

  return (
    <>
      <Header />

      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0 pt-1">
          <h1 className="text-display">Ayaan Munshi</h1>
          <p className="pt-1.5 text-[var(--step-small)] text-muted">
            engineer · student · mustang
          </p>
        </div>

        <Image
          src="/photos/headshot.jpg"
          alt="Ayaan Munshi"
          width={320}
          height={400}
          priority
          className="h-[120px] w-24 shrink-0 rounded-xl object-cover object-[center_22%] sm:h-[160px] sm:w-32"
        />
      </div>

      <div className="max-w-content pt-[var(--space-group)]">
        <p>
          Hi, I&rsquo;m Ayaan, an engineering student fascinated by how{' '}
          <span className="hover-accent">markets</span> shape systems, how{' '}
          <span className="hover-accent">politics</span> drives incentives, and
          how <span className="hover-accent">technology</span> amplifies them
          both.
        </p>
        <p className="pt-4">
          I&rsquo;ve built and shipped software across several industries, on
          track to total two years of internship experience before my senior
          year. Right now I&rsquo;m most interested in starting something of my
          own.
        </p>
      </div>

      <Section title="Work" href="/experiences" moreLabel="all experiences">
        {recentWork.map(e => (
          <WorkRow
            key={e.slug}
            href="/experiences"
            company={e.company}
            role={e.role}
            meta={e.start}
            image={e.image}
          />
        ))}
      </Section>

      <Section title="Writing" href="/thoughts" moreLabel="all writing">
        {recentWriting.map(t => (
          <WritingRow
            key={t.slug}
            href={`/thoughts/${t.slug}`}
            title={t.title}
            meta={shortDate(t.date)}
          />
        ))}
      </Section>

      <Section title="Elsewhere">
        <WritingRow href="/reading" title="Reading" meta="" />
        {blackjackUnlocked && (
          <WritingRow href="/play" title="Blackjack" meta="you found the ace" />
        )}
      </Section>

      <div className="pt-[var(--space-section)]">
        <SocialLinks />
      </div>

      {/* easter egg lives here (good job if you checked the codebase lol) */}
      <Footer onUnlockBlackjack={() => setBlackjackUnlocked(true)} />
    </>
  )
}
