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
    <div className="w-full md:py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 max-md:mt-14">
        <div className="flex-1">
          <h2 className="text-[#DADD39] font-medium text-[23px] md:text-[27px] mb-3 leading-tight">
            {content.left.heading}
          </h2>
          <h3 className="text-[21px] md:text-[25px] font-semibold mb-3 text-black">
            {content.left.subheading}
          </h3>

          {content.left.paragraphs.map((paragraph, index) => (
            <div
              key={`paragraph-${index}`}
              className={`text-gray-700 text-[12px] md:text-[15px] mb-8 leading-tight ${robotoMono.className}`}
            >
              {paragraph}
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {content.left.contacts.map((contact) => (
              <div key={`${contact.type}-${contact.label}`} className="flex items-center gap-3">
                <div className="bg-[#DADD39] rounded-xl p-2 text-white">
                  {renderContactIcon(contact.type)}
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-base leading-tight text-gray-800 font-medium font-mono hover:underline focus:outline-none"
                  >
                    {contact.label}
                  </a>
                ) : (
                  <span className="text-base leading-tight text-gray-800 font-medium font-mono">
                    {contact.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 border border-2 border-[#D0D0D0] bg-[#F4F3E1] px-10 py-10 rounded-2xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-[15px] md:text-2xl font-bold mb-6 text-black">
              {content.form.title}
            </h2>

            {content.form.fields.map((row) => (
              <div
                key={row.map((field) => field.name).join("-")}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              >
                {row.map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="bg-[#DEDDCB] text-[#6B6D6B] placeholder:text-[#6B6D6B] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450]"
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
              className="w-full bg-[#DEDDCB] text-[#6B6D6B] placeholder:text-[#6B6D6B] p-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#d4d450] mb-4"
              required
            />

            <div className="flex items-start gap-2 mb-6">
              <label className="flex items-start gap-2 cursor-pointer select-none">
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
                  className={`text-xs text-gray-600 ${robotoMono.className}`}
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
