"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link2, Mic, Search, Users } from "lucide-react"
import Link from "next/link"
import { IndustryFAQ } from "@/components/industry-faq"

const snapshot = [
  { val: "5,700+", label: "Fintech SaaS companies globally as of 2025", context: "All competing for the same category-defining search real estate. The B2B fintech space is more crowded than it has ever been." },
  { val: "$310B", label: "Global fintech market size projected by 2025", context: "High stakes attract well-funded incumbents. The companies that have been building domain authority for years are not slowing down." },
  { val: "YMYL", label: "Google classification for all fintech content", context: "Your Money Your Life means Google's strictest editorial standards apply to every page you publish. Generic SEO playbooks fail here consistently." },
  { val: "78%", label: "B2B buyers complete research before first contact", context: "Most of your buyers have already formed an opinion about your company before your sales team sends a single message. (Forrester, 2024)" },
]

const painPoints = [
  { title: "Stripe, Adyen, and first-generation fintechs own every keyword your buyers search", desc: "They have been building domain authority since before your company existed. Competing on the same head terms is not viable. You need to build authority in the gaps they have not prioritized." },
  { title: "Procurement teams form a vendor shortlist before responding to outreach", desc: "A CFO evaluating payment infrastructure has already shortlisted providers from search results, publication mentions, and peer recommendations. If you are not in those sources, you are not on the list the outreach lands in." },
  { title: "Your technical differentiators require editorial depth generic agencies cannot produce", desc: "The reasons a CTO should choose your embedded finance API over an incumbent are specific and technical. Content that does not reflect that depth does not earn trust from buyers who know this space as well as you do." },
]

const solutions = [
  { icon: Link2, title: "Editorial backlinks from fintech publications", desc: "Earned placements in Finextra, TechCrunch, Forbes Finance, PYMNTS, and The Paypers. Real editorial content, not directories or sponsored posts.", pills: ["Finextra", "TechCrunch", "PYMNTS"] },
  { icon: Mic, title: "Podcast appearances on the shows your buyers follow", desc: "Fintech Insider, Breaking Banks, The Fintech Blueprint. Shows with audiences of CFOs, CTOs, and fintech operators. Outreach, scheduling, and prep included.", pills: ["Fintech Insider", "Breaking Banks"] },
  { icon: Search, title: "YMYL-compliant search visibility for evaluation terms", desc: "Topical clusters around the searches procurement teams make when evaluating fintech vendors. Compliance-reviewed, expert-attributed, optimized for LLM citation as well as traditional search.", pills: ["YMYL compliant", "LLM citation", "E-E-A-T"] },
  { icon: Users, title: "LinkedIn thought leadership in front of fintech decision-makers", desc: "Consistent founder presence in the LinkedIn feeds of the CFOs, CTOs, and procurement leads you are trying to reach. Before your sales team sends a message, they already know your name.", pills: ["Founder positioning", "Technical commentary"] },
]

const scenario = [
  { num: "01", title: "Authority gap audit against your top three competitors", desc: "We map which publications have cited them, which podcasts have featured them, which searches they rank for that you do not. This tells us exactly where the gaps are and where the fastest returns will come from." },
  { num: "02", title: "Identify the long-tail terms your buyers search during evaluation", desc: "Not best fintech platform. The specific searches a CTO makes when evaluating your category: compliance questions, integration depth comparisons, regional capability terms. These are addressable even with low domain authority." },
  { num: "03", title: "Build the first publication angle and pitch Finextra within 30 days", desc: "We identify the editorial angle most relevant to your current market position, draft a contributor piece under your founder or an expert on your team, and pitch it to Finextra with the editorial context they need to accept it." },
  { num: "04", title: "Book your first podcast appearance within 60 days", desc: "We identify two or three shows with audiences that match your target buyer profile, build a pitch around a topic your founder can speak to with genuine authority, and handle all outreach and scheduling." },
]

