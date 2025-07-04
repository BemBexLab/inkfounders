import Image from "next/image";

const AUTHORS = [
  {
    name: "Donald Ennis",
    photo: "/ourpublishers/Rectangle 10 (2).png",
    book: "HOT NIGHTS COLD DAYS",
  },
  {
    name: "Lisa Stalvey Coady",
    photo: "/ourpublishers/Rectangle 101.png", // blank for placeholder
    book: "The Thoughtful Chef : How the Connection of Spirituality, Great Energy and Good Clean Organic Food Become One",
  },
  {
    name: "Beth Gardner",
    photo: "/ourpublishers/Rectangle 10 (3).png",
    book: "One Rowing Stroke at a Time – Surviving Stage 3 Breast Cancer for 20-Years",
  },
  {
    name: "Elizabeth Dooley",
    photo: "/ourpublishers/Rectangle 10 (4).png",
    book: "Fern Valley Ventures: Volume 1",
  },
  {
    name: "Jack CartwrightJack",
    photo: "/ourpublishers/8c3kdpse8aad2e1pak0pe7sib._SY600_.jpg", // blank for placeholder
    book: "Deadly Little Secret/The Harder They Fall and other",
  },
  {
    name: "Ana Jorda",
    photo: "/ourpublishers/Rectangle 10 (5).png",
    book: "Language of a Silence",
  },
];

const placeholder = "/authors/placeholder.png"; // Use a default placeholder image

const Publishers = () => (
  <section className="w-full my-[100px] flex flex-col items-center">
    <div>
      <h1 className="text-black text-lg md:text-xl font-semibold mb-20">Meet Our Publising Partners</h1>
    </div>
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2">
      {AUTHORS.map((author, idx) => (
        <div
          key={idx}
          className="
          flex flex-row
           rounded-2xl 
          px-3 sm:px-4 py-4 items-center gap-3 sm:gap-4
          min-h-[170px] sm:min-h-[160px]
        "
        >
          {/* Image or placeholder */}
          <div className="flex-shrink-0 w-[170px] h-[170px]  overflow-hidden bg-[#F6F5F3] flex items-center justify-center">
            {author.photo ? (
              <Image
                src={author.photo}
                alt={author.name}
                width={250}
                height={250}
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <Image
                src={placeholder}
                alt="Author Placeholder"
                width={70}
                height={70}
                className="object-contain opacity-80"
              />
            )}
          </div>
          {/* Text Content */}
          <div className="flex-1 flex flex-col h-full justify-between py-1 w-full">
            <div>
              <h3 className="font-bold text-[16px] sm:text-[17px] mb-0.5 text-black">
                {author.name}
              </h3>
              <div className="text-[#666] text-[13px] sm:text-[14px] mb-1 font-medium">
                Author of
              </div>
              <div className="text-[#222] text-[13px] sm:text-[14px] font-mono leading-snug ">
                {author.book}
              </div>
              {/* <button
                className="
    btn-slide-bg
    mt-3
    bg-[#DADD39]
    text-black
    font-medium
    rounded-md
    px-4 sm:px-5 py-2
    text-[14px] sm:text-[15px]
    shadow-none
    transition-all duration-300
    hover:border hover:border-black
    w-max self-start
    border border-[#DADD39]
  "
              >
                <span className="slide-bg rounded-md"></span>
                <span className="relative z-10">View More</span>
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Publishers;
