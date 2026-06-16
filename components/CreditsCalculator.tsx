'use client'

import { useState, useRef, useCallback } from 'react'
import RevealWrapper from './RevealWrapper'

function igBonus(v: number) {
  return v >= 10000000 ? 130000 : v >= 2500000 ? 80000 : v >= 1000000 ? 50000 : v >= 250000 ? 30000 : 0
}
function xBonus(v: number) {
  return v >= 50000 ? 80000 : v >= 20000 ? 50000 : 0
}
function liBonus(v: number) {
  return v >= 70000 ? 100000 : v >= 50000 ? 50000 : v >= 20000 ? 30000 : 0
}
function rdBonus(v: number) {
  return v >= 2000 ? 80000 : v >= 1000 ? 50000 : v >= 500 ? 30000 : 0
}
function totalFrom(ig: number, x: number, li: number, reddit: number, wf: boolean) {
  return Math.min(200000, 20000 + igBonus(ig) + xBonus(x) + liBonus(li) + rdBonus(reddit) + (wf ? 10000 : 0))
}
function fmtCredits(n: number) {
  return n.toLocaleString('en-US')
}
function fmtViews(n: number) {
  if (n >= 1000000) return (n % 1000000 === 0 ? (n / 1000000) : (n / 1000000).toFixed(1)) + 'M'
  if (n >= 1000) return Math.round(n / 1000) + 'K'
  return String(n)
}
function bonusFmt(b: number) {
  return b > 0 ? '+' + (b / 1000) + 'K' : '—'
}
function bonusColor(b: number) {
  return b > 0 ? '#8A3FFC' : '#BDBDBD'
}

