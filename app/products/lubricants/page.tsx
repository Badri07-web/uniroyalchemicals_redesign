import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, Cog, Zap, Settings, Wrench } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function LubricantsPage() {
  const products = [
    {
      name: "External Lubricant EL-100",
      description: "General purpose external lubricant for PVC processing",
      features: [
        "Excellent metal release",
        "Improved surface finish",
        "Reduced processing torque",
        "Good thermal stability",
      ],
      applications: ["Extrusion", "Injection Molding", "Calendering", "Blow Molding"],
      specifications: {
        Type: "Calcium Stearate Based",
        "Melting Point": "140-150°C",
        "Bulk Density": "0.3-0.5 g/cm³",
        "Particle Size": "< 10 μm",
      },
    },
    {
      name: "Internal Lubricant IL-200",
      description: "High-performance internal lubricant for improved flow properties",
      features: ["Enhanced melt flow", "Reduced fusion time", "Improved processability", "Excellent compatibility"],
      applications: ["Rigid PVC Compounds", "Profile Extrusion", "Pipe Manufacturing", "Sheet Production"],
      specifications: {
        Type: "Fatty Acid Ester",
        "Melting Point": "60-70°C",
        "Saponification Value": "180-200 mg KOH/g",
        "Acid Value": "< 3 mg KOH/g",
      },
    },
    {
      name: "Processing Aid PA-300",
      description: "Specialized processing aid for enhanced PVC processing",
      features: ["Improved fusion characteristics", "Better surface quality", "Reduced plate-out", "Enhanced clarity"],
      applications: ["Clear PVC Applications", "Medical Tubing", "Food Grade Products", "High-Quality Profiles"],
      specifications: {
        Type: "Acrylic Polymer",
        "Glass Transition Temp": "105-115°C",
        "Bulk Density": "0.4-0.6 g/cm³",
        "Particle Size": "< 5 μm",
      },
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">
                <Cog className="h-4 w-4 mr-2" />
                Processing Enhancement Solutions
              </Badge>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Lubricants & Processing Aids</h1>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed">
                Advanced lubricants and processing aids manufactured in Secunderabad, designed to optimize PVC
                processing performance, improve surface finish, and enhance production efficiency.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-700">Product Overview</h2>
                  <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our lubricants and processing aids are manufactured at our Secunderabad facility using advanced
                    formulation technology. These specialty additives optimize PVC processing by reducing friction,
                    improving flow properties, and enhancing surface quality.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">Key Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Improved processing efficiency and reduced cycle times",
                      "Enhanced surface finish and appearance",
                      "Reduced equipment wear and maintenance costs",
                      "Better melt flow and fusion characteristics",
                      "Minimized plate-out and die build-up",
                      "Optimized processing temperature ranges",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
                  <div className="flex items-center gap-3 mb-2">
                    <Settings className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Processing Optimization</h3>
                  </div>
                  <p className="text-green-700">
                    Our lubricants are specifically formulated to optimize PVC processing conditions and improve overall
                    production efficiency.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Lubricant+Production"
                  alt="Lubricant Production"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Optimal</div>
                    <div className="text-sm">Processing</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Lubricant Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of external lubricants, internal lubricants, and processing aids for various PVC
              processing applications.
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Cog className="h-5 w-5 text-green-600" />
                      {index === 0 && <Badge className="bg-green-100 text-green-800">External Lubricant</Badge>}
                      {index === 1 && <Badge className="bg-green-100 text-green-800">Internal Lubricant</Badge>}
                      {index === 2 && <Badge className="bg-green-100 text-green-800">Processing Aid</Badge>}
                    </div>
                    <CardTitle className="text-xl text-green-700">{product.name}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Key Features:</h4>
                      <div className="space-y-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs bg-green-100 text-green-700">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                        Request Quote
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Datasheet
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">Technical Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical specifications and application guidelines for our lubricant and processing aid
              products.
            </p>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white border border-green-200">
                <TabsTrigger
                  value="specifications"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="applications"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Applications
                </TabsTrigger>
                <TabsTrigger
                  value="processing"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Processing
                </TabsTrigger>
                <TabsTrigger
                  value="selection"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Selection Guide
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="space-y-6">
                <Card className="border-green-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-green-700">Typical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-green-200">
                            <th className="text-left p-4 text-green-700">Parameter</th>
                            <th className="text-left p-4 text-green-700">EL-100</th>
                            <th className="text-left p-4 text-green-700">IL-200</th>
                            <th className="text-left p-4 text-green-700">PA-300</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-green-100">
                            <td className="p-4 text-gray-700">Type</td>
                            <td className="p-4 text-gray-600">Calcium Stearate Based</td>
                            <td className="p-4 text-gray-600">Fatty Acid Ester</td>
                            <td className="p-4 text-gray-600">Acrylic Polymer</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-4 text-gray-700">Melting Point</td>
                            <td className="p-4 text-gray-600">140-150°C</td>
                            <td className="p-4 text-gray-600">60-70°C</td>
                            <td className="p-4 text-gray-600">105-115°C</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-4 text-gray-700">Bulk Density</td>
                            <td className="p-4 text-gray-600">0.3-0.5 g/cm³</td>
                            <td className="p-4 text-gray-600">-</td>
                            <td className="p-4 text-gray-600">0.4-0.6 g/cm³</td>
                          </tr>
                          <tr className="border-b border-green-100">
                            <td className="p-4 text-gray-700">Particle Size</td>
                            <td className="p-4 text-gray-600">&lt; 10 μm</td>
                            <td className="p-4 text-gray-600">-</td>
                            <td className="p-4 text-gray-600">&lt; 5 μm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-green-200 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <Zap className="h-5 w-5 text-green-600" />
                        External Lubrication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Metal release and mold release</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Surface finish improvement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Reduced processing torque</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Prevention of plate-out</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <Wrench className="h-5 w-5 text-green-600" />
                        Internal Lubrication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Improved melt flow properties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Reduced fusion time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Enhanced processability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-gray-600">Better homogenization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="processing" className="space-y-6">
                <Card className="border-green-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-green-700">Processing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Dosage Recommendations</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-medium text-green-700 mb-2">External Lubricants</h5>
                          <p className="text-sm text-gray-600">0.2 - 1.0 phr</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-medium text-green-700 mb-2">Internal Lubricants</h5>
                          <p className="text-sm text-gray-600">0.3 - 1.5 phr</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-medium text-green-700 mb-2">Processing Aids</h5>
                          <p className="text-sm text-gray-600">0.5 - 2.0 phr</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Processing Conditions</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-700">Temperature Range:</span>
                            <span className="text-gray-600 ml-2">160-200°C (depending on application)</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-700">Mixing Time:</span>
                            <span className="text-gray-600 ml-2">2-5 minutes for proper dispersion</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium text-gray-700">Addition Sequence:</span>
                            <span className="text-gray-600 ml-2">Add after stabilizers and before fillers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="selection" className="space-y-6">
                <Card className="border-green-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-green-700">Product Selection Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Application-Based Selection</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-green-200">
                                <th className="text-left p-4 text-green-700">Application</th>
                                <th className="text-left p-4 text-green-700">Recommended Product</th>
                                <th className="text-left p-4 text-green-700">Key Benefit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-green-100">
                                <td className="p-4 text-gray-700">Rigid PVC Pipes</td>
                                <td className="p-4 text-gray-600">EL-100 + IL-200</td>
                                <td className="p-4 text-gray-600">Optimal processing & surface finish</td>
                              </tr>
                              <tr className="border-b border-green-100">
                                <td className="p-4 text-gray-700">Window Profiles</td>
                                <td className="p-4 text-gray-600">PA-300 + EL-100</td>
                                <td className="p-4 text-gray-600">Enhanced clarity & appearance</td>
                              </tr>
                              <tr className="border-b border-green-100">
                                <td className="p-4 text-gray-700">Cable Compounds</td>
                                <td className="p-4 text-gray-600">IL-200</td>
                                <td className="p-4 text-gray-600">Improved flexibility & processing</td>
                              </tr>
                              <tr className="border-b border-green-100">
                                <td className="p-4 text-gray-700">Medical Tubing</td>
                                <td className="p-4 text-gray-600">PA-300</td>
                                <td className="p-4 text-gray-600">FDA compliance & clarity</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-700 mb-3">Selection Criteria</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Processing Requirements</h5>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• Processing temperature range</li>
                              <li>• Equipment type and configuration</li>
                              <li>• Cycle time requirements</li>
                              <li>• Surface finish specifications</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">End-Use Properties</h5>
                            <ul className="space-y-1 text-sm text-gray-600">
                              <li>• Clarity and transparency needs</li>
                              <li>• Regulatory compliance (FDA, etc.)</li>
                              <li>• Mechanical property requirements</li>
                              <li>• Environmental resistance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Optimize Your PVC Processing</h2>
            <p className="text-xl text-green-100">
              Contact our technical experts to find the right lubricant and processing aid solutions for your specific
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
              >
                Request Technical Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Product Catalog
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
