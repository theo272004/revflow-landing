"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Plus, Search, Shield, Users, Monitor, Megaphone, Mic, Link2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iGaming SEO Agency for Online Gambling B2B | SEO4Finance",
  description: "We help iGaming B2B suppliers, platform providers, and compliance companies get found by casino operators. Publication placements in iGaming Business, Gambling Insider, CalvinAyre. Podcast bookings on industry shows.",
}

const painPoints = [
  { icon: Search, title: "You are only known by people who have already met you", desc: "Your pipeline depends on who attended the last trade show. When someone searches for your product category online, the established platforms appear and you do not. That is a deal you are losing before it starts." },
  { icon: Shield, title: "Google restricts paid gambling advertising in most markets", desc: "You can not simply buy visibility in this industry the way other B2B sectors can. Organic authority and editorial presence are not optional extras. They are your primary viable channel for online discovery." },
  { icon: Monitor, title: "Regulatory tone in content is a minefield most agencies walk into blindly", desc: "Content that misrepresents responsible gambling obligations, overstates game mechanics, or ignores MGA and UKGC language requirements can create real problems with regulators and with operators evaluating your credibility." },
  { icon: Megaphone, title: "Your buyers read iGaming Business, not Forbes", desc: "Generic agencies pitch content to publications that your buyers have never opened. The operators and procurement teams you are trying to reach live in iGaming Business, Gambling Insider, and CalvinAyre. Getting there requires relationships those agencies do not have." },
  { icon: Search, title: "New market entries require credibility you have not had time to build", desc: "Expanding into a new jurisdiction means you are unknown to the operators and regulators there. Online presence is how you establish credibility before you spend budget on sales or events in that market." },
  { icon: Users, title: "Your product solves a real problem but nobody explains it clearly online", desc: "Complex compliance tools, platform features, and integration capabilities require content that communicates value to a technically sophisticated buyer. Generic writers produce surface-level content that does not earn the attention of operators who know their industry deeply." },
]

const solutions = [
  { icon: Megaphone, title: "Trade publication placements operators actually read", desc: "We get your content published in iGaming Business, Gambling Insider, CalvinAyre, and vertical newsletters that reach operators, compliance teams, and procurement decision-makers. Not press releases. Actual editorial content with your name on it.", pills: ["iGaming Business", "Gambling Insider", "CalvinAyre"] },
  { icon: Search, title: "Search visibility for the terms operators search during vendor evaluation", desc: "We map the exact searches operators make when evaluating a platform, compliance tool, or payment solution and build content that answers those questions with enough depth to rank and enough authority to convert.", pills: ["Compliance content", "Platform comparisons", "Jurisdiction guides"] },
  { icon: Mic, title: "Podcast appearances on shows operators and suppliers follow", desc: "We book your founders and executives on iGaming B2B podcasts and industry shows. This is the medium where the people who make supplier decisions spend their professional learning time between events.", pills: ["iGaming podcast circuit", "Regulatory shows", "Supplier spotlights"] },
  { icon: Users, title: "LinkedIn authority in front of the right operator audience", desc: "Operators and procurement teams are on LinkedIn. We build your founders and executives into recognizable voices in the iGaming B2B space so that your trade show conversations convert faster because people already know who you are.", pills: ["Founder positioning", "Regulatory commentary", "Market analysis"] },
]

const faqs = [
  { q: "Do you understand the difference between B2B and B2C iGaming?", a: "Yes. We work exclusively with B2B suppliers in iGaming, not with operators running consumer-facing gambling products. Our content targets the procurement and technical decision-makers at operators, not players. That distinction completely changes the content strategy, the publications we target, and the language we use." },
  { q: "Can you write about responsible gambling and regulatory topics without creating risk?", a: "Yes. We understand the tone and framing that regulatory content in iGaming requires. We do not make claims about product outcomes, we maintain appropriate language around responsible gambling standards, and we approach compliance topics with the care that both regulators and credible operators expect. We flag anything uncertain before it publishes." },
  { q: "We rely on ICE and SiGMA for our pipeline. Is online presence really necessary?", a: "Events build relationships but they do not generate first impressions anymore. Operators research suppliers before they walk onto the floor. If they have not seen your name in a publication, a podcast, or a search result before the event, you are starting from zero every time. Online authority is what makes your event conversations warmer and your follow-ups convert faster." },
  { q: "Which publications can you get us into?", a: "iGaming Business, Gambling Insider, CalvinAyre, and vertical newsletters that reach operators and compliance professionals. We do not pay for placements. Everything is earned editorial, which means it carries more weight with readers and with Google. The specific outlet depends on your vertical and the strength of your angle." },
  { q: "How quickly can we start seeing results?", a: "Publication placements typically happen within four to eight weeks. Search rankings move in months two to four. The compounding effect, where each piece of authority reinforces the others, kicks in around month five. We also build LinkedIn presence and podcast appearances that start conversations much earlier than organic rankings." },
]

