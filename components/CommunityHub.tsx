'use client'

import { useEffect, useRef } from 'react'
import BorderMagicBtn from '@/components/ui/border-magic-btn'
import SectionHeading from '@/components/SectionHeading'
import { DitherShader } from '@/components/ui/dither-shader'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

declare global {
  interface Window {
    Tally?: { openPopup: (id: string, opts?: Record<string, unknown>) => void }
  }
}

const stats = [
  { count: 2500, suffix: '+', label: 'Active creators' },
  { count: 4.5, decimals: 1, suffix: 'B+', label: 'Generations' },
  { count: 145, suffix: '+', label: 'Countries represented' },
]

const sessions = [
  { day: 'Wed', label: 'Office Hours', detail: 'The team goes live — bring your questions, workflows, and ideas.' },
  { day: 'Thu', label: 'Imagine with ImagineArt', detail: 'Podcasts with top creators and live community challenges.' },
  { day: 'Fri', label: 'Expert Sessions', detail: 'Hands-on with Creative Technologists — Film Studio deep-dives and workflow tips.' },
]

export default function CommunityHub() {
  const statsRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = statsRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            observer.unobserve(entry.target)
            container.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
              const target = parseFloat(el.dataset.count || '0')
              const dec = parseInt(el.dataset.decimals || '0', 10)
              const suf = el.dataset.suffix || ''
              const t0 = performance.now()
              const dur = 1600
              const ease = (t: number) => 1 - Math.pow(1 - t, 3)
              const step = (now: number) => {
                const p = Math.min(1, (now - t0) / dur)
                el.textContent = (target * ease(p)).toFixed(dec) + suf
                if (p < 1) requestAnimationFrame(step)
              }
              requestAnimationFrame(step)
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="community" className="ia-hub-section">

      {/* Heading */}
      <div className="ia-hub-head">
        <SectionHeading
          headline="Learn and Grow"
          accent="with Us"
          lineBreakBeforeAccent
          accentColor="gray"
          align="left"
          size="lg"
          eyebrow="COMMUNITY"
          subline="Live sessions, real events, a global community, and the numbers to back it up."
        />
      </div>

      {/* 3-column center-stage grid */}
      <div className="ia-hub-grid">

        {/* LEFT COLUMN */}
        <div className="ia-hub-col">

          {/* Live Every Week */}
          <div className="ia-hub-card ia-hub-card-sessions" style={{ position: 'relative', overflow: 'hidden' }}>
            <DottedGlowBackground
              gap={12}
              radius={1.4}
              speedMin={0.3}
              speedMax={1.2}
              speedScale={1}
              backgroundOpacity={0}
              dotColor="rgba(100,100,130,0.45)"
              glowColor="rgba(138,63,252,0.75)"
              opacity={0.85}
              style={{ position: 'absolute', inset: 0 }}
            />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="ia-hub-eyebrow">LIVE EVERY WEEK</div>
              <p className="ia-hub-card-title">3 sessions a week. Real people. Real answers.</p>
              <div className="ia-hub-sessions">
                {sessions.map((s, i) => (
                  <div key={i} className="ia-hub-session-row">
                    <div className="ia-hub-session-day">{s.day}</div>
                    <div>
                      <div className="ia-hub-session-label">{s.label}</div>
                      <div className="ia-hub-session-detail">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Refer a Team */}
          <div className="ia-hub-card">
            <div className="ia-hub-eyebrow">PARTNER PROGRAM</div>
            <h3 className="ia-hub-refer-h3">Get 20% by referring a team ready to scale on AI.</h3>
            <p className="ia-hub-refer-body">
              Refer agencies, production houses or in-house teams of 10 or more. Earn a referral bonus when they come on board.
            </p>
            <a
              href="https://imagineart.notion.site/ImagineArt-Enterprise-Referral-Program-Creator-Partners-2ed0152cd76980dea449fa36e1c41569?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
            >
              <span className="ia-events-shimmer">Refer a Team →</span>
            </a>
          </div>

        </div>

        {/* CENTER COLUMN — Host an Event hero with 3D tilt */}
        {/*
         * ia-hub-hero CSS: border-radius:0, overflow:visible, z-index:1
         * :hover raises to z-index:3 so the tilted card lifts above neighbours.
         * CardBody also overflow:visible so translateZ depth fully renders.
         * Sharp corners (border-radius:0) match the section.
         */}
        <div className="ia-hub-hero">
          <CardContainer style={{ width: '100%', flex: 1, overflow: 'visible' }}>
            <CardBody style={{
              width: '100%',
              height: '100%',
              minHeight: '520px',
              position: 'relative',
              borderRadius: '0',
              overflow: 'visible',
            }}>
              {/* Layer 1 — background image, sits deepest */}
              <CardItem translateZ={20} style={{ position: 'absolute', inset: 0 }}>
                <img
                  src="https://cdn.web.imagine.art/imagine-one/test/assets/event.png"
                  alt=""
                  className="ia-hub-hero-img"
                />
                <div className="ia-hub-hero-overlay" />
              </CardItem>

              {/* Layer 2 — text + CTA, floats 50px above the image */}
              <CardItem translateZ={70} style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                <div className="ia-hub-hero-content">
                  <h3 className="ia-hub-hero-h3">Host an Event with Us</h3>
                  <p className="ia-hub-hero-body">
                    Pitch a workshop, meetup, or creative session in your city. Approved partners get platform credits, speakers, and full ImagineArt promotion to make it unforgettable.
                  </p>
                  <div className="ia-bm-wrap">
                    <BorderMagicBtn
                      onClick={() => window.Tally?.openPopup('0Q6GR6', { layout: 'modal', width: 700, overlay: true, animateClose: true })}
                    >
                      Pitch Your Event
                    </BorderMagicBtn>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* RIGHT COLUMN */}
        <div className="ia-hub-col">

          {/* Community Stats */}
          <div className="ia-hub-card ia-hub-card-stats" ref={statsRef}>
            <div className="ia-hub-eyebrow">COMMUNITY STATS</div>
            <div className="ia-hub-stats">
              {stats.map((s, i) => (
                <div key={i} className="ia-hub-stat">
                  <div
                    className="ia-hub-stat-num"
                    data-count={s.count}
                    data-decimals={s.decimals ?? 0}
                    data-suffix={s.suffix}
                  >
                    0
                  </div>
                  <div className="ia-hub-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stay Connected — DitherShader behind content */}
          <div className="ia-hub-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <DitherShader
              src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200&auto=format&fit=crop"
              gridSize={3}
              ditherMode="bayer"
              colorMode="duotone"
              primaryColor="#080810"
              secondaryColor="#2a0d5e"
              threshold={0.48}
              objectFit="cover"
              style={{ position: 'absolute', inset: 0, opacity: 0.9 }}
            />
            {/*
             * flex: 1 makes this wrapper fill the card's available height.
             * marginTop: auto on the btns pushes them to the bottom, creating
             * breathing room between the paragraph and the two links.
             */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
              <div className="ia-hub-eyebrow">STAY CONNECTED</div>
              <p className="ia-hub-card-title">Join the conversation — wherever you prefer to hang out.</p>
              <div className="ia-hub-connect-btns" style={{ marginTop: 'auto' }}>
                <a
                  href="https://discord.gg/H724XtQXg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
                >
                  <span className="ia-events-shimmer">Stay Updated on Discord →</span>
                </a>
                <a
                  href="https://luma.com/Imagine.Art"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
                >
                  <span className="ia-events-shimmer">Upcoming Events →</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
