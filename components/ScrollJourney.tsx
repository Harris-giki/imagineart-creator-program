'use client'

import { useRef, useEffect } from 'react'

const slides = [
  {
    num: '01',
    label: 'Creator Fuel',
    title: 'Fuel that grows\nwith you.',
    body: 'Start with 20K credits and unlock up to 200K every month as you create. Premium access from day one — no waiting, no limits on your ambition.',
    accent: '#8A3FFC',
    glow: 'rgba(138, 63, 252, 0.22)',
    bg: '#07040F',
  },
  {
    num: '02',
    label: 'Amplification',
    title: 'Your work,\nin the spotlight.',
    body: 'Case studies, social features, and co-marketing campaigns — your best work amplified across every ImagineArt channel to the world.',
    accent: '#C8AAFF',
    glow: 'rgba(200, 170, 255, 0.18)',
    bg: '#060410',
  },
  {
    num: '03',
    label: 'Community',
    title: 'Lead in\nyour city.',
    body: "Pitch a workshop or meetup and we'll back it — platform credits, speakers, and full ImagineArt promotion to bring your community together.",
    accent: '#F9B8D4',
    glow: 'rgba(249, 184, 212, 0.18)',
    bg: '#08040C',
  },
  {
    num: '04',
    label: 'Revenue',
    title: 'Get paid\nas you rise.',
    body: 'Earn up to 25% revenue share as a Creative Partner, plus affiliate access and enterprise bonuses when you bring studios and agencies on board.',
    accent: '#FFD4A8',
    glow: 'rgba(255, 212, 168, 0.16)',
    bg: '#090608',
  },
]

export default function ScrollJourney() {
  // containerRef is both the GSAP trigger AND the pinned element (canonical pattern)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      await new Promise((r) => setTimeout(r, 300))

      const container = containerRef.current
      const track = trackRef.current
      const bg = bgRef.current
      if (!container || !track) return

      const totalX = track.scrollWidth - window.innerWidth
      let lastSlideIdx = 0

      // ── Main horizontal translation ────────────────────────────────
      // container is both trigger + pin — GSAP creates spacer automatically
      gsap.to(track, {
        x: -totalX,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          anticipatePin: 1,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${totalX}`,
          invalidateOnRefresh: true,
          onUpdate(self) {
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${self.progress})`
            }

            const activeIdx = Math.min(slides.length - 1, Math.floor(self.progress * slides.length))
            dotRefs.current.forEach((dot, i) => {
              if (!dot) return
              dot.style.background = i === activeIdx ? '#fff' : 'rgba(255,255,255,0.25)'
              dot.style.transform = i === activeIdx ? 'scale(1.4)' : 'scale(1)'
            })

            // Crossfade bg colour only on slide boundary (CSS transition handles smoothing)
            if (bg && activeIdx !== lastSlideIdx) {
              lastSlideIdx = activeIdx
              bg.style.background = slides[activeIdx].bg
            }
          },
        },
      })

      // ── Per-slide content reveals ─────────────────────────────────
      Array.from(track.children).forEach((slideEl, i) => {
        if (i === 0) return
        const content = slideEl.querySelector('[data-slide-content]') as HTMLElement | null
        if (!content) return

        gsap.fromTo(
          content,
          { opacity: 0, y: 60, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: `top+=${(totalX * i) / slides.length * 0.72} top`,
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }

    init()
  }, [])

  return (
    <div
      ref={containerRef}
      id="rewards"
      style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}
    >
      {/* Animated background — bg colour changes per slide */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: slides[0].bg,
          transition: 'background 0.7s ease',
          zIndex: 0,
        }}
      />

      {/* Horizontal track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          height: '100%',
          width: `${slides.length * 100}vw`,
          position: 'relative',
          zIndex: 1,
          willChange: 'transform',
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            style={{
              width: '100vw',
              height: '100%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow orb */}
            <div
              style={{
                position: 'absolute',
                width: '60vw',
                height: '60vw',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${s.glow} 0%, transparent 68%)`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                filter: 'blur(40px)',
              }}
            />

            {/* Giant ghost number */}
            <div
              style={{
                position: 'absolute',
                right: '-2%',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(200px, 28vw, 380px)',
                fontWeight: 400,
                color: 'transparent',
                WebkitTextStroke: `1px ${s.accent}28`,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {s.num}
            </div>

            {/* Content — slides 2-4 start hidden, GSAP reveals them */}
            <div
              data-slide-content
              style={{
                position: 'relative',
                maxWidth: '680px',
                padding: '0 clamp(32px, 6vw, 80px)',
                zIndex: 2,
                opacity: i === 0 ? 1 : 0,
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.accent, flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', color: s.accent, textTransform: 'uppercase' }}>
                  {s.label}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 'clamp(44px, 6.5vw, 82px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.06,
                  color: '#fff',
                  margin: '0 0 28px',
                  whiteSpace: 'pre-line',
                  letterSpacing: '-0.01em',
                }}
              >
                {s.title}
              </h2>

              <p
                style={{
                  fontSize: 'clamp(15px, 1.5vw, 18px)',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.55)',
                  margin: 0,
                  maxWidth: '460px',
                }}
              >
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {slides.map((_, i) => (
            <div
              key={i}
              ref={(el) => { dotRefs.current[i] = el }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: i === 0 ? '#fff' : 'rgba(255,255,255,0.25)',
                transition: 'background 0.3s ease, transform 0.3s ease',
                transform: i === 0 ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Scroll to explore
        </div>
      </div>

      {/* Progress line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.07)', zIndex: 11 }}>
        <div
          ref={progressBarRef}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #8A3FFC, #F9B8D4, #FFD4A8)',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
          }}
        />
      </div>
    </div>
  )
}
