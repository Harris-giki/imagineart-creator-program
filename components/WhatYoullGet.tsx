import RevealWrapper from './RevealWrapper'

const benefits = [
  {
    title: 'Fuel that grows with you',
    body: 'Start with 20K credits and unlock up to 200K every month as you create. Premium access from day one, no waiting, no limits on your ambition.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Your work, in the spotlight',
    body: 'We put your best work in front of the world, case studies, social features, and co-marketing campaigns amplified across every ImagineArt channel.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Lead in your city',
    body: "Pitch a workshop or meetup and we'll back it, platform credits, speakers, and full ImagineArt promotion to bring your community together.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Get paid as you rise',
    body: 'Earn up to 25% revenue share as a Creative Partner, plus affiliate access and enterprise bonuses when you bring studios and agencies on board.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 7.5l-5 9" />
        <circle cx="9.5" cy="9" r="1" />
        <circle cx="14.5" cy="15" r="1" />
      </svg>
    ),
  },
]

export default function WhatYoullGet() {
  return (
    <section
      id="rewards"
      className="ia-sec"
      style={{ background: 'var(--clr-bg)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ marginBottom: '52px', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(28px,3.8vw,50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 0 16px',
            }}
          >
            What&apos;s In It For You
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--clr-fg-2)',
              margin: '0 auto',
              maxWidth: '500px',
            }}
          >
            Everything you need to create boldly, grow faster, and turn your craft into income.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="ia-grid-2col">
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '22px',
                  background: 'var(--clr-bg-2)',
                  borderRadius: '20px',
                  border: '1px solid var(--clr-border)',
                  padding: '30px 28px',
                  transition: 'border-color .2s ease',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    flex: 'none',
                    borderRadius: '14px',
                    background: 'var(--clr-icon-box)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--clr-fg)',
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 500,
                      letterSpacing: '-.015em',
                      marginBottom: '8px',
                      color: 'var(--clr-fg)',
                    }}
                  >
                    {b.title}
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: 'var(--clr-fg-2)',
                      margin: 0,
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
