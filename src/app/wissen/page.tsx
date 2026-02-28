import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Wissen & Ratgeber für Schweißaufsicht",
  description:
    "Normen-Ratgeber für IWE, IWT und IWS: ISO 14731, ISO 9606-1, EN 1090, ISO 3834, Ausführungsklassen. Praxiswissen für die Schweißaufsicht.",
  alternates: { canonical: `${siteConfig.url}/wissen` },
  openGraph: {
    title: "Wissen & Ratgeber für Schweißaufsicht",
    description:
      "Normen-Ratgeber für IWE, IWT und IWS: ISO 14731, ISO 9606-1, EN 1090, ISO 3834, Ausführungsklassen.",
    url: `${siteConfig.url}/wissen`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissen & Ratgeber für Schweißaufsicht",
    description:
      "Praxiswissen zu ISO 14731, ISO 9606-1, EN 1090 und ISO 3834 — für IWE, IWT und IWS.",
  },
};

const wissenArtikel = [
  {
    title: "ISO 14731: Aufgaben der Schweißaufsicht",
    href: "/wissen/iso-14731",
    desc: "Die 23+ Aufgabenbereiche nach ISO 14731:2019 — was die Norm fordert und wie du sie umsetzt.",
    readTime: 8,
    kategorie: "Normen",
  },
  {
    title: "ISO 9606-1: Schweißerprüfung verlängern",
    href: "/wissen/iso-9606-1",
    desc: "Gültigkeitsdauer, 6-Monats-Unterschrift, 3-Jahres-Verlängerung — alles zur Schweißerqualifikation.",
    readTime: 6,
    kategorie: "Normen",
  },
  {
    title: "EN 1090 Audit vorbereiten",
    href: "/wissen/en-1090-audit",
    desc: "Schritt für Schritt zum erfolgreichen Überwachungsaudit: Checkliste, häufige Fehler, Dokumentencheck.",
    readTime: 10,
    kategorie: "Praxis",
  },
  {
    title: "Ausführungsklassen EXC1 bis EXC4",
    href: "/wissen/ausfuehrungsklassen",
    desc: "EXC2 vs. EXC3: Unterschiede, NDT-Anforderungen und Schweißaufsichts-Qualifikation erklärt.",
    readTime: 7,
    kategorie: "Grundlagen",
  },
  {
    title: "ISO 3834: Schweißqualitätsmanagement",
    href: "/wissen/iso-3834",
    desc: "ISO 3834-2 für Maschinenbau und Druckbehälterbau: Anforderungen, Dokumentation, Audit.",
    readTime: 9,
    kategorie: "Normen",
  },
];

export default function WissenPage() {
  return (
    <>
      <WebPageSchema
        title="Wissen & Ratgeber für Schweißaufsicht"
        description="Normen-Ratgeber für IWE, IWT und IWS."
        url="/wissen"
      />
      <BreadcrumbSchema items={[{ label: "Wissen", href: "/wissen" }]} />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[{ label: "Wissen & Ratgeber", href: "/wissen" }]}
        />
      </div>
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="heading-hero mb-4">
              Wissen & Ratgeber für Schweißaufsicht
            </h1>
            <p className="text-lg text-muted-foreground">
              Praxiswissen zu ISO 14731, ISO 9606-1, EN 1090 und ISO 3834 — für
              IWE, IWT und IWS im DACH-Raum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {wissenArtikel.map((artikel) => (
              <Link
                key={artikel.href}
                href={artikel.href}
                className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow block group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {artikel.kategorie}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {artikel.readTime} Min.
                  </span>
                </div>
                <h2 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {artikel.title}
                </h2>
                <p className="text-sm text-muted-foreground">{artikel.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-primary text-sm">
                  Lesen <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
