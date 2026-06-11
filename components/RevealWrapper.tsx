'use client'

import { useEffect, useRef, CSSProperties } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

export default function RevealWrapper({ children, className, style }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} data-reveal className={className} style={style}>
      {children}
    </div>
  )
}
