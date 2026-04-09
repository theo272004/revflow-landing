const StarIcon = () => (
  <svg className="w-[14px] h-[14px] fill-green-500" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export function TestimonialsSection() {
  const testimonials = [
    {
      featured: true,
      initials: "AM",
      avClass: "bg-green-900/10 text-green-900",
      name: "Andrés M.",
      role: "CMO, B2B payments infrastructure",
      quote: "We'd tried two other agencies before. Neither understood the compliance angle. The content reads like it was written by someone who works in financial services — because in a way, it was.",
      badge: "9 high-intent rankings in 4 months",
    },
    {
      featured: false,
      initials: "LK",
      avClass: "bg-green-900/7 text-green-800",
      name: "Laura K.",
      role: "Head of Growth, fintech lending platform",
      quote: "Getting placed in Finextra was something we'd tried on our own for over a year. They got it done in six weeks. That single placement drove more inbound than a full quarter of content before.",
      badge: "Finextra placement in 6 weeks",
    },
    {
      featured: false,
      initials: "RC",
      avClass: "bg-green-400/14 text-green-600",
      name: "Ricardo C.",
      role: "Founder, iGaming compliance platform",
      quote: "The podcast bookings were a surprise. Two appearances in well-known fintech shows generated more qualified conversations than anything we'd done in the previous six months.",
      badge: "2 podcast appearances, 6 qualified conversations",
    },
  ]

  return (
    <section className="py-28 bg-[#ede8de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
          ● Client Stories
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
          What our clients<br className="hidden sm:block" /> say about the work.
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
          From the teams we&apos;ve worked with directly.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map(({ featured, initials, avClass, name, role, quote, badge }) => (
            <div
              key={initials}
              className={`rounded-2xl p-8 transition-all hover:border-green-900/20 hover:-translate-y-1 relative z-10 ${
                featured
                  ? "border border-green-900/26 bg-green-100"
                  : "bg-white border border-green-900/10"
              }`}
            >
              <div className="flex gap-[3px] mb-5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className={`text-[14px] leading-relaxed mb-6 italic ${featured ? "text-green-950" : "text-green-950"}`}>
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-[14px]">
                <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${avClass}`}>
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-green-900">{name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{role}</div>
                </div>
              </div>
              <div className={`mt-5 px-4 py-2.5 rounded-xl text-xs font-semibold inline-block ${
                featured
                  ? "bg-green-900/7 border border-green-900/13 text-green-800"
                  : "bg-green-900/7 border border-green-900/13 text-green-700"
              }`}>
                {badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
