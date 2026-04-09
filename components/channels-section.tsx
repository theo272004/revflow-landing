import { Search, Linkedin, Mail, Mic, Cpu, Link2 } from "lucide-react"

export function ChannelsSection() {
  const channels = [
    {
      icon: Search,
      title: "Google Search",
      desc: "YMYL-compliant topical clusters built for the high-intent terms your buyers search before a purchasing or partnership decision.",
      iconColor: "text-green-800",
      iconBg: "bg-green-900/8",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      desc: "The primary channel for financial decision-makers. Thought leadership and consistent presence in the feed of your exact buyer profile.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600/8",
    },
    {
      icon: Mail,
      title: "Industry Publications",
      desc: "Placed features in Finextra, The Block, Crowdfund Insider, Payments Source, and other outlets with genuine finance readership.",
      iconColor: "text-green-800",
      iconBg: "bg-green-900/8",
    },
    {
      icon: Mic,
      title: "Podcast Appearances",
      desc: "We book your founders on fintech, payments, and investment shows where your buyers actually listen. Trust built through conversation, not advertising.",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/8",
    },
    {
      icon: Cpu,
      title: "AI Models",
      desc: "When a CFO asks ChatGPT about payment processors or trading tools, your brand needs to appear in that answer. We engineer content for LLM citation.",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/8",
    },
    {
      icon: Link2,
      title: "Authority Backlinks",
      desc: "Links from publications that financial regulators, buyers, and Google all recognize as credible. Quality placements that move domain authority.",
      iconColor: "text-green-800",
      iconBg: "bg-green-900/8",
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
          ● Where We Build Authority
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
          The channels that matter<br className="hidden sm:block" /> in financial services.
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
          Finance audiences don&apos;t behave like typical B2B buyers. We go where they read, listen, and make decisions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {channels.map(({ icon: Icon, title, desc, iconColor, iconBg }) => (
            <div
              key={title}
              className="bg-[#f5f0e8] relative z-10 border border-green-900/10 rounded-2xl p-7 transition-all hover:border-green-900/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-green-900">{title}</h4>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
