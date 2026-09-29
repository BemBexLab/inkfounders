import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const unsplashImages = {
  artwork: "/publishingservices/comic-workspace.webp",
};

/* ---------- Image panel ---------- */
function WorkspaceImage() {
  return (
    <div className="relative h-[min(86vw,520px)] min-h-[340px] w-full overflow-hidden rounded-2xl bg-[#e8e6c9] lg:h-full lg:min-h-0">
      <Image
        src={unsplashImages.artwork}
        alt="Professional comic publishing workspace"
        fill
        sizes="(max-width: 1023px) 100vw, 42vw"
        className="object-cover"
        priority
      />
      {/* Subtle comic halftone overlay
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle, #050505 1px, transparent 1.2px)",
          backgroundSize: "10px 10px",
        }}
      /> */}
      {/* Accent corner tag */}
      <div className="absolute left-4 top-4 z-10 rounded-full bg-[#DADD39] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#050505] shadow-sm">
        Featured Workspace
      </div>
    </div>
  );
}

/* ---------- Copy panel ---------- */
function HeroCopy() {
  return (
    <div className="flex w-full min-w-0 flex-col items-start">
      {/* Accent bar */}
      <div className="mb-7 h-1 w-14 rounded-full bg-[#DADD39]" />

      {/* Headline — flows naturally, sits on one line when space allows */}
      <h1 className="w-full break-words text-left text-[clamp(2.45rem,5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#050505]">
        Comic Book Publishing{" "}
        <span className="text-[#DADD39]">Services</span>
      </h1>

      {/* Highlighted callout */}
      <div className="relative mt-8 w-full rounded-xl bg-[#DADD39] px-6 py-5 shadow-[6px_6px_0_0_#050505] sm:px-8">
        <p className="relative z-10 text-left text-[clamp(1rem,1.7vw,1.25rem)] font-semibold leading-[1.55] text-[#171717]">
          From a Simple Comic Idea to a Book People Can’t Stop Reading!
        </p>
      </div>

      {/* Intro block */}
      <div className="mt-9 w-full border-l-2 border-[#DADD39] pl-5 sm:pl-6">
        <h2 className="text-left text-lg font-semibold text-[#050505] sm:text-xl">
          Got a comic idea?
        </h2>
        <p className="mt-3 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]">
          Where could it go? If you have a simple idea, a finished script,
          original artwork, or a complete graphic novel,{" "}
          <Link
            href="/"
            className="font-semibold text-[#8a7a2e] underline decoration-[#DADD39] decoration-2 underline-offset-4 transition-colors hover:text-black"
          >
            Ink Founders
          </Link>{" "}
          can help turn your work into a polished book ready to publish.
        </p>
      </div>

      {/* Services overview */}
      <p className="mt-6 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]">
        Our comic book publishing services cover every important stage of the
        process — story development, script writing, editing, proofreading,
        cover design, interior formatting, publishing preparation, print &
        digital publishing, and marketing support.
      </p>

      {/* CTA buttons */}
      <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row">
        <Link
          href="/contactus"
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-black bg-[#DADD39] px-5 py-3 text-center text-[13px] font-semibold text-black shadow-[3px_3px_0_0_#050505] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#050505] sm:w-auto sm:text-sm"
        >
          Free Publishing Consultation
          <GoArrowUpRight
            className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            size={18}
          />
        </Link>
        <Link
          href="/contactus"
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-black bg-transparent px-5 py-3 text-center text-[13px] font-semibold text-black transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#050505] hover:text-[#DADD39] sm:w-auto sm:text-sm"
        >
          Request a Quote
          <GoArrowUpRight
            className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            size={18}
          />
        </Link>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.25rem)] w-full items-center justify-center bg-[#F4F3E1] px-4 py-16 sm:min-h-[calc(100svh-5rem)] sm:px-6 sm:py-20 md:px-10 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
      <div className="relative mx-auto grid min-w-0 w-full max-w-[1536px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch lg:gap-10">
        <div className="min-w-0 w-full">
          <HeroCopy />
        </div>
        <div className="min-w-0 w-full self-stretch">
          <WorkspaceImage />
        </div>
      </div>
    </section>
  );
}