"use client";
import { IoIosArrowDown } from "react-icons/io";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import * as FlagIcons from "country-flag-icons/react/3x2";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { GoArrowDown, GoArrowUpRight } from "react-icons/go";
import { FiSearch, FiX } from "react-icons/fi";

type FormStatus = "idle" | "submitting" | "success" | "error";

type SubmitApiResponse = {
  success?: boolean;
  error?: string;
};

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  reduceMotion: boolean | null;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.09,
    },
  },
};

const riseVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

export async function submitApplication(formData: FormData) {
  const fullName = String(formData.get("fullName") || "").trim();
  const [firstName = "", ...lastNameParts] = fullName.split(/\s+/);
  const lastName = lastNameParts.join(" ") || "Not provided";
  const budget = String(formData.get("budget") || "").trim();
  const timeline = String(formData.get("timeline") || "").trim();
  const genre = String(formData.get("genre") || "").trim();
  const countryCode = String(formData.get("countryCode") || "").trim();
  const phone = String(formData.get("phone") || "").trim();

  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email: String(formData.get("email") || "").trim(),
      phone: [countryCode, phone].filter(Boolean).join(" "),
      message: [
        "Book publishing consultation request",
        `Budget: ${budget || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        `Book genre: ${genre || "Not provided"}`,
      ].join("\n"),
    }),
  });

  const result = (await response.json().catch(() => ({}))) as SubmitApiResponse;

  if (!response.ok) {
    throw new Error(result.error || "Something went wrong. Please try again.");
  }
}

type CountryOption = {
  code: string;
  dialCode: string;
  label: string;
};

const countryNameFormatter = new Intl.DisplayNames(["en"], { type: "region" });

const getFlagIcon = (code: string) => {
  const flagIcon = FlagIcons[code.replace("-", "_") as keyof typeof FlagIcons];

  return typeof flagIcon === "function" ? flagIcon : undefined;
};

const proposalCountryOptions: CountryOption[] = getCountries()
  .map((code) => {
    const dialCode = `+${getCountryCallingCode(code)}`;
    const name = countryNameFormatter.of(code) ?? code;

    return {
      code,
      dialCode,
      label: `${name} ${dialCode}`,
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

const defaultProposalCountry =
  proposalCountryOptions.find((country) => country.code === "US") ??
  proposalCountryOptions[0];

function CountryFlag({ countryCode }: { countryCode: string }) {
  const Flag = getFlagIcon(countryCode);

  if (!Flag) {
    return (
      <span
        className="h-[16px] w-[24px] rounded-[2px] bg-[#e5e5e5] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
        aria-hidden="true"
      />
    );
  }

  return (
    <Flag
      className="h-[16px] w-[24px] rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
      aria-hidden="true"
    />
  );
}

function ProposalForm({ onSuccess }: { onSuccess: () => void }) {
  const [submitStatus, setSubmitStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    defaultProposalCountry,
  );
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const filteredCountryOptions = proposalCountryOptions.filter((country) => {
    const query = countrySearch.trim().toLowerCase();

    return (
      country.label.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query)
    );
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("submitting");
    setStatusMessage("");

    try {
      await submitApplication(new FormData(event.currentTarget));
      setSubmitStatus("success");
      setStatusMessage("Thanks. Your request has been sent.");
      event.currentTarget.reset();
      setSelectedCountry(defaultProposalCountry);
      setIsCountryMenuOpen(false);
      setCountrySearch("");
      onSuccess();
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const proposalInputClass =
    "h-12 w-full rounded-[10px] border border-[#e6e7df] bg-white px-3 text-[14px] text-[#222] shadow-[0_5px_16px_rgba(27,31,5,0.04)] outline-none transition placeholder:text-[#aaa] hover:border-[#cfd58d] focus:border-[#c8d400] focus:bg-white focus:ring-4 focus:ring-[#d9e35a]/20 sm:h-[52px] sm:px-4 lg:h-[44px] lg:px-3";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[400px]">
      <div className="space-y-3 sm:space-y-4 lg:space-y-2.5">
        <label className="block">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#66685e]">
            Full name <span className="text-[#d95270]">*</span>
          </span>
          <input
            name="fullName"
            type="text"
            required
            placeholder="Full Name"
            className={proposalInputClass}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#66685e]">
            Email address <span className="text-[#d95270]">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className={proposalInputClass}
          />
        </label>

        <div className="block">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#66685e]">
            Phone number
          </span>
            <div className="flex h-12 w-full items-center rounded-[10px] border border-[#e6e7df] bg-white shadow-[0_5px_16px_rgba(27,31,5,0.04)] transition focus-within:border-[#c8d400] focus-within:ring-4 focus-within:ring-[#d9e35a]/20 sm:h-[52px] lg:h-[44px]">
            <div
              className="relative flex h-full shrink-0 items-center border-r border-[#e6e7df]"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsCountryMenuOpen(false);
                  setCountrySearch("");
                }
              }}
            >
              <span className="sr-only">Country</span>
              <input
                type="hidden"
                name="countryCode"
                value={selectedCountry.dialCode}
              />
              <button
                type="button"
                aria-label="Country code"
                aria-expanded={isCountryMenuOpen}
                aria-haspopup="listbox"
                onClick={() => setIsCountryMenuOpen((open) => !open)}
                className="flex h-full items-center gap-2 whitespace-nowrap rounded-l-[10px] px-3 text-sm text-[#55584f] outline-none transition hover:bg-[#f7f8ed] focus:bg-[#f7f8ed]"
              >
                <CountryFlag countryCode={selectedCountry.code} />
                <span>{selectedCountry.dialCode}</span>
                <span aria-hidden="true" className="text-xs text-[#999]">
                  <IoIosArrowDown />
                </span>
              </button>

              {isCountryMenuOpen && (
                <div
                  role="listbox"
                  aria-label="Countries"
                  className="absolute left-0 top-[calc(100%+8px)] z-50 flex max-h-[min(260px,45dvh)] w-[min(300px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[10px] border border-[#e1e3d7] bg-white shadow-[0_18px_38px_rgba(0,0,0,0.18)]"
                >
                  <div className="shrink-0 border-b border-[#ecece6] bg-[#fbfcf7] p-2">
                    <div className="flex h-9 items-center gap-2 rounded-[7px] border border-[#e2e5d7] bg-white px-2.5 transition focus-within:border-[#c8d400] focus-within:ring-3 focus-within:ring-[#d9e35a]/25">
                      <FiSearch
                        aria-hidden="true"
                        className="shrink-0 text-[15px] text-[#8b907e]"
                      />
                      <input
                        type="search"
                        aria-label="Search countries"
                        autoFocus
                        value={countrySearch}
                        onChange={(event) =>
                          setCountrySearch(event.target.value)
                        }
                        className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[13px] text-[#222] outline-none placeholder:text-[#9b9f92]"
                        placeholder="Search by country or code"
                      />
                      {countrySearch && (
                        <button
                          type="button"
                          aria-label="Clear country search"
                          onClick={() => setCountrySearch("")}
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#8b907e] transition hover:bg-[#eef2d8] hover:text-[#4b5041]"
                        >
                          <FiX aria-hidden="true" className="text-[14px]" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="overflow-y-auto overscroll-contain py-1">
                    {filteredCountryOptions.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        role="option"
                        aria-selected={selectedCountry.code === country.code}
                        onClick={() => {
                          setSelectedCountry(country);
                          setCountrySearch("");
                          setIsCountryMenuOpen(false);
                        }}
                        className="flex w-full items-center gap-2 whitespace-nowrap px-3 py-[9px] text-left text-[13px] text-[#62655d] transition hover:bg-[#f6f8e9] aria-selected:bg-[#eff3ce] aria-selected:text-black"
                      >
                        <CountryFlag countryCode={country.code} />
                        <span className="min-w-0 flex-1 truncate">
                          {country.label}
                        </span>
                      </button>
                    ))}
                    {filteredCountryOptions.length === 0 && (
                      <p className="px-3 py-3 text-[13px] text-[#777]">
                        No countries found
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <input
              name="phone"
              type="tel"
              placeholder="201-555-0123"
              className="h-full min-w-0 flex-1 rounded-r-[10px] border-0 bg-transparent px-3 text-[15px] text-[#222] outline-none placeholder:text-[#aaa]"
            />
          </div>
        </div>
      </div>

      <label className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-[#70736a] sm:mt-5 sm:text-[12px] lg:mt-3">
        <input
          type="checkbox"
          name="smsConsent"
          required
          className="mt-[3px] h-4 w-4 shrink-0 accent-[#c8d900]"
        />
        <span>
          I consent to the{" "}
          <a
            href="#sms-agreement"
            className="font-semibold text-[#4f5543] underline underline-offset-2"
          >
            text messages agreement
          </a>
        </span>
      </label>

      <button
        type="submit"
        disabled={submitStatus === "submitting"}
        className="poppins mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#c8d400] to-[#eff66a] text-[12px] font-semibold uppercase tracking-[0.08em] text-black shadow-[0_10px_22px_rgba(190,204,0,0.22)] transition hover:-translate-y-0.5 hover:brightness-[0.98] disabled:cursor-wait disabled:opacity-70 sm:mt-5 sm:h-[54px] sm:text-[14px] lg:mt-3 lg:h-[46px]"
      >
        {submitStatus === "submitting" ? "Sending..." : "Get a Unique Offer"}
        <GoArrowUpRight size={22} />
      </button>

      {statusMessage && (
        <p
          className={`mt-3 text-center text-xs font-semibold ${
            submitStatus === "success" ? "text-[#149044]" : "text-red-600"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}

export default function Popup({ isOpen, onClose, reduceMotion }: PopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex min-h-dvh items-start justify-center overflow-x-hidden overflow-y-auto bg-[#10120d]/75 p-2 backdrop-blur-[3px] sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="custom-scrollbar-viewport relative my-2 flex max-h-[calc(100dvh-1rem)] w-full max-w-[1080px] flex-col overflow-y-auto overflow-x-hidden rounded-[20px] border border-white/80 border-t-[3px] border-t-[#c8d400] bg-[#fafbf7] shadow-[0_28px_90px_rgba(0,0,0,0.3)] sm:my-4 sm:max-h-[calc(100dvh-2rem)] sm:rounded-[24px]"
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            variants={containerVariants}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-popup-title"
          >
            <button
              type="button"
              aria-label="Close application popup"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e3e5d9] bg-white/90 text-[24px] font-light leading-none text-[#44463e] shadow-sm transition hover:border-[#c8d400] hover:bg-[#f3f6d8] hover:text-black sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:text-[28px]"
            >
              &times;
            </button>

            {/* <motion.p
              className="shrink-0 pt-5 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-[#879000] sm:pt-6 sm:text-[11px]"
              variants={riseVariants}
            >
              Free publishing consultation
            </motion.p> */}

            <motion.h2
              id="application-popup-title"
              className="plus-jakarta mx-auto max-w-4/5 shrink-0 px-10 pt-5 text-center text-4xl font-medium uppercase leading-[1.04] tracking-[-0.045em] text-[#151613] sm:px-12 sm:pt-7 [word-spacing:8px]"
              variants={riseVariants}
            >
              Get a personalized publishing proposal from our publishing
              experts.
            </motion.h2>

            <div className="grid min-w-0 grid-cols-1 items-center gap-5 px-3 py-4 sm:gap-7 sm:px-8 sm:py-6 lg:items-stretch lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-16 lg:py-6">
              <motion.div
                className="flex h-[clamp(210px,55vw,360px)] min-h-0 w-full items-center justify-center lg:h-full lg:min-h-[560px]"
                variants={riseVariants}
              >
                <div className="relative h-full min-h-0 w-full">
                  <Image
                    src="/landing-page/A.D Bradley 2 1.png"
                    alt="A.D Bradley Book"
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-contain object-center"
                  />
                </div>
              </motion.div>

              <motion.div
                className="relative z-20 h-full min-w-0 rounded-[18px] border border-[#e5e7dd] bg-white p-4 shadow-[0_12px_30px_rgba(32,38,10,0.06)] sm:p-6 lg:p-7"
                variants={riseVariants}
              >
                {/* <div className="mb-6 lg:mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#879000]">
                    Let&apos;s get started
                  </p>
                  <h3 className="plus-jakarta mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#191b16] sm:text-[28px] lg:text-[24px]">
                    Tell us about your book
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777a70] lg:text-[13px] lg:leading-5">
                    Share a few details and we&apos;ll prepare your next best
                    publishing step.
                  </p>
                </div> */}
                <ProposalForm
                  onSuccess={() => {
                    window.setTimeout(() => {
                      onClose();
                    }, 1200);
                  }}
                />

                <motion.section
                  className="mt-7 border-t border-[#e5e8d7] pt-6 lg:mt-4 lg:pt-4"
                  variants={riseVariants}
                  aria-labelledby="distribution-channels-title"
                >
                  <h3
                    id="distribution-channels-title"
                    className="text-center text-[clamp(0.9rem,1.8vw,1.15rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-[#20221b]"
                  >
                    Get on 100+ distribution channels
                  </h3>

                  <div className="mx-auto mt-3 flex w-full flex-wrap justify-center gap-2 sm:mt-4 sm:gap-3 lg:mt-2">
                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 1.png"
                      alt="Amazon Logo"
                      className="h-16 w-[calc(50%-4px)] rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-[72px] sm:w-[calc(33.333%-8px)] lg:h-[80px]"
                    />

                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 3.png"
                      alt="Adlibris Logo"
                      className="h-16 w-[calc(50%-4px)] rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-[72px] sm:w-[calc(33.333%-8px)] lg:h-[80px]"
                    />

                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 2.png"
                      alt="Barnes and Noble Logo"
                      className="h-16 w-[calc(50%-4px)] rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-[72px] sm:w-[calc(33.333%-8px)] lg:h-[80px]"
                    />

                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/google5.webp"
                      alt="Google Play Books Logo"
                      className="h-16 w-[calc(50%-4px)] rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-[72px] sm:w-[calc(33.333%-8px)] lg:h-[80px]"
                    />

                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 4.webp"
                      alt="Apple Books Logo"
                      className="h-16 w-[calc(50%-4px)] rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-[72px] sm:w-[calc(33.333%-8px)] lg:h-[80px]"
                    />
                  </div>
                </motion.section>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
