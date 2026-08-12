'use client'

import Image from 'next/image'
import React from 'react'
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import { robotoMono } from '../fonts'

const whatMakeItems = [
  {
    id: 'integrated-publishing-services',
    title: 'Integrated, straightforward publishing services',
    description:
      'As your publishing partner, Ink Founders offers a full-service publishing model covering editing, formatting, publishing, and marketing, all under one roof. Our team supports you at every stage, with clear communication so you always know where your book stands.',
    image: '/Home/image 5 (traced).webp',
    alt: 'Holistic & Transparent Services',
  },
  {
    id: 'worldwide-network-distribution',
    title: 'Worldwide network distribution',
    description:
      "Your story isn't just a book; it's a dream we help bring to life. It deserves to be read by the whole world, and we mean that literally. Ink Founders doesn't only publish your book; we distribute it across more than 40 global platforms so it can reach readers everywhere.",
    image: '/Home/image 6 (traced).webp',
    alt: 'Myriad Of Distribution Channels',
  },
  {
    id: 'marketing-books-and-building-brands',
    title: 'Marketing books and building brands, together',
    description:
      "Publishing your book is only the beginning. Building your brand is what turns it into something lasting. That's why Ink Founders offers author branding services designed to build your public image and connect you with the right audience.",
    image: '/Home/material-symbols_book-4.webp',
    alt: 'Book Marketing & Author Branding',
  },
];

const WhatMake = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center overflow-hidden bg-[#F6F5F3] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12 xl:px-12">
        <div className="flex w-full max-w-[1300px] min-w-0 flex-col items-center">
          {/* Headings */}
          <p className="mb-2 text-center text-sm font-semibold text-black sm:text-base md:text-lg lg:text-xl">
            Witness our Uniqueness
          </p>
          <h2 className="mb-7 max-w-[52rem] text-balance text-center text-[clamp(1.65rem,5vw,2.5rem)] font-semibold leading-[1.08] sm:mb-9 lg:mb-12">
            <span className="text-[#DADD39]">At Ink Founders, Your Goals Are Our Commitment</span>
          </h2>

          <CustomScrollbar
            orientation="horizontal"
            role="list"
            aria-label="What makes Ink Founders unique"
            data-aos="fade-down-right"
            containerClassName="w-full min-w-0"
            className="flex w-full min-w-0 snap-x snap-mandatory scroll-px-1 items-stretch gap-4 overflow-x-auto overscroll-x-contain px-1 pb-4 touch-pan-x sm:gap-5 sm:scroll-px-2 sm:px-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-10"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
          >
            {whatMakeItems.map((item) => (
              <article
                key={item.id}
                role="listitem"
                className="flex w-[88%] max-w-[25rem] shrink-0 snap-start flex-col items-center px-1 text-center sm:w-[70%] sm:px-3 md:w-[46%] lg:w-full lg:max-w-none lg:shrink lg:snap-none lg:px-0"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={56}
                  height={56}
                  sizes="(max-width: 639px) 40px, (max-width: 1023px) 48px, 56px"
                  className="mb-3 h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 lg:mb-4 lg:h-14 lg:w-14"
                />
                <h3 className="mb-3 max-w-[30rem] text-lg font-semibold leading-tight text-black sm:text-xl md:text-[1.35rem] lg:min-h-[3.75rem] lg:text-2xl">
                  {item.title}
                </h3>
                <p className={`${robotoMono.className} w-full max-w-[25rem] text-[0.78rem] leading-relaxed text-gray-700 sm:text-[0.84rem] md:text-sm lg:text-[0.95rem]`}>
                  {item.description}
                </p>
              </article>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  )
}

export default WhatMake
