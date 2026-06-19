'use client'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function CometCard({ children, className, style }: Props) {
  return (
    <div
      className={`ia-comet-card${className ? ` ${className}` : ''}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {/* Comet sweep — diagonal streak that fires on hover */}
      <div className="ia-comet-streak" aria-hidden="true" />
      {children}
    </div>
  )
}
