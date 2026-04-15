'use client';

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AOSProvider from "@/components/AOSProvider";
import { robotoMono } from "../fonts";

const promiseItems = [
  {
    id: "professional-editing-and-proofreading",
    image: "/Home/Mask group (1).png",
    alt: "Professional Editing and Proofreading",
    title: "Professional Editing and Proofreading",
    description:
      "Every author's dream is to get the spotlight that its story deserves but it's possible when your story is not only written well but structured well, so Ink Founders fine-tunes your script with expert editors that focus on grammar and structure without changing its real tone of message. After that our proofreaders goes from a final process to examine the mistakes to ensure that book is published flawlessly and professionally.",
  },
  {
    id: "cover-design-the-soul-of-your-story",
    image: "/Home/Mask group (2).png",
    alt: "Cover Design The Soul of Your Story",
    title: "Cover Design-The Soul of Your Story",
    description:
      "First impressions matter, and a book cover captures attention while adding soul to your story. Ink Founders carefully designs covers that reflect the genre, mood, and message of your story at a glance. With thoughtful typography and visuals, your book cover becomes unforgettable.",
  },
  {
    id: "global-identity-isbn-and-barcodes",
    image: "/Home/Mask group (3).png",
    alt: "Global Identity of Your Book ISBN and Barcodes",
    title: "Global Identity of Your Book-ISBN and Barcodes",
    description:
      "To keep your book unique and searchable, Ink Founders helps secure its ISBN and barcode, ensuring it is easily reachable, buyable, and available worldwide.",
  },
  {
    id: "be-an-author-increase-your-reach",
    image: "/Home/Mask group (4).png",
    alt: "Be an Author Increase Your Reach",
    title: "Be an Author-Increase Your Reach",
    description:
      "Your book deserves to be read, not just published. Ink Founders supports you with marketing tools, social media campaigns, and strategies to reach your audience. We are with you every step of the way to turn your passion into a powerful and unforgettable brand.",
  },
  {
    id: "your-ideas-your-control",
    image: "/Home/Mask group (5).png",
    alt: "Your Ideas Your Control Write It Own It",
    title: "Your Ideas-Your Control. Write It, Own It.",
    description:
      "A story is more than words; it is your passion, your dream, your voice. When you share your dream with Ink Founders, you retain 100% ownership of your story. We help turn your words into a book and your voice into inspiration. You have full rights to your work.",
  },
  {
    id: "our-support-forever-for-you",
    image: "/Home/Mask group (6).png",
    alt: "Our Support Forever for You",
    title: "Our Support-Forever for You",
    description:
      "With Ink Founders, you are never alone. Whether you have questions, concerns, or need guidance at any step, our team is always available to provide answers, support, and assurance from inception to publication.",
  },
];

const carouselPromiseItems = [...promiseItems, ...promiseItems];

const OurPromise = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
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

  const getDisplayText = (description: string, isExpanded: boolean) => {
    const words = description.trim().split(/\s+/);

    if (isExpanded || words.length <= 43) {
      return description;
    }

    return `${words.slice(0, 43).join(" ")}...`;
  };

  return (
    <AOSProvider>
      <style jsx global>{`
        .our-promise-slider {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .our-promise-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-0">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          {/* Headings */}
          <p className="mb-2 text-center text-base font-semibold text-black sm:text-lg md:text-[25px]">
            We are committed with you
          </p>
          <h2 className="mb-6 max-w-4xl text-center text-[23px] font-semibold leading-[1.05] md:text-[32px] lg:mb-5 lg:text-[35px]">
            <span className="text-[#DADD39]">
              How You Turn Your Dreams into Reality with Ink Founders
            </span>
          </h2>

          <div
            ref={carouselRef}
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="our-promise-slider flex w-full max-w-full items-stretch gap-4 overflow-x-auto px-1 pb-4 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
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
                  {getDisplayText(item.description, expandedItems[item.title] ?? false)}
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
          </div>
        </div>
      </section>
    </AOSProvider>
  );
};

export default OurPromise;
