import Image from 'next/image'
import React from 'react'
import { robotoMono } from '../fonts'

const WhatMake = () => {
  return (
    <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-10">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-xl font-semibold text-black mb-2">
          What Makes Us Different
        </p>
        <h2 className="text-center text-2xl md:text-[2rem] font-semibold mb-14">
          <span className="text-[#DADD39]">At Ink Founders, Your Vision Is Our Mission.</span>
        </h2>
        {/* 3 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {/* 1. Holistic & Transparent Services */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/Home/image 5 (traced).png" // update with your actual filename
              alt="Holistic & Transparent Services"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Holistic & Transparent Services</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              Ink Founder offers a complete range of digital tools and services–from initial editing to final publication and marketing. With transparent, open communication at every stage, we keep you informed and involved throughout your publishing journey.
            </p>
          </div>
          {/* 2. Myriad Of Distribution Channels */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/Home/image 6 (traced).png" // update with your actual filename
              alt="Myriad Of Distribution Channels"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Myriad Of Distribution Channels</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              Ink Founder ensures your book gets the spotlight it deserves–across more than 40 distribution platforms, including major retailers like Amazon, Barnes & Noble, Apple Books, IngramSpark, and many more–so you can reach the widest possible audience.
            </p>
          </div>
          {/* 3. Book Marketing & Author Branding */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/Home/material-symbols_book-4.png" // update with your actual filename
              alt="Book Marketing & Author Branding"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Book Marketing & Author Branding</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              At Ink Founder, we do more than publish your book–we help you build your author brand and provide marketing support to connect with readers and promote your work with impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatMake