import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, Zap, Droplets, Gauge, FlaskConical } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PlasticisersPage() {
  const products = [
    {
      name: "DOP (Dioctyl Phthalate)",
      description: "General purpose plasticizer for flexible PVC applications",
      features: [
        "Excellent compatibility",
        "Good low-temperature flexibility",
        "Cost-effective",
        "Wide application range",
      ],
      applications: ["Cable Sheathing", "Flexible Films", "Flooring", "Artificial Leather"],
      specifications: {
        Purity: "≥ 99.5%",
        Viscosity: "81-85 cSt at 20°C",
        Density: "0.984-0.987 g/cm³",
        "Flash Point": "≥ 210°C",
      },
    },
    {
      name: "DINP (Diisononyl Phthalate)",
      description: "High-performance plasticizer with excellent permanence",
      features: ["Low volatility", "Excellent permanence", "Good electrical properties", "UV stability"],
      applications: ["Automotive Interior", "Wire & Cable", "Roofing Membranes", "Industrial Applications"],
      specifications: {
        Purity: "≥ 99.0%",
        Viscosity: "100-120 cSt at 20°C",
        Density: "0.970-0.975 g/cm³",
        "Flash Point": "≥ 230°C",
      },
    },
    {
      name: "DOTP (Dioctyl Terephthalate)",
      description: "Non-phthalate plasticizer for sensitive applications",
      features: ["Phthalate-free", "Excellent heat stability", "Low migration", "Food contact approved"],
      applications: ["Food Packaging", "Medical Devices", "Children's Toys", "Sensitive Applications"],
      specifications: {
        Purity: "≥ 99.5%",
        Viscosity: "35-45 cSt at 20°C",
        Density: "0.984-0.988 g/cm³",
        "Flash Point": "≥ 220°C",
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
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-6">
              <Droplets className="h-4 w-4 mr-2" />
              Flexibility Enhancement Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Plasticisers</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              High-quality plasticizers manufactured in Secunderabad, providing flexibility, durability, and performance
              enhancement for PVC compounds across diverse applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Product Overview</h2>
                <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our plasticizers are manufactured at our Secunderabad facility using advanced technology and quality
                  raw materials. These specialty chemicals enhance the flexibility, workability, and durability of PVC
                  compounds for various industrial applications.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Enhanced flexibility and elongation properties",
                    "Improved processability and workability",
                    "Excellent compatibility with PVC resins",
                    "Superior low-temperature performance",
                    "Reduced brittleness and improved impact resistance",
                    "Wide range of viscosity and performance grades",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-2">
                  <FlaskConical className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-800">Technical Excellence</h3>
                </div>
                <p className="text-blue-700">
                  Manufactured using state-of-the-art technology in our Secunderabad facility, ensuring consistent
                  quality and performance.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Plasticiser+Manufacturing"
                alt="Plasticiser Manufacturing"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">High</div>
                  <div className="text-sm">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Plasticiser Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of plasticizers including phthalate and non-phthalate options for various PVC
              applications and performance requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    {index === 2 && <Badge className="bg-green-100 text-green-800">Phthalate-Free</Badge>}
                    {index === 1 && <Badge className="bg-blue-100 text-blue-800">High Performance</Badge>}
                    {index === 0 && <Badge className="bg-orange-100 text-orange-800">General Purpose</Badge>}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Request Quote
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Datasheet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical specifications and application guidelines for our plasticizer products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="selection">Selection Guide</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Typical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4">Parameter</th>
                            <th className="text-left p-4">DOP</th>
                            <th className="text-left p-4">DINP</th>
                            <th className="text-left p-4">DOTP</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4">Purity</td>
                            <td className="p-4">≥ 99.5%</td>
                            <td className="p-4">≥ 99.0%</td>
                            <td className="p-4">≥ 99.5%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Viscosity (20°C)</td>
                            <td className="p-4">81-85 cSt</td>
                            <td className="p-4">100-120 cSt</td>
                            <td className="p-4">35-45 cSt</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Density</td>
                            <td className="p-4">0.984-0.987 g/cm³</td>
                            <td className="p-4">0.970-0.975 g/cm³</td>
                            <td className="p-4">0.984-0.988 g/cm³</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Flash Point</td>
                            <td className="p-4">≥ 210°C</td>
                            <td className="p-4">≥ 230°C</td>
                            <td className="p-4">≥ 220°C</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-600" />
                        Electrical Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Cable and wire sheathing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Electrical insulation materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Power cable compounds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Automotive wiring harnesses</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-blue-600" />
                        Industrial Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Flexible films and sheets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Flooring and wall coverings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Artificial leather and textiles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Automotive interior components</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="processing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Processing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Processing Conditions:</h4>
                      <ul className="space-y-2">
                        <li>• Processing Temperature: 140-180°C</li>
                        <li>• Mixing Time: 5-10 minutes</li>
                        <li>• Typical Dosage: 20-80 phr (parts per hundred resin)</li>
                        <li>• Avoid overheating to prevent degradation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Handling & Storage:</h4>
                      <ul className="space-y-2">
                        <li>• Store in cool, dry conditions</li>
                        <li>• Avoid exposure to direct sunlight</li>
                        <li>• Keep containers tightly sealed</li>
                        <li>• Handle with appropriate safety equipment</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="selection" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Plasticizer Selection Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Choose DOP for:</h4>
                        <ul className="space-y-2 ml-4">
                          <li>• General purpose flexible PVC applications</li>
                          <li>• Cost-effective solutions</li>
                          <li>• Standard performance requirements</li>
                          <li>• Non-critical applications</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Choose DINP for:</h4>
                        <ul className="space-y-2 ml-4">
                          <li>• High-performance applications</li>
                          <li>• Automotive and industrial uses</li>
                          <li>• Applications requiring low volatility</li>
                          <li>• Long-term durability requirements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Choose DOTP for:</h4>
                        <ul className="space-y-2 ml-4">
                          <li>• Food contact applications</li>
                          <li>• Medical and pharmaceutical uses</li>
                          <li>• Children's toys and sensitive products</li>
                          <li>• Phthalate-free requirements</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Performance Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key performance characteristics of our plasticizer products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left p-4 font-semibold">Property</th>
                        <th className="text-center p-4 font-semibold">DOP</th>
                        <th className="text-center p-4 font-semibold">DINP</th>
                        <th className="text-center p-4 font-semibold">DOTP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">Efficiency</td>
                        <td className="p-4 text-center">Good</td>
                        <td className="p-4 text-center">Excellent</td>
                        <td className="p-4 text-center">Very Good</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Permanence</td>
                        <td className="p-4 text-center">Good</td>
                        <td className="p-4 text-center">Excellent</td>
                        <td className="p-4 text-center">Very Good</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Low Temperature Flexibility</td>
                        <td className="p-4 text-center">Very Good</td>
                        <td className="p-4 text-center">Good</td>
                        <td className="p-4 text-center">Excellent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Heat Stability</td>
                        <td className="p-4 text-center">Good</td>
                        <td className="p-4 text-center">Very Good</td>
                        <td className="p-4 text-center">Excellent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Migration Resistance</td>
                        <td className="p-4 text-center">Good</td>
                        <td className="p-4 text-center">Very Good</td>
                        <td className="p-4 text-center">Excellent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Need High-Performance Plasticizers?</h2>
            <p className="text-xl text-blue-100">
              Contact our technical experts in Secunderabad to discuss your plasticizer requirements and find the
              optimal solution for your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Contact Technical Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Request Product Samples
              </Button>
            </div>
            <div className="text-sm text-blue-200 mt-4">
              <p>📍 Registered Office: 6-18-043, Sikh Village, Secunderabad, Telangana 500009</p>
              <p>🏭 Factory: S.No 129, Kandlakoya Village, Medchal, TG</p>
              <p>📧 info@uniroyalchemicals.com | uniroyalindia@gmail.com</p>
              <p>📞 +91 9493015165 | +91 6304894331</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
