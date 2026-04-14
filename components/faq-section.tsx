"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "How is this different from a regular SEO agency?",
    a: "Most agencies treat financial services like any other vertical. We do not. YMYL content requires a different level of sourcing, compliance awareness, and editorial credibility. We also build across LinkedIn, publications, podcasts, and search simultaneously, and we have real relationships with the finance publications that matter in your specific vertical.",
  },
  {
    q: "How long until I see results?",
    a: "Publication placements can generate inbound within weeks of going live. Podcast appearances start conversations immediately after they air. Organic search rankings typically move in months 2 to 4. The compounding effect, where each piece of authority reinforces the others, kicks in around month 5 or 6 and keeps building from there.",
  },
  {
    q: "Do you understand compliance requirements in financial content?",
    a: "Yes. We do not make performance claims, we avoid language that could be construed as financial advice, and we flag anything that touches regulated territory before it publishes. We are not lawyers, but we understand where the lines are in FCA, ASIC, MGA, and SEC-regulated content, and we work within them.",
  },
  {
    q: "What publications can you get us into?",
    a: "It depends on your vertical and the strength of your angle. We work with Finextra, The Block, Crowdfund Insider, Payments Source, Forbes Finance contributor network, iGaming Business, Gambling Insider, and vertical-specific newsletters. We do not promise specific outlets upfront. We pitch the best angle and let the editorial process run.",
  },
  {
    q: "Do you book podcast appearances?",
    a: "Yes. We identify the shows your buyers are listening to, handle the outreach, and prep you for the interview. Finance podcast appearances are one of the highest-trust formats available in B2B and the recordings become permanent content assets that keep generating discovery long after they air.",
  },
  {
    q: "What kinds of financial companies do you work with?",
    a: "Fintech, iGaming, trading platforms, payment gateways, investment tools, crypto companies, neobanks, insurtech, and finance consultants. If you are a B2B company in or adjacent to financial services and your buyers are sophisticated enough to research you extensively before they respond, we are the right fit.",
  },
  {
    q: "What is included in the Authority Partner retainer?",
    a: "Strategy, content production, editorial review, publication placement, LinkedIn content, podcast booking, backlink building, and monthly performance reviews. You get a team that runs your authority operation end to end without the cost of building it in-house.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-28 bg-[#ede8de]" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-11">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Common Questions
          </span>
          <h2 id="faq-heading" className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight">
            You&apos;re probably<br className="hidden sm:block" /> wondering about.
          </h2>
        </div>

        <div className="flex flex-col gap-1 mt-11" role="list">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              role="listitem"
              className={`border rounded-xl overflow-hidden transition-colors relative z-10 ${
                openIndex === i ? "border-green-900/18 bg-white" : "border-green-900/10 bg-white"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex justify-between items-center gap-4 text-left px-7 py-6 text-[15px] font-semibold text-green-900 hover:text-green-600 transition-colors bg-transparent border-none cursor-pointer"
              >
                {q}
                <span
                  aria-hidden="true"
                  className={`w-[22px] h-[22px] rounded-full border border-green-900/18 flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === i ? "rotate-45 bg-green-100 border-green-500" : ""
                  }`}
                >
                  <Plus className="w-3 h-3 text-green-600" />
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
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
