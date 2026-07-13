import { robotoMono } from "@/app/fonts";
import CustomScrollbar from "@/components/CustomScrollbar";
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
  subDesc,
}: {
  title: string;
  subtitle?: string;
  description: string;
  checklist: string[];
  subDesc?: string;
}) => (
  <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
    <h3 className="mb-1 text-base font-semibold text-black">{title}</h3>
    <CustomScrollbar
      containerClassName="mt-3"
      className="h-[170px] md:h-[190px]"
      style={{ marginRight: 0, paddingRight: "0.75rem" }}
    >
      {subtitle && <h4 className="mb-2 text-sm font-medium text-gray-800">{subtitle}</h4>}
      {description && (
        <p className={`${robotoMono.className} mt-2 text-[13px] leading-relaxed text-gray-700`}>
          {description}
        </p>
      )}
      {checklist.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {checklist.map((item, idx) => (
            <CheckItem key={idx}>{item}</CheckItem>
          ))}
        </ul>
      )}
      {subDesc && (
        <p className={`${robotoMono.className} mt-4 text-[13px] leading-relaxed text-gray-700`}>
          {subDesc}
        </p>
      )}
    </CustomScrollbar>
  </div>
);

export default function EditingProofreadingPage() {
  const serviceCards = [
    {
      title: "Developmental Editing",
      description:
        "Before we touch a comma, we look at the bigger picture: does the story flow, does the structure hold together, does each chapter earn its place? Our developmental editing service for first-time authors focuses on the shape of the book as a whole.",
      checklist: [
        "Storyline & content flow improvement",
        "Chapter structure refinement",
        "Clarity & logical consistency",
      ],
    },
    {
      title: "Copyediting",
      description:
        "Once the structure is solid, our copyeditors go line by line, fixing the language-level issues without flattening your style.",
      checklist: [
        "Grammar, spelling & punctuation",
        "Sentence clarity & tone consistency",
        "Style and formatting alignment",
      ],
    },
    {
      title: "Proofreading",
      description:
        "Editing and proofreading aren't the same thing, and we treat them that way. Proofreading is the last pass before publishing, a fresh set of eyes checking for anything editing might have missed.",
      checklist: [
        "Typographical error removal",
        "Final grammar & formatting review",
        "Publishing-ready manuscript",
      ],
      subDesc: "Together, these three stages make up a full manuscript editing service before publishing, not just a single read-through, but a proper process.",
    },
    {
      title: "Types of Manuscripts We Edit",
      description:
        "Ink Founders works with a wide range of content, including:",
      checklist: [
        "Fiction & Non-Fiction eBooks",
        "Business & Self-Help Books",
        "Educational Content",
        "Biographies & Memoirs",
      ],
      subDesc: "Whether you need a line editing service for a novel or a professional book editor for a nonfiction manuscript, we match the editor to the genre."
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
      subDesc: "Our manuscript evaluation service for new authors starts every project; we read your work first and tell you honestly which level of editing it actually needs, rather than selling you more than you require."
    },
    {
      title: "Who This Service Is For",
      description: "",
      checklist: [
        "First-time authors",
        "Self-published writers looking for a proofreading service that understands indie publishing",
        "Business professionals",
        "Content creators",
      ],
    },
  ];

  return (
    <main className="bg-[#F4F3E1]">
      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:py-16 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="grid grid-cols-1 items-center justify-items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="contents lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-center lg:px-1 lg:pl-12 xl:pl-20">
              <div className="contents lg:block lg:w-full lg:max-w-xl">
                <h1 className="order-1 mb-0 w-full max-w-2xl text-center text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-[48px] lg:mb-6 lg:text-left">
                  Editing & Proofreading Services
                </h1>
                <p className={`${robotoMono.className} order-3 w-full max-w-2xl text-center text-[13px] leading-relaxed text-gray-700 sm:text-[14px] md:text-[15px] lg:max-w-none lg:text-left lg:leading-loose`}>
                  At Ink Founders, our book editing and proofreading services are built to get your manuscript polished, error-free, and genuinely ready for publishing. We refine your writing without rewriting you, so your book meets international publishing standards while still sounding like the person who wrote it.
                </p>
              </div>
            </div>
            <div className="relative order-2 flex w-full items-center justify-center px-0 sm:px-4 md:px-8 lg:order-none lg:ml-5">
              <div className="relative flex aspect-square w-[min(82vw,350px)] items-center justify-center overflow-hidden rounded-lg sm:w-[400px] md:w-[440px] lg:h-[440px] lg:w-[380px] xl:h-[480px] xl:w-[480px] 2xl:h-[520px] 2xl:w-[520px]">
                <Image
                  src="/publishingservices/Rectangle 23.webp"
                  alt="Editing & Proofreading Services"
                  width={574}
                  height={736}
                  sizes="(max-width: 640px) 350px, (max-width: 768px) 400px, (max-width: 1024px) 440px, 520px"
                  className="h-full w-full object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Only — 6 cards */}
      <section className="px-4 md:px-10 2xl:px-20 py-5">
        <div className="max-w-[1450px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
                checklist={card.checklist}
                subDesc={card.subDesc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — NOT a card */}
      <section className="px-4 py-7 sm:px-6 sm:py-9 md:px-10 lg:py-12 2xl:px-20">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="order-2 flex w-full justify-center lg:order-none lg:w-1/2">
              <div className="relative flex aspect-square w-[min(66vw,240px)] items-center justify-center overflow-hidden rounded-lg sm:w-[260px] md:w-[340px] lg:w-full lg:max-w-md">
                <Image
                  src="/publishingservices/Rectangle 27.webp"
                  alt="Why Choose Ink Founders"
                  width={574}
                  height={736}
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="contents lg:flex lg:w-1/2 lg:flex-col">
              <h2 className="order-1 mb-0 text-center text-[20px] font-semibold leading-tight text-black sm:text-2xl md:text-3xl lg:mb-6 lg:text-left">
                Why Choose Ink Founders
              </h2>
              <ul className="order-3 mb-4 w-full max-w-[360px] flex-grow space-y-1.5 sm:max-w-[235px] sm:space-y-2 lg:mb-8 lg:max-w-none lg:space-y-3">
                {[
                  "Professional, experienced editors",
                  "Native-level language quality",
                  "An editing service that keeps your writing voice, not one that overwrites it",
                  "Confidential and secure handling of your manuscript at every stage",
                  "An affordable book editing service in the USA, with a book editing package that includes unlimited revisions until you're satisfied"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DADD39] mt-0.5 text-lg">✓</span>
                    <span className="text-[12px] leading-relaxed text-gray-800 sm:text-[13px] md:text-[14px] lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="order-4 self-center lg:self-start">
                <Link href="/contactus">
                  <button
                    type="button"
                    className="btn-slide-bg flex items-center gap-2 rounded-md border border-transparent bg-[#DADD39] px-5 py-2 text-[13px] font-normal text-black shadow transition-all duration-300 hover:border-black sm:px-6 sm:py-2.5 sm:text-sm lg:py-3 lg:text-base"
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
          <p className={`${robotoMono.className} text-gray-700 text-[15px] leading-tight max-w-3xl mx-auto`}>
            <b>Prepare Your Manuscript for Publishing</b>
          </p>
          <p className="mt-3 text-gray-700">
            A professionally edited book builds credibility, trust, and reader satisfaction. Let <b><a href="https://share.google/i7yXrn8AiGA5wvzYJ" className="">Ink Founders</a></b> refine your manuscript to publishing perfection.
          </p>
        </div>
      </section>
    </main>
  );
}
