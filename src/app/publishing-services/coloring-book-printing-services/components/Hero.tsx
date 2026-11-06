import Image from "next/image";
import Link from "next/link";
import { robotoMono } from "@/app/fonts";
import ServiceHeroActions from "../../components/ServiceHeroActions";

const unsplashImages = {
  artwork: "/coloring-book/Rectangle 15.webp",
};

/* ---------- Image panel ---------- */
function WorkspaceImage() {
  return (
    <div className="relative h-[clamp(18.75rem,70vw,32rem)] w-full overflow-hidden rounded-2xl bg-[#e8e6c9] lg:h-full lg:min-h-0">
      <Image
        src={unsplashImages.artwork}
        alt="Professional comic publishing workspace"
        fill
        sizes="(max-width: 1023px) 100vw, 42vw"
        className="object-cover"
        priority
      />
    </div>
  );
}

/* ---------- Copy panel ---------- */
function HeroCopy() {
  return (
    <div className="flex w-full min-w-0 flex-col items-start">
      {/* Accent bar */}
      {/* <div className="mb-7 h-1 w-14 rounded-full bg-[#DADD39]" /> */}

      {/* Headline — flows naturally, sits on one line when space allows */}
      {/* Services overview */}
      <p
        className={`${robotoMono.className} w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        Do you have a concept for a <b>coloring book</b> that you want to develop into a genuine publication? With the help of <Link className="text-blue-500 hover:underline" href={"/"}>Ink Founders</Link>, writers can produce <b>high quality material</b> for their books, from layout to cover design.
      </p>
      <p
        className={`${robotoMono.className} mt-2 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        Prior to creating a <b>coloring book</b>, it is necessary to ensure that you have thought of who will be using your book. Since a <b>book for toddlers</b> requires basic pictures and simple drawings to be colored in, the <b>coloring book designed</b> for adults may include <Link className="text-blue-500 hover:underline" href={"https://en.wikipedia.org/wiki/Mandala"}>mandalas</Link> or <Link className="text-blue-500 hover:underline" href={"https://en.wikipedia.org/wiki/Flower"}>flowers</Link>. The choice of the target audience will also have an impact on such aspects as choice of paper, <b>book layout</b>, and <b>book binding</b>.
      </p>
      <p
        className={`${robotoMono.className} mt-2 w-full break-words text-left text-[13px] leading-[1.7] text-[#444] sm:text-[14px]`}
      >
        You want to <b>print your own coloring book</b>, start with your artwork and decide how the finished book will be used. You can then compare <Link href={"https://en.wikipedia.org/wiki/Printing"}>printing</Link> options based on your page count, budget, and expected quantity.
      </p>

      <ServiceHeroActions align="left" />
    </div>
  );
}

/* ---------- Hero ---------- */
export default function Hero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden rounded-bl-[44px] bg-[#F4F3E1] px-4 py-10 sm:rounded-bl-[64px] sm:px-6 sm:py-12 md:px-10 md:py-16 lg:rounded-bl-[100px] lg:px-12 lg:py-12 xl:px-16 xl:py-16">
      <div className="relative mx-auto grid min-w-0 w-full max-w-[1536px] grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch lg:gap-x-10 lg:gap-y-6">
        <h1 className="order-1 w-full min-w-0 break-words text-left text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#050505] lg:col-start-1 lg:row-start-1">
          Coloring Book Printing Services
        </h1>
        <div className="order-2 min-w-0 w-full self-stretch lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <WorkspaceImage />
        </div>
        <div className="order-3 min-w-0 w-full lg:col-start-1 lg:row-start-2">
          <HeroCopy />
        </div>
      </div>
    </section>
  );
}
