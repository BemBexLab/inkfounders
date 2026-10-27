import React from 'react'
import Hero from './components/Hero'
import ColoringBookServices from './components/ColoringBookServices'
import RelatedColoringBookPrinting from './components/RelatedColoringBookPrinting'
import CustomColoringBookPrinting from './components/CustomColoringBookPrinting'
import ColoringBookPrintingOptions from './components/ColoringBookPrintingOptions'
import WhichPaperIsBest from './components/WhichPaperIsBest'
import WhichBindingShouldYouChoose from './components/WhichBindingShouldYouChoose'
import HowToPrintYourOwnColoringBook from './components/HowToPrintYourOwnColoringBook'
import CustomVsPrintOnDemand from './components/CustomVsPrintOnDemand'
import ColoringBookPrintingInfo from './components/ColoringBookPrintingInfo'
import FAQSection from './components/FAQSection'
import { createPageMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = createPageMetadata(
  "/publishing-services/coloring-book-printing-services",
  "Coloring Book Printing Services | Ink Founders",
  "Ink Founders offers professional coloring book printing services with custom designs and quality printing. Email: info@inkfounders.com | Ph: (786) 652-6864",
);

const page = () => {
  return (
    <section className="bg-white">
      <Hero />
      <ColoringBookServices />
      <RelatedColoringBookPrinting />
      <CustomColoringBookPrinting />
      <ColoringBookPrintingOptions />
      <WhichPaperIsBest />
      <WhichBindingShouldYouChoose />
      <HowToPrintYourOwnColoringBook />
      <CustomVsPrintOnDemand />
      <ColoringBookPrintingInfo />
      <FAQSection />
    </section>
  )
}

export default page
