'use client'

import { useEffect, useRef } from 'react'

interface Stat {
  count: number
  decimals?: number
  suffix: string
  label: string
  color?: string
}

const stats: Stat[] = [
  { count: 2500, suffix: '+', label: 'Active creators' },
  { count: 4.5, decimals: 1, suffix: 'B+', label: 'Generations' },
  { count: 145, suffix: '+', label: 'Countries represented' },
]

export default function StatsBand() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            observer.unobserve(entry.target)

            container.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
              const target = parseFloat(el.dataset.count || '0')
              const dec = parseInt(el.dataset.decimals || '0', 10)
              const suf = el.dataset.suffix || ''
              const t0 = performance.now()
              const dur = 1600
              const ease = (t: number) => 1 - Math.pow(1 - t, 3)

              const step = (now: number) => {
                const p = Math.min(1, (now - t0) / dur)
                const v = (target * ease(p)).toFixed(dec)
                el.textContent = v + suf
                if (p < 1) requestAnimationFrame(step)
              }
              requestAnimationFrame(step)
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="ia-stats-band" style={{ padding: '72px 40px', background: 'var(--clr-bg)' }}>
      <div
        ref={containerRef}
        id="ia-stats"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '20px',
          justifyItems: 'center',
          borderTop: '1px solid var(--clr-border)',
          paddingTop: '52px',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div
              data-count={s.count}
              data-decimals={s.decimals ?? 0}
              data-suffix={s.suffix}
              style={{
                fontSize: 'clamp(32px,3.6vw,48px)',
                fontWeight: 500,
                letterSpacing: '-.025em',
                color: s.color ?? 'var(--clr-fg)',
                lineHeight: 1,
              }}
            >
              0
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--clr-fg-3)', marginTop: '8px', lineHeight: 1.4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
