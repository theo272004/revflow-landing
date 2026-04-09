import { Shield, Users, Mail, TrendingUp } from "lucide-react"

export function SystemSection() {
  const cards = [
    {
      icon: Shield,
      num: "01",
      title: "E-E-A-T by Design",
      desc: "Every piece is structured to signal expertise and trustworthiness to both readers and search engines. Expert attribution, compliance-aware language, and editorial depth built in from the brief.",
      pills: ["Expert sourcing", "Compliance review", "Editorial depth"],
    },
    {
      icon: Users,
      num: "02",
      title: "Thought Leadership That Converts",
      desc: "Finance buyers respond to sharp, informed opinion from people who understand their world. We build content that earns attention from CFOs, CTOs, and compliance officers — not just clicks.",
      pills: ["Bylined articles", "Industry commentary", "Data insights"],
    },
    {
      icon: Mail,
      num: "03",
      title: "Publication Placement Network",
      desc: "We place your content in the outlets your buyers already read: Finextra, The Block, Crowdfund Insider, Forbes Finance, and vertical-specific publications with real readership in your market.",
      pills: ["Editorial placements", "Bylined features", "Authority backlinks"],
    },
    {
      icon: TrendingUp,
      num: "04",
      title: "Presence That Outlasts Your Budget",
      desc: "Paid media disappears the moment you stop. Editorial coverage, ranked content, and citation authority keep generating trust signals long after the work is done — at zero marginal cost.",
      pills: ["Long-term compounding", "Citation authority"],
    },
  ]

  return (
    <section className="py-28 bg-green-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-5">
          ● The Solution
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          Authority infrastructure built for your vertical.
        </h2>
        <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">
          We don&apos;t apply generic SEO to financial services. We build content systems that satisfy Google&apos;s toughest editorial standards while speaking the language your buyers understand.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map(({ icon: Icon, num, title, desc, pills }) => (
            <div
              key={num}
              className="bg-white/6 border border-white/10 rounded-2xl p-9 relative overflow-hidden transition-colors hover:bg-white/10 hover:border-white/20"
            >
              <span className="text-[100px] font-extrabold text-white/4 absolute bottom-0 right-4 leading-none pointer-events-none select-none">
                {num}
              </span>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-green-400/20 flex items-center justify-center mb-5">
                  <Icon className="w-[22px] h-[22px] text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-11 p-9 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-8">
          <p className="text-[17px] text-white/70 max-w-[560px] leading-relaxed">
            <strong className="text-white">The difference</strong> between financial companies that get found and those that don&apos;t isn&apos;t ad spend. It&apos;s whether they&apos;ve built genuine authority in their vertical.
          </p>
          <button className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-[17px] rounded-full hover:opacity-90 transition-opacity flex-shrink-0">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  )
}
