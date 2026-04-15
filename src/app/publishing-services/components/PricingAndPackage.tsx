"use client"

import { robotoMono } from "@/app/fonts";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AOSProvider from "@/components/AOSProvider";


const PACKAGES = [
  {
    id: "silver",
    label: "Smart Self-Publishing Plan for Amazon",
    title: "Silver",
    price: "$499",
    oldPrice: "$799",
    included: [
      "Amazon Author Central setup",
      "Outline creation or revision",
      "Manuscript review",
      "Line-by-line editing & proofreading",
      "Interior formatting & layout",
      "Custom book cover design",
      "Amazon Kindle & Print publishing",
      "Print-on-Demand integration",
      "Author bio creation",
      "Marketing consultation",
      "Access to Ink Founders author portal",
      "100% copyright ownership",
      "ISBN & barcode generation",
      "eBook, Paperback & Hardcover formats",
    ],
  },
  {
    id: "gold",
    label: "Smart Self-Publishing Plan for Amazon",
    title: "Gold",
    price: "$699",
    oldPrice: "$999",
    included: [
      "Author profile setup on major platforms",
      "Book outline creation or revision",
      "Manuscript review & feedback",
      "Line editing & professional proofreading",
      "Interior formatting & layout design",
      "Custom-designed book cover",
      "Publish on 40+ platforms (Amazon, B&N, Apple Books, Kobo, etc.)",
      "Global Print-on-Demand setup",
      "Author bio writing",
      "Personalized marketing consultation",
      "Access to Ink Founders author portal",
      "100% ownership & full copyright rights",
      "ISBN and barcode generation",
      "Available in eBook, Paperback & Hardcover formats",
    ],
  },
  {
    id: "platinum",
    label: "Complete Ghostwriting & Publishing Plan",
    title: "Platinum",
    price: "$999–$1999",
    included: [
      "One-on-one interviews & story development",
      "Custom book outline creation",
      "Manuscript review",
      "complete ghostwriting in your voice",
      "Unlimited revisions during writing",
      "Line editing & professional proofreading",
      "Interior formatting & layout design",
      "Custom book cover design",
      "Amazon publishing (Kindle & Print)",
      "Print-on-Demand setup",
      "Author bio writing",
      "Marketing consultation sessions",
      "Access to Ink Founders author portal",
      "100% ownership & copyright rights",
      "ISBN and barcode generation",
    ],
  },
];

const carouselPackages = [...PACKAGES, ...PACKAGES];

const PricingAndPackage = () => {
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
       .pricing-package-slider {
         scrollbar-width: none;
         -webkit-overflow-scrolling: touch;
       }

       .pricing-package-slider::-webkit-scrollbar {
         display: none;
       }
     `}</style>
	     <section className="flex w-full items-center justify-center px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-0">
	      <div className="flex w-full max-w-[1300px] flex-col items-center">
        {/* Headings */}
	        <p className="mb-2 text-center text-base font-semibold text-[#DADD39] sm:text-lg md:text-xl">
	          Pricing & Packages
	        </p>
	        <h2 className="mb-2 max-w-4xl text-center text-[24px] font-semibold leading-[1.05] text-black md:text-[2rem]">
	          Flexible Plans Tailored To Your Needs
	        </h2>
	        <p
	          className={`mb-7 max-w-5xl text-center text-[13px] leading-[1.35] text-[#444444] sm:text-[14px] md:mb-8 md:text-[15px] md:leading-tight lg:px-20 ${robotoMono.className}`}
	        >
          &quot;Pricing may vary depending on the genre, page and word count,
          and your specific needs for publishing, marketing, or ghostwriting.
          For a personalized estimate and detailed consultation, click on
          &apos;Custom Quote&apos; to speak with a publishing expert.&quot;
        </p>
        {/* Pricing Cards */}
	        <div
            ref={carouselRef}
            data-aos="fade-down-right"
            onPointerDown={pauseCarousel}
            onPointerUp={resumeCarousel}
            onPointerCancel={resumeCarousel}
            onPointerLeave={resumeCarousel}
            className="pricing-package-slider flex w-full max-w-full items-stretch gap-4 overflow-x-auto px-1 pb-4 sm:gap-5 md:px-2 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0"
          >
	          {carouselPackages.map((pkg, idx) => (
	            <div
	              key={`${pkg.id}-${idx}`}
	              className={`flex w-[82vw] max-w-[360px] shrink-0 flex-col rounded-2xl border border-gray-100 px-4 py-6 shadow-lg sm:w-[58vw] sm:px-5 md:w-[42vw] lg:min-h-[670px] lg:w-full lg:max-w-none lg:shrink lg:px-6 lg:py-8 ${
                  idx >= PACKAGES.length ? "lg:hidden" : ""
                }`}
	            >
              {/* Plan label */}
              {/* <div className="bg-[#F4F3E1] text-black  text-[10px] md:text-[15px] font-medium px-3 py-1 rounded mb-6 w-max">
                {pkg.label}
              </div> */}
              {/* Price */}
	              <div className="mb-2 flex items-center gap-2">
	                <span className="text-[30px] font-semibold leading-none text-black md:text-[40px] lg:text-[48px]">
	                  {pkg.title}
	                </span>
                
              </div>
              {/* Included */}
	              <div className="mb-4 mt-4 text-left">
	                <span className="text-[15px] font-semibold text-black md:text-[18px] lg:text-[20px]">
	                  Included:
	                </span>
	                <ul className="mt-3 space-y-2">
	                  {pkg.included.map((feature, i) => (
	                    <li
	                      key={`${pkg.id}-${feature}`}
	                      className="flex items-start gap-2 text-[13px] leading-snug text-black md:text-[14px] lg:text-[15px]"
	                    >
	                      <FaCheckCircle
	                        className="mt-0.5 min-h-[16px] min-w-[16px] text-[#DADD39] md:min-h-[18px] md:min-w-[18px]"
	                        size={18}
	                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contactus"
                className="
      btn-slide-bg
	      mt-auto self-start
      bg-[#DADD39]
      text-black 
      font-medium 
      rounded-[5px]
      md:rounded-[10px] 
	      px-3 py-2 text-sm
      md:px-5 md:py-2 md:text-base
      border-[1px] border-[#DADD39]
      transition-all duration-300
      shadow-none
      hover:border-black
    "
              >
                {/* Sliding background */}
                <span className="slide-bg"></span>
                {/* Button text above the sliding background */}
                <span className="relative z-10">Custom Quote</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
   </AOSProvider>
  );
};

export default PricingAndPackage;
