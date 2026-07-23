import GradBgFramerComponent from '../framer/grad-bg';
import GradBGTablet from '../framer/grad-bg-tablet'
import GradBGMobile from '../framer/grad-bg-mobile'
import NavigationFramerComponent from '../framer/navigation';
import FooterFramerComponent from '../framer/footer';
import Hero from "../framer/hero"
import Leadership from "../framer/leadership"
import WhatWeDoBest from "../framer/what-we-do-best"
import Global from "../framer/global"
import Testimonial from "../framer/testimonial"
import TestimonialMobile from "../framer/testimonial-mobile"
import PathToFinancialFreedom from "../framer/path-to-financial-freedom"
import FAQ from "../framer/fa-qs"
import Feature from "../framer/featured-in"
import WhoWeServe from "../components/WhoWeServe"
import MobileHero from "../components/MobileHero"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-[rgb(245,_242,_235)] min-h-screen">
      <NavigationFramerComponent.Responsive style={{ width: '100%' }} />
<div className="block w-full xl:hidden">
        <MobileHero />
      </div>
      <div className="hidden w-full xl:block">
        <Hero.Responsive style={{ width: '100%' }} />
      </div>

      {/* Desktop STEAR Section — full-bleed background, 3+2 card grid */}
      <div className="hidden xl:block w-full self-stretch min-w-full">
        <GradBgFramerComponent.Responsive style={{ width: '100%', minWidth: '100%' }} />
      </div>
      {/* Tablet STEAR Section */}
      <div className="hidden md:block xl:hidden w-full">
        <GradBGTablet.Responsive variant="Tablet" style={{ width: '100%' }} />
      </div>
      {/* Mobile STEAR Section */}
      <div className="block md:hidden w-full">
        <GradBGMobile.Responsive variant="Mobile" style={{ width: '100%' }} />
      </div>

      <Feature.Responsive style={{ width: '100%' }} />
      <Leadership.Responsive style={{ width: '100%' }} />
      <WhoWeServe />
      <WhatWeDoBest.Responsive style={{ width: '100%' }} />
      <Global.Responsive style={{ width: '100%' }} />

      <div className="hidden md:block w-full self-stretch min-w-0 overflow-x-hidden">
        <Testimonial.Responsive style={{ width: '100%', maxWidth: '100%' }} />
      </div>
      <div className="block md:hidden w-full">
        <TestimonialMobile.Responsive style={{ width: '100%' }} />
      </div>

      <PathToFinancialFreedom.Responsive style={{ width: '100%' }} />
      <FAQ.Responsive style={{ width: '100%' }} />
      <FooterFramerComponent.Responsive style={{ width: '100%' }} />
    </div>
  );
}
