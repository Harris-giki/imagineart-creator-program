'use client'

import RevealWrapper from './RevealWrapper'

declare global {
  interface Window {
    Tally?: { openPopup: (id: string, opts?: Record<string, unknown>) => void }
  }
}

export default function Community() {
  return (
    <section
      id="community"
      className="ia-sec"
      style={{ background: '#fff', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ marginBottom: '44px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px,3.8vw,50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: 0,
              maxWidth: '600px',
              color: '#161616',
            }}
          >
            Partners in every timezone.
          </h2>
        </RevealWrapper>

        <RevealWrapper className="ia-community-grid">
          {/* Host an event card */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '22px',
              padding: '36px',
              background: 'linear-gradient(120deg,#3a1d6e,#8A3FFC 130%)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-40px',
                top: '-40px',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(255,133,221,.5),transparent 70%)',
              }}
            />
            <div style={{ position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-.015em', margin: '0 0 12px', color: '#fff' }}>
                Host an event. We fund it.
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,.85)',
                  maxWidth: '440px',
                  margin: '0 0 24px',
                }}
              >
                Pitch a workshop, meetup, or creative session in your city. Approved partners get platform credits, speakers, promotion, and sponsorship support to make it real.
              </p>
              <button
                onClick={() => window.Tally?.openPopup('0Q6GR6', { layout: 'modal', width: 700, overlay: true, animateClose: true })}
                style={{
                  display: 'inline-block',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  color: '#0F0F0F',
                  background: '#fff',
                  padding: '13px 26px',
                  borderRadius: '999px',
                }}
              >
                Submit a proposal
              </button>
            </div>
          </div>

          {/* Live sessions card */}
          <div
            style={{
              borderRadius: '22px',
              border: '1px solid #E8E8E8',
              background: '#F8F8F8',
              padding: '34px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', color: '#888', marginBottom: '6px', letterSpacing: '.06em' }}>
                LIVE EVERY WEEK
              </div>
              <div style={{ fontSize: '19px', fontWeight: 500, color: '#161616', letterSpacing: '-.015em' }}>
                3 sessions. Real people. Real answers.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { day: 'Wed', label: 'Office Hours', detail: '8–9 AM EDT · drop in, ask anything, get help live' },
                { day: 'Thu', label: 'Imagine with ImagineArt', detail: 'live creative battles with the community' },
                { day: 'Fri', label: 'Expert Sessions', detail: 'hands-on workflows with Creative Technologists' },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: '#fff',
                      border: '1px solid #E0E0E0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#888',
                      letterSpacing: '.04em',
                    }}
                  >
                    {s.day}
                  </div>
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 500, color: '#161616', marginBottom: '2px' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.45 }}>
                      {s.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://discord.gg/H724XtQXg7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '13.5px',
                fontWeight: 500,
                textDecoration: 'none',
                color: '#161616',
                padding: '10px 18px',
                borderRadius: '999px',
                border: '1px solid #E0E0E0',
                background: '#fff',
                alignSelf: 'flex-start',
              }}
            >
              Join on Discord
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
