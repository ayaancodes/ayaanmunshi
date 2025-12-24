'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function PlayExploreCard({ unlocked }: { unlocked: boolean }) {
  const router = useRouter()
  const [phase, setPhase] = React.useState<'idle' | 'decrypting' | 'done'>('idle')
  const [desc, setDesc] = React.useState('Try clicking something on this page...')

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])


  const target = 'Play Blackjack'
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>!@#$%^&*_-+=;:,.?/\\|~'

  const randomString = (len: number) => {
    let out = ''
    for (let i = 0; i < len; i++) {
      out += charset[Math.floor(Math.random() * charset.length)]
    }
    return out
  }

  const makeGlitch = () => `${randomString(8)} ${randomString(10)} ${randomString(8)}`
  const [display, setDisplay] = React.useState<string>('') // deterministic for SSR/hydration

  // Idle → glitch text every 0.5s (only while locked)
  React.useEffect(() => {
    if (!mounted) return
    if (phase !== 'idle') return
    if (unlocked) return

    const tick = () => setDisplay(makeGlitch())
    tick()

    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [mounted, phase, unlocked])


  // Reset back to locked state when unlocked becomes false
  React.useEffect(() => {
    if (!unlocked) {
      setPhase('idle')
      setDesc('Try clicking something on this page...')
      setDisplay(makeGlitch())
    }
  }, [unlocked])

  // When unlocked, start decrypt automatically
  React.useEffect(() => {
    if (!unlocked) return
    if (phase !== 'idle') return
    setPhase('decrypting')
  }, [unlocked, phase])

  // Decrypt → reveal "Play Blackjack"
  React.useEffect(() => {
    if (phase !== 'decrypting') return

    setDesc('If you dare.')
    let i = 0

    const id = setInterval(() => {
      i += 1
      const revealed = target.slice(0, i)
      const noise = randomString(Math.max(0, target.length - i))
      setDisplay(revealed + noise)

      if (i >= target.length) {
        clearInterval(id)
        setPhase('done')
      }
    }, 55)

    return () => clearInterval(id)
  }, [phase])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (phase !== 'done') return
    router.push('/play') // later when you build it
  }

  return (
    <a
      href=""
      onClick={handleClick}
      className="
        group explore-link rounded-xl
        border border-white/10
        px-4 py-3
        transition-all duration-200
        hover:border-[var(--explore-hover-border)]
        hover:bg-[var(--explore-hover-surface)]
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className="
              h-[20px] overflow-hidden
              text-[12px] sm:text-[13px]
              font-medium tracking-tight
              text-foreground group-hover:text-primary
              font-mono whitespace-nowrap
            "
            title={phase === 'done' ? 'Click to open' : 'Locked'}
          >
            {phase === 'done' ? target : display}
          </p>

          <p className="pt-1 text-[12.5px] text-foreground/75 leading-relaxed">
            {desc}
          </p>
        </div>

        <span className="explore-arrow text-[12px] text-foreground/70">→</span>
      </div>
    </a>
  )
}
