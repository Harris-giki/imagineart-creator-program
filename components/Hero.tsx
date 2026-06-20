import Image from 'next/image'
import BorderMagicBtn from '@/components/ui/border-magic-btn'

function WordReveal({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="ia-word-mask">
            <span className="ia-word-inner" style={{ animationDelay: `${baseDelay + i * 0.1}s` }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  return (
    <header id="top" style={{ position: 'relative', overflow: 'hidden', height: '100vh', background: '#000' }}>

      {/* Media wrapper — GSAP scales this on scroll for cinematic zoom */}
      <div
        className="ia-hero-media"
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}
      >
        <Image
          src="https://cdn.web.imagine.art/imagine-one/test/assets/hero-banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ia-hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Cinematic gradient overlay */}
      <div className="ia-hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }} />

      {/* Dark veil — fades in as you scroll away from the hero */}
      <div
        id="ia-hero-dark-fade"
        style={{
          position: 'absolute',
          inset: 0,
          background: '#000',
          opacity: 0,
          zIndex: 6,
          pointerEvents: 'none',
        }}
      />

      {/* Aurora colour blobs */}
      <div className="ia-hero-aurora" aria-hidden="true" style={{ zIndex: 3 }}>
        <div className="ia-aurora-orb ia-aurora-orb-1" />
        <div className="ia-aurora-orb ia-aurora-orb-2" />
        <div className="ia-aurora-orb ia-aurora-orb-3" />
      </div>

      {/* Hero copy */}
      <div
        className="ia-hero-content"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          zIndex: 4,
        }}
      >
        <h1 className="ia-hero-h1">
          <span style={{ display: 'block' }}>
            <WordReveal text="Creative Space for" baseDelay={0.1} />
          </span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(95deg, #FFD4A8, #ffffff, #F9B8D4, #C8AAFF, #ffffff, #FFD4A8)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'ia-gradient-flow 6s linear infinite, ia-hero-line2-in 0.9s cubic-bezier(.16,1,.3,1) 0.45s both',
            }}
          >
            Visionary Creators
          </span>
        </h1>

        <p
          className="ia-hero-p"
          style={{ animation: 'ia-fade-up 0.85s cubic-bezier(.16,1,.3,1) 0.75s both' }}
        >
          This is where ambitious creators get the fuel to go further. Earn up to 200,000 credits,
          get early access to all new features, and stand among a hand-picked community of top AI creators.
        </p>

        <div style={{ animation: 'ia-pop-in 0.7s cubic-bezier(.16,1,.3,1) 1s both' }}>
          <BorderMagicBtn href="#apply">Join Now</BorderMagicBtn>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#who"
        aria-label="Scroll down"
        className="ia-hero-arrow"
        style={{
          position: 'absolute',
          bottom: '28px',
          right: '32px',
          zIndex: 5,
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
