import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";
import { getBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // Dynamische Blog-Posts aus MDX-Dateien laden
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    // Core Pages
    {
      url: `${base}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/schweissaufsicht-software`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/funktionen`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/preise`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/kontakt`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: "yearly",
    },
    // Branchen
    {
      url: `${base}/metallbau-schweissaufsicht`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/stahlbau-schweissaufsicht`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/maschinenbau-schweissaufsicht`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/fassadenbau-schweissaufsicht`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/externe-schweissaufsicht`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    // Wissen
    {
      url: `${base}/wissen`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/iso-14731`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/iso-9606-1`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/en-1090-audit`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/ausfuehrungsklassen`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/wissen/iso-3834`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    // Tools
    {
      url: `${base}/tools/schweisser-tracker`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/tools/exc-navigator`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    // Blog
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "weekly",
    },
    // Dynamische Blog-Posts
    ...blogPosts,
  ];
}
