import { robotoMono } from "@/app/fonts";
import Image from "next/image";


export default function ExportSelfBook() {
  return (
    <section className="w-full bg-[#F6F5F3] py-20">
  <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
    
    {/* Content */}
    <div className="max-w-3xl md:pr-20">
      <h2 className="text-2xl md:text-[27px] font-semibold text-black mb-8">
        Use Expert Self-Book Publishing Services To Preserve Your Legacy!
      </h2>
      <div className={`${robotoMono.className} space-y-6 text-gray-700 text-[12px] md:text-[13px] leading-loose`}>
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
    <div className="flex-shrink-0">
      <Image
        src="/Service/FpAHhfZ_TjWNBkXgQgFtnQ 2.png"
        alt="Book Cover"
        width={440}
        height={440}
        className="transition-transform transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:rotate-3"
        priority
      />
    </div>
  </div>
</section>


  );
}