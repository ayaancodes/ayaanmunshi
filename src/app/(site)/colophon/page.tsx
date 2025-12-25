'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Colophon() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Colophon</h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        /ˈkɒləfən/ — a brief statement at a book's end detailing its production.
      </h2>

      <p className="pt-4 text-sm font-normal text-foreground">
        Basically, it's a fancy word that I'm using to describe this website. This site is crafted with{' '}
        <span className="text-primary">Next.js</span> and{' '}
        <span className="text-primary">React</span>, hosted on{' '}
        <span className="text-primary">Vercel</span>, and designed in{' '}
        <span className="text-primary">Figma</span>. Plus, it's{' '}
        <span className="text-primary">eco-friendly</span>, producing only{' '}
        <Link
          href="https://www.websitecarbon.com/website/salim-engineer//"
          rel="noopener noreferrer"
          target="_blank"
          className="text-accent underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline"
        >
          0.010g of CO2
        </Link>{' '}
        every time someone visits.
      </p>

      <section>
        <h2 className="pt-8 text-base font-medium tracking-tight text-foreground">
          Inspiration
        </h2>
        <p className="pt-4 text-sm font-normal text-foreground">
          This website is heavily inspired by the works of{' '}
          <Link href="https://laskshay.dev" rel="noopener noreferrer" target="_blank" className="text-accent underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline">
            Laskshay
          </Link>,{' '}
          <Link href="https://zaidmukaddam.com/" rel="noopener noreferrer" target="_blank" className="text-accent underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline">
            Zaid Mukaddam
          </Link>,{' '}
          <Link href="https://bossadizenith.me/" rel="noopener noreferrer" target="_blank" className="text-accent underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline">
            Bossadi Zenith
          </Link>,{' '}
          <Link href="https://irere.dev/" rel="noopener noreferrer" target="_blank" className="text-accent underline-offset-4 transition duration-150 ease-in-out md:hover:text-primary md:hover:underline">
            Irere Emmanuel
          </Link>, and many more.
        </p>
      </section>

      <section>
        <h2 className="pt-8 text-base font-medium tracking-tight text-foreground">
          Personal Stack
        </h2>
        <ul className="list-disc px-4 pt-4 text-sm text-foreground">
          <li>
            <span className="text-primary">Arc</span> — A better way to browse the web.
          </li>
          <li>
            <span className="text-primary">0.email</span> — Futurised email app.
          </li>
          <li>
            <span className="text-primary">Spotify</span> — Music for every moment.
          </li>
          <li>
            <span className="text-primary">Cursorful</span> — A better Product demo tool.
          </li>
          <li>
            <span className="text-primary">Notion</span> — My personal note taking app.
          </li>
          <li>
            <span className="text-primary">VSCode</span> — Developer's best friend.
          </li>
          <li>
            <span className="text-primary">Figma</span> — Crafting modern ui.
          </li>
        </ul>
        <p className="pt-2 text-sm text-foreground">and many more...</p>
      </section>

      <section>
        <h2 className="pt-8 text-base font-medium tracking-tight text-foreground">
          Now Playing
        </h2>
        <div className="w-fit pt-4">
          <Link
            href="https://open.spotify.com/track/5wyQ4eXW6PmoDSom9qgmRR"
            rel="noopener noreferrer"
            target="_blank"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="group flex h-[45px] transition-all duration-300 ease-in-out md:hover:scale-105">
              <div
                className="ml-3 mt-1 flex flex-col items-start justify-center"
                style={{ opacity: 1, transform: 'none' }}
              >
                <h3 className="text-xs font-medium text-primary transition duration-150 ease-in-out md:group-hover:text-accent">
                  Mirror Lake
                  <Image
                    src="https://ext.same-assets.com/937924524/2846988213.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="inline-block ml-1 invert"
                  />
                </h3>
                <p className="text-xs text-foreground transition duration-150 ease-in-out md:group-hover:text-accent">
                  Angus MacRae
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
