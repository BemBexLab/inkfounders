'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import AOSProvider from "@/components/AOSProvider";
import { robotoMono } from '../fonts'

const whatMakeItems = [
  {
    title: 'Integrated and straightforward publishing services',
    description:
      'Ink Founders, your publishing partner, provides a smooth and exciting publishing journey with a full-service publishing model from editing, formatting, publishing, and marketing services. Our team supports you at every stage, and with clear communication, authors are informed and engaged throughout their publishing journey.',
    image: '/Home/image 5 (traced).png',
    alt: 'Holistic & Transparent Services',
  },
  {
    title: 'Worldwide network distribution',
    description:
      'Your story is not only a book but a dream filled with Ink Founders. It is a masterpiece that the whole world should recognise its worth, and we mean the whole world, so Ink Founders not only publish your book but distribute it to more than 40 global platforms, so that your book can touch the hearts of millions of readers.',
    image: '/Home/image 6 (traced).png',
    alt: 'Myriad Of Distribution Channels',
  },
  {
    title: 'Marketing books and building brands-together',
    description:
      'Publishing the book is just the start, but making your brand is what makes it a masterpiece. So, Ink Founders helps you to establish a powerful author branding service, as it not only helps to build a public image but also helps in targeting the right audience.',
    image: '/Home/material-symbols_book-4.png',
    alt: 'Book Marketing & Author Branding',
  },
];

const WhatMake = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const getDisplayText = (description: string, isExpanded: boolean) => {
    const words = description.trim().split(/\s+/)

    if (isExpanded || words.length <= 22) {
      return description
    }

    return `${words.slice(0, 22).join(' ')}...`
  }

  return (
    <AOSProvider>
      <section className="w-full bg-[#F6F5F3] flex justify-center items-center pt-2">
        <div className="w-full max-w-[1300px] flex flex-col items-center">
          {/* Headings */}
          <p className="text-center text-lg md:text-xl font-semibold text-black">
            Witness our Uniqueness
          </p>
          <h2 className="text-center text-2xl md:text-[2rem] font-semibold mb-8">
            <span className="text-[#DADD39]">At Ink Founders, Your Goals, Our Commitment</span>
          </h2>

          <div data-aos="fade-down-right" className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4">
            {whatMakeItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center px-4 text-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="mb-3"
                />
                <h3 className="mb-2 text-base font-semibold text-black leading-tight md:text-[20px]">
                  {item.title}
                </h3>
                <p className={`${robotoMono.className} text-gray-700 text-[16px] leading-tight`}>
                  {getDisplayText(item.description, expandedItems[item.title] ?? false)}
                </p>
                {item.description.trim().split(/\s+/).length > 22 && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedItems((prev) => ({
                        ...prev,
                        [item.title]: !prev[item.title],
                      }))
                    }
                    className="mt-3 text-sm font-semibold text-black underline underline-offset-4"
                  >
                    {expandedItems[item.title] ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AOSProvider>
  )
}

export default WhatMake
