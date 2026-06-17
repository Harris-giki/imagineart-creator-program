import RevealWrapper from './RevealWrapper'

const creators = [
  { name: 'Iconic_Mind 👑',      handle: '@otamereoyen',          img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Iconic_Mind.png',           url: 'https://www.imagine.art/c/otamereoyen' },
  { name: 'Aipromptsmith',       handle: '@aipromptsmith',        img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Aipromptsmith.png',         url: 'https://www.imagine.art/c/aipromptsmith' },
  { name: '_ai.Creativecraft',   handle: '@promptcraft',          img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/_ai.Creativecraft.png',     url: 'https://www.imagine.art/c/promptcraft' },
  { name: 'Chillvibesart',       handle: '@chillvibesart',        img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Chillvibesart.png',         url: 'https://www.imagine.art/c/chillvibesart' },
  { name: 'visual_saga_studios', handle: '@visualsagastudios',    img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/visual_saga_studios.png',   url: 'https://www.imagine.art/c/visualsagastudios(sairammadaram)' },
  { name: 'Soumya🍃',            handle: '@soumya🍃',              img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Soumya.png',                url: 'https://www.imagine.art/c/soumya%F0%9F%8D%83' },
  { name: 'Warmcorner.ai',       handle: '@warmcorner',           img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Warmcorner.ai.png',         url: 'https://www.imagine.art/c/warmcorner' },
  { name: 'Digital Art Sensei',  handle: '@abinkurian',           img: '/tc-digital-art-sensei.png', url: 'https://www.imagine.art/c/abinkurian' },
  { name: 'Nebelschaf_art',      handle: '@nebelschaf_art',       img: 'https://cdn.web.imagine.art/imagine-one/test/assets/top-creators/Nebelschaf_art.png',        url: 'https://www.imagine.art/c/nebelschaf_art' },
  { name: 'Aura HARVI',          handle: '@auraharvi',            img: '/tc-aura-harvi.png',          url: 'https://www.imagine.art/c/auraharvi' },
]

export default function TopCreators() {
  return (
    <section
      id="creators"
      className="ia-sec"
      style={{ background: 'var(--clr-bg-2)', textAlign: 'center' }}
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
              color: 'var(--clr-fg)',
            }}
          >
            Meet Our Top Creators
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--clr-fg-2)',
              margin: '0 auto',
              maxWidth: '480px',
            }}
          >
            The people already doing it. From independent artists to agency teams, spanning timezones and disciplines.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="ia-grid-5col" style={{ marginBottom: '60px' }}>
            {creators.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '104px',
                    height: '104px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--clr-card)',
                    boxShadow: '0 4px 20px rgba(0,0,0,.10)',
                    flexShrink: 0,
                    transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease',
                  }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-.01em', marginBottom: '2px', color: 'var(--clr-fg)' }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--clr-fg-3)' }}>
                    {c.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a
            className="ia-btn-dark"
            href="https://www.imagine.art/community"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontSize: '15.5px',
              fontWeight: 600,
              textDecoration: 'none',
              color: 'var(--clr-btn-dark-fg)',
              background: 'var(--clr-btn-dark-bg)',
              padding: '15px 36px',
              borderRadius: '999px',
            }}
          >
            Get Featured
          </a>
        </RevealWrapper>
      </div>
    </section>
  )
}
