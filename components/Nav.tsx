'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Who it\'s for', href: '#who' },
  { label: 'Rewards',       href: '#rewards' },
  { label: 'Community',     href: '#creators' },
  { label: 'FAQ',           href: '#faq' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)
  const ease = '0.52s cubic-bezier(.16,1,.3,1)'

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '12px 20px' : '0',
          transition: `padding ${ease}`,
          pointerEvents: 'none',
        }}
      >
        <nav
          className={scrolled ? 'ia-nav-scrolled' : ''}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px',
            padding: scrolled ? '10px 20px' : '15px 30px',
            background: scrolled ? 'rgba(12,12,15,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderTop:    scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderLeft:   scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderRight:  scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderBottom: '1px solid transparent',
            borderRadius: scrolled ? '18px' : '0',
            boxShadow: scrolled ? '0 12px 48px rgba(0,0,0,0.4)' : 'none',
            transition: [
              `padding ${ease}`,
              `border-radius ${ease}`,
              `background ${ease}`,
              `box-shadow ${ease}`,
            ].join(', '),
          }}
        >
          {/* Logo */}
          <a href="https://www.imagine.art" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flex: 'none' }}>
            <img
              src="/imagineart-black-logo.png"
              alt="ImagineArt"
              className="ia-logo-img"
              style={{ height: '26px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Desktop links */}
          <div className="ia-nav-links">
            {links.map((l) => (
              <a key={l.href} className="ia-link" href={l.href} style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.82)' }}>
                {l.label}
              </a>
            ))}
            <a className="ia-events-link" href="https://luma.com/Imagine.Art" target="_blank" rel="noopener noreferrer">
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '8px', height: '8px' }}>
                <span style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: '#8A3FFC', animation: 'ia-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite' }} />
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8A3FFC', flexShrink: 0 }} />
              </span>
              Events
            </a>
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 'none' }}>
            <a
              className="ia-nav-launch"
              href="https://www.imagine.art"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '14.5px',
                fontWeight: 500,
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.82)',
                padding: '10px 16px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.22)',
                whiteSpace: 'nowrap',
              }}
            >
              Launch app
            </a>

            <a
              className="ia-btn-dark ia-nav-cta"
              href="#apply"
              style={{
                fontSize: '14.5px',
                fontWeight: 600,
                textDecoration: 'none',
                color: '#161616',
                background: '#ffffff',
                padding: '11px 20px',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
              }}
            >
              Apply now
            </a>

            {/* Hamburger */}
            <button
              className="ia-nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`ia-mobile-nav${open ? ' open' : ''}`}
        style={{ top: scrolled ? '76px' : '57px' }}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="https://www.imagine.art" target="_blank" rel="noopener noreferrer" onClick={close}>Launch app</a>
        <a href="#apply" onClick={close} style={{ fontWeight: 600, color: '#8A3FFC' }}>Apply now</a>
        <a
          href="https://luma.com/Imagine.Art"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8A3FFC' }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8A3FFC', flexShrink: 0 }} />
          Events
        </a>
      </div>
    </>
  )
}
