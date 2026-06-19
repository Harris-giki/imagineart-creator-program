import { personas } from '@/lib/data'
import { CometCard } from '@/components/ui/comet-card'

export default function WhoItsFor() {
  return (
    <section
      id="who"
      className="ia-sec"
      style={{ background: 'var(--clr-bg)' }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(30px, 4vw, 52px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 auto',
              whiteSpace: 'nowrap',
              color: 'var(--clr-fg)',
            }}
          >
            Where Every Creator Belongs
          </h2>
        </div>

        {/* Cards */}
        <div className="ia-grid-3col">
          {personas.map((p, i) => (
            <CometCard
              key={i}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'var(--clr-bg-2)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image with persona gradient tint */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: p.bg,
                    opacity: 0.35,
                    zIndex: 0,
                  }}
                />
                <img
                  src={`https://cdn.web.imagine.art/imagine-one/test/assets/who-is-this-for/${[1, 3, 2][i]}.png`}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 1,
                  }}
                />
                {/* Bottom fade into card bg */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '55%',
                    background: 'linear-gradient(to top, var(--clr-bg-2) 0%, transparent 100%)',
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Card content */}
              <div style={{ padding: '24px 28px 32px', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-.018em',
                    lineHeight: 1.2,
                    margin: '0 0 12px',
                    color: 'var(--clr-fg)',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.72,
                    color: 'rgba(255,255,255,0.45)',
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </CometCard>
          ))}
        </div>

      </div>
    </section>
  )
}
