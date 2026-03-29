import { siteConfig } from "@/lib/seo-config";
import { getBlogPosts } from "@/lib/blog";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function buildEntries(): SitemapEntry[] {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  // Dynamische Blog-Posts aus MDX-Dateien laden
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastmod: new Date(post.date || Date.now()).toISOString(),
    changefreq: "monthly",
    priority: 0.6,
  }));

  return [
    // Core Pages
    {
      url: `${base}/`,
      lastmod: now,
      priority: 1.0,
      changefreq: "weekly",
    },
    {
      url: `${base}/schweissaufsicht-software`,
      lastmod: now,
      priority: 0.9,
      changefreq: "weekly",
    },
    {
      url: `${base}/funktionen`,
      lastmod: now,
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      url: `${base}/preise`,
      lastmod: now,
      priority: 0.8,
      changefreq: "monthly",
    },
    // Branchen
    {
      url: `${base}/metallbau-schweissaufsicht`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/stahlbau-schweissaufsicht`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/maschinenbau-schweissaufsicht`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/fassadenbau-schweissaufsicht`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/externe-schweissaufsicht`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    // Wissen
    {
      url: `${base}/wissen`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/iso-14731`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/iso-9606-1`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/en-1090-audit`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/ausfuehrungsklassen`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      url: `${base}/wissen/iso-3834`,
      lastmod: now,
      priority: 0.7,
      changefreq: "monthly",
    },
    // Tools
    {
      url: `${base}/tools/schweisser-tracker`,
      lastmod: now,
      priority: 0.6,
      changefreq: "monthly",
    },
    {
      url: `${base}/tools/exc-navigator`,
      lastmod: now,
      priority: 0.6,
      changefreq: "monthly",
    },
    // Blog
    {
      url: `${base}/blog`,
      lastmod: now,
      priority: 0.7,
      changefreq: "weekly",
    },
    // Dynamische Blog-Posts
    ...blogPosts,
  ];
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
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
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
