import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/uniroyal-logo-circle.png"
                alt="Uniroyal Chemicals"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <div>
                <div className="text-base md:text-lg font-bold">UNIROYAL CHEMICALS</div>
                <div className="text-xs md:text-sm text-green-200">PVT. LTD.</div>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Leading manufacturer of PVC additives with 40+ years of excellence in specialty chemicals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Industries", href: "/industries" },
                { name: "Quality", href: "/quality" },
                { name: "R&D", href: "/research" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2">
              {[
                { name: "Lead Stabilisers", href: "/products/lead-stabilisers" },
                { name: "Calcium Zinc Stabilisers", href: "/products/calcium-zinc-stabilisers" },
                { name: "Metallic Stearates", href: "/products/metallic-stearates" },
                { name: "Plasticisers", href: "/products/plasticisers" },
                { name: "Lubricants", href: "/products/lubricants" },
              ].map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-green-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div className="text-green-200 text-sm">
                  <div>6-18-043, Sikh Village</div>
                  <div>Secunderabad, Telangana 500009</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-green-300 flex-shrink-0" />
                <div className="text-green-200 text-sm">
                  <div>+91 9493015165</div>
                  <div>+91 6304894331</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-green-300 flex-shrink-0" />
                <div className="text-green-200 text-sm">
                  <div>info@uniroyalchemicals.com</div>
                  <div>uniroyalindia@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-green-200 text-xs md:text-sm">© 2024 Uniroyal Chemicals Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
