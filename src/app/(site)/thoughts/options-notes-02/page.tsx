'use client'

import OptionsStrategies from '@/content/writings/OptionsStrategies'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function OptionsNotesChapter2() {
  return (

    <>
      <Link
        href="/thoughts"
        className="
    inline-flex items-center gap-2
    text-sm text-foreground/70
    hover:text-primary
    transition-colors
    mb-4
  "
      >
        ← Back to Thoughts
      </Link>
      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Elementary Strategies
      </h1>
      <p className="text-sm text-foreground/80">
        August 27, 2025 · Options / Markets
      </p>

      <OptionsStrategies/>


      <Footer />
    </>
  )
}
