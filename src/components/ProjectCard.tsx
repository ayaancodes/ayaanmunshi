import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    role: string
    date: string
    location: string
    description: string
    tech: string[]
    link: string
    image?: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group relative -mx-3 w-full overflow-hidden rounded-lg px-3 py-3 transition-all duration-300 ease-in-out md:hover:scale-[1.01]"
      >
        {/* Background Image (exact style) */}
        {project.image && (
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        )}

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col gap-1 text-sm font-medium tracking-tight text-foreground">
          <h3 className="text-lg text-primary transition-colors md:group-hover:text-accent">
            {project.title}
          </h3>

          <p className="font-mono text-[0.7rem] text-zinc-500 uppercase tracking-wide">
            {project.role}
          </p>

          <p className="text-[11px] text-zinc-500">
            {project.date} · {project.location}
          </p>

          <p className="mt-1 text-sm text-zinc-400">{project.description}</p>

          <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-500">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-zinc-800/50 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
