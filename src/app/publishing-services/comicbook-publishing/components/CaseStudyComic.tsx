import { label } from "motion/react-client";
import Image from "next/image";
import { AiFillProject } from "react-icons/ai";
import {
  FiFileText,
  FiCheckCircle,
  FiLayout,
  FiPenTool,
  FiUploadCloud,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

export default function CaseStudyComic() {
  const supportServices = [
    { icon: FiFileText, label: "Editing" },
    { icon: FiCheckCircle, label: "Proofreading" },
    { icon: FiLayout, label: "Interior Formatting" },
    { icon: FiPenTool, label: "Cover Design" },
    { icon: FiUploadCloud, label: "Publishing preparation" },
    { icon: AiFillProject, label: "The Final Project" }
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-[#F5F5E8] text-zinc-900 overflow-hidden">
      {/* Decorative background arcs - Scaled up for full width */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1400px] h-[600px] bg-[#E8E8C8] rounded-t-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8E8C8]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Inner Container - Full width but capped on ultra-wide screens for readability */}
      <div className="relative w-full max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl">
          {/* <div className="flex items-center gap-3 mb-6">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-600"></span>
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-lime-700">
              Case Study / Portfolio • High Priority
            </span>
          </div> */}

          <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900">
            From Manuscript to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-zinc-900">Finished Comic</span>
              <span className="absolute bottom-3 left-0 w-full h-5 bg-[#D4E157]/60 -z-0" />
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Project Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* The Project */}
            <div>
              <p className="text-sm font-semibold text-lime-700 uppercase tracking-widest mb-3">
                Project 01
              </p>
              <h3 className="text-3xl font-bold text-zinc-900 mb-4">
                The Project
              </h3>
              <p className="text-zinc-700 leading-relaxed text-xl">
                A creator had a completed comic story and artwork but needed
                professional support preparing the project for publication.
              </p>
            </div>

            {/* The Challenge */}
            <div className="pl-6 border-l-4 border-[#D4E157]">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                The Challenge
              </h3>
              <p className="text-zinc-700 leading-relaxed text-lg">
                The project required meticulous editing, interior formatting,
                cover preparation, and generating flawless publishing-ready
                files across multiple platforms.
              </p>
            </div>

            {/* Our Support */}
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-6 flex items-center gap-2">
                <FiStar className="w-6 h-6 text-lime-600" />
                Our Support
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supportServices.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 hover:border-[#D4E157] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D4E157]/30 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-lime-800" />
                    </div>
                    <span className="text-base font-semibold text-zinc-800">
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Showcase & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Large Hero Image at Top */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-[#D4E157]/40 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-zinc-900 bg-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1600"
                  alt="Comic Book Collection - Project 01"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>

            {/* Two Smaller Images Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image 1 */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-zinc-900 bg-white shadow-lg group/img">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=1000"
                  alt="Comic Book Shelf"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  sizes="40vw"
                />
              </div>

              {/* Image 2 */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-zinc-900 bg-white shadow-lg group/img">
                <Image
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=1000"
                  alt="Comic Art Mural"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  sizes="40vw"
                />
              </div>
            </div>

            {/* Full-Width CTA Button */}
            <div className="pt-4">
              <a
                href="/contactus"
                className="group/btn relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4E157] px-8 py-5 text-lg font-bold text-zinc-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] border-2 border-zinc-900"
              >
                Start Your Own Comic Project
                <FiArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}