import { Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const upgrades = [
    { title: "Data Studies and Original Research", desc: "The kind of content other publications cite and link to. Builds authority fast." },
    { title: "YouTube and Video Production", desc: "Scripted video built for search, aligned with your written content clusters." },
    { title: "Interactive Calculators and Tools", desc: "Lead capture assets that also earn organic backlinks from other sites." },
  ]

  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Simple, Flexible Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight">
            Start with a blueprint.<br className="hidden sm:block" /> Scale when it works.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mx-auto mt-4 mb-14">
            No long-term lock-in. No vague deliverables. You know exactly what you&apos;re getting before you sign anything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[22px]">
          {/* Blueprint */}
          <div className="bg-[#f5f0e8] relative z-10 border border-green-900/10 rounded-[22px] p-11">
            <div className="w-[52px] h-[52px] rounded-xl bg-green-900/8 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-800" />
            </div>
            <div className="text-base font-bold text-green-900 mb-2">Authority Blueprint</div>
            <div className="text-5xl font-extrabold text-green-900 leading-none mb-1">$950</div>
            <div className="text-xs tracking-[.1em] uppercase text-muted-foreground mb-5">One-off</div>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              You have a team that can execute. You just need to know exactly where to focus, which publications to target, and what your content gaps actually are. This is that.
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {["E-E-A-T and YMYL gap audit", "Full topic cluster architecture", "6-month content and PR roadmap", "First 5 briefs with publication targets"].map((item) => (
                <li key={item} className="text-sm text-green-950 flex items-start gap-3">
                  <CheckCircle className="w-[18px] h-[18px] mt-[1px] flex-shrink-0 text-green-800" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full py-[17px] text-center rounded-xl text-xs font-bold uppercase tracking-widest border border-green-900/25 text-green-900 hover:bg-green-900/5 transition-colors no-underline">
              Buy Blueprint
            </Link>
          </div>

          {/* Partner */}
          <div className="bg-green-900 relative z-10 border border-green-900 rounded-[22px] p-11 relative">
            <span className="absolute top-6 right-6 bg-green-500 text-white text-[10px] font-bold tracking-[.1em] uppercase px-4 py-1.5 rounded-full">
              Most Scalable
            </span>
            <div className="w-[52px] h-[52px] rounded-xl bg-white/12 flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-base font-bold text-white/62 mb-2">Authority Partner</div>
            <div className="text-[40px] font-extrabold text-white leading-none mb-1">$1,500</div>
            <div className="text-xs tracking-[.1em] uppercase text-white/38 mb-5">Starting at / month</div>
            <p className="text-[15px] text-white/55 leading-relaxed mb-8">
              We run your entire authority operation. Content, backlinks, publications, podcasts, LinkedIn. End to end. Scope and pricing scale with your vertical and goals. Book a call to get a custom proposal.
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {["Everything in Authority Blueprint", "Expert-sourced content production", "Industry publication placements", "LinkedIn content strategy", "Podcast booking and interview prep", "Authority backlink building", "Monthly performance reviews"].map((item) => (
                <li key={item} className="text-sm text-white/80 flex items-start gap-3">
                  <CheckCircle className="w-[18px] h-[18px] mt-[1px] flex-shrink-0 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full py-[17px] text-center rounded-xl text-xs font-bold uppercase tracking-widest bg-white text-green-900 hover:opacity-90 transition-opacity no-underline">
              Book a Call
            </Link>
          </div>
        </div>

        {/* Upgrades */}
        <div className="mt-14">
          <div className="text-[11px] tracking-[.14em] uppercase text-green-500 text-center mb-6">
            Available Add-ons
          </div>
          <div className="grid md:grid-cols-3 gap-[14px]">
            {upgrades.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#f5f0e8] relative z-10 border border-green-900/10 rounded-2xl p-6 flex gap-4 items-start transition-colors hover:border-green-900/20"
              >
                <div className="w-7 h-7 rounded-xl bg-green-900/7 flex items-center justify-center flex-shrink-0 text-green-600 font-bold text-sm">
                  +
                </div>
                <div>
                  <h3 className="text-sm font-bold text-green-900 mb-1">{title}</h3>
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
