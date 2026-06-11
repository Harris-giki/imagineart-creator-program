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
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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
          background: '#fff',
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
            border: '1px solid #E8E8E8',
            background: '#F8F8F8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            padding: 0,
          }}
          aria-label="Close"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '10.5px',
            fontWeight: 500,
            letterSpacing: '.12em',
            color: '#8A3FFC',
            background: 'rgba(138,63,252,.08)',
            border: '1px solid rgba(138,63,252,.18)',
            borderRadius: '999px',
            padding: '5px 12px',
            marginBottom: '18px',
          }}
        >
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8A3FFC', flexShrink: 0 }} />
          CREATIVE PARTNER PROGRAM
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(22px,4vw,30px)',
            fontWeight: 500,
            letterSpacing: '-.025em',
            lineHeight: 1.12,
            color: '#161616',
            margin: '0 0 12px',
            paddingRight: '32px',
          }}
        >
          Join the ImagineArt<br />Creative Partner Program
        </h2>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.65,
            color: '#6A6A6A',
            margin: '0 0 26px',
          }}
        >
          Share ImagineArt with your audience and earn through credits, affiliate commissions, and enterprise referral bonuses.
        </p>

        {/* Rewards card */}
        <div
          style={{
            background: '#F8F8F8',
            border: '1px solid #EBEBEB',
            borderRadius: '16px',
            padding: '22px 22px 18px',
            marginBottom: '18px',
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 500, color: '#161616', marginBottom: '14px', letterSpacing: '-.01em' }}>
            Rewards
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {rewards.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#8A3FFC', flexShrink: 0, marginTop: '1px' }}>{r.icon}</span>
                <span style={{ fontSize: '14px', color: '#444', lineHeight: 1.5 }}>{r.text}</span>
              </div>
            ))}
          </div>

          <div style={{ height: '1px', background: '#E4E4E4', margin: '18px 0' }} />

          <div style={{ fontSize: '13px', fontWeight: 500, color: '#161616', marginBottom: '14px', letterSpacing: '-.01em' }}>
            Enterprise Referrals
          </div>
          <div
            style={{
              fontSize: '12.5px',
              color: '#6A6A6A',
              lineHeight: 1.6,
              marginBottom: '12px',
            }}
          >
            Refer a qualified enterprise lead and earn <strong style={{ color: '#161616', fontWeight: 500 }}>20% of the signed contract value</strong> as a one-time payout.
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
                  background: '#fff',
                  border: '1px solid #E8E8E8',
                }}
              >
                <span style={{ fontSize: '13px', color: '#555' }}>{b.deal}</span>
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

        {/* Affiliate note */}
        <div
          style={{
            fontSize: '13px',
            color: '#888',
            lineHeight: 1.6,
            marginBottom: '24px',
            padding: '12px 16px',
            background: '#F8F8F8',
            borderRadius: '10px',
            border: '1px solid #EBEBEB',
          }}
        >
          Want to earn through referrals? Join our affiliate program on Impact and start earning 15% revenue share with your unique link.
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
              flex: 1,
              minWidth: '160px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14.5px',
              fontWeight: 500,
              cursor: 'pointer',
              border: 'none',
              color: '#fff',
              background: '#161616',
              padding: '13px 24px',
              borderRadius: '999px',
              textAlign: 'center',
            }}
          >
            Apply Now
          </button>
          <a
            href="http://app.impact.com/campaign-campaign-info-v2/ImagineArt-Inc.brand"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              minWidth: '160px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '14.5px',
              fontWeight: 500,
              textDecoration: 'none',
              color: '#8A3FFC',
              background: 'rgba(138,63,252,.07)',
              border: '1px solid rgba(138,63,252,.2)',
              padding: '13px 24px',
              borderRadius: '999px',
              textAlign: 'center',
            }}
          >
            Affiliate Program
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
      </div>
    </>
  )
}
