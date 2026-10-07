import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  decodeHtmlEntities,
  formatDate,
  getFeaturedImageFromPost,
  getPostBySlug,
  getReadingTime,
  stripInlineStyles,
} from "../wpPosts";
import {
  createCanonicalMetadata,
  getCanonicalUrl,
  SOCIAL_IMAGE_URL,
} from "@/lib/seo";

export const revalidate = 300;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title =
    decodeHtmlEntities(
      post.yoast_head_json?.title ||
        post.title?.rendered ||
        "Inkfounders Blog",
    ) || "Inkfounders Blog";

  const description =
    decodeHtmlEntities(
      post.yoast_head_json?.description ||
        post.excerpt?.rendered ||
        post.content?.rendered ||
        "",
    ) || undefined;

  const canonicalUrl = getCanonicalUrl(`/blog/${slug}`);

  return {
    title,
    description,
    ...createCanonicalMetadata(`/blog/${slug}`),
    openGraph: {
      type: "article",
      title: decodeHtmlEntities(
        post.yoast_head_json?.og_title || post.title?.rendered || title,
      ),
      description:
        decodeHtmlEntities(
          post.yoast_head_json?.og_description || description || "",
        ) || undefined,
      url: canonicalUrl,
      publishedTime:
        post.yoast_head_json?.article_published_time || post.date || undefined,
      modifiedTime:
        post.yoast_head_json?.article_modified_time ||
        post.modified ||
        post.date ||
        undefined,
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 192,
          height: 87,
          alt: "Ink Founders logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE_URL],
    },
  };
}

