'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import {
  useScroll, useTransform, motion, AnimatePresence, useMotionValueEvent,
} from 'framer-motion'
import { tiles } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading'

export default function CommunityCreations() {
  const outerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // outerH  = xRange + 100vh  (the total height of the scroll space)
  // xRange  = trackScrollWidth - viewportWidth  (how far we translate)
  const [outerH,    setOuterH]    = useState<number | null>(null)
  const [xRange,    setXRange]    = useState(0)
  const [lbIdx,     setLbIdx]     = useState<number | null>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  // SSR-safe default: passive until we detect fine pointer + no reduced-motion
  const [passive,   setPassive]   = useState(true)

  useEffect(() => {
    const noMotion  = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePtr = window.matchMedia('(pointer: coarse)').matches
    setPassive(noMotion || coarsePtr)
  }, [])

  // Measure the track's real scrollWidth so the outer height is exact
  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const trackW = track.scrollWidth
    const vw     = window.innerWidth
    const vh     = window.innerHeight
    const range  = Math.max(0, trackW - vw)
    setXRange(range)
    setOuterH(range + vh)
  }, [])

  useEffect(() => {
    if (passive) return
    // Wait one frame for CSS layout + image placeholders to settle
    const raf = requestAnimationFrame(() => {
      const t = setTimeout(measure, 40)
      return () => clearTimeout(t)
    })
    const ro = new ResizeObserver(measure)
    ro.observe(document.documentElement)
    window.addEventListener('resize', measure, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [passive, measure])

  // Scroll progress across the tall outer section (0 when top hits viewport top,
  // 1 when bottom hits viewport bottom — exactly xRange px of scrolling)
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  // Map progress 0→1 to translateX 0→−xRange
  // xRange is React state so useTransform picks up the latest value on re-render
  const x = useTransform(scrollYProgress, [0, 1], [0, -xRange])

  // Drive the progress indicator without a separate scroll listener
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActiveIdx(Math.min(tiles.length - 1, Math.floor(p * tiles.length)))
  })

  // Lightbox: Escape to close, scroll-lock while open
  useEffect(() => {
    if (lbIdx === null) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLbIdx(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lbIdx])
  useEffect(() => {
    document.body.style.overflow = lbIdx !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lbIdx])

  const activeTile = lbIdx !== null ? tiles[lbIdx] : null

  return (
    <>
      {/*
       * OUTER — tall scroll space.
       * height = xRange + 100vh so there is ZERO dead/blank scroll after the
       * last image clears the viewport.  Unset (auto) while passive so mobile
       * gets natural flow.
       */}
      <div
        ref={outerRef}
        className="ia-cc-outer"
        style={!passive && outerH !== null ? { height: `${outerH}px` } : undefined}
      >
        {/*
         * STICKY CONTAINER — 100vh, sticks at top:0 for exactly xRange px of
         * scroll, then releases to the next section.
         */}
        <div className={`ia-cc-sticky${passive ? ' ia-cc-passive' : ''}`}>

          {/* Heading — left-aligned, two-tone, matches WhatYoullGet style */}
          <header className="ia-cc-head">
            <SectionHeading
              headline="Community"
              accent="Creations"
              lineBreakBeforeAccent
              accentColor="gray"
              align="left"
              size="lg"
              eyebrow="SHOWCASE"
              subline="Work made by our partners across the globe. Real creatives using ImagineArt to push what's possible."
            />
          </header>

          {/* Gallery strip */}
          <div className="ia-cc-track-wrap">

            {/* Floating click hint — pointer-events:none so it doesn't block shots */}
            <div className="ia-cc-hint" aria-hidden="true">
              <span className="ia-cc-hint-plus">+</span>
              <span className="ia-cc-hint-label">Click any shot to expand</span>
            </div>

            {/*
             * Moving track — width:max-content so scrollWidth reflects true
             * content width.  x motion value drives horizontal translation.
             */}
            <motion.div
              ref={trackRef}
              className="ia-cc-track"
              style={passive ? undefined : { x }}
            >
              {tiles.map((tile, i) => (
                <button
                  key={i}
                  className="ia-cc-shot"
                  onClick={() => setLbIdx(i)}
                  aria-label={`Expand ${tile.name}`}
                >
                  {tile.img && (
                    <img
                      src={tile.img}
                      alt={tile.name}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {tile.video && (
                    <video
                      src={tile.video}
                      autoPlay muted loop playsInline preload="none"
                    />
                  )}
                  <div className="ia-cc-credit">
                    <span className="ia-cc-credit-name">{tile.name}</span>
                    <span className="ia-cc-credit-handle">{tile.handle}</span>
                  </div>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Progress — counter + segmented bar; hidden in passive layout */}
          {!passive && (
            <div
              className="ia-cc-progress"
              role="progressbar"
              aria-valuenow={activeIdx + 1}
              aria-valuemax={tiles.length}
              aria-label="Gallery progress"
            >
              <span className="ia-cc-counter">{activeIdx + 1} / {tiles.length}</span>
              <div className="ia-cc-segs">
                {tiles.map((_, i) => (
                  <span
                    key={i}
                    className={`ia-cc-seg${i === activeIdx ? ' on' : i < activeIdx ? ' done' : ''}`}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lbIdx !== null && activeTile && (
          <motion.div
            className="ia-cc-lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLbIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded view: ${activeTile.name}`}
          >
            <motion.div
              className="ia-cc-lb-media"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeTile.img && (
                <img src={activeTile.img} alt={activeTile.name} />
              )}
              {activeTile.video && (
                <video src={activeTile.video} autoPlay muted loop playsInline />
              )}
              <div className="ia-cc-lb-cred">
                <div>
                  <span className="ia-cc-credit-name">{activeTile.name}</span>
                  <span className="ia-cc-credit-handle">{activeTile.handle}</span>
                </div>
                <a
                  href={activeTile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ia-cc-lb-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on ImagineArt →
                </a>
              </div>
            </motion.div>
            <button
              className="ia-cc-lb-close"
              onClick={() => setLbIdx(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
