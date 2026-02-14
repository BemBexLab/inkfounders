import { title } from "process";

export const audiobookData = [
  {
    slug: "audiobook-narration",
    hero: {
      title: (
        <>
          Bring Your Story to Life with Professional<br></br>Audiobook Narration
        </>
      ),
      description:
        "Turn your book into a powerful listening experience with Ink Founders. We convert your manuscript into professional, immersive audio that captures attention from the first word.",
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "Flexible Audiobook Narration Options",
        intro:
          "Every author has a different vision. That's why we offer multiple narration styles:",
        options: [
          {
            title: "Author-Read",
            description:
              "You narrate your own story with professional recording and production support.",
            imgSrc: "/audiobooks/book.webp",
          },
          {
            title: "Actor-Read",
            description:
              "A trained voice actor performs your book with character depth and emotional range.",
            imgSrc: "/audiobooks/headphones.webp",
          },
          {
            title: "Narration With Musical Scoring",
            description:
              "Subtle background music enhances the listening experience and adds atmosphere.",
            imgSrc: "/audiobooks/audiochat.webp",
          },
        ],
        quote:
          '"We\'ve generated the highest number of demo requests of all time. It was a 20-30% increase."',
        button: {
          text: "Request a Call",
          link: "/contactus",
        },
      },
    ],
    imageDesc: [
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
    ],
  },
];
