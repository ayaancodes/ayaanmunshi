import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div className="w-fit grid grid-cols-3 gap-4 pt-4 tracking-tight md:flex md:flex-row md:items-start">
      {/* Email */}
      <Link
        href="mailto:ayaanmunshi456@gmail..com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FiMail className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">email</span>
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/ayaancodes"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FaGithub className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">github</span>
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/ayaan-munshi/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FaLinkedin className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">linkedin</span>
      </Link>
    </div>
  )
}
