"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Link2, Mic, Megaphone } from "lucide-react"
import Link from "next/link"
import { IndustryFAQ } from "@/components/industry-faq"

const snapshot = [
  { val: "$9T+", label: "Digital payments transaction volume globally in 2024", context: "The payments market is one of the largest technology markets in the world. The scale of the opportunity makes it intensely competitive: every well-funded company in this space is building content, backlinks, and brand." },
  { val: "4–12 wks", label: "Typical enterprise merchant due diligence window for payment infrastructure", context: "Merchants do not switch payment providers on impulse. This evaluation window is when editorial presence determines who gets shortlisted. If you are not discoverable during this period, you are not considered." },
  { val: "PCI DSS", label: "The compliance standard governing all payment processors globally", context: "Content that misrepresents PCI DSS certification levels or security capabilities creates both legal exposure and credibility damage with merchants who know how to verify these claims. Most agencies do not know the difference between SAQ levels." },
  { val: "78%", label: "B2B buyers complete significant research before engaging a vendor", context: "Merchants have typically formed a strong shortlist before responding to any outreach. (Gartner, 2024) Getting on that list requires being findable and credible in the sources merchants research from." },
]

const complianceBullets = [
  { num: "01", text: <><strong className="text-green-950">PCI DSS language has to be precisely accurate or it creates regulatory and credibility risk.</strong> Content that misrepresents certification level, overstates security capabilities, or makes unauthorized claims about card scheme relationships creates real exposure. Merchants who work with PCI QSAs know exactly what your certification claims mean. We get this right.</> },
  { num: "02", text: <><strong className="text-green-950">The publications reaching payments procurement teams require real editorial relationships to access.</strong> Payments Source, The Paypers, and PYMNTS do not accept generic cold pitches. Getting placed requires understanding their editorial standards and building credibility over time. We have those relationships.</> },
  { num: "03", text: <><strong className="text-green-950">Enterprise merchant due diligence spans weeks. Your content has to be present during that entire window.</strong> A CTO evaluating payment infrastructure typically spends four to twelve weeks researching before engaging vendors. Your content needs to be visible and credible across that entire period, not just at the moment your sales team makes contact.</> },
]

const painPoints = [
  { title: "Stripe and Adyen own the category in every merchant mind before research begins", desc: "Your sales team is not just selling a product. They are overcoming a default assumption. Merchants who encountered your company from a credible source before the call are dramatically easier to convert." },
  { title: "Your technical and regional differentiators are invisible online", desc: "If you are the best gateway for cross-border transactions in Latin America or for specific payment method integrations, the merchants who need that are searching for it. They just cannot find you because that story has not been told in the right places." },
  { title: "Enterprise merchants research payment providers for weeks before contacting anyone", desc: "CTOs and CFOs evaluating payment infrastructure spend weeks researching before they respond to a demo request. If you are not in their searches, their peer conversations, and the publications they read, you are not on the shortlist that reaches procurement." },
]

const solutions = [
  { icon: Search, title: "Search visibility built around merchant evaluation intent", desc: "Content clusters around the specific searches CTOs and CFOs make when evaluating payment infrastructure: PCI DSS guides, cross-border payment comparisons, regional coverage, and integration depth content that reaches buyers during the research phase.", pills: ["Comparison content", "Market guides", "PCI DSS accuracy"] },
  { icon: Megaphone, title: "Editorial placements in publications merchants actually read", desc: "Your content placed in Payments Source, The Paypers, PYMNTS, and Finextra. These are the outlets payments procurement teams and industry analysts read. Third-party editorial credibility that no owned channel can replicate.", pills: ["Payments Source", "The Paypers", "PYMNTS"] },
  { icon: Link2, title: "Authority backlinks from the payments and fintech ecosystem", desc: "Editorial links from Payments Source, The Paypers, fintech media, and compliance-focused outlets that tell Google and merchant prospects that you are a recognized player in the payments ecosystem.", pills: ["Payments ecosystem", "Fintech media", "Editorial only"] },
  { icon: Mic, title: "Podcast appearances on shows payments decision-makers follow", desc: "Payments on Fire, The PayFAQ, and Finextra podcasts reach CTOs and heads of payments evaluating infrastructure. We handle outreach and prep so your executives build authority, not just airtime.", pills: ["Payments on Fire", "The PayFAQ", "Finextra podcasts"] },
]

