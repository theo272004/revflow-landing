export function CaseStudiesSection() {
  const cases = [
    {
      tag: "Payment Gateways",
      title: "A B2B payments processor entering Latin America with zero brand recognition",
      desc: "Competing against local players with years of market presence. We built a content cluster around payment compliance and cross-border transactions that made them a credible voice before their sales team made a single call.",
      metrics: [
        { val: "4.8×", label: "Organic traffic in 6 months" },
        { val: "14", label: "First-page rankings" },
        { val: "24", label: "Content assets per month" },
        { val: "3", label: "Authority backlinks per month" },
      ],
    },
    {
      tag: "Trading & Brokers",
      title: "A CFD broker trying to compete against firms with 15 years of domain authority",
      desc: "You can't outrank incumbents by targeting the same keywords. We focused on zero-competition long-tail clusters and thought leadership that positioned their analysts as credible sources in the space.",
      metrics: [
        { val: "3.2×", label: "Organic sessions increase" },
        { val: "22", label: "New first-page rankings" },
        { val: "4", label: "Publication placements" },
        { val: "2", label: "Podcast appearances booked" },
      ],
    },
    {
      tag: "iGaming",
      title: "A B2B compliance platform that nobody in the industry had heard of",
      desc: "Strong product, zero visibility. We mapped the exact questions their buyers were asking, produced compliance-focused content that answered them, and distributed through the trade publications and LinkedIn channels those buyers read.",
      metrics: [
        { val: "5.8×", label: "Organic traffic increase" },
        { val: "17", label: "First-page rankings" },
        { val: "24", label: "Content assets per month" },
        { val: "3", label: "Authority backlinks per month" },
      ],
    },
  ]

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-end mb-14">
          <div>
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
              ● Results That Speak
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight">
              Three industries.<br className="hidden sm:block" />Three different problems.
            </h2>
          </div>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            Every financial vertical has its own obstacles. Here&apos;s how we&apos;ve approached three of them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cases.map(({ tag, title, desc, metrics }) => (
            <div
              key={tag}
              className="bg-white relative z-10 border border-green-900/10 rounded-2xl p-9 flex flex-col gap-6 transition-colors hover:border-green-900/20"
            >
              <span className="text-[10px] tracking-[.12em] uppercase text-green-500 font-semibold">
                {tag}
              </span>
              <h3 className="text-[17px] font-bold text-green-900 leading-snug">{title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {metrics.map(({ val, label }) => (
                  <div key={label} className="bg-[#f5f0e8] rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-green-900 leading-none mb-1">{val}</div>
                    <div className="text-[11px] text-muted-foreground leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
