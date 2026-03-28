import Image from 'next/image'
import React from 'react'
import { robotoMono } from '../fonts'
import AOSProvider from "@/components/AOSProvider";

const WhatMake = () => {
  return (
    <AOSProvider>
    <section  className="w-full bg-[#F6F5F3] flex justify-center items-center py-10">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-xl font-semibold text-black mb-2">
          Witness our Uniqueness
        </p>
        <h2 className="text-center text-2xl md:text-[2rem] font-semibold mb-14">
          <span className="text-[#DADD39]">At Ink Founders, Your Goals, Our Commitment</span>
        </h2>
        {/* 3 columns */}
        <div data-aos="fade-down-right" className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {/* 1. Holistic & Transparent Services */}
          <div className="flex flex-col items-center text-center px-4">
            <Image
              src="/Home/image 5 (traced).png" // update with your actual filename
              alt="Holistic & Transparent Services"
              width={48}
              height={48}
              className="mb-3"
            />
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Integrated and straightforward publishing services</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              Ink Founders, your publishing partner, provides a smooth and exciting publishing journey with a full-service publishing model from editing, formatting, publishing, and marketing services. Our team supports you at every stage, and with clear communication, authors are informed and engaged throughout their publishing journey.
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
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Worldwide network distribution</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              Your story is not only a book but a dream filled with Ink Founders. It is a masterpiece that the whole world should recognise its worth, and we mean the whole world, so Ink Founders not only publish your book but distribute it to more than 40 global platforms, so that your book can touch the hearts of millions of readers.
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
            <h3 className="font-semibold text-base md:text-[18px] mb-2 text-black">Marketing books and building brands—together</h3>
            <p className={`${robotoMono.className} text-gray-700 text-[14px] leading-loose`}>
              Publishing the book is just the start, but making your brand is what makes it a masterpiece. So, Ink Founders helps you to establish a powerful author branding service, as it not only helps to build a public image but also helps in targeting the right audience. 
            </p>
          </div>
        </div>
      </div>
    </section>
    </AOSProvider>
  )
}

export default WhatMake