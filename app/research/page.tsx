"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Microscope, Beaker, TrendingUp, Users, Target, Zap } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Sustainable PVC Additives",
      description:
        "Developing eco-friendly alternatives to traditional PVC additives with reduced environmental impact",
      icon: Lightbulb,
      focus: ["Bio-based Plasticisers", "Green Stabilisers", "Recyclable Compounds"],
    },
    {
      title: "Performance Enhancement",
      description: "Advanced formulations for improved mechanical properties and durability",
      icon: TrendingUp,
      focus: ["Impact Modifiers", "Thermal Stabilisers", "Weather Resistance"],
    },
    {
      title: "Specialty Applications",
      description: "Custom solutions for niche markets and specialized industrial applications",
      icon: Target,
      focus: ["Medical Grade", "Food Contact", "High-Temperature Applications"],
    },
    {
      title: "Process Innovation",
      description: "Optimizing manufacturing processes for better efficiency and quality",
      icon: Zap,
      focus: ["Process Optimization", "Quality Enhancement", "Cost Reduction"],
    },
  ]

  const capabilities = [
    {
      name: "Material Science Laboratory",
      description: "Advanced laboratory for polymer research and additive development",
      equipment: ["Rheometer", "DSC", "TGA", "FTIR Spectroscopy"],
    },
    {
      name: "Formulation Development",
      description: "Custom formulation capabilities for specific customer requirements",
      equipment: ["High-Speed Mixers", "Twin-Screw Extruders", "Injection Molding"],
    },
    {
      name: "Performance Testing",
      description: "Comprehensive testing facilities for product validation",
      equipment: ["Tensile Testing", "Impact Testing", "Thermal Analysis", "Weathering Chamber"],
    },
    {
      name: "Pilot Plant Facility",
      description: "Scale-up capabilities from laboratory to commercial production",
      equipment: ["Pilot Reactors", "Distillation Units", "Filtration Systems", "Packaging Lines"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">Innovation & Research</Badge>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Research & Development</h1>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Driving innovation in PVC additives through cutting-edge research, advanced materials science, and
                collaborative development programs.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest heavily in research and development to create innovative solutions that address evolving market
              needs and environmental challenges.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <area.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-green-700">{area.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed text-gray-600">
                          {area.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700">Key Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.focus.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs bg-green-100 text-green-700">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">R&D Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art research facilities and experienced team enable us to develop innovative solutions
              from concept to commercial production.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Beaker className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 text-green-700">{capability.name}</CardTitle>
                        <CardDescription className="text-base text-gray-600">{capability.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700">Key Equipment:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {capability.equipment.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Innovation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to commercialization, our systematic approach ensures successful product development.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Concept", description: "Identifying market needs and opportunities" },
              { step: "2", title: "Research", description: "Laboratory research and formulation development" },
              { step: "3", title: "Testing", description: "Comprehensive performance and quality testing" },
              { step: "4", title: "Scale-up", description: "Pilot plant trials and process optimization" },
              { step: "5", title: "Launch", description: "Commercial production and market introduction" },
            ].map((phase, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="text-center border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 relative bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </div>
                    <CardTitle className="text-lg text-green-700">{phase.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{phase.description}</CardDescription>
                  </CardHeader>
                  {phase.step !== "5" && (
                    <div className="absolute top-8 -right-4 w-8 h-0.5 bg-green-600 hidden md:block"></div>
                  )}
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration & Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Collaboration & Partnerships</h2>
                  <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe in collaborative innovation and actively partner with academic institutions, research
                    organizations, and industry leaders to accelerate technological advancement.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Academic Partnerships</h3>
                      <p className="text-gray-600">
                        Collaborating with leading universities and research institutes for fundamental research and
                        talent development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Microscope className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Industry Collaboration</h3>
                      <p className="text-gray-600">
                        Working closely with customers and industry partners to develop application-specific solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Technology Transfer</h3>
                      <p className="text-gray-600">
                        Facilitating knowledge transfer and commercialization of research outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=R%26D+Laboratory"
                  alt="Research and Development Laboratory"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">R&D</div>
                    <div className="text-sm">Excellence</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Partner with Our Innovation Team</h2>
            <p className="text-xl text-green-100">
              Collaborate with our R&D experts to develop custom solutions for your specific applications and
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const phoneNumber = "916304894331";
                  const message = "Hello! I would like to discuss my project with your R&D team. Please assist me.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Discuss Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Download R&D Brochure
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
