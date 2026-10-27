import React from "react";
import { robotoMono } from "@/app/fonts";

const tableData = [
  {
    feature: "Production",
    customPrint: "A Selected Quantity Is Printed In One Order",
    printOnDemand: "Copies Are Produced As Orders Come In",
  },
  {
    feature: "Upfront Spending",
    customPrint: "Usually Higher For Larger Print Runs",
    printOnDemand: "Often Lower Inventory Commitment",
  },
  {
    feature: "Cost Per Copy",
    customPrint: "May Decrease As Quantity Increases",
    printOnDemand: "Can Be Higher Per Copy",
  },
  {
    feature: "Storage",
    customPrint: "You May Need To Store Unsold Books",
    printOnDemand: "Less Need To Hold Inventory",
  },
  {
    feature: "Customization",
    customPrint: "Depends On Printer And Order Specifications",
    printOnDemand: "Depends On The Platform's Available Options",
  },
  {
    feature: "Best For",
    customPrint: "Events, Bulk Orders, And Planned Inventory",
    printOnDemand: "Testing Demand And Fulfilling Individual Orders",
  },
];

export default function CustomVsPrintOnDemand() {
  return (
    <div className="bg-white px-6 py-16 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-5 text-center text-4xl font-semibold text-gray-900 md:text-5xl">
          Custom Coloring Book Printing Vs. Print-On-Demand Coloring Books
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-7xl text-center text-sm leading-relaxed text-gray-600">
          Choosing between a traditional print order and <b>print-on-demand</b> depends
          on your sales plan and how many copies you need.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className={`${robotoMono.className} w-full border-collapse`}>
            <thead>
              <tr>
                <th className="bg-[#DADD39] rounded-l-xl px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Feature
                </th>
                <th className="bg-[#DADD39] px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Custom Print Order
                </th>
                <th className="bg-[#DADD39] rounded-r-xl px-6 py-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Print-On-Demand
                </th>
              </tr>
            </thead>
            <tbody className="font-medium">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"}
                >
                  <td className="px-6 py-5 text-center text-sm text-gray-700">
                    {row.feature}
                  </td>
                  <td className="px-6 py-5 text-center text-sm text-gray-700">
                    {row.customPrint}
                  </td>
                  <td className="px-6 py-5 text-center text-sm text-gray-700">
                    {row.printOnDemand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
