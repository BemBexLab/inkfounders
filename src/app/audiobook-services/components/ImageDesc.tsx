import React from "react";

const ImageDesc = () => {
  const sections = [
    {
      title: "Worldwide Audiobook Narration Services",
      paragraphs: [
        "At Ink Founders, we provide professional audiobook narration services to authors across the globe. Our experienced voice talent brings energy, clarity, and emotion to every project, helping your story connect with listeners wherever they are.",
        "Whether your project is large or small, we deliver reliable service, competitive pricing, and efficient turnaround times without compromising quality. Our goal is simple: transform your manuscript into a polished audio production that resonates with audiences everywhere.",
        "We combine strong creative direction with technical precision, ensuring your audiobook meets professional standards and stands out in a growing market. If you're ready to share your story in a new way, we're ready to help.",
      ],
      imgSrc: "/audiobooks/image2.webp",
      imgFirst: false,
    },
    {
      title: "Have A Book? Let's Give It A Voice.",
      paragraphs: [
        "A compelling narrator can elevate your book into a memorable listening experience. At Ink Founders, we understand how important it is to match the right voice with the right story.",
        "We keep the process clear and straightforward, guiding you from narration selection through final production. You stay involved at every stage while we handle the technical details.",
        "When you work with us, you join a supportive network of authors and creative professionals who care about storytelling. Let's turn your book into an audiobook listeners won't forget.",
      ],
      imgSrc: "/audiobooks/image1.webp",
      imgFirst: true,
    },
  ];

  return (
    <section>
      <div className="bg-[#f0eedd] min-h-screen flex justify-center py-16 px-8">
        <div className="max-w-[1400px] mx-10">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-16 mb-24 ${
                sec.imgFirst ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text content */}
              <div className="flex-1 max-w-[520px]">
                <h1 className="text-[28px] font-semibold text-[#1a1a1a] mb-6 leading-tight">
                  {sec.title}
                </h1>
                <div className="space-y-5 text-[15px] text-[#333333] leading-relaxed">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={sec.imgSrc} alt="" className="w-full h-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageDesc;
