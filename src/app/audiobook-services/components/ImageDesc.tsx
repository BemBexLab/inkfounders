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
      {/* DESKTOP VERSION (above 720px) */}
      <div className="hidden min-[720px]:block bg-[#f0eedd] min-h-screen py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center gap-16 mb-24 ${
                sec.imgFirst ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text content */}
              <div className="flex-1 max-w-[520px]">
                <h1 className="text-[28px] font-semibold text-[#1a1a1a] mb-6 leading-tight">
                  {sec.title}
                </h1>
                <div className={`${robotoMono.className} space-y-5 text-[15px] text-[#333333] leading-relaxed`}>
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

      {/* MOBILE VERSION (720px and below) - Text on Top, Image Below */}
      <div className="block min-[720px]:hidden bg-[#f0eedd] min-h-screen py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {sections.map((sec, idx) => (
            <div key={idx} className="mb-16">
              {/* Text content - Always on Top */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4 leading-tight">
                  {sec.title}
                </h1>
                <div className="space-y-4 text-sm sm:text-base text-[#333333] leading-relaxed">
                  {Array.isArray(sec.paragraphs) ? (
                    sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <div>{sec.paragraphs}</div>
                  )}
                </div>
              </div>

              {/* Image - Always Below Text */}
              <div className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={sec.imgSrc} 
                    alt="" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageDesc;