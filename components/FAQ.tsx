'use client'

import { useState } from 'react'
import RevealWrapper from './RevealWrapper'
import { faqData } from '@/lib/data'

declare global {
  interface Window {
    Tally?: { openPopup: (id: string, opts?: Record<string, unknown>) => void }
  }
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="faq" className="ia-sec-sm" style={{ paddingBottom: '96px' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <RevealWrapper style={{ marginBottom: '52px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px,3.8vw,48px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: 0,
            }}
          >
            Common Questions.
          </h2>
        </RevealWrapper>

        <RevealWrapper>
          {faqData.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ borderBottom: '1px solid #EAEAEA' }}>
                <div
                  className="ia-faq-q"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    padding: '26px 4px',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(18px,2.2vw,23px)',
                      fontWeight: 500,
                      letterSpacing: '-.01em',
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      flex: 'none',
                      fontSize: '26px',
                      fontWeight: 300,
                      color: '#8A3FFC',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform .3s cubic-bezier(.16,1,.3,1)',
                    }}
                  >
                    +
                  </span>
                </div>
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? '320px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height .4s cubic-bezier(.16,1,.3,1), opacity .4s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.65,
                      color: '#5C5C5C',
                      margin: 0,
                      padding: f.linkText ? '0 4px 16px' : '0 4px 28px',
                      maxWidth: '680px',
                    }}
                  >
                    {f.a}
                  </p>
                  {f.linkText && f.linkHref && (
                    <a
                      href={f.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        fontSize: '14.5px',
                        fontWeight: 500,
                        color: '#8A3FFC',
                        textDecoration: 'none',
                        marginBottom: '28px',
                        marginLeft: '4px',
                      }}
                    >
                      {f.linkText}
                    </a>
                  )}
                  {f.linkText && f.tallyId && (
                    <button
                      onClick={() => window.Tally?.openPopup(f.tallyId!, { layout: 'modal', width: 700, overlay: true, animateClose: true })}
                      style={{
                        display: 'inline-block',
                        fontSize: '14.5px',
                        fontWeight: 500,
                        color: '#8A3FFC',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        marginBottom: '28px',
                        marginLeft: '4px',
                      }}
                    >
                      {f.linkText}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </RevealWrapper>
      </div>
    </section>
  )
}
