'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'

const benefits = [
  {
    num: '(01)', title: 'Fuel', cat: 'Credits',
    desc: '20K → 200K credits / month. Premium from day one.',
    cardTitle: 'Fuel that grows with you',
    cardBody:  'Start with 20K credits and unlock up to 200K every month as you create. Premium access from day one, no waiting, no limits on your ambition.',
    color: 'rgb(176,137,253)',
  },
  {
    num: '(02)', title: 'Spotlight', cat: 'Exposure',
    desc: 'Your best work, amplified across every channel.',
    cardTitle: 'Your work, in the spotlight',
    cardBody:  'We put your best work in front of the world — case studies, social features, and co-marketing campaigns amplified across every ImagineArt channel.',
    color: 'rgb(176,137,253)',
  },
  {
    num: '(03)', title: 'Community', cat: 'Lead',
    desc: 'Pitch a workshop — we back it, fully.',
    cardTitle: 'Lead in your city',
    cardBody:  "Pitch a workshop or meetup and we'll back it — platform credits, speakers, and full ImagineArt promotion to bring your community together.",
    color: 'rgb(176,137,253)',
  },
  {
    num: '(04)', title: 'Revenue', cat: 'Get Paid',
    desc: 'Up to 25% revenue share + enterprise bonuses.',
    cardTitle: 'Get paid as you rise',
    cardBody:  'Earn up to 25% revenue share as a Creative Partner, plus affiliate access and enterprise bonuses when you bring studios and agencies on board.',
    color: 'rgb(176,137,253)',
  },
]

export default function WhatYoullGet() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx(prev => prev === i ? null : i)

  return (
    <section id="rewards" className="ia-sec" style={{ background: 'var(--clr-bg)' }}>
      <div className="ia-wyg-wrap">

        <header className="ia-wyg-head">
          <SectionHeading
            headline="What's In It"
            accent="For You"
            lineBreakBeforeAccent
            accentColor="gray"
            align="left"
            size="xl"
            subline="Everything you need to create boldly, grow faster, and turn your craft into income."
          />
          <div className="ia-wyg-deck" />
        </header>

        <ul className="ia-wyg-index">
          {benefits.map((b, i) => {
            const isOpen = openIdx === i
            return (
              <li key={b.title} className="ia-wyg-item">
                <div
                  className={`ia-wyg-row${isOpen ? ' open' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) }
                  }}
                  style={{ '--ia-wyg-c': b.color } as React.CSSProperties}
                >
                  <span className="ia-wyg-num">{b.num}</span>
                  <h3 className="ia-wyg-title">{b.title}</h3>
                  <div className="ia-wyg-cat">
                    <span className="ia-wyg-eyebrow">{b.cat}</span>
                    <span className="ia-wyg-desc">{b.desc}</span>
                  </div>
                  <span className="ia-wyg-plus" aria-hidden="true" />
                </div>
                <div
                  className={`ia-wyg-drawer${isOpen ? ' open' : ''}`}
                  style={{ '--ia-wyg-c': b.color } as React.CSSProperties}
                >
                  <p className="ia-wyg-drawer-body">{b.cardBody}</p>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}
