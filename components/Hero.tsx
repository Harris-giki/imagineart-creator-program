export default function Hero() {
  return (
    <header id="top" style={{ position: 'relative', overflow: 'hidden', marginTop: '57px' }}>

      {/* Image — desktop: natural height; mobile: absolute cover via CSS */}
      <img
        src="https://cdn.web.imagine.art/imagine-one/test/assets/hero-banner.png"
        alt=""
        className="ia-hero-img"
        fetchPriority="high"
        decoding="async"
      />

      {/* Overlay */}
      <div className="ia-hero-overlay" style={{ position: 'absolute', inset: 0 }} />

      {/*
        Content — layout properties (height, justify-content, padding) live in
        .ia-hero-content CSS class so media queries can override them freely.
        Only non-overridden structural props stay inline.
      */}
      <div
        className="ia-hero-content"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h1 className="ia-hero-h1">
          <span style={{ display: 'block' }}>Creative Space for</span>
          <span
            style={{
              display: 'block',
              fontWeight: 700,
              background: 'linear-gradient(95deg, #FFD4A8, #ffffff, #F9B8D4, #C8AAFF, #ffffff, #FFD4A8)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'ia-gradient-flow 6s linear infinite',
            }}
          >
            Visionary Creators
          </span>
        </h1>

        <p className="ia-hero-p">
          This is where ambitious creators get the fuel to go further. Earn up to 200,000 credits,
          get early access to all new features, and stand among a hand-picked community of top AI creators.
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
          Join Now
        </a>
      </div>

      {/* Scroll-down arrow */}
      <a
        href="#rewards"
        aria-label="Scroll to rewards"
        className="ia-hero-arrow"
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '32px',
          zIndex: 2,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          animation: 'ia-scroll-bounce 2.4s cubic-bezier(.4,0,.6,1) infinite',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 3.5v11M4.5 10l4.5 4.5 4.5-4.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </header>
  )
}
