import { Search, Linkedin, Mail, Mic, Cpu, Link2 } from "lucide-react"

export function ChannelsSection() {
  const channels = [
    {
      icon: Search,
      title: "Google Search",
      subtitle: "The first place they go",
      desc: "High-intent searches happen before any sales motion. We rank your company for the terms your buyers search during vendor evaluation. Not just traffic terms, but the searches that signal buying intent.",
      iconColor: "text-green-800",
      iconBg: "bg-green-900/8",
    },
    {
      icon: Cpu,
      title: "AI Models",
      subtitle: "Where the shortlist is being built now",
      desc: "When a CFO asks ChatGPT or Perplexity which fintech vendors to consider, the answer comes from citation authority and editorial presence. Most companies have not built this yet. We do.",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/8",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Where trust is formed before first contact",
      desc: "Financial decision-makers are on LinkedIn every day. By the time your sales team reaches out, we make sure they already know your name from content that demonstrated real knowledge of their world.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600/8",
    },
    {
      icon: Mail,
      title: "Industry Publications",
      subtitle: "Third-party credibility no ad can replace",
      desc: "Finextra, The Block, iGaming Business, Payments Source. When buyers see your name in publications they already trust, it carries more weight than anything on your own website.",
      iconColor: "text-green-800",
      iconBg: "bg-green-900/8",
    },
    {
      icon: Mic,
      title: "Podcasts",
      subtitle: "The highest-trust format in B2B finance",
      desc: "A 30-minute interview on the right fintech or payments show reaches exactly the buyers you are trying to convert. The recording keeps working long after it airs.",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/8",
    },
    {
      icon: Link2,
      title: "Authority Backlinks",
      subtitle: "The signal Google and your buyers both read",
      desc: "Links from credible finance and trade publications tell Google you belong in this category. They also tell your prospects the same thing when they find you cited in sources they already respect.",
      iconColor: "text-green-800",
      iconBg: "bg-green-900/8",
    },
  ]

  return (
    <section className="py-28 bg-[#ede8de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Where Financial Buyers Look Before They Talk to Anyone
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
            Your buyers are not<br className="hidden sm:block" />just Googling anymore.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            Before a CFO, CTO, or procurement team takes a call, they have already researched you across multiple channels. We build your presence in every place that shapes that opinion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {channels.map(({ icon: Icon, title, subtitle, desc, iconColor, iconBg }) => (
            <div
              key={title}
              className="bg-[#f5f0e8] relative z-10 border border-green-900/10 rounded-2xl p-7 flex flex-col gap-3 transition-all hover:border-green-900/20 hover:-translate-y-1"
            >
              <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div>
                <p className="text-[11px] tracking-[.12em] uppercase text-green-600 font-semibold mb-1">{title}</p>
                <h4 className="text-[17px] font-bold text-green-900 mb-2">{subtitle}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
