import Image from 'next/image'
import React from 'react'
import { robotoMono } from '../fonts'

const Testimonials = () => {
  return (
     <section className="w-full bg-[#F6F5F3] flex justify-center items-center py-20 max-md:px-5">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-[25px] font-semibold text-black mb-2">
          Testimonials
        </p>
        <h2 className="text-center text-[23px] md:text-[35px] font-semibold mb-14">
          <span className="text-[#DADD39]">Read Testimonials From Our Happy Customers</span>
        </h2>
        {/* 3 columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 mb-8">
          {/* Card 1 */}
          <div className="bg-[#F6F5F3] rounded-xl shadow-none border border-gray-200 flex flex-col px-8 pt-8 pb-6 min-h-[350px] relative">
            {/* Yellow Circle with Image */}
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DADD39] absolute -top-6 left-8">
              <Image
                src="/Home/“.png" // Your image here, e.g. a black quote mark icon
                alt="Quote Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </span>
            {/* Testimonial */}
            <p className={`text-gray-700 font-mono text-[12px] md:text-[15px] mb-7 mt-8 leading-loose ${robotoMono.className}`}>
              Ink Founder didn’t just publish my book — they helped me promote it too. Their team gave me great advice on building my marketing from the ground up, including social media...
            </p>
            <div className="border-b border-gray-200 mb-4" />
            {/* Profile */}
            <div className="flex items-center gap-3">
              <Image
                src="/Home/Frame 66 (1).png"
                alt="Noel Jensen"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-black text-[15px] leading-tight">Noel Jensen</p>
                <p className="text-gray-500 text-[13px] leading-tight font-mono">Great Writer</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#F6F5F3] rounded-xl shadow-none border border-gray-200 flex flex-col px-8 pt-8 pb-6 min-h-[350px] relative">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DADD39] absolute -top-6 left-8">
              <Image
                src="/Home/“.png" // Your image here
                alt="Quote Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </span>
            <p className={`text-gray-700 font-mono text-[12px] md:text-[15px] mb-7 mt-8 leading-loose ${robotoMono.className}`}>
              Ink Founder made the whole process easy for me. They not only published my book but also showed me how to market it, build my brand, and reach the right readers for real results
            </p>
            <div className="border-b border-gray-200 mb-4" />
            <div className="flex items-center gap-3">
              <Image
                src="/Home/Frame 66 (2).png"
                alt="Sarita Espiricueta"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-black text-[15px] leading-tight">Sarita Espiricueta</p>
                <p className="text-gray-500 text-[13px] leading-tight font-mono">Great Writer</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#F6F5F3] rounded-xl shadow-none border border-gray-200 flex flex-col px-8 pt-8 pb-6 min-h-[350px] relative">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DADD39] absolute -top-6 left-8">
              <Image
                src="/Home/“.png" // Your image here
                alt="Quote Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </span>
            <p className={`text-gray-700 font-mono text-[12px] md:text-[15px] mb-7 mt-8 leading-loose ${robotoMono.className}`}>
              Thanks to Ink Founder, my book launch was a smooth experience. They helped me every step of the way—from publishing and promotion to building my author brand and connecting with new fans
            </p>
            <div className="border-b border-gray-200 mb-4" />
            <div className="flex items-center gap-3">
              <Image
                src="/Home/Frame 66.png"
                alt="Michael Gordon"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-black text-[15px] leading-tight">Michael Gordon</p>
                <p className="text-gray-500 text-[13px] leading-tight font-mono">Great Writer</p>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="w-3 h-3 rounded-full bg-[#ededda]"></span>
          <span className="w-3 h-3 rounded-full bg-[#DADD39]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ededda]"></span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials