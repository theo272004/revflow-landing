import { Search, Users, Tv } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Search,
      title: "Your competitors rank for every term your clients search",
      desc: "You know your product is better. Your clients tell you so after they sign. But before they sign, they find someone else first.",
    },
    {
      icon: Users,
      title: "You've hired agencies that didn't understand your space",
      desc: "They wrote generic content, got you irrelevant traffic, and had no idea what compliance meant. You ended up fixing their work or starting over.",
    },
    {
      icon: Tv,
      title: "You're paying for ads that stop working the moment you stop paying",
      desc: "Paid traffic is rented. The day you pause the campaign, the pipeline dries up. You need something that builds, not something that disappears.",
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Sound familiar?
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
            You have a great product.<br className="hidden sm:block" />Nobody can find it.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            You&apos;re not losing because your product is worse. You&apos;re losing because the established players in your space have spent years building the kind of online authority you haven&apos;t had time to build yet. That&apos;s fixable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#f5f0e8] relative z-10 border border-green-900/10 rounded-2xl p-7 flex flex-col gap-4 transition-colors hover:border-red-900/20"
            >
              <div className="w-10 h-10 rounded-xl bg-red-900/7 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-red-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-green-900 mb-1">{title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
