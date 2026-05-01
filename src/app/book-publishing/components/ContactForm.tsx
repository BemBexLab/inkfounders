"use client";

import type React from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { robotoMono } from "@/app/fonts";

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
    heading: "Have Questions? Need Guidance?",
    subheading: "Let’s Talk",
    paragraphs: [
      <div>
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
  <section className="w-full overflow-hidden bg-[#f5f4df] py-14 sm:py-16 lg:py-20">
    <div className="mx-auto grid w-full grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-12 lg:mx-0 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-12 lg:px-0 lg:pl-[84px]">
      {/* LEFT */}
      <div className="max-w-[720px] text-center lg:text-left">
        <h2 className="text-[30px] font-bold leading-none text-[#dadd39] sm:text-[34px] md:text-[42px] lg:text-[42px]">
          {content.left.heading}
        </h2>

        <h3 className="mt-6 text-[30px] font-extrabold leading-none text-[#242424] sm:text-[34px] md:text-[42px] lg:mt-8">
          {content.left.subheading}
        </h3>

        <div
          className={`mt-8 max-w-[690px] text-sm leading-[1.75] text-[#202020] sm:text-base md:text-[18px] lg:mt-12 lg:leading-[1.7] ${robotoMono.className}`}
        >
          {content.left.paragraphs.map((paragraph, index) => (
            <div key={`paragraph-${index}`}>{paragraph}</div>
          ))}
        </div>

        <div className="mt-10 h-px w-full max-w-[680px] bg-[#ecebd8]" />

        <div className="mt-7 space-y-5 sm:space-y-6 lg:space-y-7">
          {content.left.contacts.map((contact) => (
            <div
              key={`${contact.type}-${contact.label}`}
              className="flex items-start gap-4 sm:gap-5"
            >
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[#dadd39] text-white">
                {renderContactIcon(contact.type)}
              </div>

              {contact.href ? (
                <a
                  href={contact.href}
                  className={`text-left text-sm leading-[1.7] text-[#202020] sm:text-base md:text-[18px] ${robotoMono.className}`}
                >
                  {contact.label}
                </a>
              ) : (
                <span
                  className={`max-w-[520px] text-left text-sm leading-[1.7] text-[#202020] sm:text-base md:text-[18px] ${robotoMono.className}`}
                >
                  {contact.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full rounded-[20px] bg-[#202020] px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:min-h-[730px] lg:rounded-l-[20px] lg:rounded-r-none lg:px-16 lg:py-16">
        <form onSubmit={handleSubmit} className="mx-auto max-w-[690px] lg:mx-0">
          <h2 className="mb-8 text-[30px] font-extrabold leading-none text-[#dadd39] sm:text-[34px] md:text-[38px] lg:mb-12 lg:text-[44px]">
            {content.form.title}
          </h2>

          {content.form.fields.map((row) => (
            <div
              key={row.map((field) => field.name).join("-")}
              className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mb-7 lg:gap-7"
            >
              {row.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className={`h-[58px] rounded-[14px] border border-[#dedccb] bg-[#dedccb] px-5 text-sm text-[#6b6d6b] outline-none placeholder:text-[#6b6d6b] focus:border-[#dadd39] sm:h-[64px] sm:px-6 sm:text-base md:h-[68px] md:rounded-[16px] md:px-8 md:text-[18px] ${robotoMono.className}`}
                />
              ))}
            </div>
          ))}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={content.form.messagePlaceholder}
            required
            className={`mb-6 h-[160px] w-full resize-none rounded-[14px] border border-[#dedccb] bg-[#dedccb] px-5 py-5 text-sm text-[#6b6d6b] outline-none placeholder:text-[#6b6d6b] focus:border-[#dadd39] sm:mb-8 sm:h-[185px] sm:px-6 sm:py-6 sm:text-base md:rounded-[16px] md:px-8 md:py-7 md:text-[18px] ${robotoMono.className}`}
          />

          <label className="mb-8 flex cursor-pointer items-start gap-4">
            <span className="relative mt-1 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#dadd39] text-[#202020]">
              {formData.consent && <Check size={24} strokeWidth={3} />}
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
              className={`max-w-[640px] text-[13px] leading-[1.5] text-[#a6a6a6] sm:text-[14px] md:text-[16px] md:leading-[1.45] ${robotoMono.className}`}
            >
              {content.form.consentText}
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-[10px] bg-[#dadd39] px-8 py-3 text-[18px] font-medium text-[#202020] transition hover:opacity-90 disabled:opacity-70"
          >
            {loading ? content.form.sendingText : content.form.submitText}
          </button>

          {success && <div className="mt-4 text-green-500">{success}</div>}
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </form>
      </div>
    </div>
  </section>
);
}
