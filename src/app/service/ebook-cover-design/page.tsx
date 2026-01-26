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
}: {
  title: string;
  subtitle?: string;
  description: string;
  checklist: string[];
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
    <h3 className="text-base font-semibold text-black mb-1">{title}</h3>
    {subtitle && <h4 className="text-sm font-medium text-gray-800 mb-2">{subtitle}</h4>}
    {description && (
      <p className={`${robotoMono.className} text-gray-700 text-[13px] leading-relaxed mb-3 flex-grow`}>
        {description}
      </p>
    )}
    {checklist.length > 0 && (
      <ul className="space-y-1.5">
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
      checklist: [
        "Unique concepts tailored to your story",
        "Genre appropriate design styles",
        "Professional typography & layout",
      ],
    },
    {
      title: "Market Optimized Design",
      description:
        "We design covers that meet marketplace requirements and trends, boosting visibility and click through rates.",
      checklist: [
        "Amazon KDP standards & technical compliance",
        "High-resolution, print ready designs",
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
        "Self publishers seeking professional visuals",
        "Business owners publishing guides or manuals",
        "Authors creating series or multi book projects",
      ],
    },
  ];

  return (
    <main className="bg-[#F4F3E1]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-10 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-4 md:px-1 w-full md:ml-20">
              <div className="max-w-xl w-full">
                <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight text-black mb-6 text-left lg:text-left">
                  E-Book Cover Design Services
                </h1>
                <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-loose text-left md:text-center lg:text-left`}>
                  At Ink Founders, we understand that a book cover is the first impression your readers get. Our professional eBook cover design service creates visually stunning, genre appropriate covers that attract readers and maximize your book’s potential on platforms like Amazon KDP, Apple Books, and more.
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 w-full lg:ml-5 relative max-lg:mt-10">
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[440px] md:h-[440px] lg:w-[380px] lg:h-[440px] xl:w-[480px] xl:h-[480px] 2xl:w-[520px] 2xl:h-[520px]">
                <Image
                  src="/Home/bookslidetest/ChatGPT Image Jul 3, 2025, 04_31_44 AM 1.png"
                  alt="E-Book Cover Design Services"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards — 4 cards */}
      <section className="px-4 md:px-10 2xl:px-20 py-10">
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
      <section className="px-4 md:px-10 2xl:px-20 py-12">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/Home/bookslidetest/ChatGPT Image Jul 3_ 2025_ 04_00_28 AM 4.png"
                  alt="Why Choose Ink Founders"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 text-center lg:text-left">
                Why Choose Ink Founders
              </h2>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Expert graphic designers with publishing experience",
                  "Covers optimized for both digital and print formats",
                  "Attention grabbing designs that convert",
                  "Unlimited revisions until you are satisfied",
                  "Quick turnaround without compromising quality",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#DADD39] mt-0.5 text-lg">✓</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto self-start lg:self-start">
                <Link href="/contactus">
                  <button
                    type="button"
                    className="btn-slide-bg flex items-center gap-2 bg-[#DADD39] text-black font-normal px-6 py-3 rounded-md shadow border border-transparent hover:border-black transition-all duration-300"
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
      <section className="px-4 md:px-10 2xl:px-20 py-8">
        <div className="max-w-[1450px] mx-auto text-center">
          <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto`}>
            Make Your Book Stand Out<br />
            A professionally designed cover significantly increases your book’s chance of success. Let Ink Founders create a cover that captures attention and drives readers to your book.
          </p>
        </div>
      </section>
    </main>
  );
}