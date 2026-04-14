"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Mic, Search, Users } from "lucide-react"
import Link from "next/link"
import { IndustryFAQ } from "@/components/industry-faq"

const painPoints = [
  { title: "You are only known by people who have already met you", desc: "Your pipeline depends on who attended the last trade show. When someone searches for your product category online, the established platforms appear and you do not. That is a deal you are losing before it starts." },
  { title: "Google restricts paid gambling advertising in most markets", desc: "You can not simply buy visibility in this industry the way other B2B sectors can. Organic authority and editorial presence are not optional extras. They are your primary viable channel for online discovery." },
  { title: "Regulatory tone in content is a minefield most agencies walk into blindly", desc: "Content that misrepresents responsible gambling obligations, overstates game mechanics, or ignores MGA and UKGC language requirements can create real problems with regulators and with operators evaluating your credibility." },
  { title: "Your buyers read iGaming Business, not Forbes", desc: "Generic agencies pitch content to publications that your buyers have never opened. The operators and procurement teams you are trying to reach live in iGaming Business, Gambling Insider, and CalvinAyre. Getting there requires relationships those agencies do not have." },
  { title: "New market entries require credibility you have not had time to build", desc: "Expanding into a new jurisdiction means you are unknown to the operators and regulators there. Online presence is how you establish credibility before you spend budget on sales or events in that market." },
  { title: "Your product solves a real problem but nobody explains it clearly online", desc: "Complex compliance tools, platform features, and integration capabilities require content that communicates value to a technically sophisticated buyer. Generic writers produce surface-level content that does not earn the attention of operators who know their industry deeply." },
]

const solutions = [
  { icon: Mail, title: "Trade publication placements operators actually read", desc: "We get your content published in iGaming Business, Gambling Insider, CalvinAyre, and vertical newsletters that reach operators, compliance teams, and procurement decision-makers. Not press releases. Actual editorial content with your name on it.", pills: ["iGaming Business", "Gambling Insider", "CalvinAyre"] },
  { icon: Search, title: "Search visibility for the terms operators search during vendor evaluation", desc: "We map the exact searches operators make when evaluating a platform, compliance tool, or payment solution and build content that answers those questions with enough depth to rank and enough authority to convert.", pills: ["Compliance content", "Platform comparisons", "Jurisdiction guides"] },
  { icon: Mic, title: "Podcast appearances on shows operators and suppliers follow", desc: "We book your founders and executives on iGaming B2B podcasts and industry shows. This is the medium where the people who make supplier decisions spend their professional learning time between events.", pills: ["iGaming podcast circuit", "Regulatory shows", "Supplier spotlights"] },
  { icon: Users, title: "LinkedIn authority in front of the right operator audience", desc: "Operators and procurement teams are on LinkedIn. We build your founders and executives into recognizable voices in the iGaming B2B space so that your trade show conversations convert faster because people already know who you are.", pills: ["Founder positioning", "Regulatory commentary", "Market analysis"] },
]

const faqs = [
  { q: "Do you understand the difference between B2B and B2C iGaming?", a: "Yes. We work exclusively with B2B suppliers in iGaming, not with operators running consumer-facing gambling products. Our content targets the procurement and technical decision-makers at operators, not players. That distinction completely changes the content strategy, the publications we target, and the language we use." },
  { q: "Can you write about responsible gambling and regulatory topics without creating risk?", a: "Yes. We understand the tone and framing that regulatory content in iGaming requires. We do not make claims about product outcomes, we maintain appropriate language around responsible gambling standards, and we approach compliance topics with the care that both regulators and credible operators expect. We flag anything uncertain before it publishes." },
  { q: "We rely on ICE and SiGMA for our pipeline. Is online presence really necessary?", a: "Events build relationships but they do not generate first impressions anymore. Operators research suppliers before they walk onto the floor. If they have not seen your name in a publication, a podcast, or a search result before the event, you are starting from zero every time. Online authority is what makes your event conversations warmer and your follow-ups convert faster." },
  { q: "Which publications can you get us into?", a: "iGaming Business, Gambling Insider, CalvinAyre, and vertical newsletters that reach operators and compliance professionals in your specific market segments. We pitch based on the strength of your angle and your expertise, not on paid placement. The editorial credibility is the point." },
  { q: "We operate in multiple jurisdictions. Can you handle multi-market content?", a: "Yes. We can build jurisdiction-specific content clusters that speak to the regulatory environment in each market you operate in. This is particularly valuable for suppliers entering new markets, where online presence is one of the fastest ways to establish credibility before you invest in events or sales in that region." },
]

