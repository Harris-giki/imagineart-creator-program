import RevealWrapper from './RevealWrapper'
import { tiles } from '@/lib/data'

export default function ProofWall() {
  return (
    <section id="work" style={{ padding: '104px 40px 96px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '48px',
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
              01 — THE PROOF
            </div>
            <h2
              style={{
                fontSize: 'clamp(34px,4.6vw,58px)',
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: '-.02em',
                margin: 0,
                maxWidth: '760px',
              }}
            >
              Every pixel on this page was made in ImagineArt.
            </h2>
          </div>
          <p
            style={{
              maxWidth: '330px',
              margin: 0,
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#575757',
            }}
          >
            A living wall of partner work. Hover any piece to see the prompt and the tool behind it.
          </p>
        </RevealWrapper>

        <RevealWrapper style={{ columns: 4, columnGap: '18px' }}>
          {tiles.map((t, i) => (
            <div
              key={i}
              className="ia-tile"
              style={{
                breakInside: 'avoid',
                marginBottom: '18px',
                height: t.h,
                background: t.bg,
              }}
            >
              <div className="ia-veil" />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 10px',
                  borderRadius: '999px',
                  background: 'rgba(10,6,20,.42)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#A56EFF',
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#fff',
                    letterSpacing: '.02em',
                  }}
                >
                  {t.tool}
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '14px',
                  right: '14px',
                  bottom: '13px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#fff' }}>
                    {t.handle}
                  </span>
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 600,
                      letterSpacing: '.06em',
                      color: 'rgba(255,255,255,.7)',
                    }}
                  >
                    MADE IN IMAGINEART
                  </span>
                </div>
                <div
                  className="ia-prompt"
                  style={{
                    marginTop: '9px',
                    paddingTop: '9px',
                    borderTop: '1px solid rgba(255,255,255,.18)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '9px',
                      letterSpacing: '.14em',
                      color: '#C7B6FF',
                      marginBottom: '4px',
                    }}
                  >
                    PROMPT
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      lineHeight: 1.45,
                      color: 'rgba(255,255,255,.92)',
                    }}
                  >
                    {t.prompt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
