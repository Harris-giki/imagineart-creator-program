'use client'

import { ReactNode } from 'react'

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E"

interface Props {
  children: ReactNode
  gradientColors?: string[]
  style?: React.CSSProperties
  borderWidth?: number
}

export function NoiseBackground({
  children,
  gradientColors = ['#8A3FFC', '#F9B8D4', '#FFD4A8', '#C8AAFF'],
  style,
  borderWidth = 2,
}: Props) {
  const gradient = `conic-gradient(${gradientColors.join(', ')}, ${gradientColors[0]})`

  return (
    <div
      style={{
        position: 'relative',
        padding: `${borderWidth}px`,
        borderRadius: '999px',
        overflow: 'hidden',
        display: 'inline-flex',
        ...style,
      }}
    >
      {/* Rotating gradient border */}
      <div
        style={{
          position: 'absolute',
          inset: '-100%',
          background: gradient,
          animation: 'ia-spin 4s linear infinite',
        }}
      />
      {/* Noise texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundSize: '150px 150px',
          mixBlendMode: 'overlay',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, borderRadius: '999px', width: '100%' }}>
        {children}
      </div>
    </div>
  )
}
