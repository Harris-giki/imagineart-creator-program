import RevealWrapper from './RevealWrapper'
import { expectations } from '@/lib/data'

export default function WhatWeExpect() {
  return (
    <section style={{ padding: '96px 40px', background: '#F7F6F9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
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
              04 — THE DEAL
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
              Clear expectations. No fine print.
            </h2>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.6,
                color: '#575757',
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
                  background: '#fff',
                  border: '1px solid #EDEDED',
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
                  <div style={{ fontSize: '14px', lineHeight: 1.55, color: '#6E6E6E' }}>
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
