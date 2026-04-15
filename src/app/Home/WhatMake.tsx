'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AOSProvider from "@/components/AOSProvider";
import { robotoMono } from '../fonts'

const whatMakeItems = [
  {
    id: 'integrated-publishing-services',
    title: 'Integrated and straightforward publishing services',
    description:
      'Ink Founders, your publishing partner, provides a smooth and exciting publishing journey with a full-service publishing model from editing, formatting, publishing, and marketing services. Our team supports you at every stage, and with clear communication, authors are informed and engaged throughout their publishing journey.',
    image: '/Home/image 5 (traced).png',
    alt: 'Holistic & Transparent Services',
  },
  {
    id: 'worldwide-network-distribution',
    title: 'Worldwide network distribution',
    description:
      'Your story is not only a book but a dream filled with Ink Founders. It is a masterpiece that the whole world should recognise its worth, and we mean the whole world, so Ink Founders not only publish your book but distribute it to more than 40 global platforms, so that your book can touch the hearts of millions of readers.',
    image: '/Home/image 6 (traced).png',
    alt: 'Myriad Of Distribution Channels',
  },
  {
    id: 'marketing-books-and-building-brands',
    title: 'Marketing books and building brands-together',
    description:
      'Publishing the book is just the start, but making your brand is what makes it a masterpiece. So, Ink Founders helps you to establish a powerful author branding service, as it not only helps to build a public image but also helps in targeting the right audience.',
    image: '/Home/material-symbols_book-4.png',
    alt: 'Book Marketing & Author Branding',
  },
];

const carouselItems = [...whatMakeItems, ...whatMakeItems]

const WhatMake = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const pauseCarouselRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const isResponsiveCarousel = () => window.innerWidth < 1024
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const scrollContinuously = () => {
      if (!isResponsiveCarousel() || pauseCarouselRef.current) return

      const singleSetWidth = carousel.scrollWidth / 2
      const shouldReset = carousel.scrollLeft >= singleSetWidth

      carousel.scrollLeft = shouldReset ? 0 : carousel.scrollLeft + 1.1
    }

    const animate = () => {
      scrollContinuously()
      animationFrameRef.current = window.requestAnimationFrame(animate)
    }

    animationFrameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const pauseCarousel = () => {
    pauseCarouselRef.current = true
  }

  const resumeCarousel = () => {
    pauseCarouselRef.current = false
  }

  return (
    <AOSProvider>
      <style jsx global>{`
        .what-make-scroll {
          scrollbar-width: thin;
          scrollbar-color: #dedfa3 transparent;
          scrollbar-gutter: stable;
        }

        .what-make-scroll::-webkit-scrollbar {
          width: 3px;
        }

        .what-make-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .what-make-scroll::-webkit-scrollbar-thumb {
          background: #c7c934;
          border-radius: 999px;
        }

        .what-make-carousel {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .what-make-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 pt-4 sm:px-6 md:px-8 lg:px-0 lg:pt-2">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <p className="text-center text-base font-semibold text-black mb-2 sm:text-lg md:text-xl">
            Witness our Uniqueness
          </p>
          <h2 className="mb-6 max-w-[48rem] text-center text-[1.55rem] font-semibold leading-[0.9] sm:text-2xl md:mb-8 md:text-[1.85rem] lg:max-w-none lg:text-[2rem]">
            <span className="text-[#DADD39]">At Ink Founders, Your Goals, Our Commitment</span>
          </h2>

          <div
            ref={carouselRef}
            data-aos="fade-down-right"
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="what-make-carousel flex w-full max-w-full items-stretch gap-4 overflow-x-auto px-1 pb-4 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {carouselItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`flex w-[82vw] max-w-[360px] shrink-0 flex-col items-center px-2 text-center sm:w-[58vw] sm:px-4 md:w-[42vw] lg:w-full lg:max-w-none lg:shrink ${
                  index >= whatMakeItems.length ? "lg:hidden" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
                />
                <h3 className="mb-3 max-w-[30rem] text-[18px] font-semibold leading-[1] text-black sm:text-[20px] md:text-[22px] lg:text-2xl">
                  {item.title}
                </h3>
                <div className="relative w-full max-w-[24rem] lg:h-auto lg:max-h-[125px]">
                  <div className="what-make-scroll h-auto overflow-visible pr-0 lg:max-h-[125px] lg:overflow-y-auto lg:pr-2">
                    <p className={`${robotoMono.className} text-[13px] leading-[1.2] text-gray-700 sm:text-[14px] md:text-[15px] md:leading-[1.2] lg:text-[16px]`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AOSProvider>
  )
}

export default WhatMake
