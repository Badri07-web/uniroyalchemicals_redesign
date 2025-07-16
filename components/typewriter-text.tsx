"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, delay = 0, speed = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed, started])

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}
