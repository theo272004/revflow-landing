"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Mic, Search, Users } from "lucide-react"
import Link from "next/link"
import { IndustryFAQ } from "@/components/industry-faq"

const snapshot = [
  { val: "$95B+", label: "Global online gambling market size in 2024", context: "Growing at 11.7% CAGR through 2030. The B2B supplier market serving operators has grown proportionally, intensifying competition for platform and compliance vendor slots." },
  { val: "200+", label: "Active B2B iGaming suppliers competing for operator attention", context: "From platform providers to payment processors to compliance tools. Operators are overwhelmed with vendor outreach and rely heavily on trusted publications and peer referrals to shortlist." },
  { val: "MGA/UKGC", label: "Primary licensing bodies governing most regulated operators", context: "Suppliers serving MGA and UKGC operators must demonstrate regulatory awareness in all communications. Content that ignores this signals operational immaturity to sophisticated buyers." },
  { val: "2x/yr", label: "ICE and SiGMA as primary B2B discovery events", context: "The iGaming B2B calendar revolves around two major events. Operators research suppliers for months beforehand. Companies without online presence lose deals before the floor opens." },
]

const painPoints = [
  { title: "Your pipeline lives and dies at ICE and SiGMA, and you know that is not sustainable", desc: "Event-dependent pipelines create boom and bust sales cycles. When operators search for your product category between events, established suppliers appear and you do not." },
  { title: "Operators need to see you in iGaming Business before they trust you enough to take a meeting", desc: "A procurement team at a UKGC-licensed operator is not going to integrate an unknown supplier without due diligence. Editorial presence in trade publications is part of that check." },
  { title: "Entering a new regulated market means you are unknown to operators and regulators there", desc: "When you expand to a new jurisdiction, you have no local reputation. Online presence in market-specific publications is how you establish credibility before investing in a local sales team." },
]

const solutions = [
  { icon: Mail, title: "Trade publication placements operators actually read", desc: "Editorial content in iGaming Business, Gambling Insider, CalvinAyre, SBC News, and Casino Beats. Bylined features and expert commentary that operators trust as editorial, not advertising.", pills: ["iGaming Business", "Gambling Insider", "CalvinAyre"] },
  { icon: Search, title: "Search visibility for supplier evaluation and compliance queries", desc: "Content clusters around the searches operators make when evaluating suppliers: compliance requirements by jurisdiction, platform comparisons, licensing content specific to MGA and UKGC. Real procurement questions, not just high-volume terms.", pills: ["Jurisdiction guides", "Compliance content", "MGA/UKGC coverage"] },
  { icon: Mic, title: "Podcast appearances on iGaming B2B shows", desc: "We book your founders on the iGaming B2B podcast circuit: shows produced by SBC, iGaming Business, and Casino Beats, plus independent compliance and payments-in-gaming podcasts. Operators who make procurement decisions listen to these shows.", pills: ["SBC podcasts", "iGB content", "Compliance shows"] },
  { icon: Users, title: "LinkedIn presence in the operator and supplier community", desc: "Operators, compliance officers, and technical directors are active on LinkedIn between events. We build your founders into recognizable voices in iGaming B2B conversations so your outreach lands with context rather than cold.", pills: ["Regulatory commentary", "Market entries", "Compliance updates"] },
]

const scenario = [
  { num: "01", title: "Map your editorial footprint against top 3 competitors", desc: "Which publications have featured them, which podcasts have covered them, which compliance terms they rank for. This tells us exactly where to start and where the fastest returns are." },
  { num: "02", title: "Identify the compliance and evaluation terms operators search", desc: "Not broad category terms. The specific searches a procurement team makes when evaluating a platform or compliance tool for an MGA or UKGC-licensed operation." },
  { num: "03", title: "Build the first publication angle and pitch iGaming Business within 30 days", desc: "We identify the editorial angle most relevant to your positioning, draft a contributor piece under your founder, and pitch it with the editorial context iGaming Business needs to accept it." },
  { num: "04", title: "Book your first podcast appearance within 60 days", desc: "We identify two or three shows with audiences that match your target operator profile, build a pitch around a topic your CEO can speak to with genuine authority, and handle all outreach." },
]

const faqs = [
  { q: "What is the difference between B2B and B2C iGaming SEO?", a: "B2C iGaming SEO targets players searching for casinos and games. B2B iGaming SEO targets procurement teams, technical directors, and compliance officers at operators evaluating platform providers and compliance tools. The search terms, publications, and compliance requirements are entirely different. We work exclusively with B2B iGaming companies." },
  { q: "Why is Google advertising restricted for iGaming companies?", a: "Google restricts gambling-related advertising in most markets, making organic search and editorial authority one of the only scalable digital discovery channels available for iGaming B2B companies. This makes editorial publication presence and search visibility even more critical than in verticals where paid acquisition can compensate for weak organic performance." },
  { q: "Which publications do you target for iGaming B2B companies?", a: "For B2B suppliers the most valuable placements are in iGaming Business, Gambling Insider, CalvinAyre, SBC News, and Casino Beats. For compliance-focused companies we also target regulatory publications read by MGA and UKGC-regulated operators. We do not place content in B2C affiliate publications, which have no value for B2B supplier credibility." },
  { q: "How do you handle responsible gambling language in iGaming content?", a: "We apply the appropriate tone for content speaking to operators rather than players, maintaining the regulatory awareness that credible operators expect from their vendors. All content is reviewed before delivery for language that could create reputational or regulatory issues for our clients." },
  { q: "Our pipeline relies on ICE and SiGMA. Do we really need online presence?", a: "Operators research suppliers online before events. If they have not seen your name in iGaming Business or found you when they searched for your product category, you are starting every trade show conversation from zero. Online authority makes event conversations start warmer and convert faster." },
  { q: "Can you help iGaming companies entering new regulated markets?", a: "Yes. We build market-specific content that addresses the regulatory environment and licensing requirements of the target jurisdiction, positioning you as a company that understands the market before you have a local track record. This is one of the highest-ROI applications of iGaming content strategy." },
  { q: "How is iGaming B2B SEO different from other regulated verticals?", a: "iGaming combines financial services compliance requirements with advertising restrictions, responsible gambling obligations, and jurisdiction-by-jurisdiction regulatory variation. The B2B buyer is unusually sophisticated: operators evaluate suppliers intensively because a poor vendor choice affects their license standing and GGR. Surface-level content has almost no value here." },
]

