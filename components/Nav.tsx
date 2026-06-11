'use client'

import { useState } from 'react'

const links = [
  { label: 'Rewards',     href: '#rewards' },
  { label: "Who it's for", href: '#who' },
  { label: 'Community',   href: '#creators' },
  { label: 'FAQ',         href: '#faq' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
          padding: '15px 30px',
          background: 'rgba(255,255,255,.78)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid #EFEFEF',
        }}
      >
        {/* Logo */}
        <a href="#top" onClick={close} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flex: 'none' }}>
          <img src="/imagineart-black-logo.png" alt="ImagineArt" style={{ height: '26px', width: 'auto', display: 'block' }} />
        </a>

        {/* Desktop links */}
        <div className="ia-nav-links">
          {links.map((l) => (
            <a key={l.href} className="ia-link" href={l.href} style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {l.label}
            </a>
          ))}
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
              color: '#161616',
              padding: '10px 16px',
              borderRadius: '999px',
              border: '1px solid #E4E4E4',
              whiteSpace: 'nowrap',
            }}
          >
            Launch app
          </a>

          <a
            className="ia-events-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '8px', height: '8px' }}>
              <span style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: '#8A3FFC', animation: 'ia-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite' }} />
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8A3FFC', flexShrink: 0 }} />
            </span>
            Events
          </a>

          <a
            className="ia-btn-dark"
            href="#apply"
            style={{
              fontSize: '14.5px',
              fontWeight: 600,
              textDecoration: 'none',
              color: '#fff',
              background: '#0F0F0F',
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

      {/* Mobile menu */}
      <div className={`ia-mobile-nav${open ? ' open' : ''}`}>
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
