import React from "react";


const OurBookHero = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden rounded-bl-[44px] bg-[#F4F3E1] px-4 py-10 sm:rounded-bl-[64px] sm:py-12 md:px-8 lg:rounded-bl-[100px] lg:py-16">
  {/* Main Container */}
  <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center">
    {/* Flex Container for All Layouts */}
    <div className="flex flex-col items-center justify-center w-full">
      {/* Text Content */}
      <div className="flex w-full flex-col items-center justify-center px-0 lg:px-[60px]">
        <h1 className="mb-0 text-center text-[26px] font-semibold leading-tight text-black sm:text-[30px] md:text-[35px] xl:text-[48px]">
          <span>
            Bring Your Book to Life
          </span>
        </h1>
      </div>
    </div>
  </div>
</section>

  );
};

export default OurBookHero;
