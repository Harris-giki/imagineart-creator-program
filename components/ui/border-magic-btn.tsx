'use client'

import React from 'react'

interface BorderMagicBtnProps {
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  /** 'sm' = nav size (36px), default = main CTA (48px) */
  size?: 'sm' | 'md'
  /** Stretches outer to 100% width — for full-width modal CTAs */
  fullWidth?: boolean
  /** Extra classes applied to the outer element */
  className?: string
}

export default function BorderMagicBtn({
  children,
  href,
  target,
  rel,
  onClick,
  size,
  fullWidth,
  className = '',
}: BorderMagicBtnProps) {
  const outerClass = [
    'ia-bm-outer',
    size === 'sm' ? 'ia-bm-sm' : '',
    fullWidth ? 'ia-bm-full' : '',
    className,
  ].filter(Boolean).join(' ')

  const inner = (
    <>
      <span className="ia-bm-spin" aria-hidden="true" />
      <span className="ia-bm-inner">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={outerClass}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={outerClass}>
      {inner}
    </button>
  )
}
