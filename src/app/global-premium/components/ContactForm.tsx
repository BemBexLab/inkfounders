"use client";

import type React from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiArrowUpRightBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiX } from "react-icons/fi";
import * as FlagIcons from "country-flag-icons/react/3x2";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

type ContactItem = {
  type: "phone" | "email" | "location";
  label: string;
  href?: string;
};

type FieldConfig = {
  name: "name" | "email" | "phone";
  type: "text" | "email" | "tel";
  placeholder: string;
};

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

const countryOptions: CountryOption[] = getCountries()
  .map((code) => {
    const dialCode = `+${getCountryCallingCode(code)}`;
    const name = countryNameFormatter.of(code) ?? code;
    return { code, dialCode, label: `${name} ${dialCode}` };
  })
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

const defaultCountry =
  countryOptions.find((country) => country.code === "US") ?? countryOptions[0];

function CountryFlag({ countryCode }: { countryCode: string }) {
  const Flag = getFlagIcon(countryCode);

  if (!Flag) {
    return (
      <span
        className="h-[14px] w-[20px] rounded-[2px] bg-[#e5e5e5] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] sm:h-[16px] sm:w-[24px]"
        aria-hidden="true"
      />
    );
  }

  return (
    <Flag
      className="h-[14px] w-[20px] rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] sm:h-[16px] sm:w-[24px]"
      aria-hidden="true"
    />
  );
}

export type GetInTouchContent = {
  left: {
    heading: string;
    subheading: string;
    paragraphs: React.ReactNode[];
    contacts: ContactItem[];
  };
  form: {
    title: string;
    fields: FieldConfig[][];
    messagePlaceholder: string;
    consentText: string;
    submitText: string;
    sendingText: string;
    consentError: string;
    successMessage: string;
    genericError: string;
    networkError: string;
  };
};

const defaultGetInTouchContent: GetInTouchContent = {
  left: {
    heading: "Have Questions? Need Guidance?",
    subheading: "Let’s Talk",
    paragraphs: [
      <div key="p1">
        <p>
          Ready to begin your self-publishing journey but still have questions? Looking for expert advice to bring your vision to life? Ink Founder is here to help.
        </p>
        <p className="mt-3">
          We offer a free consultation where you can share your book concept, explore our services in detail, and discover how we can support you in turning your manuscript into a published masterpiece. Reach out today—we’re ready when you are.
        </p>
      </div>,
    ],
    contacts: [
      {
        type: "phone",
        label: "+1 (404) 390-5698",
        href: "tel:+14043905698",
      },
      {
        type: "email",
        label: "info@inkfounders.com",
        href: "mailto:info@inkfounders.com",
      },
      {
        type: "location",
        label: "1221 Brickell Ave, Miami, FL 33131, United States",
      },
    ],
  },
  form: {
    title: "Fill this form to get faster response",
    fields: [
      [
        { name: "name", type: "text", placeholder: "Name" },
      ],
      [
        { name: "email", type: "email", placeholder: "Email" },
        { name: "phone", type: "tel", placeholder: "Phone number" },
      ],
    ],
    messagePlaceholder: "Message",
    consentText:
      "Please check the box to communicate via SMS or Email (Terms & Conditions & Privacy Policy) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime",
    submitText: "Let’s Talk",
    sendingText: "Sending...",
    consentError: "Please provide consent to communicate.",
    successMessage: "Thank you! Your message has been received.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Network error. Please try again later.",
  },
};

const renderContactIcon = (type: ContactItem["type"]) => {
  if (type === "phone") return <IoMdCall className="h-4 w-4 sm:h-5 sm:w-5" color="black" />;
  if (type === "email") return <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" color="black" />;
  return <FaLocationDot className="h-4 w-4 sm:h-5 sm:w-5" color="black" />;
};

type GetInTouchProps = {
  data?: GetInTouchContent;
};

