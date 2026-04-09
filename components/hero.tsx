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
            <h1 className="text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight tracking-tight">
              Authority content
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground italic mt-2 mb-2">
              engineered for
            </p>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight tracking-tight mb-4">
              financial services
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Fintech, iGaming, trading, investment, and payments companies don&apos;t just need traffic. They need to be trusted. We build the content infrastructure that makes that happen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="bg-green-800 text-white hover:bg-green-700 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                Get Your Free Authority Audit
              </Link>
              <Button size="lg" variant="outline" className="border-green-800/30 text-green-800 hover:bg-green-50 px-8 py-4 text-sm font-semibold uppercase tracking-wide">
                See Our Process
              </Button>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/hero-image.png"
                alt="Revflow — Authority content for financial services"
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
