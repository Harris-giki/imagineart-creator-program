'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import {
  useScroll, useTransform, motion, useMotionValueEvent,
  type MotionValue,
} from 'framer-motion'
import BorderMagicBtn from '@/components/ui/border-magic-btn'

const creators = [
  { name: 'Iconic_Mind 👑',       handle: '@otamereoyen',       img: '/tc-iconic-mind.png',        url: 'https://www.imagine.art/c/otamereoyen' },
  { name: 'Aipromptsmith',        handle: '@aipromptsmith',     img: '/tc-aipromptsmith.png',      url: 'https://www.imagine.art/c/aipromptsmith' },
  { name: '_ai.Creativecraft',    handle: '@promptcraft',       img: '/tc-ai-creativecraft.png',   url: 'https://www.imagine.art/c/promptcraft' },
  { name: 'Chillvibesart',        handle: '@chillvibesart',     img: '/tc-chillvibesart.png',      url: 'https://www.imagine.art/c/chillvibesart' },
  { name: 'visual_saga_studios',  handle: '@visualsagastudios', img: '/tc-visual-saga.png',        url: 'https://www.imagine.art/c/visualsagastudios(sairammadaram)' },
  { name: 'Soumya🍃',             handle: '@soumya🍃',           img: '/tc-soumya.png',             url: 'https://www.imagine.art/c/soumya%F0%9F%8D%83' },
  { name: 'Warmcorner.ai',        handle: '@warmcorner',        img: '/tc-warmcorner.png',         url: 'https://www.imagine.art/c/warmcorner' },
  { name: 'Digital Art Sensei',   handle: '@abinkurian',        img: '/tc-digital-art-sensei.png', url: 'https://www.imagine.art/c/abinkurian' },
  { name: 'Nebelschaf_art',       handle: '@nebelschaf_art',    img: '/tc-nebelschaf.png',         url: 'https://www.imagine.art/c/nebelschaf_art' },
  { name: 'Aura HARVI',           handle: '@auraharvi',         img: '/tc-aura-harvi.png',         url: 'https://www.imagine.art/c/auraharvi' },
]

// dx: fraction of vw from center, dy: fraction of vh from center
// start/end: scrollYProgress range when this avatar animates toward center
const SCATTER = [
  { dx:  0.37, dy: -0.24, size: 96,  rotate: -6,  start: 0.00, end: 0.40 },
  { dx: -0.34, dy: -0.26, size: 82,  rotate:  5,  start: 0.05, end: 0.45 },
  { dx: -0.42, dy:  0.12, size: 72,  rotate: -4,  start: 0.10, end: 0.50 },
  { dx:  0.36, dy:  0.17, size: 90,  rotate:  8,  start: 0.15, end: 0.55 },
  { dx: -0.18, dy: -0.35, size: 66,  rotate: -7,  start: 0.20, end: 0.60 },
  { dx:  0.22, dy:  0.33, size: 78,  rotate:  3,  start: 0.25, end: 0.65 },
  { dx:  0.44, dy: -0.09, size: 64,  rotate: -5,  start: 0.30, end: 0.70 },
  { dx: -0.29, dy:  0.30, size: 74,  rotate:  6,  start: 0.35, end: 0.75 },
  { dx:  0.13, dy: -0.40, size: 58,  rotate: -3,  start: 0.40, end: 0.82 },
  { dx: -0.10, dy:  0.40, size: 86,  rotate:  4,  start: 0.45, end: 0.88 },
]

function AvatarBubble({
  creator, s, idx, scrollYProgress, vw, vh,
}: {
  creator: typeof creators[0]
  s: typeof SCATTER[0]
  idx: number
  scrollYProgress: MotionValue<number>
  vw: number
  vh: number
}) {
  const O = { clamp: true } as const
  // Avatar placed at scatter via CSS left/top. FM x/y pulls FROM 0 TO –scatter (toward center).
  const x       = useTransform(scrollYProgress, [s.start, s.end], [0, -(s.dx * vw)], O)
  const y       = useTransform(scrollYProgress, [s.start, s.end], [0, -(s.dy * vh)], O)
  const scale   = useTransform(scrollYProgress, [s.start, s.end], [1, 0], O)
  const opacity = useTransform(scrollYProgress, [s.start, s.end], [1, 0], O)

  // Plain div with CSS float — NOT a motion element. This prevents FM parent-child
  // context from interfering with the scroll-driven transforms on the inner motion.a.
  return (
    <div
      className="ia-tc-avatar-wrap"
      style={{
        position: 'absolute',
        left: `calc(50% + ${Math.round(s.dx * vw)}px - ${Math.round(s.size / 2)}px)`,
        top:  `calc(50% + ${Math.round(s.dy * vh)}px - ${Math.round(s.size / 2)}px)`,
        zIndex: 2,
        pointerEvents: 'none',
        animationDuration: `${3.0 + (idx % 5) * 0.6}s`,
        animationDelay: `${idx * 0.18}s`,
      }}
    >
      <motion.a
        href={creator.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          rotate: s.rotate,
          x, y, scale, opacity,
          willChange: 'transform, opacity',
          textDecoration: 'none',
          pointerEvents: 'auto',
          width: s.size,
        }}
      >
        <div style={{
          width: s.size,
          height: s.size,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '1.5px solid rgba(138,63,252,0.25)',
          flexShrink: 0,
        }}>
          <img
            src={creator.img}
            alt={creator.name}
            loading="eager"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <span style={{
          fontSize: '11.5px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.72)',
          whiteSpace: 'nowrap',
          letterSpacing: '0.01em',
          textAlign: 'center',
        }}>
          {creator.name}
        </span>
      </motion.a>
    </div>
  )
}

