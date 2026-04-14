"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link2, Mic, Search, Users } from "lucide-react"
import Link from "next/link"
import { IndustryFAQ } from "@/components/industry-faq"

const painPoints = [
  { title: "Incumbents own every keyword your buyers search", desc: "Established banks and first-generation fintechs have spent years building domain authority. They rank for everything. Trying to outspend them on ads is a race you can not win long term." },
  { title: "Google holds your content to a higher standard", desc: "Financial content falls under YMYL rules. One piece of content that implies a return, misrepresents a product, or skips the right disclaimers can set you back significantly with Google and with regulators." },
  { title: "Your buyers make decisions before they contact you", desc: "A CFO evaluating payment solutions, a CTO sourcing a lending API, or a procurement team shortlisting vendors has already formed an opinion about who belongs in this space before your sales team sends a message." },
  { title: "Agencies that don't know fintech slow you down", desc: "Generic agencies write content about what is open banking that attracts nobody relevant to your pipeline. They can not navigate compliance, they don't know which publications matter, and you spend more time correcting their work than benefiting from it." },
  { title: "AI models recommend your competitors when buyers research", desc: "When a head of finance asks ChatGPT or Perplexity which embedded finance providers to evaluate, your name needs to appear. Most fintech companies have not built the citation authority that gets them into those answers." },
  { title: "Paid traffic stops the moment your budget pauses", desc: "Ad spend in fintech is some of the most expensive in B2B. And when the campaign stops, the pipeline stops. You need a channel that builds value over time, not one that resets to zero every month." },
]

const solutions = [
  { icon: Link2, title: "Editorial backlinks from fintech publications", desc: "We place your content in the outlets your buyers already read: Finextra, The Block, Forbes Finance, TechCrunch, and vertical newsletters with real readership. These placements build both your search authority and your reputation simultaneously.", pills: ["Finextra", "Forbes Finance", "The Block", "TechCrunch"] },
  { icon: Search, title: "Search visibility built for YMYL compliance", desc: "We build topical clusters around the high-intent searches your buyers actually make before a vendor decision. Every piece is compliance-reviewed, expert-attributed, and structured to meet Google's financial content standards.", pills: ["YMYL compliant", "E-E-A-T by design", "Expert sourcing"] },
  { icon: Mic, title: "Podcast appearances with your target buyers listening", desc: "We book your founders and executives on the fintech shows that CFOs, CTOs, and product leaders actually tune into. A single interview reaches your exact audience and the recording becomes a permanent trust asset.", pills: ["Fintech Insider", "Acquired", "Fintech Nexus"] },
  { icon: Users, title: "LinkedIn presence that warms the pipeline", desc: "Your buyers are on LinkedIn every day. We build consistent thought leadership in their feed so that when your sales team reaches out, they are reaching out to someone who has already seen your name in a context they respect.", pills: ["Founder positioning", "Industry commentary", "Bylined content"] },
]

const faqs = [
  { q: "We already produce content. Why isn't it ranking?", a: "Content alone does not rank in financial services. Google requires demonstrated authority signals: backlinks from credible sources, expert attribution, and a track record of being cited in the industry. Without those signals, even well-written content stays invisible. We build the infrastructure that makes your content trustworthy enough to rank." },
  { q: "Can you write content that won't create compliance issues?", a: "Yes. We do not make performance claims, we avoid language that could be construed as financial advice, and we flag anything that touches regulated territory before it goes live. We are not lawyers, but we understand where the compliance lines are in fintech content and we work within them." },
  { q: "How do you approach content for a technical fintech product?", a: "We research the product deeply before writing anything. We interview your team, understand the technical architecture, and map content to the actual questions your buyers ask during the evaluation process. The goal is never to oversimplify. It is to make complex things clear to a reader who already knows the space." },
  { q: "Our buyers are on LinkedIn. Does this still apply to us?", a: "LinkedIn is part of what we build. But your buyers are also on Google before they get on LinkedIn. And they are asking AI models for vendor recommendations. And they read Finextra and TechCrunch. We build presence across all of those touchpoints, not just one." },
  { q: "How quickly can we get placed in a publication?", a: "Our fastest placements have happened within three weeks. Average is four to eight weeks depending on the publication and the angle. We do not pay for placements. Everything is earned editorial, which takes longer but carries significantly more weight with readers and with Google." },
]

