import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "/thoughts", label: "writing" },
  { href: "/experiences", label: "experiences" },
  { href: "/reading", label: "reading" },
];

interface HeaderProps {
  showHomeLink?: boolean;
}

export default function Header({ showHomeLink = false }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between pb-10 text-[var(--step-small)]">
      {showHomeLink ? (
        <Link
          href="/"
          className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
        >
          <IoArrowBack className="h-3.5 w-3.5" />
          home
        </Link>
      ) : (
        <span />
      )}

      <div className="flex items-center gap-5">
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-muted transition-colors hover:text-accent"
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
