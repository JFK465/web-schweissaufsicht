import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Schweißaufsicht Praxiswissen",
  description:
    "Praxiswissen für IWE, IWT und IWS: ISO 14731, ISO 9606-1, EN 1090, Haftungsfragen, Audit-Vorbereitung. Regelmäßig neue Artikel.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog — Schweißaufsicht Praxiswissen",
    description:
      "Praxiswissen für IWE, IWT und IWS: ISO 14731, ISO 9606-1, EN 1090, Haftungsfragen, Audit-Vorbereitung.",
    url: `${siteConfig.url}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Schweißaufsicht Praxiswissen",
    description:
      "Normen-Ratgeber und Praxistipps für Schweißaufsichtspersonen: ISO 14731, ISO 9606-1, EN 1090.",
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <WebPageSchema
        title="Blog — Schweißaufsicht Praxiswissen"
        description="Praxiswissen für Schweißaufsichtspersonen: ISO 14731, ISO 9606-1, EN 1090."
        url="/blog"
      />
      <BreadcrumbSchema items={[{ label: "Blog", href: "/blog" }]} />
      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      </div>
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-hero mb-4">
            Praxiswissen für Schweißaufsichtspersonen
          </h1>
          <p className="text-xl text-muted-foreground">
            Normen-Ratgeber, Haftungsfragen und Audit-Tipps für IWE, IWT und IWS
            im DACH-Raum. Kein Marketing — nur praxisrelevantes Fachwissen.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Artikel in Vorbereitung
              </h2>
              <p className="text-muted-foreground mb-8">
                Wir erstellen gerade praxisnahe Artikel für
                Schweißaufsichtspersonen. Melde dich für den Beta-Zugang an —
                und wir informieren dich, sobald neue Inhalte erscheinen.
              </p>
              <Button asChild>
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  Beta-Zugang sichern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card border rounded-xl p-8">
            <div>
              <h2 className="font-bold text-xl mb-2">
                Wissen in die Praxis umsetzen
              </h2>
              <p className="text-muted-foreground text-sm">
                Prüfe die Gültigkeit deiner Schweißer-Qualifikationen mit
                unserem kostenlosen Tracker.
              </p>
            </div>
            <Button asChild className="flex-shrink-0">
              <Link href="/tools/schweisser-tracker">
                Schweißer-Tracker öffnen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
