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
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 20
    const y = (e.clientY - top - height / 2) / 20
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    if (!containerRef.current) return
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div style={{ perspective: '1000px', ...style }} className={className}>
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: 'preserve-3d', transition: 'transform 0.12s ease-out', width: '100%', height: '100%' }}
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
      style={{ transition: 'transform 0.22s ease-out', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
