"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=80&width=120&text=Client+1" },
  { name: "Client 2", logo: "/placeholder.svg?height=80&width=120&text=Client+2" },
  { name: "Client 3", logo: "/placeholder.svg?height=80&width=120&text=Client+3" },
  { name: "Client 4", logo: "/placeholder.svg?height=80&width=120&text=Client+4" },
  { name: "Client 5", logo: "/placeholder.svg?height=80&width=120&text=Client+5" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=120&text=Client+6" },
  { name: "Client 7", logo: "/placeholder.svg?height=80&width=120&text=Client+7" },
  { name: "Client 8", logo: "/placeholder.svg?height=80&width=120&text=Client+8" },
]

export function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 4))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Valued Clients</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
        Trusted by industry leaders across India for our quality products and reliable service.
      </p>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {clients.slice(slideIndex * 4, slideIndex * 4 + 4).map((client, index) => (
                  <Card
                    key={index}
                    className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white"
                  >
                    <CardContent className="p-4 md:p-6 flex items-center justify-center">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={120}
                        height={80}
                        className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 md:mt-8 space-x-2">
        {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-green-600" : "bg-green-200"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
