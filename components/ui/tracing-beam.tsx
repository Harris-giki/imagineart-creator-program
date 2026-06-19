'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

export const TracingBeam = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
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
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  )
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ position: 'relative', width: '100%', maxWidth: '56rem', margin: '0 auto', height: '100%', ...style }}
    >
      {/* Left beam track */}
      <div style={{ position: 'absolute', left: '-16px', top: '12px' }}>
        {/* Dot */}
        <div
          style={{
            marginLeft: '27px',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            border: '1px solid rgba(138,63,252,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C8AAFF', border: '1px solid #8A3FFC' }} />
        </div>

        {/* SVG beam */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          style={{ marginLeft: '16px', display: 'block' }}
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="rgba(138,63,252,0.12)"
            strokeWidth="1.5"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#ia-beam-gradient)"
            strokeWidth="1.5"
          />
          <defs>
            <motion.linearGradient
              id="ia-beam-gradient"
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
