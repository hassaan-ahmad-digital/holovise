import {
  CTA,
  Contact,
  GetStarted,
  Hero,
  LatestNews,
  MarketShare,
  OurImpact,
  OurProcess,
  Services,
  Testimonials
} from '@/components/sections'
import AppContentWrapper from '@/components/Wrappers/AppContentWrapper'

export default function Home() {
  return (
    <AppContentWrapper headerId="app-header-1" className="flex flex-col">
      <div className="container-large">
        <Hero />
        <Services />
        <GetStarted />
        <MarketShare />
        <Testimonials />
        <OurProcess />
        <CTA />
        <OurImpact />
        <LatestNews />
        <Contact />
      </div>
    </AppContentWrapper>
  )
}
