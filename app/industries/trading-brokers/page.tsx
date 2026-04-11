import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Shield, Users, TrendingUp, Link2, Mic, Megaphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { IndustryFAQ } from "@/components/industry-faq"

export const metadata: Metadata = {
  title: "SEO for Forex Brokers and Trading Platforms | SEO4Finance",
  description: "We help forex, CFD, and multi-asset brokers compete for organic visibility against Tier 1 incumbents. Compliance-aware content, authority backlinks, and presence that earns trader trust before the first deposit.",
}

const painPoints = [
  { icon: TrendingUp, title: "Every high-volume keyword is owned by brokers with years of domain authority", desc: "IG Group, CMC Markets, Saxo, and Interactive Brokers have been at this for a long time. Trying to outrank them on 'best forex broker' is not a realistic first step. You need a smarter approach to where you compete." },
  { icon: Search, title: "Paid traffic in trading costs more than almost any other category", desc: "CPC for trading and broker keywords can reach levels that make acquisition costs unsustainable for newer entrants. And the moment you pause spend, the traffic disappears. You need a channel that compounds instead of resets." },
  { icon: Shield, title: "FCA, ASIC, and CySEC rules make creative content very constrained", desc: "You can not make performance claims. You can not show past returns as indicative of future results. Most content agencies do not understand these rules and produce copy that either breaks them or is so watered down it says nothing at all." },
  { icon: Users, title: "Serious traders do not trust a broker they have never heard of anywhere", desc: "A retail trader considering depositing real money will research you extensively. If you only appear on your own website and paid ads, you are invisible in all the places a careful trader looks for independent validation of who you are." },
  { icon: Search, title: "Affiliates promote whoever pays them most, not whoever is best", desc: "Affiliate traffic is valuable but you are competing on CPA against brokers with larger budgets. Building your own organic presence reduces your dependence on affiliate economics and gives you a pipeline you fully control." },
  { icon: Megaphone, title: "Your analysts and research team are an underused authority asset", desc: "Most brokers have sharp in-house analysts producing market commentary that only reaches existing clients. That expertise, published in the right places and attributed correctly, is one of the most powerful authority signals available in this space." },
]

const solutions = [
  { icon: Search, title: "Long-tail content clusters where you can win", desc: "We identify the specific searches that serious traders make around your instruments, platforms, and account types where incumbents have not produced authoritative content. We build ownership there before they notice the gap.", pills: ["Instrument-specific content", "Platform guides", "Trader-intent clusters"] },
  { icon: Megaphone, title: "Analyst-led thought leadership in financial media", desc: "Your research team has opinions and insights that serious traders value. We take that expertise and place it in financial publications, trading communities, and industry outlets that reach your exact audience with the right level of credibility.", pills: ["Analyst bylines", "Market commentary", "Research features"] },
  { icon: Link2, title: "Authority backlinks that build trust with traders and Google", desc: "We secure editorial links from finance publications and trading media that both serious traders and search engines recognize as credible. Not directory links. Real editorial placements in sources that informed traders actually reference when they research a broker.", pills: ["Finance media", "Trading publications", "Editorial placements"] },
  { icon: Mic, title: "Podcast appearances on trading and finance shows", desc: "Serious traders listen to industry podcasts. Your CEO or chief analyst appearing on the shows they follow is one of the most direct paths to the kind of trust that gets someone comfortable enough to open and fund an account.", pills: ["Trading shows", "Finance podcasts", "Markets commentary"] },
]

const faqs = [
  { q: "Can you write trading content without making performance claims?", a: "Yes. We understand FCA, ASIC, and CySEC content requirements and never produce copy that makes implied or direct performance claims, presents past results as indicative of future outcomes, or fails to include appropriate risk warnings where required. Everything is reviewed before it goes anywhere near your compliance team, which means less back and forth for you." },
  { q: "We operate in multiple jurisdictions. Can you handle regional content requirements?", a: "Yes. Different regulators have different requirements for how financial products are described and what disclosures are needed. We build content with jurisdiction-specific compliance in mind so your legal team is not constantly firefighting copy that was written for the wrong market." },
  { q: "How do you compete with Tier 1 broker domain authority?", a: "You do not compete on their strongest terms. You compete by owning the specific searches that serious traders make around your instruments, account types, and platform features where the incumbents have not invested. We find where the large brokers have left gaps and build your presence there first." },
  { q: "We already have affiliate traffic. Why do we need organic?", a: "Affiliate traffic is valuable but you are competing on CPA against larger brokers with bigger budgets, and that dependency creates risk. Organic authority gives you a pipeline that belongs to you, compounds over time, and does not disappear when a major affiliate renegotiates or switches to a competitor. It also attracts higher-quality traders because they are actively researching, not being pushed by an affiliate link." },
  { q: "What is the timeline for results?", a: "Publication placements and analyst bylines typically happen within four to eight weeks. Search rankings move in months two to four. The compounding effect kicks in around month five. Podcast appearances and LinkedIn thought leadership start building familiarity much earlier than organic rankings." },
]

