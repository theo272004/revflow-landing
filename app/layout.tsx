import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})

const siteUrl = 'https://theo272004.github.io/revflow-landing'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Revflow · SEO & Content Marketing for Financial Services',
    template: '%s | Revflow',
  },
  description: 'Revflow helps fintech, iGaming, trading, crypto, and payments companies build authority through SEO, thought leadership, PR placements, and backlinks — in regulated markets where trust is everything.',
  keywords: [
    'fintech SEO agency',
    'financial services content marketing',
    'iGaming SEO',
    'trading broker SEO',
    'crypto content marketing',
    'payment gateway SEO',
    'E-E-A-T financial content',
    'YMYL SEO',
    'fintech thought leadership',
    'financial PR placement',
  ],
  authors: [{ name: 'Revflow' }],
  creator: 'Revflow',
  publisher: 'Revflow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Revflow',
    title: 'Revflow · SEO & Content Marketing for Financial Services',
    description: 'We help fintech, iGaming, trading, and payments companies get found by the right people, earn the trust that converts them, and build authority that compounds.',
    images: [
      {
        url: `${siteUrl}/hero-image.png`,
        width: 1200,
        height: 630,
        alt: 'Revflow — SEO & Content Marketing for Financial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revflow · SEO & Content Marketing for Financial Services',
    description: 'We help fintech, iGaming, trading, and payments companies build the authority that turns searches into clients.',
    images: [`${siteUrl}/hero-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/revflow-landing/favicon.png',
    apple: '/revflow-landing/favicon.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Revflow',
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  description: 'SEO and content marketing agency specialising in fintech, iGaming, trading, crypto, and regulated financial services.',
  areaServed: 'Worldwide',
  knowsAbout: [
    'Fintech SEO',
    'iGaming SEO',
    'Financial content marketing',
    'E-E-A-T optimization',
    'YMYL content',
    'Thought leadership',
    'Authority link building',
  ],
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Revflow',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
