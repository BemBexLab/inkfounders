import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import AOSProvider from "@/components/AOSProvider";

const OurApproach = () => {
  return (
    <AOSProvider>
      <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-10">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-xl font-semibold text-[#DADD39] mb-2">
          Our Approach
        </p>
        <h2 className="text-center text-2xl md:text-[2rem] font-semibold mb-14 md:mx-30">
          <span className="text-black">Crafting Your Masterpiece A Guided, Professional Publishing Experience from Start to Finish.</span>
        </h2>
        {/* 3 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {/* 1. Holistic & Transparent Services */}
          <div data-aos="fade-down-right" className="flex flex-col items-center text-center px-4">
            <Image
              src="/Service/Mask group (7).png" // update with your actual filename
              alt="Holistic & Transparent Services"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Personalized Support</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              Every author’s journey is unique—we customize our services to match your goals and vision.
            </p>
          </div>
          {/* 2. Myriad Of Distribution Channels */}
          <div data-aos="fade-down-right" className="flex flex-col items-center text-center px-4">
            <Image
              src="/Service/Mask group (8).png" // update with your actual filename
              alt="Myriad Of Distribution Channels"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Professional Quality</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
             We deliver industry-standard editing and design to ensure a polished, publication-ready book.
            </p>
          </div>
          {/* 3. Book Marketing & Author Branding */}
          <div data-aos="fade-down-right" className="flex flex-col items-center text-center px-4">
            <Image
              src="/Service/Mask group (9).png" // update with your actual filename
              alt="Book Marketing & Author Branding"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Creative Collaboration</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              We blend your ideas with our expertise to co-create a compelling and authentic book.
            </p>
          </div>
        </div>
      </div>
    </section>
    </AOSProvider>
  )
}

export default OurApproach 