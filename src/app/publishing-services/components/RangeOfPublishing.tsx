import { robotoMono } from "@/app/fonts";
import Image from "next/image";

export default function RangeOfPublishing() {
  return (
    <section className="w-full border-y border-black/[0.06] bg-[#F6F5F3] px-4 py-14 sm:px-6 sm:py-10 md:px-8 lg:px-6">
      <div className="mx-auto grid min-h-[500px] w-full max-w-7xl items-center gap-12 lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] lg:gap-16 xl:gap-24">
        {/* Content */}
        <div className="max-w-3xl text-center lg:pl-8 lg:text-left xl:pl-12">
          <div className="mx-auto mb-7 h-px w-14 bg-[#c8d400] lg:mx-0" />
          <h2 className="max-w-[1620px] text-[clamp(1.8rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#171717]">
            A Range of Publishing Services
          </h2>
          <div
            className={`mx-auto mt-8 max-w-xl border-l border-[#c8d400] pl-5 text-left text-[13px] leading-[1.7] text-[#555] sm:pl-6 sm:text-[14px] md:text-[15px] lg:mx-0 lg:leading-[1.75] ${robotoMono.className}`}
          >
            <p>
              At Ink Founders, we offer professional book publishing services covering editing, design, and marketing support to get your book ready for publication. At every step, we prioritize preserving your unique voice and creative vision.
            </p>
          </div>
        </div>

        {/* Book Cover */}
        <div className="flex items-center justify-center lg:justify-end lg:pr-4">
          <Image
            src="/Service/image 99.webp"
            alt="The Buried Truth book cover"
            width={330}
            height={469}
            sizes="(max-width: 639px) 68vw, (max-width: 1023px) 330px, 330px"
            className="h-auto w-[min(68vw,330px)] drop-shadow-[0_24px_20px_rgba(0,0,0,0.16)] transition-transform duration-500 hover:-translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}
