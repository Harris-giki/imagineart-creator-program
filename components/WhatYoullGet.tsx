import { CardSpotlight } from '@/components/ui/card-spotlight'
import SectionSparkles from '@/components/SectionSparkles'

const benefits = [
  {
    title: 'Fuel that grows with you',
    body: 'Start with 20K credits and unlock up to 200K every month as you create. Premium access from day one, no waiting, no limits on your ambition.',
  },
  {
    title: 'Your work, in the spotlight',
    body: 'We put your best work in front of the world, case studies, social features, and co-marketing campaigns amplified across every ImagineArt channel.',
  },
  {
    title: 'Lead in your city',
    body: "Pitch a workshop or meetup and we'll back it, platform credits, speakers, and full ImagineArt promotion to bring your community together.",
  },
  {
    title: 'Get paid as you rise',
    body: 'Earn up to 25% revenue share as a Creative Partner, plus affiliate access and enterprise bonuses when you bring studios and agencies on board.',
  },
]

export default function WhatYoullGet() {
  return (
    <section
      id="rewards"
      className="ia-sec"
      style={{ background: 'var(--clr-bg)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div className="ia-sec-head" style={{ textAlign: 'center' }}>
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
            What&apos;s In It For You
          </h2>
          <SectionSparkles width="360px" style={{ margin: '0 auto -24px' }} />
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.44)',
              margin: '0 auto 32px',
              maxWidth: '460px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Everything you need to create boldly, grow faster, and turn your craft into income.
          </p>
        </div>

        <div className="ia-grid-2col">
          {benefits.map((b) => (
            <CardSpotlight
              key={b.title}
              spotlightColor="rgba(200,170,255,0.32)"
              style={{
                background: `radial-gradient(ellipse at 75% 15%, rgba(138,63,252,0.18) 0%, rgba(20,20,23,0) 55%),
                             radial-gradient(ellipse at 25% 85%, rgba(100,40,200,0.12) 0%, rgba(20,20,23,0) 50%),
                             var(--clr-bg-2)`,
                borderRadius: '20px',
                border: '1px solid rgba(138,63,252,0.18)',
                padding: '36px 32px',
              }}
            >
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '-.018em',
                  lineHeight: 1.2,
                  marginTop: '8px',
                  marginBottom: '16px',
                }}
              >
                {b.title}
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                }}
              >
                {b.body}
              </p>
            </CardSpotlight>
          ))}
        </div>

      </div>
    </section>
  )
}
