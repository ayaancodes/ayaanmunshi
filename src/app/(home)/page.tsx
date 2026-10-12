'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import { THOUGHTS } from '@/content/thoughts'
import { EXPERIENCES } from '@/content/experiences'

function SectionLinkList({
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

function Row({
  href,
  primary,
  secondary,
  meta,
  external,
}: {
  href: string
  primary: string
  secondary?: string
  meta: string
  external?: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-baseline justify-between gap-6 py-2"
      >
        <span className="min-w-0">
          <span className="block truncate transition-colors group-hover:text-accent">
            {primary}
          </span>
          {secondary && (
            <span className="block text-[var(--step-meta)] text-muted">
              {secondary}
            </span>
          )}
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

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-display">Ayaan Munshi</h1>
          <p className="pt-1 text-[var(--step-small)] text-muted">
            engineer · student · mustang
          </p>
        </div>

        <Image
          src="/photos/headshot.jpg"
          alt="Ayaan Munshi"
          width={160}
          height={160}
          priority
          className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
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

      <SectionLinkList title="Writing" href="/thoughts" moreLabel="all writing">
        {recentWriting.map(t => (
          <Row
            key={t.slug}
            href={`/thoughts/${t.slug}`}
            primary={t.title}
            meta={shortDate(t.date)}
          />
        ))}
      </SectionLinkList>

      <SectionLinkList
        title="Work"
        href="/experiences"
        moreLabel="all experiences"
      >
        {recentWork.map(e => (
          <Row
            key={e.slug}
            href="/experiences"
            primary={e.company}
            secondary={e.role}
            meta={e.start}
          />
        ))}
      </SectionLinkList>

      <SectionLinkList title="Elsewhere">
        <Row
          href="/reading"
          primary="Reading"
          secondary="Things worth keeping."
          meta=""
        />
        {blackjackUnlocked && (
          <Row
            href="/play"
            primary="Blackjack"
            secondary="You found the ace."
            meta=""
          />
        )}
      </SectionLinkList>

      <div className="pt-[var(--space-section)]">
        <SocialLinks />
      </div>

      {/* easter egg lives here (good job if you checked the codebase lol) */}
      <Footer onUnlockBlackjack={() => setBlackjackUnlocked(true)} />
    </>
  )
}
