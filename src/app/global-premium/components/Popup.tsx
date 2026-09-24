"use client";

import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import * as FlagIcons from "country-flag-icons/react/3x2";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { GoArrowUpRight } from "react-icons/go";
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
        className="h-3 w-4 rounded-[2px] bg-[#e5e5e5] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] sm:h-4 sm:w-6"
        aria-hidden="true"
      />
    );
  }

  return (
    <Flag
      className="h-3 w-4 rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] sm:h-4 sm:w-6"
      aria-hidden="true"
    />
  );
}

function ProposalForm({ onSuccess }: { onSuccess: () => void }) {
  const [submitStatus, setSubmitStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(defaultProposalCountry);
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
    const form = event.currentTarget;

    try {
      await submitApplication(new FormData(form));
      setSubmitStatus("success");
      setStatusMessage("Thanks. Your request has been sent.");
      form.reset();
      setSelectedCountry(defaultProposalCountry);
      setIsCountryMenuOpen(false);
      setCountrySearch("");
      onSuccess();
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const proposalInputClass =
    "h-12 w-full rounded-[10px] border border-[#e6e7df] bg-white px-3 text-[14px] text-[#222] shadow-[0_5px_16px_rgba(27,31,5,0.04)] outline-none transition placeholder:text-[#aaa] hover:border-[#cfd58d] focus:border-[#c8d400] focus:bg-white focus:ring-4 focus:ring-[#d9e35a]/20 sm:h-[52px] sm:px-4";

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-[400px]">
      <div className="space-y-3 sm:space-y-4 lg:space-y-3">
        <label className="block">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#66685e] sm:mb-2">
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
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#66685e] sm:mb-2">
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
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#66685e] sm:mb-2">
            Phone number
          </span>
          <div className="flex h-12 w-full items-center rounded-[10px] border border-[#e6e7df] bg-white shadow-[0_5px_16px_rgba(27,31,5,0.04)] transition focus-within:border-[#c8d400] focus-within:ring-4 focus-within:ring-[#d9e35a]/20 sm:h-[52px]">
            <div
              className="relative flex h-full shrink-0 items-center border-r border-[#e6e7df]"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
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
                className="flex h-full items-center gap-1 whitespace-nowrap rounded-l-[10px] px-2 text-xs text-[#55584f] outline-none transition hover:bg-[#f7f8ed] focus:bg-[#f7f8ed] sm:gap-2 sm:px-3 sm:text-sm"
              >
                <CountryFlag countryCode={selectedCountry.code} />
                <span>{selectedCountry.dialCode}</span>
                <span aria-hidden="true" className="text-[10px] text-[#999] sm:text-xs">
                  <IoIosArrowDown />
                </span>
              </button>

              {isCountryMenuOpen && (
                <div
                  role="listbox"
                  aria-label="Countries"
                  className="absolute left-0 top-[calc(100%+8px)] z-50 flex max-h-[min(280px,45dvh)] w-[min(280px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[10px] border border-[#e1e3d7] bg-white shadow-[0_18px_38px_rgba(0,0,0,0.18)]"
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
                        onChange={(event) => setCountrySearch(event.target.value)}
                        className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[13px] text-[#222] outline-none placeholder:text-[#9b9f92]"
                        placeholder="Search country or code"
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
              className="h-full min-w-0 flex-1 rounded-r-[10px] border-0 bg-transparent px-3 text-[14px] text-[#222] outline-none placeholder:text-[#aaa] sm:px-4 sm:text-[15px]"
            />
          </div>
        </div>
      </div>

      <label className="mt-4 flex items-center gap-2 text-[11px] leading-5 text-[#70736a] sm:mt-5 sm:text-[12px]">
        <input
          type="checkbox"
          name="smsConsent"
          required
          className="h-4 w-4 shrink-0 accent-[#c8d900] sm:h-5 sm:w-5"
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
        className="poppins mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#c8d400] to-[#eff66a] text-[13px] font-semibold uppercase tracking-[0.08em] text-black shadow-[0_10px_22px_rgba(190,204,0,0.22)] transition hover:-translate-y-0.5 hover:brightness-[0.98] disabled:cursor-wait disabled:opacity-70 sm:mt-5 sm:h-[54px] sm:text-[14px]"
      >
        {submitStatus === "submitting" ? "Sending..." : "Get a Unique Offer"}
        <GoArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {statusMessage && (
        <p
          className={`mt-3 text-center text-xs font-semibold sm:text-sm ${
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
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex min-h-dvh items-start justify-center overflow-x-hidden overflow-y-auto bg-[#10120d]/75 p-3 backdrop-blur-[3px] sm:items-center sm:p-4"
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
            className="custom-scrollbar-viewport relative my-4 flex max-h-[calc(100dvh-2rem)] w-full max-w-[1080px] flex-col overflow-y-auto overflow-x-hidden rounded-[16px] border border-white/80 border-t-[3px] border-t-[#c8d400] bg-[#fafbf7] shadow-[0_28px_90px_rgba(0,0,0,0.3)] sm:rounded-[24px]"
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

            <motion.h2
              id="application-popup-title"
              className="plus-jakarta mx-auto max-w-[90%] shrink-0 px-4 pt-4 text-center text-2xl font-medium uppercase leading-[1.1] tracking-[-0.02em] text-[#151613] sm:max-w-[85%] sm:px-8 sm:pt-6 sm:text-3xl md:text-4xl md:leading-[1.04] md:tracking-[-0.045em] [word-spacing:4px] sm:[word-spacing:8px]"
              variants={riseVariants}
            >
              Get a personalized publishing proposal from our publishing experts.
            </motion.h2>

            <div className="grid min-w-0 grid-cols-1 items-center gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-8 lg:items-stretch lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-12 lg:py-8">
              <motion.div
                className="flex h-[250px] min-h-0 w-full items-center justify-center sm:h-[350px] lg:h-full lg:min-h-[500px]"
                variants={riseVariants}
              >
                <div className="relative h-full w-full max-w-[400px]">
                  <Image
                    src="/landing-page/A.D Bradley 2 1.png"
                    alt="A.D Bradley Book"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 400px"
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                className="relative z-20 h-full min-w-0 rounded-[16px] border border-[#e5e7dd] bg-white p-5 shadow-[0_12px_30px_rgba(32,38,10,0.06)] sm:rounded-[18px] sm:p-6 lg:p-7"
                variants={riseVariants}
              >
                <ProposalForm
                  onSuccess={() => {
                    window.setTimeout(() => {
                      onClose();
                    }, 1200);
                  }}
                />

                <motion.section
                  className="mt-6 border-t border-[#e5e8d7] pt-5 sm:mt-8 sm:pt-6 lg:mt-6 lg:pt-5"
                  variants={riseVariants}
                  aria-labelledby="distribution-channels-title"
                >
                  <h3
                    id="distribution-channels-title"
                    className="text-center text-[clamp(0.85rem,2vw,1.15rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-[#20221b]"
                  >
                    Get on 100+ distribution channels
                  </h3>

                  <div className="mx-auto mt-4 grid w-full max-w-[320px] grid-cols-2 gap-3 sm:max-w-[420px] sm:grid-cols-3 sm:gap-4 lg:max-w-none">
                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 1.png"
                      alt="Amazon Logo"
                      className="h-14 w-full rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-16 lg:h-[72px]"
                    />
                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 3.png"
                      alt="Adlibris Logo"
                      className="h-14 w-full rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-16 lg:h-[72px]"
                    />
                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 2.png"
                      alt="Barnes and Noble Logo"
                      className="h-14 w-full rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-16 lg:h-[72px]"
                    />
                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/google5.webp"
                      alt="Google Play Books Logo"
                      className="h-14 w-full rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-16 lg:h-[72px]"
                    />
                    <Image
                      width={200}
                      height={100}
                      src="/landing-page/amazon1 4.webp"
                      alt="Apple Books Logo"
                      className="h-14 w-full rounded-[8px] border border-[#eadb95] bg-white p-2 object-contain shadow-[0_4px_12px_rgba(53,48,0,0.04)] sm:h-16 lg:h-[72px]"
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
