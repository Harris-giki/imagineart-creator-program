'use client'

import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles'

export default function SectionSparkles({
  width = '360px',
  style,
}: {
  width?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        maxWidth: '100%',
        height: '56px',
        position: 'relative',
        margin: '0 auto 8px',
        pointerEvents: 'none',
        ...style,
      }}
    >
      {/* Wide blurred indigo line */}
      <div style={{
        position: 'absolute',
        left: '10%', right: '10%',
        top: 0, height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(120,70,240,0.75), transparent)',
        filter: 'blur(1.5px)',
      }} />
      {/* Wide sharp indigo line */}
      <div style={{
        position: 'absolute',
        left: '10%', right: '10%',
        top: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(138,63,252,0.9), transparent)',
      }} />
      {/* Narrow blurred sky-purple line */}
      <div style={{
        position: 'absolute',
        left: '28%', right: '28%',
        top: 0, height: '5px',
        background: 'linear-gradient(to right, transparent, rgba(200,170,255,0.8), transparent)',
        filter: 'blur(2.5px)',
      }} />
      {/* Narrow sharp sky-purple line */}
      <div style={{
        position: 'absolute',
        left: '28%', right: '28%',
        top: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(200,170,255,1), transparent)',
      }} />

      {/* Particles */}
      <SparklesCore
        background="transparent"
        minSize={0.3}
        maxSize={0.85}
        particleDensity={900}
        particleColor="#C8AAFF"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      {/* Radial mask — hides edges, reveals center */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--clr-bg)',
        WebkitMaskImage: 'radial-gradient(ellipse 55% 100% at 50% 0%, transparent 25%, black 85%)',
        maskImage: 'radial-gradient(ellipse 55% 100% at 50% 0%, transparent 25%, black 85%)',
      }} />
    </div>
  )
}
