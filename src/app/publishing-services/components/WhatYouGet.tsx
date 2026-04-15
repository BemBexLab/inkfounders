"use client";

import { robotoMono } from "@/app/fonts";
import AOSProvider from "@/components/AOSProvider";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const cards = [
  {
    image: "/Home/Mask group (1).png",
    alt: "Conventional Publishing",
    title: "Conventional Publishing",
    description:
      "For authors seeking the credibility of traditional publishing, we offer end-to-end support from manuscript assessment to professional editing, design, and distribution. Our team ensures a polished, high-standard final product tailored for wide release.",
  },
  {
    image: "/Home/Mask group (2).png",
    alt: "Self-Publishing",
    title: "Self-Publishing",
    description:
      "Break away from traditional publishing constraints and take full control of your book's journey. Our expert editors, designers, and support team help you transform your manuscript into a professionally crafted, self-published work on your terms.",
  },
  {
    image: "/Home/Mask group (3).png",
    alt: "Hybrid Publishing",
    title: "Hybrid Publishing",
    description:
      "Enjoy the best of both worlds, traditional publishing quality with the freedom of self-publishing. Our team collaborates with you to produce a professional book while you retain creative control and ownership.",
  },
  {
    image: "/Home/Mask group (4).png",
    alt: "E-Book Publishing",
    title: "E-Book Publishing",
    description:
      "Embrace the digital era and expand your reach with professionally formatted e-books. We ensure compatibility across devices, making your book accessible to readers anytime, anywhere.",
  },
  {
    image: "/Home/Mask group (5).png",
    alt: "Print-On-Demand Publishing",
    title: "Print-On-Demand Publishing",
    description:
      "Avoid bulk printing and inventory stress. Print only what you need, when you need it. Our on-demand service saves costs and space while we handle the logistics, so you can focus on writing and promotion.",
  },
  {
    image: "/Home/Mask group (6).png",
    alt: "Specialized Publishing",
    title: "Specialized Publishing",
    description:
      "Customize your publishing journey with services that fit your goals and budget. From editing to marketing, our expert team provides focused support to give your book the attention it deserves.",
  },
];

const carouselCards = [...cards, ...cards];

const WhatYouGet = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pauseCarouselRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const isResponsiveCarousel = () => window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const scrollContinuously = () => {
      if (!isResponsiveCarousel() || pauseCarouselRef.current) return;

      const singleSetWidth = carousel.scrollWidth / 2;
      const shouldReset = carousel.scrollLeft >= singleSetWidth;

      carousel.scrollLeft = shouldReset ? 0 : carousel.scrollLeft + 1.1;
    };

    const animate = () => {
      scrollContinuously();
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const pauseCarousel = () => {
    pauseCarouselRef.current = true;
  };

  const resumeCarousel = () => {
    pauseCarouselRef.current = false;
  };

  return (
    <AOSProvider>
      <style jsx global>{`
        .what-you-get-slider {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .what-you-get-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-0">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          <h2 className="mb-8 max-w-4xl text-center text-[24px] font-semibold leading-[1.05] text-black md:text-[30px] lg:mb-8">
            What You Get with Ink Founder
          </h2>

          <div
            ref={carouselRef}
            data-aos="fade-down-right"
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="what-you-get-slider flex w-full max-w-full items-stretch gap-4 overflow-x-auto px-1 pb-4 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-4 lg:gap-y-10 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {carouselCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className={`flex w-[82vw] max-w-[360px] shrink-0 flex-col items-start px-2 text-left sm:w-[58vw] sm:px-4 md:w-[42vw] lg:w-full lg:max-w-none lg:shrink lg:px-8 ${
                  index >= cards.length ? "lg:hidden" : ""
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={48}
                  height={48}
                  className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
                />
                <h3 className="mb-2 text-[17px] font-semibold leading-tight text-black sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  {card.title}
                </h3>
                <p
                  className={`${robotoMono.className} text-[13px] leading-[1.35] text-[#444444] sm:text-[14px] md:text-[15px] lg:leading-loose`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default WhatYouGet;
