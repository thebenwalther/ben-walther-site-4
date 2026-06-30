import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { guideSlugs } from "@/lib/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/resources",
    "/resources/clarity-assessment",
    "/resources/becoming-framework",
    "/resources/reset-email-course",
    ...guideSlugs.map((slug) => `/resources/guides/${slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/resources/clarity-assessment" ? 0.9 : 0.7,
  }));
}
