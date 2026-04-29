import React from "react";

const stats = [
  {
    number: "1,000",
    suffix: "+",
    label: "Authors Published",
  },
  {
    number: "40",
    suffix: "+",
    label: "Global Platforms",
  },
  {
    number: "100",
    suffix: "%",
    label: "Ownership Retained",
  },
  {
    number: "100",
    suffix: "+",
    label: "Publishing Experts",
  },
];

const NumericValues = () => {
  return (
    <section className="bg-white px-4 py-8 min-[420px]:px-6 sm:px-8 sm:py-[34px] lg:px-10">
      <div className="grid w-full grid-cols-1 gap-y-6 min-[520px]:grid-cols-2 min-[520px]:gap-y-8 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex min-h-[82px] flex-col items-center justify-center border-t border-[#e9e9e9] text-center first:border-t-0 min-[520px]:min-h-[96px] min-[520px]:border-t-0 ${
              index % 2 === 1 ? "min-[520px]:border-l min-[520px]:border-[#e9e9e9]" : ""
            } lg:min-h-[116px] lg:border-l lg:border-[#e9e9e9] ${
              index === 0 ? "lg:border-l-0" : ""
            }`}
          >
            <div className="text-[clamp(2.4rem,12vw,3.6rem)] font-extrabold leading-none text-[#151519] sm:text-6xl">
              {stat.number}
              <span className="text-[#bfd700]">{stat.suffix}</span>
            </div>
            <p className="mt-2 text-sm font-medium leading-none text-[#5d5d5d] sm:text-base lg:text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumericValues;