const related = [
  { href: "/industries/payment-gateways", title: "Payment Gateways", desc: "SEO for payment processors serving iGaming operators in regulated markets." },
  { href: "/industries/fintech", title: "Fintech Companies", desc: "Authority building for fintech platforms competing in regulated financial markets." },
  { href: "/industries/finance-consultants", title: "Finance Consultants", desc: "SEO for consultants working within or adjacent to regulated gaming and financial markets." },
]

export default function IGamingPage() {
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
                iGaming SEO Agency
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold text-green-900 leading-[1.07] mb-5">
                Operators research suppliers before ICE. <em className="text-green-600 not-italic">Are they finding you?</em>
              </h1>
              <p className="text-[17px] text-muted-foreground leading-relaxed mb-8 max-w-[500px]">
                The iGaming B2B market runs on relationships built at trade shows. But operators now research suppliers online months before any event. We build the editorial presence that makes your trade show conversations start warmer.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="bg-green-800 text-white hover:bg-green-700 px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                  Get Your Free iGaming SEO Audit
                </Link>
                <Link href="/#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                  See Our Process
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "5.8x", label: "Organic traffic growth for iGaming B2B clients in 6 months" },
                { val: "17", label: "First-page rankings on B2B supplier evaluation terms" },
                { val: "3", label: "Authority backlinks per month from iGaming trade publications" },
                { val: "100%", label: "Content reviewed for MGA, UKGC tone and responsible gambling standards." },
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
          <p className="text-[11px] tracking-[.12em] uppercase text-muted-foreground text-center mb-5 opacity-50">We have placed clients in</p>
          <div className="flex items-center justify-center gap-9 flex-wrap">
            {["iGaming Business", "Gambling Insider", "CalvinAyre", "SBC News", "Casino Beats"].map((pub) => (
              <span key={pub} className="text-[13px] font-bold text-muted-foreground opacity-40 hover:opacity-65 transition-opacity">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-green-900/10" />

      {/* SNAPSHOT */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">The iGaming Landscape Right Now</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-9">The market context your<br />SEO strategy has to navigate.</h2>
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
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Why Generic SEO Fails in This Vertical</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-8">Three things that break general agencies here.</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">01</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">Compliance awareness is non-negotiable.</strong> Content that ignores the regulatory environment signals to sophisticated buyers that you do not understand their world. Every piece we produce is reviewed for compliance language before delivery.</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">02</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">The right publications require real editorial relationships.</strong> The outlets your buyers read do not accept generic cold pitches. Getting placed requires knowing their editorial standards and building credibility over time.</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">03</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">Buyer sophistication means surface-level content converts nothing.</strong> The decision-makers in this vertical have deep domain knowledge. Content that does not reflect that depth does not earn their trust, regardless of how well it ranks.</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 mt-6 px-4 py-3 bg-[#d8eedf] border border-green-900/15 rounded-xl">
              <div className="w-[34px] h-[34px] rounded-full bg-green-900 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">SF</div>
              <div>
                <div className="text-[13px] font-bold text-green-900">SEO4Finance</div>
                <div className="text-[11px] text-muted-foreground">Financial services SEO specialists with experience in regulated markets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* PAIN */}
      <section className="py-24 bg-[#ede8de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">The Reality</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">You have a great product,<br />but nobody can find it.</h2>
          <p className="text-[17px] text-muted-foreground max-w-[620px] leading-relaxed mb-11">Established players have spent years building the domain authority and editorial presence that gets them shortlisted. We close that gap.</p>
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
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-4">What We Build</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">Authority signals built specifically<br />for this vertical.</h2>
          <p className="text-[16px] text-white/50 max-w-[560px] leading-relaxed mb-11">Every tactic applied with this vertical&apos;s specific compliance environment, publication landscape, and buyer behavior in mind.</p>
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
              <span className="inline-block text-[10px] tracking-[.12em] uppercase text-green-600 font-semibold mb-3">If you came to us</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-3.5">Here is where we would start.</h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">The most common situation we see: a B2B iGaming supplier with a strong product and a pipeline that resets at every trade show. Here is the first 90 days.</p>
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
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">Questions</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight">What we get asked most.</h2>
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
            The next event is months away.<br /><em className="text-green-400 not-italic">Operators are searching right now.</em>
          </h2>
          <p className="text-[16px] text-white/55 max-w-[480px] mx-auto leading-relaxed mb-9">
            Build the online presence that makes every ICE and SiGMA conversation start with a warmer introduction.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full hover:opacity-90 transition-opacity no-underline">
              Get Your Free iGaming SEO Audit
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
