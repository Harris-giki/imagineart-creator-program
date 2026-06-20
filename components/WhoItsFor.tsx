'use client'

import { personas } from '@/lib/data'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import SectionHeading from '@/components/SectionHeading'

const tags    = ['ARTIST · VISIONARY', 'PROFESSIONAL · DESIGN', 'AI · CONTENT']
const imgNums = [1, 3, 2]

export default function WhoItsFor() {
  return (
    <section id="who" className="ia-who-section">

      <div className="ia-who-head">
        <SectionHeading
          headline={"Where Every\nCreator"}
          accent="Belongs"
          accentColor="purple"
          align="center"
          size="xl"
          subline="Whatever you make, there's a place for you here."
        />
      </div>

      <div className="ia-who-bento">
        {personas.map((p, i) => (
          <div
            key={i}
            className={`ia-who-tile${i === 0 ? ' ia-who-bento-main' : ''}`}
          >
            <CardContainer style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <CardBody style={{ width: '100%', height: '100%', position: 'relative' }}>

                <CardItem
                  translateZ={20}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <img
                    src={`https://cdn.web.imagine.art/imagine-one/test/assets/who-is-this-for/${imgNums[i]}.png`}
                    alt={p.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                    }}
                  />
                  <div aria-hidden="true" className="ia-who-tint" style={{ background: p.bg }} />
                  <div aria-hidden="true" className="ia-who-scrim" />
                </CardItem>

                <CardItem
                  translateZ={50}
                  style={{
                    position: 'absolute', top: '18px', left: '22px', right: '22px',
                    zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  <span className="ia-who-tag">{tags[i]}</span>
                  <span className="ia-who-num">{p.num}</span>
                </CardItem>

                <CardItem
                  translateZ={70}
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: i === 0 ? '0 28px 32px' : '0 22px 24px',
                    zIndex: 2,
                  }}
                >
                  <h3 className="ia-who-tile-h3">{p.title}</h3>
                  <p className="ia-who-tile-p">{p.body}</p>
                </CardItem>

              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  )
}
