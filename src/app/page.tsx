'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import Link from 'next/link'
import PlayExploreCard from '@/components/PlayExploreCard'

export default function Home() {
  const [blackjackUnlocked, setBlackjackUnlocked] = React.useState(false)

  return (
    <>
      <Header />

      <h1 className="text-[3.0rem] font-serif tracking-tight text-primary">
        Ayaan Munshi
      </h1>

      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <h2 className="text-lg text-foreground">engineer</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-lg text-foreground">student</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-lg text-foreground">mustang</h2>
      </div>

      <p className="pt-4 text-base text-foreground leading-relaxed">
        Hi, I’m Ayaan, an engineering student fascinated by how
        <span className="hover-accent"> markets </span> shape systems, how
        <span className="hover-accent"> politics </span> drives incentives, and how
        <span className="hover-accent"> technology </span> amplifies them both.
        <br /><br />
        I’ve built and shipped software across many different industries, on track
        to total <span className="hover-accent">2 years</span> of internship
        experience before my senior year. 
        
      </p>

      {/* EXPLORE */}
      <section className="pt-10">
        <h2 className="font-medium tracking-tight text-foreground">Explore</h2>

        <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { href: '/experiences', title: 'Experiences', desc: 'Roles, teams, and tech I’ve worked on.' },
            { href: '/projects', title: 'Projects', desc: 'Independent builds and experiments.' },
            { href: '/thoughts', title: 'Writing', desc: 'Notes on markets, systems, and poker.' },
          ].map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="
                group explore-link rounded-xl
                border border-white/10
                px-4 py-2.5
                transition-all duration-200
                hover:border-[var(--explore-hover-border)]
                hover:bg-[var(--explore-hover-surface)]
              "
            >
              <div className="flex items-start justify-between gap-3 h-full">
                <div>
                  <p className="text-base font-medium tracking-tight text-foreground group-hover:text-primary">
                    {title}
                  </p>
                  <p className="pt-0.5 text-sm text-foreground/75 leading-snug">
                    {desc}
                  </p>
                </div>

                <span className="explore-arrow text-base text-foreground/70">→</span>
              </div>
            </Link>
          ))}

          <PlayExploreCard unlocked={blackjackUnlocked} />
        </div>
      </section>

      {/* back to normal */}
      <SocialLinks />

      {/* easter egg lives here (good job if you checked the codebase lol)*/}
      <Footer onUnlockBlackjack={() => setBlackjackUnlocked(true)} />
    </>
  )
}
