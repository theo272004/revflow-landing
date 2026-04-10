import Link from "next/link"
import { CreditCard, Dices, TrendingUp, Shield, Gem, DollarSign, Monitor, Home, Users } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: CreditCard,
      title: "Fintech",
      href: "/industries/fintech",
      image: "/revflow-landing/fintech.jpg",
      desc: "Payments, lending, neobanks, and financial infrastructure companies competing for the attention of enterprise buyers.",
    },
    {
      icon: Dices,
      title: "iGaming & Online Gambling",
      href: "/industries/igaming",
      image: "/revflow-landing/igaming.jpg",
      desc: "B2B operators, platforms, and suppliers in one of the most regulated and competitive digital verticals.",
    },
    {
      icon: TrendingUp,
      title: "Trading & Brokers",
      href: "/industries/trading-brokers",
      image: "/revflow-landing/trading-brokers.png",
      desc: "Forex, CFD, and multi-asset brokers trying to rank in a category dominated by Tier 1 incumbents.",
    },
    {
      icon: Shield,
      title: "Payment Gateways",
      href: "/industries/payment-gateways",
      image: "/revflow-landing/payment-gateway.png",
      desc: "Processors and acquirers building trust with merchants who need to know you're a credible partner before they integrate.",
    },
    {
      icon: Gem,
      title: "Crypto & Web3",
      href: "/industries/crypto-web3",
      image: "/revflow-landing/crypto-web3.png",
      desc: "Exchanges, protocols, and infrastructure companies navigating a fast-moving regulatory landscape while trying to build credibility.",
    },
    {
      icon: DollarSign,
      title: "Investment & Wealth",
      href: "/industries/investment-wealth",
      image: null,
      desc: "Asset managers, robo-advisors, and wealth platforms that need to earn trust before they earn clients.",
    },
    {
      icon: Monitor,
      title: "Neobanks & Digital Banking",
      href: "/industries/neobanks-digital-banking",
      image: null,
      desc: "Challenger banks building organic visibility against incumbents with decades of domain authority.",
    },
    {
      icon: Home,
      title: "InsurTech",
      href: "/industries/insurtech",
      image: null,
      desc: "Insurance technology companies competing in a category where legacy brands have owned the conversation for decades.",
    },
    {
      icon: Users,
      title: "Finance Consultants",
      href: "/industries/finance-consultants",
      image: null,
      desc: "Independent advisors and boutique firms competing for high-value clients who vet extensively before they engage.",
    },
  ]

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
          ● Industries We Serve
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
          We go deep into<br className="hidden sm:block" />the verticals we work with.
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[600px] leading-relaxed mb-14">
          Every financial vertical has a different compliance landscape, a different buyer, and a different set of publications that matter. We don&apos;t generalize.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, href, image, desc }) => (
            <Link
              key={title}
              href={href}
              className="bg-white relative z-10 border border-green-900/10 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-green-900/20 hover:-translate-y-1 no-underline"
            >
              {image && (
                <div className="relative w-full h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              )}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="w-9 h-9 rounded-xl bg-green-900/7 flex items-center justify-center">
                  <Icon className="w-[18px] h-[18px] text-green-800" />
                </div>
                <h4 className="text-sm font-bold text-green-900">{title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
                <span className="text-sm text-green-500 mt-auto pt-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
