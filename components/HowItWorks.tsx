import { TracingBeam } from '@/components/ui/tracing-beam'
import SectionSparkles from '@/components/SectionSparkles'

const steps = [
  {
    badge: 'Step 01',
    title: 'Apply & Get Approved',
    description: (
      <>
        <p>
          Submit your creator profile and let your work speak for itself. We review every application within 48 hours —
          no minimum follower count, no gatekeeping. We look for consistent creative output and a genuine connection to AI art.
        </p>
        <p>
          Once approved, you get immediate access to the partner dashboard, your first credit drop, and a direct line to the ImagineArt team.
        </p>
      </>
    ),
    image: 'https://cdn.web.imagine.art/imagine-one/test/assets/event.png',
  },
  {
    badge: 'Step 02',
    title: 'Unlock Credits & Premium Tools',
    description: (
      <>
        <p>
          Start with 20,000 monthly credits from day one — enough to run hundreds of generations across every model in the platform.
          Premium access is immediate, no waiting period, no trial limits.
        </p>
        <p>
          As you create and share more, your monthly allocation grows automatically — up to 200,000 credits at the Creative Partner tier.
        </p>
      </>
    ),
    image: null,
  },
  {
    badge: 'Step 03',
    title: 'Get Featured & Grow Your Reach',
    description: (
      <>
        <p>
          Your best work gets promoted across every ImagineArt channel — social posts, case studies, creator spotlights, and co-marketing campaigns
          that put your name in front of millions of people who care about AI art.
        </p>
        <p>
          Host a workshop in your city, pitch a community event, or join a weekly live session. We back your ideas with platform credits,
          speakers, and full promotional support.
        </p>
      </>
    ),
    image: null,
  },
  {
    badge: 'Step 04',
    title: 'Earn as You Level Up',
    description: (
      <>
        <p>
          Revenue share starts at the Growth Partner tier and scales up to 25% at Creative Partner. Refer studios, agencies, or brands
          and earn affiliate commissions on top of your monthly credits.
        </p>
        <p>
          The more you build inside the program — the content you create, the community you grow, the partners you bring — the more
          every tier unlocks. There is no ceiling.
        </p>
      </>
    ),
    image: null,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="ia-sec"
      style={{ background: 'var(--clr-bg)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <div className="ia-sec-head" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 50px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-.025em',
              margin: '0 0 0',
              color: 'var(--clr-fg)',
            }}
          >
            Your Path to Partnership
          </h2>
          <SectionSparkles width="min(480px, 95%)" style={{ margin: '0 auto -24px' }} />
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.44)',
              margin: '0 auto',
              maxWidth: '460px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            From application to earning — here&apos;s how the program works.
          </p>
        </div>

        {/* Tracing beam */}
        <TracingBeam className="px-6">
          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ marginBottom: '64px' }}>
                {/* Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '.1em',
                    color: '#C8AAFF',
                    background: 'rgba(138,63,252,0.12)',
                    border: '1px solid rgba(138,63,252,0.25)',
                    borderRadius: '999px',
                    padding: '4px 14px',
                    marginBottom: '18px',
                  }}
                >
                  {step.badge}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    fontWeight: 500,
                    letterSpacing: '-.02em',
                    color: 'var(--clr-fg)',
                    margin: '0 0 16px',
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>

                {/* Image */}
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    style={{
                      width: '100%',
                      borderRadius: '16px',
                      marginBottom: '20px',
                      objectFit: 'cover',
                      height: '240px',
                      display: 'block',
                      border: '1px solid rgba(138,63,252,0.15)',
                    }}
                  />
                )}

                {/* Description */}
                <div
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}
