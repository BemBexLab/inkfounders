import { robotoMono } from "@/app/fonts";
import React from "react";

const tableData = [
  {
    feature: "Book Size",
    options: "Standard Or Custom Dimensions",
    suitedFor: "Different Audiences And Artwork Layouts",
  },
  {
    feature: "Interior Paper",
    options: "White Uncoated Paper In Suitable Weights",
    suitedFor: "Coloring With Pencils And Crayons",
  },
  {
    feature: "Printing Style",
    options: "Black-And-White, Single-Sided, Or Double-Sided Where Supported",
    suitedFor: "Different Artwork And Budget Requirements",
  },
  {
    feature: "Binding",
    options: "Saddle Stitch, Perfect Binding, Spiral, Or Wire-O Where Available",
    suitedFor: "Different Page Counts And Usage Needs",
  },
  {
    feature: "Cover",
    options: "Paperback Or Hardcover, With Suitable Finishes",
    suitedFor: "Everyday Use, Retail, Or Premium Gifts",
  },
  {
    feature: "Quantity",
    options: "Short Digital Runs Or Larger Print Runs",
    suitedFor: "Testing Demand Or Producing Books At Scale",
  },
];

export default function ColoringBookPrintingOptions() {
  return (
    <div className="bg-white px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-10 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          How To Choose The Right Coloring Book Printing Options
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-full text-center text-sm leading-relaxed text-gray-600">
          Before <b>printing a coloring book</b>, decide how it will be used. The paper,
          binding, size, and <b>printing method</b> can affect the reading experience and
          <b>production cost</b>.
        </p>

        {/* Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse">
            <thead className="">
              <tr className={robotoMono.className}>
                <th className="bg-[#DADD39] rounded-l-xl px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Printing Feature
                </th>
                <th className="bg-[#DADD39] px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Available Options To Consider
                </th>
                <th className="bg-[#DADD39] rounded-r-xl px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Best Suited For
                </th>
              </tr>
            </thead>
            <tbody className={`${robotoMono.className} text-center`}>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"}
                >
                  <td className="font-medium border-gray-200 px-6 py-5 text-sm text-gray-700">
                    {row.feature}
                  </td>
                  <td className="font-medium border-gray-200 px-6 py-5 text-sm text-gray-700">
                    {row.options}
                  </td>
                  <td className="font-medium border-gray-200 px-6 py-5 text-sm text-gray-700">
                    {row.suitedFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-600">
          These options depend on the selected printing provider and production
          specifications.
        </p>
      </div>
    </div>
  );
}
