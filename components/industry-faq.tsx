"use client"

import { Plus } from "lucide-react"
import { useState } from "react"

export function IndustryFAQ({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <div className="flex flex-col gap-1 mt-11">
      {faqs.map(({ q, a }, i) => (
        <div key={i} className={`border rounded-xl overflow-hidden transition-colors relative z-10 bg-white ${openIndex === i ? "border-green-900/18" : "border-green-900/10"}`}>
          <button onClick={() => toggle(i)} className="w-full flex justify-between items-center gap-4 text-left px-7 py-5 text-[15px] font-semibold text-green-900 hover:text-green-600 transition-colors bg-transparent border-none cursor-pointer">
            {q}
            <span className={`w-[22px] h-[22px] rounded-full border border-green-900/18 flex items-center justify-center flex-shrink-0 transition-all ${openIndex === i ? "rotate-45 bg-green-100 border-green-500" : ""}`}>
              <Plus className="w-3 h-3 text-green-600" />
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[400px] px-7 pb-5" : "max-h-0"}`}>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
