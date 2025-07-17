"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Globe, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { FadeInSection } from "@/components/fade-in-section"

export default function ContactPage() {
  const offices = [
    {
      name: "Registered Office",
      address: "6-18-043, Sikh Village, Secunderabad, Telangana, 500009",
      phone: "+91 9493015165",
      email: "info@uniroyalchemicals.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4234567890123!2d78.4867!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE1LjAiTiA3OMKwMjknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
    {
      name: "Factory Location",
      address: "S.No 129, Kandlakoya Village, Medchal, TG (Adjacent to NH44, close to ORR)",
      phone: "+91 6304894331",
      email: "uniroyalindia@gmail.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM IST",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5234!3d17.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzI0LjEiTiA3OMKwMzEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
    {
      name: "Additional Contact",
      address: "Secunderabad, Telangana",
      phone: "+040 27847481",
      email: "info@uniroyalchemicals.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      mapUrl: "",
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+91 9493015165 | +91 6304894331",
      availability: "Mon-Fri, 9 AM - 6 PM IST",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your inquiries",
      contact: "info@uniroyalchemicals.com | uniroyalindia@gmail.com",
      availability: "24/7 - Response within 24 hours",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Chat",
      description: "Instant support via WhatsApp",
      contact: "Available on website",
      availability: "Mon-Fri, 9 AM - 5 PM IST",
    },
    {
      icon: Globe,
      title: "Factory Visits",
      description: "Schedule a visit to our manufacturing facility",
      contact: "Kandlakoya Village, Medchal",
      availability: "By appointment only",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Dynamic Effects */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 to-green-600/50 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">Get in Touch</h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed animate-slide-up">
                Connect with our team of chemical experts specializing in PVC additives. We're here to help you find the
                right solutions for your specific needs and answer any questions you may have.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Methods with Enhanced Animation */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4 animate-fade-in">
              How Can We Help You?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Choose the contact method that works best for you. Our team is ready to provide expert guidance and
              support.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <Card
                  className="text-center border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 animate-float bg-white"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <method.icon className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-green-700">{method.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base text-gray-600">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="space-y-2">
                      <p className="font-medium text-green-600 text-sm md:text-base">{method.contact}</p>
                      <p className="text-xs md:text-sm text-gray-500">{method.availability}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map with Dynamic Effects */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form with Animation */}
            <FadeInSection direction="left">
              <div className="bg-white rounded-lg p-4 md:p-8 shadow-xl border border-green-200 transform hover:scale-105 transition-all duration-300">
                <ContactForm />
              </div>
            </FadeInSection>

            {/* Office Information with Animation */}
            <FadeInSection direction="right">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4 md:mb-6 animate-fade-in">
                    Our Global Offices
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    {offices.map((office, index) => (
                      <Card
                        key={office.name}
                        className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 animate-slide-up bg-white"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <CardHeader className="p-4 md:p-6">
                          <CardTitle className="text-base md:text-lg text-green-600">{office.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 p-4 md:p-6 pt-0">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-600 text-sm md:text-base">{office.address}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                            <p className="text-gray-600 text-sm md:text-base">{office.phone}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                            <p className="text-gray-600 text-sm md:text-base">{office.email}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                            <p className="text-gray-600 text-sm md:text-base">{office.hours}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Interactive Maps with Animation */}
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-green-700 animate-fade-in">Our Locations</h3>

                  {offices.slice(0, 2).map((office, index) => (
                    <FadeInSection key={office.name} delay={index * 300}>
                      <div className="space-y-4">
                        <h4 className="text-base md:text-lg font-semibold text-green-600">{office.name}</h4>
                        {office.mapUrl && (
                          <div className="relative h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                            <iframe
                              src={office.mapUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Map of ${office.name}`}
                            />
                          </div>
                        )}
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200 animate-slide-up">
                          <p className="text-gray-700 font-medium text-sm md:text-base">{office.address}</p>
                          <div className="flex flex-wrap gap-4 mt-2 text-xs md:text-sm text-gray-600">
                            <span>📞 {office.phone}</span>
                            <span>📧 {office.email}</span>
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}

                  <div className="bg-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-600 animate-slide-up">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm md:text-base">Need Directions?</h4>
                    <p className="text-green-700 text-xs md:text-sm">
                      Our factory is conveniently located adjacent to NH44 and close to the Outer Ring Road (ORR) for
                      easy access.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FAQ Section with Animation */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Find quick answers to common questions about our products, services, and processes.
            </p>
          </FadeInSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                question: "What is your minimum order quantity?",
                answer:
                  "Minimum order quantities vary by product. Contact our sales team for specific MOQ information for your required products.",
              },
              {
                question: "Do you provide technical support?",
                answer:
                  "Yes, we offer comprehensive technical support including application guidance, troubleshooting, and custom formulation development.",
              },
              {
                question: "What certifications do your products have?",
                answer:
                  "Our products meet various international standards including ISO, FDA, REACH, and industry-specific certifications. Specific certifications vary by product.",
              },
              {
                question: "Can you develop custom formulations?",
                answer:
                  "Absolutely. Our R&D team specializes in developing custom chemical solutions tailored to specific customer requirements and applications.",
              },
              {
                question: "What are your typical lead times?",
                answer:
                  "Lead times vary by product and quantity. Standard products typically ship within 2-4 weeks, while custom formulations may require 6-12 weeks.",
              },
              {
                question: "Do you offer samples for testing?",
                answer:
                  "Yes, we provide samples for qualified customers to evaluate our products in their specific applications before placing orders.",
              },
            ].map((faq, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <Card
                  className="border-green-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 transform hover:scale-105 animate-float bg-white"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-base md:text-lg text-green-600">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={800}>
            <div className="text-center mt-8 md:mt-12">
              <p className="text-gray-600 mb-4 text-sm md:text-base">Can't find what you're looking for?</p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 animate-bounce"
                onClick={() => {
                  const phoneNumber = "916304894331";
                  const message = "Hello! I need support regarding your products/services. Please assist me.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Contact Our Support Team
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