export default function IGamingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
                iGaming and Online Gambling
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-5">
                Operators don&apos;t find<br />B2B suppliers on Google.<br /><em className="text-green-600 not-italic">Until they find yours.</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[580px]">
                The iGaming B2B market runs on relationships built at ICE and SiGMA. We make sure that when an operator searches for a platform, compliance tool, or payment solution, your name is already familiar before the meeting happens.
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

      {/* PAIN SECTION */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[680px] mb-14">
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
              ● The iGaming B2B Reality
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">
              This industry runs on trust<br />and most suppliers are invisible online.
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              iGaming operators vet suppliers more carefully than almost any other buyer in B2B. Before they take a call, they already know who the credible players are. Most suppliers are not on that list.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
            {painPoints.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#f5f0e8] border border-green-900/10 rounded-2xl p-7 transition-colors hover:border-red-900/20"
              >
                <div className="w-10 h-10 rounded-xl bg-red-900/7 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-800" />
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
            We put you where operators<br className="hidden sm:block" />look before they call anyone.
          </h2>
          <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">
            We understand the iGaming industry well enough to write for it, get published in it, and distribute through the channels that operators actually use to stay informed.
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
            What this looks like<br className="hidden sm:block" />for an iGaming B2B supplier.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
            A compliance platform serving iGaming operators in regulated markets. Strong product, zero online visibility, completely dependent on trade show pipeline.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {[
              { val: "5.8×", label: "Organic traffic increase in 6 months" },
              { val: "17", label: "First-page rankings on compliance and platform terms" },
              { val: "24", label: "Content assets produced per month" },
              { val: "3", label: "Authority backlinks per month from trade publications" },
            ].map(({ val, label }) => (
              <div key={val} className="bg-green-900 rounded-2xl p-7 text-center">
                <div className="text-4xl font-extrabold text-white leading-none mb-2">{val}</div>
                <div className="text-[11px] tracking-widest uppercase text-white/48">{label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-green-900/10 rounded-2xl p-9 mt-9">
            <span className="text-[10px] tracking-[.12em] uppercase text-green-500 font-semibold">iGaming B2B Case Study</span>
            <h3 className="text-xl font-bold text-green-900 mt-3 mb-4">A compliance platform that operators had never heard of becomes the reference voice in its category</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              The company had deep regulatory expertise but no presence outside of trade shows. Their sales cycle depended entirely on who they had met at ICE or SiGMA. We mapped every question their target operators were asking online around compliance requirements, jurisdiction guidance, and supplier evaluation, produced content that answered those questions with real depth, and distributed through the trade publications and LinkedIn channels those operators actually used. Within four months, inbound inquiries from operators who had discovered them through content exceeded their event-sourced pipeline for the first time.
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
              iGaming-specific questions<br className="hidden sm:block" />we get asked often.
            </h2>
          </div>
          <div className="flex flex-col gap-1 mt-11">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors relative z-10 bg-white ${
                  openIndex === i ? "border-green-900/18" : "border-green-900/10"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center gap-4 text-left px-7 py-5 text-[15px] font-semibold text-green-900 hover:text-green-600 transition-colors bg-transparent border-none cursor-pointer"
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
                    openIndex === i ? "max-h-[400px] px-7 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
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
            Operators are researching<br /><em className="text-green-400 not-italic">right now.</em>
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
