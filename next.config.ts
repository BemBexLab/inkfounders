import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: "/publishing-services/ebook-writing",
        destination: "/publishing-services/book-writing",
        permanent: true,
      },
      {
        source: "/publishing-services/ebook-publishing",
        destination: "/publishing-services/book-publishing",
        permanent: true,
      },
      {
        source: "/publishing-services/ebook-cover-design",
        destination: "/publishing-services/book-cover-design",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(webp|avif|png|jpg|jpeg|gif|svg|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    // Serve local assets directly; the deployed image optimizer is returning 402s.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;

