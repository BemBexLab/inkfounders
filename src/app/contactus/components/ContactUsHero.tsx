import React from "react";


const ContactUsHero = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#F4F3E1] rounded-bl-[100px] py-10 pt-40 md:pt-50">
  {/* Main Container */}
  <div className="relative z-10 w-full max-w-[1450px] mx-auto flex items-center justify-center">
    {/* Flex Container for All Layouts */}
    <div className="flex flex-col items-center justify-center w-full">
      {/* Text Content */}
      <div className="px-[60px] w-full flex flex-col items-center justify-center max-md:px-[15px]">
        <h1 className="text-[28px] md:text-[35px] xl:text-[48px] font-semibold leading-tight text-black mb-6 text-center">
          <span className="whitespace-nowrap">
            Contact Ink Founders
          </span>
        </h1>
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactUsHero;
