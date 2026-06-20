'use client'

import { useEffect, useState } from 'react'

const HERO_SRC = 'https://cdn.web.imagine.art/imagine-one/test/assets/hero-banner.png'
const MIN_MS   = 1800 // minimum display time

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState<'loading' | 'fading' | 'done'>('loading')

  useEffect(() => {
    const t0 = performance.now()

    // Preload hero image
    const imgReady = new Promise<void>(res => {
      const img = new Image()
      img.onload = img.onerror = () => res()
      img.src = HERO_SRC
    })

    // Animate progress to ~85% over MIN_MS * 0.85 (ease-out quad)
    const FILL = MIN_MS * 0.82
    let raf: number
    const tick = (now: number) => {
      const t = Math.min((now - t0) / FILL, 1)
      const eased = 1 - (1 - t) * (1 - t)
      setProgress(Math.round(eased * 85))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Once image + fonts loaded AND min time elapsed → finish
    Promise.all([imgReady, document.fonts.ready]).then(() => {
      cancelAnimationFrame(raf)
      const delay = Math.max(0, MIN_MS - (performance.now() - t0))
      setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setPhase('fading')
          setTimeout(() => setPhase('done'), 640)
        }, 280)
      }, delay)
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  if (phase === 'done') return null

  const RADIUS = 50
  const CIRC   = 2 * Math.PI * RADIUS
  const offset = CIRC * (1 - progress / 100)

  return (
    <div
      aria-label="Loading"
      aria-live="polite"
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9999,
        background:      'rgba(8,7,11,0.93)',
        backdropFilter:  'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        justifyContent:  'center',
        opacity:         phase === 'fading' ? 0 : 1,
        transition:      'opacity 0.64s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents:   phase === 'fading' ? 'none' : 'all',
      }}
    >
      {/* Circular progress ring */}
      <svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx="65" cy="65" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Progress arc */}
        <circle
          cx="65" cy="65" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          transform="rotate(-90 65 65)"
          style={{ transition: 'stroke-dashoffset 80ms linear' }}
        />
        {/* Percentage label */}
        <text
          x="65" y="65"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.88)"
          style={{
            fontFamily:    "'Google Sans Flex', 'Inter', system-ui, sans-serif",
            fontSize:      '17px',
            fontWeight:    500,
            letterSpacing: '-0.4px',
          }}
        >
          {progress}%
        </text>
      </svg>

      {/* LOADING label */}
      <p
        style={{
          margin:        '22px 0 0',
          fontSize:      '10.5px',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color:         'rgba(255,255,255,0.38)',
          fontFamily:    'ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace',
          fontWeight:    400,
          userSelect:    'none',
        }}
      >
        Loading
      </p>
    </div>
  )
}
