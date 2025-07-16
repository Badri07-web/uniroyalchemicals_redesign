import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Globe, CheckCircle, Building, Package, Warehouse, UsersIcon } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Dynamic Effects */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 to-green-600/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 backdrop-blur-sm animate-pulse">
                Since 1984
              </Badge>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Four Decades of PVC Additive Excellence
              </h1>
            </FadeInSection>
            <FadeInSection delay={400}>
              <p className="text-xl text-green-100 leading-relaxed animate-slide-up">
                From our founding in 1984 to today, Uniroyal Chemicals has been at the forefront of PVC additive
                development, serving industries across India with innovative solutions and unwavering commitment to
                quality.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Company Stats with Animation */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: 40, suffix: "+", label: "Years of Experience" },
              { value: 0, suffix: "", label: "Pan India Supply", text: "Pan India" },
              { value: 50, suffix: "+", label: "Products" },
              { value: 100, suffix: "+", label: "Employees" },
            ].map((stat, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="space-y-2 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-green-600 animate-bounce">
                    {stat.text || <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with Enhanced Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left" className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 animate-fade-in">Our Story</h2>
              <div className="w-20 h-1 bg-green-600 rounded-full animate-expand"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  Founded in 1984 as Uniroyal Chemicals Pvt Ltd, we emerged as a pioneer in PVC additive manufacturing
                  in India.
                </p>
                <p className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  We are a leading PVC additive manufacturer in India, specializing in Lead Stabilisers, Calcium Zinc
                  Stabilisers, and Metallic Stearates.
                </p>
                <p className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                  Our focus lies in providing solutions for piping, cables, window profiles, and other critical PVC
                  applications.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Company+History"
                alt="Company History"
                width={600}
                height={500}
                className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Manufacturing Facility with Dynamic Effects */}
      <section className="py-20 bg-green-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">Our Manufacturing Facility</h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Our state-of-the-art manufacturing facility is equipped with the latest technology and machinery, ensuring
              efficient production and high-quality standards. With robust infrastructure and a dedicated team, we are
              well-positioned to meet the growing demands of the polymer additives industry.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building, value: "6", label: "Acres", sublabel: "Area" },
              { icon: Package, value: "5000", label: "MT PA", sublabel: "Production Capacity" },
              { icon: Warehouse, value: "1000", label: "MT", sublabel: "Storage Capacity" },
              { icon: UsersIcon, value: "50", label: "+", sublabel: "Personnel" },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card
                  className="bg-white/10 backdrop-blur-sm border-0 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                      <AnimatedCounter
                        end={Number.parseInt(item.value)}
                        suffix={item.label === "MT PA" ? "" : item.label}
                      />
                      {item.label === "MT PA" && " MT PA"}
                    </div>
                    <div className="text-sm text-green-100">{item.sublabel}</div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values with Enhanced Animations */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4 animate-fade-in">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Guiding principles that drive our commitment to excellence and innovation in everything we do.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Mission",
                description:
                  "To develop and deliver innovative specialty chemical solutions that enable our customers to achieve superior performance while maintaining the highest standards of safety, quality, and environmental responsibility.",
              },
              {
                icon: Globe,
                title: "Vision",
                description:
                  "To be the global leader in specialty chemicals, recognized for our innovation, reliability, and commitment to sustainable solutions that create value for customers, employees, and communities worldwide.",
              },
              {
                icon: CheckCircle,
                title: "Values",
                description: "Innovation & Excellence • Safety & Sustainability • Customer Focus • Integrity & Trust",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card
                  className="text-center border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 h-full bg-white transform hover:scale-105 animate-float"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <item.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl text-green-700">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team with Dynamic Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4 animate-fade-in">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Meet the experienced professionals leading Uniroyal Chemicals into the future.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "B Sri Krishna",
                title: "MD, CEO",
                experience: "Visionary leader with extensive experience in chemical industry",
              },
              {
                name: "B Venkatapatiraju",
                title: "Director – Marketing, Strategy",
                experience: "Strategic marketing expert with deep industry knowledge",
              },
            ].map((leader, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card
                  className="text-center border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 bg-white transform hover:scale-105 animate-float"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <CardHeader>
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                      {/* Placeholder for leader photos - replace with actual photos */}
                      <span className="text-green-700 font-bold text-lg">
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-green-700">{leader.name}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">{leader.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{leader.experience}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Animation */}
      <section className="py-20 bg-green-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold animate-fade-in">Ready to Partner with Industry Leaders?</h2>
            <p className="text-xl text-green-100 animate-slide-up">
              Join thousands of companies worldwide who trust Uniroyal Chemicals for their specialty chemical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 transform hover:scale-105 transition-all duration-300 animate-bounce"
              >
                Contact Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 bg-transparent animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                Download Company Brochure
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
