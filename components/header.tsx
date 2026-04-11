"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

const industries = [
  { name: "Fintech", href: "/industries/fintech" },
  { name: "iGaming & Online Gambling", href: "/industries/igaming" },
  { name: "Trading & Brokers", href: "/industries/trading-brokers" },
  { name: "Payment Gateways", href: "/industries/payment-gateways" },
  { name: "Crypto & Web3", href: "/industries/crypto-web3" },
  { name: "Investment & Wealth", href: "/industries/investment-wealth" },
  { name: "Neobanks & Digital Banking", href: "/industries/neobanks" },
  { name: "InsurTech", href: "/industries/insurtech" },
  { name: "Finance Consultants", href: "/industries/finance-consultants" },
]

const services = [
  { name: "SEO Strategy & Content", description: "Full content system architecture", href: "/services/seo-strategy" },
  { name: "Thought Leadership", description: "Bylined articles and editorial", href: "/services/thought-leadership" },
  { name: "Authority Link Building", description: "Finance-grade backlinks", href: "/services/link-building" },
  { name: "PR & Publication Placement", description: "Finextra, Forbes, The Block", href: "/services/pr-placement" },
  { name: "Podcast Booking", description: "Fintech and finance shows", href: "/services/podcast-booking" },
  { name: "LinkedIn Content", description: "Strategy for finance audiences", href: "/services/linkedin-content" },
  { name: "YouTube & Video", description: "Scripted video for search", href: "/services/video-content" },
]

function DesktopDropdown({
  label,
  items,
}: {
  label: string
  items: Array<{ name: string; description?: string; href: string }>
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-[11px] tracking-[.12em] uppercase text-muted-foreground transition-all hover:text-green-800 px-4 py-2">
        {label}
        <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
      </button>

      <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="grid w-[340px] gap-1 rounded-2xl border border-green-900/18 bg-white/95 p-2 shadow-xl backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-4 py-2.5 transition-colors hover:bg-[#f5f0e8]"
            >
              <span className="block text-sm font-semibold text-green-900">{item.name}</span>
              {item.description && (
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/93 backdrop-blur-md border-b border-green-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
          >
            <Image src="/revflow-landing/favicon.png" alt="SEO4Finance" width={40} height={40} className="rounded-lg" />
            <span className="font-bold text-base tracking-[.06em] text-green-800">
              REV<span className="text-green-600">FLOW</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0">
            <DesktopDropdown label="Industries" items={industries} />
            <DesktopDropdown label="Services" items={services} />
            <Link href="/industries/ourprocess" className="text-[11px] tracking-[.12em] uppercase text-muted-foreground transition-colors hover:text-green-800 px-4 py-2">
              Our Process
            </Link>
            <Link href="/#pricing" className="text-[11px] tracking-[.12em] uppercase text-muted-foreground transition-colors hover:text-green-800 px-4 py-2">
              Pricing
            </Link>
            <Link href="/#contact" className="text-[11px] tracking-[.12em] uppercase text-muted-foreground transition-colors hover:text-green-800 px-4 py-2">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contact" className="bg-green-800 text-white text-[11px] font-bold tracking-[.1em] uppercase px-6 py-3 rounded-full hover:opacity-85 transition-opacity no-underline">
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-green-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-900/10 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col py-2">
              {/* Industries accordion */}
              <button
                className="flex items-center justify-between px-2 py-3 text-sm font-semibold text-green-900 w-full text-left"
                onClick={() => toggleSection("industries")}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "industries" ? "rotate-180" : ""}`} />
              </button>
              {openSection === "industries" && (
                <div className="flex flex-col gap-0.5 pb-2">
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-sm text-green-800 hover:bg-[#f5f0e8] rounded-lg no-underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Services accordion */}
              <button
                className="flex items-center justify-between px-2 py-3 text-sm font-semibold text-green-900 w-full text-left border-t border-green-900/10"
                onClick={() => toggleSection("services")}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "services" ? "rotate-180" : ""}`} />
              </button>
              {openSection === "services" && (
                <div className="flex flex-col gap-0.5 pb-2">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-sm text-green-800 hover:bg-[#f5f0e8] rounded-lg no-underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/industries/ourprocess"
                className="px-2 py-3 text-sm font-semibold text-green-900 border-t border-green-900/10 no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Process
              </Link>
              <Link
                href="/#pricing"
                className="px-2 py-3 text-sm font-semibold text-green-900 border-t border-green-900/10 no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/#contact"
                className="px-2 py-3 text-sm font-semibold text-green-900 border-t border-green-900/10 no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-2 py-3 border-t border-green-900/10">
                <Link
                  href="/#contact"
                  className="bg-green-800 text-white text-center text-[11px] font-bold tracking-[.1em] uppercase px-6 py-3 rounded-full hover:opacity-85 transition-opacity block no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Call
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