const faqs = [
  { q: "Why is SEO harder for fintech than for other B2B businesses?", a: "Fintech falls under Google's Your Money Your Life category, which means every page touching financial products, lending, or payments is assessed for expertise, authoritativeness, and trustworthiness at a level that does not apply to non-financial B2B verticals. A fintech company without editorial backlinks from credible publications, without expert-attributed content, and without a compliance-aware posture will struggle to rank even for moderately competitive terms." },
  { q: "How long until we see organic results?", a: "Publication placements generate referral traffic and brand mentions within four to eight weeks. Organic rankings for targeted long-tail terms begin to move in months two to four. The compounding effect, where domain authority and topical depth reinforce each other, accelerates from month five onward. Highly competitive head terms require six to twelve months of sustained authority building." },
  { q: "What publications do you target for fintech companies?", a: "For fintech the most valuable placements are in Finextra, TechCrunch, Forbes Finance, PYMNTS, and vertical-specific newsletters with genuine fintech readership. For payments subcategories we also target Payments Source and The Paypers. For lending platforms, Lendit and American Banker. Placement value is determined by both domain authority and audience quality." },
  { q: "What does compliance-aware content mean in practice?", a: "No implied or explicit performance claims, no language that could constitute financial advice under FCA or SEC definitions, appropriate risk language where required, and accurate representation of your regulatory status and product capabilities. We review every deliverable before delivery. We are not lawyers, but we understand where the compliance lines are in fintech and work within them." },
  { q: "Can you help us appear in ChatGPT and Perplexity answers?", a: "Yes. When a CFO asks ChatGPT which embedded finance providers to evaluate, the answer comes from citation authority and the density of authoritative content about your company across the web. We structure content to be citation-worthy for large language models: clear factual claims, named entities, expert attribution, and placement in publications that AI models treat as credible fintech sources." },
  { q: "What fintech companies are you best suited to work with?", a: "B2B fintech companies across payments infrastructure, embedded finance, lending technology, open banking, and financial data platforms. Our clients are competing against incumbents with established domain authority and need to build credibility with enterprise buyers before a sales motion can succeed. We are not suited for B2C consumer fintech apps focused on volume traffic." },
  { q: "How does podcast booking work for fintech companies?", a: "We identify the fintech shows your buyers listen to, pitch your founders based on an angle tailored to each show's audience, and handle all coordination and interview prep. Shows we regularly book include Fintech Insider, Breaking Banks, The Fintech Blueprint, and payments podcasts with audiences of 5,000 to 50,000 fintech professionals." },
]

const related = [
  { href: "/industries/payment-gateways", title: "Payment Gateways", desc: "SEO for processors competing against Stripe and Adyen for merchant trust." },
  { href: "/industries/neobanks", title: "Neobanks", desc: "Content strategy for challenger banks competing against incumbents with decades of authority." },
  { href: "/industries/investment-wealth", title: "Investment and Wealth", desc: "Authority building for robo-advisors and wealth platforms earning trust before earning clients." },
]

