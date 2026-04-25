import React from 'react'
import LandingNavBar from './components/LandingNavBar'
import LandingHero from './components/LandingHero'
import FeaturesSection from './components/FeaturesSection'
import CTABanner from './components/CTABanner'
import BookPublishingSection from './components/BookPublishingSection'
import BookGallery from './components/BookGallery'
import CTABannerRight from './components/CTABannerRight'
import PublishingPartner from './components/PublishingPartner'
import LogoMarquee from './components/LogoMarquee'
import Packages from './components/Packages'
import BringYourBookSection from './components/BringYourBookSection'
import StepCard from './components/PublishingSteps'
import PublishYourStory from './components/PublishYourStory'
import TestimonialLanding from './components/TestimonialLanding'
import GetInTouch from './components/ContactForm'

const page = () => {
  return (
    <section className='overflow-hidden bg-white'>
        <LandingNavBar />
        <LandingHero />
        <FeaturesSection />
        <CTABanner />
        <PublishingPartner />
        {/* <BookPublishingSection /> */}
        <BookGallery />
        <LogoMarquee />
        <CTABannerRight />
        <Packages />
        <BringYourBookSection />
        <StepCard />
        <PublishYourStory />
        <TestimonialLanding />
        <GetInTouch />
    </section>
  )
}

export default page
