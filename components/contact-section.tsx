"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, company: formData.company, industry: formData.industry, message: formData.message }),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", industry: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-28 bg-[#f5f0e8] relative z-10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,139,104,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text */}
          <div>
            <span className="inline-block text-[11px] tracking-[.14em] uppercase text-green-600 font-semibold mb-5">
              ● Ready to Scale?
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-green-900 leading-tight mb-6">
              Book your<br /><em className="not-italic text-green-600">authority audit.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Tell us about your company and your goals. We will review your current authority signals across search, publications, and AI platforms and come back within 12 hours with a specific strategy outline for your vertical.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-900/5 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Direct response within 12 hours</h4>
                  <p className="text-sm text-muted-foreground">We review your company before we reply. You get a bespoke strategy outline, not a sales pitch.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-900/5 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Zero pressure</h4>
                  <p className="text-sm text-muted-foreground">No high-pressure sales calls. Just engineering and data-driven insights about where your gaps are.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-900/5 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Finance-specific analysis</h4>
                  <p className="text-sm text-muted-foreground">We assess your YMYL gaps, your publication footprint, your AI citation presence, and your backlink profile in one review.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white border border-green-900/10 rounded-[32px] p-8 md:p-10 shadow-xl shadow-green-900/5 transition-all">
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">We've received your request and we'll be in touch very soon.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-green-700 font-bold uppercase tracking-widest text-[11px] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-green-900 ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#f5f0e8]/50 border border-green-900/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:bg-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-green-900 ml-1">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#f5f0e8]/50 border border-green-900/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:bg-white transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-green-900 ml-1">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Fintech Co."
                    className="w-full bg-[#f5f0e8]/50 border border-green-900/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:bg-white transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-green-900 ml-1">Industry</label>
                  <select
                    id="industry"
                    className="w-full bg-[#f5f0e8]/50 border border-green-900/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:bg-white transition-all appearance-none"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="" disabled>Select your vertical</option>
                    <option>Fintech</option>
                    <option>iGaming / Online Gambling</option>
                    <option>Trading / Forex Brokers</option>
                    <option>Payment Gateways</option>
                    <option>Crypto &amp; Web3</option>
                    <option>Investment &amp; Wealth</option>
                    <option>Neobanks / Digital Banking</option>
                    <option>InsurTech</option>
                    <option>Finance Consultants</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-green-900 ml-1">How can we help?</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your authority goals and where you feel most invisible right now."
                    className="w-full bg-[#f5f0e8]/50 border border-green-900/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:bg-white transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-green-800 text-sm font-medium bg-green-50 p-4 rounded-xl border border-green-200">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-green-800 text-white font-bold uppercase tracking-widest py-5 rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-800/20 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get Your Audit
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
