import type { GetInTouchContent } from "../Home/GetInTouch";

export const getInTouchContent: GetInTouchContent = {
  left: {
    heading: "Let Us Know If You Need Guidance",
    subheading: "Looking for an Expert? Let’s Talk.",
    paragraphs: [
      "You've already taken the first step toward self-publishing success, but you may still have questions. If you're looking for expert guidance to bring your ideas and your voice to life, you're in the right place. Ink Founders is here to help.",
      "We offer a free consultation where you can ask questions, share your story ideas, and explore our self-publishing services. Searching for self-publishing services near me? Ink Founders serves authors across the USA, including our self-publishing agency in Miami, Florida, and is proud to be an affordable self-publishing company for authors at every budget.",
      "Take the next step. Connect with us today."
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
        label: "1221 Brickell Ave, Miami, FL 33131, United States",
        href: "https://maps.app.goo.gl/mibAgwMcMGF8A8ig7"
      },
    ],
  },
  form: {
    title: "Take the next step",
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
    submitText: "Connect with us Today",
    sendingText: "Sending...",
    consentError: "Please provide consent to communicate.",
    successMessage: "Thank you! Your message has been received.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Network error. Please try again later.",
  },
}
