import { NextResponse } from "next/server";
import {
  decodeHtmlEntities,
  formatDate,
  getAllWpPosts,
  getFeaturedImageFromPost,
  getReadingTime,
  getTextFromHtml,
} from "@/app/blog/wpPosts";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const posts = await getAllWpPosts();

  return NextResponse.json(
    posts
      .filter((post) => Boolean(post.slug))
      .map((post) => {
        const excerptHtml = post.excerpt?.rendered || post.content?.rendered || "";

        return {
          id: `wp-${post.id}`,
          title: decodeHtmlEntities(post.title?.rendered || "Untitled Post"),
          excerpt: decodeHtmlEntities(getTextFromHtml(excerptHtml)),
          category: "Publishing Guide",
          date: formatDate(post.date),
          readTime: getReadingTime(post.content?.rendered || excerptHtml),
          imageUrl: getFeaturedImageFromPost(post),
          slug: post.slug,
          source: "wordpress" as const,
        };
      }),
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