export default function FintechPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Header />

      {/* HERO */}
      <section className="pt-44 pb-24 relative overflow-hidden">
        <div className="absolute -top-[10%] right-[-5%] w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(64,145,108,0.09),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-[72px] items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase text-green-700 border border-green-900/20 rounded-full px-4 py-1.5 mb-6 bg-white/70">
                <span className="w-[6px] h-[6px] bg-green-500 rounded-full animate-pulse" />
                Fintech SEO Agency
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold text-green-900 leading-[1.07] mb-5">
                Your buyers have already<br />Googled you. <em className="text-green-600 not-italic">What did they find?</em>
              </h1>
              <p className="text-[17px] text-muted-foreground leading-relaxed mb-8 max-w-[500px]">
                CFOs, CTOs, and procurement teams shortlist fintech vendors before they respond to any outreach. We build the editorial authority and search presence that gets you on that list.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="bg-green-800 text-white hover:bg-green-700 px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                  Get Your Free Fintech SEO Audit
                </Link>
                <Link href="/#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                  See Our Process
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "4.8x", label: "Average organic traffic growth for fintech clients in 6 months" },
                { val: "6 wks", label: "Average time to first placement in a fintech publication" },
                { val: "14", label: "Average new first-page rankings in the first quarter" },
                { val: "100%", label: "Compliance-reviewed. No performance claims. No FCA exposure." },
              ].map(({ val, label }) => (
                <div key={val} className="bg-white border border-green-900/10 rounded-2xl p-[22px]">
                  <div className="text-[32px] font-extrabold text-green-900 leading-none mb-1.5">{val}</div>
                  <div className="text-[12px] text-muted-foreground leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBBAR */}
      <div className="bg-white border-y border-green-900/10 py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[.12em] uppercase text-muted-foreground text-center mb-5 opacity-50">We have placed fintech clients in</p>
          <div className="flex items-center justify-center gap-9 flex-wrap">
            {["Finextra", "TechCrunch", "Forbes Finance", "PYMNTS", "Crowdfund Insider"].map((pub) => (
              <span key={pub} className="text-[13px] font-bold text-muted-foreground opacity-40 hover:opacity-65 transition-opacity">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-green-900/10" />

      {/* SNAPSHOT */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">The Fintech Landscape Right Now</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-9">Why visibility in fintech<br />has never been harder to earn.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {snapshot.map(({ val, label, context }) => (
              <div key={val} className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-6">
                <div className="text-[30px] font-extrabold text-green-900 leading-none mb-1.5">{val}</div>
                <div className="text-[12px] font-semibold text-muted-foreground leading-snug mb-1.5">{label}</div>
                <div className="text-[11px] text-muted-foreground opacity-70 leading-relaxed">{context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* COMPLIANCE */}
      <section className="py-20 bg-[#ede8de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Why Fintech SEO Fails Without Specialist Knowledge</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-8">Three things that break generic SEO agencies in fintech.</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">01</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">YMYL standards require editorial depth generic writers cannot produce.</strong> Google assesses fintech content for demonstrated expertise and author credentials. Anonymous or surface-level content fails this standard and does not rank, regardless of technical SEO work.</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">02</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">FCA COBS 4.6 and equivalent regulations create hard content limits.</strong> Performance claims, implied returns, and misleading comparisons carry real regulatory risk. Agencies without this background produce content your legal team has to reject or rewrite entirely.</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">03</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">The publications and podcasts that move fintech procurement decisions require real industry relationships.</strong> Finextra and TechCrunch do not accept cold-pitched generic content. Getting placed requires knowing their editorial standards, which angles they respond to, and building credibility over time.</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 mt-6 px-4 py-3 bg-[#d8eedf] border border-green-900/15 rounded-xl">
              <div className="w-[34px] h-[34px] rounded-full bg-green-900 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">SF</div>
              <div>
                <div className="text-[13px] font-bold text-green-900">SEO4Finance</div>
                <div className="text-[11px] text-muted-foreground">Fintech and financial services SEO specialists. 5+ years in regulated financial markets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* PAIN */}
      <section className="py-24 bg-[#ede8de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">The Fintech Reality</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">You have a great product,<br />but nobody can find it.</h2>
          <p className="text-[17px] text-muted-foreground max-w-[620px] leading-relaxed mb-11">Established fintech platforms have spent years accumulating the domain authority and editorial presence that gets them shortlisted. We close that gap.</p>
          <div className="grid sm:grid-cols-3 gap-[14px]">
            {painPoints.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-green-900/10 rounded-2xl p-[30px] transition-all hover:border-red-900/20 hover:-translate-y-[3px]">
                <div className="w-[42px] h-[42px] rounded-xl bg-red-900/7 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h4 className="text-[16px] font-bold text-green-900 mb-2.5 leading-snug">{title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* STRATEGY */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-4">What We Build for Fintech Companies</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">Authority signals built for<br />the fintech buyer journey.</h2>
          <p className="text-[16px] text-white/50 max-w-[580px] leading-relaxed mb-11">Every tactic applied with fintech&apos;s specific compliance environment, publication landscape, and buyer behavior in mind.</p>
          <div className="grid md:grid-cols-2 gap-[14px]">
            {solutions.map(({ icon: Icon, title, desc, pills }) => (
              <div key={title} className="bg-white/6 border border-white/10 rounded-2xl p-[30px] transition-colors hover:bg-white/10">
                <div className="w-[42px] h-[42px] rounded-xl bg-green-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-[17px] font-bold text-white mb-2.5">{title}</h3>
                <p className="text-[13px] text-white/60 leading-relaxed mb-3.5">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pills.map((p) => <span key={p} className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* SCENARIO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-[60px] items-start">
            <div>
              <span className="inline-block text-[10px] tracking-[.12em] uppercase text-green-600 font-semibold mb-3">If you came to us as a fintech company</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-3.5">Here is where we would start.</h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">The most common situation we see: a B2B fintech company with a strong product and a sales team that is spending too much time educating prospects who have never heard of them. Here is the first 90 days of what we would build.</p>
            </div>
            <div className="flex flex-col divide-y divide-green-900/10">
              {scenario.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5 py-[22px] first:pt-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-green-900 text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{num}</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-green-900 mb-1.5">{title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* FAQ */}
      <section className="py-24 bg-[#ede8de]">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Fintech SEO Questions</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight">What fintech marketing<br />teams ask us most.</h2>
          </div>
          <IndustryFAQ faqs={faqs} />
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* RELATED */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Related Industries</span>
          <h2 className="text-2xl font-extrabold text-green-900 mb-9">We also work with</h2>
          <div className="grid sm:grid-cols-3 gap-[14px]">
            {related.map(({ href, title, desc }) => (
              <Link key={href} href={href} className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-6 flex flex-col gap-2.5 no-underline transition-all hover:border-green-900/20 hover:-translate-y-[3px]">
                <h4 className="text-[14px] font-bold text-green-900">{title}</h4>
                <p className="text-[12px] text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <span className="text-[13px] text-green-500 mt-1">&#8594;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[110px] bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.14),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-3.5">
            Competing against fintech platforms<br />with <em className="text-green-400 not-italic">years of domain authority?</em>
          </h2>
          <p className="text-[16px] text-white/55 max-w-[480px] mx-auto leading-relaxed mb-9">
            We close that gap. Tell us about your company and we will come back within 12 hours with a specific strategy for your vertical.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full hover:opacity-90 transition-opacity no-underline">
              Get Your Free Fintech SEO Audit
            </Link>
            <Link href="/#pricing" className="bg-transparent text-white/60 text-xs font-semibold uppercase tracking-widest px-9 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors no-underline">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
