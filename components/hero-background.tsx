"use client"

import { useEffect, useState } from "react"

export function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />

      {/* Animated Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rotate-45 animate-spin-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-bounce-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rotate-12 animate-float" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
    </div>
  )
}
