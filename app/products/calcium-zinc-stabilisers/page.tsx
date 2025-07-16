import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CheckCircle, Leaf, Shield, Award, Beaker } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CalciumZincStabilisersPage() {
  const products = [
    {
      name: "CaZn Stabiliser CZ-100",
      description: "General purpose calcium zinc stabilizer for food-grade PVC applications",
      features: ["Non-toxic", "Excellent heat stability", "FDA approved", "Good transparency"],
      applications: ["Food Packaging", "Medical Tubing", "Potable Water Pipes", "Toys"],
      specifications: {
        "Calcium Content": "8-12%",
        "Zinc Content": "6-10%",
        "Melting Point": "110-120°C",
        "Bulk Density": "0.8-1.0 g/cm³",
      },
    },
    {
      name: "CaZn Stabiliser CZ-200",
      description: "High-performance calcium zinc stabilizer for rigid PVC profiles",
      features: ["Superior weatherability", "Excellent processing", "Long-term stability", "UV resistance"],
      applications: ["Window Profiles", "Door Frames", "Siding", "Outdoor Applications"],
      specifications: {
        "Calcium Content": "10-14%",
        "Zinc Content": "8-12%",
        "Melting Point": "115-125°C",
        "Bulk Density": "0.9-1.1 g/cm³",
      },
    },
    {
      name: "CaZn Stabiliser CZ-300",
      description: "Premium calcium zinc stabilizer for flexible PVC applications",
      features: ["Excellent flexibility retention", "Low migration", "Good clarity", "Plasticizer compatible"],
      applications: ["Cable Sheathing", "Flexible Films", "Gaskets", "Seals"],
      specifications: {
        "Calcium Content": "6-10%",
        "Zinc Content": "4-8%",
        "Melting Point": "105-115°C",
        "Bulk Density": "0.7-0.9 g/cm³",
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
              <Leaf className="h-4 w-4 mr-2" />
              Eco-Friendly PVC Stabilizers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Calcium Zinc Stabilisers</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Environmentally friendly, non-toxic stabilizers ideal for food-grade, medical, and high-performance PVC
              applications. Manufactured in Secunderabad, Telangana with the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Benefits */}
      <section className="py-6 bg-green-50 border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <Leaf className="h-6 w-6 text-green-600" />
            <div className="flex-1">
              <p className="text-green-800 font-medium">
                Eco-Friendly Solution: Our calcium zinc stabilizers are non-toxic, heavy metal-free alternatives to
                traditional lead stabilizers, suitable for food contact and medical applications.
              </p>
            </div>
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
                  Manufactured at our Secunderabad facility, our calcium zinc stabilizers represent the latest in
                  eco-friendly PVC stabilization technology. These non-toxic alternatives provide excellent performance
                  while meeting stringent environmental and health regulations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Advantages</h3>
                <div className="space-y-3">
                  {[
                    "Non-toxic and environmentally friendly",
                    "FDA approved for food contact applications",
                    "Excellent heat stability and processing performance",
                    "Superior transparency and color retention",
                    "Compliance with international regulations (REACH, RoHS)",
                    "Suitable for medical and pharmaceutical applications",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Quality Assurance</h3>
                </div>
                <p className="text-green-700">
                  Manufactured in our ISO certified facility in Secunderabad, Telangana, ensuring consistent quality and
                  performance.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=CaZn+Stabiliser+Production"
                alt="Calcium Zinc Stabiliser Production"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">FDA</div>
                  <div className="text-sm">Approved</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Calcium Zinc Stabiliser Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of calcium zinc stabilizers designed for various PVC applications, from food-grade to
              high-performance industrial uses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <Badge className="bg-green-100 text-green-800">Eco-Friendly</Badge>
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
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
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
              Comprehensive technical data and application guidelines for our calcium zinc stabilizer products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
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
                            <th className="text-left p-4">CZ-100</th>
                            <th className="text-left p-4">CZ-200</th>
                            <th className="text-left p-4">CZ-300</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4">Calcium Content</td>
                            <td className="p-4">8-12%</td>
                            <td className="p-4">10-14%</td>
                            <td className="p-4">6-10%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Zinc Content</td>
                            <td className="p-4">6-10%</td>
                            <td className="p-4">8-12%</td>
                            <td className="p-4">4-8%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Melting Point</td>
                            <td className="p-4">110-120°C</td>
                            <td className="p-4">115-125°C</td>
                            <td className="p-4">105-115°C</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4">Bulk Density</td>
                            <td className="p-4">0.8-1.0 g/cm³</td>
                            <td className="p-4">0.9-1.1 g/cm³</td>
                            <td className="p-4">0.7-0.9 g/cm³</td>
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
                        <Shield className="h-5 w-5 text-green-600" />
                        Food & Medical Grade
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Food packaging films and containers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Medical tubing and devices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Potable water pipes and fittings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Children's toys and products</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Beaker className="h-5 w-5 text-green-600" />
                        Industrial Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Window and door profiles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Cable and wire sheathing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Flexible films and sheets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
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
                        <li>• Processing Temperature: 150-190°C</li>
                        <li>• Mixing Time: 2-4 minutes</li>
                        <li>• Melt Temperature: 170-200°C</li>
                        <li>• Recommended Dosage: 1.5-4.0 phr</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Compatibility:</h4>
                      <ul className="space-y-2">
                        <li>• Compatible with most plasticizers</li>
                        <li>• Works well with impact modifiers</li>
                        <li>• Can be combined with other stabilizers</li>
                        <li>• Suitable for various processing methods</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="regulatory" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Regulatory Compliance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">International Approvals:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>FDA 21 CFR 177.1520</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>EU Regulation 10/2011</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>REACH Compliant</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>RoHS Compliant</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Safety Features:</h4>
                        <ul className="space-y-2">
                          <li>• Non-toxic formulation</li>
                          <li>• Heavy metal-free</li>
                          <li>• Low migration properties</li>
                          <li>• Environmentally friendly</li>
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

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
              <p className="text-xl text-gray-600">
                Produced at our state-of-the-art facility in Secunderabad, Telangana with stringent quality controls.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Quality Control</CardTitle>
                  <CardDescription>
                    Rigorous testing at every stage ensures consistent product quality and performance.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Environmental Responsibility</CardTitle>
                  <CardDescription>
                    Eco-friendly manufacturing processes with minimal environmental impact.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>ISO Certified</CardTitle>
                  <CardDescription>
                    ISO 9001:2015 certified facility ensuring international quality standards.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready for Eco-Friendly PVC Solutions?</h2>
            <p className="text-xl text-green-100">
              Contact our technical team in Secunderabad to discuss your calcium zinc stabilizer requirements and
              discover sustainable PVC solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                Contact Secunderabad Office
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
              >
                Request Technical Data
              </Button>
            </div>
            <div className="text-sm text-green-200 mt-4">
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
