import { Search, Users, Tv } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Search,
      title: "Your competitors rank for every term your buyers search",
      desc: "You know your product is better. Your clients tell you so after they sign. But before they sign, they find someone else first. The deal is being lost before your sales team enters the conversation.",
    },
    {
      icon: Tv,
      title: "Paid traffic stops the moment your budget pauses",
      desc: "Ad spend in fintech and financial services carries some of the highest CPCs in B2B. And when you pause, the pipeline disappears entirely. You need a channel that builds value over time, not one that resets to zero every month.",
    },
    {
      icon: Users,
      title: "You are invisible where the decision actually happens",
      desc: "Before a prospect responds to your outreach, they have already Googled you, checked if you have been cited anywhere credible, and decided whether you belong in the conversation. Most financial companies lose the deal there.",
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
            You have a great product,<br className="hidden sm:block" />but nobody can find it.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            Established players in your space have spent years building the kind of online authority you have not had time to build yet. We fix that.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#f5f0e8] relative z-10 border border-green-900/10 rounded-2xl p-7 flex flex-col gap-4 transition-colors hover:border-green-900/20"
            >
              <div className="w-10 h-10 rounded-xl bg-green-900/7 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-green-800" />
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
