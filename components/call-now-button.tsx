"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface CallNowButtonProps {
  phoneNumber?: string
  label?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  fullWidth?: boolean
}

export function CallNowButton({
  phoneNumber = "+919493015165",
  label = "Call Now",
  variant = "default",
  size = "default",
  className,
  fullWidth = false,
}: CallNowButtonProps) {
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <Button
      onClick={handleCall}
      variant={variant}
      size={size}
      className={cn(
        "flex items-center gap-2 transition-all duration-300 hover:scale-105",
        fullWidth && "w-full",
        className,
      )}
    >
      <Phone className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  )
}
