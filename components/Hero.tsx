export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '580px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Full-bleed background */}
      <img
        src="/hero-banner.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />

      {/* Dark overlay for text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,.32)',
        }}
      />

      {/* Centered content */}
      <div
        className="ia-hero-content"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: '#fff',
          padding: '100px 40px 96px',
          maxWidth: '860px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(34px,5.2vw,68px)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-.025em',
            margin: '0 0 22px',
          }}
        >
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Showcasing future-shaping</span>
          <span
            style={{
              display: 'block',
              fontWeight: 300,
              background: 'linear-gradient(95deg, #FFD4A8, #F9B8D4, #C8AAFF, #FFD4A8, #F9B8D4)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'ia-gradient-flow 6s linear infinite',
            }}
          >creative minds</span>
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,.8)',
            margin: '0 auto 36px',
            maxWidth: '600px',
            fontWeight: 400,
          }}
        >
          Get up to 200,000 tokens, early feature access, and opportunities to collaborate with a community of creators!
        </p>

        <a
          href="#apply"
          style={{
            display: 'inline-block',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            color: '#161616',
            background: '#fff',
            padding: '15px 42px',
            borderRadius: '999px',
          }}
        >
          Apply Now
        </a>
      </div>
    </header>
  )
}
