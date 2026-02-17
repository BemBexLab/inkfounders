import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";

// ✅ EXACT SAME CheckItem as your main service page
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-[#DADD39] mt-0.5 text-base">✔</span>
    <span className="text-gray-700 text-[13px] leading-relaxed">{children}</span>
  </li>
);

// ✅ EXACT SAME ServiceCard — used for all service blocks
const ServiceCard = ({
  title,
  subtitle,
  description,
  checklist,
}: {
  title: string;
  subtitle?: string;
  description: string;
  checklist: string[];
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
    <h3 className="text-base font-semibold text-black mb-1">{title}</h3>
    {subtitle && <h4 className="text-sm font-medium text-gray-800 mb-2">{subtitle}</h4>}
    {description && (
      <p className={`${robotoMono.className} text-gray-700 text-[13px] leading-relaxed mb-3 flex-grow`}>
        {description}
      </p>
    )}
    {checklist.length > 0 && (
      <ul className="space-y-1.5">
        {checklist.map((item, idx) => (
          <CheckItem key={idx}>{item}</CheckItem>
        ))}
      </ul>
    )}
  </div>
);

export default function EditingProofreadingPage() {
  const serviceCards = [
    {
      title: "Developmental Editing",
      description:
        "We evaluate your manuscript’s structure, flow, and content organization to improve readability and engagement.",
      checklist: [
        "Storyline & content flow improvement",
        "Chapter structure refinement",
        "Clarity & logical consistency",
      ],
    },
    {
      title: "Copyediting",
      description:
        "Our copyeditors correct language level issues while maintaining your writing style.",
      checklist: [
        "Grammar, spelling & punctuation",
        "Sentence clarity & tone consistency",
        "Style and formatting alignment",
      ],
    },
    {
      title: "Proofreading",
      description:
        "The final quality check before publishing to ensure your manuscript is error-free.",
      checklist: [
        "Typographical error removal",
        "Final grammar & formatting review",
        "Publishing-ready manuscript",
      ],
    },
    {
      title: "Types of Manuscripts We Edit",
      description:
        "Ink Founders edits a wide range of content, including:",
      checklist: [
        "Fiction & Non-Fiction eBooks",
        "Business & Self-Help Books",
        "Academic & Educational Content",
        "Biographies & Memoirs",
      ],
    },
    {
      title: "Our Editing Process",
      description: "",
      checklist: [
        "Manuscript evaluation",
        "Editing level recommendation",
        "Detailed editing & corrections",
        "Client review & feedback",
        "Final polished delivery",
      ],
    },
    {
      title: "Who This Service Is For",
      description: "",
      checklist: [
        "First-time authors",
        "Self-published writers",
        "Business professionals",
        "Content creators",
      ],
    },
  ];

  return (
    <main className="bg-[#F4F3E1]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-10 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-4 md:px-1 w-full md:ml-20">
              <div className="max-w-xl w-full">
                <h1 className="text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight text-black mb-6 text-left lg:text-left">
                  Editing & Proofreading Services
                </h1>
                <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-loose text-left md:text-center lg:text-left`}>
                  At Ink Founders, our professional editing and proofreading services ensure your manuscript is polished, error-free, and ready for publishing. We refine your content while preserving your unique voice, helping your eBook meet international publishing standards and reader expectations.
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-8 w-full lg:ml-5 relative max-lg:mt-10">
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[440px] md:h-[440px] lg:w-[380px] lg:h-[440px] xl:w-[480px] xl:h-[480px] 2xl:w-[520px] 2xl:h-[520px]">
                <Image
                  src="/Home/bookslidetest/ChatGPT Image Jul 3, 2025, 04_31_44 AM 1.png"
                  alt="Editing & Proofreading Services"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Only — 6 cards */}
      <section className="px-4 md:px-10 2xl:px-20 py-10">
        <div className="max-w-[1450px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
                checklist={card.checklist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — NOT a card */}
      <section className="px-4 md:px-10 2xl:px-20 py-12">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/Home/bookslidetest/ChatGPT Image Jul 3_ 2025_ 04_00_28 AM 4.png"
                  alt="Why Choose Ink Founders"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 text-center lg:text-left">
                Why Choose Ink Founders
              </h2>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Professional, experienced editors",
                  "Native-level language quality",
                  "Retention of author’s voice",
                  "Confidential and secure handling",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#DADD39] mt-0.5 text-lg">✓</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto self-start lg:self-start">
                <Link href="/contactus">
                  <button
                    type="button"
                    className="btn-slide-bg flex items-center gap-2 bg-[#DADD39] text-black font-normal px-6 py-3 rounded-md shadow border border-transparent hover:border-black transition-all duration-300"
                  >
                    <span className="slide-bg rounded-md"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <IoMdCall size={20} />
                      Request a Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Paragraph */}
      <section className="px-4 md:px-10 2xl:px-20 py-8">
        <div className="max-w-[1450px] mx-auto text-center">
          <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-relaxed max-w-3xl mx-auto`}>
            Prepare Your Manuscript for Publishing<br />
            A professionally edited book builds credibility, trust, and reader satisfaction. Let Ink Founders refine your manuscript to publishing perfection.
          </p>
        </div>
      </section>
    </main>
  );
}