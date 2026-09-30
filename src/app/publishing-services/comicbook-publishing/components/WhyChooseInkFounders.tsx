import { HiOutlineStar, HiOutlineCheckCircle } from "react-icons/hi2";

const features = [
  {
    title: "End to End Publishing Support",
    description:
      "Get support across writing, editing, design, formatting, publishing, and promotion.",
  },
  {
    title: "Our Approach",
    description:
      "Your story, characters, artwork, and creative direction remain central to the project.",
  },
  {
    title: "Support at Different Stages",
    description:
      "Whether you have an idea, script, artwork, or completed comic, we can help identify the next step.",
  },
  {
    title: "Professional Production Support",
    description:
      "Prepare your comic with professional editing, design, formatting, and publishing preparation.",
  },
  {
    title: "Clear Communication",
    description:
      "Understand what stage your project is in and what needs to happen next.",
  },
];

export default function WhyChooseInkFounders() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#f5f3e8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-100/50 opacity-60 blur-3xl sm:-right-20 sm:-top-20 sm:h-72 sm:w-72 lg:h-96 lg:w-96" />

        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#e3dfce] opacity-50 blur-3xl sm:-left-20 sm:h-96 sm:w-96 lg:-bottom-32 lg:h-[500px] lg:w-[500px]" />

        <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-[#dcd8c4] opacity-40 blur-3xl sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl [overflow-wrap:anywhere]">
        {/* Header */}
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.4] tracking-tight text-gray-900">
            <span className="underline decoration-yellow-400 decoration-[4px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[6px] sm:underline-offset-8 lg:decoration-[8px]">
              Why Choose Ink Founders?
            </span>
          </h2>

          <p className="mb-5 mt-5 text-[clamp(1.25rem,2.5vw,1.875rem)] font-semibold leading-tight text-[#2d2d2d] sm:mb-6 sm:mt-6 lg:mb-8">
            One Team for Your Comic Publishing Journey!
          </p>

          <div className="max-w-3xl space-y-3 text-sm leading-6 text-[#4a4a4a] sm:space-y-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            <p>
              Publishing a comic can involve{" "}
              <span className="font-semibold text-[#1a1a1a]">
                writers, editors, designers, artists, formatters, publishers,
                and marketing professionals
              </span>
              .
            </p>

            <p>
              Working with{" "}
              <span className="rounded bg-yellow-200/50 px-1.5 font-semibold text-[#1a1a1a] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                one publishing team
              </span>{" "}
              can make it easier to coordinate these different stages.
            </p>
          </div>
        </header>

        {/* Support cards */}
        <div>
          <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3 lg:mb-6">
            <HiOutlineStar
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-yellow-500 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
            />

            <h3 className="text-xl font-bold leading-tight text-[#1a1a1a] sm:text-2xl">
              Our Support
            </h3>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:gap-6">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex min-w-0 items-start gap-3 rounded-xl border border-[#e5e3d6] bg-white p-4 transition duration-300 hover:border-yellow-400 hover:shadow-md motion-reduce:transition-none sm:gap-4 sm:p-5 lg:p-6"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-yellow-100 bg-yellow-50 sm:h-10 sm:w-10">
                  <HiOutlineCheckCircle
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-600 sm:h-6 sm:w-6"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="mb-1.5 text-base font-semibold leading-snug text-[#1a1a1a] sm:mb-2">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-6 text-[#5a5a5a]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}