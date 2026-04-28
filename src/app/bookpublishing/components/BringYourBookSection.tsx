import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";

export default function BringYourBookSection() {
  return (
    <section className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden">
      <img
        src="/landing-page/image.png"
        alt="Books background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/92" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col items-center gap-5 px-5 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="text-[32px] font-extrabold leading-tight text-[#c8d627] sm:text-[40px] md:text-[46px] lg:text-5xl [font-family:'DM_Sans',sans-serif]">
          Bring Your Book Idea To Life
        </h2>

        <p className="w-full max-w-[920px] text-sm leading-[1.8] tracking-[0.05em] text-white/80 sm:text-base md:text-lg lg:leading-[1.9] lg:tracking-[0.07em] [font-family:'DM_Mono',monospace]">
          Every great book starts with an idea - let us help you turn yours into
          a polished, published work. Our book publishing services guide you
          through every step, from manuscript editing and professional
          formatting to cover design and distribution.
        </p>

        <div className="mt-2 flex w-full max-w-[430px] flex-col items-stretch justify-center gap-3 min-[430px]:flex-row sm:max-w-none sm:flex-wrap sm:items-center">
          <Link
            href="#quote-popup"
            className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
          >
            <span className="slide-bg"></span>
            <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
              Request a Quote
            </span>
          </Link>

          <Link
            href="tel:+17864961231"
            className="btn-slide-bg flex h-10 items-center justify-center gap-x-2 rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
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
