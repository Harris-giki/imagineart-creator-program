import RevealWrapper from './RevealWrapper'
import { personas } from '@/lib/data'

export default function WhoItsFor() {
  return (
    <section
      id="who"
      style={{
        padding: '80px 40px',
        background: '#F8F8F8',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ textAlign: 'center', marginBottom: '52px' }}>
          <h2
            style={{
              fontSize: 'clamp(30px,4vw,50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 auto',
              maxWidth: '680px',
              color: '#161616',
            }}
          >
            Built for three kinds of creative.
          </h2>
        </RevealWrapper>

        <RevealWrapper
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '22px',
          }}
        >
          {personas.map((p, i) => (
            <div
              key={i}
              className="ia-persona"
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                background: '#fff',
                border: '1px solid #E8E8E8',
                boxShadow: '0 2px 16px rgba(0,0,0,.04)',
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <div
                  className="ia-persona-art"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: p.bg,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top,rgba(255,255,255,.9),transparent 56%)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    fontFamily: "'Lemon Milk', sans-serif",
                    fontSize: '34px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,.3)',
                  }}
                >
                  {p.num}
                </span>
              </div>
              <div style={{ padding: '26px 26px 30px' }}>
                <h3
                  style={{
                    fontSize: '21px',
                    fontWeight: 500,
                    letterSpacing: '-.01em',
                    margin: '0 0 12px',
                    color: '#161616',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    color: '#6A6A6A',
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
