import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import AOSProvider from "@/components/AOSProvider";


const WhatSet = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8">
      <div className="flex w-full max-w-[1300px] flex-col items-center">
       <h2 className="mb-3 text-center text-2xl font-semibold md:text-[2rem]">
  <span className="text-black">What Sets Us Apart</span>
</h2>
	<div className="mx-auto mb-10 max-w-6xl">
	  <p className={`text-center text-[13px] text-[#444444] sm:text-[14px] md:text-[15px] ${robotoMono.className}`}>
    Ink Founders isn’t just another publishing service—we’re your creative partners in turning ideas into powerful, publishable stories. With us, you’ll receive exceptional service, personalized support, and a team that truly invests in your vision.<br className="" />
    We tailor each package to fit your goals, your genre, and your unique voice—ensuring your manuscript gets the attention and craftsmanship it deserves. At Ink Founders, we don’t just publish books—we help authors make their mark.
  </p>
</div>

        {/* 3 columns */}
	        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {/* 1. Holistic & Transparent Services */}
	          <div data-aos="fade-up" className="flex flex-col items-center px-4 text-center">
            <Image
              src="/whoweare/Mask group (10).png" // update with your actual filename
              alt="Holistic & Transparent Services"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="mb-2 text-base font-semibold text-black md:text-[18px]">100% original, <br /> custom-written content</h3>
          </div>
          {/* 2. Myriad Of Distribution Channels */}
	          <div data-aos="fade-up" className="flex flex-col items-center px-4 text-center">
            <Image
              src="/whoweare/Mask group (11).png" // update with your actual filename
              alt="Myriad Of Distribution Channels"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="mb-2 text-base font-semibold text-black md:text-[18px]">A professional team of<br /> seasoned ghostwriters</h3>
          </div>
          {/* 3. Book Marketing & Author Branding */}
	          <div data-aos="fade-up" className="flex flex-col items-center px-4 text-center sm:col-span-2 lg:col-span-1">
            <Image
              src="/whoweare/Mask group (12).png" // update with your actual filename
              alt="Book Marketing & Author Branding"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="mb-2 text-base font-semibold text-black md:text-[18px]">Over 350+ books successfully<br /> written and delivered</h3>
          </div>
        </div>
      </div>
    </section>
    </AOSProvider>
  )
}

export default WhatSet
