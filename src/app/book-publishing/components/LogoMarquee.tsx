import Image from "next/image";
import React from "react";

const logos = [
  { src: "/Home/sliding/logo01.webp", alt: "Logo 1" },
  { src: "/Home/sliding/logo02.webp", alt: "Logo 2" },
  { src: "/Home/sliding/logo03.webp", alt: "Logo 3" },
  { src: "/Home/sliding/logo04.webp", alt: "Logo 4" },
  { src: "/Home/sliding/logo05.webp", alt: "Logo 5" },
  { src: "/Home/sliding/logo06.webp", alt: "Logo 6" },
  { src: "/Home/sliding/logo07.webp", alt: "Logo 7" },
  { src: "/Home/sliding/logo08.webp", alt: "Logo 8" },
  { src: "/Home/sliding/logo09.webp", alt: "Logo 9" },
  { src: "/Home/sliding/logo10.webp", alt: "Logo 10" },
  { src: "/Home/sliding/logo11.webp", alt: "Logo 11" },
  { src: "/Home/sliding/logo12.webp", alt: "Logo 12" },
  { src: "/Home/sliding/logo13.webp", alt: "Logo 13" },
  { src: "/Home/sliding/logo14.webp", alt: "Logo 14" },
  { src: "/Home/sliding/logo15.webp", alt: "Logo 15" },
  { src: "/Home/sliding/logo16.webp", alt: "Logo 16" },
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
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={64}
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
