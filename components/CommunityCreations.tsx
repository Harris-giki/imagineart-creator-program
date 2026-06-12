'use client'

import { useEffect, useRef } from 'react'
import RevealWrapper from './RevealWrapper'
import { tiles } from '@/lib/data'

const CARD_W = 260
const CARD_H = 360
const GAP = 12
const STRIDE = CARD_W + GAP
const SPEED = 0.7
// stride × count = exact offset where copy 2 aligns with copy 1 at offset 0
const LOOP_LEN = tiles.length * STRIDE

export default function CommunityCreations() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number>()

  const tripled = [...tiles, ...tiles, ...tiles]

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    const cards = Array.from(track.children) as HTMLElement[]

    // Start with a card perfectly centered
    const wrapW = wrap.offsetWidth
    const startI = Math.max(0, Math.ceil((wrapW / 2 - CARD_W / 2) / STRIDE))
    offsetRef.current = startI * STRIDE + CARD_W / 2 - wrapW / 2

    const tick = () => {
      offsetRef.current += SPEED
      if (offsetRef.current >= LOOP_LEN) offsetRef.current -= LOOP_LEN

      const offset = offsetRef.current
      const w = wrap.offsetWidth
      const center = w / 2
      const sigma = w * 0.24 // gaussian spread — tighter = sharper center peak

      track.style.transform = `translateX(-${offset}px)`

      cards.forEach((card, i) => {
        const cx = i * STRIDE + CARD_W / 2 - offset
        const dist = Math.abs(cx - center)
        const t = Math.exp(-(dist * dist) / (2 * sigma * sigma))
        const scale = 0.78 + t * 0.5           // 0.78 → 1.28
        const ry = (cx < center ? -1 : 1) * (1 - t) * 12   // subtle tilt, no wide gaps
        const opacity = 0.18 + t * 0.82        // fade to near-invisible at edges
        card.style.transform = `scale(${scale}) perspective(700px) rotateY(${ry}deg)`
        card.style.zIndex = String(Math.round(t * 10))
        card.style.opacity = opacity.toFixed(2)
        card.style.boxShadow = t > 0.25
          ? `0 ${Math.round(t * 36)}px ${Math.round(t * 72)}px rgba(0,0,0,${(t * 0.28).toFixed(2)})`
          : ''
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <section className="ia-sec-sm" style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(26px,3.4vw,44px)',
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-.02em',
              margin: '0 0 14px',
              color: '#161616',
            }}
          >
            Community Creations
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#7A7A7A',
              margin: '0 auto',
              maxWidth: '520px',
              fontWeight: 400,
            }}
          >
            Work made by our partners across the globe. Real creatives using ImagineArt to push what&apos;s possible.
          </p>
        </RevealWrapper>
      </div>

      {/* Relative wrapper so edge fades can be positioned correctly */}
      <div style={{ position: 'relative' }}>
        <div
          ref={wrapRef}
          className="ia-marquee-wrap"
        >
          <div ref={trackRef} className="ia-marquee-track">
            {tripled.map((t, i) => (
              <div
                key={i}
                className="ia-mc"
                style={{ width: `${CARD_W}px`, height: `${CARD_H}px`, background: t.bg }}
              >
                <div className="ia-mc-veil" />
                <div className="ia-mc-shine" />
                <div
                  style={{
                    position: 'absolute',
                    left: '14px',
                    right: '14px',
                    bottom: '12px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#fff',
                    letterSpacing: '.02em',
                  }}
                >
                  {t.handle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left edge fade */}
        <div
          style={{
            position: 'absolute',
            left: '-40px',
            top: 0,
            bottom: 0,
            width: '300px',
            background: 'linear-gradient(to right, #fff 48%, transparent)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
        {/* Right edge fade */}
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: 0,
            bottom: 0,
            width: '300px',
            background: 'linear-gradient(to left, #fff 48%, transparent)',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      </div>
    </section>
  )
}
