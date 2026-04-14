export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Authority Audit & Vertical Mapping",
      desc: "We do not guess. We map your entire authority landscape: which publications your buyers trust, which podcasts they follow, which searches they make before shortlisting a vendor, and where your credibility gaps are versus your competitors.",
      items: [
        "Competitor authority analysis",
        "Publication landscape by vertical",
        "YMYL and E-E-A-T gap assessment",
        "AI citation presence audit",
      ],
    },
    {
      num: "02",
      title: "Finance-Grade Content Engineering",
      desc: "We build content assets, not articles. Every piece is expert-attributed, compliance-reviewed, and structured to be the source of truth for both readers and AI models. Deep research, original angles, and editorial precision built in from the brief.",
      items: [
        "Expert-sourced and attributed",
        "Compliance-reviewed before delivery",
        "Built for LLM citation and pickup",
        "Data studies and original research",
      ],
    },
    {
      num: "03",
      title: "Distribution Where Your Buyers Are",
      desc: "Publishing is just the start. We have real editorial relationships with Finextra, iGaming Business, Payments Source, and The Block. We book your founders on podcasts your buyers actually listen to. We do not pitch content to the wrong audiences.",
      items: [
        "Editorial relationships, not cold pitches",
        "Podcast booking with interview prep",
        "LinkedIn positioning for founders",
        "Newsletter sponsorships and community seeding",
      ],
    },
  ]

  return (
    <section id="process" className="py-28 bg-green-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-5">
          ● Our Approach
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          We replaced guessing<br className="hidden sm:block" />with a system built for finance.
        </h2>
        <p className="text-[17px] text-white/45 max-w-[600px] leading-relaxed mb-14">
          Three steps. Each one designed specifically for how financial buyers discover, evaluate, and trust vendors in regulated markets.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(({ num, title, desc, items }) => (
            <div
              key={num}
              className="bg-white/6 border border-white/10 rounded-2xl p-9 relative overflow-hidden transition-colors hover:bg-white/10 hover:border-white/20"
            >
              {/* Ghost number */}
              <span className="text-[160px] font-black text-white/3 absolute -bottom-5 -right-2 leading-none pointer-events-none select-none tracking-[-4px]">
                {num}
              </span>

              <div className="relative z-10">
                <span className="text-[11px] font-bold tracking-[.18em] uppercase text-green-400 mb-5 block">
                  {num}
                </span>
                <h3 className="text-[22px] font-extrabold text-white leading-tight mb-4">{title}</h3>
                <p className="text-[14px] text-white/55 leading-relaxed mb-6">{desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="text-[13px] text-white/50 flex items-center gap-2.5">
                      <span className="w-[5px] h-[5px] bg-green-400 rounded-full flex-shrink-0 opacity-70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
