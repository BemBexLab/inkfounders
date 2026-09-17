import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactStrip() {
  return (
    <section
      aria-label="Copyright and social links"
      className="poppins w-full bg-[#1f1f1f] text-[#f5f5f5]"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-5 px-5 py-6 text-center text-sm font-normal leading-[1.5] sm:px-8 sm:text-base lg:min-h-[68px] lg:flex-row lg:gap-6 lg:py-[14px] lg:pl-[5.3%] lg:pr-[7.4%] lg:text-[17px] poppins">
        <p>@2026 Copyrights - Ink Founders</p>

        <nav aria-label="Social media" className="flex shrink-0 items-center gap-4">
          <a
            href="https://www.facebook.com/InkFounders"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ink Founders on Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#DADD39] text-[#1f1f1f] shadow-[0_4px_12px_rgba(218,221,57,0.12)] transition-colors hover:bg-[#ebef53] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DADD39]"
          >
            <FaFacebookF aria-hidden="true" className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://www.instagram.com/ink_founder/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ink Founders on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#DADD39] text-[#1f1f1f] shadow-[0_4px_12px_rgba(218,221,57,0.12)] transition-colors hover:bg-[#ebef53] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DADD39]"
          >
            <FaInstagram aria-hidden="true" className="h-5 w-5" />
          </a>
        </nav>

        <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 poppins">
          <Link href="/terms" className="whitespace-nowrap transition-colors hover:text-[#DADD39] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DADD39]">
            Terms &amp; Conditions
          </Link>
          <span aria-hidden="true">|</span>
          <Link href="/privacy" className="whitespace-nowrap transition-colors hover:text-[#DADD39] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DADD39]">
            Privacy Policies
          </Link>
        </nav>
      </div>
    </section>
  );
}
