import Image from "next/image";
import { robotoMono } from "../fonts";

export default function Lagacy() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20 max-xl:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center  ">
        {/* Content */}
        <div className="max-w-2xl">
          <h2 className="text-[23px] md:text-[27px] font-semibold text-black mb-8">
            Your Ideas – Unfiltered, Your Achievement – Untouched, With full
            Creative Freedom, Let’s get the professional Supremacy
          </h2>
          <div
            className={`space-y-6 font-mono text-gray-700 text-[15px] leading-loose ${robotoMono.className}`}
          >
            <p>
              Ink Founders values your creativity, we know that it’s not only
              your story or pages but your vision, your imagination, it contains
              your emotions and voice, and an achievement in making. So, we
              encourage you at every step of your journey from get inspiration
              to turning it into a reality without controlling your freedom of
              creativity,
            </p>
            <p>
              Ink founders’ editors are here to refine or clarify your story not
              to rewrite. We just improve the clarity, prioritizing the real
              essence of the story keeping it original. Your story is your voice
              and our responsibility is to rise your voice not to mix the noise.
              So, your voice will remain the heart of your story’s every page.
              You are allowed to choose that describes your story the best from
              the cover that reflects your story or speaks for your story to the
              final details that bring soul to your story, everything goes
              according to your willingness.
            </p>
            <p>
              After the publication with Ink Founders, your work remains
              entirely yours from ownership to rights and rewards, you own your
              story. We are here to help you in publishing process to marketing
              strategies.
            </p>
            <p>
              With Ink Founders, you will not only turn your words into a book
              but also you will see the reality as you imagined, it would be the
              reflection of your thoughts.
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
            className="transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3"
            priority
          />
        </div>
      </div>
    </section>
  );
}
