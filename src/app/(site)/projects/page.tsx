'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Projects
      </h1>
      <p className="text-sm text-foreground/80">
        Under construction
      </p>

      <div className="mt-8 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground">
        <p>
          I’m polishing this section before I ship it publicly.
          Check back soon.
        </p>

        <p>
          <Link
            href="/"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            ← Back home
          </Link>
        </p>
      </div>

      <Footer />
    </>
  )
}
