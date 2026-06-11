import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatYoullGet from '@/components/WhatYoullGet'
import WhoItsFor from '@/components/WhoItsFor'
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
    <main style={{ background: '#fff', color: '#161616', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <WhatYoullGet />
      <WhoItsFor />
      <TopCreators />
      <Community />
      <StatsBand />
      <Enterprise />
      <CommunityCreations />
      <FAQ />
      <Footer />
      <ApplyModal />
    </main>
  )
}
