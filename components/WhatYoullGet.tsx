'use client'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import SectionSparkles from '@/components/SectionSparkles'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

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
      style={{ background: 'var(--clr-bg)', paddingBottom: 0 }}
    >
      <ContainerScroll
        titleComponent={
          <div style={{ textAlign: 'center' }}>
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
                margin: '0 auto',
                maxWidth: '460px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Everything you need to create boldly, grow faster, and turn your craft into income.
            </p>
          </div>
        }
      >
        {/* 2-column card grid inside the scroll container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            height: '100%',
            alignContent: 'center',
          }}
        >
          {benefits.map((b) => (
            <CardSpotlight
              key={b.title}
              spotlightColor="rgba(200,170,255,0.32)"
              style={{
                background: `radial-gradient(ellipse at 75% 15%, rgba(138,63,252,0.22) 0%, rgba(20,20,23,0) 55%),
                             radial-gradient(ellipse at 25% 85%, rgba(100,40,200,0.15) 0%, rgba(20,20,23,0) 50%),
                             rgba(30,30,36,0.9)`,
                borderRadius: '16px',
                border: '1px solid rgba(138,63,252,0.22)',
                padding: '28px 24px',
              }}
            >
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '-.018em',
                  lineHeight: 1.2,
                  marginTop: '4px',
                  marginBottom: '10px',
                }}
              >
                {b.title}
              </p>
              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                }}
              >
                {b.body}
              </p>
            </CardSpotlight>
          ))}
        </div>
      </ContainerScroll>
    </section>
  )
}
