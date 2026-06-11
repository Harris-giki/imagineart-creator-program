import RevealWrapper from './RevealWrapper'
import { tiles } from '@/lib/data'

export default function CommunityCreations() {
  return (
    <section className="ia-sec-sm" style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(26px,3.4vw,44px)',
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-.02em',
              margin: '0 0 14px',
              color: '#161616',
            }}
          >
            Community Creations
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#7A7A7A',
              margin: '0 auto',
              maxWidth: '520px',
              fontWeight: 400,
            }}
          >
            Work made by our partners across the globe. Real creatives using ImagineArt to push what&apos;s possible.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="ia-grid-4col-tight">
            {tiles.map((t, i) => (
              <div
                key={i}
                className="ia-tile"
                style={{
                  background: t.bg,
                  borderRadius: '14px',
                  aspectRatio: '1',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div className="ia-veil" />
                <div className="ia-shine" />
                <div
                  style={{
                    position: 'absolute',
                    left: '12px',
                    right: '12px',
                    bottom: '10px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#fff',
                  }}
                >
                  {t.handle}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
