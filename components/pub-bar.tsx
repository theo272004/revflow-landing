const publications = [
  { name: "Finextra",          src: "/revflow-landing/finextra-logo.png",         w: 110 },
  { name: "The Block",         src: "/revflow-landing/theblock_icon.png",          w: 100 },
  { name: "Forbes",            src: "/revflow-landing/Forbes-Logo.png",            w: 100 },
  { name: "Crowdfund Insider", src: "/revflow-landing/growdfundinsider_logo.png",  w: 140 },
  { name: "Payments Source",   src: "/revflow-landing/paymentsourcelogo.png",      w: 120 },
  { name: "CoinDesk",          src: "/revflow-landing/CoinDesk_logo.svg.png",      w: 110 },
]

export function PubBar() {
  return (
    <section className="py-8 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] tracking-[.14em] uppercase text-muted-foreground text-center mb-7 opacity-60">
          We&apos;ve placed our clients in
        </p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {publications.map((pub) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={pub.name}
              src={pub.src}
              alt=""
              width={pub.w}
              className="h-7 w-auto object-contain grayscale opacity-40 hover:opacity-70 transition-opacity cursor-default"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
