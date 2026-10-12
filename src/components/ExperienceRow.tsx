'use client'

import { useState } from 'react'
import type { Experience } from '@/content/experiences'

export default function ExperienceRow({
  experience: e,
}: {
  experience: Experience
}) {
  const [open, setOpen] = useState(false)

  return (
    <li className="border-b hairline">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="group relative -mx-3 w-full overflow-hidden rounded-lg px-3 py-4 text-left"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--background)) 32%, hsl(var(--background) / 0.25)), url(${e.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 flex items-baseline justify-between gap-4">
          <span className="min-w-0">
            <span className="block font-medium transition-colors md:group-hover:text-accent">
              {e.company}
            </span>
            <span className="block text-[var(--step-small)] text-muted">
              {e.role}
              {e.team && <span className="text-subtle"> · {e.team}</span>}
            </span>
          </span>

          <span className="flex shrink-0 items-center gap-2 text-meta">
            {e.start}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className={`h-3 w-3 transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            >
              <path strokeLinecap="round" d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </button>

      {open && (
        <div className="pb-5 pl-3 text-[var(--step-small)]">
          <p className="text-meta">
            {e.location} · {e.start} — {e.end}
          </p>

          <p className="max-w-content pt-3">{e.summary}</p>

          {e.detail?.map(paragraph => (
            <p key={paragraph} className="max-w-content pt-3">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-4 text-meta">
            {e.tech.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <a
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[var(--step-meta)] text-muted transition-colors hover:text-accent"
          >
            {e.company} ↗
          </a>
        </div>
      )}
    </li>
  )
}
