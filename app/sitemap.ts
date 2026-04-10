import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://revflow.co'

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
]

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s}`,
    lastModified: new Date(),
    changePriority: 0.8 as const,
  }))

  const industryPages = industries.map((i) => ({
    url: `${baseUrl}/industries/${i}`,
    lastModified: new Date(),
    changePriority: 0.8 as const,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicePages,
    ...industryPages,
  ]
}
