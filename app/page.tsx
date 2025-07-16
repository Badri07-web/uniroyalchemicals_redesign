import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Factory, Shield, Users, Phone, Mail, MapPin, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallNowButton } from "@/components/call-now-button"
import { AnimatedCounter } from "@/components/animated-counter"
import { FadeInSection } from "@/components/fade-in-section"
import { ClientCarousel } from "@/components/client-carousel"
import { HeroBackground } from "@/components/hero-background"
import { TypewriterText } from "@/components/typewriter-text"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      

      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 md:mb-8 backdrop-blur-sm text-sm md:text-lg px-4 md:px-6 py-1 md:py-2">
                Innovating with Integrity Since 1984
              </Badge>
            </FadeInSection>
            <FadeInSection delay={400}>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
                <TypewriterText text="40+ Years of Experience in Specialty Chemicals" delay={800} speed={80} />
              </h1>
            </FadeInSection>

            <FadeInSection delay={1200}>
              <p className="text-lg md:text-xl lg:text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
                Leading manufacturer of PVC additives including Lead Stabilisers, Calcium Zinc Stabilisers, and Metallic
                Stearates, serving industries across India with unmatched quality and reliability.
              </p>
            </FadeInSection>

            <FadeInSection
              delay={1600}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16"
            >
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-green-50 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </Button>
              <CallNowButton
                phoneNumber="+919493015165"
                label="Call Now"
                variant="outline"
                size="lg"
                className="border-green-800 bg-white text-green-800 hover:bg-green-800 hover:text-white h-12 md:h-14 px-6 md:px-8 text-base md:text-lg transition-colors duration-300 shadow"
              />
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg backdrop-blur-sm bg-transparent"
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </FadeInSection>

            {/* Animated Stats */}
            <FadeInSection delay={2000} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: 40, suffix: "+", label: "Years Experience" },
                { value: 50, suffix: "+", label: "Products" },
                { text: "Pan India", label: "Supply Network" },
                { value: 1000, suffix: "+", label: "Satisfied Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    {stat.text || <AnimatedCounter end={stat.value || 0} suffix={stat.suffix || ""} />}
                  </div>
                  <div className="text-green-200 text-xs md:text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection direction="left" className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=PVC+Manufacturing+Excellence"
                alt="PVC Manufacturing Excellence"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-green-600 text-white p-4 md:p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold">1984</div>
                  <div className="text-xs md:text-sm">Established</div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-700">About Uniroyal Chemicals</h2>
                <div className="w-16 md:w-20 h-1 bg-green-600 rounded-full"></div>
                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Uniroyal Chemicals Pvt Ltd stands as a pioneering force in India's PVC additive manufacturing
                    industry. With four decades of unwavering commitment to excellence, we have established ourselves as
                    the trusted partner for specialty chemical solutions.
                  </p>
                  <p>
                    Our comprehensive product portfolio includes Lead Stabilisers, Calcium Zinc Stabilisers, Metallic
                    Stearates, and Lubricants, all engineered to meet the evolving demands of modern industrial
                    applications.
                  </p>
                  <p>
                    From our state-of-the-art manufacturing facility in Secunderabad, we serve industries across India
                    with innovative solutions that combine technical expertise with environmental responsibility.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                  Innovating with Integrity Since 1984
                </h3>
                <p className="text-green-700 text-sm md:text-base">
                  Four decades of excellence in PVC additive manufacturing, committed to quality, innovation, and
                  sustainable growth.
                </p>
              </div>

              <Button
                className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-700 mb-4">
              Why Choose Uniroyal Chemicals?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Four decades of expertise delivering innovative solutions that meet the highest industry standards.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Factory,
                title: "Manufacturing Excellence",
                description:
                  "State-of-the-art facilities with advanced technology ensuring consistent quality and reliability.",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control processes meeting international standards and customer specifications.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                description: "Continuous R&D efforts developing cutting-edge solutions for evolving industry demands.",
              },
              {
                icon: Users,
                title: "Customer-Centric",
                description: "Dedicated support team providing tailored solutions and technical expertise.",
              },
              {
                icon: Target,
                title: "Reliability",
                description: "Proven track record of consistent performance and dependable supply chain.",
              },
              {
                icon: Award,
                title: "Sustainability",
                description: "Environmental responsibility with eco-friendly processes and sustainable practices.",
              },
            ].map((feature, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 h-full bg-white">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-green-700">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-700 mb-4">Our Product Range</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of PVC additives designed to enhance performance and meet diverse industry
              requirements.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Lead Stabilisers",
                description:
                  "Traditional stabilizers for cost-effective PVC processing applications with superior performance.",
                badge: "Popular",
                href: "/products/lead-stabilisers",
              },
              {
                title: "Calcium Zinc Stabilisers",
                description:
                  "Eco-friendly stabilizers for food-grade and medical applications ensuring safety and compliance.",
                badge: "Eco-Friendly",
                href: "/products/calcium-zinc-stabilisers",
              },
              {
                title: "Metallic Stearates",
                description:
                  "High-performance metallic stearates including Lead, Calcium, and Zinc Stearates for various applications.",
                badge: "New Range",
                href: "/products/metallic-stearates",
              },
              {
                title: "Lubricants",
                description: "Processing aids for improved flow and surface finish in PVC manufacturing processes.",
                badge: null,
                href: "/products/lubricants",
              },
            ].map((product, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card className="group hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300 cursor-pointer transform hover:scale-105 h-full border-green-200 hover:border-green-400 bg-white">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=${product.title.replace(" ", "+")}`}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-36 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600 text-white text-xs">{product.badge}</Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300"></div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg md:text-xl text-green-700 group-hover:text-green-800">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors border-green-600 text-green-600 bg-transparent"
                      asChild
                    >
                      <Link href={product.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={600} className="text-center mt-8 md:mt-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-700 mb-4">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our PVC additives support diverse industries with reliable performance and quality assurance.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Pipes & Fittings", image: "/placeholder.svg?height=120&width=120&text=Pipes" },
              { name: "Cables & Wires", image: "/placeholder.svg?height=120&width=120&text=Cables" },
              { name: "Window Profiles", image: "/placeholder.svg?height=120&width=120&text=Windows" },
              { name: "Paints & Coatings", image: "/placeholder.svg?height=120&width=120&text=Paints" },
              { name: "Rubber Industry", image: "/placeholder.svg?height=120&width=120&text=Rubber" },
              { name: "Plastic Industry", image: "/placeholder.svg?height=120&width=120&text=Plastic" },
            ].map((industry, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 cursor-pointer group transform hover:scale-105 border-green-200 hover:border-green-400 bg-white">
                  <CardHeader className="pb-4 p-3 md:p-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 overflow-hidden rounded-full border-2 border-green-200 group-hover:border-green-400 transition-colors duration-300">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xs md:text-sm text-green-700 group-hover:text-green-800 leading-tight">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <ClientCarousel />
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection direction="left" className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                  Ready to Discuss Your PVC Additive Needs?
                </h2>
                <p className="text-lg md:text-xl text-green-100">
                  Our technical experts are ready to help you find the perfect PVC additive solution for your specific
                  requirements.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: (
                      <div className="text-green-200 space-y-1">
                        <div>
                          <a href="tel:+919493015165" className="hover:text-white transition-colors">
                            +91 9493015165
                          </a>{" "}
                          |{" "}
                          <a href="tel:+916304894331" className="hover:text-white transition-colors">
                            +91 6304894331
                          </a>
                        </div>
                        <div>
                          <a href="tel:+914027847481" className="hover:text-white transition-colors">
                            +040 27847481
                          </a>
                        </div>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: (
                      <div className="text-green-200 space-y-1">
                        <div>
                          <a href="mailto:info@uniroyalchemicals.com" className="hover:text-white transition-colors">
                            info@uniroyalchemicals.com
                          </a>
                        </div>
                        <div>
                          <a href="mailto:uniroyalindia@gmail.com" className="hover:text-white transition-colors">
                            uniroyalindia@gmail.com
                          </a>
                        </div>
                      </div>
                    ),
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: (
                      <div className="text-green-200 space-y-1">
                        <div>6-18-043, Sikh Village, Secunderabad</div>
                        <div>Factory: Kandlakoya Village, Medchal, TG</div>
                      </div>
                    ),
                  },
                ].map((contact, index) => (
                  <FadeInSection key={index} delay={index * 200} direction="left">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <contact.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-base md:text-lg">{contact.title}</div>
                        <div className="text-sm md:text-base">{contact.content}</div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={600} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CallNowButton
                  phoneNumber="+919493015165"
                  label="Call Now"
                  variant="outline"
                  size="lg"
                  className="border-green-800 bg-white text-green-800 hover:bg-green-800 hover:text-white h-11 md:h-12 px-6 md:px-8 text-base md:text-lg transition-colors duration-300 shadow"
                />
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-green-50 h-11 md:h-12 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </FadeInSection>
            </FadeInSection>

            <FadeInSection delay={400} direction="right" className="bg-white rounded-lg p-4 md:p-8">
              <ContactForm />
            </FadeInSection>
          </div>
        </div>
      </section>

      // ...existing code...
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
