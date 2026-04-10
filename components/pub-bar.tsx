import Image from "next/image"

export function PubBar() {
  const publications = [
    { name: "Finextra", src: "/revflow-landing/finextra-logo.png", w: 110, h: 28 },
    { name: "The Block", src: "/revflow-landing/theblock_icon.png", w: 100, h: 28 },
    { name: "Forbes Finance", src: "/revflow-landing/Forbes-Logo.png", w: 100, h: 28 },
    { name: "Crowdfund Insider", src: "/revflow-landing/growdfundinsider_logo.png", w: 140, h: 28 },
    { name: "Payments Source", src: "/revflow-landing/paymentsourcelogo.png", w: 120, h: 28 },
    { name: "Coindesk", src: "/revflow-landing/CoinDesk_logo.svg.png", w: 100, h: 28 },
  ]

  return (
    <section className="py-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] tracking-[.14em] uppercase text-muted-foreground text-center mb-7 opacity-60">
          We&apos;ve placed our clients in
        </p>
        <div className="flex items-center justify-center gap-11 flex-wrap">
          {publications.map((pub) => (
            <div
              key={pub.name}
              className="hover:opacity-80 transition-opacity cursor-default grayscale opacity-35"
            >
              <Image
                src={pub.src}
                alt={pub.name}
                width={pub.w}
                height={pub.h}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
