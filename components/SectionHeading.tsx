'use client'

import React from 'react'

interface SectionHeadingProps {
  /**
   * Main headline text before the accent.
   * Use \n to force a line break inside the main text.
   */
  headline: string
  /** Trailing accent fragment — rendered italic + color-shifted. */
  accent: string
  accentColor?: 'purple' | 'gray'
  /** Whether to put a <br> between the last headline line and the accent. */
  lineBreakBeforeAccent?: boolean
  subline?: string
  /** Uppercase monospaced kicker above the headline. */
  eyebrow?: string
  align?: 'left' | 'center'
  /** xl: 88px cap | lg: 60px cap | md: 28px cap (compact, e.g. FAQ column) */
  size?: 'xl' | 'lg' | 'md'
}

export default function SectionHeading({
  headline,
  accent,
  accentColor = 'gray',
  lineBreakBeforeAccent = false,
  subline,
  eyebrow,
  align = 'left',
  size = 'lg',
}: SectionHeadingProps) {
  const lines = headline.split('\n')
  const showGlow = size !== 'md'

  return (
    <div className={`ia-sh ia-sh-${size} ia-sh-${align}`}>
      {eyebrow && (
        <div className="ia-sh-eyebrow">{eyebrow}</div>
      )}
      <h2 className="ia-sh-headline">
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
        {lineBreakBeforeAccent ? <br /> : ' '}
        <em className={`ia-sh-accent ia-sh-accent-${accentColor}`}>{accent}</em>
      </h2>
      {showGlow && (
        <div className="ia-sh-glow" aria-hidden="true" />
      )}
      {subline && (
        <p className="ia-sh-subline">{subline}</p>
      )}
    </div>
  )
}
