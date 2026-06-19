import RevealWrapper from './RevealWrapper'
import { personas } from '@/lib/data'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

export default function WhoItsFor() {
  return (
    <section
      id="who"
      className="ia-sec-sm"
      style={{ background: 'var(--clr-bg-2)' }}
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
              color: 'var(--clr-fg)',
            }}
          >
            Where Every Creator Belongs
          </h2>
        </RevealWrapper>

        <RevealWrapper className="ia-grid-3col">
          {personas.map((p, i) => (
            <CardContainer key={i} style={{ width: '100%' }}>
              <CardBody
                style={{
                  borderRadius: '22px',
                  background: 'var(--clr-card)',
                  border: '1px solid var(--clr-border)',
                  boxShadow: '0 2px 16px rgba(0,0,0,.04)',
                  width: '100%',
                }}
              >
                {/* Image + number badge */}
                <CardItem translateZ={60} style={{ display: 'block', width: '100%' }}>
                  <div
                    className="ia-persona-img"
                    style={{
                      position: 'relative',
                      height: '280px',
                      overflow: 'hidden',
                      borderRadius: '22px 22px 0 0',
                    }}
                  >
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
                        color: 'rgba(255,255,255,.55)',
                      }}
                    >
                      {p.num}
                    </span>
                  </div>
                </CardItem>

                {/* Title */}
                <CardItem translateZ={40} style={{ display: 'block', padding: '26px 26px 0' }}>
                  <h3
                    style={{
                      fontSize: '21px',
                      fontWeight: 500,
                      letterSpacing: '-.01em',
                      margin: '0 0 12px',
                      color: 'var(--clr-fg)',
                    }}
                  >
                    {p.title}
                  </h3>
                </CardItem>

                {/* Description */}
                <CardItem translateZ={20} style={{ display: 'block', padding: '0 26px 30px' }}>
                  <p
                    style={{
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      color: 'var(--clr-fg-2)',
                      margin: 0,
                    }}
                  >
                    {p.body}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
