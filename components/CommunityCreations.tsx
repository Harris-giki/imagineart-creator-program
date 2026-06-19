'use client'

import { useEffect, useRef, useState } from 'react'
import RevealWrapper from './RevealWrapper'
import { tiles } from '@/lib/data'
import SectionSparkles from '@/components/SectionSparkles'

const SPEED = 0.7

interface CardDims { w: number; h: number; gap: number; sigma: number }

function getDims(vw: number): CardDims {
  if (vw < 480)  return { w: 160, h: 235, gap: 10, sigma: 0.40 }
  if (vw < 700)  return { w: 210, h: 305, gap: 12, sigma: 0.30 }
  return               { w: 260, h: 360, gap: 12, sigma: 0.24 }
}

export default function CommunityCreations() {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef   = useRef<number>()
  const hoveredRef = useRef<number>(-1)
  const hoverScalesRef = useRef<number[]>([])
  // dimsRef drives the RAF loop — updated on resize without re-mounting
  const dimsRef = useRef<CardDims>(getDims(typeof window !== 'undefined' ? window.innerWidth : 1200))

  const [dims, setDims] = useState<CardDims>(dimsRef.current)

  const tripled = [...tiles, ...tiles, ...tiles]

  // Sync responsive dims on resize
  useEffect(() => {
    const update = () => {
      const next = getDims(window.innerWidth)
      dimsRef.current = next
      setDims({ ...next })
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  // Animation loop — re-initialises whenever card size changes
  useEffect(() => {
    const wrap  = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    const cards = Array.from(track.children) as HTMLElement[]

    hoverScalesRef.current = new Array(cards.length).fill(1)

    const { w, gap, sigma: sigmaFactor } = dimsRef.current
    const stride   = w + gap
    const loopLen  = tiles.length * stride
    const wrapW    = wrap.offsetWidth
    const startI   = Math.max(0, Math.ceil((wrapW / 2 - w / 2) / stride))
    offsetRef.current = startI * stride + w / 2 - wrapW / 2

    const tick = () => {
      const { w: cw, gap: cg, sigma: csf } = dimsRef.current
      const cStride  = cw + cg
      const cLoopLen = tiles.length * cStride

      offsetRef.current += SPEED
      if (offsetRef.current >= cLoopLen) offsetRef.current -= cLoopLen

      const offset = offsetRef.current
      const ww     = wrap.offsetWidth
      const center = ww / 2
      const sigma  = ww * csf

      track.style.transform = `translateX(-${offset}px)`

      cards.forEach((card, i) => {
        const cx   = i * cStride + cw / 2 - offset
        const dist = Math.abs(cx - center)
        const t    = Math.exp(-(dist * dist) / (2 * sigma * sigma))

        const scale   = 0.78 + t * 0.5
        const ry      = (cx < center ? -1 : 1) * (1 - t) * 12
        const opacity = 0.18 + t * 0.82

        // Smooth hover lerp
        const targetHover = hoveredRef.current === i ? 1.13 : 1.0
        hoverScalesRef.current[i] += (targetHover - hoverScalesRef.current[i]) * 0.1
        const finalScale = scale * hoverScalesRef.current[i]

        card.style.transform  = `scale(${finalScale}) perspective(700px) rotateY(${ry}deg)`
        card.style.zIndex     = String(Math.round(t * 10))
        card.style.opacity    = opacity.toFixed(2)
        card.style.boxShadow  = t > 0.25
          ? `0 ${Math.round(t * 36)}px ${Math.round(t * 72)}px rgba(0,0,0,${(t * 0.28).toFixed(2)})`
          : ''
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [dims.w]) // re-mount animation when card width changes

  return (
    <section className="ia-sec-sm" style={{ background: 'var(--clr-bg)', overflowX: 'clip' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(26px,3.4vw,44px)',
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-.02em',
              margin: '0 0 0',
              color: 'var(--clr-fg)',
            }}
          >
            Community Creations
          </h2>
          <SectionSparkles width="min(420px, 95%)" style={{ margin: '0 auto -24px' }} />
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--clr-fg-2)',
              margin: '0 auto',
              maxWidth: '520px',
              fontWeight: 400,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Work made by our partners across the globe. Real creatives using ImagineArt to push what&apos;s possible.
          </p>
        </RevealWrapper>
      </div>

      <div style={{ position: 'relative' }}>
        <div ref={wrapRef} className="ia-marquee-wrap">
          <div ref={trackRef} className="ia-marquee-track">
            {tripled.map((tile, i) => (
              <div
                key={i}
                className="ia-mc"
                onClick={() => window.open(tile.url, '_blank', 'noopener,noreferrer')}
                onMouseEnter={() => { hoveredRef.current = i }}
                onMouseLeave={() => { hoveredRef.current = -1 }}
                style={{ width: `${dims.w}px`, height: `${dims.h}px`, background: '#0a0a0a' }}
              >
                {tile.img && (
                  <img
                    src={tile.img}
                    alt={tile.name}
                    loading="lazy"
                    decoding="async"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}
                {tile.video && (
                  <video
                    autoPlay muted loop playsInline preload="none"
                    src={tile.video}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}
                <div className="ia-mc-veil" />
                <div className="ia-mc-shine" />
                <div style={{ position: 'absolute', left: '14px', right: '14px', bottom: '14px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', letterSpacing: '.01em', marginBottom: '2px' }}>
                    {tile.name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.55)', letterSpacing: '.02em' }}>
                    {tile.handle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left edge fade */}
        <div className="ia-mc-fade-l" style={{ position: 'absolute', left: '-40px', top: 0, bottom: 0, background: 'linear-gradient(to right, var(--clr-bg) 48%, transparent)', pointerEvents: 'none', zIndex: 10 }} />
        {/* Right edge fade */}
        <div className="ia-mc-fade-r" style={{ position: 'absolute', right: '-40px', top: 0, bottom: 0, background: 'linear-gradient(to left, var(--clr-bg) 48%, transparent)', pointerEvents: 'none', zIndex: 10 }} />
      </div>
    </section>
  )
}
