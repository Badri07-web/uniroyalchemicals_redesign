"use client"

import { useEffect, useState } from "react"

const newsItems = [
  "🎉 New Metallic Stearates product line launched",
  "🏆 ISO 9001:2015 certification renewed",
  "🌱 Sustainable PVC additives now available",
  "📈 Expanding production capacity by 30%",
  "🤝 New partnership with leading pipe manufacturers",
  "🔬 Advanced R&D facility inaugurated",
]

export function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-green-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
            NEWS
          </span>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {newsItems.map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
