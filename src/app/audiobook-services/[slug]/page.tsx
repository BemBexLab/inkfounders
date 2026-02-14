import React from 'react'
import Hero from '../components/Hero'
import PartnersSection from "../../Home/OurPartner";
import NarrationOptions from '../components/NarrationOptions';
import ImageDesc from '../components/ImageDesc';
import Testimonials from '../components/Testimonials';
import GetInTouch from '../components/GetInTouch';

const page = () => {
  return (
    <section>
      <Hero />
      <PartnersSection />
      <NarrationOptions />
      <ImageDesc />
      <Testimonials />
      <GetInTouch />
    </section>
  )
}

export default page