import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://theo272004.github.io/revflow-landing'

const services = [
  'seo-strategy',
  'thought-leadership',
  'link-building',
  'pr-placement',
  'podcast-booking',
  'linkedin-content',
  'video-content',
  'eeat-optimization',
]

const industries = [
  'fintech',
  'igaming',
  'trading-brokers',
  'payment-gateways',
  'crypto-web3',
  'investment-wealth',
  'neobanks',
  'insurtech',
  'finance-consultants',
  'ourprocess',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industryPages = industries.map((i) => ({
    url: `${baseUrl}/industries/${i}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...industryPages,
    ...servicePages,
  ]
}
