'use client'

import { WORLD_MAP_D } from '@/lib/worldMapPath'

const MAP_W = 1056
const MAP_H = 495
const VIEW_Y0 = 80
const VIEW_H = MAP_H - VIEW_Y0

export default function FooterMap() {
  return (
    <svg
      viewBox={`0 ${VIEW_Y0} ${MAP_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMin slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <path d={WORLD_MAP_D} className="ia-world-map-path" />
    </svg>
  )
}
