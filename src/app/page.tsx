'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import Image from 'next/image'



const blogs = [
  {
    id: 1,
    title: 'why we built shipfree',
    views: 918,
    date: 'Feb 21, 2025',
    link: '/blog/why-we-built-shipfree'
  },
  {
    id: 2,
    title: 'Creating Grainy Textures in Figma',
    views: 423,
    date: 'Mar 15, 2025',
    link: '/blog/grainy-textures'
  }
]

const photos = [
  {
    id: 1,
    src: '/photos/me.png',
    alt: 'Workspace setup',
    className: 'col-span-2 row-span-6'
  },
  {
    id: 2,
    src: '/photos/cat.png',
    alt: 'My Cute cat',
    className: 'col-span-2 row-span-3'
  },
  {
    id: 3,
    src: '/photos/setup.png',
    alt: 'setup',
    className: 'col-span-2 row-span-3'
  },
]

export default function Home() {
  return (
    <>
      <Header />

     <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Ayaan Munshi
      </h1>

      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <h2 className="text-base text-foreground">engineer</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">student</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">pathfinder</h2>
      </div>

      <p className="pt-4 text-sm text-foreground leading-relaxed">
        Hi, I’m Ayaan, a software engineer fascinated by how
        <span className="text-primary"> markets </span> shape systems, how
        <span className="text-primary"> politics </span> drives incentives, and how
        <span className="text-primary"> technology </span> amplifies them both.
        <br /><br />
        I’ve built and shipped software across many different industries, on track to total <span className="text-primary">2 years</span> of internship experience by my senior year.

        <Link
          href="/experiences"
          className="group -mx-3 block w-fit rounded-lg px-3 py-2 transition-all duration-300 md:hover:bg-hoverColor/10"
        >
          <span className="text-sm text-primary underline underline-offset-4 md:group-hover:text-accent">
            view my work experiences
          </span>
        </Link>

        <br /><br />
        Right now, you’ll find me getting back into soccer, learning poker, or writing about things I'm interested in.
      </p> 



      <SocialLinks />

      <section className="pt-8">
        <Link
          href="/experiences"
          className="group -mx-3 block w-fit rounded-lg px-3 py-2 transition-all duration-300 md:hover:bg-hoverColor/10"
        >
          <span className="text-sm text-primary underline underline-offset-4 md:group-hover:text-accent">
            view my work experiences
          </span>
        </Link>
      </section>

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Blog</h2>
        <div className="pt-1.5">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
