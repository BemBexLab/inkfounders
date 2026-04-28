"use client";

import Link from "next/link";
import DiscountForm  from "./DiscountForum";

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

      <div className="font-dm-sans relative flex min-h-0 items-center justify-center overflow-hidden rounded-bl-[64px] bg-[#F4F3E1] px-5 py-10 sm:px-8 sm:py-12 md:rounded-bl-[90px] xl:min-h-[640px] xl:overflow-visible xl:rounded-bl-[110px] xl:px-[100px]">
        {/* Eclipse glow behind form */}
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px] xl:bottom-auto xl:left-auto xl:right-[5%] xl:top-1/2 xl:h-[560px] xl:w-[560px] xl:translate-x-0 xl:-translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(210,220,130,0.45) 0%, rgba(210,220,130,0.12) 55%, transparent 75%)",
          }}
        />

        {/* Two-column layout */}
        <div className="relative z-10 grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 md:gap-12 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-14">
          {/* ── Left: Hero Content ── */}
          <div className="min-w-0 text-center xl:text-left">
            <h1 className="font-dm-sans mx-auto mb-5 max-w-[720px] text-[clamp(2rem,6.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight text-[#1a1a00] min-[430px]:text-[clamp(2.25rem,6vw,3.5rem)] xl:mx-0 xl:max-w-none xl:text-5xl xl:leading-[1.18]">
              <span className="xl:hidden">
                Complete Publishing Services With A Professional Approach And A
                Reasonable Package
              </span>
              <span className="hidden xl:inline">
                Complete Publishing
                <br />
                Services With A<br />
                Professional Approach And
                <br />A Reasonable Package
              </span>
            </h1>

            <p className="font-dm-mono mx-auto mb-5 max-w-[680px] text-[13px] leading-[1.55] text-[#6b6b50] sm:text-base md:text-lg xl:mx-0 xl:leading-[1.75]">
              Reach your readers on Amazon KDP, Barnes &amp; Noble, Kobo,
              Ingrandpark, and many more today. Get expert editing and
              formatting in one reasonable package at Ink Founders.
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:justify-center xl:mb-9 xl:justify-start">
              <Link
                href="#quote-popup"
                className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm xl:h-[45px] xl:min-w-[182px] xl:px-6 xl:text-[15px]"
              >
                <span className="slide-bg"></span>
                <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                  Request a Quote
                </span>
              </Link>

              <Link
                href="/contactus"
                className="btn-slide-bg flex h-10 items-center justify-center rounded-[8px] border border-[#DADD39] bg-[#DADD39] px-3 text-xs font-medium text-black transition-all duration-300 hover:border-black sm:h-11 sm:px-4 sm:text-sm xl:h-[45px] xl:min-w-[182px] xl:px-6 xl:text-[15px]"
              >
                <span className="slide-bg"></span>
                <span className="relative z-10 whitespace-nowrap font-normal tracking-[0.08em]">
                  Get Free Consultation
                </span>
              </Link>
            </div>

            {/* Trustpilot */}
            <Link href="https://www.trustpilot.com/review/inkfounders.com">
            <img
              src="/landing-page/rtaImage 1.png"
              alt="Trustpilot badge"
              className="mx-auto h-auto w-[138px] sm:w-[189px] xl:mx-0"
            /></Link>
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