export default function TradingBrokersPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <Header />

      {/* HERO */}
      <section className="pt-44 pb-28 relative overflow-hidden">
        <div className="absolute -top-[20%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(64,145,108,0.09),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[.14em] uppercase text-green-700 border border-green-900/20 rounded-full px-4 py-1.5 mb-7 bg-white/70">
                <span className="w-[6px] h-[6px] bg-green-500 rounded-full animate-pulse"></span>
                Trading and Brokers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-5">
                You can not outspend<br />IG Group on ads.<br /><em className="text-green-600 not-italic">You can outrank them on trust.</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[580px]">
                Tier 1 brokers own the high-volume keywords. Paid CPC in trading is some of the most expensive in all of B2C and B2B finance. We build organic authority in the places they have not bothered with and trust signals that serious traders actually respond to.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="bg-green-800 text-white hover:bg-green-700 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-green-800/20 no-underline">
                  Get Your Free Authority Audit
                </Link>
                <Link href="/#process" className="border border-green-800/30 text-green-800 hover:bg-green-50 bg-transparent px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide no-underline inline-flex items-center">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {[
                { val: "3.2×", label: "Average organic sessions increase for broker clients" },
                { val: "22", label: "New first-page rankings within the first four months" },
                { val: "4", label: "Industry publication placements generating qualified referral traffic" },
                { val: "0", label: "Performance claims. Everything we produce is compliant with FCA and ASIC content standards." },
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

      {/* PAIN SECTION */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px] mb-14">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
              ● The Broker Reality
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">
              The market is brutal<br />and the playing field is not level.
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              Trading is one of the most competitive spaces in online finance. The incumbents have structural advantages that take years to close. But there are gaps that most large brokers are not filling.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
            {painPoints.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-7 transition-colors hover:border-green-900/20"
              >
                <div className="w-10 h-10 rounded-xl bg-green-900/7 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-800" />
                </div>
                <h4 className="text-sm font-bold text-green-900 mb-2">{title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-28 bg-green-900 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(82,183,136,0.12),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-400 font-semibold mb-5">
            ● How We Fix It
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            We build organic visibility<br className="hidden sm:block" />in the gaps the big brokers ignore.
          </h2>
          <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">
            The strategy is not to fight where Tier 1 brokers are strongest. It is to be the most credible voice in the specific niches, instruments, and trader profiles where they have not invested.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map(({ icon: Icon, title, desc, pills }) => (
              <div
                key={title}
                className="bg-white/6 border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10"
              >
                <div className="w-11 h-11 rounded-xl bg-green-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-[22px] h-[22px] text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Results
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">
            What this looks like<br className="hidden sm:block" />for a CFD broker.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
            A regulated CFD and multi-asset broker trying to grow organic presence while competing against established platforms with years of domain authority in the same category.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {[
              { val: "3.2×", label: "Organic sessions increase" },
              { val: "22", label: "New first-page rankings" },
              { val: "4", label: "Industry publication placements" },
              { val: "2", label: "Podcast appearances booked" },
            ].map(({ val, label }) => (
              <div key={val} className="bg-green-900 rounded-2xl p-7 text-center">
                <div className="text-4xl font-extrabold text-white leading-none mb-2">{val}</div>
                <div className="text-[11px] tracking-widest uppercase text-white/48">{label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-green-900/10 rounded-2xl p-9 mt-9">
            <span className="text-[10px] tracking-[.12em] uppercase text-green-500 font-semibold">Trading and Brokers Case Study</span>
            <h3 className="text-xl font-bold text-green-900 mt-3 mb-4">A CFD broker finds organic growth by owning the keywords the big players have left behind</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Going after &quot;best CFD broker&quot; was not the strategy. We mapped every long-tail search around their specific instruments, their platform&apos;s unique features, and the trader profiles they served best. We built deep content around those terms, got their chief analyst placed as a source in two financial publications within the first six weeks, and booked their CEO on a trading podcast with a genuine audience of their target traders. Organic sessions tripled inside four months and the quality of inbound improved significantly because the content was attracting serious traders, not just browsers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 bg-[#ede8de]">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-11">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
              ● Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight">
              Broker-specific questions<br className="hidden sm:block" />we get asked often.
            </h2>
          </div>
          <IndustryFAQ faqs={faqs} />
          <div className="text-center mt-12">
            <p className="text-[13px] text-muted-foreground mb-3">Questions about your specific situation?</p>
            <a href="mailto:contact@seoforstartups.co" className="text-lg font-semibold text-green-900 no-underline hover:text-green-600 transition-colors">
              contact@seoforstartups.co
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.14),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Traders are researching<br /><em className="text-green-400 not-italic">right now.</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[480px] mx-auto leading-relaxed mb-10">
            Every week without authority is a week your competitors stay ahead. Let&apos;s close the gap.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#contact" className="bg-white text-green-900 text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-opacity no-underline">
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
