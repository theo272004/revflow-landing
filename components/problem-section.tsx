import { Shield, AlertTriangle, BarChart3 } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Shield,
      title: "YMYL and E-E-A-T Standards",
      desc: "Your Money Your Life categories require demonstrated expertise, authoritativeness and trust at every layer — not just good writing.",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Blindness",
      desc: "Content that makes performance claims or misrepresents regulated products creates real legal and reputational exposure. Most agencies don't know where the line is.",
    },
    {
      icon: BarChart3,
      title: "Wrong Channels",
      desc: "Your buyers are on LinkedIn, Finextra, and industry podcasts. Agencies that default to generic content platforms are fishing in the wrong waters.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
              ● Why This Vertical Is Different
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
              Finance is the hardest vertical to rank in — and most agencies aren&apos;t built for it.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Google holds financial content to the highest editorial standards on the internet. Generic SEO won&apos;t survive here. Neither will content written by people who don&apos;t understand the space.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {problems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white relative z-10 border border-green-900/10 rounded-2xl p-6 flex gap-5 items-start transition-colors hover:border-red-900/20"
              >
                <div className="w-10 h-10 rounded-xl bg-red-900/7 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-green-900 mb-1">{title}</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
