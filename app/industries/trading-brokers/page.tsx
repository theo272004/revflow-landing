"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Mail, Link2, Mic } from "lucide-react"
import Link from "next/link"
import { IndustryFAQ } from "@/components/industry-faq"

const snapshot = [
  { val: "$7.5T", label: "Daily global forex market turnover", context: "The forex market is the largest financial market in the world. This scale attracts both well-funded incumbents and intense scrutiny from regulators, making every content decision a compliance decision." },
  { val: "$50+", label: "Typical CPC for competitive broker keywords in paid search", context: "The most expensive keyword categories in digital advertising. Organic authority is not just a nice-to-have for brokers. For most, it is the only sustainable acquisition channel at scale." },
  { val: "FCA/ASIC/CySEC", label: "Primary regulatory bodies governing most licensed brokers", context: "COBS 4.6, RG234, and MiFID II set strict standards for financial promotions. Agencies without this knowledge produce content your compliance team rejects. Repeatedly." },
  { val: "78%", label: "Traders conduct 3+ hours of research before depositing", context: "Serious traders do not trust a broker they have never seen mentioned anywhere credible. (Opinium Research, 2024) Editorial presence during this research window is where trust is won or lost." },
]

const painPoints = [
  { title: "Every high-volume keyword is owned by brokers with years of domain authority", desc: "IG Group, CMC Markets, and Saxo have been building authority for years. Competing on the same head terms is not viable. You need a strategy that owns the gaps they have not prioritized." },
  { title: "Paid CPC in trading is some of the most expensive in digital marketing", desc: "Forex keyword CPCs make sustainable paid acquisition extremely challenging for brokers outside the top tier. When you pause spend, the pipeline disappears. Organic builds and compounds instead of resetting." },
  { title: "Serious traders do not trust a broker they have never seen mentioned anywhere credible", desc: "A trader considering a deposit will check regulatory status, search for independent reviews, and look for your analysts in financial media. If you only appear in your own ads, you fail that research before the conversation starts." },
]

const solutions = [
  { icon: Search, title: "Long-tail content clusters where you can rank now", desc: "We identify the searches serious traders make around your specific instruments, account types, and platform features where incumbents have not built deep content. FCA and ASIC-compliant throughout.", pills: ["Instrument-specific", "Platform guides", "FCA/ASIC compliant"] },
  { icon: Mail, title: "Analyst-led thought leadership in financial media", desc: "Your in-house analysts produce commentary that only reaches existing clients. We shape that expertise for external editorial standards and place it in Finance Magnates, FXStreet, and financial media where prospective traders encounter it.", pills: ["Finance Magnates", "FXStreet", "Named bylines"] },
  { icon: Link2, title: "Authority backlinks from trading and finance publications", desc: "Real editorial backlinks in sources that informed traders reference when researching broker legitimacy. Not directories or paid placements. Links that build both domain authority and prospect trust simultaneously.", pills: ["Finance media", "Trading pubs", "Editorial only"] },
  { icon: Mic, title: "Podcast appearances on shows your target traders follow", desc: "Your CEO or chief analyst appearing on the right trading show reaches your exact audience in a format where trust transfers naturally. We identify the shows, handle outreach, and prep your executives for interviews that build credibility.", pills: ["Retail forex shows", "Professional trading", "Market structure"] },
]

const scenario = [
  { num: "01", title: "Map the long-tail gaps Tier 1 brokers have left in your instrument categories", desc: "We identify every search around your specific instruments, account types, and platform conditions where IG and CMC have not built authoritative content. These are the terms you can rank for without fighting their full domain authority." },
  { num: "02", title: "Turn your analyst commentary into external editorial assets", desc: "We audit your existing market content, identify the highest-value angles, and reshape them for Finance Magnates and FXStreet editorial standards. Named analyst bylines are the strongest E-E-A-T signal available in this category." },
  { num: "03", title: "Secure first publication placement within 30 days", desc: "We pitch the best angle to the most relevant publication for your target audience. Finance Magnates for institutional and professional audiences, FXStreet for retail traders, Seeking Alpha for US-focused institutional content." },
  { num: "04", title: "Book your first podcast appearance within 60 days", desc: "We research the trading shows your specific trader profile listens to, build a pitch around a topic your CEO or chief analyst can speak to with real authority, and handle all coordination and interview prep." },
]

