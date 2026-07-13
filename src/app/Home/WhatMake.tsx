'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import { robotoMono } from '../fonts'

const whatMakeItems = [
  {
    id: 'integrated-publishing-services',
    title: 'Integrated, straightforward publishing services',
    description:
      'As your publishing partner, Ink Founders offers a full-service publishing model covering editing, formatting, publishing, and marketing, all under one roof. Our team supports you at every stage, with clear communication so you always know where your book stands.',
    image: '/Home/image 5 (traced).png',
    alt: 'Holistic & Transparent Services',
  },
  {
    id: 'worldwide-network-distribution',
    title: 'Worldwide network distribution',
    description:
      "Your story isn't just a book; it's a dream we help bring to life. It deserves to be read by the whole world, and we mean that literally. Ink Founders doesn't only publish your book; we distribute it across more than 40 global platforms so it can reach readers everywhere.",
    image: '/Home/image 6 (traced).png',
    alt: 'Myriad Of Distribution Channels',
  },
  {
    id: 'marketing-books-and-building-brands',
    title: 'Marketing books and building brands, together',
    description:
      "Publishing your book is only the beginning. Building your brand is what turns it into something lasting. That's why Ink Founders offers author branding services designed to build your public image and connect you with the right audience.",
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
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 pt-4 sm:px-6 md:px-8 lg:px-0 lg:pt-2">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <p className="text-center text-base font-semibold text-black mb-2 sm:text-lg md:text-xl">
            Witness our Uniqueness
          </p>
          <h2 className="mb-6 max-w-[48rem] text-center text-[1.55rem] font-semibold leading-[0.9] sm:text-2xl md:mb-8 md:text-[1.85rem] lg:max-w-none lg:text-[2rem]">
            <span className="text-[#DADD39]">At Ink Founders, Your Goals Are Our Commitment</span>
          </h2>

          <CustomScrollbar
            ref={carouselRef}
            orientation="horizontal"
            data-aos="fade-down-right"
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="flex w-full max-w-full items-stretch gap-4 px-1 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
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
                  <CustomScrollbar
                    className="h-auto overflow-visible lg:max-h-[125px]"
                    trackClassName="bg-[#ececcf]"
                    thumbClassName="bg-[#c7c934]"
                  >
                    <p className={`${robotoMono.className} text-[13px] leading-[1.2] text-gray-700 sm:text-[14px] md:text-[15px] md:leading-[1.2] lg:text-[16px]`}>
                      {item.description}
                    </p>
                  </CustomScrollbar>
                </div>
              </div>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  )
}

export default WhatMake
