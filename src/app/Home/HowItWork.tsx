import React from 'react'
import { robotoMono } from '../fonts'

const HowItWork = () => {
  return (
    <section className="w-full bg-[#F4F3E1] py-20">
      <div className="max-w-[1250px] mx-auto px-2 flex flex-col items-center">
        {/* Headings */}
        <p className="text-center text-base text-[18px] md:text-[25px] font-semibold text-[#DADD39] mb-2">
          How It Works
        </p>
        <h2 className="text-center text-[23px] md:text-[35px] font-semibold mb-14 text-black">
          Your Publishing Journey With Ink Founders
        </h2>

        {/* Steps: Two vertical columns with timeline */}
        <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-start">
          {/* Left column: steps 1-4 */}
          <div className="flex flex-col relative gap-17">
            {/* Vertical line (behind circles) */}
            <div className="absolute left-5 top-7 bottom-15 w-[1px] bg-[#DADD39] opacity-40 z-0" />
            {/* Step 1 */}
            <div className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  01
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We Connect With Each Other
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] ${robotoMono.className} leading-loose`}>
                  We start with a consultation to understand your vision and goals. Share your story, ask questions, and let us tailor a publishing plan just for you.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  02
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We Connect With Each Other
                </h3>
                <p className={`text-[12px] md:text-[15px] ${robotoMono.className} text-[#444] font-mono leading-loose`}>
                  We dive into your book’s details—genre, audience, and unique needs—to create a personalized publishing plan that connects with the right readers.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normaltext-base text-[#222] font-mono z-10">
                  03
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We Handover Your Manuscript To Our Editing Team
                </h3>
                <p className={`text-[12px] md:text-[15px] ${robotoMono.className} text-[#444] font-mono leading-loose`}>
                  Our design team formats your manuscript to meet industry standards, ensuring a clean, professional look across print and digital platforms—inside and out.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex items-start relative z-10">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  04
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We Get The Formatting Done
                </h3>
                <p className={`text-[12px] md:text-[15px] ${robotoMono.className} text-[#444] font-mono leading-loose`}>
                  Our design team formats your manuscript to meet industry standards, ensuring a clean, professional look across print and digital platforms—inside and out.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: steps 5-7 */}
          <div className="flex flex-col relative mt-0 gap-17">
            {/* Vertical line (behind circles) */}
            <div className="absolute left-5 top-7 bottom-15 w-[1px] bg-[#DADD39] z-0" />
            {/* Step 5 */}
            <div className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  05
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  QA Keeps Everything In Check
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] font-mono leading-loose ${robotoMono.className}`}>
                  Our QA team carefully reviews your book to catch any remaining errors, confirm perfect formatting, and ensure the cover aligns seamlessly with the interior.
                </p>
              </div>
            </div>
            {/* Step 6 */}
            <div className="flex items-start relative z-10 mb-8">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  06
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  We Publish Your Book
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] font-mono leading-loose ${robotoMono.className}`}>
                  With everything finalized, we help you publish your book across major platforms and guide you through ISBN setup—getting your book ready for the global stage.
                </p>
              </div>
            </div>
            {/* Step 7 */}
            <div className="flex items-start relative z-10">
              <div className="flex flex-col items-center mr-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DADD39] font-normal text-base text-[#222] font-mono z-10">
                  07
                </span>
              </div>
              <div className='mt-2 ml-4'>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-black mb-1">
                  You Reap The Rewards!
                </h3>
                <p className={`text-[12px] md:text-[15px] text-[#444] font-mono leading-loose ${robotoMono.className}`}>
                  Celebrate your success! You’ll start earning royalties, and we’ll support you with marketing strategies to help your book thrive and reach its full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork