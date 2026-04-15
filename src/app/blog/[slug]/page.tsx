import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  decodeHtmlEntities,
  formatDate,
  getFeaturedImageFromPost,
  getPostBySlug,
  getReadingTime,
  stripInlineStyles,
} from "../wpPosts";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title =
    decodeHtmlEntities(
      post.yoast_head_json?.title || post.title?.rendered || "Inkfounders Blog",
    ) || "Inkfounders Blog";
  const description =
    decodeHtmlEntities(
      post.yoast_head_json?.description ||
        post.excerpt?.rendered ||
        post.content?.rendered ||
        "",
    ) || undefined;
  const featuredImage = getFeaturedImageFromPost(post);

  return {
    title,
    description,
    alternates: post.yoast_head_json?.canonical
      ? {
          canonical: post.yoast_head_json.canonical,
        }
      : undefined,
    openGraph: {
      type: "article",
      title: decodeHtmlEntities(
        post.yoast_head_json?.og_title || post.title?.rendered || title,
      ),
      description:
        decodeHtmlEntities(post.yoast_head_json?.og_description || description || "") ||
        undefined,
      url: post.yoast_head_json?.canonical || post.link || undefined,
      publishedTime:
        post.yoast_head_json?.article_published_time || post.date || undefined,
      modifiedTime:
        post.yoast_head_json?.article_modified_time ||
        post.modified ||
        post.date ||
        undefined,
      images: featuredImage ? [{ url: featuredImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: featuredImage ? [featuredImage] : undefined,
    },
  };
}

function formatWpContent(html: string) {
  const withClasses = (
    source: string,
    tagName: string,
    classes: string,
  ) =>
    source.replace(new RegExp(`<${tagName}([^>]*)>`, "gi"), (_, attrs = "") => {
      if (/class\s*=/i.test(attrs)) {
        return `<${tagName}${attrs.replace(
          /class=(["'])(.*?)\1/i,
          (_match: string, quote: string, existing: string) =>
            `class=${quote}${existing} ${classes}${quote}`,
        )}>`;
      }

      return `<${tagName}${attrs} class="${classes}">`;
    });

  let formatted = html;
  formatted = withClasses(formatted, "h2", "mt-12 mb-6 text-3xl font-bold text-black");
  formatted = withClasses(formatted, "h3", "mt-10 mb-4 text-2xl font-bold text-black");
  formatted = withClasses(formatted, "p", "mb-6 text-base leading-relaxed");
  formatted = withClasses(
    formatted,
    "ul",
    "mb-6 list-disc space-y-2 pl-6 text-base text-gray-700",
  );
  formatted = withClasses(
    formatted,
    "ol",
    "mb-6 list-decimal space-y-2 pl-6 text-base text-gray-700",
  );
  formatted = withClasses(formatted, "li", "leading-relaxed");
  formatted = withClasses(
    formatted,
    "a",
    "font-semibold text-blue-700 underline transition-colors hover:text-blue-900",
  );
  formatted = withClasses(formatted, "strong", "font-bold text-black");

  return formatted;
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postTitle = decodeHtmlEntities(post.title?.rendered || "Untitled Post");
  const contentHtml = formatWpContent(
    stripInlineStyles(post.content?.rendered || post.excerpt?.rendered || ""),
  );
  const featuredImage = getFeaturedImageFromPost(post);
  const readTime =
    post.yoast_head_json?.twitter_misc?.["Est. reading time"] ||
    getReadingTime(post.content?.rendered || "");
  const publishedDate = formatDate(post.date);
  const updatedDate = formatDate(post.modified || post.date);

  return (
    <div className="bg-[#F5F5DC] font-sans text-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center text-sm text-gray-600 transition-colors hover:text-[#D4D939] sm:mb-8 sm:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 md:p-8 lg:col-span-8 lg:p-12">
            <header className="mb-8 border-b border-gray-100 pb-6 sm:mb-10 sm:pb-8">
              <span className="mb-4 inline-block rounded-full bg-[#D4D939] px-3 py-1 text-sm font-bold text-black">
                Inkfounders Blog
              </span>

              <h1
                className="mb-5 text-[28px] font-bold leading-tight text-black sm:text-[34px] md:text-[42px] lg:mb-6 lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
              />

              {featuredImage ? (
                <div className="mb-8 sm:mb-10 lg:mb-12">
                  <div className="relative overflow-hidden rounded-xl border-4 border-[#D4D939] bg-gray-100 shadow-lg">
                    <div className="relative h-[220px] sm:h-[320px] md:h-[380px] lg:h-96">
                      <img
                        src={featuredImage}
                        alt={postTitle}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <span>Published: {publishedDate}</span>
                <span>&bull;</span>
                <span>Updated: {updatedDate}</span>
                <span>&bull;</span>
                <span>{readTime}</span>
              </div>
            </header>

            <div className="prose max-w-none text-gray-700 prose-headings:text-black prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-img:rounded-xl sm:prose-lg">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          </article>

          <aside className="space-y-6 lg:col-span-4 lg:space-y-8">
            <div className="space-y-6 lg:sticky lg:top-8 lg:space-y-8">
              <div className="rounded-xl bg-[#D4D939] p-6 text-center shadow-lg sm:p-8">
                <h3 className="mb-4 text-2xl font-bold text-black">
                  Ready to Publish?
                </h3>
                <p className="mb-6 text-black opacity-90">
                  Get a custom quote for your book project today.
                </p>
                <Link
                  href="/contactus"
                  className="block w-full rounded-lg bg-black py-3 font-bold text-white transition-colors hover:bg-gray-800"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="mb-4 border-b pb-2 text-lg font-bold text-black">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-yellow-100 p-2">
                      <svg
                        className="h-5 w-5 text-[#D4D939]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Phone</p>
                      <p className="text-sm text-gray-600">+1 (786) 496-1231</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-yellow-100 p-2">
                      <svg
                        className="h-5 w-5 text-[#D4D939]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Email</p>
                      <p className="text-sm text-gray-600">
                        info@inkfounders.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 rounded-full bg-yellow-100 p-2">
                      <svg
                        className="h-5 w-5 text-[#D4D939]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-black">Location</p>
                      <p className="text-sm text-gray-600">
                        Miami Beach, FL 33139, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
