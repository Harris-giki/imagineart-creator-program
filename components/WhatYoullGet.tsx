import { CardSpotlight } from '@/components/ui/card-spotlight'

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

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 0 16px',
              color: 'var(--clr-fg)',
            }}
          >
            What&apos;s In It For You
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.44)',
              margin: '0 auto',
              maxWidth: '460px',
            }}
          >
            Everything you need to create boldly, grow faster, and turn your craft into income.
          </p>
        </div>

        {/* 2-column card grid */}
        <div className="ia-grid-2col">
          {benefits.map((b) => (
            <CardSpotlight
              key={b.title}
              style={{
                background: 'var(--clr-bg-2)',
                borderRadius: '20px',
                border: '1px solid var(--clr-border)',
                padding: '36px 32px',
              }}
            >
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
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
