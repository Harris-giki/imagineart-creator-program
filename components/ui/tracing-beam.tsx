'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

export const TracingBeam = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    const update = () => {
      if (contentRef.current) setSvgHeight(contentRef.current.offsetHeight)
    }
    update()
    const ro = new ResizeObserver(update)
    if (contentRef.current) ro.observe(contentRef.current)
    return () => ro.disconnect()
  }, [])

  const beamH = Math.max(0, svgHeight - 48)

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, beamH]),
    { stiffness: 500, damping: 90 }
  )
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, beamH - 200]),
    { stiffness: 500, damping: 90 }
  )

  return (
    <motion.div
      ref={ref}
      style={{ position: 'relative', width: '100%', ...style }}
    >
      {/* Left-side beam — sits at the page edge */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '24px', top: '12px', pointerEvents: 'none', zIndex: 2 }}
      >
        {/* Dot */}
        <div
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            border: '1px solid rgba(138,63,252,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '3px',
          }}
        >
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8AAFF', border: '1px solid #8A3FFC' }} />
        </div>

        {/* SVG beam */}
        <svg
          viewBox={`0 0 20 ${beamH}`}
          width="20"
          height={beamH}
          style={{ display: 'block' }}
        >
          {/* Ghost track */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${beamH * 0.8} l -18 24V ${beamH}`}
            fill="none"
            stroke="rgba(138,63,252,0.10)"
            strokeWidth="1.5"
          />
          {/* Animated gradient beam */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${beamH * 0.8} l -18 24V ${beamH}`}
            fill="none"
            stroke="url(#ia-beam-g)"
            strokeWidth="1.5"
          />
          <defs>
            <motion.linearGradient
              id="ia-beam-g"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#8A3FFC" stopOpacity="0" />
              <stop stopColor="#8A3FFC" />
              <stop offset="0.4" stopColor="#C8AAFF" />
              <stop offset="1" stopColor="#C8AAFF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}
