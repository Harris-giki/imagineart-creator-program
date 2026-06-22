import BorderMagicBtn from '@/components/ui/border-magic-btn'

export default function ApplyCTA() {
  return (
    <section
      id="apply-cta"
      style={{
        position: 'relative',
        padding: '120px 40px',
        overflow: 'hidden',
        background: '#F8F4FF',
        textAlign: 'center',
      }}
    >
      {/* Soft orbs */}
      <div style={{ position: 'absolute', inset: 0, opacity: .55, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            left: '12%',
            top: '10%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(138,63,252,.4),transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '10%',
            bottom: 0,
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(255,133,221,.3),transparent 66%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(38px,5.6vw,78px)',
            lineHeight: 1.02,
            fontWeight: 500,
            letterSpacing: '-.03em',
            margin: '0 0 22px',
            color: '#161616',
          }}
        >
          Apply in one minute.
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#6A6A6A',
            margin: '0 auto 36px',
            maxWidth: '460px',
            fontWeight: 400,
          }}
        >
          20K credits on day one. Start making, sharing, and earning from your work with ImagineArt.
        </p>
        <div className="ia-bm-wrap">
          <BorderMagicBtn href="#apply">Apply now</BorderMagicBtn>
        </div>
      </div>
    </section>
  )
}
