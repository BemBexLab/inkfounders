"use client";

import { robotoMono } from "@/app/fonts";
import CustomScrollbar from "@/components/CustomScrollbar";
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
}: {
  title: string;
  subtitle?: string;
  description: string;
  checklist: string[];
}) => (
  <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
    <h3 className="mb-1 text-base font-semibold text-black">{title}</h3>
    <CustomScrollbar
      containerClassName="mt-3"
      className="h-[170px] md:h-[190px]"
      style={{ marginRight: 0, paddingRight: "0.75rem" }}
    >
      {subtitle && <h4 className="mb-2 text-sm font-medium text-gray-800">{subtitle}</h4>}
      {description && (
        <p
          className={`${robotoMono.className} mt-2 text-[13px] leading-relaxed text-gray-700`}
        >
          {description}
        </p>
      )}
      {checklist.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {checklist.map((item, idx) => (
            <CheckItem key={idx}>{item}</CheckItem>
          ))}
        </ul>
      )}
    </CustomScrollbar>
  </div>
);

export default function CoverDesignPage() {
  // Only the core service cards — "Why Choose Us" is separate
  const serviceCards = [
    {
      title: "Custom Cover Design",
      description:
        "Every cover we make is custom book cover design for authors, built around your book, not pulled from a template, reflecting its theme, tone, and the readers you're trying to reach. Unlike AI ebook cover design tools that generate generic, recycled-looking art, our covers are designed by hand by real designers who read your book's premise first.",
      checklist: [
        "Unique concepts tailored to your story",
        "Genre-appropriate design styles",
        "Professional typography & layout",
      ],
    },
    {
      title: "Market-Optimized Design",
      description:
        "We design covers that meet marketplace requirements and current trends, which helps with visibility and click-through rates once your book is live.",
      checklist: [
        "Amazon KDP-approved book cover design, fully compliant with technical standards",
        "High-resolution, print-ready designs",
        "Optimized for both thumbnail and full digital view",
      ],
    },
    {
      title: "Branding & Series Design",
      description: "Working on more than one book? Our book series cover design service keeps every cover in a series visually connected while still standing on its own.",
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
        "New authors launching their first ebook",
        "Indie authors and self-publishers looking for custom book cover design that doesn't feel generic",
        "Business owners publishing guides or manuals",
        "Authors working on a series or multi-book project",
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
                  At Ink Founders, we know a book cover is the first impression your readers get. Our ebook cover design services create visually striking, genre-appropriate covers that catch readers' attention and help your book perform on Amazon KDP, Apple Books, and other major platforms.
                </p>
              </div>
            </div>
            <div className="relative order-2 flex w-full items-center justify-center px-0 sm:px-4 md:px-8 lg:order-none lg:ml-5">
              <div className="relative flex aspect-square w-[min(82vw,350px)] items-center justify-center overflow-hidden rounded-lg sm:w-[400px] md:w-[440px] lg:h-[440px] lg:w-[380px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <Image
                  src="/publishingservices/Rectangle 22.webp"
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
                  src="/publishingservices/Rectangle 26.webp"
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
                  "Expert graphic designers with real publishing experience, not just design experience",
                  "Affordable ebook cover design for self-publishers who want quality without an agency price tag",
                  "Covers built for both digital and print formats",
                  "Ebook cover design with unlimited revisions, until the cover actually feels right to you",
                  "Genre-specific book cover design, whether you write fiction, nonfiction, romance, or business books",
                  "Quick turnaround without cutting corners on quality"
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
            A professionally designed cover significantly increases your book’s chance of success. Let <b><a href="https://share.google/i7yXrn8AiGA5wvzYJ" className="">Ink Founders</a></b> create a cover that captures attention and drives readers to your book.
          </p>
        </div>
      </section>
    </main>
  );
}
