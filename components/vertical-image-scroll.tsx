"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const labImages = [
  {
    src: "/placeholder.svg?height=300&width=400&text=Quality+Testing+Lab",
    alt: "Quality Testing Laboratory",
    title: "Advanced Testing Facility"
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Chemical+Analysis",
    alt: "Chemical Analysis Equipment",
    title: "Precision Analysis"
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=R%26D+Laboratory",
    alt: "Research & Development Lab",
    title: "Innovation Center"
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Manufacturing+Floor",
    alt: "Manufacturing Facility",
    title: "Production Excellence"
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Quality+Control",
    alt: "Quality Control Station",
    title: "Quality Assurance"
  },
  {
    src: "/placeholder.svg?height=300&width=400&text=Laboratory+Equipment",
    alt: "Modern Lab Equipment",
    title: "State-of-the-Art Technology"
  }
]

export function VerticalImageScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollHeight / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollTop = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="relative h-96 overflow-hidden rounded-lg border border-green-200 shadow-lg">
      <div
        ref={scrollRef}
        className="h-full overflow-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="space-y-4">
          {/* First set of images */}
          {labImages.map((image, index) => (
            <Card key={`first-${index}`} className="border-green-200 bg-white consistent-box dynamic-hover">
              <CardContent className="consistent-card-content">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {/* Duplicate set for seamless loop */}
          {labImages.map((image, index) => (
            <Card key={`second-${index}`} className="border-green-200 bg-white consistent-box dynamic-hover">
              <CardContent className="consistent-card-content">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}