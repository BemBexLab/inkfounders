import Image from "next/image";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { MdOutlineRequestQuote } from "react-icons/md";

type ServiceHeroActionsProps = {
  align?: "center" | "left";
};

const trustBadges = [
  {
    id: "trustpilot-review",
    title: "Trustpilot Review",
    src: "/optimized/Home/responsive/trustpilot-logo.webp",
  },
  {
    id: "top-digital-agency",
    title: "Top Digital Agency",
    src: "/Home/Mask group.webp",
  },
];

export default function ServiceHeroActions({
  align = "center",
}: ServiceHeroActionsProps) {
  const wrapperClass =
    align === "left"
      ? "order-4 mt-7 w-full lg:max-w-xl"
      : "order-4 mt-7 w-full max-w-5xl";
  const buttonGroupClass =
    align === "left"
      ? "flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center lg:justify-start"
      : "flex w-full flex-col justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center";
  const badgeGroupClass =
    align === "left"
      ? "mt-4 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-7 lg:justify-start"
      : "mt-4 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-7";

  return (
    <div className={wrapperClass}>
      <div className={buttonGroupClass}>
        <a
          href="tel:+17866526864"
          className="btn-slide-bg flex items-center justify-center gap-2 rounded-md border border-transparent bg-[#DADD39] px-4 py-3 text-sm font-normal text-black shadow transition-all duration-300 hover:border-black min-[420px]:px-5 md:text-base"
        >
          <span className="slide-bg rounded-md" />
          <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
            <IoMdCall size={18} />
            Request a Call
          </span>
        </a>

        <Link
          href="/contactus"
          className="btn-slide-bg flex items-center justify-center gap-2 rounded-md border border-black bg-transparent px-4 py-3 text-sm font-normal text-black shadow transition-all duration-300 hover:border-[#DADD39] min-[420px]:px-5 md:text-base"
        >
          <span className="slide-bg rounded-md bg-[#DADD39]" />
          <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
            <MdOutlineRequestQuote size={19} />
            Get Free Consultation
          </span>
        </Link>
      </div>

      <div className={badgeGroupClass}>
        {trustBadges.map((badge) => (
          <a
            key={badge.id}
            href="https://www.trustpilot.com/review/inkfounders.com"
            target="_blank"
            rel="noreferrer"
            aria-label={badge.title}
            className="group flex h-[66px] w-[142px] items-center justify-center rounded-lg px-2 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] sm:h-[76px] sm:w-[170px]"
          >
            <Image
              src={badge.src}
              alt={badge.title}
              width={170}
              height={76}
              className="h-auto max-h-[62px] w-auto max-w-[155px] object-contain transition duration-300 group-hover:brightness-105"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
