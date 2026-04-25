import { robotoMono } from "@/app/fonts";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c] min-h-[320px]">
      {/* ── Left half: desk image ── */}
      <div className="absolute top-0 left-0 h-full w-1/2">
        <img
          src="/landing-page/Rectangle 17.png"
          alt="desk with tablet and books"
          className="w-full h-full object-cover object-center"
        />
        {/* Fade ONLY at the right edge of the image into the dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-50% to-[#1c1c1c]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row items-center">
        {/* Left spacer */}
        <div className="hidden md:block md:w-1/2 flex-shrink-0" />

        {/* Right: Text + Buttons */}
        <div className="flex flex-col gap-5 w-full md:max-w-[1920px] md:pl-8">
          {/* Eyebrow */}
          <p className="text-white/80 text-xl font-medium [font-family:'DM_Sans',sans-serif]">
            Want To Have Your Ebook Published?
          </p>

          {/* Heading */}
          <h2 className="text-[#DADD39] min-w-[650px] text-[59px] font-extrabold leading-[1.1] [font-family:'DM_Sans',sans-serif]">
            Let's Share Your Work With The World!
          </h2>

          {/* Body */}
          <p className={`text-white/75 text-lg leading-[1.9] ${robotoMono.className}`}>
            Are you done with your book and looking for ways to have it
            published? Get in touch with us now to get your eBook published by
            experts! We help authors gain global exposure for their work.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-1">
            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </Link>

            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all gap-x-2 duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
