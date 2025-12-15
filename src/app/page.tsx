'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Rippling',
    role: 'Software Engineer Intern - Time Tracking Team',
    date: 'Incoming May 2026 - August 2026',
    location: 'New York, USA',
    description:
      'Incoming Summer 2026',
    tech: ['Python', 'Django', 'AWS', 'React'],
    link: 'https://www.rippling.com/about'
  },
  {
    id: 2,
    title: 'BMO Capital Markets',
    role: 'Quantitative Trading Intern - Global Markets Team',
    date: 'Incoming January 2026 - April 2026',
    location: 'Toronto, Canada',
    description:
      'Incoming Winter 2026',
    tech: ['Python', 'KDB/Q', 'SQL', 'Excel'],
    link: 'https://capitalmarkets.bmo.com/en/about-us/'
  },
  {
    id: 3,
    title: 'RBC Capital Markets ',
    role: 'Quantitative Developer Intern - Quantitative Technology Services Team',
    date: 'September 2025 - December 2025',
    location: 'Toronto, Canada',
    description:
      'Built out a centralized datastore for a 40+ app ecosystem supporting corporate bankers.',
    tech: ['C#', 'Python', 'SQL', 'Azure', 'React'],
    link: 'https://www.rbccm.com/en/about-us'
  },
  {
    id: 4,
    title: 'RBC Capital Markets',
    role: 'Software Engineer Intern - US Cash Management Team (Amplify)',
    date: 'May 2025 - August 2025',
    location: 'Toronto, Canada',
    description:
      'Developed a patent-pending agentic system optimizing transaction workflows.',
    tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
    link: 'https://www.rbccm.com/en/expertise/rbcclear.page'
  },
  {
    id: 5,
    title: 'RBC Capital Markets ',
    role: 'Software Engineeer Intern - Enterprise Market Risk Team',
    date: 'May 2024 - August 2024',
    location: 'Toronto, Canada',
    description:
      'Developed an web service automating delivery of real-time risk analytics',
    tech: ['JavaScript', 'Exchange Web Services', 'Redis', 'Express'],
    link: 'https://www.rbccm.com/en/about-us'
  },
  {
    id: 6,
    title: 'Beats by Dre',
    date: 'February 2025 - March 2025',
    location: 'California, USA (Remote)',
    role: 'Data Analytics Intern - Consumer Insights Team',
    description:
      'Designed Python analytics uncovering Gen Z listening trends to inform product strategy'
    ,
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    link: 'https://www.beatsbydre.com/ca'
  },
  {
    id: 7,
    title: 'Canam Group',
    role: 'Engineering Intern',
    date: 'May 2023 - August 2023',
    location: 'Mississauga, Canada',
    description:
      'Engineered a live telemetry-driven shipment tracker optimizing delivery efficiency ',
    tech: ['C#', 'SQL', 'Azure', 'Grafana'],
    link: 'https://www.canam.com/en/'
  }
]


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
        <h2 className="text-base text-foreground">pathfinder</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">calisthenic</h2>
      </div>

      <p className="pt-4 text-sm text-foreground leading-relaxed">
        Hi, I’m Ayaan, a software engineer fascinated by how markets
        <span className="text-primary"> markets </span> shape systems, how
        <span className="text-primary"> politics </span> drives incentives, and how
        <span className="text-primary"> technology </span> amplifies both.
        <br /><br />
        I’ve built and shipped software across many different industries.

        <br /><br />
        Outside of work, you’ll find me playing soccer, learning poker, or finding new spots to backpack.
      </p>



      <SocialLinks />

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Experiences</h2>
        <div className="pt-1.5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* <div className="group">
          <p className="mt-4 w-fit rounded-md border border-foreground/10 bg-hoverColor px-2 py-1 text-xs text-foreground transition-all duration-300 ease-in-out">
            Feel free to explore my{' '}
            <Link
              href="https://github.com/ayaancodes"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-primary underline underline-offset-2 transition-all duration-150 ease-in-out md:hover:text-accent md:group-hover:text-accent"
            >
              GitHub
            </Link>{' '}
            for more projects. 
          </p>
        </div> */}
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
