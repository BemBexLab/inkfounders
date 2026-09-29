import React from "react";
import { HiOutlineColorSwatch } from "react-icons/hi";
import {
  HiOutlineStar,
  HiOutlineCheckCircle,
  HiOutlinePencil,
  HiOutlineDocumentText,
  HiOutlineBookOpen,
  HiOutlineMegaphone,
} from "react-icons/hi2";

const WhyChooseInkFounders = () => {
  const features = [
    {
      title: "End to End Publishing Support",
      description:
        "Get support across writing, editing, design, formatting, publishing, and promotion.",
    },
    {
      title: "Our Approach",
      description:
        "Your story, characters, artwork, and creative direction remain central to the project.",
    },
    {
      title: "Support at Different Stages",
      description:
        "Whether you have an idea, script, artwork, or completed comic, we can help identify the next step.",
    },
    {
      title: "Professional Production Support",
      description:
        "Prepare your comic with professional editing, design, formatting, and publishing preparation.",
    },
    {
      title: "Clear Communication",
      description:
        "Understand what stage your project is in and what needs to happen next.",
    },
  ];

  const trustIcons = [
    {
      label: "Writing",
      icon: <HiOutlinePencil className="text-3xl" />,
    },
    {
      label: "Editing",
      icon: <HiOutlineDocumentText className="text-3xl" />,
    },
    {
      label: "Design",
      icon: <HiOutlineColorSwatch className="text-3xl" />,
    },
    {
      label: "Publishing",
      icon: <HiOutlineBookOpen className="text-3xl" />,
    },
    {
      label: "Marketing",
      icon: <HiOutlineMegaphone className="text-3xl" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f3e8] py-20 px-4 sm:px-6 lg:px-8">
      {/* Organic background shapes with a yellowish touch */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-100/50 rounded-full opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-[#e3dfce] rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#dcd8c4] rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
            <span className="border-b-8 border-yellow-400 pb-2">
              Why Choose Ink Founders?
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-[#2d2d2d] mt-6 mb-8">
            One Team for Your Comic Publishing Journey!
          </p>

          <div className="max-w-3xl space-y-4 text-[#4a4a4a] text-base sm:text-lg leading-relaxed">
            <p>
              Publishing a comic can involve{" "}
              <span className="text-[#1a1a1a] font-semibold">
                writers, editors, designers, artists, formatters, publishers,
                and marketing professionals.
              </span>
              .
            </p>
            <p>
              Working with{" "}
              {/* Yellow highlighter effect for key text */}
              <span className="bg-yellow-200/50 px-1.5 rounded text-[#1a1a1a] font-semibold">
                one publishing team
              </span>{" "}
              can make it easier to coordinate these different stages.
            </p>
          </div>
        </div>

        {/* The Challenge - with green accent line */}
        {/* <div className="mb-16 border-l-4 border-[#a3b87a] pl-6">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
            The Challenge
          </h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-3xl">
            The project required meticulous editing, interior formatting, cover
            preparation, and generating flawless publishing-ready files across
            multiple platforms.
          </p>
        </div> */}

        {/* Our Support */}
        <div className="">
          <div className="flex items-center gap-3 mb-4">
            {/* Yellow star to match the theme */}
            <HiOutlineStar className="text-3xl text-yellow-500" />
            <h3 className="text-2xl font-bold text-[#1a1a1a]">Our Support</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e5e3d6] rounded-xl p-5 hover:border-yellow-400 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                {/* Yellow icon background */}
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-50 border border-yellow-100 rounded-lg flex items-center justify-center">
                  <HiOutlineCheckCircle className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-[#1a1a1a] font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseInkFounders;