'use client'

import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  phase: number
  speed: number
  glow: boolean
}

function resolveCssVar(name: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}

export interface DottedGlowBackgroundProps {
  className?: string
  opacity?: number
  gap?: number
  radius?: number
  colorLightVar?: string
  glowColorLightVar?: string
  colorDarkVar?: string
  glowColorDarkVar?: string
  backgroundOpacity?: number
  speedMin?: number
  speedMax?: number
  speedScale?: number
  /** Fallback dot colour when CSS var is unresolved */
  dotColor?: string
  /** Fallback glow colour when CSS var is unresolved */
  glowColor?: string
  style?: React.CSSProperties
}

export function DottedGlowBackground({
  className = '',
  opacity = 1,
  gap = 10,
  radius = 1.6,
  colorDarkVar = '--color-neutral-500',
  glowColorDarkVar = '--color-sky-800',
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
  dotColor = 'rgba(120,120,150,0.55)',
  glowColor = 'rgba(56,189,248,0.85)',
  style,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>()
  const dotsRef   = useRef<Dot[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dc = resolveCssVar(colorDarkVar, dotColor)
    const gc = resolveCssVar(glowColorDarkVar, glowColor)

    const buildGrid = () => {
      const w = canvas.width
      const h = canvas.height
      const dots: Dot[] = []
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          dots.push({
            x, y,
            phase: Math.random() * Math.PI * 2,
            speed: (speedMin + Math.random() * (speedMax - speedMin)) * speedScale * 0.02,
            glow:  Math.random() < 0.07,
          })
        }
      }
      dotsRef.current = dots
    }

    const frame = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)

      if (backgroundOpacity > 0) {
        ctx.fillStyle = `rgba(0,0,0,${backgroundOpacity})`
        ctx.fillRect(0, 0, w, h)
      }

      for (const d of dotsRef.current) {
        d.phase += d.speed
        const bright = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(d.phase))
        ctx.globalAlpha = bright * opacity

        if (d.glow) {
          ctx.shadowBlur  = 10
          ctx.shadowColor = gc
          ctx.fillStyle   = gc
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle  = dc
        }

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.glow ? radius * 1.5 : radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      ctx.shadowBlur  = 0
      rafRef.current = requestAnimationFrame(frame)
    }

    const stop = () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }

    const ro = new ResizeObserver(() => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      buildGrid()
    })
    ro.observe(canvas)
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    buildGrid()
    frame()

    return () => { ro.disconnect(); stop() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gap, radius, colorDarkVar, glowColorDarkVar, backgroundOpacity, speedMin, speedMax, speedScale, opacity, dotColor, glowColor])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  )
}
