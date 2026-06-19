'use client'

import { useEffect, ReactNode } from 'react'

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: any
    let tickerFn: ((time: number) => void) | null = null
    let gsapRef: any = null

    async function init() {
      const { default: Lenis } = await import('lenis')
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')

      gsap.registerPlugin(ScrollTrigger)
      gsapRef = gsap

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      })

      lenis.on('scroll', () => ScrollTrigger.update())

      tickerFn = (time: number) => { lenis.raf(time * 1000) }
      gsap.ticker.add(tickerFn)
      gsap.ticker.lagSmoothing(0)
    }

    init()

    return () => {
      lenis?.destroy()
      if (gsapRef && tickerFn) gsapRef.ticker.remove(tickerFn)
    }
  }, [])

  return <>{children}</>
}
