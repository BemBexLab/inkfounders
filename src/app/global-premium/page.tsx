import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import CTABanner from './components/CTABanner'
import CTABanner2 from './components/CTABanner_2'
import Stats from './components/Stats'
import BeyondTheOrdinary from './components/BeyondTheOrdinary'
import PublishingSteps from './components/PublishingSteps'
import InkFoundersComparison from './components/Inkfounderscomparison'
import BooksSection from './components/Bookssection'
import GetInTouch from './components/ContactForm'
import LandingFooter from './components/LandingFooter'
import Testimonials from './components/TestimonialLanding'
import ContactStrip from './components/ContactStrip'

const page = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <CTABanner />
        <Stats />
        <BeyondTheOrdinary />
        <PublishingSteps />
        <InkFoundersComparison />
        <BooksSection />
        <CTABanner2 />
        <Testimonials />
        <GetInTouch />
        <LandingFooter />
        <ContactStrip />
    </section>
  )
}

export default page
