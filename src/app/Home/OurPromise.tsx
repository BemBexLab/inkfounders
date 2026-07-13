"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import { robotoMono } from "../fonts";

const promiseItems = [
  {
    id: "professional-editing-and-proofreading",
    image: "/Home/Mask group (1).png",
    alt: "Professional editing and proofreading",
    title: "Professional editing and proofreading",
    description:
      "Every author deserves the spotlight their story has earned, and that only happens when a book is both well written and well structured. As part of our self-publishing package with editing and cover design, our expert editors fine-tune your manuscript, sharpening grammar and structure without changing your voice. Our proofreaders then complete a final review to catch every mistake, so your book is published flawlessly.",
  },
  {
    id: "cover-design-the-soul-of-your-story",
    image: "/Home/Mask group (2).png",
    alt: "Cover design, the soul of your story",
    title: "Cover design, the soul of your story",
    description:
      "First impressions matter, and your book cover is often a reader's first one. Ink Founders offers custom book cover design services for self-published authors, designing covers that reflect your genre, mood, and message at a glance. With thoughtful typography and visuals, your cover becomes something readers remember.",
  },
  {
    id: "isbn-and-barcodes-your-book-global-identity",
    image: "/Home/Mask group (3).png",
    alt: "ISBN and barcodes: your book's global identity",
    title: "ISBN and barcodes: your book's global identity",
    description:
      "To keep your book unique, searchable, and easy to buy anywhere in the world, Ink Founders helps you secure an ISBN and barcode as part of our book publishing services for authors.",
  },
  {
    id: "be-an-author-increase-your-reach",
    image: "/Home/Mask group (4).png",
    alt: "Be an author, increase your reach",
    title: "Be an author, increase your reach",
    description:
      "Your book deserves to be read, not just published. As one of the top rated self publishing companies for author support, Ink Founders offers book marketing and promotion services for self-published authors, including social media campaigns and publicity strategies, so you can turn your passion into a lasting, recognized brand.",
  },
  {
    id: "your-ideas-your-control",
    image: "/Home/Mask group (5).png",
    alt: "Your ideas, your control, write it, own it",
    title: "Your ideas, your control, write it, own it",
    description:
      "A story is more than words; it's your passion, your dream, your voice. When you publish with Ink Founders, you keep 100% ownership of your work. We help turn your words into a book, and your voice into inspiration, while you hold full rights, always.",
  },
  {
    id: "our-support-forever-for-you",
    image: "/Home/Mask group (6).png",
    alt: "Our support, forever for you",
    title: "Our support, forever for you",
    description:
      "With Ink Founders, you're never on your own. Whether you have a question, a concern, or just need guidance, our team is available at every step, from your very first idea through publication and beyond.",
  },
];

const carouselPromiseItems = [...promiseItems, ...promiseItems];

const OurPromise = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const pauseCarouselRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const isResponsiveCarousel = () => window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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

  const getDisplayText = (description: string, isExpanded: boolean) => {
    const words = description.trim().split(/\s+/);

    if (isExpanded || words.length <= 43) {
      return description;
    }

    return `${words.slice(0, 43).join(" ")}...`;
  };

  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-0">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <p className="mb-2 text-center text-base font-semibold text-black sm:text-lg md:text-[25px]">
            We're committed to you
          </p>
          <h2 className="mb-6 max-w-4xl text-center text-[23px] font-semibold leading-[1.05] md:text-[32px] lg:mb-5 lg:text-[35px]">
            <span className="text-[#DADD39]">
              How You Turn Your Dreams Into Reality With Ink Founders
            </span>
          </h2>

          <CustomScrollbar
            ref={carouselRef}
            orientation="horizontal"
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="flex w-full max-w-full items-stretch gap-4 px-1 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
          >
            {carouselPromiseItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                data-aos="fade-down-right"
                className={`flex w-[82vw] max-w-[360px] shrink-0 flex-col items-start px-2 text-left sm:w-[58vw] sm:px-4 md:w-[42vw] lg:w-full lg:max-w-none lg:shrink lg:px-8 ${
                  index >= promiseItems.length ? "lg:hidden" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="mb-3 h-10 w-10 object-contain sm:h-12 sm:w-12"
                />
                <h3 className="mb-3 text-[17px] font-semibold leading-[1.08] text-black sm:text-[18px] md:text-[19px] lg:text-[20px] lg:leading-[1]">
                  {item.title}
                </h3>
                <p
                  className={`text-[13px] leading-[1.32] text-gray-700 sm:text-[14px] md:text-[15px] lg:leading-[1.2] ${robotoMono.className}`}
                >
                  {getDisplayText(
                    item.description,
                    expandedItems[item.title] ?? false,
                  )}
                </p>
                {item.description.trim().split(/\s+/).length > 43 && (
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
                    {expandedItems[item.title] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  );
};

export default OurPromise;
