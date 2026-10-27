import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const costFactors = [
  <><b>Page count:</b> Longer books generally require more paper and production time.</>,
  <><b>Book size:</b> Larger dimensions can affect paper usage and printing costs.</>,
  <><b>Paper quality:</b> Heavier or specialty paper may increase the total price.</>,
  <><b>Binding:</b> Different binding methods have different production requirements.</>,
  <><b>Print quantity:</b> Larger orders may reduce the cost per copy.</>,
  <><b>Cover and finishing:</b> Lamination, hardcover construction, and special finishes may add costs.</>,
  <><b>Artwork and formatting:</b> Illustration, editing, and layout services may be charged separately.</>,
  <><b>Shipping:</b> Delivery costs depend on the order size, destination, and shipping method.</>,
];

const inkFoundersFeatures = [
  <><b>A clear project plan:</b> Define your audience, theme, format, and publishing goals.</>,
  <><b>Professional presentation:</b> Give attention to interior formatting and cover design.</>,
  <><b>Practical publishing guidance:</b> Understand the steps involved in preparing a book for publication.</>,
  <><b>A suitable production plan:</b> Compare printing formats and specifications against your budget.</>,
  <><b>A reader-focused approach:</b> Make sure the book's content, design, and physical format work together.</>,
];

export default function ColoringBookPrintingInfo() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Section 1: Print-On-Demand */}
        <div className="mb-20 flex flex-col items-center gap-12 lg:flex-row lg:items-stretch">
          {/* Image */}
          <div className="relative min-h-[300px] w-full flex-1 overflow-hidden lg:min-h-[500px]">
            <Image
              src="/coloring-book/Rectangle 14 (5).webp"
              alt="Person holding coloring book"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="mb-2 text-left text-4xl font-semibold text-gray-900 md:text-5xl">
              Is Print-On-Demand Coloring Book Printing Right For You?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              Print-on-demand <b>coloring book printing</b> can be useful if you are a
              new author or want to test a book before investing in a large
              quantity. It can reduce the need to store inventory, although
              platform fees, <b>printing costs, shipping</b>, and sales margins still
              need to be considered.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              A larger custom print order may be a better choice when you need
              many copies for schools, <b>events, retailers, or promotional
              campaigns</b>.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Compare the available formats, printing specifications,
              distribution arrangements, and costs before choosing a method.
            </p>
          </div>
        </div>

        {/* Section 2: How Much Does It Cost */}
        <div className="mb-20 flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-stretch">
          {/* Image */}
          <div className="relative min-h-[300px] w-full flex-1 overflow-hidden lg:min-h-[500px]">
            <Image
              src="/coloring-book/Rectangle 14 (6).webp"
              alt="Coloring pages with pencils"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="mb-2 text-left text-4xl font-semibold text-gray-900 md:text-5xl">
              How Much Does Coloring Book Printing Cost?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              The <b>cost of printing a coloring book</b> depends on several factors.
              There is no single price that suits every project.
            </p>
            <p className="mb-4 text-sm font-semibold text-gray-700">
              Your quote may depend on:
            </p>
            <ul className="mb-3 space-y-2">
              {costFactors.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c8d940]">
                    <FaCheck className="text-[8px] text-white" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              To compare <b>coloring book printing companies</b>, request a quote based
              on the same specifications. Check whether the <b>price</b> includes
              <b>artwork preparation, proofing, printing, binding, packaging</b>, and
              delivery.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              The <b>cheapest quote</b> is not always the best value. A <b>suitable paper
              stock</b>, readable layout, and reliable production process can make a
              difference to the finished book.
            </p>
          </div>
        </div>

        {/* Section 3: Why Choose Ink Founders */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch">
          {/* Image */}
          <div className="relative min-h-[300px] w-full flex-1 overflow-hidden lg:min-h-[500px]">
            <Image
              src="/coloring-book/Rectangle 14 (7).webp"
              alt="Mother and child coloring together"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="mb-2 text-left text-4xl font-semibold text-gray-900 md:text-5xl">
              Why Choose Ink Founders For Your Coloring Book Project?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              Creating a <b>coloring book</b> involves several connected tasks, from
              preparing the illustrations to planning publication. A clear
              process helps you manage these tasks and make informed decisions.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              Ink Founders provides book related services that can help authors
              develop and prepare their publishing projects.
            </p>
            <p className="mb-4 text-sm font-semibold text-gray-700">
              When planning your <b>coloring book</b>, you can focus on:
            </p>
            <ul className="mb-3 space-y-2">
              {inkFoundersFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c8d940]">
                    <FaCheck className="text-[8px] text-white" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-gray-700">
              Discuss your project requirements with our team to confirm which
              services are available and whether your preferred printing
              specifications can be supported.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
