import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'


const WhyChoosePanda = () => {
  return (
    <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-20">
  <div className="w-full max-w-[1300px] flex flex-col items-center">
    {/* Headings */}
    <h2 className="text-center text-[22px] md:text-[30px] font-semibold mb-14">
      <span className="text-[#1F1F1F]">Why Choose Panda Publishing</span>
    </h2>
    {/* 3 columns */}
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
      {/* 1. Book Editing & Proofreading */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/whoweare/Mask group (13).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Experienced Ghostwriters
        </h3>
      <p className={` text-[#444444] text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          At Ink Founders, our ghostwriters are skilled in bringing stories to life with authenticity and depth. We understand that every author has a unique voice—so we carefully pair you with writers who align with your vision and capture your tone seamlessly.
        </p>
      </div>
      {/* 2. Book Cover Design */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/whoweare/Mask group (14).png"
          alt="Myriad Of Distribution Channels"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Privacy
        </h3>
        <p className={`text-[#444444] text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          Integrity is at the heart of our work. We prioritize originality and uphold strict confidentiality in every collaboration. Trust is the foundation of our process—because great books begin with secure, respectful partnerships.
        </p>
      </div>
      {/* 3. ISBN & Barcodes */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/whoweare/Mask group (15).png"
          alt="Book Marketing & Author Branding"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Affordability
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          We believe in honest pricing and accessible services. With transparent rates, no hidden fees, and flexible payment options, we make high-quality ghostwriting affordable without compromising on excellence.
        </p>
      </div>
      {/* 4. Comprehensive Book & Author Marketing */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/whoweare/Mask group (16).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Customer Satisfaction
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
        Your vision matters—and so does your satisfaction. Our ghostwriters actively incorporate your feedback to ensure every detail aligns with your expectations. We’re committed to refining your book until you’re completely satisfied with the result.
        </p>
      </div>
      {/* 5. Complete Copyrights & 100% Ownership */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/whoweare/Mask group (17).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Dynamic Stories
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
        At Ink Founders, we’re passionate storytellers who blend creativity with craft. Our professional writers bring your world and characters to life—infusing each page with imagination, depth, and your unique vision.
        </p>
      </div>
      {/* 6. Always-Here Customer Support */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/whoweare/Mask group (18).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          24/7 Customer Support
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
        At Ink Founders, you’re never on your own. Every client is paired with a dedicated account manager who oversees your project and serves as your direct link to your ghostwriter—available anytime to answer questions, provide updates, and ensure a smooth publishing experience.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default WhyChoosePanda