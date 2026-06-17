import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'ImagineArt Creative Partner Program',
  description: 'Join the partners defining the next era of creativity, powered by ImagineArt.',
  icons: {
    icon: '/Group.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Establish CDN connection as early as possible — eliminates TCP+TLS latency for all CDN assets */}
        <link rel="preconnect" href="https://cdn.web.imagine.art" />
        <link rel="dns-prefetch" href="https://cdn.web.imagine.art" />
        {/* Preload hero banner — LCP element, must arrive before first paint */}
        <link
          rel="preload"
          href="https://cdn.web.imagine.art/imagine-one/test/assets/hero-banner.png"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})()` }} />
        <ThemeProvider>{children}</ThemeProvider>
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
