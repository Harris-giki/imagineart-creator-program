'use client'

import React, { createContext, useState, useContext, useRef, useEffect } from 'react'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

function useMouseEnter() {
  const context = useContext(MouseEnterContext)
  if (context === undefined) throw new Error('useMouseEnter must be used within a CardContainer')
  return context
}

export function CardContainer({
  children,
  style,
  className,
}: {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}) {
  const containerRef  = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)
  // Checked once on mount — avoids per-pointermove media query calls
  const fineRef   = useRef(false)
  const reduceRef = useRef(false)

  useEffect(() => {
    fineRef.current   = window.matchMedia('(pointer:fine)').matches
    reduceRef.current = window.matchMedia('(prefers-reduced-motion:reduce)').matches
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!fineRef.current || reduceRef.current || !containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    // Divide by 40 → ~7.5 deg max on a 600 px card — subtle enough that
    // the visual overhang doesn't clash with neighbouring full-bleed tiles
    const x = (e.clientX - left - width  / 2) / 40
    const y = (e.clientY - top  - height / 2) / 40
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseEnter = () => {
    if (!fineRef.current || reduceRef.current) return
    setIsMouseEntered(true)
  }

  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    if (!containerRef.current) return
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      {/* perspective wrapper — caller controls size/overflow via style prop */}
      <div style={{ perspective: '1200px', ...style }} className={className}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.18s ease-out',
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export function CardBody({
  children,
  style,
  className,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <div className={className} style={{ transformStyle: 'preserve-3d', ...style }}>
      {children}
    </div>
  )
}

export function CardItem({
  as: Tag = 'div',
  children,
  style,
  className,
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  translateZ?: number
  translateX?: number
  translateY?: number
  [key: string]: unknown
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.transform = isMouseEntered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)`
      : 'translateX(0px) translateY(0px) translateZ(0px)'
  }, [isMouseEntered, translateX, translateY, translateZ])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ transition: 'transform 0.28s ease-out', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
