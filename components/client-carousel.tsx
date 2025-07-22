"use client"

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
  { name: "Client 9", logo: "/placeholder.svg?height=80&width=120&text=Client+9" },
  { name: "Client 10", logo: "/placeholder.svg?height=80&width=120&text=Client+10" },
  { name: "Client 11", logo: "/placeholder.svg?height=80&width=120&text=Client+11" },
  { name: "Client 12", logo: "/placeholder.svg?height=80&width=120&text=Client+12" },
]

export function ClientCarousel() {
  return (
    <div className="text-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Valued Clients</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
        Trusted by industry leaders across India for our quality products and reliable service.
      </p>

      <div className="relative">
        <div className="flex animate-scroll-horizontal">
          {/* First set of clients */}
          {clients.map((client, index) => (
            <Card
              key={`first-${index}`}
              className="flex-shrink-0 w-48 mx-4 border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white consistent-box dynamic-hover"
            >
              <CardContent className="consistent-card-content flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </CardContent>
            </Card>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <Card
              key={`second-${index}`}
              className="flex-shrink-0 w-48 mx-4 border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white consistent-box dynamic-hover"
            >
              <CardContent className="consistent-card-content flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
