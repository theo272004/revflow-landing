import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PubBar } from "@/components/pub-bar"
import { ProblemSection } from "@/components/problem-section"
import { SystemSection } from "@/components/system-section"
import { IndustriesSection } from "@/components/industries-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Revflow — SEO & Content Marketing for Financial Services',
  description: 'SEO and content marketing agency specialising in fintech, iGaming, trading, crypto, and regulated financial services.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Andrés M.' },
      reviewBody: "We'd tried two other agencies before. Neither understood the compliance angle. The content reads like it was written by someone who works in financial services.",
      name: '9 high-intent rankings in 4 months',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Laura K.' },
      reviewBody: 'Getting placed in Finextra was something we had tried on our own for over a year. They got it done in six weeks.',
      name: 'Finextra placement in 6 weeks',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Ricardo C.' },
      reviewBody: 'Two appearances in well-known fintech shows generated more qualified conversations than anything we had done in the previous six months.',
      name: '2 podcast appearances, 6 qualified conversations',
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SEO and Content Marketing',
  provider: {
    '@type': 'Organization',
    name: 'Revflow',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Authority Building Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Authority Blueprint',
          description: 'E-E-A-T and YMYL gap audit, full topic cluster architecture, 6-month content and PR roadmap, first 5 briefs with publication targets.',
        },
        price: '950',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'one-off' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Authority Partner',
          description: 'Full-service authority operation: content, backlinks, publications, podcasts, LinkedIn — end to end.',
        },
        price: '1500',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'month' },
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <Hero />
      <PubBar />
      <ProblemSection />
      <div className="border-t border-green-900/10" />
      <SystemSection />
      <div className="border-t border-green-900/10" />
      <IndustriesSection />
      <div className="border-t border-green-900/10" />
      <TestimonialsSection />
      <div className="border-t border-green-900/10" />
      <PricingSection />
      <div className="border-t border-green-900/10" />
      <CTASection />
      <div className="border-t border-green-900/10" />
      <ContactSection />
      <div className="border-t border-green-900/10" />
      <FAQSection />
      <Footer />
    </main>
  )
}
