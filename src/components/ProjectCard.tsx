import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    role: string
    description: string
    tech: string[]
    link: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-3 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor/10"
      >
        <div className="flex flex-col gap-1 text-sm font-medium tracking-tight text-foreground">
          {/* Company / Project Title */}
          <h3 className="text-lg text-primary md:group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Role */}
          <p className="font-mono text-[0.7rem] text-zinc-500 uppercase tracking-wide">
            {project.role}
          </p>

          {/* Description */}
          <p className="mt-1 text-sm text-zinc-400">{project.description}</p>

          {/* Tech stack */}
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
