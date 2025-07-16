import React from 'react'
import { robotoMono } from '../fonts'
import AOSProvider from "@/components/AOSProvider";

const HowItWork = () => {
  return (
    <AOSProvider>
    <section className="w-full bg-[#F4F3E1] py-20">
      <div className="max-w-[1250px] mx-auto px-2 flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-base text-[18px] md:text-[25px] font-semibold text-[#DADD39] mb-2">
          Let’s find the way
        </p>
        <h2 className="text-center text-[23px] md:text-[35px] font-semibold mb-14 text-black">
          A pathway to turn your dreams into reality <br /> – a publishing process with Ink Founders
        </h2>

        {/* Steps: Two vertical columns with timeline */}
        <div className="w-full flex flex-col lg:flex-row gap-12 md:gap-24 justify-center items-start">
          {/* Left column: steps 1-4 */}
          <div className="flex flex-col relative gap-17">
            {/* Vertical line (behind circles) */}
            <div className="absolute left-5 top-7 bottom-48 w-[2px] bg-[#DADD39] opacity-40 z-0 hidden lg:block" />
            {/* Step 1 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  01
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  Start with an introduction to know each other 
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] ${robotoMono.className} leading-loose`}>
                  We begin with discussion to know each other, who you are as an author, what’s your ideas are about, where you want it to go and what do you expect us to follow, so it’s the time to ask questions and share your ideas and allow us to make a publishing path for you. 
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  02
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We gather the information that best describes your vision
                </h3>
                <p className={`text-[12px] md:text-[15px] ${robotoMono.className} text-[#444] font-mono leading-loose`}>
                  We start organizing a plan for you, once we get the details about your story’s genre, audience and the message, as whether it is non-fiction, fiction, historical or poetry. 
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normaltext-base text-[#222] font-mono z-10">
                  03
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  Experts take over the script, Page by page – perfection 
                </h3>
                <p className={`text-[12px] md:text-[15px] ${robotoMono.className} text-[#444] font-mono leading-loose`}>
                  We send your story to our qualified designing team that revive your story and rearrange it according to the standards, ensuring published look in all formats.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  04
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We put the soul in your story with formatting
                </h3>
                <p className={`text-[12px] md:text-[15px] ${robotoMono.className} text-[#444] font-mono leading-loose`}>
                  Now it’s time to give a fantastic structure to your story by professionally formatting the script, and designing a book cover page that not only captures the audience attention but also become the spirit of your story, so from the words to structure we take it with full concentration.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: steps 5-7 */}
          <div className="flex flex-col relative mt-0 gap-17">
            {/* Vertical line (behind circles) */}
            <div className="absolute left-5 top-7 bottom-40 w-[2px] bg-[#DADD39] opacity-40 z-0 hidden lg:block" />
            {/* Step 5 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  05
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  Quality Check is a priority followed by QA teams 
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] font-mono leading-loose ${robotoMono.className}`}>
                  We just don’t launch your book after all the processes but at this stage it undergoes a final check done by our quality assurance team to ensure that every process from editing to publishing everything goes according to the author.
                </p>
              </div>
            </div>
            {/* Step 6 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  06
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  Let’s make your story unforgettable – time to publish it
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] font-mono leading-loose ${robotoMono.className}`}>
                  Now, after all the finalization processes, it’s time to get your words into a book, witnessing your dream turning into reality. After approval your book got published on globally trending platforms, we also guide you through ISBN, selling set-up so that your book is more reachable and buyable. 
                </p>
              </div>
            </div>
            {/* Step 7 */}
            <div data-aos="fade-down-right" className="flex items-start relative z-10">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  07
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  Finally, you are an author – own your success 
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] font-mono leading-loose ${robotoMono.className}`}>
                  With a lot of overwhelming moments, now it’s time to cheer up as you are officially a published author. We support you at every moment even after publishing with post-launch strategies to grow your author brand. Now it’s time to get shine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AOSProvider>
  )
}

export default HowItWork