"use client";

import Link from "next/link";
import { useState } from "react";
import DiscountForm  from "./DiscountForum";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Custom CSS only for things Tailwind can't handle: fonts, pseudo-elements, focus rings, hover transforms
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&display=swap');

  .font-dm-sans { font-family: 'DM Sans', sans-serif; }
  .font-dm-mono { font-family: 'DM Mono', monospace; }

  .form-input::placeholder,
  .form-textarea::placeholder { color: #8a8a72; }

  .form-input:focus,
  .form-textarea:focus {
    background: #d0d0c0;
    box-shadow: 0 0 0 2px rgba(200, 214, 39, 0.5);
    outline: none;
  }

  .btn-submit:hover { background: #b8c620; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(180,200,20,0.4); }
  .btn-submit:active { transform: translateY(0); }

  .btn-quote:hover { background: #b8c620; transform: translateY(-1px); }
  .btn-consult:hover { background: rgba(44,44,0,0.06); transform: translateY(-1px); }
`;

// ── Trustpilot Star ────────────────────────────────────────────────────────
function TpStar() {
  return (
    <div className="w-[26px] h-[26px] bg-[#00b67a] rounded-[3px] flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <>
      <style>{customStyles}</style>

      <div className="font-dm-sans relative flex min-h-0 items-center justify-center overflow-hidden rounded-bl-[64px] bg-[#F4F3E1] px-5 py-10 sm:px-8 sm:py-12 md:rounded-bl-[90px] lg:min-h-[640px] lg:overflow-visible lg:rounded-bl-[110px] lg:px-[100px]">
        {/* Eclipse glow behind form */}
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px] lg:bottom-auto lg:left-auto lg:right-[5%] lg:top-1/2 lg:h-[560px] lg:w-[560px] lg:translate-x-0 lg:-translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(210,220,130,0.45) 0%, rgba(210,220,130,0.12) 55%, transparent 75%)",
          }}
        />

        {/* Two-column layout */}
        <div className="relative z-10 grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          {/* ── Left: Hero Content ── */}
          <div className="min-w-0 text-center lg:text-left">
            <h1 className="font-dm-sans mx-auto mb-5 max-w-[340px] text-[28px] font-extrabold leading-[1.18] tracking-tight text-[#1a1a00] min-[430px]:max-w-[390px] min-[430px]:text-[32px] sm:max-w-[560px] sm:text-[40px] md:text-5xl lg:mx-0 lg:max-w-none">
              Complete Publishing
              <br />
              Services With A<br />
              Professional Approach And
              <br />A Reasonable Package
            </h1>

            <p className="font-dm-mono mx-auto mb-5 max-w-[340px] text-[13px] leading-[1.55] text-[#6b6b50] min-[430px]:max-w-[390px] sm:max-w-[680px] sm:text-base md:text-lg lg:mx-0 lg:leading-[1.75]">
              Reach your readers on Amazon KDP, Barnes &amp; Noble, Kobo,
              Ingrandpark, and many more today. Get expert editing and
              formatting in one reasonable package at Ink Founders.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:justify-center lg:mb-9 lg:justify-start">
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
                className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm lg:h-[45px] lg:min-w-[182px] lg:px-6 lg:text-[15px]"
              >
                <span className="slide-bg"></span>
                <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                  Get Free Consultation
                </span>
              </Link>
            </div>

            {/* Trustpilot */}
            <img
              src="/landing-page/rtaImage 1.png"
              alt="Trustpilot badge"
              className="mx-auto h-auto w-[138px] sm:w-[189px] lg:mx-0"
            />
          </div>

          {/* ── Right: Discount Form ── */}
          <div className="relative z-10 flex min-w-0 justify-center overflow-visible">
            <DiscountForm />
          </div>
        </div>
      </div>
    </>
  );
}
