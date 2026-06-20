'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: "Who it's for", href: '#who' },
  { label: 'Rewards',      href: '#rewards' },
  { label: 'Community',    href: '#creators' },
  { label: 'FAQ',          href: '#faq' },
]

const spring = '0.48s cubic-bezier(0.22,1,0.36,1)'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          padding: scrolled ? '10px 0' : '16px 0',
          transition: `padding ${spring}`,
          pointerEvents: 'none',
        }}
      >
        <nav
          style={{
            pointerEvents: 'auto',
            margin: '0 auto',
            maxWidth: scrolled ? 'min(1180px, calc(100vw - 32px))' : '100%',
            padding: scrolled ? '8px 16px' : '0 clamp(20px, 5vw, 60px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            borderRadius: scrolled ? '22px' : '0',
            background: scrolled ? 'rgba(10,10,11,0.72)' : 'transparent',
            backdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'none',
            boxShadow: scrolled
              ? '0 20px 48px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.08)'
              : 'none',
            transition: [
              `max-width ${spring}`,
              `padding ${spring}`,
              `border-radius ${spring}`,
              `background ${spring}`,
              `box-shadow ${spring}`,
            ].join(', '),
          }}
        >
          {/* Logo */}
          <a
            href="https://www.imagine.art"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
          >
            <img
              src="/imagineart-black-logo.png"
              alt="ImagineArt"
              className="ia-logo-img"
              style={{ height: '26px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Desktop links */}
          <div className="ia-nav-links" style={{ alignItems: 'center', gap: '2px' }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: '6px 13px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease, background 0.15s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#fff'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://luma.com/Imagine.Art"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '6px 13px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              <span className="ia-events-shimmer">Events</span>
            </a>
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <a
              className="ia-nav-launch"
              href="https://www.imagine.art"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '13.5px',
                fontWeight: 500,
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.65)',
                padding: '7px 16px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.16)',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
            >
              Launch app
            </a>

            <a
              className="ia-nav-cta"
              href="#apply"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '34px',
                padding: '0 18px',
                borderRadius: '999px',
                fontSize: '13.5px',
                fontWeight: 500,
                textDecoration: 'none',
                background: '#ffffff',
                color: 'rgb(10,10,11)',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              }}
            >
              Apply now
            </a>

            {/* Animated hamburger */}
            <button
              className="ia-nav-burger"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.85)',
                padding: 0,
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                <span style={{
                  display: 'block',
                  width: '18px',
                  height: '1.5px',
                  borderRadius: '2px',
                  background: 'currentColor',
                  transition: 'transform 250ms ease',
                  transform: open ? 'translateY(3.25px) rotate(45deg)' : 'none',
                }} />
                <span style={{
                  display: 'block',
                  width: '18px',
                  height: '1.5px',
                  borderRadius: '2px',
                  background: 'currentColor',
                  transition: 'transform 250ms ease',
                  transform: open ? 'translateY(-3.25px) rotate(-45deg)' : 'none',
                }} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 101,
            background: '#0a0a0b',
            display: 'flex',
            flexDirection: 'column',
            animation: 'ia-mobile-in 0.22s cubic-bezier(0.4,0,0.2,1) forwards',
          }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', flexShrink: 0 }}>
            <img
              src="/imagineart-black-logo.png"
              alt="ImagineArt"
              style={{ height: '22px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
            />
            <button
              onClick={close}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'rgba(255,255,255,0.55)' }}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Centered links */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', paddingBottom: '48px' }}>
            {[...links, { label: 'Events', href: 'https://luma.com/Imagine.Art' }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '10px 32px',
                  borderRadius: '10px',
                  fontSize: '22px',
                  fontWeight: 300,
                  letterSpacing: '-0.2px',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}

            <div style={{ width: 'calc(100% - 48px)', height: '1px', background: 'rgba(255,255,255,0.08)', margin: '16px 0' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 24px' }}>
              <a
                href="https://www.imagine.art"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                Launch app
              </a>
              <a
                href="#apply"
                onClick={close}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '44px',
                  padding: '0 28px',
                  borderRadius: '14px',
                  fontSize: '14px',
                  fontWeight: 500,
                  background: '#ffffff',
                  color: 'rgb(10,10,11)',
                  textDecoration: 'none',
                }}
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
