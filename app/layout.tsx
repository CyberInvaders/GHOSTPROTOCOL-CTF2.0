import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { GlobalBackground } from '@/components/global-background'
import { JsonLd } from '@/components/json-ld'
import { siteConfig, seoCopy } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoCopy.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: seoCopy.defaultDescription,
  applicationName: siteConfig.name,
  keywords: [
    'CTF',
    'Ghost Protocol CTF 2.0',
    'capture the flag competition',
    'cyber security competition India',
    'student CTF',
    'ethical hacking competition',
    'Jeopardy CTF',
    'online CTF India',
    'Cyber Invaders',
    'NIET Greater Noida',
    'cybersecurity club',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  // Set these in the Vercel project environment once the tokens exist.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  openGraph: {
    title: seoCopy.defaultTitle,
    description: seoCopy.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoCopy.defaultTitle,
    description: seoCopy.ogDescription,
    images: ['/opengraph-image'],
  },
  // Icons are served by Next's app/ file convention (app/icon.png, app/apple-icon.png,
  // app/favicon.ico) — declaring them here too would emit the tags twice.
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050816',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background antialiased">
        <JsonLd />
        <GlobalBackground />
        {children}
        <SpeedInsights />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
