export default function Nav() {
  return (
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
      <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flex: 'none' }}>
        <img
          src="/imagineart-black-logo.png"
          alt="ImagineArt"
          style={{ height: '26px', width: 'auto', display: 'block' }}
        />
      </a>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '26px',
          flexWrap: 'nowrap',
        }}
      >
        <a className="ia-link" href="#rewards" style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
          Rewards
        </a>
        <a className="ia-link" href="#who" style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
          Who it&apos;s for
        </a>
        <a className="ia-link" href="#creators" style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
          Community
        </a>
        <a className="ia-link" href="#faq" style={{ fontSize: '14.5px', fontWeight: 500, whiteSpace: 'nowrap' }}>
          FAQ
        </a>
        <a
          className="ia-events-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '8px', height: '8px' }}>
            <span style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#8A3FFC',
              animation: 'ia-pulse 2s cubic-bezier(.455,.03,.515,.955) infinite',
            }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8A3FFC', flexShrink: 0 }} />
          </span>
          Events
        </a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 'none' }}>
        <a
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
      </div>
    </nav>
  )
}
