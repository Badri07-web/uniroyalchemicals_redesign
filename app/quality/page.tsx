import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, FileText, Users, Zap } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function QualityPage() {
  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Rigorous testing of all incoming raw materials to ensure compliance with specifications",
      icon: FileText,
    },
    {
      title: "In-Process Quality Control",
      description: "Continuous monitoring and testing during manufacturing processes",
      icon: Target,
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing of finished products before dispatch",
      icon: CheckCircle,
    },
    {
      title: "Customer Feedback Integration",
      description: "Continuous improvement based on customer feedback and market requirements",
      icon: Users,
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">Quality Excellence</Badge>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Quality & Compliance</h1>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Our commitment to quality excellence drives every aspect of our manufacturing process, ensuring
                consistent performance and reliability in all our PVC additives.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Quality Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw material sourcing to final product delivery, our comprehensive quality management system ensures
              excellence at every step.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <process.icon className="h-8 w-8 text-green-600" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-green-700">{process.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-gray-600">
                      {process.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Quality Metrics & Performance</h2>
                  <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our commitment to quality is reflected in our key performance indicators and continuous improvement
                    initiatives.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                    <div className="text-sm text-gray-600">Quality Compliance Rate</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Quality Monitoring</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
                    <div className="text-sm text-gray-600">Quality Compromises</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Traceability</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Quality+Testing+Laboratory"
                  alt="Quality testing laboratory"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Quality</div>
                    <div className="text-sm">Excellence</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testing Facilities */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">State-of-the-Art Testing Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced testing laboratories ensure comprehensive quality validation of all products.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Physical Testing",
                description:
                  "Comprehensive physical property testing including tensile strength, impact resistance, and thermal stability.",
              },
              {
                icon: FileText,
                title: "Chemical Analysis",
                description:
                  "Advanced chemical analysis using spectroscopy, chromatography, and other analytical techniques.",
              },
              {
                icon: Target,
                title: "Performance Testing",
                description: "Real-world performance testing to validate product effectiveness in actual applications.",
              },
            ].map((facility, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-green-700">{facility.title}</CardTitle>
                    <CardDescription className="text-gray-600">{facility.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Quality Documentation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete documentation and certificates available for all our products and processes.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Certificate of Analysis (COA)",
              "Material Safety Data Sheet (MSDS)",
              "Quality Management Manuals",
              "Test Reports",
              "Compliance Certificates",
              "Process Documentation",
            ].map((doc, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg text-green-700">{doc}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-green-600 hover:text-white border-green-600 text-green-600 bg-transparent"
                    >
                      Request Document
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Experience Quality Excellence</h2>
            <p className="text-xl text-green-100">
              Partner with us for PVC additives that meet the highest quality standards and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
              >
                Request Quality Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Schedule Quality Audit
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
