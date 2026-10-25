'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Footer({
  onUnlockBlackjack,
}: {
  onUnlockBlackjack?: () => void
}) {
  const [popped, setPopped] = React.useState(false)

  const handleAceClick = () => {
    if (popped) return
    setPopped(true)
    onUnlockBlackjack?.()
    setTimeout(() => setPopped(false), 700)
  }

  return (
    <footer className="pt-8">
      <hr className="h-px border-0 bg-foreground/20" />

      <div className="mx-1 flex items-center justify-between pt-4 md:mx-3">
        {/* LEFT: name + ace */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-foreground">
            © {new Date().getFullYear()} Ayaan
          </span>

          {/* tiny easter egg */}
          <button
            type="button"
            onClick={handleAceClick}
            className={`ace-btn ${popped ? 'ace-pop ace-grand' : ''}`}
            title="?"
          >
            <span className="ace-card">A♠</span>
            <span className={`ace-ripple ${popped ? 'ace-ripple-on' : ''}`} />
          </button>
        </div>

        {/* RIGHT: time */}
        <NowTime />
      </div>
    </footer>
  )
}

function NowTime() {
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [period, setPeriod] = useState('')
  const [blinking, setBlinking] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hourValue = now.getHours()
      const minuteValue = now.getMinutes()
      const periodValue = hourValue >= 12 ? 'PM' : 'AM'
      const formattedHours = hourValue % 12 || 12
      const formattedMinutes = minuteValue.toString().padStart(2, '0')

      setHours(formattedHours.toString())
      setMinutes(formattedMinutes)
      setPeriod(periodValue)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    const blinkInterval = setInterval(() => {
      setBlinking(prev => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(blinkInterval)
    }
  }, [])

  return (
    <div className="flex items-center gap-2">
      <Image
        alt="Evening Icon"
        width={12}
        height={13}
        src="/images/evening.svg"
        className="w-3 h-3.5 invert"
      />

      <span className="text-xs text-foreground transition duration-150">
        Toronto, {hours}
        <span className="animate-pulse" style={{ opacity: blinking ? 0 : 1 }}>
          :
        </span>
        {minutes} {period}
      </span>
    </div>
  )
}
