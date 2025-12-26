'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { THOUGHTS } from '@/content/thoughts'

export default function Thoughts() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const activeTag = (searchParams.get('tag') || 'all').toLowerCase()

  const allTags = React.useMemo(() => {
    const set = new Set<string>()
    THOUGHTS.forEach(thought =>
      thought.tags.forEach(tag => set.add(tag.toLowerCase()))
    )
    return Array.from(set).sort()
  }, [])

  const filteredThoughts = React.useMemo(() => {
    if (activeTag === 'all') return THOUGHTS
    return THOUGHTS.filter(thought =>
      thought.tags.map(t => t.toLowerCase()).includes(activeTag)
    )
  }, [activeTag])

  const setTag = (tag: string) => {
    if (tag === 'all') {
      router.push('/thoughts')
    } else {
      router.push(`/thoughts?tag=${encodeURIComponent(tag)}`)
    }
  }

  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="font-serif text-[2.5rem] tracking-tight text-primary">
        Thoughts
      </h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        some thoughts on design, code, and life.
      </h2>

      {/* TAG FILTER */}
      <div className="pt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTag('all')}
          className={`rounded-full border px-3 py-1 text-xs transition
            ${
              activeTag === 'all'
                ? 'border-white/25 bg-white/10 text-primary'
                : 'border-white/10 text-foreground hover:bg-white/5'
            }`}
        >
          All
        </button>

        {allTags.map(tag => (
          <button
            key={tag}
            type="button"
            onClick={() => setTag(tag)}
            className={`rounded-full border px-3 py-1 text-xs transition
              ${
                activeTag === tag
                  ? 'border-white/25 bg-white/10 text-primary'
                  : 'border-white/10 text-foreground hover:bg-white/5'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* THOUGHT LIST */}
      <section className="pt-4">
        <div className="flex flex-col">
          {filteredThoughts.map(thought => (
            <Link
              key={thought.id}
              href={`/thoughts/${thought.slug}`}
              className="group -mx-3 mt-2 flex w-full gap-2.5 overflow-hidden rounded-xl px-3 py-3 transition-all duration-300 ease-in-out md:items-start md:hover:scale-[1.02] md:hover:bg-hoverColor"
            >
              <div className="flex w-full flex-col items-start">
                <div className="flex w-full items-center justify-between">
                  <h2 className="flex items-center gap-2 font-medium tracking-tight text-primary group-hover:text-accent">
                    <span>{thought.title}</span>
                    <Image
                      src={thought.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="invert"
                    />
                  </h2>
                  <p className="text-sm font-normal text-foreground">
                    {thought.date}
                  </p>
                </div>

                <p className="pt-0.5 text-sm font-normal text-foreground max-w-[90%] truncate">
                  {thought.description}
                </p>

                {/* TAGS PER POST */}
                <div className="pt-2 flex gap-2 flex-wrap">
                  {thought.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] rounded-full border border-white/10 px-2 py-0.5 text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
