import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PubBar } from "@/components/pub-bar"
import { ProblemSection } from "@/components/problem-section"
import { SystemSection } from "@/components/system-section"
import { IndustriesSection } from "@/components/industries-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Header />
      <Hero />
      <PubBar />
      <ProblemSection />
      <div className="border-t border-green-900/10" />
      <SystemSection />
      <div className="border-t border-green-900/10" />
      <IndustriesSection />
      <div className="border-t border-green-900/10" />
      <TestimonialsSection />
      <div className="border-t border-green-900/10" />
      <PricingSection />
      <div className="border-t border-green-900/10" />
      <CTASection />
      <div className="border-t border-green-900/10" />
      <ContactSection />
      <div className="border-t border-green-900/10" />
      <FAQSection />
      <Footer />
    </main>
  )
}
