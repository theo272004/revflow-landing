import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://theo272004.github.io/revflow-landing'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