export default function TopCreators() {
  const outerRef = useRef<HTMLDivElement>(null)
  const [ready,   setReady]   = useState(false)
  const [passive, setPassive] = useState(false)
  const [outerH,  setOuterH]  = useState(0)
  const [dims,    setDims]    = useState({ vw: 0, vh: 0 })
  const [showCta, setShowCta] = useState(false)

  const measure = useCallback(() => {
    setDims({ vw: window.innerWidth, vh: window.innerHeight })
    setOuterH(window.innerHeight + 1400)
  }, [])

  useEffect(() => {
    const noMotion  = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePtr = window.matchMedia('(pointer: coarse)').matches
    const isPassive = noMotion || coarsePtr
    setPassive(isPassive)
    if (!isPassive) {
      setDims({ vw: window.innerWidth, vh: window.innerHeight })
      setOuterH(window.innerHeight + 1400)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready || passive) return
    window.addEventListener('resize', measure, { passive: true })
    return () => window.removeEventListener('resize', measure)
  }, [ready, passive, measure])

  // useScroll target is outerRef — ALWAYS rendered below so the ref is always attached.
  // If we ever returned null or a different element, Framer Motion would track the wrong
  // container and scrollYProgress would never update correctly.
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  const logoScale = useTransform(scrollYProgress, [0, 0.88], [1, 1.06])

  useMotionValueEvent(scrollYProgress, 'change', p => setShowCta(p >= 0.87))

  const isAnimated = ready && !passive && outerH > 0

  return (
    // outerRef is ALWAYS on this div — never conditionally detached.
    // Static content → auto height. Animated → outerH for the sticky scroll track.
    <div
      ref={outerRef}
      id="creators"
      style={{
        background: '#000',
        height: isAnimated ? `${outerH}px` : undefined,
      }}
    >
      {!isAnimated ? (
        /* ── Static / mobile fallback: grid of all 10 creators ── */
        <section className="ia-sec" style={{ background: '#000' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '48px' }}>
              <img src="/main_logo.png" alt="ImagineArt" style={{ height: '72px', width: 'auto', display: 'block', margin: '0 auto 20px', opacity: 0.85 }} />
              <p style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 400, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                Meet Our Top Creators
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.65 }}>
                Independent artists to agency teams. From every timezone, every discipline.
              </p>
            </div>
            <div className="ia-creators-grid ia-sec-head">
              {creators.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                  <div style={{ width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(138,63,252,0.25)' }}>
                    <img src={c.img} alt={c.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '-.01em', marginBottom: '5px', color: '#fff' }}>{c.name}</div>
                    <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.36)' }}>{c.handle}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="ia-bm-wrap">
              <BorderMagicBtn href="https://www.imagine.art/community" target="_blank" rel="noopener noreferrer">Get Featured</BorderMagicBtn>
            </div>
          </div>
        </section>
      ) : (
        /* ── Animated black-hole: sticky pin + scroll-driven pull ── */
        <div style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          background: '#000',
        }}>
          {creators.map((creator, i) => (
            <AvatarBubble
              key={i}
              idx={i}
              creator={creator}
              s={SCATTER[i]}
              scrollYProgress={scrollYProgress}
              vw={dims.vw}
              vh={dims.vh}
            />
          ))}

          {/* Center: logo → heading → subline → CTA */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none',
            width: 'max-content',
            maxWidth: '90vw',
          }}>
            <motion.img
              src="/main_logo.png"
              alt="ImagineArt"
              style={{ height: '80px', width: 'auto', display: 'block', marginBottom: '22px', opacity: 0.9, scale: logoScale }}
            />
            <p style={{ fontSize: 'clamp(28px, 3.8vw, 48px)', fontWeight: 400, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.025em', lineHeight: 1.08, whiteSpace: 'nowrap' }}>
              Meet Our Top Creators
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: '0 0 36px', lineHeight: 1.65 }}>
              Independent artists to agency teams. From every timezone.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={showCta ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ pointerEvents: showCta ? 'auto' : 'none' }}
            >
              <BorderMagicBtn href="https://www.imagine.art/community" target="_blank" rel="noopener noreferrer">
                Get Featured
              </BorderMagicBtn>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}
