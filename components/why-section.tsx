export function WhySection() {
  const points = [
    {
      num: "01",
      title: "YMYL means Google holds you to a higher standard",
      desc: "Your Money Your Life content is assessed differently. Every page, every claim, every author attribution is scrutinised in ways that simply do not apply to other industries.",
    },
    {
      num: "02",
      title: "Compliance is not optional",
      desc: "Financial content that implies returns, misrepresents products, or skips regulatory language creates legal exposure. The agency you work with needs to know where the lines are before they write a word.",
    },
    {
      num: "03",
      title: "Your buyers research before they respond to anyone",
      desc: "CFOs, CTOs, and procurement teams evaluate vendors before making first contact. By the time your sales team reaches out, the shortlist has already been formed. You need to be on it.",
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
            ● Why This Space Is Different
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-5">
            Financial services is one of the hardest verticals to rank in,
          </h2>
          <p className="text-[16px] text-muted-foreground leading-relaxed mb-10">
            Google applies its most stringent editorial standards to financial content. A generic SEO agency cannot navigate this space. Neither can one that has never read an FCA content rule, briefed a compliance team, or pitched Finextra.
          </p>

          <div className="flex flex-col gap-6">
            {points.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 items-start">
                <div className="w-9 h-9 rounded-full bg-green-900 text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0 mt-1">
                  {num}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-green-900 mb-2">{title}</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

