import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy-policy", "/terms", "/help", "/contact"];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-11-18"),
  }));
}
