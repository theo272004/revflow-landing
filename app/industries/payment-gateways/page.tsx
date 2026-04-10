import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Shield, Users, CreditCard, Link2, Mic, Megaphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { IndustryFAQ } from "@/components/industry-faq"

export const metadata: Metadata = {
  title: "SEO for Payment Gateways and Payment Processors | SEO4Finance",
  description: "We help payment gateways and processors build the online authority that gets them into the consideration set before sales reaches out. Compliance-aware content, editorial backlinks, and presence that earns merchant trust.",
}

const painPoints = [
  { icon: CreditCard, title: "Stripe and Adyen own the category in every merchant's mind", desc: "Before your sales team reaches out to a merchant, they have already heard of Stripe and probably used it. You are not just selling a product. You are overcoming a default assumption. That requires presence, not just a pitch deck." },
  { icon: Search, title: "Your buyers research extensively before they respond to anyone", desc: "CTOs and CFOs evaluating payment infrastructure spend weeks researching before they take a demo call. If you are not showing up in their searches for payment gateway reviews, comparison guides, or integration documentation, you are not in the running." },
  { icon: Shield, title: "PCI DSS and compliance language is a minefield for generalist agencies", desc: "Content about payment security, data handling, and regulatory compliance requires precise language. Mistakes in how you describe your security posture or compliance certifications can create real problems with merchant trust and legal exposure." },
  { icon: Users, title: "Your differentiators require explanation that generic content never provides", desc: "The reasons a merchant should choose you over Stripe are specific: your pricing model for high-volume transactions, your support for specific payment methods in specific markets, your acquiring relationships in regions they want to expand into. Generic agencies can not communicate those differences with the precision that technical buyers require." },
  { icon: CreditCard, title: "Long sales cycles mean trust needs to be built long before first contact", desc: "Payment infrastructure decisions take months. By the time a procurement team shortlists providers, the window for building familiarity has already closed. You need to be known before the formal evaluation begins, not during it." },
  { icon: Search, title: "Regional and vertical market strengths are invisible online", desc: "If you are the best payment gateway for Latin American cross-border transactions or for high-risk merchants in specific categories, the merchants who need exactly that are searching for it. They just can not find you because that story has not been told in the right places." },
]

const solutions = [
  { icon: Search, title: "Search visibility built around merchant evaluation intent", desc: "We build content clusters around the specific searches CTOs and CFOs make when evaluating payment infrastructure: comparison guides, compliance documentation, market-specific coverage, and integration depth content that reaches buyers during the research phase, not after.", pills: ["Comparison content", "Market-specific guides", "Integration depth"] },
  { icon: Megaphone, title: "Editorial placements in payments and fintech publications", desc: "We place your content in Payments Source, Finextra, The Paypers, and vertical trade outlets that payments procurement teams and industry analysts actually read. These placements build the kind of third-party credibility that no owned channel can replicate.", pills: ["Payments Source", "The Paypers", "Finextra"] },
  { icon: Link2, title: "Authority backlinks from credible payments sources", desc: "Links from payments industry publications, fintech media, and compliance-focused outlets that signal to Google and to your prospects that you are a recognized player in the payments ecosystem, not an unknown entering the space.", pills: ["Industry editorial", "Compliance media", "Finance publications"] },
  { icon: Mic, title: "Podcast appearances on fintech and payments shows", desc: "Payments industry decision-makers listen to fintech podcasts. Your CEO or head of product appearing on the right shows builds familiarity with the exact people you are trying to reach before a sales motion even begins.", pills: ["Payments podcasts", "Fintech shows", "B2B finance media"] },
]

