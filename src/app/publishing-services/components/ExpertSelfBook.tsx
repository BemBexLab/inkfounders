import { robotoMono } from "@/app/fonts";
import Image from "next/image";


export default function ExportSelfBook() {
  return (
    <section className="w-full bg-[#F6F5F3] px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:px-6">
	  <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center justify-items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,32vw)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_440px] xl:gap-10">
    
    {/* Content */}
	    <div className="contents lg:block lg:w-full lg:max-w-none xl:pr-14">
	      <h2 className="order-1 mb-2 w-full max-w-3xl text-center text-[24px] font-semibold leading-[1.05] text-black sm:text-[26px] md:text-[27px] lg:order-none lg:mb-3 lg:max-w-none lg:text-left lg:text-[26px] xl:text-[27px]">
        Use Expert Self-Book Publishing Services To Preserve Your Legacy!
      </h2>
	      <div className={`order-3 w-full max-w-3xl space-y-3 text-center text-[13px] leading-[1.35] text-gray-700 sm:text-[14px] md:text-[15px] lg:order-none lg:max-w-none lg:space-y-2 lg:text-left lg:text-[14px] lg:leading-relaxed xl:space-y-3 xl:text-[15px] xl:leading-loose ${robotoMono.className}`}>
        <p>
          Your book is more than just a story—it embodies your unique voice, experiences, and creativity. At Panda Publishing Agency, we believe every author deserves careful, accurate, and detail-oriented publishing services tailored to their needs and goals.
        </p>
        <p>
          Our team of qualified experts provides custom book publishing services designed to bring your artistic vision to life. From flawless editing and formatting to eye-catching cover design and effective marketing strategies, we offer comprehensive support every step of the way.
        </p>
        <p>
          With our guidance and support, rest assured that your book will receive the utmost care and exposure to a wide audience. Let us help you spread your message and create a lasting legacy through your published work. Our services extend across various publishing domains, ensuring client satisfaction and success. You&apos;ll find our rates competitive, and our dedicated customer representatives are available round-the-clock for your convenience.
        </p>
       
      </div>
    </div>
    {/* Book Cover */}
	    <div className="order-2 flex w-full justify-center lg:order-none">
      <Image
        src="/Service/A.D Bradley 2 1.webp"
        alt="Book Cover"
        width={440}
        height={440}
	        className="h-auto w-[min(78vw,340px)] transform transition-transform duration-300 hover:scale-105 lg:w-[min(32vw,340px)] xl:w-[440px] lg:hover:translate-x-2 lg:hover:translate-y-2 lg:hover:rotate-3"
        priority
      />
    </div>
  </div>
</section>


  );
}
