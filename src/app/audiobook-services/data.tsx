import { desc } from "motion/react-client";
import Link from "next/link";
import { title } from "process";

export const audiobookData = [
  {
    slug: "audiobook-narration",
    metaTitle:
      "Audiobook Narration Services: Hire a Voice Actor for Your Audiobook",
    metaDesc:
      "Ink Founders offers professional audiobook narration services, including a professional audiobook narrator for fiction and nonfiction.",
    hero: {
      title: (
        <>
          Audiobook Narration Services: Versatile Narration That Fits Your Story
        </>
      ),
      description:
        "Professional audiobook narration that turns your words into a listening experience people actually stick with. We help authors reach readers everywhere, through their ears.",
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "Your Book Deserves More Than Just Readers",
        intro:
          "We make audiobooks people genuinely enjoy listening to, in the car, at the gym, or while doing the dishes. Let's help your story reach them there.",
        options: [
          {
            title: "The Signature Voice (Author-Led)",
            description:
              "Nothing carries a book quite like the author's own voice. For writers who want an author-narrated audiobook production, we give you the space, coaching, and technical support to record it yourself, without sounding like an amateur recording.",
            imgSrc: "/audiobooks/book.webp",
          },
          {
            title: "The Cinematic Performance (Professional Talent)",
            description:
              "Prefer to hire a voice actor for your audiobook instead? We pair you with a professional narrator suited to your genre and characters, someone who can bring your book to life the way you imagined it, not just read it aloud.",
            imgSrc: "/audiobooks/headphones.webp",
          },
          {
            title: "Immersive Soundscapes (Audio Enrichment)",
            description:
              "For books that call for more than a single voice, we offer audiobook narration with sound design, including a custom-composed score and layered ambient audio that adds depth without pulling focus from the story.",
            imgSrc: "/audiobooks/audiochat.webp",
          },
        ],
        quote: (
          <>
            "Great narrators, clean sound, and a story that works everywhere,
            from morning commutes to late-night headphones. That's what we do at
            Ink Founders."
          </>
        ),
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
          <>
            Whether this is your first book or your tenth, we're here to help you reach listeners around the world. At Ink Founders, we run a full audiobook narration and production company built to deliver audiobooks that sound professional, feel authentic, and get finished on schedule.
          </>,
          <>
            What sets us apart is that we don't just record your audiobook and call it done. We match you with the right narrator, handle every technical detail, and make sure the finished product is something you're genuinely proud to put your name on. From a professional audiobook narrator for fiction to someone experienced in nonfiction narration, we find the right fit for your book, not just the next available voice.
          </>,
          "Fair prices. Real timelines. No runaround, which is why we're an affordable audiobook narration service that indie and self-published authors keep coming back to.",
        ],
        imgSrc: "/audiobooks/image2.webp",
        imgFirst: false,
      },
      {
        title: "Why Audiobooks? Because Your Readers Are Busy",
        paragraphs: [
          "People are listening more and reading less these days, not because they've stopped loving books, but because life gets in the way. Audiobooks let your story ride along during morning commutes, grocery runs, and late-night dog walks. It's your book, fitting into the pockets and schedules of people who want to read but can't always find the time.",
          "Whether you need a voice actor for audiobook characters in a novel or a straightforward, credible narrator for a nonfiction title, Ink Founders offers audiobook narration services for self-published authors across the USA, including our team based in Miami, Florida.",
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
    metaTitle: "Audiobook Editing & Post-Production Service: Mixing and Mastering",
    metaDesc: "Ink Founders offers professional audiobook editing, post-production, mixing, and mastering services, pacing fixes, noise removal, and ACX-ready files.",
    hero: {
      title: <>Polish Your Audiobook Until It Sounds Just Right</>,
      description: (
        <>
          You've recorded your audiobook. Now it's time to find out whether it actually sounds professional. At Ink Founders, our audiobook editing service cleans up the audio, fixes pacing issues, removes background noise, and smooths out any awkward pauses or stumbles.
        </>
      ),
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "From Raw Recording to Ready-to-Publish",
        intro:
          "The goal is simple: a listening experience that feels seamless, polished, and easy on the ears. Even the best story can lose listeners if the audio quality isn't there — which is exactly what our audiobook post-production service is built to fix.",
        options: [
          {
            title: "Crystal Clear Audio Quality",
            description:
              "We remove background noise, balance volume levels, and enhance clarity so every word sounds crisp, professional, and enjoyable to listen to.",
            imgSrc: "/audiobooks/musicalnotes.webp",
          },
          {
            title: "Smooth, Natural Pacing",
            description:
              "Clunky pauses and rushed delivery can distract listeners. We refine the pacing and flow to create a confident, polished narration that keeps your audience engaged from beginning to end.",
            imgSrc: "/audiobooks/pen.webp",
          },
          {
            title: "The Details Matter",
            description:
              "Every audiobook is unique, so we tailor the production to suit your book's tone, genre, and intended audience. From pronunciation to pacing, every detail is carefully reviewed to deliver a professional listening experience.",
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
            Recording an audiobook is one thing. The real work starts once we edit it into something people actually enjoy listening to. At Ink Founders, we go through your audio from start to finish, catching errors, adjusting audio levels, and shaping the flow of your book so every sentence sounds natural. When we're done, you'll have an audiobook you're proud to put your name on.
          </>
        ),
        imgSrc: "/audiobooks/editting.webp",
        imgFirst: false,
      },
      {
        title: "Professional Audiobook Editing That Actually Gets Done",
        paragraphs: (
          <div className="space-y-3">
           <p> We don't overcomplicate this. You send us your audio files, we edit them, and you get back a polished, distribution-ready audiobook — mixed, mastered, and formatted correctly for the platform you're publishing on. We move fast, communicate clearly, and don't charge you for extras you don't need. Want to hear what we can do first? We'll edit a sample chapter for free so you can decide if we're the right fit.</p>
           <p>Not sure how to find an audiobook editor for post-production, or what "post-production" even covers? It's everything between the raw recording and the finished file: cleanup, pacing, mixing, mastering, and formatting. That's what we handle, start to finish.</p>
          </div>
        ),
        imgSrc: "/audiobooks/edittor.webp",
        imgFirst: true,
      },
      {
        title: "We Handle All Kinds of Editing",
        paragraphs: (
          <>
            Depending on where your project stands, we offer:
            <ul className="list-disc list-inside text-[15px] text-[#333333] leading-relaxed my-2">
              <li>
                <span className="font-bold">Content Editing:</span> big-picture fixes for flow and structure
              </li>
              <li>
                <span className="font-bold">Line Editing:</span> sentence-level fixes for clarity and tone
              </li>
              <li>
                <span className="font-bold">Copyediting:</span> grammar, consistency, and technical accuracy
              </li>
              <li>
                <span className="font-bold">Proofreading:</span> a final pass to catch anything left
              </li>
            </ul>
            <h3 className="text-lg font-semibold">Audiobook Mixing, Mastering & File Prep:</h3>
            <p>
              Beyond line-by-line edits, our audiobook mixing and mastering service handles the technical side that determines whether your file actually gets accepted where you want to publish it:
            </p>
            <ul className="list-disc list-inside text-[15px] text-[#333333] leading-relaxed my-2">
              <li>
                <span className="font-bold">Audiobook cleanup and mastering:</span> leveling volume, removing hiss and room noise, and matching audio quality across every chapter, even if takes were recorded on different days or equipment
              </li>
              <li>
                <span className="font-bold">ACX audiobook editing:</span> files formatted to ACX's technical specs (RMS levels, peak levels, noise floor, and file format), so your audiobook doesn't get bounced back for a re-upload
              </li>
              <li>
                <span className="font-bold">Audiobook editing with music score:</span> for books that call for an intro, outro, or light scoring throughout
              </li>
              <li>
                <span className="font-bold">Metadata cleanup:</span> making sure chapter titles, track names, and file metadata are accurate and consistent before you upload
              </li>
            </ul>
          </>
        ),
        imgSrc: "/audiobooks/audioeditting.webp",
        imgFirst: false,
      },
    ],
    contactData: {
      title: "Why Editing Matters More Than You Think",
      description:
        "Audiobook editing is not just about eliminating mistakes. It's about making your story sound the way you intended, clear, engaging, and professional. It's the difference between listeners sticking with your book or clicking away after the first chapter. At Ink Founders, we give value to your audiobook as it matters. Let's make it sound as good as it reads.",
    },
  },
  {
    slug: "audiobook-publishing",
    metaTitle: "Audiobook Publishing Service: How to Publish an Audiobook on Audible",
    metaDesc: "Ink Founders is an audiobook publishing service that handles narration, production, and distribution on Audible, ACX, Spotify, and Amazon.",
    hero: {
      title: (
        <>We'll Help You Publish an Audiobook That Actually Gets Heard</>
      ),
      description: (
        <>
          From finding the right narrator to getting your book on every major platform, we handle the details so you can focus on what matters: your story and your listeners. At Ink Founders, our audiobook publishing service takes care of the technical side of publishing, so your book can actually compete in the digital audio market, not just exist somewhere in it.
        </>
      ),
      buttonText: "Request a Call",
      buttonLink: "/contactus",
    },
    narration: [
      {
        header: "Pick the Voice That Fits Your Story Best",
        intro:
          "Not every book needs the same approach. Some authors want to narrate their own work; after all, who knows your story better than you? Others prefer a professional voice actor who can bring characters to life through tone and emotion. And if you're working with a tight budget or timeline, AI narration has come a long way and, for the right project, might be worth considering too.",
        options: [
          {
            title: "Clear Communication & Transparency:",
            description:
              "A trustworthy audiobook publishing service is upfront about every stage of the process, with clear timelines, transparent pricing, and no hidden costs or surprise fees.",
            imgSrc: "/audiobooks/audio.webp",
          },
          {
            title: "Technical Expertise & Quality Standards",
            description: (
              <>
                Professional production includes expert audio editing, mastering, and formatting that meets the technical requirements of Audible, ACX, Apple Books, and other major audiobook platforms.
              </>
            ),
            imgSrc: "/audiobooks/signals.webp",
          },
          {
            title: "Author Focused Support",
            description:
              "Publishing an audiobook for the first time can feel overwhelming. The right team provides expert guidance, answers your questions, and manages the technical details so you can publish with confidence.",
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
          <p>
            At{" "}
            <Link className="inline text-blue-500 hover:underline" href="/">
              Ink Founders
            </Link>
            , we are here to help authors convert manuscripts into audiobooks
            that people actually want to listen to. We handle book cover,
            narration, production, distribution, and even the marketing side of
            things. You bring the story, we bring the publishing expertise,
            simple as that. Choose the right voice with the right publishing
            company to make sure your audiobook lands on all the major
            platforms. We provide guidance at every stage. You can check out
            what we do at{" "}
            <a
              href="https://share.google/i7yXrn8AiGA5wvzYJ"
              className="inline font-bold text-inherit"
            >
              Ink Founders
            </a>
            , and let's get your book out there where listeners are waiting.
          </p>
        ),
        imgSrc: "/audiobooks/edittorguy.webp",
        imgFirst: false,
      },
      {
        title: "Audiobook Publishing Without the Headaches",
        paragraphs: (
          <>
            Publishing an audiobook can feel like a lot: recording, editing, formatting, distribution, and a dozen other things you probably didn't sign up for when you decided to write a book. That's where we come in. We've done this enough times to know what works and what doesn't. <br />
           If you're wondering how to publish an audiobook on Audible, ACX, Amazon, or Spotify, here's the short version of how we help:
           <ul className="list-disc list-inside text-[15px] text-[#333333] leading-relaxed my-2">
              <li>
                <span className="font-bold">Publish on ACX and Audible:</span> we prepare and submit your files to meet ACX's technical requirements, so your audiobook goes live without getting bounced back
              </li>
              <li>
                <span className="font-bold">Get your audiobook on Spotify and Audible:</span> we're not limited to a single platform; we help you show up where your readers actually are
              </li>
              <li>
                <span className="font-bold">Self-publish without ACX exclusivity:</span> if you'd rather keep the rights to distribute your book across multiple platforms instead of locking into one, we'll walk you through that option.
              </li>
              <li>
                <span className="font-bold">Amazon audiobook publishing:</span> for authors who want their audiobook listed alongside their existing ebook or paperback
              </li>
              <li>
                <span className="font-bold">Audiobook publishing for first-time authors:</span> plain-language guidance if this is your first time doing any of this
              </li>
              <li>
                <span className="font-bold">Audiobook publishing for nonfiction:</span> the same process applies whether you've written a novel or a nonfiction title.
              </li>
              <li>
                <span className="font-bold">Audiobook publishing and marketing:</span> getting listed is one thing; we also help your book actually get discovered once it's live.
              </li>
            </ul>
          </>
        ),
        imgSrc: "/audiobooks/scalebook.webp",
        imgFirst: true,
      },
    ],
    contactData: {
      title: "From Recording to Release, We Have Got You.",
      description: (
        <>
          Here's the thing: creating an audiobook isn't just about hitting
          "record." There's sound quality to think about, file formatting for
          different platforms, cover art, metadata, distribution to Audible,
          Apple Books, and everywhere else listeners go. It's a lot. <br />
          That's why we built{" "}
          <a className="text-blue-800 hover:underline" href="/">
            Ink Founders
          </a>{" "}
          to take that weight off your shoulders. You decide how you want your
          book to sound, and we make it happen. Then we get it out into the
          world so people can actually find it and listen to it. If you have
          been sitting on a finished manuscript,t wondering how to turn it into
          an audiobook, this is your sign. Let's get started.
        </>
      ),
    },
  },
];
