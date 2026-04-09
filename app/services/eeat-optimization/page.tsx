import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "E-E-A-T Optimization | Revflow",
  description: "YMYL compliance and trust signals. Optimize every page for Experience, Expertise, Authoritativeness, and Trust.",
}

export default function EEATOptimizationPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Header />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-green-700 hover:underline mb-8 inline-block">&larr; Back to home</Link>
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">Service</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-6">E-E-A-T Optimization</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            YMYL compliance and trust signals for financial content. Every page demonstrates Experience, Expertise, Authoritativeness, and Trustworthiness to Google.
          </p>
          <div className="bg-white border border-green-900/10 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-bold text-green-900 mb-4">What&apos;s included</h3>
            <ul className="grid gap-3">
              {["E-E-A-T content audit", "Author bio &amp; credential optimization", "Compliance-aware editorial review", "Trust signal implementation", "YMYL page remediation"].map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="mailto:contact@revflow.co" className="inline-block bg-green-800 text-white text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:opacity-85 transition-opacity">
            Get Started
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
