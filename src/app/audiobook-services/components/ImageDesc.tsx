import { robotoMono } from "@/app/fonts";
import React from "react";

interface Section {
  title: string;
  paragraphs: string[] | React.ReactNode;
  imgSrc: string;
  imgFirst: boolean;
}

interface ImageDescProps {
  /**
   * Sections to render. component will render nothing if this prop is
   * missing or empty — there is no built-in default content anymore.
   */
  data?: Section[];
}

const ImageDesc = ({ data }: ImageDescProps) => {
  // simply use whatever was passed in; render nothing if there's no data
  const sections: Section[] = data || [];

  if (!sections.length) {
    return null;
  }

  return (
    <section>
      {/* DESKTOP VERSION */}
      <div className="hidden bg-[#f0eedd] px-8 py-16 lg:block">
        <div className="max-w-[1400px] mx-auto">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center gap-16 my-10 ${
                sec.imgFirst ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text content */}
              <div className="flex-1 max-w-[520px]">
                <h1 className="text-[28px] font-semibold text-[#1a1a1a] mb-3 leading-tight">
                  {sec.title}
                </h1>
                <div className={`${robotoMono.className} space-y-3 text-[15px] text-[#333333] leading-relaxed`}>
                  {Array.isArray(sec.paragraphs) ? (
                    sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <div>{sec.paragraphs}</div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="">
                  <img src={sec.imgSrc} alt="" className="w-[550px] h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE VERSION: h -> Image -> p */}
      <div className="block bg-[#f0eedd] px-4 py-10 sm:px-6 md:px-8 lg:hidden">
        <div className="mx-auto max-w-3xl">
          {sections.map((sec, idx) => (
            <div key={idx} className="mb-12 last:mb-0 sm:mb-14">
              <h1 className="mb-5 text-center text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-3xl">
                {sec.title}
              </h1>

              <div className="mx-auto mb-6 w-full max-w-[620px] overflow-hidden rounded-lg">
                <img
                  src={sec.imgSrc}
                  alt=""
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className={`${robotoMono.className} mx-auto max-w-2xl space-y-4 text-center text-sm text-[#333333] sm:text-base`}>
                {Array.isArray(sec.paragraphs) ? (
                  sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <div>{sec.paragraphs}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageDesc;
