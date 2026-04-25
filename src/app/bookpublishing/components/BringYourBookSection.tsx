import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

export default function BringYourBookSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* ── Full bleed background image ── */}
      <img
        src="/landing-page/image.png"
        alt="Books background"
        className="absolute inset-0 w-full h-full object-fit object-center"
      />

      {/* ── Dark overlay over the entire section ── */}
      <div className="absolute inset-0 bg-black/92" />

      {/* ── Content: centered ── */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 py-16 flex flex-col items-center gap-5 text-center">
        {/* Heading */}
        <h2 className="text-[#c8d627] text-5xl font-extrabold leading-tight [font-family:'DM_Sans',sans-serif]">
          Bring Your Book Idea To Life
        </h2>

        {/* Body */}
        <p className="text-white/80 text-lg leading-[1.9] tracking-[0.07em] w-full [font-family:'DM_Mono',monospace]">
          Every great book starts with an idea—let us help you turn yours into a
          polished, published work. Our book publishing services guide you
          through every step, from manuscript editing and professional
          formatting to cover design and distribution.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
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
    </section>
  );
}
