import React from "react";

const logos = [
  { src: "/Home/sliding/logo01.png", alt: "Logo 1" },
  { src: "/Home/sliding/logo02.png", alt: "Logo 2" },
  { src: "/Home/sliding/logo03.png", alt: "Logo 3" },
  { src: "/Home/sliding/logo04.png", alt: "Logo 4" },
  { src: "/Home/sliding/logo05.png", alt: "Logo 5" },
  { src: "/Home/sliding/logo06.png", alt: "Logo 6" },
  { src: "/Home/sliding/logo07.png", alt: "Logo 7" },
  { src: "/Home/sliding/logo08.png", alt: "Logo 8" },
  { src: "/Home/sliding/logo09.png", alt: "Logo 9" },
  { src: "/Home/sliding/logo10.png", alt: "Logo 10" },
  { src: "/Home/sliding/logo11.png", alt: "Logo 11" },
  { src: "/Home/sliding/logo12.png", alt: "Logo 12" },
  { src: "/Home/sliding/logo13.png", alt: "Logo 13" },
  { src: "/Home/sliding/logo14.png", alt: "Logo 14" },
  { src: "/Home/sliding/logo15.png", alt: "Logo 15" },
  { src: "/Home/sliding/logo16.png", alt: "Logo 16" },
];

const LogoMarquee = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-16">
      <div className="flex w-max animate-logo-marquee">
        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex min-w-max items-center gap-14 px-7"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-15 w-auto shrink-0 object-contain grayscale"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
