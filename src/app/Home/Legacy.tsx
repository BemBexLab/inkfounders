import Image from "next/image";
import { robotoMono } from "../fonts";

export default function Lagacy() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20 max-xl:px-10">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center  ">
    
    {/* Content */}
    <div className="max-w-2xl">
      <h2 className="text-[23px] md:text-[27px] font-semibold text-black mb-8">
        Your Book, Your Legacy — Full Creative
        <br className="hidden md:block" />
        Control with Ink Founder
      </h2>
      <div className={`space-y-6 font-mono text-gray-700 text-[12px] leading-loose ${robotoMono.className}`}>
        <p>
          At Ink Founder, we understand your book is more than just a manuscript—it’s a reflection of your voice, your vision, and a legacy in the making. That’s why we empower you at every stage of the self-publishing journey.
        </p>
        <p>
          We value your unique voice. Our editors focus on enhancing clarity and impact while honoring your authentic storytelling style. Your narrative remains yours.
        </p>
        <p>
          You stay in full control of all creative decisions—from choosing which edits to accept, to selecting your final cover design. We’re here to offer expert guidance and support, but every creative choice is yours to make.
        </p>
        <p>
          When you publish with Ink Founder, you retain 100% ownership of your work. We take care of publishing and distribution logistics, but the rights and rewards remain entirely yours.
        </p>
        <p>
         With Ink Founder as your publishing partner, your book will be a genuine reflection of your story, your vision, and your legacy—published on your terms.
        </p>
      </div>
    </div>
    {/* Book Cover */}
    <div className="flex-shrink-0">
      <Image
        src="/Home/Frame 22 (Flattened).png"
        alt="Book Cover"
        width={740}
        height={740}
        className=""
        priority
      />
    </div>
  </div>
</section>

  );
}
