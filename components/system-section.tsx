import { Link2, Mic, Search, Users } from "lucide-react"
import Link from "next/link"

export function SystemSection() {
  const cards = [
    {
      icon: Link2,
      num: "01",
      title: "Editorial backlinks from the publications that matter in your vertical",
      desc: "Links from Finextra, The Block, Payments Source, and trade publications your buyers actually read. Not directories. Real editorial placements that build your domain authority and your reputation at the same time.",
      pills: ["Finextra", "Payments Source", "The Block", "Forbes Finance"],
    },
    {
      icon: Mic,
      num: "02",
      title: "Podcast appearances on the shows your buyers listen to",
      desc: "We book your founders on fintech, payments, and investment podcasts that reach the specific decision-makers you are selling to. A single interview builds more trust than months of content and the recording becomes a permanent asset.",
      pills: ["Show research", "Outreach handled", "Interview prep"],
    },
    {
      icon: Search,
      num: "03",
      title: "Search and AI visibility built for YMYL-regulated categories",
      desc: "We build topical clusters around the high-intent searches your buyers make during vendor evaluation. Compliance-reviewed, expert-attributed, and structured to rank in categories where Google applies its strictest editorial standards.",
      pills: ["YMYL compliant", "E-E-A-T signals", "LLM citation", "High-intent terms"],
    },
    {
      icon: Users,
      num: "04",
      title: "LinkedIn and thought leadership that warms the pipeline before outreach",
      desc: "The CFO making the buying decision is on LinkedIn every day. We build consistent presence in their feed so that when your sales team reaches out, they are reaching someone who already knows who you are and respects what you say.",
      pills: ["Founder positioning", "Industry commentary", "Bylined articles"],
    },
  ]

  return (
    <section id="system" className="py-28 bg-green-900 relative overflow-hidden" aria-labelledby="system-heading">
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-5">
          ● What We Build
        </span>

        <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">
          Not traffic reports. Not keyword rankings. The actual signals that tell Google, your industry, and your future clients that you are a credible player in regulated financial services.
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
          <p className="text-[17px] text-white/70 max-w-[580px] leading-relaxed">
            <strong className="text-white">The goal:</strong> by the time your sales team reaches out, your prospect has already seen your name in a publication they respect, heard your founder on a podcast they follow, and found you when they searched for what you offer. That is when deals close faster.
          </p>
          <Link href="#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-[17px] rounded-full hover:opacity-90 transition-opacity flex-shrink-0 no-underline">
            Start Building Authority
          </Link>
        </div>
      </div>
    </section>
  )
}

