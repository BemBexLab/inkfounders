import BlogPageClient, { type BlogPost } from "./BlogPageClient";
import {
  decodeHtmlEntities,
  formatDate,
  getAllWpPosts,
  getFeaturedImageFromPost,
  getReadingTime,
  getTextFromHtml,
} from "./wpPosts";

function mapWpPostToBlogPost(post: Awaited<ReturnType<typeof getAllWpPosts>>[number]): BlogPost {
  const excerptHtml = post.excerpt?.rendered || post.content?.rendered || "";
  const excerptText = decodeHtmlEntities(getTextFromHtml(excerptHtml));

  return {
    id: `wp-${post.id}`,
    title: decodeHtmlEntities(post.title?.rendered || "Untitled Post"),
    excerpt: excerptText,
    category: "Publishing Guide",
    date: formatDate(post.date),
    readTime: getReadingTime(post.content?.rendered || excerptHtml),
    imageUrl: getFeaturedImageFromPost(post),
    slug: post.slug,
    source: "wordpress",
  };
}

export default async function BlogPage() {
  const wpPosts = await getAllWpPosts();
  const staticSlugs = new Set([
    "how-much-does-it-cost-to-self-publish",
    "pricing-for-professional-book-editing-services",
  ]);

  const mappedWpPosts = wpPosts
    .filter((post) => Boolean(post.slug) && !staticSlugs.has(post.slug))
    .map(mapWpPostToBlogPost);

  return <BlogPageClient initialWpPosts={mappedWpPosts} />;
}
