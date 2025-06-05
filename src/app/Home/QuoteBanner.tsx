import { robotoMono } from "../fonts";

// components/QuoteBanner.tsx
export default function QuoteBanner() {
  return (
    <section className="w-full flex justify-center items-center bg-[#F6F5F3] py-20 ">
      <div className="w-full max-w-[1400px] rounded-3xl bg-[#F4F3E1] px-4 py-20 flex flex-col items-center shadow-none mx-8">
        <p className="text-center text-[18px]  md:text-xl font-semibold text-[#DADD39] mb-2">
          Your Story Deserves To Be Told
        </p>
        <h2 className="text-center text-[23px] md:text-[35px] font-semibold text-[#222] mb-8">
          Let Ink Founders Simplify The Publishing Process For You.
        </h2>
        <p className={`text-center ${robotoMono.className} text-gray-700 text-base text-[12px] md:text-[15px] mb-10  mx-auto`}>
          Ink Founders simplifies editing, formatting, cover design, and Amazon publishing—so you can <br className="hidden md:block" />
          focus on your story.
        </p>
        <div className="flex flex-row gap-4 justify-center items-center">
  <button className="
    bg-[#DADD39] 
    text-black 
    font-medium 
    rounded-[10px] 
    px-5 py-2 text-base
    md:px-8 md:py-3 md:text-lg
    transition hover:bg-transparent hover:border-[1px] hover:border-black
    shadow-none
  ">
    Get a Quote
  </button>
  <button className="
    border border-black 
    text-black 
    font-medium 
    rounded-[10px] 
    px-5 py-2 text-base
    md:px-8 md:py-3 md:text-lg
    transition hover:bg-[#DADD39] hover:border-[#DADD39]
    shadow-none
  ">
    Live Chat
  </button>
</div>

      </div>
    </section>
  );
}
