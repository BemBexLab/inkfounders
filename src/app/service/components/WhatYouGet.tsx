import { robotoMono } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'
import AOSProvider from "@/components/AOSProvider";


const WhatYouGet = () => {
  return (
    <AOSProvider>
      <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-20">
  <div className="w-full max-w-[1300px] flex flex-col items-center">
    {/* Headings */}
    <h2 className="text-center text-[23px] md:text-[30px] font-semibold mb-14">
      <span className="text-[#1F1F1F]">What You Get with Ink Founder</span>
    </h2>
    {/* 3 columns */}
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
      {/* 1. Book Editing & Proofreading */}
      <div data-aos="fade-down-right" className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (1).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Conventional Publishing
        </h3>
      <p className={` text-[#444444] text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}>
          For authors seeking the credibility of traditional publishing, we offer end-to-end support—from manuscript assessment to professional editing, design, and distribution. Our team ensures a polished, high-standard final product tailored for wide release.
        </p>
      </div>
      {/* 2. Book Cover Design */}
      <div data-aos="fade-down-right" className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (2).png"
          alt="Myriad Of Distribution Channels"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Self-Publishing
        </h3>
        <p className={`text-[#444444] text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}>
          Break away from traditional publishing constraints and take full control of your book’s journey. Our expert editors, designers, and support team help you transform your manuscript into a professionally crafted, self-published work—on your terms.
        </p>
      </div>
      {/* 3. ISBN & Barcodes */}
      <div data-aos="fade-down-right" className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (3).png"
          alt="Book Marketing & Author Branding"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Hybrid Publishing
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}>
          Enjoy the best of both worlds—traditional publishing quality with the freedom of self-publishing. Our team collaborates with you to produce a professional book while you retain creative control and ownership.
        </p>
      </div>
      {/* 4. Comprehensive Book & Author Marketing */}
      <div data-aos="fade-down-right" className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (4).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          E-Book Publishing
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}>
        Embrace the digital era and expand your reach with professionally formatted e-books. We ensure compatibility across devices, making your book accessible to readers anytime, anywhere.
        </p>
      </div>
      {/* 5. Complete Copyrights & 100% Ownership */}
      <div data-aos="fade-down-right" className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (5).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Print-On-Demand Publishing
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}>
        Avoid bulk printing and inventory stress—print only what you need, when you need it. Our on-demand service saves costs and space while we handle the logistics, so you can focus on writing and promotion.
        </p>
      </div>
      {/* 6. Always-Here Customer Support */}
      <div data-aos="fade-down-right" className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (6).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Specialized Publishing
        </h3>
        <p className={` text-[#444444] text-[12px] md:text-[15px] leading-loose ${robotoMono.className}`}>
        Customize your publishing journey with services that fit your goals and budget. From editing to marketing, our expert team provides focused support to give your book the attention it deserves.
        </p>
      </div>
    </div>
  </div>
</section>
    </AOSProvider>

  )
}

export default WhatYouGet