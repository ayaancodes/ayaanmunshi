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
        I’ve built and shipped software across many different industries, on track to total{' '}
        <span className="text-primary">2 years</span> of internship experience before my senior year.
      </p>
{/* EXPLORE */}
<section className="pt-10">
  <h2 className="font-medium tracking-tight text-foreground">Explore</h2>

  <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
    <Link
      href="/experiences"
      className="group rounded-xl border border-white/10 bg-hoverColor/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-hoverColor/10"
    >
      <p className="text-sm text-primary group-hover:text-accent">Work</p>
      <p className="pt-1 text-sm text-foreground/80 leading-relaxed">
        Roles, teams, and tech I’ve worked on.
      </p>
    </Link>

    <Link
      href="/projects"
      className="group rounded-xl border border-white/10 bg-hoverColor/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-hoverColor/10"
    >
      <p className="text-sm text-primary group-hover:text-accent">Projects</p>
      <p className="pt-1 text-sm text-foreground/80 leading-relaxed">
        Independent builds and experiments.
      </p>
    </Link>

    <Link
      href="/thoughts"
      className="group rounded-xl border border-white/10 bg-hoverColor/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-hoverColor/10"
    >
      <p className="text-sm text-primary group-hover:text-accent">Writing</p>
      <p className="pt-1 text-sm text-foreground/80 leading-relaxed">
        Notes on markets, systems, and poker.
      </p>
    </Link>

    <Link
      href="/play"
      className="group rounded-xl border border-white/10 bg-hoverColor/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-hoverColor/10"
    >
      <p className="text-sm text-primary group-hover:text-accent">Play</p>
      <p className="pt-1 text-sm text-foreground/80 leading-relaxed">
        Small interactive experiments. For fun.
      </p>
    </Link>
  </div>
</section>





      <SocialLinks />



      <Footer />
    </>
  )
}
