export function CaseStudiesSection() {
  const cases = [
    {
      tag: "Payment Gateways",
      title: "Building search presence for a B2B payments processor entering the Latin American market",
      desc: "No brand recognition, a market dominated by local players, and a highly technical product. We built a content cluster around payment compliance and cross-border transactions that established them as a credible voice before their sales team made a single call.",
      metrics: [
        { val: "4.8×", label: "Organic traffic growth in 6 months" },
        { val: "14", label: "First-page rankings on high-intent terms" },
        { val: "24", label: "Content assets published per month" },
        { val: "3", label: "Authority backlinks per month" },
      ],
    },
    {
      tag: "Trading & Brokers",
      title: "Helping a CFD broker compete for organic traffic against Tier 1 incumbents",
      desc: "Going up against brokers with 15 years of domain authority requires a different approach than trying to outrank them directly. We focused on zero-competition long-tail clusters and thought leadership that positioned their analysts as primary sources in the space.",
      metrics: [
        { val: "3.2×", label: "Organic sessions increase" },
        { val: "22", label: "New first-page rankings" },
        { val: "4", label: "Industry publication placements" },
        { val: "2", label: "Podcast appearances booked" },
      ],
    },
    {
      tag: "iGaming",
      title: "Establishing a B2B iGaming compliance platform as the reference voice in a niche category",
      desc: "The product was strong but invisible. Decision-makers had never heard of them. We mapped the exact questions their buyers were asking, produced compliance-focused content that answered them, and distributed through the trade publications and LinkedIn channels they actually read.",
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
              Work across the<br className="hidden sm:block" /> full spectrum.
            </h2>
          </div>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            Three industries, three different challenges. The common thread is building authority in spaces where trust is the primary conversion driver.
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
