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
      <div className="hidden min-[720px]:block bg-[#f0eedd] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 min-[720px]:grid-cols-2 gap-8 min-[720px]:gap-12 items-center my-10`}
            >
              {sec.imgFirst ? (
                <>
                  {/* Image (first) */}
                  <div className="w-full flex justify-center">
                    <div className="rounded-2xl overflow-hidden shadow-lg max-w-[550px] w-full">
                      <img src={sec.imgSrc} alt="" className="w-full h-auto object-cover" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="min-w-0">
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
                </>
              ) : (
                <>
                  {/* Text content (first) */}
                  <div className="min-w-0">
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

                  {/* Image (second) */}
                  <div className="w-full flex justify-center">
                    <div className="rounded-2xl overflow-hidden shadow-lg max-w-[550px] w-full">
                      <img src={sec.imgSrc} alt="" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                </>
              )}
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
                <div className="space-y-4 text-sm sm:text-base text-[#333333] leading-relaxed mt-6">
                  {Array.isArray(sec.paragraphs) ? (
                    sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <div>{sec.paragraphs}</div>
                  )}
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