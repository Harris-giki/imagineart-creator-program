'use client'

import RevealWrapper from './RevealWrapper'
import { NoiseBackground } from '@/components/ui/noise-background'
import SectionSparkles from '@/components/SectionSparkles'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

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
      style={{ background: 'var(--clr-bg)', overflow: 'hidden' }}
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
              color: 'var(--clr-fg)',
            }}
          >
            Learn and Grow with Us
          </h2>
          <SectionSparkles width="min(540px, 100%)" style={{ margin: '0' }} />
        </RevealWrapper>

        <RevealWrapper className="ia-community-grid">
          {/* Host an event card — 3D tilt */}
          <CardContainer style={{ width: '100%', height: '100%', minHeight: 0 }}>
            <CardBody
              className="ia-community-card"
              style={{
                position: 'relative',
                borderRadius: '22px',
                minHeight: '340px',
                display: 'flex',
                alignItems: 'flex-end',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Background image + overlay — clipped */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '22px', overflow: 'hidden' }}>
                <img
                  src="https://cdn.web.imagine.art/imagine-one/test/assets/event.png"
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,4,30,.80) 0%, rgba(10,4,30,.38) 55%, rgba(10,4,30,.15) 100%)',
                  }}
                />
              </div>

              {/* Text content — floats at z=70 */}
              <CardItem translateZ={70} style={{ position: 'relative', width: '100%', padding: '52px 48px', zIndex: 2 }}>
                <h3 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-.015em', margin: '0 0 12px', color: '#fff' }}>
                  Host an Event with Us
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
                  Pitch a workshop, meetup, or creative session in your city. Approved partners get platform credits, speakers, and full ImagineArt promotion to make it unforgettable.
                </p>
                <NoiseBackground gradientColors={['#8A3FFC', '#C8AAFF', '#F9B8D4', '#FFD4A8', '#ffffff']}>
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
                    Pitch Your Event
                  </button>
                </NoiseBackground>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Live sessions card */}
          <div
            className="ia-schedule-card"
            style={{
              borderRadius: '22px',
              border: '1px solid var(--clr-border)',
              background: 'var(--clr-bg-2)',
              padding: '34px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', color: 'var(--clr-fg-3)', marginBottom: '6px', letterSpacing: '.06em' }}>
                LIVE EVERY WEEK
              </div>
              <div style={{ fontSize: '19px', fontWeight: 500, color: 'var(--clr-fg)', letterSpacing: '-.015em' }}>
                3 sessions a week. Real people. Real answers.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { day: 'Wed', label: 'Office Hours', detail: 'The team goes live — bring your questions, workflows, and ideas.' },
                { day: 'Thu', label: 'Imagine with ImagineArt', detail: 'Podcasts with top creators and live community challenges.' },
                { day: 'Fri', label: 'Expert Sessions', detail: 'Hands-on with Creative Technologists — Film Studio deep-dives and workflow tips.' },
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
                      background: 'var(--clr-card)',
                      border: '1px solid var(--clr-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--clr-fg-3)',
                      letterSpacing: '.04em',
                    }}
                  >
                    {s.day}
                  </div>
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--clr-fg)', marginBottom: '2px' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--clr-fg-3)', lineHeight: 1.45 }}>
                      {s.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://discord.gg/H724XtQXg7"
                target="_blank"
                rel="noopener noreferrer"
                className="ia-community-btn"
              >
                Stay Updated on Discord
              </a>
              <a
                href="https://luma.com/Imagine.Art"
                target="_blank"
                rel="noopener noreferrer"
                className="ia-community-btn"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
