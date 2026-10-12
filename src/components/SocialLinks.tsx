import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const SOCIALS = [
  { href: 'mailto:ayaanmunshi456@gmail.com', label: 'email', Icon: FiMail },
  { href: 'https://github.com/ayaancodes', label: 'github', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/ayaan-munshi/',
    label: 'linkedin',
    Icon: FaLinkedin,
  },
  { href: 'https://x.com/ayaanmunshi', label: 'x', Icon: FaXTwitter },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {SOCIALS.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[var(--step-meta)] text-muted transition-colors hover:text-accent"
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </Link>
      ))}
    </div>
  )
}
