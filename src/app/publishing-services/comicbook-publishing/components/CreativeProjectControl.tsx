export default function CreativeProjectControl() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Styled H2 with Yellow Underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight inline-block">
            <span className="border-b-8 border-yellow-400 pb-2">
              Self-Publish Your Comic Book
            </span>
          </h2>
        </div>
        {/* Changed items-center to items-stretch so both columns match height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Image Column */}
          <div className="relative h-full">
            {/* Removed aspect ratio, added h-full */}
            <div className="h-full overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/comic-book/Rectangle 14 (6).svg"
                alt="Person browsing books in a bookstore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-2 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Keep Control of Your Creative Project
            </h3>

            <div className="space-y-2 text-gray-600 leading-relaxed text-base">
              <p>
                Many independent creators choose to self publish because they want greater control over their story, artwork, branding, and publishing decisions.
              </p>

              <p>
                But self-publishing doesn't mean you have to manage every technical step yourself.
              </p>

              <p className="font-medium text-gray-800">
                Ink Founders can provide professional support with:
              </p>
            </div>

            <ul className="space-y-2.5 text-gray-600 text-base">
              {[
                "Publishing preparation",
                "ISBN and barcode guidance",
                "Comic book formatting",
                "Cover design",
                "Print-on-demand preparation",
                "Digital publishing preparation",
                "Distribution preparation",
                "Marketing support",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 leading-relaxed text-base pt-2">
              You maintain control of your creative project while our team helps with the professional and technical side of preparing it for publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
