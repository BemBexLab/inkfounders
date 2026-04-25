"use client";

import { robotoMono } from "@/app/fonts";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const packages = [
  {
    name: "Standard publishing package",
    price: "$149",
    oldPrice: "$499",
    featured: false,
    included: [
      "Amazon Author Central setup",
      "Line-by-line editing and proofreading",
      "Interior formatting and layout design",
      "Line-by-line editing & proofreading",
      "Interior formatting & layout",
      "Custom book cover design",
      "publishing on Amazon KDP",
      "Available in eBook",
      "Paperback formats",
      "Print-on-Demand integration",
      "Marketing consultation",
      "dedicated ISBN and Barcode",
      "100% ownerships and copyrights",
    ],
  },
  {
    name: "Premium publishing package",
    price: "$449",
    oldPrice: "$999",
    featured: true,
    included: [
      "Author profile setup across major platforms,",
      "Outline creation or update",
      "Manuscript review",
      "Unlimited revisions during writing phase",
      "Line-by-line editing and proofreading",
      "Interior formatting and layout design",
      "Custom book cover design",
      "Publishing on up to 40 platforms including Amazon",
      "Barnes & Noble",
      "Apple Books",
      "Kobo",
    ],
  },
  {
    name: "Publishing Pro Package",
    price: "$999",
    oldPrice: "$1499",
    featured: false,
    included: [
      "One-on-one interviews and story development",
      "Custom outline creation",
      "Full manuscript (based on your vision and voice)",
      "Line-by-line editing and proofreading",
      "Interior formatting and layout design",
      "Custom book cover design",
      "Print-on-Demand integration",
      "Marketing consultation",
      "Social Media Marketing",
      "Paperback and hardcover formats",
      "publishing in ebook",
    ],
  },
];

const PricingPackages = () => {
  return (
    <section className="w-full bg-[#dce829] px-6 py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#151515]">
            Pricing & Packages
          </p>

          <h2 className="my-2 text-[30px] font-bold leading-tight tracking-wide text-[#151515]">
            Flexible Plans Tailored To Your Needs
          </h2>

          <p className={`mx-auto max-w-[880px] font-mono text-[17px] leading-[2] tracking-[0.15em] text-[#151515] ${robotoMono.className}`}>
            “Pricing may vary depending on the genre, page and word count, and
            your specific needs for publishing, marketing, or ghostwriting. For
            a personalized estimate and detailed consultation, click on 'Custom
            Quote' to speak with a publishing expert.”
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 w-[1200px] items-stretch gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`relative rounded-[14px] px-8 pb-14 pt-16 ${
                item.featured
                  ? "bg-[#f7f6e9] text-[#222]"
                  : "border border-[#1d1d1d] bg-transparent text-[#111]"
              }`}
            >
              {item.featured && (
                <div className="absolute left-1/2 top-0 flex h-[30px] w-[130px] -translate-x-1/2 items-center justify-center rounded-b-[3px] bg-[#171717] text-[13px] font-semibold text-[#dce829]">
                  Recommended
                </div>
              )}

              <div
                className={`mx-auto flex h-[40px] max-w-[270px] items-center justify-center rounded-[8px] text-[13px] font-semibold ${
                  item.featured ? "bg-[#d3d2c6]" : "bg-[#fbfaeb]"
                }`}
              >
                {item.name}
              </div>

              <div className="mt-8 flex items-end justify-center gap-4">
                <span className="text-[56px] font-semibold leading-none tracking-[-0.04em]">
                  {item.price}
                </span>
                <span className="relative before:absolute before:left-0 before:top-1/2 before:w-full before:h-0.5 before:bg-red-500 before:rotate-[-10deg] before:content-['']">
                  {item.oldPrice}
                </span>
              </div>

              <div className="mt-10">
                <p className="text-[17px] font-semibold">Included:</p>

                <div
                  className={`mt-5 max-h-[360px] space-y-3 overflow-y-auto pr-3 ${
                    item.featured ? "pricing-scroll" : "pricing-scroll-dark"
                  }`}
                >
                  {item.included.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <FaCheckCircle
                        className={`mt-[3px] h-[14px] w-[14px] shrink-0 ${
                          item.featured ? "text-[#dce829]" : "text-[#111]"
                        }`}
                      />
                      <p className="text-[15px] leading-[1.35] text-[#111]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  className={`h-[38px] rounded-[7px] px-6 text-[15px] font-medium ${
                    item.featured
                      ? "btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
                      : "btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-black px-3 text-xs font-medium text-white hover:text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
                  }`}
                >
                  <span className="slide-bg"></span>
                  <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                    Custom Quote
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-scroll::-webkit-scrollbar,
        .pricing-scroll-dark::-webkit-scrollbar {
          width: 2px;
        }

        .pricing-scroll::-webkit-scrollbar-track,
        .pricing-scroll-dark::-webkit-scrollbar-track {
          background: transparent;
        }

        .pricing-scroll::-webkit-scrollbar-thumb {
          background: #dce829;
        }

        .pricing-scroll-dark::-webkit-scrollbar-thumb {
          background: #f7f6e9;
        }
      `}</style>
    </section>
  );
};

export default PricingPackages;
