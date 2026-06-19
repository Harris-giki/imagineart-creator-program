import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import LenisProvider from '@/components/LenisProvider'
import ScrollAnimations from '@/components/ScrollAnimations'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'ImagineArt Creative Partner Program',
  description: 'Join the partners defining the next era of creativity, powered by ImagineArt.',
  icons: {
    icon: '/Group.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.web.imagine.art" />
        <link rel="dns-prefetch" href="https://cdn.web.imagine.art" />
        <link
          rel="preload"
          href="https://cdn.web.imagine.art/imagine-one/test/assets/hero-banner.png"
          as="image"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LenisProvider>
          {children}
          <ScrollAnimations />
        </LenisProvider>
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
