'use client'

import CompetingEssay from '@/content/writings/CompetingEssay'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function CompetingAgainstSmartPeople() {
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
                Competing Against Smart People Is a Losing Game
            </h1>
            <p className="text-sm text-foreground/80">
                Dec 26, 2025 · Thoughts / Psychology
            </p>

      <CompetingEssay/>


            <Footer />
        </>
    )
}
