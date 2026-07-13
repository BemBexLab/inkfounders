"use client";

import { robotoMono } from "@/app/fonts";
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const cards = [
  {
    image: "/Home/Mask group (1).png",
    alt: "Conventional Publishing",
    title: "Conventional Publishing",
    description:
      "For authors seeking the credibility of traditional publishing, we offer end-to-end support, from manuscript assessment to professional editing, design, and distribution. Our team delivers a polished, high-standard final product built for wide release. Not sure which route is right for you? Our team can walk you through a traditional vs. self-publishing service comparison based on your goals.",
  },
  {
    image: "/Home/Mask group (2).png",
    alt: "Self-Publishing",
    title: "Self-Publishing",
    description:
      "Break away from the constraints of traditional publishing and take full control of your book's journey. As a self-publishing platform for first-time authors and experienced writers alike, our editors, designers, and support team help you turn your manuscript into a professionally crafted, self-published work on your terms, including self-publishing packages with an ISBN included, so your book is ready to sell from day one.",
  },
  {
    image: "/Home/Mask group (3).png",
    alt: "Hybrid Publishing",
    title: "Hybrid Publishing",
    description:
      "Get the best of both worlds. Our hybrid publishing services for authors combine traditional publishing quality with the freedom and ownership of self-publishing. Our team collaborates with you to produce a professional book while you keep creative control.",
  },
  {
    image: "/Home/Mask group (4).png",
    alt: "E-Book Publishing",
    title: "E-Book Publishing",
    description:
      "Embrace the digital era and expand your reach with professionally formatted e-books, built for compatibility across devices, so your book is accessible to readers anytime, anywhere.",
  },
  {
    image: "/Home/Mask group (5).png",
    alt: "Print-On-Demand Publishing",
    title: "Print-On-Demand Publishing",
    description:
      "Skip the bulk printing and inventory stress. With our print-on-demand publishing service, you print only what you need, when you need it. We handle the logistics so you can focus on writing and promotion.",
  },
  {
    image: "/Home/Mask group (6).png",
    alt: "Specialized Publishing",
    title: "Specialized Publishing",
    description:
      "Customize your publishing journey with services built around your goals and budget, including publishing packages for nonfiction authors, Christian book publishing packages, and publishing services for children's book authors. From editing to marketing, our expert team provides focused support to give your book the attention it deserves.",
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
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-0">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          <h2 className="mb-8 max-w-4xl text-center text-[24px] font-semibold leading-[1.05] text-black md:text-[30px] lg:mb-8">
            What You Get With Ink Founders
          </h2>

          <CustomScrollbar
            ref={carouselRef}
            orientation="horizontal"
            data-aos="fade-down-right"
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="flex w-full max-w-full items-stretch gap-4 px-1 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-4 lg:gap-y-10 lg:overflow-visible lg:px-0 lg:pb-0"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
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
                <CustomScrollbar
                  className="max-h-[15vh]"
                  style={{ marginRight: 0, paddingRight: "0.75rem" }}
                >
                  <p
                    className={`${robotoMono.className} text-[13px] leading-[1.35] text-[#444444] sm:text-[14px] md:text-[15px] lg:leading-loose`}
                  >
                    {card.description}
                  </p>
                </CustomScrollbar>
              </div>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  );
};

export default WhatYouGet;
