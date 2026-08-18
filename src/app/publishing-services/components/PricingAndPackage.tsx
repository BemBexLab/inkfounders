"use client";

import { robotoMono } from "@/app/fonts";
import AOSProvider from "@/components/AOSProvider";
import CustomScrollbar from "@/components/CustomScrollbar";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

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
      "Complete ghostwriting in your voice",
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

const PricingAndPackage = () => {
  return (
    <AOSProvider>
      <section className="flex w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16 xl:px-12">
        <div className="flex w-full max-w-[1300px] min-w-0 flex-col items-center">
          <p className="mb-2 text-center text-sm font-semibold text-[#b8ba16] sm:text-base md:text-lg lg:text-xl">
            Pricing &amp; Packages
          </p>
          <h2 className="mb-3 max-w-4xl text-balance text-center text-[clamp(1.65rem,5vw,2.5rem)] font-semibold leading-[1.08] text-black">
            Flexible Plans Tailored To Your Needs
          </h2>
          <p
            className={`mb-8 max-w-4xl text-pretty text-center text-[0.78rem] leading-relaxed text-[#444444] sm:mb-10 sm:text-[0.84rem] md:text-sm lg:mb-12 lg:text-[0.95rem] ${robotoMono.className}`}
          >
            Pricing may vary depending on the genre, page and word count, and
            your specific needs for publishing, marketing, or ghostwriting. For
            a personalized estimate and detailed consultation, click on
            &apos;Custom Quote&apos; to speak with a publishing expert.
          </p>

          <CustomScrollbar
            orientation="horizontal"
            role="list"
            aria-label="Publishing packages"
            tabIndex={0}
            data-aos="fade-down-right"
            containerClassName="w-full min-w-0"
            className="flex w-full min-w-0 snap-x snap-mandatory scroll-px-1 items-stretch gap-4 overflow-x-auto px-1 pb-5 sm:gap-5 sm:scroll-px-2 sm:px-2 md:gap-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-8"
            trackClassName="bg-[#ececcf]"
            thumbClassName="bg-[#c7c934]"
          >
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                role="listitem"
                className="flex w-[90%] max-w-[25rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white px-5 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:w-[72%] sm:px-6 sm:py-7 md:w-[47%] lg:w-full lg:max-w-none lg:shrink lg:snap-none lg:px-5 xl:px-7 xl:py-8"
              >
                <div className="mb-5 border-b border-black/10 pb-5">
                  {/* <p className="mb-2 min-h-8 text-xs font-medium leading-snug text-gray-500 sm:text-sm lg:min-h-10">
                    {pkg.label}
                  </p> */}
                  <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
                    <h3 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-none text-black">
                      {pkg.title}
                    </h3>
                    {/* <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold leading-none text-black sm:text-xl">
                        {pkg.price}
                      </span>
                      {pkg.oldPrice && (
                        <span className="text-xs text-gray-400 line-through sm:text-sm">
                          {pkg.oldPrice}
                        </span>
                      )}
                    </div> */}
                  </div>
                </div>

                <div className="mb-6 flex-1 text-left">
                  <p className="text-base font-semibold text-black sm:text-lg">
                    Included:
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {pkg.included.map((feature) => (
                      <li
                        key={`${pkg.id}-${feature}`}
                        className="flex items-start gap-2.5 text-[0.8rem] leading-relaxed text-gray-800 sm:text-[0.86rem] lg:text-sm"
                      >
                        <FaCheckCircle
                          aria-hidden="true"
                          className="mt-[0.2rem] h-4 w-4 shrink-0 text-[#c7c934] sm:h-[1.1rem] sm:w-[1.1rem]"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contactus"
                  aria-label={`Request a custom quote for the ${pkg.title} package`}
                  className="btn-slide-bg mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#DADD39] bg-[#DADD39] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:border-black focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black sm:w-auto sm:self-start"
                >
                  <span className="slide-bg" />
                  <span className="relative z-10">Custom Quote</span>
                </Link>
              </article>
            ))}
          </CustomScrollbar>
        </div>
      </section>
    </AOSProvider>
  );
};

export default PricingAndPackage;
