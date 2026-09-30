const services = [
  "Story development",
  "Manuscript development",
  "Script writing",
  "Editing and proofreading",
  "Interior formatting",
  "Cover design",
  "Print preparation",
  "Digital preparation",
  "Publishing support",
  "Marketing support",
];

export default function GraphicNovelPublishing() {
  return (
    <section className="min-h-screen w-full min-w-0 bg-[#f5f0e8] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20 xl:py-24">
      <div className="mx-auto w-full max-w-7xl [overflow-wrap:anywhere]">
        {/* Responsive heading with a wrapping underline */}
        <header className="mb-8 text-center sm:mb-10 lg:mb-14 xl:mb-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.4] tracking-tight text-gray-900">
            <span className="underline decoration-yellow-400 decoration-[4px] underline-offset-[6px] [text-decoration-skip-ink:none] sm:decoration-[6px] sm:underline-offset-8 lg:decoration-[8px]">
              Graphic Novel Publishing Services
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Proportional on mobile; matches content height on desktop */}
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden lg:aspect-auto lg:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200"
              alt="Graphic Novel Publishing Mockup"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 block h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full min-w-0 space-y-4 text-sm leading-6 text-gray-700 sm:space-y-5 sm:text-base sm:leading-7">
            <h3 className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-semibold leading-tight text-gray-900">
              Turn Your Long Form Story Into a Finished Graphic Novel
            </h3>

            <p>
              Graphic novels combine long-form storytelling, artwork, typography,
              panel layouts, and professional book production.
            </p>

            <p>
              That means the publishing process needs careful coordination between
              the manuscript, artwork, page design, cover, and final production
              files.
            </p>

            <div>
              <p className="mb-3">
                Our graphic novel publishing support can include:
              </p>

              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <span aria-hidden="true" className="shrink-0">
                      •
                    </span>

                    <span className="min-w-0 flex-1">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              From an early manuscript to a finished graphic novel, we can help
              you move through the major stages of the publishing process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}