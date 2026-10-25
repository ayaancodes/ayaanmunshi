import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PlayPage() {
  return (
    <>
      <Header showHomeLink />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Blackjack
      </h1>
      <p className="text-sm text-foreground/80">
        Under construction.
      </p>

      <div className="pt-6">
        <Link
          href="/"
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-foreground/80 hover:bg-white/5"
        >
          Back
        </Link>
      </div>

      <Footer />
    </>
  )
}
