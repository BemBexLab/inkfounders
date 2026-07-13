"use client";

import { robotoMono } from "@/app/fonts";
import CustomScrollbar from "@/components/CustomScrollbar";
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
              className={`flex items-start justify-center gap-12 my-10 ${
                sec.imgFirst ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text content */}
              <div className="w-full max-w-[560px]">
                <h1 className="text-[28px] font-semibold text-[#1a1a1a] mb-3 leading-tight">
                  {sec.title}
                </h1>
                <CustomScrollbar
                  className={`max-h-[360px] text-[15px] text-[#333333] leading-[1.6] ${robotoMono.className}`}
                  style={{ marginRight: 0, paddingRight: "0.875rem" }}
                >
                  <div className="space-y-3">
                    {Array.isArray(sec.paragraphs) ? (
                      sec.paragraphs.map((p, i) =>
                        typeof p === "string" ? (
                          <p
                            key={i}
                            className="[&_a]:inline [&_a]:break-words [&_a]:align-baseline [&_a]:whitespace-nowrap"
                          >
                            {p}
                          </p>
                        ) : (
                          <div
                            key={i}
                            className="[&_a]:inline [&_a]:break-words [&_a]:align-baseline [&_a]:whitespace-nowrap"
                          >
                            {p}
                          </div>
                        ),
                      )
                    ) : (
                      <div className="[&_a]:inline [&_a]:break-words [&_a]:align-baseline [&_a]:whitespace-nowrap">
                        {sec.paragraphs}
                      </div>
                    )}
                  </div>
                </CustomScrollbar>
              </div>

              {/* Image */}
              <div className="w-[570px] shrink-0">
                  <img src={sec.imgSrc} alt="" className="w-[570px] h-auto" />
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
                  sec.paragraphs.map((p, i) =>
                    typeof p === "string" ? (
                      <p key={i}>{p}</p>
                    ) : (
                      <div
                        key={i}
                        className="[&_a]:break-words"
                      >
                        {p}
                      </div>
                    ),
                  )
                ) : (
                  <div className="[&_a]:break-words">
                    {sec.paragraphs}
                  </div>
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
