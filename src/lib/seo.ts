import type { Metadata } from "next";
import { faqItems } from "@/app/Home/faqData";

export const SITE_URL = "https://www.inkfounders.com";
export const SOCIAL_IMAGE_PATH = "/landing-page/inkfounder logo-19 1.svg";
export const SOCIAL_IMAGE_URL = new URL(SOCIAL_IMAGE_PATH, SITE_URL).toString();
export const GLOBAL_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
      "@id": "https://www.inkfounders.com/#localbusiness",
      name: "Ink Founders",
      url: "https://www.inkfounders.com/",
      description:
        "Ink Founders is a professional publishing company in Miami, Florida, offering book publishing, ghostwriting, editing, proofreading, book formatting, book cover design, ebook publishing, and book marketing services for authors and businesses.",
      telephone: "+1-786-496-1231",
      priceRange: "$$",
      slogan: "Professional book publishing and author support services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1221 Brickell Ave",
        addressLocality: "Miami",
        addressRegion: "FL",
        postalCode: "33131",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Miami",
        },
        {
          "@type": "State",
          name: "Florida",
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=1221%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131%2C%20United%20States",
      sameAs: [
        "https://www.facebook.com/InkFounders",
        "https://www.pinterest.com/inkFounders/",
        "https://www.instagram.com/ink_founder/",
        "https://www.linkedin.com/company/ink-founders/",
      ],
      knowsAbout: [
        "Book Publishing",
        "Ghostwriting",
        "Book Editing",
        "Proofreading",
        "Book Formatting",
        "Book Cover Design",
        "Ebook Publishing",
        "Amazon KDP Publishing",
        "Book Marketing",
        "Author Branding",
        "Manuscript Publishing",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.inkfounders.com/#book-publishing-service",
            name: "Book Publishing Services",
            description:
              "Professional book publishing services for authors who want support with publishing, formatting, cover design, and book launch preparation.",
            provider: {
              "@id": "https://www.inkfounders.com/#localbusiness",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.inkfounders.com/#ghostwriting-service",
            name: "Ghostwriting Services",
            description:
              "Ghostwriting support for authors, entrepreneurs, and professionals who want to turn their ideas into a complete manuscript.",
            provider: {
              "@id": "https://www.inkfounders.com/#localbusiness",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.inkfounders.com/#editing-service",
            name: "Book Editing and Proofreading Services",
            description:
              "Editing and proofreading services to improve manuscript clarity, flow, grammar, structure, and readability.",
            provider: {
              "@id": "https://www.inkfounders.com/#localbusiness",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.inkfounders.com/#cover-design-service",
            name: "Book Cover Design Services",
            description:
              "Custom book cover design services for print books, ebooks, and publishing platforms.",
            provider: {
              "@id": "https://www.inkfounders.com/#localbusiness",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.inkfounders.com/#ebook-publishing-service",
            name: "Ebook Publishing Services",
            description:
              "Ebook publishing and formatting services for authors who want their books prepared for digital publishing platforms.",
            provider: {
              "@id": "https://www.inkfounders.com/#localbusiness",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://www.inkfounders.com/#book-marketing-service",
            name: "Book Marketing Services",
            description:
              "Book marketing services to help authors improve visibility, reach readers, and promote their published books.",
            provider: {
              "@id": "https://www.inkfounders.com/#localbusiness",
            },
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.inkfounders.com/#website",
      url: "https://www.inkfounders.com/",
      name: "Ink Founders",
      description:
        "Ink Founders provides professional book publishing, ghostwriting, editing, formatting, cover design, ebook publishing, and book marketing services.",
      publisher: {
        "@id": "https://www.inkfounders.com/#localbusiness",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.inkfounders.com/#webpage",
      url: "https://www.inkfounders.com/",
      name: "Ink Founders | Book Publishing Services in Miami, Florida",
      description:
        "Ink Founders is a Miami-based publishing company offering book publishing, ghostwriting, editing, formatting, cover design, ebook publishing, and book marketing services.",
      isPartOf: {
        "@id": "https://www.inkfounders.com/#website",
      },
      about: {
        "@id": "https://www.inkfounders.com/#localbusiness",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.inkfounders.com/",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.inkfounders.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.inkfounders.com/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.inkfounders.com/#faq",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answerParagraphs.join(" "),
        },
      })),
    },
  ],
} as const;

function normalizeCanonicalPath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

export function getCanonicalUrl(path: string) {
  return new URL(normalizeCanonicalPath(path), SITE_URL).toString();
}

export function createCanonicalMetadata(path: string): Metadata {
  return {
    alternates: {
      canonical: normalizeCanonicalPath(path),
    },
  };
}
