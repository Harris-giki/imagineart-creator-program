import RevealWrapper from './RevealWrapper'

const benefits = [
  {
    title: 'Credits that scale with you',
    body: '20K to get started, up to 200K every month based on performance. Premium platform access from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'We spotlight your work',
    body: 'Featured in case studies, social spotlights, and co-marketing campaigns. Your best work gets amplified across ImagineArt channels on all socials.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Host in your city',
    body: 'Pitch a workshop or meetup. Approved partners get funding, speakers, platform credits, and ImagineArt promotion to make it happen.',
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
    title: 'Earn as you grow',
    body: '15% revenue share as a Creative Partner, affiliate program access, and enterprise bonuses when you bring in studios or agencies.',
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
      style={{ background: '#fff' }}
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
            What you&apos;ll get.
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: '#6A6A6A',
              margin: '0 auto',
              maxWidth: '460px',
            }}
          >
            Everything you need to create, grow, and earn from your work.
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
                  background: '#F8F8F8',
                  borderRadius: '20px',
                  border: '1px solid #EBEBEB',
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
                    background: 'rgba(0,0,0,.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#161616',
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
                      color: '#161616',
                    }}
                  >
                    {b.title}
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: '#6A6A6A',
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
