import FooterMap from './FooterMap'

const socials = [
  {
    label: 'Discord',
    href: 'https://discord.gg/H724XtQXg7',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/imagineartofficial/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/ImagineArt_X',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/imagineartai/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      className="ia-footer-pad"
      style={{
        padding: '56px 40px 40px',
        background: 'var(--clr-bg-2)',
        borderTop: '1px solid var(--clr-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* World map background — sits behind all footer content */}
      <FooterMap />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: '300px' }}>
          <div style={{ marginBottom: '14px' }}>
            <img
              src="/imagineart-black-logo.png"
              alt="ImagineArt"
              className="ia-logo-img"
              style={{ height: '22px', width: 'auto', display: 'block' }}
            />
          </div>
          <p
            style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'var(--clr-fg-3)',
              margin: 0,
            }}
          >
            A partner program for creative professionals.<br />Powered by ImagineArt.
          </p>
        </div>

        {/* Link columns */}
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          <div>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '.12em',
                color: 'var(--clr-fg-3)',
                marginBottom: '14px',
              }}
            >
              PROGRAM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a className="ia-link" href="#who" style={{ fontSize: '14px', color: 'var(--clr-fg-2)' }}>
                Who it&apos;s for
              </a>
              <a className="ia-link" href="#rewards" style={{ fontSize: '14px', color: 'var(--clr-fg-2)' }}>
                Rewards
              </a>
              <a className="ia-link" href="#community" style={{ fontSize: '14px', color: 'var(--clr-fg-2)' }}>
                Events
              </a>
              <a className="ia-link" href="#faq" style={{ fontSize: '14px', color: 'var(--clr-fg-2)' }}>
                FAQ
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '.12em',
                color: 'var(--clr-fg-3)',
                marginBottom: '14px',
              }}
            >
              COMMUNITY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="ia-link"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '14px',
                    color: 'var(--clr-fg-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: 'var(--clr-fg-3)', display: 'flex', alignItems: 'center' }}>
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '36px auto 0',
          paddingTop: '22px',
          borderTop: '1px solid var(--clr-border)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          fontSize: '12.5px',
          color: 'var(--clr-fg-3)',
        }}
      >
        <span>© 2026 ImagineArt, Vyro AI. All rights reserved.</span>
        <span>Creative partnership. Not employment.</span>
      </div>
      </div>{/* end z-index wrapper */}
    </footer>
  )
}
