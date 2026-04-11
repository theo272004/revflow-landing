import Link from "next/link"

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-green-900/10 py-11 px-[60px] flex flex-wrap justify-between items-center gap-4 bg-[#f5f0e8]"
    >
      <div className="text-sm font-bold tracking-[.06em] text-green-800">
        REV<span className="text-green-600">FLOW</span>
      </div>
      <nav aria-label="Footer navigation" className="flex gap-7">
        <Link href="#system" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          What We Do
        </Link>
        <Link href="#industries" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          Industries
        </Link>
        <Link href="/industries/ourprocess" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          Our Process
        </Link>
        <Link href="#pricing" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          Pricing
        </Link>
        <Link href="#faq" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          FAQ
        </Link>
      </nav>
      <div className="text-xs text-muted-foreground opacity-42">
        &copy; {new Date().getFullYear()} Revflow. All rights reserved.
      </div>
    </footer>
  )
}
