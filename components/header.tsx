"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, X } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { CallNowButton } from "@/components/call-now-button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
      items: [
        { name: "Lead Stabilisers", href: "/products/lead-stabilisers" },
        { name: "Calcium Zinc Stabilisers", href: "/products/calcium-zinc-stabilisers" },
        { name: "Metallic Stearates", href: "/products/metallic-stearates" },
        { name: "Plasticisers", href: "/products/plasticisers" },
        { name: "Lubricants", href: "/products/lubricants" },
        { name: "All Products", href: "/products" },
      ],
    },
    { name: "Industries", href: "/industries" },
    { name: "Quality", href: "/quality" },
    { name: "R&D", href: "/research" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-green-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <Image
              src="/images/uniroyal-logo-circle.png"
              alt="Uniroyal Chemicals"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div className="hidden sm:block">
              <div className="text-sm md:text-lg font-bold text-gray-900">UNIROYAL CHEMICALS</div>
              <div className="text-xs md:text-sm text-green-600 font-semibold">PVT. LTD.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href} className="text-gray-700 hover:text-green-600 cursor-pointer">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <CallNowButton
              phoneNumber="+919493015165"
              label="Call"
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-50"
            />
            <Button
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              asChild
            >
              <Link href="/contact">Quote</Link>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-green-200">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/uniroyal-logo-circle.png"
                      alt="Uniroyal Chemicals"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="text-sm font-bold text-gray-900">UNIROYAL</div>
                      <div className="text-xs text-green-600">CHEMICALS</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-2">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="block text-lg font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.hasDropdown && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-gray-600 hover:text-green-600 transition-colors duration-200 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="p-4 border-t border-green-200 space-y-3">
                  <CallNowButton
                    phoneNumber="+919493015165"
                    label="Call Now"
                    variant="outline"
                    fullWidth
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  />
                  <Button
                    variant="outline"
                    fullWidth
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                  <Button fullWidth className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
