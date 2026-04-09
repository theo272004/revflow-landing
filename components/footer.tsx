import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-green-900/10 py-11 px-[60px] flex flex-wrap justify-between items-center gap-4 bg-[#f5f0e8]">
      <div className="text-sm font-bold tracking-[.06em] text-green-800">
        REV<span className="text-green-600">FLOW</span>
      </div>
      <div className="flex gap-7">
        <Link href="#process" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          Process
        </Link>
        <Link href="#industries" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          Industries
        </Link>
        <Link href="#pricing" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          Pricing
        </Link>
        <Link href="#faq" className="text-xs text-muted-foreground no-underline hover:text-green-800 transition-colors">
          FAQ
        </Link>
      </div>
      <div className="text-xs text-muted-foreground opacity-42">
        &copy; {new Date().getFullYear()} Revflow. All rights reserved.
      </div>
    </footer>
  )
}
