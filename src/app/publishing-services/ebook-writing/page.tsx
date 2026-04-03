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
      <p className={`${robotoMono.className} text-gray-700 text-[13px] leading-relaxed mt-2 mb-3 flex-grow`}>
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

export default function EbookWritingPage() {
  const serviceCards = [
    {
      title: "Idea Development & Research",
      description:
        "Ink Founders team helps refine and purify your concept, structure your content, and conduct in-depth research to make sure the accuracy and relevance for your target audience.",
      checklist: [],
    },
    {
      title: "Original, High-Quality Writing",
      description:
        "Every eBook is written from scratch, ensuring:",
      checklist: [
        "100% original content",
        "No plagiarism",
        "Clear, engaging, and reader-focused writing",
      ],
    },
    {
      title: "Voice Matching (Ghostwriting)",
      description:
        "For ghostwriting projects, we carefully adapt to your tone, style, and personality so the book truly feels like you wrote it.",
      checklist: [],
    },
    {
      title: "Genres We Cover",
      description:
        "Ink Founders offers writing services across a wide range of genres, including:",
      checklist: [
        "Business & Entrepreneurship",
        "Self-Help & Personal Development",
        "Health & Wellness",
        "Technology & Education",
        "Fiction & Creative Writing",
        "Biographies & Memoirs",
      ],
    },
    {
      title: "Our Writing Process",
      description: "",
      checklist: [
        "Concept discussion & project planning",
        "Outline creation & approval",
        "Writing & content development",
        "Client review & revisions",
        "Final delivery (ready for editing & publishing)",
      ],
    },
    {
      title: "Who This Service Is For",
      description: "",
      checklist: [
        "First-time authors",
        "Entrepreneurs & coaches",
        "Business owners",
      ],
    },
  ];

  return (
    <main className="bg-[#F4F3E1]">
      {/* Hero Section */}
      <section className="relative py-16 mt-4 md:pt-24 px-4 md:px-10 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-4 md:px-1 w-full md:ml-20">
              <div className="max-w-xl w-full">
                <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight text-black mb-3 text-left lg:text-left">
                  E-Book Writing & Ghostwriting Services
                </h1>
                <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-loose text-left md:text-center lg:text-left`}>
                  At Ink Founders, we have expert eBook writing and ghostwriting services designed to convert your ideas into unique, engaging, and high-quality books from your ideas. Whether you have a rough concept or a detailed outline, our experienced writers create a publish-ready book with clarity, creativity, and precision.
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 w-full lg:ml-5 relative max-lg:mt-10">
              <div className="relative flex h-[350px] w-[350px] items-center justify-center overflow-hidden rounded-lg sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px] lg:h-[440px] lg:w-[380px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <Image
                  src="/publishingservices/Rectangle 20.png"
                  alt="E-Book Writing Services"
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

      {/* Service Cards Only — 6 cards */}
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

      {/* Why Choose Us — NOT a card, styled exactly as requested */}
      <section className="px-4 md:px-10 2xl:px-20 py-12">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/publishingservices/Rectangle 24.png"
                  alt="Why Choose Ink Founders"
                  width={574}
                  height={736}
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 text-center lg:text-left">
                Why Choose Ink Founders
              </h2>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Premium, start-to-end publishing solutions",
                  "Experienced publishing professionals",
                  "Transparent process & communication",
                  "Full author ownership and rights",
                  "Global publishing expertise",
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
    </main>
  );
}
