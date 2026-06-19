'use client'

import React, { useRef, useState, ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: React.CSSProperties
  className?: string
  spotlightColor?: string
}

export function CardSpotlight({
  children,
  style,
  className,
  spotlightColor = 'var(--clr-spotlight)',
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setPosition({ x, y })
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Spotlight glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(600px circle at ${position.x}% ${position.y}%, ${spotlightColor}, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
