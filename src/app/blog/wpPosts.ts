export type WPPost = {
  id: number;
  slug: string;
  date: string;
  link?: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  yoast_head_json?: {
    title?: string;
    description?: string;
    canonical?: string;
    og_image?: Array<{
      url?: string;
    }>;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

const DEFAULT_CMS_ENDPOINT =
  "https://ink2audiobook.com/test/index.php/wp-json/wp/v2/posts";

function normalizeCmsEndpoint() {
  const cmsEndpoint = process.env.CMS?.trim() || DEFAULT_CMS_ENDPOINT;
  return cmsEndpoint.endsWith("/") ? cmsEndpoint.slice(0, -1) : cmsEndpoint;
}

function buildEndpoint(params: Record<string, string>) {
  const base = normalizeCmsEndpoint();
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${new URLSearchParams(params).toString()}`;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const normalizedSlug = slug.trim().toLowerCase();
  const endpoint = buildEndpoint({
    slug: normalizedSlug,
    status: "publish",
    _embed: "1",
  });

  try {
    const res = await fetch(endpoint, { cache: "no-store" });

    if (res.ok) {
      const posts = (await res.json()) as WPPost[];
      const exactMatch =
        posts.find(
          (post) => post.slug?.trim().toLowerCase() === normalizedSlug,
        ) ?? posts[0];

      if (exactMatch) {
        return exactMatch;
      }
    }
  } catch {
    // Fall through to the broader lookup below.
  }

  const allPosts = await getAllWpPosts();
  return (
    allPosts.find((post) => post.slug?.trim().toLowerCase() === normalizedSlug) ??
    null
  );
}

export async function getAllWpPosts(): Promise<WPPost[]> {
  const posts: WPPost[] = [];
  let page = 1;

  while (true) {
    const endpoint = buildEndpoint({
      per_page: "100",
      page: String(page),
      _embed: "",
    });
    const res = await fetch(endpoint, { cache: "no-store" });

    if (!res.ok) {
      break;
    }

    const batch = (await res.json()) as WPPost[];
    if (!Array.isArray(batch) || batch.length === 0) {
      break;
    }

    posts.push(...batch);

    if (batch.length < 100) {
      break;
    }

    page += 1;
  }

  return posts;
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getTextFromHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function getReadingTime(html: string) {
  const words = getTextFromHtml(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

export function getFirstImageFromHtml(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return match?.[1] || null;
}

export function getFeaturedImageFromPost(post?: WPPost | null) {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    post?.yoast_head_json?.og_image?.[0]?.url ||
    getFirstImageFromHtml(
      post?.content?.rendered || post?.excerpt?.rendered || ""
    ) ||
    null
  );
}

export function stripInlineStyles(html = "") {
  return html.replace(/\sstyle=(["'])(?:(?!\1).)*\1/gi, "");
}

export type WpRenderedStyles = {
  stylesheets: string[];
  inlineStyles: string[];
};

function makeAbsoluteUrl(url: string, baseUrl: string) {
  try {
    return new URL(url, baseUrl).toString();
  } catch {
    return null;
  }
}

export async function getRenderedWpStyles(
  pageUrl?: string
): Promise<WpRenderedStyles> {
  if (!pageUrl) {
    return { stylesheets: [], inlineStyles: [] };
  }

  try {
    const res = await fetch(pageUrl, { cache: "no-store" });

    if (!res.ok) {
      return { stylesheets: [], inlineStyles: [] };
    }

    const html = await res.text();

    const stylesheetMatches = Array.from(
      html.matchAll(
        /<link[^>]+rel=["'][^"']*stylesheet[^"']*["'][^>]+href=["']([^"']+)["'][^>]*>/gi
      )
    );
    const inlineStyleMatches = Array.from(
      html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)
    );

    const stylesheets = stylesheetMatches
      .map((match) => makeAbsoluteUrl(match[1], pageUrl))
      .filter((value): value is string => Boolean(value));

    const inlineStyles = inlineStyleMatches
      .map((match) => match[1]?.trim())
      .filter((value): value is string => Boolean(value));

    return {
      stylesheets: Array.from(new Set(stylesheets)),
      inlineStyles,
    };
  } catch {
    return { stylesheets: [], inlineStyles: [] };
  }
}

export function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&#8212;|&mdash;/g, "-")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
