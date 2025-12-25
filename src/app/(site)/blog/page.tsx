'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = [
    {
      title: 'Interactive 3D Button',
      date: 'March 21, 2025',
      slug: '3d-button',
      excerpt: 'A hover button that reacts with a realistic 3D effect cooked in Framer.',
    },
    {
      title: 'Building Responsive Layouts',
      date: 'March 15, 2025',
      slug: 'responsive-layouts',
      excerpt: 'Learn how to create responsive layouts that work seamlessly across all devices.',
    },
    {
      title: 'Modern Animation Techniques',
      date: 'March 10, 2025',
      slug: 'animation-techinque',
      excerpt: 'Exploring modern web animation techniques using CSS and JavaScript.',
    }
  ]

  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary mb-8">Blog Posts</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-serif tracking-tight text-primary hover:text-primary/80">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-foreground mt-1">{post.date}</p>
              <p className="text-foreground mt-4">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}