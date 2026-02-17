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
        "We provide professional fiction and non-fiction eBook writing services tailored to your idea, niche, and target audience. Our ghostwriters ensure your voice, style, and message remain authentic while delivering high quality, original content.",
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
      checklist: ["One on One Guidance", "Platform Strategy", "Publishing Roadmap"],
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
                  Professional eBook Publishing Services by Ink Founders
                </h1>
                <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-loose text-left md:text-center lg:text-left`}>
                  At Ink Founders, we offer complete, end-to-end eBook publishing solutions designed to help authors publish, position, and promote their books globally. Whether you are a first-time author or an established publisher, our expert team ensures a smooth and successful publishing journey.
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 w-full lg:ml-5 relative max-lg:mt-10">
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[440px] md:h-[440px] lg:w-[380px] lg:h-[440px] xl:w-[480px] xl:h-[480px] 2xl:w-[520px] 2xl:h-[520px]">
                <Image
                  src="/Home/bookslidetest/ChatGPT Image Jul 3, 2025, 04_31_44 AM 1.png"
                  alt="Ink Founders Publishing"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards — NOW PERFECTLY ALIGNED */}
      <section className="px-4 md:px-10 2xl:px-20 py-10">
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
                  "Premium, end to end publishing solutions",
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