const faqs = [
  { q: "How do forex brokers compete with Tier 1 incumbents in organic search?", a: "Tier 1 brokers have years of domain authority that makes competing on high-volume head terms unrealistic in the short term. The effective strategy is building topical authority in the specific instrument categories, account types, and trader profiles where large brokers have not invested deeply. Zero-competition long-tail terms around specific currency pairs, trading conditions, and regulation comparisons are addressable even for brokers starting from a low authority baseline." },
  { q: "What are the FCA content rules for forex broker marketing?", a: "FCA-regulated brokers under COBS 4.6 cannot make misleading claims about returns, must include appropriate risk warnings on financial promotions, and must not present past performance as indicative of future results. Similar standards apply under ASIC RG234 in Australia and under CySEC in Cyprus. Agencies without familiarity with these rules regularly produce content that creates regulatory exposure for broker clients." },
  { q: "How do serious traders research and evaluate forex brokers?", a: "Serious traders check regulatory status and license numbers, read independent reviews, search for the broker alongside terms like withdrawal problems, look for analyst presence in financial media, and increasingly ask AI models for broker comparisons. Brokers that perform well in this research process have editorial presence in financial publications, named analysts quoted in market commentary, and a verifiable regulatory track record." },
  { q: "Can you help us use our in-house analyst team for SEO?", a: "Yes. Most brokers have analysts producing market commentary that only reaches existing clients. We take that expertise and shape it into content meeting editorial standards for external publication, place it in financial media, and attribute it correctly to named analysts. Named, credentialed analysts are one of the strongest E-E-A-T signals in the broker category and represent a significant advantage most brokers are not leveraging." },
  { q: "How does broker SEO work across multiple regulated jurisdictions?", a: "Different regulators have different requirements for how financial products are described, what risk warnings must appear, and what claims can be made. FCA rules under COBS differ from ASIC RG234 and from CySEC MiFID II interpretations. We build content with jurisdiction-specific compliance in mind so your legal team is not constantly correcting copy written for the wrong market." },
  { q: "What publications do you target for forex and CFD brokers?", a: "For forex and CFD brokers, valuable editorial placements are in Finance Magnates, FX News Group, Forex Crunch, FXStreet, and Seeking Alpha for institutional content. We also target financial news outlets that reach sophisticated retail traders who use these publications to stay informed about market structure and broker competition." },
  { q: "How do we reduce dependence on affiliate traffic?", a: "Affiliate traffic creates dependency on third-party commercial relationships where you compete on CPA against larger brokers. Building organic search authority creates a proprietary traffic channel that does not reset when an affiliate renegotiates. It also tends to attract higher-quality traders who sought out your broker independently, correlating with lower churn and higher lifetime value." },
]

const related = [
  { href: "/industries/fintech", title: "Fintech Companies", desc: "Authority building for fintech platforms competing against established incumbents." },
  { href: "/industries/crypto-web3", title: "Crypto and Web3", desc: "SEO for exchanges and DeFi platforms navigating regulatory complexity." },
  { href: "/industries/investment-wealth", title: "Investment and Wealth", desc: "Content strategy for wealth platforms competing for high-value client trust." },
]

export default function TradingBrokersPage() {
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
                SEO for Forex Brokers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold text-green-900 leading-[1.07] mb-5">
                You cannot outspend IG Group.<br /><em className="text-green-600 not-italic">You can outrank them on trust.</em>
              </h1>
              <p className="text-[17px] text-muted-foreground leading-relaxed mb-8 max-w-[500px]">
                Tier 1 brokers own the high-volume keywords. We build organic visibility in the specific instruments, trader profiles, and platform features where they have left gaps, and the trust signals serious traders check before depositing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="bg-green-800 text-white hover:bg-green-700 px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                  Get Your Free Broker SEO Audit
                </Link>
                <Link href="/#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                  See Our Process
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src="/revflow-landing/trading-brokers.webp" alt="SEO for Forex Brokers" className="w-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* PUBBAR */}
      <div className="bg-white border-y border-green-900/10 py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[.12em] uppercase text-muted-foreground text-center mb-5 opacity-50">We have placed clients in</p>
          <div className="flex items-center justify-center gap-9 flex-wrap">
            {["Finance Magnates", "FX News Group", "Forex Crunch", "FXStreet", "Seeking Alpha"].map((pub) => (
              <span key={pub} className="text-[13px] font-bold text-muted-foreground opacity-40 hover:opacity-65 transition-opacity">{pub}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-green-900/10" />

      {/* SNAPSHOT */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">The Forex and Broker Landscape Right Now</span>
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
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">FCA, ASIC, and CySEC rules create hard content limits most agencies cross immediately.</strong> No performance claims, no implied returns, no missing risk warnings. Content that violates COBS 4.6 or ASIC RG234 creates regulatory exposure and gets rejected by your legal team. We understand where the lines are before we write a word.</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">02</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">Named analyst attribution is one of the strongest E-E-A-T signals available, and most brokers are not using it.</strong> Your in-house analysts produce market commentary that only reaches existing clients. We take that expertise, shape it for external editorial standards, and place it in financial media where it builds trust with prospective traders who do not know you yet.</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-green-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">03</div>
                <p className="text-[14px] text-muted-foreground leading-relaxed"><strong className="text-green-950">Trader research spans multiple touchpoints. Being absent from any of them loses deals before they start.</strong> Serious traders check your name in financial publications, look for independent reviews, ask AI models about broker options, and listen to trading podcasts before depositing. Each of those is a channel where you either have presence or you lose the deal silently.</p>
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
          <p className="text-[17px] text-muted-foreground max-w-[620px] leading-relaxed mb-11">Established players have spent years building the authority that gets them shortlisted. We close that gap.</p>
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
          <p className="text-[16px] text-white/50 max-w-[560px] leading-relaxed mb-11">Every tactic applied with this vertical&apos;s compliance environment, publication landscape, and buyer behavior in mind.</p>
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
              <p className="text-[14px] text-muted-foreground leading-relaxed">The most common situation: a regulated CFD or multi-asset broker with a strong product, paying high CPCs, and a pipeline too dependent on affiliates. Here is the first 90 days.</p>
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

      {/* CTA */}
      <section className="py-[110px] bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.14),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-3.5">
            Serious traders are researching<br />their <em className="text-green-400 not-italic">next broker right now.</em>
          </h2>
          <p className="text-[16px] text-white/55 max-w-[480px] mx-auto leading-relaxed mb-9">
            Build the organic presence and editorial authority that puts you in consideration before your competitors do.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full hover:opacity-90 transition-opacity no-underline">
              Get Your Free Broker SEO Audit
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
