'use client'

import OptionsTerminology from '@/content/writings/OptionsTerminology'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function OptionsNotesChapter1() {
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
        Options Notes - Terminology 
      </h1>
      <p className="text-sm text-foreground/80">
        August 26, 2025 · Options / Markets
      </p>

      <OptionsTerminology/>


      <Footer />
    </>
  )
}

