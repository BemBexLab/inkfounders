import Link from "next/link";

export default function LetsCollaborate() {
  return (
    <section className="w-full flex justify-center items-center bg-[#F6F5F3] py-20 ">
      <div className="w-full max-w-[1400px] rounded-3xl bg-[#F4F3E1] px-4 py-20 flex flex-col items-center shadow-none mx-8">
        <p className="text-center text-[18px]  md:text-xl font-semibold text-[#DADD39] mb-2">
          Let’s Collaborate
        </p>
        <h2 className="text-center text-[23px] md:text-[32px] font-semibold text-[#222] mb-8">
          Dreaming of becoming a published author? Ink Founders is here to bring<br /> your vision to life—one expertly crafted page at a time.
        </h2>

        <div className="flex flex-row gap-4 justify-center items-center">
   {/* Get a Quote */}
<Link href="/contactus">
  <button
    type="button"
    className="
      btn-slide-bg
      bg-[#DADD39]
      text-black
      font-medium
      rounded-[10px]
      px-5 py-2 text-base
      md:px-8 md:py-3 md:text-lg
      border border-[#DADD39]
      transition-all duration-300
      shadow-none
      hover:border-black
    "
  >
    <span className="slide-bg rounded-[10px]"></span>
    <span className="relative z-10">Get a Quote</span>
  </button>
</Link>


{/* Live Chat */}
<Link href="/contactus">
  <button
    className="
      border border-black 
      text-black 
      font-medium 
      rounded-[10px] 
      px-5 py-2 text-base
      md:px-8 md:py-3 md:text-lg
      transition hover:bg-[#DADD39] hover:border-[#DADD39]
      shadow-none
    "
    type="button"
  >
    Live Chat
  </button>
</Link>
</div>

      </div>
    </section>
  );
}
