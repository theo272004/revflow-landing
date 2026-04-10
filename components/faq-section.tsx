"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      q: "Do you understand compliance requirements in financial content?",
      a: "Yes. We don't make performance claims, avoid language that could be construed as financial advice, and flag anything that touches regulated territory before it publishes. Every brief is reviewed with your vertical's regulatory context in mind.",
    },
    {
      q: "What kinds of financial companies do you work with?",
      a: "Fintech, iGaming, trading platforms, investment tools, payment gateways, finance consultants, and any B2B company operating in or adjacent to financial markets. If your buyers are sophisticated and your content needs to earn trust before it earns a click, we're the right fit.",
    },
    {
      q: "How long until I see results?",
      a: "Publication placements can generate inbound within weeks of going live. Organic search rankings typically move in months 2 to 4, with compounding gains from month 5 onward. Authority-based SEO takes longer to build than paid traffic, and it lasts proportionally longer.",
    },
    {
      q: "What publications can you get us into?",
      a: "It depends on your vertical and the strength of your angle. We work with publications including Finextra, The Block, Crowdfund Insider, Payments Source, Forbes Finance contributor network, and vertical-specific newsletters. We don't promise specific outlets upfront — we pitch the best angle and let the editorial process run.",
    },
    {
      q: "Do you book podcast appearances?",
      a: "Yes. We identify shows where your buyers are listening, handle the outreach, and help prep you or your exec for the interview. Finance podcast appearances are one of the highest-trust formats available in B2B, and the recordings become long-term content assets.",
    },
    {
      q: "How is this different from a standard SEO agency?",
      a: "Most agencies treat financial services like any other vertical. We don't. YMYL content requires a different level of sourcing, compliance awareness, and editorial credibility. We also build across LinkedIn, publications, podcasts, and search simultaneously, not just one channel.",
    },
    {
      q: "What's included in the Authority Partner retainer?",
      a: "Strategy, content production, editorial review, publication placement, LinkedIn content, podcast booking, backlink building, and monthly performance reviews. You get a team that runs your authority operation end to end.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-28 bg-[#ede8de]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-11">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Common Questions
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight">
            You&apos;re probably<br className="hidden sm:block" /> wondering about.
          </h2>
        </div>

        <div className="flex flex-col gap-1 mt-11">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors relative z-10 ${
                openIndex === i ? "border-green-900/18 bg-white" : "border-green-900/10 bg-white"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center gap-4 text-left px-7 py-6 text-[15px] font-semibold text-green-900 hover:text-green-600 transition-colors bg-transparent border-none cursor-pointer"
              >
                {q}
                <span
                  className={`w-[22px] h-[22px] rounded-full border border-green-900/18 flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === i ? "rotate-45 bg-green-100 border-green-500" : ""
                  }`}
                >
                  <Plus className="w-3 h-3 text-green-600" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[400px] px-7 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[15px] text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
