import { personas } from '@/lib/data'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import SectionSparkles from '@/components/SectionSparkles'

const tags = ['ARTIST · VISIONARY', 'PROFESSIONAL · DESIGN', 'AI · CONTENT']
const imgNums = [1, 3, 2]

export default function WhoItsFor() {
  return (
    <section
      id="who"
      className="ia-sec"
      style={{ background: 'var(--clr-bg)' }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

        {/* Heading */}
        <div className="ia-sec-head" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 52px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 auto 0',
              color: 'var(--clr-fg)',
            }}
          >
            Where Every Creator Belongs
          </h2>
          <SectionSparkles width="min(820px, 95%)" />
        </div>

        {/* Bento grid */}
        <div className="ia-who-bento">
          {personas.map((p, i) => (
            <CardContainer
              key={i}
              className={i === 0 ? 'ia-who-bento-main' : ''}
              style={{ width: '100%', height: '100%', minHeight: 0 }}
            >
              <CardBody style={{ width: '100%', height: '100%', position: 'relative' }}>

                {/* Full-bleed visual layer (clipped with border-radius) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '18px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={`https://cdn.web.imagine.art/imagine-one/test/assets/who-is-this-for/${imgNums[i]}.png`}
                    alt={p.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: p.bg,
                      opacity: 0.22,
                      mixBlendMode: 'multiply',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.12) 68%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Category label — floats above image */}
                <CardItem
                  translateZ={35}
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '22px',
                    right: '22px',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 600,
                      letterSpacing: '0.13em',
                      color: 'rgba(255,255,255,0.52)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tags[i]}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: 'rgba(255,255,255,0.28)',
                    }}
                  >
                    {p.num}
                  </span>
                </CardItem>

                {/* Bottom text — floats highest */}
                <CardItem
                  translateZ={70}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: i === 0 ? '0 28px 32px' : '0 22px 24px',
                    zIndex: 2,
                  }}
                >
                  <h3
                    style={{
                      fontSize: i === 0 ? 'clamp(20px, 2vw, 28px)' : '18px',
                      fontWeight: 500,
                      letterSpacing: '-.018em',
                      lineHeight: 1.2,
                      margin: '0 0 10px',
                      color: '#ffffff',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: i === 0 ? '14.5px' : '13.5px',
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.6)',
                      margin: 0,
                      maxWidth: i === 0 ? '380px' : '260px',
                    }}
                  >
                    {p.body}
                  </p>
                </CardItem>

              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>
    </section>
  )
}