export default function FintechPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Header />

      {/* HERO */}
      <section className="pt-44 pb-24 relative overflow-hidden">
        <div className="absolute -top-[20%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(64,145,108,0.09),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase text-green-700 border border-green-900/20 rounded-full px-4 py-1.5 mb-7 bg-white/70">
                <span className="w-[6px] h-[6px] bg-green-500 rounded-full animate-pulse" />
                Fintech
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-5">
                Your product is better.<br /><em className="text-green-600 not-italic">They find your competitors first.</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[540px]">
                You are competing against banks and fintech incumbents that have been building authority online for years. We close that gap through backlinks, editorial placements, and presence that compounds over time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-green-800 text-white hover:bg-green-700 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                  Get Your Free Authority Audit
                </Link>
                <Link href="/#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {[
                { val: "4.8×", label: "Average organic traffic growth for fintech clients in 6 months" },
                { val: "14", label: "Average new first-page rankings within the first quarter" },
                { val: "6wks", label: "Average time to first publication placement in a relevant outlet" },
                { val: "100%", label: "Compliance-reviewed content. No performance claims. No legal risk." },
              ].map(({ val, label }) => (
                <div key={val} className="bg-white border border-green-900/10 rounded-2xl p-6">
                  <div className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-none mb-2">{val}</div>
                  <div className="text-sm text-muted-foreground leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* PAIN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px] mb-14">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">● The Fintech Reality</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">The obstacles are real.<br />And they are specific to your space.</h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">Fintech is not like selling software. Your buyers are sophisticated, risk-averse, and they research extensively before they take a call with anyone.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
            {painPoints.map(({ title, desc }) => (
              <div key={title} className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-7 transition-colors hover:border-red-900/20">
                <div className="w-10 h-10 rounded-xl bg-red-900/7 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h4 className="text-[15px] font-bold text-green-900 mb-2 leading-snug">{title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* SOLUTIONS */}
      <section className="py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-4">● How We Fix It</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">We build the authority your<br />competitors took years to accumulate.</h2>
          <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">Not through shortcuts. Through the actual signals that tell Google, publications, and your future clients that you are a serious player in financial services.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map(({ icon: Icon, title, desc, pills }) => (
              <div key={title} className="bg-white/6 border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
                <div className="w-11 h-11 rounded-xl bg-green-400/20 flex items-center justify-center mb-5">
                  <Icon className="w-[22px] h-[22px] text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-[14px] text-white/60 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pills.map((p) => <span key={p} className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* RESULTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">● Results</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">What this looks like<br />in practice for fintech.</h2>
          <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">A B2B embedded finance provider competing against first-generation platforms with years of domain authority.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {[
              { val: "4.8×", label: "Organic traffic growth in 6 months" },
              { val: "14", label: "First-page rankings on high-intent terms" },
              { val: "24", label: "Content assets published per month" },
              { val: "3", label: "Authority backlinks per month" },
            ].map(({ val, label }) => (
              <div key={val} className="bg-green-900 rounded-2xl p-7 text-center">
                <div className="text-4xl font-extrabold text-white leading-none mb-2">{val}</div>
                <div className="text-[11px] tracking-widest uppercase text-white/48 leading-snug">{label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-green-900/10 rounded-2xl p-9 mt-9">
            <span className="text-[10px] tracking-[.12em] uppercase text-green-500 font-semibold">Fintech Case Study</span>
            <h3 className="text-xl font-bold text-green-900 mt-3 mb-4">From invisible to shortlisted in a competitive embedded finance category</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">The company had a genuinely differentiated product but no organic presence. Procurement teams evaluating embedded finance providers had never encountered their name. We built a content cluster around the specific compliance and integration questions their buyers were asking, got them placed in two relevant publications within the first eight weeks, and had their founders featured on a fintech show their target audience already followed. By month five, inbound from organic had overtaken paid as their primary pipeline source.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* FAQ */}
      <section className="py-24 bg-[#ede8de]">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-11">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">● Common Questions</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight">Fintech-specific questions<br />we get asked often.</h2>
          </div>
          <IndustryFAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.14),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Your buyers are searching<br /><em className="text-green-400 not-italic">right now.</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[480px] mx-auto leading-relaxed mb-10">
            Every week without authority is a week your competitors stay ahead. Let&apos;s close the gap.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-opacity no-underline">
              Get Your Free Authority Audit
            </Link>
            <Link href="/#pricing" className="bg-transparent text-white/65 text-xs font-semibold uppercase tracking-widest px-10 py-4 rounded-full border border-white/18 hover:bg-white/5 transition-colors no-underline">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
