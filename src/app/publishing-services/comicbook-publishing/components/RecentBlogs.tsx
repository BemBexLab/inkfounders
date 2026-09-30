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
    title:
      "How Much Does It Cost to Self-Publish a Book? Real Costs Explained",
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
        const excerptHtml =
          post.excerpt?.rendered || post.content?.rendered || "";

        const excerpt = decodeHtmlEntities(
          getTextFromHtml(excerptHtml),
        );

        return {
          title: decodeHtmlEntities(
            post.title?.rendered || "Untitled Post",
          ),
          excerpt:
            excerpt ||
            "Practical publishing guidance and ideas for authors and creators.",
          date: formatDate(post.date),
          publishedAt: post.date,
          category: "Publishing Guide",
          image:
            getFeaturedImageFromPost(post) ||
            "/blog/blog_1.webp",
          href: `/blog/${post.slug}`,
        };
      });
  } catch {
    // Keep local articles available if the blog feed is unavailable.
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
    <section
      className="
        relative overflow-hidden bg-white
        px-4 py-14
        sm:px-6 sm:py-16
        md:py-20
        lg:px-8 lg:py-24
        xl:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute
          -right-24 top-0
          h-56 w-56
          rounded-full
          bg-[#eef1c8]/60
          blur-3xl
          sm:-right-28 sm:h-72 sm:w-72
          lg:-right-32 lg:h-80 lg:w-80
        "
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <div
          className="
            mb-8
            flex flex-col gap-6
            sm:mb-10
            md:mb-12
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="min-w-0 max-w-4xl">
            {/* Eyebrow */}
            <p
              className="
                mb-3
                flex items-center gap-2
                text-xs font-bold uppercase
                tracking-[0.16em]
                text-[#8b922d]
                sm:mb-4
                sm:gap-3
                sm:text-sm
                sm:tracking-[0.2em]
              "
            >
              <span
                className="
                  h-px w-6 flex-none bg-[#c8d952]
                  sm:w-8
                "
              />

              From the blog
            </p>

            {/* Heading */}
            <h2
              className="
                max-w-3xl
                text-[32px] font-bold
                leading-[1.1]
                tracking-tight
                text-[#1a1a1a]
                min-[375px]:text-4xl
                sm:text-[42px]
                md:text-5xl
                lg:text-[52px]
              "
            >
              Insights for your next chapter.
            </h2>

            {/* Description */}
            <p
              className="
                mt-4 max-w-3xl
                text-sm leading-6
                text-[#626158]
                sm:mt-5
                sm:text-base sm:leading-7
                lg:text-lg lg:leading-8
              "
            >
              Practical publishing guidance for authors and creators
              bringing their stories to readers.
            </p>
          </div>

          {/* View all button */}
          <Link
            href="/blog"
            className="
              group
              inline-flex w-full
              flex-none
              items-center justify-center
              gap-2
              rounded-full
              border border-[#c8d952]
              px-5 py-3
              text-sm font-bold
              text-[#596019]
              transition-all duration-300
              hover:bg-[#c8d952]
              hover:text-[#1a1a1a]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#c8d952]
              focus-visible:ring-offset-2
              sm:w-fit
              md:mb-1
            "
          >
            View all insights

            <FaArrowRight
              className="
                flex-none
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Blog Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
            xl:gap-7
          "
        >
          {recentBlogs.map((blog) => (
            <article
              key={blog.href}
              className="
                group
                min-w-0
                overflow-hidden
                rounded-xl
                border border-[#e6e3d8]
                bg-[#faf9f4]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#c8d952]
                hover:shadow-[0_18px_40px_rgba(56,56,41,0.10)]
                sm:rounded-2xl
              "
            >
              <Link
                href={blog.href}
                className="
                  flex h-full
                  min-w-0
                  flex-col
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-[#c8d952]
                "
              >
                {/* Image */}
                <div
                  className="
                    relative
                    aspect-[16/10]
                    w-full
                    flex-none
                    overflow-hidden
                    sm:aspect-[16/11]
                    md:aspect-[16/10]
                    lg:aspect-[4/3]
                    xl:aspect-[16/11]
                  "
                >
                  {blog.image.startsWith("/") ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="
                        (min-width: 1024px) 33vw,
                        (min-width: 768px) 50vw,
                        100vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="
                        h-full w-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-105
                      "
                    />
                  )}

                  {/* Image overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-black/5
                      to-transparent
                    "
                  />

                  {/* Category */}
                  <span
                    className="
                      absolute
                      bottom-3 left-3
                      max-w-[calc(100%-24px)]
                      rounded-full
                      bg-[#c8d952]
                      px-2.5 py-1
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#1a1a1a]
                      sm:bottom-4
                      sm:left-4
                      sm:px-3
                      sm:py-1.5
                      sm:text-xs
                      lg:bottom-5
                      lg:left-5
                    "
                  >
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="
                    flex min-w-0
                    flex-1 flex-col
                    p-5
                    sm:p-6
                    lg:p-6
                    xl:p-7
                  "
                >
                  {/* Date */}
                  <div
                    className="
                      mb-3
                      flex items-center
                      gap-2
                      text-xs
                      text-[#77776e]
                      sm:mb-4
                      sm:text-sm
                    "
                  >
                    <FaCalendarDays
                      className="
                        flex-none
                        text-[#8b922d]
                      "
                      aria-hidden="true"
                    />

                    <span>{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-[1.25]
                      text-[#1a1a1a]
                      transition-colors
                      duration-200
                      group-hover:text-[#737c1c]
                      sm:text-[22px]
                      lg:text-xl
                      xl:text-2xl
                    "
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#626158]
                      sm:mt-4
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {blog.excerpt}
                  </p>

                  {/* Read article */}
                  <span
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-6
                      text-sm
                      font-bold
                      text-[#737c1c]
                      sm:pt-7
                    "
                  >
                    Read article

                    <FaArrowRight
                      className="
                        flex-none
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
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