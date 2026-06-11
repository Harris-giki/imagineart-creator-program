import RevealWrapper from './RevealWrapper'

const creators = [
  { name: 'Ariel', handle: '@arielmakes', bg: 'radial-gradient(circle at 38% 38%,#FFC27A,#C0392B 70%)' },
  { name: 'Studio Nova', handle: '@studionova', bg: 'radial-gradient(circle at 38% 38%,#FF85DD,#6929C4 70%)' },
  { name: 'Lumen Lab', handle: '@lumenlab', bg: 'radial-gradient(circle at 38% 38%,#7CF0D8,#2C7FB8 70%)' },
  { name: 'Kara VFX', handle: '@kara.vfx', bg: 'radial-gradient(circle at 38% 38%,#FFB199,#7A3FFC 70%)' },
  { name: '3rd Unit', handle: '@3rdunit', bg: 'radial-gradient(circle at 38% 38%,#9EE6FF,#3a1d6e 70%)' },
  { name: 'Flux Daily', handle: '@flux.daily', bg: 'radial-gradient(circle at 38% 38%,#FFE08A,#FF6FA5 70%)' },
  { name: 'Orpheu', handle: '@orpheu', bg: 'radial-gradient(circle at 38% 38%,#A8C8FF,#8A3FFC 70%)' },
  { name: 'Atlas Studio', handle: '@atlas.studio', bg: 'radial-gradient(circle at 38% 38%,#C4A8FF,#4E2B78 70%)' },
]

export default function TopCreators() {
  return (
    <section
      id="creators"
      style={{ padding: '100px 40px', background: '#F8F8F8', textAlign: 'center' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <RevealWrapper style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px,3.8vw,50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 0 16px',
              color: '#161616',
            }}
          >
            Meet our top creators.
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: '#6A6A6A',
              margin: '0 auto',
              maxWidth: '480px',
            }}
          >
            The people already doing it. From independent artists to agency teams, spanning timezones and disciplines.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '36px 24px',
              marginBottom: '60px',
            }}
          >
            {creators.map((c, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '104px',
                    height: '104px',
                    borderRadius: '50%',
                    background: c.bg,
                    border: '3px solid #fff',
                    boxShadow: '0 4px 20px rgba(0,0,0,.08)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-.01em', marginBottom: '2px', color: '#161616' }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#9A9A9A' }}>
                    {c.handle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            className="ia-btn-dark"
            href="#apply"
            style={{
              display: 'inline-block',
              fontSize: '15.5px',
              fontWeight: 600,
              textDecoration: 'none',
              color: '#fff',
              background: '#161616',
              padding: '15px 36px',
              borderRadius: '999px',
            }}
          >
            Become one of us
          </a>
        </RevealWrapper>
      </div>
    </section>
  )
}