const faqs = [
  { q: "Can you write about PCI DSS and payment security without creating compliance risk?", a: "Yes. We understand the precision required when describing security certifications, compliance standards, and data handling practices. We do not make claims that overstate certifications, and we flag anything that touches your legal or compliance posture for your team to review before publication. You get content that informs and builds trust without creating exposure." },
  { q: "How do you help us compete against Stripe and Adyen for organic visibility?", a: "Not by targeting the same keywords they dominate. We identify the specific merchant searches around your actual differentiators: your pricing model, your supported payment methods, your regional strength, your vertical expertise. You own those discussions because you have the real depth to answer them and they have not bothered to go there." },
  { q: "We are entering a new market. How does content help us establish credibility there?", a: "We build market-specific content that addresses the regulatory environment, local payment methods, and merchant concerns specific to that region. This positions you as a provider that understands the local market before you have a local track record. It also generates the search visibility and publication placements that makes your sales conversations warmer from the first contact." },
  { q: "Our buyers are CTOs and CFOs. Does this approach reach them?", a: "Yes. These are the people doing the deepest research before they take a call. They are searching for integration documentation, compliance standards, market-specific guidance, and comparison content. We build the content that reaches them during that research phase, not after. And they are on LinkedIn reading commentary from people who understand the space." },
  { q: "What kind of timeline should we expect for results?", a: "Publication placements typically happen within four to eight weeks. Search rankings move in months two to four. The compounding effect kicks in around month five. We also build LinkedIn presence and podcast appearances that start conversations much earlier than organic rankings." },
]

export default function PaymentGatewaysPage() {
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
                Payment Gateways and Processors
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-5">
                Merchants evaluate five<br />payment providers before<br /><em className="text-green-600 not-italic">they contact any of them.</em>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[580px]">
                Stripe and Adyen own the category in most merchants&apos; minds before they do any research. We help payment processors and gateways build the kind of online presence that gets them into that evaluation set and into the shortlist that reaches procurement.
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
                { val: "4.8×", label: "Average organic traffic growth for payments clients in 6 months" },
                { val: "14", label: "First-page rankings on high-intent merchant evaluation terms" },
                { val: "3", label: "Authority backlinks per month from payments industry publications" },
                { val: "6wks", label: "Average time to first placement in a payments or fintech publication" },
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
              ● The Payments Reality
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-green-900 leading-tight mb-4">
              Payments is a trust-first category.<br />Most processors are invisible before the first call.
            </h2>
            <p className="text-[17px] text-muted-foreground leading-relaxed">
              A merchant integrating a payment gateway is making a decision that affects every transaction their business processes. They are not going to trust a name they have never seen mentioned anywhere credible.
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
            We build the presence that gets you<br className="hidden sm:block" />into every shortlist that matters.
          </h2>
          <p className="text-[17px] text-white/55 max-w-[600px] leading-relaxed mb-14">
            We translate your real technical and commercial advantages into content that reaches the decision-makers who need to know about them, in the publications and search results they actually use.
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
            What this looks like<br className="hidden sm:block" />for a payment processor.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
            A B2B payment gateway entering a new regional market with no existing brand recognition and strong local competition.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {[
              { val: "4.8×", label: "Organic traffic growth in 6 months" },
              { val: "14", label: "First-page rankings on high-intent evaluation terms" },
              { val: "24", label: "Content assets produced per month" },
              { val: "3", label: "Authority backlinks per month" },
            ].map(({ val, label }) => (
              <div key={val} className="bg-green-900 rounded-2xl p-7 text-center">
                <div className="text-4xl font-extrabold text-white leading-none mb-2">{val}</div>
                <div className="text-[11px] tracking-widest uppercase text-white/48">{label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-green-900/10 rounded-2xl p-9 mt-9">
            <span className="text-[10px] tracking-[.12em] uppercase text-green-500 font-semibold">Payment Gateways Case Study</span>
            <h3 className="text-xl font-bold text-green-900 mt-3 mb-4">A B2B payments processor enters Latin America and earns merchant credibility before the sales team makes a single call</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              The company had a technically strong product and genuine advantages in cross-border transaction processing but no recognition in the markets they were entering. Local payment processors had been in those markets for years. We built a content cluster entirely around the payment compliance, cross-border settlement, and merchant acquisition questions that their target buyers were actively researching. Within six weeks they had their first feature placement in a regional payments publication. Within four months, inbound from organic was converting at a significantly higher rate than outbound because the merchants who arrived had already read enough about them to trust the conversation.
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
              Payments-specific questions<br className="hidden sm:block" />we get asked often.
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
            Merchants are evaluating<br /><em className="text-green-400 not-italic">right now.</em>
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
