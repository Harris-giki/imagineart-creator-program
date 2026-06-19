'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; opacity: number
  life: number; maxLife: number
}

export function SparklesCore({
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 800,
  particleColor = '#FFFFFF',
  className,
  style,
}: {
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  className?: string
  style?: React.CSSProperties
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Particle[] = []
    let W = 0, H = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const hex = (particleColor.startsWith('#') ? particleColor : '#ffffff').replace('#', '')
    const r = parseInt(hex.slice(0, 2), 16) || 200
    const g = parseInt(hex.slice(2, 4), 16) || 170
    const b = parseInt(hex.slice(4, 6), 16) || 255

    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H * 0.5,
      vx: (Math.random() - 0.5) * 0.22,
      vy: Math.random() * 0.3 + 0.05,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: 0,
      life: Math.random() * 70,
      maxLife: 70 + Math.random() * 90,
    })

    const targetCount = Math.max(20, Math.floor(particleDensity / 25))
    for (let i = 0; i < targetCount; i++) particles.push(spawn())

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        p.life++
        p.x += p.vx
        p.y += p.vy
        const t = p.life / p.maxLife
        p.opacity = t < 0.2 ? t / 0.2 : t > 0.72 ? 1 - (t - 0.72) / 0.28 : 1
        if (p.life >= p.maxLife || p.y > H + 5 || p.x < -10 || p.x > W + 10) {
          Object.assign(p, spawn())
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${(p.opacity * 0.88).toFixed(3)})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [minSize, maxSize, particleDensity, particleColor])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background, display: 'block', ...style }}
    />
  )
}
