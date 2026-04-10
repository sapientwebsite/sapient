/**
 * Work-in-progress React reimplementation of home. For an exact clone of the Framer export,
 * production uses `LegacyInlinePage` + `LEGACY_HOME_HTML_URL` in `routes/_index.tsx`.
 * Compare at `/home-react` vs `/`.
 */
import CtaBanner from '~/components/home/CtaBanner'
import ContactHomeSection from '~/components/home/ContactHomeSection'
import FaqSection from '~/components/home/FaqSection'
import GlobalSection from '~/components/home/GlobalSection'
import HeroSection from '~/components/home/HeroSection'
import HowItWorksSection from '~/components/home/HowItWorksSection'
import LeadershipSection from '~/components/home/LeadershipSection'
import MidPageCta from '~/components/home/MidPageCta'
import PressSection from '~/components/home/PressSection'
import ServicesSection from '~/components/home/ServicesSection'
import StatsBar from '~/components/home/StatsBar'
import StearSection from '~/components/home/StearSection'
import TestimonialsSection from '~/components/home/TestimonialsSection'
import WhoWeServeSection from '~/components/home/WhoWeServeSection'
import { Footer } from '~/components/layout/Footer'
import { Navbar } from '~/components/layout/Navbar'

export default function HomePage() {
  return (
    <div className="min-h-full bg-[#f5f2eb] text-[#17231e]">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <StearSection />
        <PressSection />
        <LeadershipSection />
        <ServicesSection />
        <WhoWeServeSection />
        <GlobalSection />
        <MidPageCta />
        <TestimonialsSection />
        <HowItWorksSection />
        <ContactHomeSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
