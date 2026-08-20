import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://roweallaround.org/sitemap.xml",
    host: "https://roweallaround.org",
  };
}
