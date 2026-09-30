import React from "react";
import Image from "next/image";

const StoryDevelopmentSection: React.FC = () => {
  const services = [
    "Developmental editing",
    "Copyediting",
    "Proofreading",
    "Dialogue review",
    "Grammar and spelling checks",
    "Character and terminology consistency",
    "Story flow review",
    "Final manuscript review",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Styled H2 with Yellow Underline */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
          <span className="border-b-8 border-yellow-400 pb-2">
            Comic Book Editing & Proofreading
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/comic-book/Rectangle 14 (5).svg"
            alt="Comic script and story development notes"
            width={600}
            height={750}
            className="w-full max-h-[600px] object-cover rounded-2xl shadow-sm"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
            Make Sure Your Story Reads as Clearly as It Looks
          </h3>

          <p className="text-gray-500 italic mb-2 text-base">
            Before your comic is published, the written content should be
            reviewed carefully.
          </p>

          <p className="text-gray-600 mb-3 leading-relaxed text-md">
            Comic book editing requires more than checking spelling and grammar.
            Dialogue, captions, character names, story consistency, pacing, and
            the relationship between text and artwork all need to work together.
          </p>

          <p className="text-gray-800 font-medium mb-3 text-md">
            Our editing support can include:
          </p>

          <ul className="space-y-1 mb-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-yellow-500 text-xl flex-shrink-0">•</span>
                <span className="text-base">{service}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed text-md">
            The goal is to improve the clarity and quality of your comic while
            preserving the creative style that makes your story yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryDevelopmentSection;
