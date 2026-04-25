import Image from "next/image";

export default function FeatureCards() {
  const cards = [
    {
      title: "Compatibility",
      description:
        "The e-books we publish on all the popular e-book readers, mobile phones, tablets, & platforms.",
      bg: "bg-[#DADD39]",
      icon: "/landing-page/image 53.png",
      iconBg: "bg-[#F4F3E1]",
      textColor: "text-black",
      descColor: "text-[#1F1F1F]",
    },
    {
      title: "E-Book Publishing Platforms",
      description:
        "We ensure the publishing of your work on leading platforms such as Amazon Kindle, CreateSpace, etc.",
      bg: "bg-[#eef1d5]",
      icon: "/landing-page/image 54.png",
      iconBg: "bg-[#DADD39]",
      textColor: "text-black",
      descColor: "text-[#1F1F1F]",
    },
    {
      title: "Expert Book Publishers",
      description:
        "Our team of expert book publishers is well-aware of the eBook publishing platforms' technicalities.",
      bg: "bg-[#eef1d5]",
      icon: "/landing-page/image 55.png",
      iconBg: "bg-[#DADD39]",
      textColor: "text-black",
      descColor: "text-[#1F1F1F]",
    },
    {
      title: "Fast Turnaround",
      description:
        "We help your work get to the market fast. Our experts get eBooks published within 24-48 hours.",
      bg: "bg-[#DADD39]",
      icon: "/landing-page/image 56.png",
      iconBg: "bg-[#F4F3E1]",
      textColor: "text-black",
      descColor: "text-[#3a3a00]",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="grid w-full max-w-[560px] grid-cols-1 gap-4 min-[520px]:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.bg} flex min-h-[220px] flex-col gap-4 rounded-2xl p-5 sm:min-h-[240px] sm:gap-5 sm:p-6`}
          >
            <div
              className={`${card.iconBg} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14`}
            >
              <Image
                src={card.icon}
                width={1100}
                height={1100}
                alt=""
                className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3
                className={`${card.textColor} text-sm font-bold leading-snug sm:text-[17px]`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {card.title}
              </h3>
              <p
                className={`${card.descColor} text-sm leading-[1.75] sm:leading-[1.8]`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
