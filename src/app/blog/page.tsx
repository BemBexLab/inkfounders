"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ChevronRight, Tag } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: React.ReactNode;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

interface Category {
  name: string;
  count: number;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title:
        "How Much Does It Cost to Self Publish a Book? Real Costs Explained",
      excerpt: (
        <>
          <p className="text-gray-700">
            If you are planning to publish your book, you probably ask:
            <span className="block font-bold text-black mt-2">
              "How much does it cost to self publish a book?"
            </span>
          </p>
        </>
      ),
      category: "Publishing Guide",
      date: "March 1, 2025",
      readTime: "8 min read",
      imageUrl: "/blog/blog_1.webp",
      slug: "how-much-does-it-cost-to-self-publish",
    },
    {
      id: 2,
      title: "Pricing for Professional Book Editing Services (2026 Guide)",
      excerpt: (
        <>
          <p className="text-gray-700">
            When you're planning to publish a book, one of the first questions
            you'll face is:
            <span className="block font-bold text-black mt-2">
              "How much will editing cost?"
            </span>
          </p>
        </>
      ),
      category: "Publishing Guide",
      date: "March 4, 2025",
      readTime: "10 min read",
      imageUrl: "/blog/blog_2.webp",
      slug: "pricing-for-professional-book-editing-services",
    },
  ];

  const categories: Category[] = Object.entries(
    blogPosts.reduce<Record<string, number>>((acc, post) => {
      acc[post.category] = (acc[post.category] ?? 0) + 1;
      return acc;
    }, {}),
  )
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const parsePostDate = (date: string): number => {
    const parsed = new Date(date).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const sortedPosts = [...blogPosts].sort(
    (a, b) => parsePostDate(b.date) - parsePostDate(a.date),
  );

  const recentPosts = sortedPosts.slice(0, 4);

  const getNodeText = (node: React.ReactNode): string => {
    if (typeof node === "string" || typeof node === "number")
      return String(node);
    if (Array.isArray(node)) return node.map(getNodeText).join(" ");
    if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
      return getNodeText(node.props.children);
    }
    return "";
  };

  const filteredPosts = sortedPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getNodeText(post.excerpt)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
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

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-35">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Our Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and resources for aspiring and established authors.
            Discover the latest in publishing, marketing, and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Blog Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-10">
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#D4D939] text-gray-800 placeholder-gray-400 transition-colors"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-10">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#D4D939] text-black px-4 py-1.5 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-black mb-3 leading-tight hover:text-[#D4D939] transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <div className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[#D4D939] hover:text-[#b8bc2e] font-semibold flex items-center transition-colors"
                        >
                          Read More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(safePage - 1)}
                disabled={safePage === 1}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:border-[#D4D939] hover:text-[#D4D939] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                        ? "px-4 py-2 bg-[#D4D939] text-black rounded-lg font-semibold"
                        : "px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:border-[#D4D939] hover:text-[#D4D939] transition-colors"
                    }
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(safePage + 1)}
                disabled={safePage === totalPages}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:border-[#D4D939] hover:text-[#D4D939] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-[#D4D939] rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-black mb-6 opacity-90">
                Get the latest publishing tips and industry insights delivered
                to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg mb-3 bg-white border-2 border-transparent focus:border-black focus:outline-none text-black placeholder-gray-500"
              />
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Subscribe Now
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-[#D4D939]" />
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="w-full flex justify-between items-center text-gray-700 hover:text-[#D4D939] transition-colors group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        {category.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm group-hover:bg-[#D4D939] group-hover:text-black transition-colors">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-left text-gray-700 hover:text-[#D4D939] transition-colors line-clamp-2 text-sm leading-relaxed block"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">
                Popular Tags
              </h3>
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
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-[#D4D939] hover:text-black transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-black rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Publish Your Book?
              </h3>
              <p className="text-gray-300 mb-6">
                Let our experts guide you through every step of the publishing
                journey.
              </p>
              <Link
                href="/contactus"
                // className="inline-block bg-[#D4D939] text-black py-3 px-6 rounded-lg font-semibold hover:bg-[#c5ca35] transition-colors"
              >
                <button className="w-full bg-[#D4D939] text-black py-3 rounded-lg font-semibold hover:bg-[#c5ca35] transition-colors">
                  Get Started Today
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
