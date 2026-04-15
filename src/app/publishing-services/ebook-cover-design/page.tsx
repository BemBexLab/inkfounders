"use client";

import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";

// ✅ EXACT SAME CheckItem as your main service page
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-[#DADD39] mt-0.5 text-base">✔</span>
    <span className="text-gray-700 text-[13px] leading-relaxed">{children}</span>
  </li>
);

// ✅ EXACT SAME ServiceCard — used for all service blocks
const ServiceCard = ({
  title,
  subtitle,
  description,
  checklist,
  compactDescription = false,
}: {
  title: string;
  subtitle?: string;
  description: string;
  checklist: string[];
  compactDescription?: boolean;
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
    <h3 className="text-base font-semibold text-black mb-1">{title}</h3>
    {subtitle && <h4 className="text-sm font-medium text-gray-800 mb-2">{subtitle}</h4>}
    {description && (
      <p
        className={`${robotoMono.className} text-gray-700 text-[13px] leading-relaxed mt-2 mb-3 ${
          compactDescription ? "" : "flex-grow"
        }`}
      >
        {description}
      </p>
    )}
    {checklist.length > 0 && (
      <ul className="mt-2 space-y-1.5">
        {checklist.map((item, idx) => (
          <CheckItem key={idx}>{item}</CheckItem>
        ))}
      </ul>
    )}
  </div>
);

export default function CoverDesignPage() {
  // Only the core service cards — "Why Choose Us" is separate
  const serviceCards = [
    {
      title: "Custom Cover Design",
      description:
        "Every cover is uniquely designed for your book, reflecting its theme, tone, and target audience.",
      compactDescription: true,
      checklist: [
        "Unique concepts tailored to your story",
        "Genre-appropriate design styles",
        "Professional typography & layout",
      ],
    },
    {
      title: "Market Optimized Design",
      description:
        "We design covers that meet marketplace requirements and trends, boosting visibility and click-through rates.",
      checklist: [
        "Amazon KDP standards & technical compliance",
        "High-resolution, print-ready designs",
        "Optimized for thumbnail & digital view",
      ],
    },
    {
      title: "Branding & Series Design",
      description: "",
      checklist: [
        "Series cover cohesion",
        "Author branding integration",
        "Professional visual identity",
      ],
    },
    {
      title: "Who This Service Is For",
      description: "",
      checklist: [
        "New authors launching their first eBook",
        "Self-publishers seeking professional visuals",
        "Business owners publishing guides or manuals",
        "Authors creating series or multi-book projects",
      ],
    },
  ];

  return (
    <main className="bg-[#F4F3E1]">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:py-16 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="grid grid-cols-1 items-center justify-items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="contents lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-center lg:px-1 lg:pl-12 xl:pl-20">
              <div className="contents lg:block lg:w-full lg:max-w-xl">
                <h1 className="order-1 mb-0 w-full max-w-2xl text-center text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-[48px] lg:mb-6 lg:text-left">
                  E-Book Cover Design Services
                </h1>
                <p className={`${robotoMono.className} order-3 w-full max-w-2xl text-center text-[13px] leading-relaxed text-gray-700 sm:text-[14px] md:text-[15px] lg:max-w-none lg:text-left lg:leading-loose`}>
                  At Ink Founders, we understand that a book cover is the first impression your readers get. Our professional eBook cover design service creates visually stunning, genre-appropriate covers that attract readers and maximize your book’s potential on platforms like Amazon KDP, Apple Books, and more.
                </p>
              </div>
            </div>
            <div className="relative order-2 flex w-full items-center justify-center px-0 sm:px-4 md:px-8 lg:order-none lg:ml-5">
              <div className="relative flex aspect-square w-[min(82vw,350px)] items-center justify-center overflow-hidden rounded-lg sm:w-[400px] md:w-[440px] lg:h-[440px] lg:w-[380px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <Image
                  src="/publishingservices/Rectangle 22.png"
                  alt="E-Book Cover Design Services"
                  width={574}
                  height={736}
                  sizes="(max-width: 640px) 350px, (max-width: 768px) 400px, (max-width: 1024px) 440px, 520px"
                  className="h-full w-full object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards — 4 cards */}
      <section className="px-4 md:px-10 2xl:px-20 py-5">
        <div className="max-w-[1450px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
                checklist={card.checklist}
                compactDescription={card.compactDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — NOT a card, styled EXACTLY as requested */}
      <section className="px-4 py-7 sm:px-6 sm:py-9 md:px-10 lg:py-12 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="order-2 flex w-full justify-center lg:order-none lg:w-1/2">
              <div className="relative flex aspect-square w-[min(66vw,240px)] items-center justify-center overflow-hidden rounded-lg sm:w-[260px] md:w-[340px] lg:w-full lg:max-w-md">
                <Image
                  src="/publishingservices/Rectangle 26.png"
                  alt="Why Choose Ink Founders"
                  width={574}
                  height={736}
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="contents lg:flex lg:w-1/2 lg:flex-col">
              <h2 className="order-1 mb-0 text-center text-[20px] font-semibold leading-tight text-black sm:text-2xl md:text-3xl lg:mb-6 lg:text-left">
                Why Choose Ink Founders
              </h2>
              <ul className="order-3 mb-4 w-full max-w-[360px] flex-grow space-y-1.5 sm:max-w-[380px] sm:space-y-2 lg:mb-8 lg:max-w-none lg:space-y-3">
                {[
                  "Expert graphic designers with publishing experience",
                  "Covers optimized for both digital and print formats",
                  "Attention-grabbing designs that convert",
                  "Unlimited revisions until you are satisfied",
                  "Quick turnaround without compromising quality",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-sm text-[#DADD39] lg:text-lg">✓</span>
                    <span className="text-[12px] leading-relaxed text-gray-800 sm:text-[13px] md:text-[14px] lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="order-4 mt-auto self-center lg:self-start">
                <Link href="/contactus">
                  <button
                    type="button"
                    className="btn-slide-bg flex items-center gap-2 rounded-md border border-transparent bg-[#DADD39] px-5 py-2 text-[13px] font-normal text-black shadow transition-all duration-300 hover:border-black sm:px-6 sm:py-2.5 sm:text-sm lg:py-3 lg:text-base"
                  >
                    <span className="slide-bg rounded-md"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <IoMdCall size={20} />
                      Request a Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Paragraph */}
      <section className="px-4 md:px-10 2xl:px-20 pb-8">
        <div className="max-w-[1450px] mx-auto text-center">
          <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto`}>
            <b>Make Your Book Stand Out</b><br />
            A professionally designed cover significantly increases your book’s chance of success. Let Ink Founders create a cover that captures attention and drives readers to your book.
          </p>
        </div>
      </section>
    </main>
  );
}