const scenario = [
  { num: "01", title: "Identify the merchant evaluation searches your competitors rank for that you do not", desc: "We map which terms CTOs search when evaluating payment infrastructure in your specific categories: PCI DSS requirements, cross-border settlement guides, payment method integration comparisons. These are often addressable without fighting Stripe directly." },
  { num: "02", title: "Build the first publication angle and pitch Payments Source or The Paypers within 30 days", desc: "We identify the editorial angle most relevant to your market position, draft a contributor piece, and pitch it with the context these publications need to accept it. Not a press release. A substantive editorial piece that their readers find valuable." },
  { num: "03", title: "Build regional or vertical-specific content clusters", desc: "If your strongest differentiator is Latin American cross-border processing or high-risk merchant support, we build deep content around those specific searches. These are the terms where you can win because incumbents have not prioritized them." },
  { num: "04", title: "Book your first podcast appearance within 60 days", desc: "We identify the payments shows your target procurement teams listen to, pitch your CEO or head of product on an angle with genuine editorial value, and handle all coordination. The recordings become permanent discovery assets." },
]

const faqs = [
  { q: "How do payment gateways compete with Stripe and Adyen in organic search?", a: "Stripe and Adyen dominate category-level search terms. The effective strategy is building authority in specific merchant categories, regional markets, payment method specializations, and use cases where they have not built deep content. A gateway specializing in Latin American cross-border transactions or high-risk merchant categories can build category-defining authority in those areas faster than incumbents will respond." },
  { q: "What compliance language matters for payment gateway content?", a: "Payment content must accurately describe PCI DSS compliance status and certification levels, avoid misleading claims about security capabilities or uptime, accurately represent acquiring relationships and card scheme memberships, and correctly describe regulatory status in each jurisdiction. Content that misrepresents PCI DSS certification level creates both legal exposure and credibility damage with merchants who know how to verify these claims." },
  { q: "Which publications do you target for payment gateway companies?", a: "For payment gateways and processors, the most valuable placements are in Payments Source, The Paypers, PYMNTS, Finextra, and Merchant Maverick for SMB-focused processors. We also target vertical publications specific to the merchant categories our clients serve. Publication selection is driven by where the specific merchant procurement teams our clients target actually get their industry information." },
  { q: "How long does merchant due diligence take and how does SEO affect it?", a: "Enterprise merchant due diligence on a payment gateway typically spans four to twelve weeks. During this process, decision-makers search for your name alongside terms like reviews and security, check whether you have been mentioned in payments publications, and evaluate whether your executives have visible industry presence. Editorial presence shortens this evaluation because trust signals are already established before the formal review begins." },
  { q: "Can you help payment companies entering new regional markets?", a: "Yes. Entering a new regional market means competing against processors with established merchant relationships and local presence. We build region-specific content addressing the local payment method landscape, regulatory environment, and merchant concerns for that market. For payments companies entering Latin America, Southeast Asia, or African markets, this content positions the gateway as knowledgeable before they have local case studies to reference." },
  { q: "What makes payments SEO different from other fintech SEO?", a: "Payments SEO sits at the intersection of technical infrastructure, financial regulation, and merchant trust. The buyer combines technical sophistication with commercial risk-aversion. Content needs to communicate technical capability accurately, demonstrate compliance and security credibility, and speak to the specific merchant use cases the gateway serves. Generic fintech content that does not address the technical specifics of payment processing fails to build credibility with this audience." },
  { q: "How does podcast booking work for payments companies?", a: "We identify the payments shows your specific procurement targets listen to, handle the outreach, and prepare your CEO or head of product for interviews that build category authority. Shows like Payments on Fire, The PayFAQ, and Finextra podcasts reach the CTOs and heads of payments evaluating infrastructure. Podcast recordings generate long-term discovery as merchants find them during their research process." },
]

const related = [
  { href: "/industries/fintech", title: "Fintech Companies", desc: "Authority building for fintech platforms including embedded finance and financial infrastructure." },
  { href: "/industries/igaming", title: "iGaming", desc: "SEO for payment processors serving iGaming operators in MGA and UKGC regulated markets." },
  { href: "/industries/neobanks", title: "Neobanks", desc: "Content strategy for digital-first banks competing for merchant and consumer relationships." },
]

