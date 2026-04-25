import { robotoMono } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MdLocalPhone } from "react-icons/md";

const sectionStyle = {
  "--story-image-height": "633px",
  "--story-image-overflow": "49px",
  marginTop: "var(--story-image-overflow)",
  minHeight: "calc(var(--story-image-height) - var(--story-image-overflow))",
  overflow: "visible",
  position: "relative",
} as CSSProperties;

const PublishYourStory = () => {
  return (
    <section
      id="publish-your-story"
      className="relative flex w-full justify-center gap-x-20 overflow-visible bg-[#DADD39] text-black"
      style={sectionStyle}
    >
      <div
        className="relative flex w-full max-w-[850px] items-center"
        style={{
          maxWidth: 850,
          minHeight:
            "calc(var(--story-image-height) - var(--story-image-overflow))",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Text and button div */}
        <div
          className="absolute z-10 flex flex-col justify-center py-6"
          style={{ width: 710, position: "absolute", left: -140 }}
        >
          <h2 className="max-w-[570px] text-5xl font-extrabold leading-[1.15] tracking-normal">
            Publish Your Story With Confidence
          </h2>

          <p
            className={`mt-3 max-w-[405px] text-lg tracking-[0.07em] ${robotoMono.className}`}
            style={{
              lineHeight: 1.5,
            }}
          >
            Your story deserves to be heard-let us help you share it with the
            world. Our book publishing services provide everything you need to
            transform your manuscript into a professionally published work,
            ready to reach readers.
          </p>

          <div className="mt-[24px] flex items-center gap-3 py-2" style={{position: "absolute", bottom: -50}}>
            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-black px-3 text-xs font-medium text-white hover:text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                Request a Quote
              </span>
            </Link>

            <Link
              href="/contactus"
              className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-black px-3 text-xs font-medium text-white hover:text-black transition-all gap-x-2 duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
            >
              <span className="slide-bg"></span>
              <MdLocalPhone className="relative z-10 text-xl sm:text-[23px] lg:text-[19px]" />
              <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                +1 (786) 496-1231
              </span>
            </Link>
          </div>
        </div>

        <Image
          src="/landing-page/image 52.png"
          width={623}
          height={959}
          className="absolute bottom-0 z-20 w-auto object-contain"
          style={{
            bottom: 0,
            height: "var(--story-image-height)",
            left: 450,
            position: "absolute",
            width: "auto",
          }}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default PublishYourStory;
