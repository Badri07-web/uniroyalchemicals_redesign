"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  inquiry: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const sendToWhatsApp = () => {
    const phoneNumber = "916304894331" // WhatsApp number without + and spaces

    const message = `*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company || "Not provided"}
*Inquiry Type:* ${formData.inquiry || "Not specified"}

*Message:*
${formData.message}

---
Sent from Uniroyal Chemicals website contact form`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form processing
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send to WhatsApp
    sendToWhatsApp()

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        inquiry: "",
        message: "",
      })
    }, 5000)
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200">
        <CardContent className="p-6 md:p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
          <p className="text-gray-600 mb-4">
            Your message has been sent to our WhatsApp. We'll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-green-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl text-green-700">Get in Touch</CardTitle>
        <CardDescription className="text-sm md:text-base">
          Fill out the form below and we'll send your message directly to our WhatsApp for immediate attention.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-700 text-sm md:text-base">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
                className="border-green-200 focus:border-green-500 focus:ring-green-500 h-10 md:h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700 text-sm md:text-base">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
                className="border-green-200 focus:border-green-500 focus:ring-green-500 h-10 md:h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 text-sm md:text-base">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="border-green-200 focus:border-green-500 focus:ring-green-500 h-10 md:h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 text-sm md:text-base">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="border-green-200 focus:border-green-500 focus:ring-green-500 h-10 md:h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-700 text-sm md:text-base">
              Company Name
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className="border-green-200 focus:border-green-500 focus:ring-green-500 h-10 md:h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiry" className="text-gray-700 text-sm md:text-base">
              Inquiry Type
            </Label>
            <Select onValueChange={(value) => handleInputChange("inquiry", value)}>
              <SelectTrigger className="border-green-200 focus:border-green-500 focus:ring-green-500 h-10 md:h-11">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product">Product Information</SelectItem>
                <SelectItem value="quote">Request Quote</SelectItem>
                <SelectItem value="technical">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700 text-sm md:text-base">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              rows={4}
              placeholder="Please describe your requirements or questions..."
              className="border-green-200 focus:border-green-500 focus:ring-green-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 text-white h-11 md:h-12 text-sm md:text-base"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending to WhatsApp...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
