import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'SEO4Finance · Get Found. Get Trusted. Get Clients.',
  description: 'We help fintech, iGaming, trading, and payments companies build the kind of online authority that turns searches into clients. Backlinks, publications, podcasts, and content that actually works in regulated markets.',
  icons: {
    icon: '/revflow-landing/favicon.png',
    apple: '/revflow-landing/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