export default function CreditsCalculator() {
  const [ig, setIg] = useState(0)
  const [x, setX] = useState(0)
  const [li, setLi] = useState(0)
  const [reddit, setReddit] = useState(0)
  const [workflow, setWorkflow] = useState(false)
  const [display, setDisplay] = useState(20000)

  const displayRef = useRef(20000)
  const rafRef = useRef<number | null>(null)
  const snapRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const animateTo = useCallback((target: number) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    if (snapRef.current !== null) clearTimeout(snapRef.current)

    const start = displayRef.current
    const t0 = performance.now()
    const dur = 600
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)

    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur)
      const val = Math.round(start + (target - start) * ease(p))
      displayRef.current = val
      setDisplay(val)
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    snapRef.current = setTimeout(() => {
      if (displayRef.current !== target) {
        displayRef.current = target
        setDisplay(target)
      }
    }, 680)
  }, [])

  const ig_bonus = igBonus(ig)
  const x_bonus = xBonus(x)
  const li_bonus = liBonus(li)
  const rd_bonus = rdBonus(reddit)
  const wf_bonus = workflow ? 10000 : 0

  const pct = Math.min(1, display / 200000)
  const ringOffset = (326.7 * (1 - pct)).toFixed(1)
  const ringPctFmt = Math.round(pct * 100) + '%'
  const capped = totalFrom(ig, x, li, reddit, workflow) >= 200000
  const capLabel = capped ? 'Maxed out. 200K cap reached' : 'Keep going to hit 200K'
  const capColor = capped ? '#42BE65' : '#8A8A8A'

  const wfBg = workflow ? '#F4EEFF' : '#FAFAFA'
  const wfBorder = workflow ? '#D8C5FF' : '#ECECEC'
  const wfTrack = workflow ? '#8A3FFC' : '#D4D4D4'
  const wfKnob = workflow ? '21px' : '3px'

  const rows = [
    { label: 'Base monthly refill', amt: '20,000', amtColor: '#fff', dot: '#7A7A7A', op: 1 },
    { label: 'Instagram + TikTok', amt: bonusFmt(ig_bonus), amtColor: bonusColor(ig_bonus), dot: '#FF85DD', op: ig_bonus > 0 ? 1 : .4 },
    { label: 'X (Twitter)', amt: bonusFmt(x_bonus), amtColor: bonusColor(x_bonus), dot: '#8FD3FF', op: x_bonus > 0 ? 1 : .4 },
    { label: 'LinkedIn', amt: bonusFmt(li_bonus), amtColor: bonusColor(li_bonus), dot: '#6EE7A8', op: li_bonus > 0 ? 1 : .4 },
    { label: 'Reddit', amt: bonusFmt(rd_bonus), amtColor: bonusColor(rd_bonus), dot: '#FFC27A', op: rd_bonus > 0 ? 1 : .4 },
    { label: 'Workflow guides', amt: bonusFmt(wf_bonus), amtColor: bonusColor(wf_bonus), dot: '#A56EFF', op: wf_bonus > 0 ? 1 : .4 },
  ]

  return (
    <section
      id="rewards"
      style={{
        position: 'relative',
        padding: '104px 40px 100px',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '-160px',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '520px',
          background: 'radial-gradient(circle,rgba(138,63,252,.12),transparent 66%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper style={{ textAlign: 'center', marginBottom: '18px' }}>
          <div
            style={{
              fontFamily: "'Lemon Milk', sans-serif",
              fontSize: '12px',
              letterSpacing: '.2em',
              color: '#8A3FFC',
              marginBottom: '16px',
            }}
          >
            03 · THE REWARDS ENGINE
          </div>
          <h2
            style={{
              fontSize: 'clamp(34px,4.6vw,58px)',
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: '-.02em',
              margin: '0 auto 16px',
              maxWidth: '820px',
            }}
          >
            Your reach, paid in credits.
          </h2>
          <p
            style={{
              maxWidth: '560px',
              margin: '0 auto',
              fontSize: '18px',
              lineHeight: 1.55,
              color: '#575757',
            }}
          >
            Drag the sliders to your monthly numbers. Watch what you&apos;d earn — base refill plus performance bonuses, capped at 200,000.
          </p>
        </RevealWrapper>

        <RevealWrapper
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr .85fr',
            gap: '24px',
            alignItems: 'stretch',
            marginTop: '46px',
          }}
        >
          {/* Sliders panel */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #EDEDED',
              borderRadius: '26px',
              padding: '34px 36px',
              boxShadow: '0 18px 50px rgba(20,20,20,.06)',
            }}
          >
            {/* IG/TikTok */}
            <div style={{ marginBottom: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '6px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600 }}>Instagram + TikTok views</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#161616' }}>
                  {fmtViews(ig)}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  className="ia-rng"
                  type="range"
                  min={0}
                  max={10000000}
                  step={50000}
                  value={ig}
                  onChange={(e) => {
                    const v = Number(e.target.value)
                    setIg(v)
                    animateTo(totalFrom(v, x, li, reddit, workflow))
                  }}
                />
                <span
                  style={{
                    flex: 'none',
                    minWidth: '74px',
                    textAlign: 'right',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: bonusColor(ig_bonus),
                  }}
                >
                  {bonusFmt(ig_bonus)}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10.5px',
                  color: '#A6A6A6',
                  marginTop: '8px',
                  letterSpacing: '.02em',
                }}
              >
                <span>0</span><span>250K</span><span>1M</span><span>2.5M</span><span>10M</span>
              </div>
            </div>

            {/* X */}
            <div style={{ marginBottom: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '6px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600 }}>X (Twitter) impressions</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#161616' }}>
                  {fmtViews(x)}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  className="ia-rng"
                  type="range"
                  min={0}
                  max={60000}
                  step={1000}
                  value={x}
                  onChange={(e) => {
                    const v = Number(e.target.value)
                    setX(v)
                    animateTo(totalFrom(ig, v, li, reddit, workflow))
                  }}
                />
                <span
                  style={{
                    flex: 'none',
                    minWidth: '74px',
                    textAlign: 'right',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: bonusColor(x_bonus),
                  }}
                >
                  {bonusFmt(x_bonus)}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10.5px',
                  color: '#A6A6A6',
                  marginTop: '8px',
                  letterSpacing: '.02em',
                }}
              >
                <span>0</span><span>20K</span><span>50K+</span>
              </div>
            </div>

            {/* LinkedIn */}
            <div style={{ marginBottom: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '6px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600 }}>LinkedIn views</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#161616' }}>
                  {fmtViews(li)}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  className="ia-rng"
                  type="range"
                  min={0}
                  max={80000}
                  step={1000}
                  value={li}
                  onChange={(e) => {
                    const v = Number(e.target.value)
                    setLi(v)
                    animateTo(totalFrom(ig, x, v, reddit, workflow))
                  }}
                />
                <span
                  style={{
                    flex: 'none',
                    minWidth: '74px',
                    textAlign: 'right',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: bonusColor(li_bonus),
                  }}
                >
                  {bonusFmt(li_bonus)}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10.5px',
                  color: '#A6A6A6',
                  marginTop: '8px',
                  letterSpacing: '.02em',
                }}
              >
                <span>0</span><span>20K</span><span>50K</span><span>70K+</span>
              </div>
            </div>

            {/* Reddit */}
            <div style={{ marginBottom: '26px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '6px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600 }}>Reddit upvotes</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#161616' }}>
                  {fmtCredits(reddit)} upvotes
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  className="ia-rng"
                  type="range"
                  min={0}
                  max={2000}
                  step={25}
                  value={reddit}
                  onChange={(e) => {
                    const v = Number(e.target.value)
                    setReddit(v)
                    animateTo(totalFrom(ig, x, li, v, workflow))
                  }}
                />
                <span
                  style={{
                    flex: 'none',
                    minWidth: '74px',
                    textAlign: 'right',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: bonusColor(rd_bonus),
                  }}
                >
                  {bonusFmt(rd_bonus)}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10.5px',
                  color: '#A6A6A6',
                  marginTop: '8px',
                  letterSpacing: '.02em',
                }}
              >
                <span>0</span><span>500</span><span>1K</span><span>2K+</span>
              </div>
            </div>

            {/* Workflow toggle */}
            <div
              onClick={() => {
                const newWf = !workflow
                setWorkflow(newWf)
                animateTo(totalFrom(ig, x, li, reddit, newWf))
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                borderRadius: '14px',
                border: `1px solid ${wfBorder}`,
                background: wfBg,
                cursor: 'pointer',
                transition: 'all .2s ease',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '42px',
                  height: '24px',
                  borderRadius: '999px',
                  background: wfTrack,
                  position: 'relative',
                  transition: 'background .2s ease',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '3px',
                    left: wfKnob,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#fff',
                    boxShadow: '0 1px 3px rgba(0,0,0,.3)',
                    transition: 'left .2s ease',
                  }}
                />
              </span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#161616' }}>
                Publish 3 ImagineArt Workflow guides{' '}
                <span style={{ color: '#8A3FFC', fontWeight: 700 }}>+10,000</span>
              </span>
            </div>
          </div>

          {/* Counter panel */}
          <div
            style={{
              background: '#0F0F0F',
              color: '#fff',
              borderRadius: '26px',
              padding: '38px 34px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 18px 50px rgba(20,20,20,.14)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Ring SVG */}
              <div style={{ position: 'relative', flex: 'none', width: '118px', height: '118px' }}>
                <svg
                  width="118"
                  height="118"
                  viewBox="0 0 118 118"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <defs>
                    <linearGradient id="iaRing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#A56EFF" />
                      <stop offset="1" stopColor="#FF85DD" />
                    </linearGradient>
                  </defs>
                  <circle cx="59" cy="59" r="52" fill="none" stroke="#262626" strokeWidth="9" />
                  <circle
                    cx="59"
                    cy="59"
                    r="52"
                    fill="none"
                    stroke="url(#iaRing)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray="326.7"
                    strokeDashoffset={ringOffset}
                    style={{ transition: 'stroke-dashoffset .35s cubic-bezier(.16,1,.3,1)' }}
                  />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
                    {ringPctFmt}
                  </span>
                  <span style={{ fontSize: '9px', letterSpacing: '.1em', color: '#8A8A8A' }}>
                    OF MAX
                  </span>
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '.16em',
                    color: '#8A8A8A',
                    marginBottom: '4px',
                  }}
                >
                  EST. MONTHLY CREDITS
                </div>
                <div
                  style={{
                    fontSize: '52px',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-.02em',
                    color: '#fff',
                  }}
                >
                  {fmtCredits(display)}
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    color: capColor,
                    marginTop: '7px',
                    fontWeight: 600,
                  }}
                >
                  {capLabel}
                </div>
              </div>
            </div>

            <div style={{ height: '1px', background: '#242424', margin: '26px 0 20px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', flex: 1 }}>
              {rows.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    opacity: r.op,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <span
                      style={{
                        flex: 'none',
                        width: '7px',
                        height: '7px',
                        borderRadius: '2px',
                        background: r.dot,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '13.5px',
                        color: '#D4D4D4',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {r.label}
                    </span>
                  </div>
                  <span
                    style={{ flex: 'none', fontSize: '13.5px', fontWeight: 700, color: r.amtColor }}
                  >
                    {r.amt}
                  </span>
                </div>
              ))}
            </div>

            <a
              className="ia-btn-dark"
              href="#apply"
              style={{
                marginTop: '24px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                color: '#0F0F0F',
                background: '#fff',
                padding: '15px',
                borderRadius: '999px',
                display: 'block',
              }}
            >
              Start earning, apply now
            </a>
            <p
              style={{
                fontSize: '11px',
                lineHeight: 1.5,
                color: '#6E6E6E',
                margin: '14px 0 0',
                textAlign: 'center',
              }}
            >
              Plus a flat 15% revenue share on every referral. Bonuses are performance-based and manually reviewed each month.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