function formatWpContent(html: string) {
  const withClasses = (
    source: string,
    tagName: string,
    classes: string,
  ) =>
    source.replace(
      new RegExp(`<${tagName}\\b([^>]*?)(\\/?)>`, "gi"),
      (match, attrs = "", selfClose = "") => {
        if (/class\s*=/i.test(attrs)) {
          return match.replace(
            /class=(["'])(.*?)\1/i,
            (_match: string, quote: string, existing: string) =>
              `class=${quote}${existing} ${classes}${quote}`,
          );
        }

        const classAttr = ` class="${classes}"`;
        return selfClose
          ? `<${tagName}${attrs}${classAttr} />`
          : `<${tagName}${attrs}${classAttr}>`;
      },
    );

  let formatted = html;

  formatted = withClasses(
    formatted,
    "h1",
    "mt-14 mb-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-neutral-950 md:text-5xl",
  );
  formatted = withClasses(
    formatted,
    "h2",
    "mt-14 mb-5 text-[30px] font-bold leading-tight tracking-[-0.025em] text-neutral-950 md:text-4xl",
  );
  formatted = withClasses(
    formatted,
    "h3",
    "mt-10 mb-4 text-2xl font-bold leading-tight tracking-[-0.02em] text-neutral-950 md:text-[28px]",
  );
  formatted = withClasses(
    formatted,
    "h4",
    "mt-8 mb-3 text-xl font-bold leading-snug text-neutral-950",
  );
  formatted = withClasses(
    formatted,
    "p",
    "mb-7 text-[17px] leading-8 text-neutral-700 md:text-[18px] md:leading-9",
  );
  formatted = withClasses(
    formatted,
    "strong",
    "font-semibold text-neutral-950",
  );

  // Lists: modern editorial cards for unordered lists and cleaner numbered lists.
  // WordPress content often ships without explicit list-style classes, so the
  // unordered list uses a custom accent dot rather than relying on browser bullets.
  formatted = withClasses(
    formatted,
    "ul",
    "mb-10 space-y-3 pl-0 text-[17px] leading-7 text-neutral-700 md:text-[18px] md:leading-8 [&>li]:relative [&>li]:list-none [&>li]:rounded-2xl [&>li]:border [&>li]:border-neutral-200/80 [&>li]:bg-white [&>li]:py-4 [&>li]:pl-12 [&>li]:pr-5 [&>li]:shadow-[0_1px_2px_rgba(0,0,0,0.03)] [&>li]:transition-all [&>li]:duration-200 [&>li:hover]:border-neutral-300 [&>li:hover]:shadow-[0_10px_30px_-24px_rgba(0,0,0,0.35)] [&>li]:before:absolute [&>li]:before:left-5 [&>li]:before:top-[1.45rem] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-[#D4D939] [&>li]:before:shadow-[0_0_0_5px_rgba(212,217,57,0.18)]",
  );
  formatted = withClasses(
    formatted,
    "ol",
    "mb-10 list-decimal space-y-3 pl-7 text-[17px] leading-7 text-neutral-700 marker:font-bold marker:text-[#9EA51A] md:text-[18px] md:leading-8 [&>li]:pl-2",
  );
  formatted = withClasses(formatted, "li", "leading-relaxed");

  formatted = withClasses(
    formatted,
    "a",
    "font-medium text-neutral-950 underline decoration-[#D4D939] decoration-2 underline-offset-4 transition-colors hover:text-neutral-600",
  );

  formatted = withClasses(
    formatted,
    "blockquote",
    "my-10 border-l-[3px] border-[#D4D939] bg-[#F8F8F1] px-6 py-5 text-xl font-medium italic leading-8 text-neutral-800 md:px-8 md:text-2xl md:leading-9",
  );

  // Tables: flat editorial treatment — no cards, no rounded corners, no
  // decorative bullets. Strong rules and restrained brand accents keep it clean.
  formatted = withClasses(
    formatted,
    "table",
    "m-0 w-full min-w-[760px] table-fixed border-collapse text-left",
  );
  formatted = withClasses(
    formatted,
    "thead",
    "border-b-2 border-neutral-950 bg-[#F7F7EC]",
  );
  formatted = withClasses(
    formatted,
    "th",
    "px-6 py-5 text-[12px] font-bold uppercase leading-5 tracking-[0.12em] text-neutral-950 first:w-[20%] sm:px-7 sm:py-6 sm:text-[13px]",
  );
  formatted = withClasses(
    formatted,
    "tbody",
    "bg-white",
  );
  formatted = withClasses(
    formatted,
    "tr",
    "border-b border-neutral-200 transition-colors duration-150 last:border-b-0 hover:bg-[#FAFAF2]",
  );
  formatted = withClasses(
    formatted,
    "td",
    "px-6 py-6 align-top text-[15px] leading-7 text-neutral-700 first:font-semibold first:text-neutral-950 sm:px-7 sm:py-7 sm:text-[16px] sm:leading-7",
  );

  // Responsive shell only: deliberately flat, square and shadow-free.
  // The lime top rule adds brand character without creating a card effect.
  formatted = formatted.replace(
    /(<table\b[^>]*>[\s\S]*?<\/table>)/gi,
    '<div class="my-12 border-y border-neutral-200 bg-white"><div class="h-[3px] w-full bg-[#D4D939]"></div><div class="overflow-x-auto">$1</div></div>',
  );

  formatted = withClasses(
    formatted,
    "img",
    "my-10 h-auto max-w-full rounded-2xl border border-neutral-200 object-cover shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]",
  );
  formatted = withClasses(
    formatted,
    "hr",
    "my-12 border-0 border-t border-neutral-200",
  );
  formatted = withClasses(
    formatted,
    "code",
    "rounded bg-neutral-100 px-1.5 py-0.5 text-[0.9em] font-medium text-neutral-900",
  );
  formatted = withClasses(
    formatted,
    "pre",
    "my-8 overflow-x-auto rounded-2xl bg-neutral-950 p-5 text-sm leading-7 text-neutral-100",
  );

  return formatted;
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postTitle = decodeHtmlEntities(
    post.title?.rendered || "Untitled Post",
  );
  const contentHtml = formatWpContent(
    stripInlineStyles(
      post.content?.rendered || post.excerpt?.rendered || "",
    ),
  );
  const featuredImage = getFeaturedImageFromPost(post);
  const readTime =
    post.yoast_head_json?.twitter_misc?.["Est. reading time"] ||
    getReadingTime(post.content?.rendered || "");
  const publishedDate = formatDate(post.date);
  const updatedDate = formatDate(post.modified || post.date);

  return (
    <div className="min-h-screen bg-[#FCFCF8] text-neutral-900 selection:bg-[#D4D939] selection:text-black">
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-[#FCFCF8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-950"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white transition-transform group-hover:-translate-x-0.5">
              <ArrowLeft className="h-4 w-4" />
            </span>
            Back to Blog
          </Link>

          <Link
            href="/contactus"
            className="hidden items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800 sm:inline-flex"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-black/[0.06]">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-6xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-700 shadow-sm sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#D4D939]" />
                Inkfounders Journal
              </div>

              <h1
                className="text-balance text-[38px] font-bold leading-[1.04] tracking-[-0.045em] text-neutral-950 sm:text-5xl md:text-6xl lg:text-[72px]"
                dangerouslySetInnerHTML={{
                  __html: post.title?.rendered || "",
                }}
              />

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium text-neutral-500 sm:mt-8">
                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-neutral-400" />
                  <span>{publishedDate}</span>
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />

                <div className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-neutral-400" />
                  <span>{readTime}</span>
                </div>

                {updatedDate !== publishedDate && (
                  <>
                    <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />
                    <span>Updated {updatedDate}</span>
                  </>
                )}
              </div>
            </div>

            {featuredImage ? (
              <div className="mx-auto mt-10 max-w-7xl sm:mt-14">
                <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-neutral-100 shadow-[0_28px_80px_-45px_rgba(0,0,0,0.5)] sm:rounded-[32px]">
                  <div className="aspect-[16/9] w-full lg:aspect-[2/1]">
                    <img
                      src={featuredImage}
                      alt={postTitle}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 xl:gap-24">
            <article className="min-w-0">
              <div className="mx-auto max-w-[820px]">
                <div className="mb-10 flex items-center gap-4">
                  <span className="h-px flex-1 bg-neutral-200" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Article
                  </span>
                  <span className="h-px flex-1 bg-neutral-200" />
                </div>

                <div className="prose max-w-none prose-headings:font-bold prose-headings:text-neutral-950 prose-strong:text-neutral-950">
                  <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>

                <div className="mt-14 border-t border-neutral-200 pt-8 sm:mt-16">
                  <div className="rounded-2xl bg-[#F4F4EA] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                        Need help with your book?
                      </p>
                      <h2 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-neutral-950">
                        Turn your manuscript into a finished book.
                      </h2>
                    </div>

                    <Link
                      href="/contactus"
                      className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800 sm:mt-0"
                    >
                      Request a Quote
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Keep the sidebar pinned below the navigation as the article scrolls. */}
            <aside className="self-start lg:sticky lg:top-24 lg:z-30 lg:pr-1">
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[24px] bg-neutral-950 p-7 text-white sm:p-8">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4D939] text-neutral-950">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                    Publishing Support
                  </p>
                  <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em]">
                    Ready to publish your story?
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                    Get a custom quote for your book project and work with a team
                    that can help you move from manuscript to launch.
                  </p>

                  <Link
                    href="/contactus"
                    className="mt-7 inline-flex w-full items-center justify-between rounded-xl bg-[#D4D939] px-5 py-3.5 text-sm font-bold text-neutral-950 transition-all hover:bg-[#E1E650]"
                  >
                    Request a Quote
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-7">
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Contact
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-neutral-950">
                      Talk to Inkfounders
                    </h3>
                  </div>

                  <div className="divide-y divide-neutral-100">
                    <a
                      href="tel:+17866526864"
                      className="group flex items-center gap-4 py-4 first:pt-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-[#D4D939] group-hover:text-neutral-950">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-neutral-400">
                          Phone
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-neutral-800">
                          (786) 652-6864
                        </span>
                      </span>
                    </a>

                    <a
                      href="mailto:info@inkfounders.com"
                      className="group flex items-center gap-4 py-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-[#D4D939] group-hover:text-neutral-950">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-neutral-400">
                          Email
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-neutral-800">
                          info@inkfounders.com
                        </span>
                      </span>
                    </a>

                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 py-4 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-[#D4D939] group-hover:text-neutral-950">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-neutral-400">
                          Office
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold leading-5 text-neutral-800">
                          1221 Brickell Ave,
                          <br />
                          Miami, FL 33131
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
