import type { GetInTouchContent } from "../Home/GetInTouch";

export const getInTouchContent: GetInTouchContent = {
  left: {
    heading: "Let Us Know If You Need Guidance",
    subheading: "Looking for an Expert? Let's Talk.",
    paragraphs: [
      "You've taken the first step toward self-publishing success, but you may still have questions. If you're searching for expert guidance to bring your ideas and voice to life, you're in the right place. Ink Founders is here to help. We offer a free consultation where you can clear your doubts, share your story ideas, and explore our services. Discover how we can turn your words into a professionally published book.",
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
};
