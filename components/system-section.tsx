import { Link2, Mic, Search, Users } from "lucide-react"
import Link from "next/link"

export function SystemSection() {
  const cards = [
    {
      icon: Link2,
      num: "01",
      title: "Authority Backlinks",
      desc: "Links from the publications your industry actually reads. Finextra, The Block, Payments Source, Forbes Finance. Not generic directories. Real editorial placements that move your domain authority and your reputation simultaneously.",
      pills: ["Editorial placements", "Finance publications", "Domain authority"],
    },
    {
      icon: Mic,
      num: "02",
      title: "Podcast Appearances",
      desc: "We book your founders and executives on the fintech, payments, and investment shows your buyers actually listen to. A 30-minute interview builds more trust than 30 blog posts and the recording becomes a permanent asset.",
      pills: ["Show research", "Outreach handled", "Interview prep"],
    },
    {
      icon: Search,
      num: "03",
      title: "Search Visibility",
      desc: "Compliance-aware content built to rank for the exact terms your buyers search before they make a decision. Not keyword stuffing. Genuine E-E-A-T content that Google trusts in YMYL categories. Which is exactly where you operate.",
      pills: ["YMYL compliant", "E-E-A-T by design", "High-intent terms"],
    },
    {
      icon: Users,
      num: "04",
      title: "LinkedIn & Thought Leadership",
      desc: "The CFO making the buying decision is on LinkedIn every day. We build consistent presence in that feed through sharp, informed content that positions your team as the people who actually understand this space.",
      pills: ["Founder positioning", "Industry commentary", "Bylined articles"],
    },
  ]

  return (
    <section className="py-28 bg-green-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-5">
          ● What We Do
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          We build the authority<br className="hidden sm:block" />your competitors already have.
        </h2>
        <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">
          Not blog posts. Not generic SEO reports. The actual signals that tell Google, your industry, and your future clients that you&apos;re a credible player in this space.
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
            <strong className="text-white">The goal is simple:</strong> by the time your sales team reaches out, your prospect already knows your name, has seen you in a publication they respect, and trusts that you know what you&apos;re talking about.
          </p>
          <Link href="#process" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-[17px] rounded-full hover:opacity-90 transition-opacity flex-shrink-0 no-underline">
            See Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
