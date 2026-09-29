// components/ComicMarketing.tsx
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {
  FaPenNib,
  FaBolt,
  FaBullhorn,
  FaComments,
  FaRocket,
  FaImage,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa6";

const marketingServices = [
  {
    icon: <FaPenNib className="w-5 h-5" />,
    title: "Creator Branding",
    description:
      "Build a recognizable identity that resonates with your audience.",
  },
  {
    icon: <FaSearch className="w-5 h-5" />,
    title: "Keyword Research",
    description: "Get discovered by the right readers at the right time.",
  },
  {
    icon: <FaBolt className="w-5 h-5" />,
    title: "Book Page Optimization",
    description: "Turn browsers into buyers with compelling, optimized pages.",
  },
  {
    icon: <FaBullhorn className="w-5 h-5" />,
    title: "Online Promotion",
    description: "Reach new readers across the web with targeted campaigns.",
  },
  {
    icon: <FaComments className="w-5 h-5" />,
    title: "Social Media Content Planning",
    description: "Stay consistent and engaging on every platform.",
  },
  {
    icon: <FaRocket className="w-5 h-5" />,
    title: "Launch Support",
    description: "Make a splash on day one with a strategic launch plan.",
  },
  {
    icon: <FaImage className="w-5 h-5" />,
    title: "Promotional Materials",
    description: "Eye-catching assets that sell your story before page one.",
  },
  {
    icon: <FaChartLine className="w-5 h-5" />,
    title: "Audience-Building Strategies",
    description: "Grow a loyal fanbase that follows you from book to book.",
  },
];

export default function ComicMarketing() {
  return (
    <section className="relative bg-[#f5f1e8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative curved shape */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <path
            d="M400 400 C300 300, 200 350, 100 250 C50 200, 0 150, 0 100 L0 400 L400 400 Z"
            fill="#c8d06a"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
              <span className="border-b-8 border-yellow-400 pb-2">
                Comic Book Marketing & Promotion
              </span>
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
            Help More Readers Discover Your Comic
          </h3>
          <div className="space-y-2">
            <p className="text-lg text-[#3a3a4a] max-w-3xl leading-tight">
              Publishing your comic is only one part of building an audience.
            </p>
            <p className="text-lg text-[#3a3a4a] max-w-3xl leading-tight">
              Once your book is ready, you need a way to introduce it to
              potential readers and establish your creator or book brand.
            </p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image side */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e8e4d8]">
              {/* Image only — no overlay */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80"
                  alt="Comic Book Launch Flow: Comic Book to Website to Social Media to Readers"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Services grid */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">
              Our marketing support can include:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketingServices.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-5 shadow-sm border border-[#e8e4d8] hover:border-[#a8b83a] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#eef2d8] rounded-lg flex items-center justify-center text-[#6b7a2e] group-hover:bg-[#a8b83a] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm md:text-base leading-tight">
                        {service.title}
                      </h4>
                      {/* <p className="text-xs md:text-sm text-[#6a6a7a] mt-1 leading-snug">
                        {service.description}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-[#a8b83a] mb-12">
          <p className="text-[#1a1a2e] text-lg md:text-xl font-medium text-center md:text-left leading-relaxed">
            The right promotional approach depends on your{" "}
            <span className="font-bold text-[#1a1a2e]">comic</span>,{" "}
            <span className="font-bold text-[#1a1a2e]">genre</span>,{" "}
            <span className="font-bold text-[#1a1a2e]">audience</span>,{" "}
            <span className="font-bold text-[#1a1a2e]">publishing format</span>,
            and <span className="font-bold text-[#1a1a2e]">goals</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/plan-launch"
            className="group inline-flex items-center gap-3 bg-[#a8b83a] hover:bg-[#8fa02e] text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span>Plan My Comic Launch</span>
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
