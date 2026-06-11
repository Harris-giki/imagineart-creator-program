export default function TopBar() {
  return (
    <div
      style={{
        width: '100%',
        background: '#8A3FFC',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        padding: '9px 20px',
        fontSize: '13px',
        letterSpacing: '.01em',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 0 0 0 rgba(255,255,255,.6)',
          animation: 'ia-pulse 2.4s infinite',
        }}
      />
      <span style={{ opacity: .9 }}>2026 cohort is open</span>
      <span style={{ opacity: .4 }}>·</span>
      <a
        href="#apply"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600,
          opacity: .95,
        }}
      >
        Apply now →
      </a>
    </div>
  )
}
