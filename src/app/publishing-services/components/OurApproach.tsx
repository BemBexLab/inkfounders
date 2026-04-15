import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import AOSProvider from "@/components/AOSProvider";

const OurApproach = () => {
  return (
    <AOSProvider>
	      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-0">
	      <div className="flex w-full max-w-[1300px] flex-col items-center">
        {/* Headings */}
	        <p className="mb-2 text-center text-base font-semibold text-[#DADD39] sm:text-lg md:text-xl">
          Our Approach
        </p>
	        <h2 className="mb-8 max-w-5xl text-center text-[24px] font-semibold leading-[1.08] md:text-[2rem] lg:mb-10 lg:leading-tight">
          <span className="text-black">Crafting Your Masterpiece A Guided, Professional Publishing Experience from Start to Finish.</span>
        </h2>
        {/* 3 columns */}
		        <div className="grid w-full grid-cols-1 place-items-center items-start justify-items-center gap-8 sm:max-w-[34rem] md:max-w-none md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-4">
          {/* 1. Holistic & Transparent Services */}
		          <div data-aos="fade-down-right" className="mx-auto flex w-full max-w-[22rem] min-w-0 flex-col items-center justify-center px-2 text-center sm:px-4">
            <Image
              src="/Service/Mask group (7).png" // update with your actual filename
              alt="Holistic & Transparent Services"
              width={48}
              height={48}
	              className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
	            <h3 className="mb-2 text-xl font-semibold leading-tight text-black sm:text-xl">Personalized Support</h3>
	            <p className={`${robotoMono.className} text-center text-[13px] leading-[1.2] text-gray-700 sm:text-[14px] lg:leading-tight`}>
              Every author’s journey is unique—we customize our services to match your goals and vision.
            </p>
          </div>
          {/* 2. Myriad Of Distribution Channels */}
		          <div data-aos="fade-down-right" className="mx-auto flex w-full max-w-[22rem] min-w-0 flex-col items-center justify-center px-2 text-center sm:px-4">
            <Image
              src="/Service/Mask group (8).png" // update with your actual filename
              alt="Myriad Of Distribution Channels"
              width={48}
              height={48}
	              className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
	            <h3 className="mb-2 text-xl font-semibold leading-tight text-black sm:text-xl">Professional Quality</h3>
	            <p className={`${robotoMono.className} text-center text-[13px] leading-[1.2] text-gray-700 sm:text-[14px] lg:leading-tight`}>
             We deliver industry-standard editing and design to ensure a polished, publication-ready book.
            </p>
          </div>
          {/* 3. Book Marketing & Author Branding */}
		          <div data-aos="fade-down-right" className="mx-auto flex w-full max-w-[22rem] min-w-0 flex-col items-center justify-center px-2 text-center sm:px-4 md:col-span-2 lg:col-span-1">
            <Image
              src="/Service/Mask group (9).png" // update with your actual filename
              alt="Book Marketing & Author Branding"
              width={48}
              height={48}
	              className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
	            <h3 className="mb-2 text-xl font-semibold leading-tight text-black sm:text-xl">Creative Collaboration</h3>
	            <p className={`${robotoMono.className} text-center text-[13px] leading-[1.2] text-gray-700 sm:text-[14px] lg:leading-tight`}>
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