export default function PaymentGatewaysPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Header />

      {/* HERO */}
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div className="absolute -top-[20%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(64,145,108,0.09),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase text-green-700 border border-green-900/20 rounded-full px-4 py-1.5 mb-7 bg-white/70">
                <span className="w-[6px] h-[6px] bg-green-500 rounded-full animate-pulse" />
                Payment Gateway SEO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-5">
                Merchants shortlist five<br />payment providers before<br /><em className="text-green-600 not-italic">contacting any of them.</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[520px]">
                Stripe and Adyen own the default mental shortlist for most merchants before research begins. We build the editorial presence, search visibility, and publication coverage that gets payment gateways and processors into that evaluation set.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-green-800 text-white hover:bg-green-700 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                  Get Your Free Payments SEO Audit
                </Link>
                <Link href="/#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                  See Our Process
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {[
                { val: "4.8x", label: "Average organic traffic growth for payment gateway clients in 6 months" },
                { val: "14", label: "First-page rankings on high-intent merchant evaluation terms" },
                { val: "6 wks", label: "Average time to first placement in Payments Source or The Paypers" },
                { val: "100%", label: "Content reviewed for PCI DSS accuracy and compliance language" },
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

      {/* PUBBAR */}
      <div className="bg-white border-y border-green-900/10 py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[.12em] uppercase text-muted-foreground text-center mb-5 opacity-50">We have placed clients in</p>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {["Payments Source", "The Paypers", "PYMNTS", "Finextra", "Merchant Maverick"].map((pub) => (
              <span key={pub} className="text-[13px] font-bold text-muted-foreground opacity-40 hover:opacity-65 transition-opacity">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SNAPSHOT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">The Payments Landscape Right Now</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-10">The market context your<br />SEO strategy has to navigate.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {snapshot.map(({ val, label, context }) => (
              <div key={val} className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-6">
                <div className="text-[30px] font-extrabold text-green-900 leading-none mb-2">{val}</div>
                <div className="text-[12px] font-semibold text-muted-foreground leading-snug mb-2">{label}</div>
                <div className="text-[11px] text-muted-foreground opacity-70 leading-relaxed">{context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* WHY GENERIC FAILS */}
      <section className="py-20 bg-[#ede8de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Why Generic SEO Fails in This Vertical</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">Three things that break general<br />agencies in payments.</h2>
            <div className="flex flex-col gap-4 mt-8">
              {complianceBullets.map(({ num, text }) => (
                <div key={num} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{num}</div>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 mt-8 px-4 py-3 bg-green-100 border border-green-900/15 rounded-xl">
              <div className="w-9 h-9 rounded-full bg-green-900 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">RF</div>
              <div>
                <div className="text-[13px] font-bold text-green-900">Revflow</div>
                <div className="text-[11px] text-muted-foreground">Financial services SEO specialists. 5+ years in regulated markets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* PAIN */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">● The Payments Reality</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">You have a great product,<br />but nobody can find it.</h2>
          <p className="text-[17px] text-muted-foreground max-w-[620px] leading-relaxed mb-12">Established players have spent years building the authority that gets them shortlisted. We close that gap.</p>
          <div className="grid sm:grid-cols-3 gap-[14px]">
            {painPoints.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-green-900/10 rounded-2xl p-8 transition-all hover:border-red-900/20 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-red-900/7 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h4 className="text-[16px] font-bold text-green-900 mb-3 leading-snug">{title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* WHAT WE BUILD */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-4">What We Build for Payment Gateways</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">Authority signals built specifically<br />for this vertical.</h2>
          <p className="text-[17px] text-white/50 max-w-[580px] leading-relaxed mb-14">Every tactic applied with this vertical&apos;s compliance environment, publication landscape, and buyer behavior in mind.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map(({ icon: Icon, title, desc, pills }) => (
              <div key={title} className="bg-white/6 border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10 hover:border-white/20">
                <div className="w-11 h-11 rounded-xl bg-green-400/20 flex items-center justify-center mb-5">
                  <Icon className="w-[22px] h-[22px] text-green-400" />
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{title}</h3>
                <p className="text-[13px] text-white/58 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pills.map((p) => <span key={p} className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* SCENARIO */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">
            <div>
              <span className="inline-block text-[10px] tracking-[.12em] uppercase text-green-600 font-semibold mb-3">If you came to us as a payment gateway</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">Here is where we would start.</h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">The most common situation: a B2B payments processor with a strong product, entering a new market or trying to move beyond Stripe comparison searches where they always lose. Here is the first 90 days.</p>
            </div>
            <div className="flex flex-col divide-y divide-green-900/10">
              {scenario.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-green-900 text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{num}</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-green-900 mb-2">{title}</h4>
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
      <section className="py-20 bg-[#ede8de]">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-11">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Payment Gateway SEO Questions</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight">What payments marketing<br />teams ask us most.</h2>
          </div>
          <IndustryFAQ faqs={faqs} />
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* RELATED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Related Industries</span>
          <h2 className="text-2xl font-extrabold text-green-900 mb-8">We also work with</h2>
          <div className="grid sm:grid-cols-3 gap-[14px]">
            {related.map(({ href, title, desc }) => (
              <Link key={href} href={href} className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-6 flex flex-col gap-2.5 no-underline transition-all hover:border-green-900/20 hover:-translate-y-1">
                <h4 className="text-[14px] font-bold text-green-900">{title}</h4>
                <p className="text-[12px] text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <span className="text-[13px] text-green-500 mt-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.14),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Merchants are shortlisting<br />payment providers <em className="text-green-400 not-italic">right now.</em>
          </h2>
          <p className="text-[17px] text-white/52 max-w-[480px] mx-auto leading-relaxed mb-10">
            Be in that list before your sales team reaches out. That is when presence becomes pipeline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-opacity no-underline">
              Get Your Free Payments SEO Audit
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
