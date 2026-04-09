"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, ChevronRight, Clock, Search, Tag } from "lucide-react";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string | null;
  slug: string;
  source: "static" | "wordpress";
};

type Category = {
  name: string;
  count: number;
};

type BlogPageClientProps = {
  initialWpPosts: BlogPost[];
};

const staticBlogPosts: BlogPost[] = [
  {
    id: "static-1",
    title: "How Much Does It Cost to Self Publish a Book? Real Costs Explained",
    excerpt:
      'If you are planning to publish your book, you probably ask: "How much does it cost to self publish a book?"',
    category: "Publishing Guide",
    date: "March 1, 2025",
    readTime: "8 min read",
    imageUrl: "/blog/blog_1.webp",
    slug: "how-much-does-it-cost-to-self-publish",
    source: "static",
  },
  {
    id: "static-2",
    title: "Pricing for Professional Book Editing Services (2026 Guide)",
    excerpt:
      'When you are planning to publish a book, one of the first questions you will face is: "How much will editing cost?"',
    category: "Publishing Guide",
    date: "March 4, 2025",
    readTime: "10 min read",
    imageUrl: "/blog/blog_2.webp",
    slug: "pricing-for-professional-book-editing-services",
    source: "static",
  },
];

function parsePostDate(date: string): number {
  const parsed = new Date(date).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

export default function BlogPageClient({
  initialWpPosts,
}: BlogPageClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const allPosts = useMemo(
    () =>
      [...staticBlogPosts, ...initialWpPosts].sort(
        (a, b) => parsePostDate(b.date) - parsePostDate(a.date),
      ),
    [initialWpPosts],
  );

  const categories: Category[] = useMemo(
    () =>
      Object.entries(
        allPosts.reduce<Record<string, number>>((acc, post) => {
          acc[post.category] = (acc[post.category] ?? 0) + 1;
          return acc;
        }, {}),
      )
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
    [allPosts],
  );

  const recentPosts = allPosts.slice(0, 4);

  const filteredPosts = useMemo(
    () =>
      allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [allPosts, searchTerm],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / postsPerPage),
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  }

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <main className="mx-auto max-w-7xl px-4 py-35 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-black">
            Our Blog
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
            Insights, tips, and resources for aspiring and established authors.
            Discover the latest in publishing, marketing, and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="mb-10">
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-6 py-4 text-gray-800 placeholder-gray-400 transition-colors focus:border-[#D4D939] focus:outline-none"
                />
                <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            <div className="grid gap-10">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                  onClick={() => router.push(`/blog/${post.slug}`)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      router.push(`/blog/${post.slug}`);
                    }
                  }}
                  role="link"
                  tabIndex={0}
                >
                  <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-64 overflow-hidden md:h-full">
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#D4D939] via-[#f3f0b2] to-white p-8 text-center">
                          <span className="text-lg font-semibold text-black">
                            {post.title}
                          </span>
                        </div>
                      )}
                      <div className="absolute left-4 top-4 flex gap-2">
                        <span className="rounded-full bg-[#D4D939] px-4 py-1.5 text-sm font-semibold text-black">
                          {post.category}
                        </span>
                        {post.source === "wordpress" ? (
                          <span className="rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white">
                            New
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-8">
                      <div>
                        <h2 className="mb-3 text-2xl font-bold leading-tight text-black transition-colors hover:text-[#D4D939]">
                          {post.title}
                        </h2>
                        <p className="mb-6 line-clamp-3 leading-relaxed text-gray-600">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="mr-1.5 h-4 w-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1.5 h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center font-semibold text-[#D4D939] transition-colors hover:text-[#b8bc2e]">
                          Read More
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center space-x-2">
              <button
                onClick={() => handlePageChange(safePage - 1)}
                disabled={safePage === 1}
                className="rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:border-[#D4D939] hover:text-[#D4D939] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={
                      page === safePage
                        ? "rounded-lg bg-[#D4D939] px-4 py-2 font-semibold text-black"
                        : "rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:border-[#D4D939] hover:text-[#D4D939]"
                    }
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(safePage + 1)}
                disabled={safePage === totalPages}
                className="rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:border-[#D4D939] hover:text-[#D4D939] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <aside className="space-y-8 lg:col-span-1">
            <div className="rounded-xl bg-[#D4D939] p-8">
              <h3 className="mb-3 text-2xl font-bold text-black">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-6 text-black opacity-90">
                Get the latest publishing tips and industry insights delivered to
                your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="mb-3 w-full rounded-lg border-2 border-transparent bg-white px-4 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none"
              />
              <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition-colors hover:bg-gray-800">
                Subscribe Now
              </button>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 flex items-center text-xl font-bold text-black">
                <Tag className="mr-2 h-5 w-5 text-[#D4D939]" />
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="group flex w-full items-center justify-between text-gray-700 transition-colors hover:text-[#D4D939]">
                      <span className="transition-transform group-hover:translate-x-1">
                        {category.name}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-sm text-gray-600 transition-colors group-hover:bg-[#D4D939] group-hover:text-black">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-black">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block text-left text-sm leading-relaxed text-gray-700 transition-colors hover:text-[#D4D939]"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-black">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Self-Publishing",
                  "Marketing",
                  "Writing Tips",
                  "Cover Design",
                  "Ebooks",
                  "Audiobooks",
                  "Children's Books",
                  "Ghostwriting",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-[#D4D939] hover:text-black"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-black p-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-white">
                Ready to Publish Your Book?
              </h3>
              <p className="mb-6 text-gray-300">
                Let our experts guide you through every step of the publishing
                journey.
              </p>
              <Link href="/contactus">
                <button className="w-full rounded-lg bg-[#D4D939] py-3 font-semibold text-black transition-colors hover:bg-[#c5ca35]">
                  Get Started Today
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
