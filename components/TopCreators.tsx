import { NoiseBackground } from '@/components/ui/noise-background'
import SectionSparkles from '@/components/SectionSparkles'

const creators = [
  { name: 'Iconic_Mind 👑',        handle: '@otamereoyen',          img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Iconic_Mind.png',         url: 'https://www.imagine.art/c/otamereoyen' },
  { name: 'Aipromptsmith',        handle: '@aipromptsmith',        img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Aipromptsmith.png',       url: 'https://www.imagine.art/c/aipromptsmith' },
  { name: '_ai.Creativecraft',    handle: '@promptcraft',          img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/_ai.Creativecraft.png',   url: 'https://www.imagine.art/c/promptcraft' },
  { name: 'Chillvibesart',        handle: '@chillvibesart',        img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Chillvibesart.png',       url: 'https://www.imagine.art/c/chillvibesart' },
  { name: 'visual_saga_studios',  handle: '@visualsagastudios',    img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/visual_saga_studios.png', url: 'https://www.imagine.art/c/visualsagastudios(sairammadaram)' },
  { name: 'Soumya🍃',             handle: '@soumya🍃',              img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Soumya.png',               url: 'https://www.imagine.art/c/soumya%F0%9F%8D%83' },
  { name: 'Warmcorner.ai',        handle: '@warmcorner',           img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Warmcorner.ai.png',       url: 'https://www.imagine.art/c/warmcorner' },
  { name: 'Digital Art Sensei',   handle: '@abinkurian',           img: '/tc-digital-art-sensei.png',                                                                url: 'https://www.imagine.art/c/abinkurian' },
  { name: 'Nebelschaf_art',       handle: '@nebelschaf_art',       img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Nebelschaf_art.png',      url: 'https://www.imagine.art/c/nebelschaf_art' },
  { name: 'Aura HARVI',           handle: '@auraharvi',            img: '/tc-aura-harvi.png',                                                                        url: 'https://www.imagine.art/c/auraharvi' },
]

export default function TopCreators() {
  return (
    <section
      id="creators"
      className="ia-sec"
      style={{ background: 'var(--clr-bg)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>

        {/* Heading */}
        <div className="ia-sec-head">
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 0 0',
              color: 'var(--clr-fg)',
            }}
          >
            Meet Our Top Creators
          </h2>
          <SectionSparkles width="380px" style={{ margin: '0 auto -24px' }} />
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.44)',
              margin: '0 auto',
              maxWidth: '460px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Independent artists to agency teams. From every timezone, every discipline.
          </p>
        </div>

        {/* Avatar grid */}
        <div
          className="ia-creators-grid ia-sec-head"
        >
          {creators.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(138,63,252,0.25)',
                  flexShrink: 0,
                  position: 'relative',
                }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ lineHeight: 1 }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '-.01em',
                    marginBottom: '5px',
                    color: 'var(--clr-fg)',
                  }}
                >
                  {c.name}
                </div>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.36)', letterSpacing: '-.005em' }}>
                  {c.handle}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <NoiseBackground gradientColors={['#8A3FFC', '#C8AAFF', '#F9B8D4', '#FFD4A8', '#ffffff']}>
          <a
            className="ia-btn-dark"
            href="https://www.imagine.art/community"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              color: 'var(--clr-btn-dark-fg)',
              background: 'var(--clr-btn-dark-bg)',
              padding: '14px 36px',
              borderRadius: '999px',
            }}
          >
            Get Featured
          </a>
        </NoiseBackground>

      </div>
    </section>
  )
}
