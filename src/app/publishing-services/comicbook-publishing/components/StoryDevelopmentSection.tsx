"use client";

import React from "react";
import Image from "next/image";

export default function StoryDevelopmentSection() {
  const services = [
    "Comic story development",
    "Comic script writing",
    "Character development",
    "Dialogue development",
    "Story structure",
    "Scene development",
    "Panel and page planning",
    "Graphic novel writing",
    "Script review and refinement",
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Styled H2 with Yellow Underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
            <span className="border-b-8 border-yellow-400 pb-2">
              Comic Book Writing & Story Development
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column - Image */}
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop"
              alt="Comic book story development and script writing process"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Build A Strong Story Before Production Begins
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base">
                Every comic starts with a story.
              </p>
              
              <p className="text-base">
                Whether you have a detailed concept or only a basic idea, developing the story before production can help create a stronger foundation for the finished book.
              </p>
              
              <p className="text-base">
                Our comic book writing and story development support can include:
              </p>
            </div>

            {/* Services List */}
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-500 text-xl flex-shrink-0">•</span>
                  <span className="text-base">{service}</span>
                </li>
              ))}
            </ul>

            <p className="text-base text-gray-700 leading-relaxed pt-2">
              If you already have a story, we can work with your existing material while maintaining the creative direction and voice of your project.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}