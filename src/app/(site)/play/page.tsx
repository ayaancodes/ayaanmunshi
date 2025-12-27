'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PlayPage() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Blackjack
      </h1>
      <p className="text-sm text-foreground/80">
        Under construction
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-foreground/80 underline hover:text-primary"
        >
          Back to home
        </Link>
      </div>

      <Footer />
    </>
  )
}
