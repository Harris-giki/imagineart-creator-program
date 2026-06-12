import RevealWrapper from './RevealWrapper'

export default function Enterprise() {
  return (
    <section className="ia-enterprise-outer" style={{ padding: '0 40px 96px' }}>
      <RevealWrapper
        className="ia-enterprise-inner"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderRadius: '24px',
          background: '#F7F6F9',
          border: '1px solid #EDEDED',
          padding: '48px 52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '620px' }}>
          <h3
            style={{
              fontSize: 'clamp(24px,3vw,38px)',
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: '-.02em',
              margin: '0 0 14px',
            }}
          >
            Know a studio ready to scale on AI?
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#575757',
              margin: 0,
              maxWidth: '520px',
            }}
          >
            Refer agencies, production houses or in-house teams of 10 or more. Earn a referral bonus when they come on board. ImagineArt is the creative infrastructure modern teams are moving to.
          </p>
        </div>
        <a
          className="ia-btn-dark"
          href="https://vyroai.notion.site/ImagineArt-Enterprise-Referral-Program-Creator-Partners-2ed0152cd76980dea449fa36e1c41569"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 'none',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            color: '#fff',
            background: '#0F0F0F',
            padding: '16px 30px',
            borderRadius: '999px',
          }}
        >
          Refer a team
        </a>
      </RevealWrapper>
    </section>
  )
}
