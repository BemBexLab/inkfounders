"use client";

import type React from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { robotoMono } from "../fonts";

type FormData = {
  firstName: string;
  lastName: string;
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
  name: "firstName" | "lastName" | "email" | "phone";
  type: "text" | "email" | "tel";
  placeholder: string;
};

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
    heading: "Let us know if anything needed.\nSearching of any guidance from an expert?",
    subheading: "Have a conversation",
    paragraphs: [
      <div>
        <p>
          You have taken a step towards the journey of success in
          self-publishing but still have a lot to ask? And searching for an
          expert's guidance who can help you in bring your ideas, and voice to
          reality, but haven't found anyone, then you are at the right place.
          Ink Founders is for you.
        </p>
        <p className="mt-3">
          Ink Founders provide a free discussion opportunity where you can clear
          your doubts, share your story ideas or concepts, and get the
          exploration trip to examine our services clearly and can find out how
          we can provide you with the best by turning your words into book form.
          So, let's take a step and join us today.
        </p>
      </div>,
    ],
    contacts: [
      {
        type: "phone",
        label: "+1 (786) 496-1231",
        href: "tel:+17864961231",
      },
      {
        type: "email",
        label: "info@inkfounders.com",
        href: "mailto:info@inkfounders.com",
      },
      {
        type: "location",
        label: "1680 Michigan Ave 700 326 Miami Beach, FL 33139, USA",
      },
    ],
  },
  form: {
    title: "Get In Touch Now!",
    fields: [
      [
        { name: "firstName", type: "text", placeholder: "First name" },
        { name: "lastName", type: "text", placeholder: "Last Name" },
      ],
      [
        { name: "email", type: "email", placeholder: "Email" },
        { name: "phone", type: "tel", placeholder: "Phone number" },
      ],
    ],
    messagePlaceholder: "Message",
    consentText:
      "Please check the box to communicate via SMS or Email (Terms & Conditions & Privacy Policy) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime",
    submitText: "Let's Get Started",
    sendingText: "Sending...",
    consentError: "Please provide consent to communicate.",
    successMessage: "Thank you! Your message has been received.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Network error. Please try again later.",
  },
};

const renderContactIcon = (type: ContactItem["type"]) => {
  if (type === "phone") return <IoMdCall size={20} />;
  if (type === "email") return <MdEmail size={20} />;
  return <FaLocationDot size={20} />;
};

type GetInTouchProps = {
  data?: GetInTouchContent;
};

export default function GetInTouch({ data }: GetInTouchProps) {
  const content = data ?? defaultGetInTouchContent;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
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
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccess(content.form.successMessage);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
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
    <div className="w-full px-4 py-10 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full max-w-2xl flex-1 text-center lg:max-w-none lg:text-left">
          <h2 className="mb-3 text-[22px] font-medium leading-[1.08] text-[#DADD39] sm:text-[25px] md:text-[27px] lg:leading-[1]">
            {content.left.heading}
          </h2>
          <h3 className="mb-3 text-[20px] font-semibold leading-tight text-black sm:text-[22px] md:text-[25px]">
            {content.left.subheading}
          </h3>

          {content.left.paragraphs.map((paragraph, index) => (
            <div
              key={`paragraph-${index}`}
              className={`mb-6 text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:mb-8 md:text-[15px] md:leading-tight ${robotoMono.className}`}
            >
              {paragraph}
            </div>
          ))}

          <div className="mx-auto mt-8 grid max-w-[420px] grid-cols-1 gap-4 text-left md:max-w-none md:grid-cols-2 lg:mx-0">
            {content.left.contacts.map((contact) => (
              <div key={`${contact.type}-${contact.label}`} className="flex min-w-0 items-center gap-3">
                <div className="shrink-0 rounded-xl bg-[#DADD39] p-2 text-white">
                  {renderContactIcon(contact.type)}
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="min-w-0 break-words font-mono text-[13px] font-medium leading-tight text-gray-800 hover:underline focus:outline-none sm:text-[14px] md:text-base"
                  >
                    {contact.label}
                  </a>
                ) : (
                  <span className="min-w-0 break-words font-mono text-[13px] font-medium leading-tight text-gray-800 sm:text-[14px] md:text-base">
                    {contact.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl flex-1 rounded-2xl border-2 border-[#D0D0D0] bg-[#F4F3E1] px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 lg:max-w-none lg:px-10 lg:py-10">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-5 text-[20px] font-bold leading-tight text-black md:mb-6 md:text-2xl">
              {content.form.title}
            </h2>

            {content.form.fields.map((row) => (
              <div
                key={row.map((field) => field.name).join("-")}
                className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
              >
                {row.map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="rounded-md border border-gray-200 bg-[#DEDDCB] p-2.5 text-sm text-[#6B6D6B] placeholder:text-[#6B6D6B] focus:border-[#d4d450] focus:outline-none md:p-3 md:text-base"
                    required
                  />
                ))}
              </div>
            ))}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.form.messagePlaceholder}
              rows={4}
              className="mb-4 w-full rounded-md border border-gray-200 bg-[#DEDDCB] p-2.5 text-sm text-[#6B6D6B] placeholder:text-[#6B6D6B] focus:border-[#d4d450] focus:outline-none md:p-3 md:text-base"
              required
            />

            <div className="mb-6 flex items-start gap-2">
              <label className="flex cursor-pointer select-none items-start gap-2">
                <span className="mt-1">
                  <span
                    className={`w-5 h-5 border ${
                      formData.consent
                        ? "bg-[#d4d450] border-[#d4d450]"
                        : "border-gray-300"
                    } rounded flex items-center justify-center transition-colors duration-150`}
                  >
                    {formData.consent && (
                      <Check size={16} className="text-white" />
                    )}
                  </span>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                    required
                  />
                </span>
                <span
                  className={`text-[11px] leading-snug text-gray-600 sm:text-xs ${robotoMono.className}`}
                >
                  {content.form.consentText}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="
                btn-slide-bg
                bg-[#DADD39]
                text-gray-800
                font-medium
                py-1.5 px-4 text-sm
                md:py-2 md:px-6 md:text-base
                rounded-md
                border-[1px] border-[#DADD39]
                transition-all duration-300
                overflow-hidden
                hover:border-black
              "
              disabled={loading}
            >
              <span className="slide-bg"></span>
              <span className="relative z-10">
                {loading
                  ? content.form.sendingText
                  : content.form.submitText}
              </span>
            </button>

            {success && <div className="text-green-600 mt-4">{success}</div>}
            {error && <div className="text-red-600 mt-4">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
