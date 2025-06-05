import { robotoMono } from '@/app/fonts'
import { FaCheckCircle } from "react-icons/fa";
import React from 'react'

const PACKAGES = [
  {
    label: "Smart Self-Publishing Plan for Amazon",
    price: "$499",
    oldPrice: "$399",
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
    ]
  },
  {
    label: "Smart Self-Publishing Plan for Amazon",
    price: "$699",
    oldPrice: "$499",
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
    ]
  },
  {
    label: "Complete Ghostwriting & Publishing Plan",
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
    ]
  },
];

const PricingAndPackage = () => {
  return (
    <section className="w-full flex justify-center items-center py-10">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-lg md:text-xl font-semibold text-[#DADD39] mb-2">
          Pricing & Packages
        </p>
        <h2 className="text-center text-2xl md:text-[2rem] font-semibold mb-2 text-black">
          Flexible Plans Tailored To Your Needs
        </h2>
        <p className={`text-center text-[12px] md:text-[15px] text-[#444444] mb-14 px-5 md:px-20 ${robotoMono.className}`}>
          &quot;Pricing may vary depending on the genre, page and word count, and your specific needs for publishing, marketing, or ghostwriting. For a personalized estimate and detailed consultation, click on &apos;Custom Quote&apos; to speak with a publishing expert.&quot;
        </p>
        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:px-5">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-gray-100 px-6 py-8 min-h-[670px] shadow-sm"
            >
              {/* Plan label */}
              <div className="bg-[#F4F3E1] text-black  text-[10px] md:text-[15px] font-medium px-3 py-1 rounded mb-6 w-max">
                {pkg.label}
              </div>
              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[50px] md:text-[58px] font-semibold text-black">
                  {pkg.price}
                </span>
                {pkg.oldPrice && pkg.oldPrice !== pkg.price && (
  <span className="relative text-[#999] text-lg ml-2 select-none" style={{ display: "inline-block" }}>
    {pkg.oldPrice}
    {/* Red strikethrough line */}
    <span className="absolute left-0 top-1/2 w-full h-[1px] bg-red-500 rounded rotate-[-8deg] -translate-y-1/2 pointer-events-none"></span>
  </span>
)}

              </div>
              {/* Included */}
              <div className="text-left mt-4 mb-4">
                <span className="font-semibold text-black text-[14px] md:text-[20px]">Included:</span>
                <ul className="mt-3 space-y-2">
                  {pkg.included.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] md:text-[15px] text-black">
                      <FaCheckCircle className="text-[#DADD39] min-w-[18px] min-h-[18px] mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Custom Quote button */}
              <button
                className="
                  mt-auto self-start
                  bg-[#DADD39]
                  text-black 
                  font-medium 
                  rounded-[5px]
                  md:rounded-[10px] 
                  px-3 py-1 text-sm
                  md:px-5 md:py-2 md:text-base
                  transition hover:bg-transparent hover:border-[1px] hover:border-black
                  shadow-none
                "
              >
                Custom Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingAndPackage;
