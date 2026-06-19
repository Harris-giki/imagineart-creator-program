import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhoItsFor from '@/components/WhoItsFor'
import WhatYoullGet from '@/components/WhatYoullGet'
import TopCreators from '@/components/TopCreators'
import Community from '@/components/Community'
import StatsBand from '@/components/StatsBand'
import Enterprise from '@/components/Enterprise'
import CommunityCreations from '@/components/CommunityCreations'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ApplyModal from '@/components/ApplyModal'

export default function Page() {
  return (
    <main style={{ background: 'var(--clr-bg)', color: 'var(--clr-fg)', overflowX: 'hidden', position: 'relative' }}>
      <Nav />
      <Hero />

      {/* Grid background section — starts after hero, ends before footer */}
      <div className="ia-grid-wrapper">
        {/* Lightning streaks */}
        <div className="ia-grid-lightning-container" aria-hidden="true">
          <span className="ia-lightning ia-l1" />
          <span className="ia-lightning ia-l2" />
          <span className="ia-lightning ia-l3" />
          <span className="ia-lightning ia-l4" />
          <span className="ia-lightning ia-l5" />
          <span className="ia-lightning ia-l6" />
        </div>

        <WhoItsFor />
        <WhatYoullGet />
        <TopCreators />
        <Community />
        <StatsBand />
        <Enterprise />
        <CommunityCreations />
        <FAQ />
      </div>

      <Footer />
      <ApplyModal />
    </main>
  )
}
