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
    <section className="w-full bg-[#dce829] px-3 py-14 sm:px-5 sm:py-16 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="text-[16px] font-bold text-[#151515] sm:text-[18px]">
            Pricing & Packages
          </p>

          <h2 className="my-2 text-[28px] font-bold leading-tight tracking-wide text-[#151515] sm:text-[34px] lg:text-[40px]">
            Flexible Plans Tailored To Your Needs
          </h2>

          <p className={`mx-auto max-w-[880px] text-sm leading-[1.8] tracking-[0.08em] text-[#151515] sm:text-[15px] md:text-base lg:text-[17px] lg:leading-[2] lg:tracking-[0.15em] ${robotoMono.className}`}>
            “Pricing may vary depending on the genre, page and word count, and
            your specific needs for publishing, marketing, or ghostwriting. For
            a personalized estimate and detailed consultation, click on 'Custom
            Quote' to speak with a publishing expert.”
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 items-stretch gap-4 min-[760px]:grid-cols-3 lg:mt-12 lg:gap-5">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`relative rounded-[14px] px-5 pb-10 pt-14 sm:px-6 min-[760px]:px-3 min-[760px]:pb-8 min-[760px]:pt-14 min-[900px]:px-5 lg:px-6 lg:pb-12 lg:pt-16 xl:px-8 ${
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
                className={`mx-auto flex min-h-[42px] max-w-[270px] items-center justify-center rounded-[8px] px-3 text-center text-[13px] font-semibold min-[760px]:min-h-[46px] min-[760px]:px-2 min-[760px]:text-[12px] min-[900px]:text-[13px] ${
                  item.featured ? "bg-[#d3d2c6]" : "bg-[#fbfaeb]"
                }`}
              >
                {item.name}
              </div>

              <div className="mt-8 flex items-end justify-center gap-3 sm:gap-4">
                <span className="text-[42px] font-semibold leading-none tracking-[-0.04em] sm:text-[48px] min-[760px]:text-[36px] min-[900px]:text-[44px] lg:text-[50px] xl:text-[56px]">
                  {item.price}
                </span>
                <span className="relative text-sm min-[760px]:text-xs min-[900px]:text-sm sm:text-base before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-full before:rotate-[-10deg] before:bg-red-500 before:content-['']">
                  {item.oldPrice}
                </span>
              </div>

              <div className="mt-10 min-[760px]:mt-8 lg:mt-10">
                <p className="text-[17px] font-semibold min-[760px]:text-[15px] min-[900px]:text-[17px]">Included:</p>

                <div
                  className={`mt-5 max-h-[360px] space-y-3 overflow-y-auto pr-2 min-[760px]:mt-4 min-[760px]:max-h-[330px] min-[760px]:space-y-2 min-[900px]:max-h-[350px] min-[900px]:space-y-3 sm:pr-3 ${
                    item.featured ? "pricing-scroll" : "pricing-scroll-dark"
                  }`}
                >
                  {item.included.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 min-[760px]:gap-2 min-[900px]:gap-3">
                      <FaCheckCircle
                        className={`mt-[3px] h-[14px] w-[14px] shrink-0 min-[760px]:h-[12px] min-[760px]:w-[12px] min-[900px]:h-[14px] min-[900px]:w-[14px] ${
                          item.featured ? "text-[#dce829]" : "text-[#111]"
                        }`}
                      />
                      <p className="text-[15px] leading-[1.35] text-[#111] min-[760px]:text-[12px] min-[900px]:text-[14px] lg:text-[15px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex justify-center min-[760px]:mt-8 lg:mt-12">
                <button
                  className={`h-[38px] rounded-[7px] px-6 text-[15px] font-medium min-[760px]:w-full min-[900px]:w-auto ${
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
