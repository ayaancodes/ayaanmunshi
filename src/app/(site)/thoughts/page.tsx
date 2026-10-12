'use client'

import React, { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { THOUGHTS } from '@/content/thoughts'

function WritingInner() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const activeTag = (searchParams.get('tag') || 'all').toLowerCase()

  const allTags = React.useMemo(() => {
    const set = new Set<string>()
    THOUGHTS.forEach(t => t.tags.forEach(tag => set.add(tag.toLowerCase())))
    return Array.from(set).sort()
  }, [])

  const posts = React.useMemo(() => {
    const sorted = [...THOUGHTS].sort((a, b) => b.id - a.id)
    if (activeTag === 'all') return sorted
    return sorted.filter(t =>
      t.tags.map(tag => tag.toLowerCase()).includes(activeTag),
    )
  }, [activeTag])

  const setTag = (tag: string) =>
    router.push(tag === 'all' ? '/thoughts' : `/thoughts?tag=${encodeURIComponent(tag)}`)

  return (
    <>
      <Header showHomeLink />

      <h1 className="text-title">Writing</h1>
      <p className="pt-1 text-[var(--step-small)] text-muted">
        notes on markets, systems, and the occasional hand of poker.
      </p>

      <div className="flex flex-wrap gap-2 pt-[var(--space-group)]">
        {['all', ...allTags].map(tag => (
          <button
            key={tag}
            type="button"
            onClick={() => setTag(tag)}
            className={`rounded-full border px-3 py-1 text-[var(--step-meta)] transition-colors ${
              activeTag === tag
                ? 'border-accent text-accent'
                : 'hairline text-muted hover:text-accent'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul className="pt-[var(--space-group)]">
        {posts.map(post => (
          <li key={post.id} className="border-b hairline">
            <Link
              href={`/thoughts/${post.slug}`}
              className="group block py-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium transition-colors group-hover:text-accent">
                  {post.title}
                </span>
                <span className="shrink-0 text-meta">{post.date}</span>
              </div>
              <p className="max-w-content pt-1 text-[var(--step-small)] text-muted">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <Footer />
    </>
  )
}

export default function WritingPage() {
  return (
    <Suspense fallback={null}>
      <WritingInner />
    </Suspense>
  )
}
