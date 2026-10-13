type MapProps = {
  googleMapsLink?: string;
  locationQuery: string;
  title?: string;
  className?: string;
};

function buildEmbedUrl(locationQuery: string) {
  return `https://www.google.com/maps?output=embed&q=${encodeURIComponent(
    locationQuery,
  )}`;
}

export default function Map({
  googleMapsLink,
  locationQuery,
  title = "Our location",
  className = "",
}: MapProps) {
  const embedUrl = buildEmbedUrl(locationQuery);
  const mapsHref =
    googleMapsLink ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      locationQuery,
    )}`;

  return (
    <section className={`bg-[#f7f3ea] px-4 py-12 sm:px-6 lg:px-8 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
        {/* <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
              Visit Us
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-black sm:text-3xl">
              {title}
            </h2>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
          >
            Open in Google Maps
          </a>
        </div> */}

        <div className="h-[360px] w-full sm:h-[460px]">
          <iframe
            title={title}
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
