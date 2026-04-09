import { Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const upgrades = [
    { title: "Data Studies and Reports", desc: "Original research that earns backlinks and positions you as a primary source in your vertical." },
    { title: "YouTube and Video Content", desc: "Scripted video production aligned with your written content clusters." },
    { title: "Interactive Tools and Calculators", desc: "Engineering-as-marketing assets that capture leads and earn organic links." },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Flexible Partnership
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight">
            Measurable results.<br className="hidden sm:block" /> No lock-in contracts.
          </h2>
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
              For finance companies with a team in place but no clear authority strategy. We audit, map, and architect your full content and distribution system.
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {["E-E-A-T and YMYL gap audit", "Topic cluster architecture", "6-month content and PR roadmap", "First 5 briefs and publication targets"].map((item) => (
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
            <div className="text-[40px] font-extrabold text-white leading-none mb-1">Talk to Us</div>
            <div className="text-xs tracking-[.1em] uppercase text-white/38 mb-5">Retainer</div>
            <p className="text-[15px] text-white/55 leading-relaxed mb-8">
              Full-service. We become your editorial and distribution department, handling everything from content production to publication placement.
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {["Everything in Authority Blueprint", "Expert-sourced content production", "Industry publication placements", "LinkedIn content strategy", "Podcast booking and prep", "Authority backlink building", "Monthly performance reviews"].map((item) => (
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
            Available Upgrades
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
