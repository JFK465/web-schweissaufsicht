import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getGitLastmod } from "@/lib/sitemap-lastmod";

// Build-time static generation: getGitLastmod nutzt git CLI, das nur
// im Build-Container verfuegbar ist, nicht in Vercel-Serverless-Runtime.
// Sitemap wird bei jedem Deploy regeneriert.
export const dynamic = "force-static";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function getBlogPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(CONTENT_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: file.replace(/\.(md|mdx)$/, ""),
        date: data.date || null,
      };
    });
}

interface SitemapSource {
  url: string;
  source: string;
  changefreq: string;
  priority: number;
}

interface SitemapEntry extends SitemapSource {
  lastmod: string;
}

const STATIC_SOURCES: SitemapSource[] = [
  { url: "https://schweissaufsicht-software.de/", source: "src/app/page.tsx", changefreq: "weekly", priority: 1 },
  { url: "https://schweissaufsicht-software.de/schweissaufsicht-software", source: "src/app/schweissaufsicht-software/page.tsx", changefreq: "weekly", priority: 0.9 },
  { url: "https://schweissaufsicht-software.de/funktionen", source: "src/app/funktionen/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://schweissaufsicht-software.de/preise", source: "src/app/preise/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://schweissaufsicht-software.de/metallbau-schweissaufsicht", source: "src/app/metallbau-schweissaufsicht/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/stahlbau-schweissaufsicht", source: "src/app/stahlbau-schweissaufsicht/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/maschinenbau-schweissaufsicht", source: "src/app/maschinenbau-schweissaufsicht/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/fassadenbau-schweissaufsicht", source: "src/app/fassadenbau-schweissaufsicht/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/externe-schweissaufsicht", source: "src/app/externe-schweissaufsicht/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/wissen", source: "src/app/wissen/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/wissen/iso-14731", source: "src/app/wissen/iso-14731/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/wissen/iso-9606-1", source: "src/app/wissen/iso-9606-1/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/wissen/en-1090-audit", source: "src/app/wissen/en-1090-audit/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/wissen/ausfuehrungsklassen", source: "src/app/wissen/ausfuehrungsklassen/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/wissen/iso-3834", source: "src/app/wissen/iso-3834/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schweissaufsicht-software.de/tools/schweisser-tracker", source: "src/app/tools/schweisser-tracker/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schweissaufsicht-software.de/tools/exc-navigator", source: "src/app/tools/exc-navigator/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schweissaufsicht-software.de/blog", source: "src/app/blog/page.tsx", changefreq: "weekly", priority: 0.7 },
];

function buildEntries(): SitemapEntry[] {
  const staticEntries = STATIC_SOURCES.map((s) => ({
    ...s,
    lastmod: getGitLastmod(s.source),
  }));

  const blogPosts = getBlogPosts();
  const blogEntries: SitemapEntry[] = blogPosts.map((post) => {
    const source = `content/blog/${post.slug}.md`;
    return {
      url: `https://schweissaufsicht-software.de/blog/${post.slug}`,
      source,
      lastmod: post.date ? new Date(post.date).toISOString() : getGitLastmod(source),
      changefreq: "monthly",
      priority: 0.7,
    };
  });

  return [...staticEntries, ...blogEntries];
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
