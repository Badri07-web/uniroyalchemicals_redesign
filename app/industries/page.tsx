import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building, Car, Zap, Home, Factory, Wrench } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function IndustriesPage() {
  const industries = [
    {
      name: "Pipes & Fittings",
      icon: Building,
      description: "Comprehensive range of PVC additives for water supply, drainage, and industrial piping systems.",
      applications: ["Water Supply Pipes", "Drainage Systems", "Industrial Piping", "Pressure Pipes"],
      products: ["Lead Stabilisers", "Calcium Zinc Stabilisers", "Lubricants"],
      image: "/placeholder.svg?height=300&width=400&text=Pipes+and+Fittings",
    },
    {
      name: "Cables & Wires",
      icon: Zap,
      description: "Specialized additives for electrical cable sheathing and insulation applications.",
      applications: ["Power Cables", "Telecommunication Cables", "Building Wires", "Automotive Wires"],
      products: ["Plasticisers", "Stabilisers", "Flame Retardants"],
      image: "/placeholder.svg?height=300&width=400&text=Cables+and+Wires",
    },
    {
      name: "Window Profiles",
      icon: Home,
      description: "High-performance additives for window frames, door profiles, and architectural applications.",
      applications: ["UPVC Windows", "Door Frames", "Architectural Profiles", "Glazing Systems"],
      products: ["Calcium Zinc Stabilisers", "Impact Modifiers", "Lubricants"],
      image: "/placeholder.svg?height=300&width=400&text=Window+Profiles",
    },
    {
      name: "Automotive",
      icon: Car,
      description: "Automotive-grade PVC additives for interior and exterior automotive components.",
      applications: ["Dashboard Components", "Door Panels", "Interior Trim", "Sealing Systems"],
      products: ["Plasticisers", "Stabilisers", "Colorants"],
      image: "/placeholder.svg?height=300&width=400&text=Automotive",
    },
    {
      name: "Construction",
      icon: Factory,
      description: "Durable additives for construction materials and building components.",
      applications: ["Roofing Materials", "Flooring", "Wall Panels", "Structural Components"],
      products: ["Lead Stabilisers", "Weather Modifiers", "UV Stabilisers"],
      image: "/placeholder.svg?height=300&width=400&text=Construction",
    },
    {
      name: "Industrial Applications",
      icon: Wrench,
      description: "Custom solutions for specialized industrial and manufacturing applications.",
      applications: ["Chemical Processing", "Food Processing", "Medical Devices", "Marine Applications"],
      products: ["Custom Formulations", "Specialized Additives", "Performance Enhancers"],
      image: "/placeholder.svg?height=300&width=400&text=Industrial",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Our PVC additives support diverse industries with reliable performance, quality assurance, and innovative
              solutions tailored to specific application needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Diverse Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pipes and fittings to automotive components, our PVC additives deliver consistent performance across
              multiple sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <Card key={industry.name} className="group hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl mb-2">{industry.name}</CardTitle>
                      <CardDescription className="text-sm">{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.applications.map((app) => (
                            <Badge key={app} variant="secondary" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Our Products:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.products.map((product) => (
                            <Badge key={product} className="text-xs bg-green-100 text-green-800">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Industries Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep industry expertise and commitment to quality make us the preferred partner for PVC additive
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Badge className="bg-green-600 text-white">40+</Badge>
                </div>
                <CardTitle>Years of Experience</CardTitle>
                <CardDescription>
                  Four decades of expertise in PVC additive manufacturing across diverse industries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Industry-Specific Solutions</CardTitle>
                <CardDescription>
                  Tailored formulations designed to meet the unique requirements of each industry sector.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Technical Support</CardTitle>
                <CardDescription>
                  Comprehensive technical assistance and application support for optimal product performance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Enhance Your Industry Applications?</h2>
            <p className="text-xl text-green-100">
              Discover how our PVC additives can improve the performance and reliability of your industry-specific
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                Contact Our Industry Experts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
              >
                Download Industry Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
