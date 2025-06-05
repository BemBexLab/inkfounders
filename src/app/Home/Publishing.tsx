import { robotoMono } from "../fonts";

// components/AboutSection.tsx
export default function Publishing() {
  return (
    <section className="w-full bg-[#F6F5F3] pt-20 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-7">
        {/* Left: Headline */}
        <div className="md:w-2/5 w-full mb-8 md:mb-0">
          <h2 className="text-[23px] md:text-3xl font-semibold text-black leading-snug">
            We Make Publishing Your <br />
            Book Stress-Free
          </h2>
        </div>
        {/* Right: Description */}
        <div className={`md:w-3/5 w-full text-[12px] md:text-[14px] text-gray-700 leading-relaxed ${robotoMono.className}`}>
          <p className="mb-6">
            At Ink Founders, we understand how overwhelming the self-publishing journey can be—especially for first-time authors eager to see their stories in print. What began as a small circle of literature lovers sharing thoughts on classic and contemporary works has grown into a thriving self-publishing platform. From humble beginnings, Ink Founders has evolved into a team of over 100 industry-vetted professionals dedicated to helping writers turn their passion into published reality.
          </p>
          <p className="mb-6">
            Our mission is simple: to make self-publishing accessible, supportive, and successful. Whether you have a finished manuscript or are just starting with an idea, our team is here to guide you through every step—editing, proofreading, formatting, ghostwriting, and cover design. We also offer expert support in navigating Amazon Book Publishing to ensure your book reaches the right readers.
          </p>
          <p>
            Let Ink Founders be your partner in bringing your literary vision to life—and leave your legacy in the world of books.
          </p>
        </div>
      </div>
    </section>
  );
}