export default function GetInTouch({ data }: GetInTouchProps) {
  const content = data ?? defaultGetInTouchContent;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const filteredCountryOptions = countryOptions.filter((country) => {
    const query = countrySearch.trim().toLowerCase();
    return (
      country.label.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query)
    );
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!formData.consent) {
      setError(content.form.consentError);
      setLoading(false);
      return;
    }

    try {
      const [firstName = "", ...lastNameParts] = formData.name.trim().split(/\s+/);
      const lastName = lastNameParts.join(" ") || "Not provided";

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: `${selectedCountry.dialCode} ${formData.phone}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccess(content.form.successMessage);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
        setSelectedCountry(defaultCountry);
        setIsCountryMenuOpen(false);
        setCountrySearch("");
      } else {
        const result = await response.json();
        setError(result.error || content.form.genericError);
      }
    } catch {
      setError(content.form.networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F4F3E1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8 xl:gap-12">
        {/* LEFT */}
        <div className="mx-auto w-full min-w-0 max-w-[720px] text-center lg:text-left">
          <h2 className="text-3xl font-medium leading-[1.1] text-black plus-jakarta [word-spacing:5px] sm:text-4xl md:text-5xl">
            Have Questions? Need Guidance?{" "}
            <span className="relative inline-block">
              Let’s Talk
              <svg
                aria-hidden="true"
                className="absolute left-0 top-[25%] w-[calc(100%+10px)] -rotate-5"
                height="28"
                viewBox="0 0 100 32"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q50 30 100 30"
                  fill="none"
                  stroke="#c8d400"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <div className="mt-5 max-w-full text-base leading-[1.5] text-black sm:text-lg md:text-[18px] poppins">
            <p>
              Ready to begin your self-publishing journey but still have questions? Looking for expert advice to bring your vision to life? Ink Founder is here to help.
            </p>
            <p className="mt-3">
              We offer a free consultation where you can share your book concept, explore our services in detail, and discover how we can support you in turning your manuscript into a published masterpiece. Reach out today—we’re ready when you are.
            </p>
          </div>

          <div className="my-7 h-px w-full max-w-[680px] bg-[#ecebd8] mx-auto lg:mx-0" />

          <div className="space-y-5 sm:space-y-6 lg:space-y-7">
            {content.left.contacts.map((contact) => (
              <div
                key={`${contact.type}-${contact.label}`}
                className="flex gap-3 justify-center items-center sm:gap-4 lg:justify-start"
              >
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] sm:h-[46px] sm:w-[46px] sm:rounded-[12px]">
                  {renderContactIcon(contact.type)}
                </div>

                {contact.href ? (
                  <a
                    href={contact.href}
                    className="min-w-0 text-left text-sm leading-[1.5] text-black [overflow-wrap:anywhere] sm:text-base md:text-[18px] poppins"
                  >
                    {contact.label}
                  </a>
                ) : (
                  <span className="min-w-0 max-w-[520px] text-left text-sm leading-[1.5] text-black [overflow-wrap:anywhere] sm:text-base md:text-[18px] poppins">
                    {contact.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="mx-auto w-full min-w-0 max-w-[855px] rounded-[20px] bg-white px-4 py-8 sm:p-6 sm:py-10 md:rounded-[24px] md:p-8 xl:p-10">
          <form onSubmit={handleSubmit} className="@container/contact mx-auto w-full min-w-0 max-w-[720px]">
            <h3 className="mb-6 text-center text-2xl uppercase font-medium leading-[1.2] text-black poppins sm:mb-8 sm:text-[28px] lg:text-left xl:text-[32px]">
              {content.form.title}
            </h3>

            {content.form.fields.map((row) => (
              <div
                key={row.map((field) => field.name).join("-")}
                className={`mb-5 grid min-w-0 grid-cols-1 gap-4 sm:mb-6 sm:gap-5 ${
                  row.length > 1 ? "@min-[560px]/contact:grid-cols-2" : ""
                }`}
              >
                {row.map((field) =>
                  field.name === "phone" ? (
                    <div
                      key={field.name}
                      className="relative flex h-[52px] w-full min-w-0 rounded-[12px] border border-black text-base text-[#6b6d6b] focus-within:border-[#dadd39] sm:h-[58px] md:h-[64px] md:rounded-[14px] mulish"
                    >
                      <div
                        className="flex h-full shrink-0 items-center border-r border-[#c8c8c8]"
                        onBlur={(event) => {
                          if (
                            !event.currentTarget.contains(
                              event.relatedTarget as Node
                            )
                          ) {
                            setIsCountryMenuOpen(false);
                            setCountrySearch("");
                          }
                        }}
                      >
                        <button
                          type="button"
                          aria-label="Country code"
                          aria-expanded={isCountryMenuOpen}
                          aria-haspopup="listbox"
                          onClick={() =>
                            setIsCountryMenuOpen((open) => !open)
                          }
                          className="flex h-full items-center gap-1.5 whitespace-nowrap rounded-l-[12px] px-2 text-sm text-[#55584f] outline-none transition hover:bg-[#f7f8ed] focus:bg-[#f7f8ed] sm:px-3"
                        >
                          <CountryFlag countryCode={selectedCountry.code} />
                          <span>{selectedCountry.dialCode}</span>
                          <IoIosArrowDown
                            aria-hidden="true"
                            className="text-[10px] text-[#999] sm:text-xs"
                          />
                        </button>

                        {isCountryMenuOpen && (
                          <div
                            role="listbox"
                            aria-label="Countries"
                            className="absolute right-0 top-[calc(100%+8px)] z-50 flex max-h-[min(320px,45dvh)] w-full max-w-[320px] flex-col overflow-hidden rounded-[10px] border border-[#e1e3d7] bg-white shadow-[0_18px_38px_rgba(0,0,0,0.18)]"
                          >
                            <div className="shrink-0 border-b border-[#ecece6] bg-[#fbfcf7] p-2">
                              <div className="flex h-9 items-center gap-2 rounded-[7px] border border-[#e2e5d7] bg-white px-2.5 focus-within:border-[#c8d400]">
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
                                  className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-[#222] outline-none placeholder:text-[#9b9f92]"
                                  placeholder="Search country or code"
                                />
                                {countrySearch && (
                                  <button
                                    type="button"
                                    aria-label="Clear country search"
                                    onClick={() => setCountrySearch("")}
                                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#8b907e] hover:bg-[#eef2d8]"
                                  >
                                    <FiX
                                      aria-hidden="true"
                                      className="text-[14px]"
                                    />
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="min-h-0 overflow-y-auto overscroll-contain py-1">
                              {filteredCountryOptions.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  role="option"
                                  aria-selected={
                                    selectedCountry.code === country.code
                                  }
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
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="h-full w-full min-w-0 flex-1 rounded-r-[12px] border-0 bg-transparent px-3 text-base text-[#6b6d6b] outline-none placeholder:text-[#6b6d6b]"
                      />
                    </div>
                  ) : (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="h-[52px] w-full min-w-0 rounded-[12px] border border-black px-4 text-base text-[#6b6d6b] outline-none placeholder:text-[#6b6d6b] focus:border-[#dadd39] sm:h-[58px] sm:px-5 md:h-[64px] md:rounded-[14px] mulish"
                    />
                  )
                )}
              </div>
            ))}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.form.messagePlaceholder}
              required
              className="mb-6 block min-h-[120px] w-full min-w-0 resize-y rounded-[12px] border border-black px-4 py-4 text-base text-[#6b6d6b] outline-none placeholder:text-[#6b6d6b] focus:border-[#dadd39] sm:mb-8 sm:min-h-[140px] sm:px-5 sm:py-5 md:rounded-[14px] lg:min-h-[160px] mulish"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#C8D400] to-[#F7FF77] px-6 py-3.5 text-base font-medium text-[#202020] transition hover:opacity-90 disabled:opacity-70 mulish sm:py-4 sm:text-lg md:px-8 md:text-[18px]"
            >
              {loading ? content.form.sendingText : content.form.submitText}{" "}
              <PiArrowUpRightBold className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <label className="mt-6 flex cursor-pointer items-start gap-3 sm:mt-8 sm:gap-4">
              <span className="relative mt-0.5 flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] bg-[#dadd39] text-[#202020] sm:h-[28px] sm:w-[28px] sm:rounded-[8px] md:h-[32px] md:w-[32px]">
                {formData.consent && (
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={3} />
                )}
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                  required
                />
              </span>

              <span className="min-w-0 text-[12px] leading-[1.4] text-black [overflow-wrap:anywhere] sm:text-[13px] md:text-[14px] md:leading-[1.45] poppins">
                {content.form.consentText}
              </span>
            </label>

            {success && (
              <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm text-green-700 sm:text-base">
                {success}
              </div>
            )}
            {error && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-700 sm:text-base">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
