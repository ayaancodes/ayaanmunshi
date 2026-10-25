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
        className="group relative -mx-3 flex min-h-[104px] w-full items-center overflow-hidden rounded-lg px-3 py-5 text-left"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
          style={{
            // Fades to fully transparent so the photo actually reads on the right.
            backgroundImage: `linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 38%, hsl(var(--background) / 0) 92%), url(${e.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 flex w-full items-center justify-between gap-4">
          <span className="min-w-0">
            <span className="block text-[1.0625rem] font-medium transition-colors md:group-hover:text-accent">
              {e.company}
            </span>
            <span className="block pt-0.5 text-[var(--step-small)] text-muted">
              {e.role}
              {e.team && <span className="text-subtle"> · {e.team}</span>}
            </span>
            <span className="block pt-1 text-meta">
              {e.location} · {e.start} — {e.end}
            </span>
          </span>

          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
              open
                ? 'border-accent text-accent'
                : 'hairline text-muted group-hover:border-accent group-hover:text-accent'
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            >
              <path strokeLinecap="round" d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </button>

      {open && (
        <div className="pb-6 text-[var(--step-small)]">
          <p className="max-w-content">{e.summary}</p>

          {e.detail?.map(paragraph => (
            <p key={paragraph} className="max-w-content pt-3">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-4 text-meta">
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
