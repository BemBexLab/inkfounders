import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'


const WhatSet = () => {
  return (
    <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-10">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
       <h2 className="text-center text-2xl md:text-[2rem] font-semibold mb-14">
  <span className="text-black">What Sets Us Apart</span>
</h2>
<div className="max-w-6xl mx-auto mb-10">
  <p className={`text-[#444444] text-[15px] text-center ${robotoMono.className} max-md:px-[15px]`}>
    Ink Founders isn’t just another publishing service—we’re your creative partners in turning ideas into powerful, publishable stories. With us, you’ll receive exceptional service, personalized support, and a team that truly invests in your vision.<br className="" />
    We tailor each package to fit your goals, your genre, and your unique voice—ensuring your manuscript gets the attention and craftsmanship it deserves. At Ink Founders, we don’t just publish books—we help authors make their mark.
  </p>
</div>

        {/* 3 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {/* 1. Holistic & Transparent Services */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/whoweare/Mask group (10).png" // update with your actual filename
              alt="Holistic & Transparent Services"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">100% original, <br /> custom-written content</h3>
          </div>
          {/* 2. Myriad Of Distribution Channels */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/whoweare/Mask group (11).png" // update with your actual filename
              alt="Myriad Of Distribution Channels"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">A professional team of<br /> seasoned ghostwriters</h3>
          </div>
          {/* 3. Book Marketing & Author Branding */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/whoweare/Mask group (12).png" // update with your actual filename
              alt="Book Marketing & Author Branding"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Over 350+ books successfully<br /> written and delivered</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatSet