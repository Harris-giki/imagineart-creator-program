import RevealWrapper from './RevealWrapper'
import { expectations } from '@/lib/data'

export default function WhatWeExpect() {
  return (
    <section className="ia-sec" style={{ background: 'var(--clr-bg-3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper className="ia-expect-grid">
          <div>
            <div
              style={{
                fontFamily: "'Lemon Milk', sans-serif",
                fontSize: '12px',
                letterSpacing: '.2em',
                color: '#8A3FFC',
                marginBottom: '16px',
              }}
            >
              04 · THE DEAL
            </div>
            <h2
              style={{
                fontSize: 'clamp(32px,4.2vw,52px)',
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: '-.02em',
                margin: '0 0 20px',
              }}
            >
              Clear Expectations, No Fine Print
            </h2>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.6,
                color: 'var(--clr-fg-2)',
                margin: '0 0 28px',
                maxWidth: '440px',
              }}
            >
              Staying active is simple and transparent. Hit these each month and your credits refill on schedule.
            </p>
            <a
              className="ia-link"
              href="#faq"
              style={{ fontSize: '16px', fontWeight: 600, color: '#8A3FFC' }}
            >
              Read the full guidelines →
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {expectations.map((e, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  background: 'var(--clr-card)',
                  border: '1px solid var(--clr-border)',
                  borderRadius: '16px',
                  padding: '20px 22px',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    fontFamily: "'Lemon Milk', sans-serif",
                    fontSize: '15px',
                    color: '#8A3FFC',
                    width: '30px',
                  }}
                >
                  {e.k}
                </span>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                    {e.t}
                  </div>
                  <div style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--clr-fg-2)' }}>
                    {e.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