export default function IGamingPage() {
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
                iGaming and Online Gambling
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-5">
                Operators don&apos;t find<br />B2B suppliers on Google.<br /><em className="text-green-600 not-italic">Until they find yours.</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[540px]">
                The iGaming B2B market runs on relationships built at ICE and SiGMA. We make sure that when an operator searches for a platform, compliance tool, or payment solution, your name is already familiar before the meeting happens.
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
                { val: "5.8×", label: "Organic traffic growth for iGaming B2B clients in 6 months" },
                { val: "17", label: "First-page rankings on high-intent B2B search terms" },
                { val: "3", label: "Authority backlinks per month from iGaming trade publications" },
                { val: "100%", label: "Content reviewed for responsible gambling standards and regulatory tone" },
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
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">● The iGaming B2B Reality</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">This industry runs on trust<br />and most suppliers are invisible online.</h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">iGaming operators vet suppliers more carefully than almost any other buyer in B2B. Before they take a call, they already know who the credible players are. Most suppliers are not on that list.</p>
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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">We put you where operators<br />look before they call anyone.</h2>
          <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">We understand the iGaming industry well enough to write for it, get published in it, and distribute through the channels that operators actually use to stay informed.</p>
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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">What this looks like<br />for an iGaming B2B supplier.</h2>
          <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">A compliance platform serving iGaming operators in regulated markets. Strong product, zero online visibility, completely dependent on trade show pipeline.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {[
              { val: "5.8×", label: "Organic traffic increase in 6 months" },
              { val: "17", label: "First-page rankings on compliance and platform terms" },
              { val: "24", label: "Content assets produced per month" },
              { val: "3", label: "Authority backlinks per month from trade publications" },
            ].map(({ val, label }) => (
              <div key={val} className="bg-green-900 rounded-2xl p-7 text-center">
                <div className="text-4xl font-extrabold text-white leading-none mb-2">{val}</div>
                <div className="text-[11px] tracking-widest uppercase text-white/48 leading-snug">{label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-green-900/10 rounded-2xl p-9 mt-9">
            <span className="text-[10px] tracking-[.12em] uppercase text-green-500 font-semibold">iGaming B2B Case Study</span>
            <h3 className="text-xl font-bold text-green-900 mt-3 mb-4">A compliance platform that operators had never heard of becomes the reference voice in its category</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">The company had deep regulatory expertise but no presence outside of trade shows. Their sales cycle depended entirely on who they had met at ICE or SiGMA. We mapped every question their target operators were asking online around compliance requirements, jurisdiction guidance, and supplier evaluation, produced content that answered those questions with real depth, and distributed through the trade publications and LinkedIn channels those operators actually used. Within four months, inbound inquiries from operators who had discovered them through content exceeded their event-sourced pipeline for the first time.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-green-900/10" />

      {/* FAQ */}
      <section className="py-24 bg-[#ede8de]">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-11">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-4">● Common Questions</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight">iGaming-specific questions<br />we get asked often.</h2>
          </div>
          <IndustryFAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-green-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(82,183,136,0.14),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            The next event is months away.<br /><em className="text-green-400 not-italic">Your buyers are online now.</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[480px] mx-auto leading-relaxed mb-10">
            Build the presence that makes every trade show conversation start warmer.
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
