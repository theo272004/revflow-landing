export function PubBar() {
  const publications = [
    "Finextra",
    "The Block",
    "Forbes Finance",
    "Crowdfund Insider",
    "Payments Source",
    "Coindesk",
  ]

  return (
    <section className="py-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] tracking-[.14em] uppercase text-muted-foreground text-center mb-7 opacity-60">
          We&apos;ve placed our clients in
        </p>
        <div className="flex items-center justify-center gap-11 flex-wrap">
          {publications.map((pub) => (
            <span
              key={pub}
              className="text-base font-bold text-green-900/70 tracking-wide hover:text-green-900 transition-colors cursor-default"
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
