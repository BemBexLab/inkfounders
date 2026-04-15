import Link from "next/link";

export default function LetsCollaborate() {
  return (
    <section className="flex w-full items-center justify-center bg-[#F6F5F3] px-4 py-10 sm:px-6 md:px-8">
      <div className="flex w-full max-w-[1400px] flex-col items-center rounded-3xl bg-[#F4F3E1] px-4 py-10 shadow-none sm:px-6 md:px-8">
        <p className="mb-2 text-center text-[18px] font-semibold text-[#DADD39] md:text-xl">
          Let's Collaborate
        </p>
        <h2 className="mb-8 max-w-5xl text-center text-[22px] font-semibold leading-tight text-[#222] sm:text-[25px] md:text-[32px]">
          Dreaming of becoming a published author? Ink Founders is here to bring
          your vision to life, one expertly crafted page at a time.
        </h2>

        <div className="flex flex-row items-center justify-center gap-4">
          <Link href="/contactus">
            <button
              type="button"
              className="
                btn-slide-bg
                rounded-[10px]
                border border-[#DADD39]
                bg-[#DADD39]
                px-5 py-2 text-base
                font-medium
                text-black
                shadow-none
                transition-all duration-300
                hover:border-black
                md:px-8 md:py-2 md:text-lg
              "
            >
              <span className="slide-bg rounded-[10px]"></span>
              <span className="relative z-10">Get a Quote</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
