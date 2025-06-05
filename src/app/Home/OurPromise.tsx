import Image from 'next/image'
import React from 'react'
import { robotoMono } from '../fonts'

const OurPromise = () => {
  return (
    <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-20">
  <div className="w-full max-w-[1300px] flex flex-col items-center">
    {/* Headings */}
    <p className="text-center text-lg md:text-[25px] md:text-xl font-semibold text-black mb-2">
      Our Promise to You
    </p>
    <h2 className="text-center text-[23px] md:text-[35px] font-semibold mb-14">
      <span className="text-[#DADD39]">What You Get with Ink Founder</span>
    </h2>
    {/* 3 columns */}
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
      {/* 1. Book Editing & Proofreading */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (1).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Book Editing & Proofreading
        </h3>
      <p className={` text-gray-700 text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          At Ink Founder, our skilled editors carefully refine your manuscript for clarity, grammar, and narrative flow—enhancing your story without compromising your voice. Once editing is complete, our meticulous proofreaders step in to catch any remaining typos or inconsistencies, ensuring your book is polished, professional, and publication-ready.
        </p>
      </div>
      {/* 2. Book Cover Design */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (2).png"
          alt="Myriad Of Distribution Channels"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Book Cover Design
        </h3>
        <p className={`text-gray-700 text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          Your cover is your book’s first impression—and it needs to shine. At Ink Founder, our creative design team works closely with you to craft a compelling, genre-appropriate cover that captures your story and grabs attention. The result? A striking, professional design that stands out on even the most crowded digital shelves.
        </p>
      </div>
      {/* 3. ISBN & Barcodes */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (3).png"
          alt="Book Marketing & Author Branding"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          ISBN & Barcodes
        </h3>
        <p className={` text-gray-700 text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          Your book deserves a unique identity in the global marketplace. Ink Founder helps you secure your ISBN (International Standard Book Number) and barcode, ensuring your book is easily discoverable by readers, libraries, and retailers worldwide.
        </p>
      </div>
      {/* 4. Comprehensive Book & Author Marketing */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (4).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Comprehensive Book & Author Marketing
        </h3>
        <p className={` text-gray-700 text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
         At Ink Founder, we don’t just publish your book—we help you promote it. Our team offers strategic guidance on building a strong marketing foundation, from social media campaigns and engaging author websites to securing book reviews. We’re here to help you reach your ideal readers and grow your presence as an author.
        </p>
      </div>
      {/* 5. Complete Copyrights & 100% Ownership */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (5).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Complete Copyrights & 100% Ownership
        </h3>
        <p className={` text-gray-700 text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
          Your book. Your rights. When you publish with Ink Founder, you retain full ownership of your work. We manage the publishing and distribution process, but the copyright stays entirely in your name—ensuring you maintain full control and receive all the financial rewards your book generates.
        </p>
      </div>
      {/* 6. Always-Here Customer Support */}
      <div className="flex flex-col items-start text-left px-8">
        <Image
          src="/Home/Mask group (6).png"
          alt="Holistic & Transparent Services"
          width={48}
          height={48}
          className="mb-3"
        />
        <h3 className="font-semibold text-base text-[16px] md:text-[20px] mb-2 text-black">
          Always-Here Customer Support
        </h3>
        <p className={` text-gray-700 text-[12px] md:text-[15px] leading-relaxed ${robotoMono.className}`}>
         At Ink Founder, you’re never on your own. Our dedicated support team is just a call or message away—ready to answer your questions, resolve concerns, and guide you through every step of your self-publishing journey. We're with you from start to shelf.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default OurPromise