import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-green-900 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.15),transparent_65%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-[40px] sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-5 text-white">
          Ready to build the authority your competitors have spent years accumulating?
        </h2>
        <p className="text-[17px] text-white/55 max-w-[500px] mx-auto leading-relaxed mb-11">
           Your competitors may have been in the game for longer, we can help you close the gap with a scalable content system build for organic growth
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-[17px] rounded-full hover:opacity-90 transition-opacity no-underline">
            Get Your Free Audit
          </Link>
          <Link href="#pricing" className="bg-transparent text-white/65 text-xs font-semibold uppercase tracking-widest px-10 py-[17px] rounded-full border border-white/18 hover:bg-white/5 transition-colors no-underline">
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
