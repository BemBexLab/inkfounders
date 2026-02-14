"use client";

import { robotoMono } from '@/app/fonts';
import React from 'react';

const Testimonials = () => {
    const testimonials = [
    {
      id: 1,
      quote: "Ink Founder didn't just publish my book — they helped me promote it too. Their team gave me great advice on building my marketing from the ground up, including social media...",
      name: "Noel Jensen",
      role: "Great Writer",
      image: "/Home/Frame 66 (1).png"
    },
    {
      id: 2,
      quote: "Ink Founder made the whole process easy for me. They not only published my book but also showed me how to market it, build my brand, and reach the right readers for real results",
      name: "Sarita Espiricueta",
      role: "Great Writer",
      image: "/Home/Frame 66 (2).png"
    },
    {
      id: 3,
      quote: "Thanks to Ink Founder, my book launch was a smooth experience. They helped me every step of the way—from publishing and promotion to building my author brand and connecting with new fans",
      name: "Michael Gordon",
      role: "Great Writer",
      image: "/Home/Frame 66.png"
    },
    {
      id: 4,
      quote: "The publishing process was seamless with Ink Founder. Their team provided excellent guidance throughout, making my author journey truly rewarding and stress-free.",
      name: "Nick john",
      role: "Bestselling Author",
      image: "/Home/review.png"
    },
    {
      id: 5,
      quote: "Ink Founder guided me through every stage of publishing my book. They made the entire process simple and stress-free—from editing and design to launching, promoting.",
      name: "Edward grey",
      role: "Professional Writer",
      image: "/Home/review2.png"
    },
    {
      id: 6,
      quote: "Partnering with Ink Founder turned my draft into a polished, professionally published work. Their care for details and help for authors is truly outstanding.",
      name: "Tom peter",
      role: "Award-winning Author",
      image: "/Home/review3.png"
    }
  ];

  const [currentPage, setCurrentPage] = React.useState(0);
  const [cardsPerPage, setCardsPerPage] = React.useState(3);

  // Update cards per page based on screen size
  React.useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // Tablet: 2 cards
      } else {
        setCardsPerPage(3); // Desktop: 3 cards
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const length = testimonials.length;
  const pageCount = Math.ceil(length / cardsPerPage);

  const nextSlide = () => {
    setCurrentPage((p) => (p + 1) % pageCount);
  };
  const prevSlide = () => {
    setCurrentPage((p) => (p - 1 + pageCount) % pageCount);
  };

  // Reset to first page when cardsPerPage changes
  React.useEffect(() => {
    setCurrentPage(0);
  }, [cardsPerPage]);

  // Auto advance every 5 seconds
  React.useEffect(() => {
    const id = setInterval(nextSlide, 5000);
    return () => clearInterval(id);
  }, [pageCount]);

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg lg:text-[20px] text-[#000000] mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1F1F1F] px-4">
            Read Testimonials From Our Happy Customers
          </h2>
        </div>

        {/* Slider wrapper */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12">
          {/* Slides container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className={`flex-shrink-0 px-2 sm:px-3 lg:px-4 ${
                    cardsPerPage === 1 
                      ? 'w-full' 
                      : cardsPerPage === 2 
                      ? 'w-1/2' 
                      : 'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 max-w-[360px] mx-auto shadow-sm">
                    {/* Quote Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e8e55f] rounded-full flex items-center justify-center mb-5 sm:mb-6">
                      <span className="text-[20px] sm:text-[24px] font-bold text-[#1a1a1a]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 28 21"
                          fill="none"
                          className="sm:w-5 sm:h-5"
                        >
                          <path
                            d="M6.52427 21C5.11974 21 3.91909 20.658 2.92233 19.9739C1.97087 19.2443 1.24595 18.2866 0.747573 17.101C0.249191 15.9153 0 14.6384 0 13.2704C0 11.355 0.385113 9.55375 1.15534 7.86645C1.92557 6.13355 2.94498 4.58306 4.21359 3.21499C5.52751 1.84691 7.02265 0.775245 8.69903 0L12.7087 3.21499C11.4854 3.67101 10.3527 4.28665 9.31068 5.06189C8.31392 5.79153 7.45307 6.61238 6.72816 7.52443C6.04854 8.43648 5.52751 9.37134 5.16505 10.329L5.50485 10.5342C5.73139 10.3518 6.00324 10.215 6.32039 10.1238C6.63754 10.0326 7.09061 9.98697 7.67961 9.98697C8.40453 9.98697 9.12945 10.1922 9.85437 10.6026C10.5793 10.9674 11.1909 11.5375 11.6893 12.3127C12.1877 13.0423 12.4369 13.9772 12.4369 15.1173C12.4369 16.3485 12.165 17.3974 11.6214 18.2638C11.0777 19.1303 10.3528 19.8143 9.4466 20.316C8.58576 20.772 7.61165 21 6.52427 21ZM21.7476 21C20.343 21 19.1424 20.658 18.1456 19.9739C17.1942 19.2443 16.4693 18.2866 15.9709 17.101C15.4725 15.9153 15.2233 14.6384 15.2233 13.2704C15.2233 11.355 15.6084 9.55375 16.3786 7.86645C17.1489 6.13355 18.1683 4.58306 19.4369 3.21499C20.7508 1.84691 22.246 0.775245 23.9223 0L28 3.21499C26.7767 3.67101 25.644 4.28665 24.6019 5.06189C23.5599 5.79153 22.6764 6.61238 21.9515 7.52443C21.2718 8.43648 20.7508 9.37134 20.3883 10.329L20.7282 10.5342C20.9547 10.3518 21.2265 10.215 21.5437 10.1238C21.8608 10.0326 22.3139 9.98697 22.9029 9.98697C23.6278 9.98697 24.3528 10.1922 25.0777 10.6026C25.8026 10.9674 26.4142 11.5375 26.9126 12.3127C27.411 13.0423 27.6602 13.9772 27.6602 15.1173C27.6602 16.3485 27.3883 17.3974 26.8447 18.2638C26.3463 19.1303 25.644 19.8143 24.7379 20.316C23.8317 20.772 22.835 21 21.7476 21Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <p className={`${robotoMono.className} text-sm sm:text-[15px] text-[#333333] leading-relaxed mb-6 sm:mb-8`}>
                      {t.quote}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm sm:text-[15px] font-semibold text-[#1a1a1a]">
                          {t.name}
                        </p>
                        <p className={`${robotoMono.className} text-xs sm:text-[13px] text-[#666666]`}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 flex-nowrap">
          {Array.from({ length: pageCount }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentPage
                  ? 'bg-[#e8e55f] w-3 h-3 sm:w-4 sm:h-4'
                  : 'bg-[#D9D9D9] w-2 h-2'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;