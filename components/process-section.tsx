export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Vertical Audit and Authority Map",
      desc: "We map your competitive landscape, identify authority gaps, and build a content architecture designed to dominate your specific niche within financial services.",
      items: [
        "Competitor authority analysis",
        "YMYL gap identification",
        "Topic cluster architecture",
        "E-E-A-T assessment",
      ],
    },
    {
      num: "02",
      title: "Expert Content Engineering",
      desc: "We research, write, and produce content with real industry depth. Expert sourcing, compliance-aware language, and editorial standards that hold up under scrutiny.",
      items: [
        "Expert-attributed articles",
        "Data studies and reports",
        "Compliance-reviewed copy",
        "Thought leadership series",
      ],
    },
    {
      num: "03",
      title: "Multi-Channel Distribution",
      desc: "We place content where finance buyers are: industry publications, LinkedIn, podcasts, and newsletters. Each placement reinforces authority and generates backlinks that compound over time.",
      items: [
        "Publication outreach and placement",
        "LinkedIn content strategy",
        "Podcast booking and prep",
        "Newsletter sponsorships",
      ],
    },
  ]

  const stats = [
    { val: "5+", label: "Years Experience" },
    { val: "15+", label: "B2B Projects" },
    { val: "100%", label: "Finance Focus" },
    { val: "4.2×", label: "Avg ROI" },
  ]

  return (
    <section id="process" className="py-28 bg-[#ede8de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● How We Do It
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
            Our Process
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[700px] leading-relaxed mx-auto">
            Built around the realities of regulated markets. Every step produces content that earns trust at the editorial, search, and buyer level.
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] mt-11">
          {stats.map(({ val, label }) => (
            <div key={label} className="bg-green-900 rounded-2xl p-7 text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-white leading-none mb-3">{val}</div>
              <div className="text-[11px] tracking-widest uppercase text-white/48">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
