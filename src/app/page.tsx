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
    title: 'RBC Capital Markets',
    role: 'Software Engineer Intern - US Cash Management Team',
    description:
      'Developed a patent-pending agentic system optimizing transaction workflows.',
    tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
    link: 'https://www.rbccm.com/en/expertise/rbcclear.page'
  },
  {
    id: 2,
    title: 'RBC Capital Markets ',
    role: 'Software Engineeer Intern - Enterprise Market Risk Team',
    description:
      'Developed an web service automating delivery of real-time risk analytics',
    tech: ['JavaScript', 'Exchange Web Services', 'Redis', 'Express'],
    link: 'https://www.rbccm.com/en/'
  },
  {
    id: 3,
    title: 'Beats by Dre',
    role: 'Data Analytics Intern - Consumer Insights Team',
    description:
      'Designed Python analytics uncovering Gen Z listening trends to inform product strategy'
    ,
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    link: 'https://www.beatsbydre.com/ca'
  },
  {
    id: 4,
    title: 'Canam Group',
    role: 'Engineering Intern',
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
        <h2 className="text-base text-foreground">learner</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">thinker</h2>
      </div>

      <p className="pt-4 text-sm text-foreground leading-relaxed">
        Hi, I’m Ayaan, a software engineer fascinated by how
        <span className="text-primary"> markets </span> shape systems, how
        <span className="text-primary"> politics </span> drives incentives, and how
        <span className="text-primary"> technology </span> amplifies both.
        <br /><br />
        I’ve built and shipped software across startups, corporations, and banks.
        These days, I’m exploring how ideas spread and why people make the choices they do.
        <br /><br />
        Outside of work, you’ll find me playing soccer, exploring new cities, or catching up with friends.
      </p>



      <SocialLinks />

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Experiences</h2>
        <div className="pt-1.5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="group">
          <p className="mt-4 w-fit rounded-md border border-foreground/10 bg-hoverColor px-2 py-1 text-xs text-foreground transition-all duration-300 ease-in-out">
            Feel free to explore my{' '}
            <Link
              href="https://github.com/rsalim0?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-primary underline underline-offset-2 transition-all duration-150 ease-in-out md:hover:text-accent md:group-hover:text-accent"
            >
              GitHub
            </Link>{' '}
            for more projects. Most of them are open-source.
          </p>
        </div>
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
