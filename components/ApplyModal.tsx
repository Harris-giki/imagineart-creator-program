'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void
    }
  }
}

const rewards = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    text: 'Earn up to 200,000 credits per month, performance-based',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: 'Full premium ImagineArt platform access from day one',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    text: '15% revenue share on affiliate referrals via Impact',
  },
]

const bounties = [
  { deal: '$1,000 enterprise deal', payout: '$200 payout' },
  { deal: '$10,000 enterprise deal', payout: '$2,000 payout' },
  { deal: '$20,000 enterprise deal', payout: '$4,000 payout' },
]

export default function ApplyModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a[href="#apply"]')
      if (target) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  useEffect(() => {
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.style.paddingRight = open ? `${scrollbarW}px` : ''
  }, [open])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'rgba(10,6,20,.48)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          animation: 'ia-fade-in .25s ease',
        }}
      />

      {/* Modal centering wrapper */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 201,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          pointerEvents: 'none',
        }}
      >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--clr-bg)',
          borderRadius: '24px',
          padding: '36px 36px 32px',
          boxShadow: '0 40px 100px rgba(0,0,0,.22)',
          animation: 'ia-modal-in .38s cubic-bezier(.16,1,.3,1) forwards',
          pointerEvents: 'auto',
        }}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid var(--clr-border)',
            background: 'var(--clr-bg-2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--clr-fg-3)',
            padding: 0,
          }}
          aria-label="Close"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(22px,4vw,30px)',
            fontWeight: 500,
            letterSpacing: '-.025em',
            lineHeight: 1.12,
            color: 'var(--clr-fg)',
            margin: '0 0 12px',
            paddingRight: '32px',
          }}
        >
          Join the ImagineArt<br />Creator Partner Program
        </h2>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.65,
            color: 'var(--clr-fg-2)',
            margin: '0 0 26px',
          }}
        >
          Create with ImagineArt, share your work with your audience, and earn through credits and enterprise referral bonuses.
        </p>

        {/* Rewards card */}
        <div
          style={{
            background: 'var(--clr-bg-2)',
            border: '1px solid var(--clr-border)',
            borderRadius: '16px',
            padding: '22px 22px 18px',
            marginBottom: '18px',
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--clr-fg)', marginBottom: '14px', letterSpacing: '-.01em' }}>
            Rewards
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {rewards.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#8A3FFC', flexShrink: 0, marginTop: '1px' }}>{r.icon}</span>
                <span style={{ fontSize: '14px', color: 'var(--clr-fg-2)', lineHeight: 1.5 }}>{r.text}</span>
              </div>
            ))}
          </div>

          <div style={{ height: '1px', background: 'var(--clr-border)', margin: '18px 0' }} />

          <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--clr-fg)', marginBottom: '14px', letterSpacing: '-.01em' }}>
            Enterprise Referrals
          </div>
          <div
            style={{
              fontSize: '12.5px',
              color: 'var(--clr-fg-2)',
              lineHeight: 1.6,
              marginBottom: '12px',
            }}
          >
            Refer a qualified enterprise lead and earn <strong style={{ color: 'var(--clr-fg)', fontWeight: 500 }}>20% of the signed contract value</strong> as a one-time payout.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {bounties.map((b, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 14px',
                  borderRadius: '10px',
                  background: 'var(--clr-card)',
                  border: '1px solid var(--clr-border)',
                }}
              >
                <span style={{ fontSize: '13px', color: 'var(--clr-fg-2)' }}>{b.deal}</span>
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 500,
                    color: '#8A3FFC',
                    background: 'rgba(138,63,252,.08)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                  }}
                >
                  {b.payout}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              setOpen(false)
              setTimeout(() => {
                window.Tally?.openPopup('rjY7yN', {
                  layout: 'modal',
                  width: 700,
                  overlay: true,
                  animateClose: true,
                })
              }, 200)
            }}
            style={{
              width: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14.5px',
              fontWeight: 500,
              cursor: 'pointer',
              border: 'none',
              color: 'var(--clr-btn-dark-fg)',
              background: 'var(--clr-btn-dark-bg)',
              padding: '13px 24px',
              borderRadius: '999px',
              textAlign: 'center',
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
      </div>
    </>
  )
}
