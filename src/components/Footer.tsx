import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Footer() {
  return (
    <footer className="pt-8">
      <hr className="h-px border-0 bg-foreground/20" />
      <div className="mx-1 flex items-center justify-between pt-4 md:mx-3">
        <span className="text-xs text-foreground">
          © {new Date().getFullYear()} Salim
        </span>
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
    const interval = setInterval(updateTime, 60000) // Update every minute

    // Blink the colon
    const blinkInterval = setInterval(() => {
      setBlinking(prev => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(blinkInterval)
    }
  }, [])

  return (
    <div className="flex items-center gap-2" style={{ opacity: 1 }}>
      <div style={{ opacity: 1, transform: 'none' }}>
        <Image
          alt="Evening Icon"
          width={12}
          height={13}
          src="/images/evening.svg"
          className="w-3 h-3.5 invert"
        />
      </div>
      <span className="text-xs text-foreground transition duration-150" style={{ opacity: 1 }}>
        Kigali, {hours}
        <span className="animate-pulse" style={{ opacity: blinking ? 0 : 1 }}>:</span>
        {minutes} {period}
      </span>
    </div>
  )
}
