import Link from 'next/link'
import Footer from '@/components/Footer'
import { IoArrowBack } from 'react-icons/io5'

export default function NoteLayout({
  title,
  date,
  tags,
  children,
}: {
  title: string
  date: string
  tags?: string[]
  children: React.ReactNode
}) {
  return (
    <>
      <Link
        href="/thoughts"
        className="inline-flex items-center gap-1.5 pb-10 text-[var(--step-small)] text-muted transition-colors hover:text-accent"
      >
        <IoArrowBack className="h-3.5 w-3.5" />
        writing
      </Link>

      <article>
        <h1 className="text-title">{title}</h1>
        <p className="pt-2 text-meta">
          {date}
          {tags?.length ? ` · ${tags.join(' / ')}` : ''}
        </p>

        <div
          className="
            prose-reading
            prose mt-10 max-w-none
            prose-headings:font-sans prose-headings:font-medium
            prose-headings:tracking-tight prose-headings:text-foreground
            prose-p:text-foreground
            prose-li:text-foreground
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-accent prose-a:underline-offset-4
            prose-blockquote:border-l prose-blockquote:border-l-accent/40
            prose-blockquote:not-italic prose-blockquote:text-muted
            prose-code:font-sans prose-code:text-muted
            prose-hr:border-foreground/10
          "
        >
          {children}
        </div>
      </article>

      <Footer />
    </>
  )
}
