'use client'

import { useState } from 'react'
import { faqData } from '@/lib/data'
import SectionSparkles from '@/components/SectionSparkles'

declare global {
  interface Window {
    Tally?: { openPopup: (id: string, opts?: Record<string, unknown>) => void }
  }
}

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        color: 'var(--clr-fg)',
        transition: 'background 0.2s ease',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line
          x1="7" y1="1" x2="7" y2="13"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
          style={{
            transition: 'transform 240ms cubic-bezier(0.2, 0.7, 0.2, 1), opacity 200ms ease',
            transformOrigin: 'center',
            transform: open ? 'scaleY(0)' : 'scaleY(1)',
            opacity: open ? 0 : 1,
          }}
        />
      </svg>
    </span>
  )
}

interface FaqRowProps {
  q: string
  a: string
  linkText?: string
  linkHref?: string
  tallyId?: string
  defaultOpen?: boolean
}

function FaqRow({ q, a, linkText, linkHref, tallyId, defaultOpen = false }: FaqRowProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div style={{ borderBottom: '1px solid var(--clr-border)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '24px 0',
          textAlign: 'left',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          color: 'var(--clr-fg)',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(16px, 1.4vw, 18px)',
            fontWeight: 500,
            lineHeight: 1.38,
            letterSpacing: '-.01em',
            color: open ? '#C8AAFF' : 'var(--clr-fg)',
            transition: 'color 240ms ease',
          }}
        >
          {q}
        </span>
        <PlusMinus open={open} />
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 280ms cubic-bezier(0.2, 0.7, 0.2, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{
              fontSize: '15.5px',
              lineHeight: 1.72,
              color: 'var(--clr-fg-2)',
              margin: 0,
              paddingBottom: linkText ? '12px' : '24px',
              maxWidth: '68ch',
            }}
          >
            {a}
          </p>
          {linkText && linkHref && (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ia-events-shimmer"
              style={{
                display: 'inline-block',
                fontSize: '14.5px',
                fontWeight: 500,
                textDecoration: 'none',
                marginBottom: '24px',
              }}
            >
              {linkText}
            </a>
          )}
          {linkText && tallyId && (
            <button
              onClick={() =>
                window.Tally?.openPopup(tallyId, {
                  layout: 'modal',
                  width: 700,
                  overlay: true,
                  animateClose: true,
                })
              }
              className="ia-events-shimmer"
              style={{
                display: 'inline-block',
                fontSize: '14.5px',
                fontWeight: 500,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                marginBottom: '24px',
              }}
            >
              {linkText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="ia-sec ia-faq-section-pb"
      style={{ borderTop: '1px solid var(--clr-border)', paddingBottom: '100px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="ia-faq-layout">

          {/* Left: heading */}
          <div className="ia-faq-heading">
            <h2
              style={{
                fontSize: 'clamp(30px, 3.8vw, 50px)',
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: '-.025em',
                margin: '0 0 0',
                color: 'var(--clr-fg)',
              }}
            >
              Got any questions{' '}
              <span style={{ color: 'rgba(237,237,232,0.28)' }}>left?</span>
            </h2>
            <SectionSparkles width="min(340px, 100%)" style={{ margin: '0 0 -18px' }} />
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--clr-fg-2)',
                margin: 0,
                maxWidth: '30ch',
                position: 'relative',
                zIndex: 1,
              }}
            >
              We&apos;ve answered the most common questions below.
            </p>
          </div>

          {/* Right: accordion */}
          <div style={{ flex: 1, minWidth: 0, borderTop: '1px solid var(--clr-border)' }}>
            {faqData.map((f, i) => (
              <FaqRow
                key={i}
                q={f.q}
                a={f.a}
                linkText={f.linkText}
                linkHref={f.linkHref}
                tallyId={f.tallyId}
                defaultOpen={i === 0}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
