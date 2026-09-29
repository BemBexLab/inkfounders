import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import {
  decodeHtmlEntities,
  formatDate,
  getAllWpPosts,
  getFeaturedImageFromPost,
  getTextFromHtml,
} from "@/app/blog/wpPosts";

type BlogCard = {
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  category: string;
  image: string;
  href: string;
};

const fallbackBlogs: BlogCard[] = [
  {
    title: "How Much Does It Cost to Self-Publish a Book? Real Costs Explained",
    excerpt:
      "Understand the main costs involved in publishing a book and how to plan your budget with confidence.",
    date: "March 1, 2025",
    publishedAt: "2025-03-01",
    category: "Publishing Guide",
    image: "/blog/blog_1.webp",
    href: "/blog/how-much-does-it-cost-to-self-publish",
  },
  {
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      "Learn what influences editing costs and what to look for when choosing professional support for your manuscript.",
    date: "March 4, 2025",
    publishedAt: "2025-03-04",
    category: "Author Resources",
    image: "/blog/blog_2.webp",
    href: "/blog/pricing-for-professional-book-editing-services",
  },
];

async function getRecentBlogs(): Promise<BlogCard[]> {
  let wordpressBlogs: BlogCard[] = [];

  try {
    const posts = await getAllWpPosts();

    wordpressBlogs = posts
      .filter((post) => Boolean(post.slug && post.title?.rendered))
      .map((post) => {
        const excerptHtml = post.excerpt?.rendered || post.content?.rendered || "";
        const excerpt = decodeHtmlEntities(getTextFromHtml(excerptHtml));

        return {
          title: decodeHtmlEntities(post.title?.rendered || "Untitled Post"),
          excerpt:
            excerpt ||
            "Practical publishing guidance and ideas for authors and creators.",
          date: formatDate(post.date),
          publishedAt: post.date,
          category: "Publishing Guide",
          image: getFeaturedImageFromPost(post) || "/blog/blog_1.webp",
          href: `/blog/${post.slug}`,
        };
      });
  } catch {
    // Keep the local articles available if the blog feed is unavailable.
  }

  const blogsBySlug = new Map<string, BlogCard>();

  for (const blog of [...fallbackBlogs, ...wordpressBlogs]) {
    blogsBySlug.set(blog.href, blog);
  }

  return [...blogsBySlug.values()]
    .sort(
      (first, second) =>
        new Date(second.publishedAt).getTime() -
        new Date(first.publishedAt).getTime(),
    )
    .slice(0, 3);
}

export default async function RecentBlogs() {
  const recentBlogs = await getRecentBlogs();

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#eef1c8]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#8b922d]">
              <span className="h-px w-8 bg-[#c8d952]" />
              From the blog
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
              Insights for your next chapter.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#626158] sm:text-lg">
              Practical publishing guidance for authors and creators bringing
              their stories to readers.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#c8d952] px-5 py-3 text-sm font-bold text-[#596019] transition-colors hover:bg-[#c8d952] hover:text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8d952] focus-visible:ring-offset-2"
          >
            View all insights
            <FaArrowRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((blog) => (
            <article
              key={blog.href}
              className="group h-full overflow-hidden rounded-2xl border border-[#e6e3d8] bg-[#faf9f4] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8d952] hover:shadow-[0_18px_40px_rgba(56,56,41,0.1)]"
            >
              <Link
                href={blog.href}
                className="flex h-full flex-col focus-visible:outline-none"
              >
                <div className="relative h-64 flex-none overflow-hidden sm:h-72">
                  {blog.image.startsWith("/") ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full bg-[#c8d952] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1a1a1a]">
                    {blog.category}
                  </span>
                </div>

                <div className="relative flex min-h-[220px] flex-1 flex-col p-6 pb-16 sm:p-7 sm:pb-16">
                  <div className="mb-4 flex items-center gap-2 text-sm text-[#77776e]">
                    <FaCalendarDays className="text-[#8b922d]" aria-hidden="true" />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-[#1a1a1a] transition-colors group-hover:text-[#737c1c]">
                    {blog.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#626158]">{blog.excerpt}</p>
                  <span className="absolute bottom-6 left-6 z-10 inline-flex items-center gap-2 text-sm font-bold text-[#737c1c] sm:bottom-7 sm:left-7">
                    Read article
                    <FaArrowRight
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
