"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "916304894331"
    const message = "Hello! I'm interested in your PVC additives. Can you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
          size="sm"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border border-green-200 p-4 w-72 sm:w-80">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">WhatsApp Support</h3>
                <p className="text-xs text-green-600">Online now</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-1 h-auto">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-2">Hi there! 👋 How can we help you with our PVC additives today?</p>
          </div>

          <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white text-sm">
            Start WhatsApp Chat
          </Button>
        </div>
      )}
    </div>
  )
}
