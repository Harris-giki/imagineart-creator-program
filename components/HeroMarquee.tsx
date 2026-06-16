// @ts-nocheck
const allTiles: unknown[] = []

export default function HeroMarquee() {
  return (
    <div style={{ position: 'relative', padding: '14px 0 4px', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          gap: '18px',
          width: 'max-content',
          animation: 'ia-marquee 52s linear infinite',
          padding: '0 9px',
        }}
      >
        {allTiles.map((t, i) => (
          <div
            key={i}
            className="ia-tile"
            style={{ width: '200px', height: '240px', flex: 'none', background: t.bg }}
          >
            <div className="ia-veil" />
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 10px',
                borderRadius: '999px',
                background: 'rgba(10,6,20,.42)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#A56EFF' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#fff', letterSpacing: '.02em' }}>{t.tool}</span>
            </div>
            <div style={{ position: 'absolute', left: '14px', right: '14px', bottom: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{t.handle}</span>
                <span style={{ fontSize: '9.5px', fontWeight: 600, letterSpacing: '.06em', color: 'rgba(255,255,255,.7)' }}>MADE IN IMAGINEART</span>
              </div>
              <div
                className="ia-prompt"
                style={{ marginTop: '9px', paddingTop: '9px', borderTop: '1px solid rgba(255,255,255,.18)' }}
              >
                <div style={{ fontSize: '9px', letterSpacing: '.14em', color: '#C7B6FF', marginBottom: '4px' }}>PROMPT</div>
                <div style={{ fontSize: '11px', lineHeight: 1.4, color: 'rgba(255,255,255,.92)' }}>{t.prompt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
