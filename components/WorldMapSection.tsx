'use client'

import { motion } from 'framer-motion'

const MAP_W = 1056
const MAP_H = 495

function project(lat: number, lng: number) {
  return {
    x: (lng + 180) / 360 * MAP_W,
    y: (90 - lat) / 180 * MAP_H,
  }
}

const CITIES: Record<string, { lat: number; lng: number }> = {
  'New York':  { lat: 40.71,  lng: -74.01 },
  'São Paulo': { lat: -23.55, lng: -46.63 },
  'London':    { lat: 51.51,  lng: -0.13  },
  'Berlin':    { lat: 52.52,  lng: 13.40  },
  'Lagos':     { lat: 6.52,   lng: 3.38   },
  'Mumbai':    { lat: 19.08,  lng: 72.88  },
  'Jakarta':   { lat: -6.21,  lng: 106.85 },
  'Tokyo':     { lat: 35.68,  lng: 139.65 },
  'Sydney':    { lat: -33.87, lng: 151.21 },
}

const CONNECTIONS: [string, string][] = [
  ['New York',  'London'],
  ['New York',  'São Paulo'],
  ['London',    'Lagos'],
  ['London',    'Mumbai'],
  ['Mumbai',    'Tokyo'],
  ['Tokyo',     'Sydney'],
  ['Berlin',    'Lagos'],
]

function arcPath(from: string, to: string): string {
  const s = project(CITIES[from].lat, CITIES[from].lng)
  const e = project(CITIES[to].lat, CITIES[to].lng)
  const mx = (s.x + e.x) / 2
  const my = Math.min(s.y, e.y) - Math.abs(e.x - s.x) * 0.38 - 12
  return `M ${s.x.toFixed(1)} ${s.y.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${e.x.toFixed(1)} ${e.y.toFixed(1)}`
}

export default function WorldMapSection() {
  const cityNames = [...new Set(CONNECTIONS.flat())]

  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--clr-bg)',
        overflow: 'hidden',
        padding: '64px 0 0',
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '36px',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontSize: '12px',
            letterSpacing: '.12em',
            color: 'var(--clr-fg-3)',
            marginBottom: '10px',
          }}
        >
          GLOBAL COMMUNITY
        </p>
        <h2
          style={{
            fontSize: 'clamp(26px,3.2vw,42px)',
            fontWeight: 500,
            letterSpacing: '-.022em',
            lineHeight: 1.1,
            color: 'var(--clr-fg)',
            margin: 0,
          }}
        >
          Partners in every timezone.
        </h2>
      </div>

      {/* Map container */}
      <div style={{ position: 'relative', width: '100%' }}>

        {/* World map SVG (equirectangular, same projection as arc coords) */}
        <img
          src="/world-map.svg"
          alt=""
          aria-hidden="true"
          className="ia-world-map-img"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        />

        {/* Arc + dot overlay — same viewBox as the SVG */}
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
          aria-hidden="true"
        >
          {/* Arcs */}
          {CONNECTIONS.map(([from, to], i) => (
            <motion.path
              key={`${from}-${to}`}
              d={arcPath(from, to)}
              fill="none"
              stroke="#0ea5e9"
              strokeWidth={1.4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{
                pathLength: { duration: 1.8, delay: i * 0.35, ease: 'easeInOut' },
                opacity:    { duration: 0.2, delay: i * 0.35 },
              }}
            />
          ))}

          {/* Glow halos */}
          {cityNames.map(city => {
            const { x, y } = project(CITIES[city].lat, CITIES[city].lng)
            return (
              <motion.circle
                key={`halo-${city}`}
                cx={x}
                cy={y}
                r={10}
                fill="#0ea5e9"
                opacity={0}
                animate={{ opacity: [0, 0.18, 0] }}
                transition={{ duration: 2.4, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )
          })}

          {/* City dots */}
          {cityNames.map(city => {
            const { x, y } = project(CITIES[city].lat, CITIES[city].lng)
            return (
              <motion.circle
                key={`dot-${city}`}
                cx={x}
                cy={y}
                r={3.5}
                fill="#0ea5e9"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            )
          })}
        </svg>

        {/* Top fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '90px',
            background: 'linear-gradient(to bottom, var(--clr-bg) 10%, transparent)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '90px',
            background: 'linear-gradient(to top, var(--clr-bg) 10%, transparent)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        {/* Left fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to right, var(--clr-bg), transparent)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to left, var(--clr-bg), transparent)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      </div>
    </section>
  )
}
