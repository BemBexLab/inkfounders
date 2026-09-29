import React from 'react';

export default function GraphicNovelPublishing() {
  const services = [
    'Story development',
    'Manuscript development',
    'Script writing',
    'Editing and proofreading',
    'Interior formatting',
    'Cover design',
    'Print preparation',
    'Digital preparation',
    'Publishing support',
    'Marketing support',
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
            <span className="border-b-8 border-yellow-400 pb-2">
              Graphic Novel Publishing Services
            </span>
          </h2>
        </div>

        {/* Two Column Layout - items-stretch ensures both columns are same height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column - Image fills full height of row */}
          <div className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200" 
              alt="Graphic Novel Publishing Mockup" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Turn Your Long Form Story Into a Finished Graphic Novel
            </h2>

            <p className="text-gray-700 leading-relaxed text-base">
              Graphic novels combine long-form storytelling, artwork, typography, panel layouts, and professional book production.
            </p>

            <p className="text-gray-700 leading-relaxed text-base">
              That means the publishing process needs careful coordination between the manuscript, artwork, page design, cover, and final production files.
            </p>

            <p className="text-gray-700 leading-relaxed text-base">
              Our graphic novel publishing support can include:
            </p>

            <ul className="space-y-1 text-gray-700 text-base">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-700 mt-0.5">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed text-base pt-2">
              From an early manuscript to a finished graphic novel, we can help you move through the major stages of the publishing process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}