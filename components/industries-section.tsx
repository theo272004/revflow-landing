import Link from "next/link"
import { CreditCard, Dices, TrendingUp, Shield, Gem, DollarSign, Monitor, Home, Users } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: CreditCard,
      title: "Fintech",
      href: "/industries/fintech",
      desc: "From payments to lending, we help fintech companies build the authority Google requires in this space.",
    },
    {
      icon: Dices,
      title: "iGaming & Online Gambling",
      href: "/industries/igaming",
      desc: "High-regulation, high-competition. Content strategy for operators, platforms, and B2B suppliers.",
    },
    {
      icon: TrendingUp,
      title: "Trading & Brokers",
      href: "/industries/trading-brokers",
      desc: "SEO for forex, CFD, and multi-asset brokers operating in regulated environments.",
    },
    {
      icon: Shield,
      title: "Payment Gateways",
      href: "/industries/payment-gateways",
      desc: "Content that builds trust for processors and acquirers selling into regulated merchant markets.",
    },
    {
      icon: Gem,
      title: "Crypto & Web3",
      href: "/industries/crypto-web3",
      desc: "Authority content for exchanges, protocols, and Web3 infrastructure navigating a fast-moving regulatory landscape.",
    },
    {
      icon: DollarSign,
      title: "Investment & Wealth",
      href: "/industries/investment-wealth",
      desc: "Editorial content for asset managers, robo-advisors, and wealth platforms that need to earn trust before they earn clients.",
    },
    {
      icon: Monitor,
      title: "Neobanks & Digital Banking",
      href: "/industries/neobanks-digital-banking",
      desc: "Content strategy for challenger banks competing against incumbents with decades of domain authority.",
    },
    {
      icon: Home,
      title: "InsurTech",
      href: "/industries/insurtech",
      desc: "SEO and thought leadership for insurance technology companies in a category dominated by legacy brands.",
    },
    {
      icon: Users,
      title: "Finance Consultants",
      href: "/industries/finance-consultants",
      desc: "Content and authority-building for independent advisors and boutique consultancies competing for high-value clients.",
    },
  ]

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
          ● Industries We Serve
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
          Built for every corner<br className="hidden sm:block" /> of financial services.
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
          Each vertical has its own compliance landscapes, buyer psychology, and distribution channels. We go deep into the ones we work with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, href, desc }) => (
            <Link
              key={title}
              href={href}
              className="bg-white relative z-10 border border-green-900/10 rounded-2xl p-7 flex flex-col gap-3 transition-all hover:border-green-900/20 hover:-translate-y-1 no-underline"
            >
              <div className="w-9 h-9 rounded-xl bg-green-900/7 flex items-center justify-center">
                <Icon className="w-[18px] h-[18px] text-green-800" />
              </div>
              <h4 className="text-sm font-bold text-green-900">{title}</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              <span className="text-sm text-green-500 mt-auto pt-2">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
