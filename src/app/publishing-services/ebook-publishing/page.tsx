"use client";

import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-[#DADD39] mt-0.5 text-base">✔</span>
    <span className="text-gray-700 text-[13px] leading-relaxed">{children}</span>
  </li>
);

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
    <p className={`${robotoMono.className} text-gray-700 text-[13px] leading-relaxed mb-3 flex-grow`}>
      {description}
    </p>
    <ul className="space-y-1.5">
      {checklist.map((item, idx) => (
        <CheckItem key={idx}>{item}</CheckItem>
      ))}
    </ul>
  </div>
);

export default function ServiceDetailPage() {
  const services = [
    {
      title: "Writing & Content Development",
      subtitle: "E-Book Writing & Ghostwriting",
      description:
        "We provide professional fiction and non-fiction eBook writing services tailored to your idea, niche, and target audience. Our ghostwriters ensure your voice, style, and message remain authentic while delivering high-quality, original content.",
      checklist: [
        "Fiction & Non-Fiction",
        "Business, Self-Help, Educational & Creative Genres",
        "100% Original, Plagiarism-Free Writing",
      ],
    },
    {
      title: "Editing & Manuscript Refinement",
      subtitle: "Editing & Proofreading",
      description:
        "Our professional editors refine your manuscript to ensure clarity, accuracy, and consistency. We enhance grammar, structure, tone, and flow while preserving your original voice.",
      checklist: [
        "Developmental Editing",
        "Copyediting & Proofreading",
        "Platform-Ready Manuscripts",
      ],
    },
    {
      title: "Design & Formatting",
      subtitle: "E-Book Cover Design",
      description:
        "We design visually compelling, market-ready eBook covers that meet Amazon KDP and global platform standards. Each cover is customized to attract readers and align with your genre.",
      checklist: ["Custom Design", "High-Resolution Output", "Amazon KDP-Approved"],
    },
    {
      title: "Design & Formatting",
      subtitle: "E-Book Formatting & Layout",
      description:
        "We professionally format your eBook to ensure a seamless reading experience across all devices and platforms.",
      checklist: ["Kindle (KDP) Formatting", "EPUB & PDF Formatting", "Paperback & Hardcover Layouts"],
    },
    {
      title: "Marketing & Book Promotion",
      subtitle: "Book Marketing & Promotion",
      description:
        "Our marketing strategies are designed to increase your book’s visibility, reach the right audience, and boost sales.",
      checklist: [
        "Amazon SEO & Keyword Research",
        "Book Launch Strategy",
        "A+ Content & Sales Page Optimization",
      ],
    },
    {
      title: "Publishing Support & Ownership",
      subtitle: "ISBN & Copyright Assistance",
      description:
        "We guide authors through ISBN registration and copyright processes to ensure full ownership and protection of their work.",
      checklist: ["ISBN Guidance", "Copyright Support", "Author Rights Protection"],
    },
    {
      title: "Consultation & Ongoing Support",
      subtitle: "Publishing Consultation",
      description:
        "Not sure where to start? Our experts provide personalized publishing consultations to guide you through every step.",
      checklist: ["One-on-One Guidance", "Platform Strategy", "Publishing Roadmap"],
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
                  Professional eBook Publishing Services by Ink Founders
                </h1>
                <p className={`${robotoMono.className} order-3 w-full max-w-2xl text-center text-[13px] leading-relaxed text-gray-700 sm:text-[14px] md:text-[15px] lg:max-w-none lg:text-left lg:leading-loose`}>
                  At Ink Founders, we offer complete, end-to-end eBook publishing solutions designed to help authors publish, position, and promote their books globally. Whether you are a first-time author or an established publisher, our expert team ensures a smooth and successful publishing journey.
                </p>
              </div>
            </div>
            <div className="relative order-2 flex w-full items-center justify-center px-0 sm:px-4 md:px-8 lg:order-none lg:ml-5">
              <div className="relative flex aspect-square w-[min(82vw,350px)] items-center justify-center overflow-hidden rounded-lg sm:w-[400px] md:w-[440px] lg:h-[440px] lg:w-[380px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <Image
                  src="/publishingservices/Rectangle 21.png"
                  alt="Ink Founders Publishing"
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

      {/* Services Cards — NOW PERFECTLY ALIGNED */}
      <section className="px-4 md:px-10 2xl:px-20 py-5">
        <div className="max-w-[1450px] mx-auto">
          {/* No extra padding here — grid sits flush within max-width container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-7 sm:px-6 sm:py-9 md:px-10 lg:py-12 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="order-2 flex w-full justify-center lg:order-none lg:w-1/2">
              <div className="relative flex aspect-square w-[min(66vw,240px)] items-center justify-center overflow-hidden rounded-lg sm:w-[260px] md:w-[340px] lg:w-full lg:max-w-md">
                <Image
                  src="/publishingservices/Rectangle 25.png"
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
              <ul className="order-3 mb-4 w-full max-w-[360px] flex-grow space-y-1.5 sm:max-w-[320px] sm:space-y-2 lg:mb-8 lg:max-w-none lg:space-y-3">
                {[
                  "Premium, end-to-end publishing solutions",
                  "Experienced publishing professionals",
                  "Transparent process & communication",
                  "Full author ownership and rights",
                  "Global publishing expertise",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DADD39] mt-0.5 text-lg">✓</span>
                    <span className="text-[12px] leading-relaxed text-gray-800 sm:text-[13px] md:text-[14px] lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="order-4 self-center lg:self-start">
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
    </main>
  );
}
