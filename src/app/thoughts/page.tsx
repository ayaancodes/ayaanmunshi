'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const thoughts = [
  {
    id: 1,
    title: 'Designing Grain Texture',
    description: 'minimal grain texture card .',
    date: 'Apr 02, 2025',
    slug: 'grain-texture',
    icon: 'https://ext.same-assets.com/937924524/3131399881.svg'
  },
  {
    id: 2,
    title: 'Interactive 3D Button',
    description: 'A hover button that reacts with a realistic 3D effect.',
    date: 'Mar 31, 2024',
    slug: '3d-button',
    icon: 'https://ext.same-assets.com/937924524/275937493.svg'
  }
]

export default function Thoughts() {
  return (
    <>
      <Header showHomeLink={true} />

      <h1 className="font-serif text-[2.5rem] tracking-tight text-primary">Thoughts</h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        some thoughts on design, code, and life.
      </h2>

      <section className="pt-4">
        <div className="flex flex-col">
          {thoughts.map(thought => (
            <Link
              key={thought.id}
              href={`/thoughts/${thought.slug}`}
              className="group -mx-3 mt-2 flex w-full gap-2.5 overflow-hidden rounded-xl px-3 py-3 transition-all duration-300 ease-in-out md:items-start md:hover:scale-[1.02] md:hover:bg-hoverColor"
            >
              <div className="flex w-full flex-col items-start">
                <div className="flex w-full items-center justify-between">
                  <h2 className="flex items-center justify-between font-medium tracking-tight text-primary group-hover:text-accent">
                    <span>{thought.title}</span>
                    <Image
                      src={thought.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="ml-2 invert"
                    />
                  </h2>
                  <p className="text-sm font-normal text-foreground">
                    {thought.date}
                  </p>
                </div>
                <p className="pt-0.5 text-sm font-normal text-foreground max-w-[90%] truncate">
                  {thought.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
