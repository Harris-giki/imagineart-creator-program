'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

const links = [
  { label: 'Rewards',     href: '#rewards' },
  { label: "Who it's for", href: '#who' },
  { label: 'Community',   href: '#creators' },
  { label: 'FAQ',         href: '#faq' },
]

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  // Smooth easing shared across all animated properties
  const ease = '0.52s cubic-bezier(.16,1,.3,1)'

  return (
    <>
      {/*
        Outer wrapper: fixed, full-width, zero height.
        `padding` grows on scroll — this is what makes the nav shrink
        inward from all four sides simultaneously (much smoother than
        animating left/right/top independently).
      */}
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
            // Inner padding shrinks slightly when floating
            padding: scrolled ? '10px 20px' : '15px 30px',
            // Background cross-fades
            background: scrolled ? 'rgba(20, 20, 26, 0.96)' : 'var(--clr-nav-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            // Border: keep 1px in both states so color can animate (no jumping)
            borderBottom: scrolled ? '1px solid transparent' : '1px solid var(--clr-nav-border)',
            borderTop: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderLeft: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderRight: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            // Medium rounded corners when floating
            borderRadius: scrolled ? '18px' : '0',
            // Depth shadow when floating
            boxShadow: scrolled ? '0 12px 48px rgba(0,0,0,0.28)' : 'none',
            transition: [
              `padding ${ease}`,
              `border-radius ${ease}`,
              `background ${ease}`,
              `box-shadow ${ease}`,
              `border-color ${ease}`,
            ].join(', '),
          }}
        >
          {/* Logo */}
          <a href="https://www.imagine.art" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flex: 'none' }}>
            <img src="/imagineart-black-logo.png" alt="ImagineArt" className="ia-logo-img" style={{ height: '26px', width: 'auto', display: 'block' }} />
          </a>

          {/* Desktop links */}
          <div className="ia-nav-links">
            {links.map((l) => (
              <a key={l.href} className="ia-link" href={l.href} style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
                {l.label}
              </a>
            ))}
            <a className="ia-events-link" href="#" target="_blank" rel="noopener noreferrer">
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '8px', height: '8px' }}>
                <span style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: '#8A3FFC', animation: 'ia-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite' }} />
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8A3FFC', flexShrink: 0 }} />
              </span>
              Events
            </a>
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 'none' }}>
            <button className="ia-theme-toggle" onClick={toggle} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              className="ia-nav-launch"
              href="https://www.imagine.art"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '14.5px',
                fontWeight: 500,
                textDecoration: 'none',
                color: scrolled ? 'rgba(255,255,255,0.82)' : 'var(--clr-fg)',
                padding: '10px 16px',
                borderRadius: '999px',
                border: scrolled ? '1px solid rgba(255,255,255,0.16)' : '1px solid var(--clr-border)',
                whiteSpace: 'nowrap',
                transition: `color ${ease}, border-color ${ease}`,
              }}
            >
              Launch app
            </a>

            <a
              className="ia-btn-dark"
              href="#apply"
              style={{
                fontSize: '14.5px',
                fontWeight: 600,
                textDecoration: 'none',
                color: scrolled ? '#161616' : 'var(--clr-btn-dark-fg)',
                background: scrolled ? '#ffffff' : 'var(--clr-btn-dark-bg)',
                padding: '11px 20px',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
                transition: `background ${ease}, color ${ease}`,
              }}
            >
              Apply now
            </a>

            {/* Hamburger */}
            <button
              className="ia-nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? 'rgba(255,255,255,0.85)' : 'var(--clr-fg)' }}
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
        <a
          href="#"
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
