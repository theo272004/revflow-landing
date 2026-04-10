import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-28 pb-10 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Text + CTAs */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase text-green-700 border border-green-900/20 rounded-full px-4 py-1.5 mb-9 bg-white/70">
              <span className="w-[6px] h-[6px] bg-green-500 rounded-full animate-pulse"></span>
              For Financial Services Companies
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight tracking-tight">
              Get Found. <span className="text-green-600">Get Trusted.</span>
            </h1>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight tracking-tight mb-4">
              Get Clients.
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We help financial companies get found by the right people, earn the trust that converts them, and build the kind of online presence that keeps working long after it&apos;s built.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="bg-green-800 text-white hover:bg-green-700 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                Get Your Free Authority Audit
              </Link>
              <Link href="#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-8 py-4 rounded-md text-sm font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/revflow-landing/hero-image.png"
                alt="SEO4Finance — Get Found. Get Trusted. Get Clients."
                width={730}
                height={550}
                className="w-full h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
