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
    <section id="process" className="py-28 bg-[#ede8de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Our Approach
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
            We replaced guessing<br className="hidden sm:block" />with a system built for finance.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[700px] leading-relaxed mx-auto">
            Three steps. Each one designed specifically for how financial buyers discover, evaluate, and trust vendors in regulated markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map(({ num, title, desc, items }) => (
            <div
              key={num}
              className="bg-white relative z-10 border border-green-900/10 rounded-2xl p-9 transition-colors hover:border-green-900/20"
            >
              <span className="text-xs tracking-[.14em] text-green-600 font-semibold mb-5 block">
                {num}
              </span>
              <h3 className="text-xl font-extrabold text-green-900 mb-4 leading-tight">{title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="text-[13px] text-muted-foreground flex items-center gap-2.5">
                    <span className="w-[5px] h-[5px] bg-green-500 rounded-full flex-shrink-0 opacity-70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
