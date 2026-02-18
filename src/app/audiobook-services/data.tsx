import { desc } from "motion/react-client";
import { title } from "process";

export const audiobookData = [
  {
    slug: "audiobook-narration",
    hero: {
      title: (
        <>
          Audiobook Narration Services: Versatile Narration That Fits Your Story
        </>
      ),
      description:
        "Professional audiobook narration that converts your words into interetsing listening experiences. We help authors reach readers everywhere, through their ears.",
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "Your Book Deserves More Than Just Readers",
        intro:
          "We create audiobooks people actually enjoy listening to, in their cars, at the gym, or while doing dishes. Let's help your story reach them.",
        options: [
          {
            title: "The Signature Voice (Author-Led)",
            description:
              "Nothing beats the essence of the author. We give authors the space and guidance to record the narration of their own journey, to retain the essence of the story.",
            imgSrc: "/audiobooks/book.webp",
          },
          {
            title: "The Cinematic Performance (Professional Talent)",
            description:
              "Let a professional voice actor bring your characters to life. We assign voice actors who not only read words but perform the essence of your manuscript, the emotion, tension, and nuance.",
            imgSrc: "/audiobooks/headphones.webp",
          },
          {
            title: "Immersive Soundscapes (Audio Enrichment)",
            description:
              "Take the listening experience to the next level with a custom-composed layered musical score. From ambient tones to cinematic themes, we transform your audiobook into a theater of the ears.",
            imgSrc: "/audiobooks/audiochat.webp",
          },
        ],
        quote:
          '"Great narrators, clean sound, and a story that works everywhere, from morning commutes to late-night headphones.\nThat\'s what we do at Ink Founders."',
        button: {
          text: "Request a Call",
          link: "/contactus",
        },
      },
    ],
    imageDesc: [
      {
        title: "Audiobook Narration That Goes as Far as Your Story Does",
        paragraphs: [
          "Whether you are publishing your first book or your tenth, we are here to help you reach listeners all around the world. At Ink Founders, we produce audiobooks that sound professional, feel authentic, and actually get completed on time.",
          "What sets us apart is that we don’t just record your audiobook and be done with it. We will pair you with the right narrator, take care of all the technicalities, and make sure that the final product is something you are proud to put your name on.",
          "Fair prices. Real timelines. No runaround.",
        ],
        imgSrc: "/audiobooks/image2.webp",
        imgFirst: false,
      },
      {
        title: "Why Audiobooks? Because Your Readers Are Busy",
        paragraphs: [
          "We all know that people are listening more and reading less these days. Not because they don’t love books, but because life gets in the way. Audiobooks allow your story to go along for the ride during morning commutes, grocery shopping, and late-night dog walks. It’s your book, fitting into the pockets and schedules of people who want to read but can’t always find the time.",
          // "When you work with us, you join a supportive network of authors and creative professionals who care about storytelling. Let's turn your book into an audiobook listeners won't forget.",
        ],
        imgSrc: "/audiobooks/image1.webp",
        imgFirst: true,
      },
    ],
    contactData: {
      title: "Ready to Give Your Book a Voice?",
      description:
        "You wrote something worth reading. Now let's make it worth listening to.\nAt Ink Founders, we keep things simple. You bring the story, we bring the voice, and together we create something people will actually want to press play on. No confusing jargon, no endless back and forth, just a smooth process from manuscript to finished audiobook.",
    },
  },
  {
    slug: "audiobook-editing",
    hero: {
      title: <>Polish Your Audiobook Until It Sounds Just Right</>,
      description:
        "You have recorded your audiobook, now it's time to check whether it actually sounds professional. At Ink Founders we clean up the audio because we fix pacing issues and remove background noise and we smooth out any awkward pauses or stumbles.",
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "From Raw Recording to Ready-to-Publish",
        intro:
          "The goal? A listening experience that feels seamless, polished, and easy on the ears. Because even the best story can lose listeners if the audio quality is not there.",
        options: [
          {
            title: "Crystal Clear Audio Quality",
            description:
              "We clean up background noise, balance volume levels, and make sure every word comes through clearly, no matter what device your listeners are using.",
            imgSrc: "/audiobooks/musicalnotes.webp",
          },
          {
            title: "Smooth, Natural Pacing",
            description:
              "We fix all of that. Your narration will sound confident, polished, and easy to follow from start to finish.",
            imgSrc: "/audiobooks/pen.webp",
          },
          {
            title: "The Details Matter",
            description:
              "Every book is different, and we treat yours that way. We pay close attention to your audiobook needs because we need to adjust tone for emotional scenes and we need to clarify character voices and we need to double-check pronunciation of tricky terms.",
            imgSrc: "/audiobooks/microphonegear.webp",
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
        title: "We Make Sure Every Word Lands the Way You Meant It",
        paragraphs: (
          <>
            Recording an audiobook is one thing. The real work starts when we
            edit it into a product that people find enjoyable to listen to. At{" "}
            <a className="hover:underline hover:text-blue-500" href="/">
              Ink Founders
            </a>
            , we analyze your audio from start to finish while we identify all
            errors and adjust audio levels and format the audio to improve its
            flow and make every sentence sound natural. Your audiobook will be
            finished as you will take pride in presenting it to others.
          </>
        ),
        imgSrc: "/audiobooks/editting.webp",
        imgFirst: false,
      },
      {
        title: "Professional Audiobook Editing That Actually Gets Done",
        paragraphs: (
          <>
            At{" "}
            <a
              className="hover:text-blue-500 hover:underline"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ink Founders
            </a>
            , we don't overcomplicate things. You send us your audio files, we
            edit them, and you get back a polished, distribution ready
            audiobook. We move fast, we communicate clearly, and we don't charge
            you for a bunch of extras you don't need. Want to hear what we can
            do? We'll edit a sample chapter for free so you can decide if we are
            the right fit.
          </>
        ),
        imgSrc: "/audiobooks/edittor.webp",
        imgFirst: true,
      },
      {
        title: "We Handle All Kinds of Audiobook Editing",
        paragraphs: (
          <>
            No matter where your audiobook project stands, we offer professional
            audio editing services tailored to your needs:
            <ul className="list-disc list-inside text-[15px] text-[#333333] leading-relaxed mb-4">
              <li>
                <span className="font-bold">Audio Cleanup:</span> Remove noise, clicks, and distractions for a clean, professional sound.
              </li>
              <li>
                <span className="font-bold">Narration Editing:</span> Fix pacing, mistakes, and awkward pauses for a smooth listening experience.
              </li>
              <li>
                <span className="font-bold">Proof Listening:</span> Catch misreads and inconsistencies before release.
              </li>
              <li>
                <span className="font-bold">Mastering for Distribution:</span> Ensure your files meet distribution standards like ACX.
              </li>
            </ul>
            <p>
              Send us your audio files, and we’ll reply within 24 hours with a clear, straightforward quote. No hidden fees — just professional results.
            </p>
          </>
        ),
        imgSrc: "/audiobooks/audioeditting.webp",
        imgFirst: false,
      },
    ],
    contactData: {
      title: "Why Editing Matters More Than You Think",
      description:
        "Audiobook editing is not just about eliminating mistakes. It's about making your story sound the way you intended, clear, engaging, and professional. It's the difference between listeners sticking with your book or clicking away after the first chapter. At Ink Founders, we give value to your audiobook like it matters. Let's make it sound as good as it reads.",
    },
  },
  {
    slug: "audiobook-publishing",
    hero: {
      title: (
        <>We will Help You Publish an Audiobook That Actually Gets Heard</>
      ),
      description: (
        <>
          From finding the right narrator to getting your book on every major
          platform, we work on the details so you can focus on what matters,
          your story and your listeners.
          <br />
          At{" "}
          <a
            className="hover:text-blue-500 hover:underline"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ink Founders
          </a>
          , we help you to publish the audiobook that can be heard by people. We
          take care of all the technicalities of publishing and make your book
          able to stand in the digital audio market.
        </>
      ),
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "Pick the Voice That Fits Your Story Best",
        intro:
          "Not every book needs the same approach. Some authors want to narrate their own work, after all, who knows your story better than you? Others prefer a professional voice actor who can bring characters to life with different tones and emotions. And if you're working with a tight budget or timeline, AI narration has come a long way and might be exactly what you need.",
        options: [
          {
            title: "Clear Communication & Transparency:",
            description:
              "An effective audiobook publishing service delivers complete transparency throughout the entire process without any secret expenses or intricate terminology to create clear client communication.",
            imgSrc: "/audiobooks/audio.webp",
          },
          {
            title: "Technical Expertise & Quality Standards",
            description: (
              <>
                The process requires complete audio editing work together with
                correct Audible and Apple Books format implementation and
                professional audio mastering work done by someone who
                understands the essential technical specifications.
                {/* <br />A trustworthy company provides all necessary resources and
                expertise to deliver your book at an exceptional audio quality
                level which exceeds conventional standards. */}
              </>
            ),
            imgSrc: "/audiobooks/signals.webp",
          },
          {
            title: "Author Focused Support",
            description:
              "Publishing an audiobook can feel overwhelming, especially for first-time authors. The right team handles the entire process, guides you through every decision, and answers your questions without judgment. You deserve full support that respects your voice and is genuinely invested in your project’s success.",
            imgSrc: "/audiobooks/ear.webp",
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
        title: "Your Book, Your Way, From First Draft to Final Listen",
        paragraphs: (
          <>
            At{" "}
            <a
              className="hover:text-blue-500 hover:underline"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ink Founders
            </a>
            , we are here to help authors to convert manuscripts into audiobooks
            that people actually want to listen to. We handle book cover,
            narration, production, distribution, and even the marketing side of
            things. You bring the story, we bring the publishing expertise,
            simple as that.
            <br />
            <br />
            Choose the right voice with the right publishing company to make
            sure your audiobook lands on all the major platforms. We provide
            guidance at every stage. You can check out what we do at{" "}
            <a
              className="hover:text-blue-500 hover:underline"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ink Founders
            </a>
            , and let's get your book out there where listeners are waiting.
          </>
        ),
        imgSrc: "/audiobooks/edittorguy.webp",
        imgFirst: false,
      },
      {
        title: "Audiobook Publishing Without the Headaches",
        paragraphs: (
          <>
            Publishing an audiobook can feel overwhelming. There's recording,
            editing, formatting, distribution, and a dozen other things you
            probably didn't sign up for when you decided to write a book. That's
            where we come in.
            <br />
            <br />
            We have been doing this long enough to know what works and what
            doesn't. We will guide you through the whole process, handle the
            technical stuff, and make sure your audiobook sounds professional on
            every platform. You focus on your story. We take care of the rest.
            Ready to get started? Visit{" "}
            <a
              className="hover:text-blue-500 hover:underline"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ink Founders
            </a>{" "}
            and let's make your audiobook happen.
          </>
        ),
        imgSrc: "/audiobooks/scalebook.webp",
        imgFirst: true,
      },
    ],
    contactData: {
      title: "From Recording to Release, We have Got You",
      description: (
        <>
          Here's the thing: creating an audiobook isn't just about hitting
          "record." There's sound quality to think about, file formatting for
          different platforms, cover art, metadata, distribution to Audible,
          Apple Books, and everywhere else listeners go. It's a lot.
          <br />
          <br />
          That's why we built{" "}
          <a
            className="hover:text-blue-500 hover:underline"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ink Founders
          </a>{" "}
          to take that weight off your shoulders. You decide how you want your
          book to sound, and we make it happen. Then we get it out into the
          world so people can actually find it and listen to it. If you have
          been sitting on a finished manuscript wondering how to turn it into an
          audiobook, this is your sign. Let's get started.
        </>
      ),
    },
  },
];
