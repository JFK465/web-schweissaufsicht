import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExcNavigatorClient } from "./ExcNavigatorClient";

export const metadata: Metadata = {
  title: "EXC-Navigator — Ausführungsklasse nach EN 1090",
  description:
    "Kostenloses Tool: Ausführungsklasse (EXC1–EXC4) nach EN 1090-2 ermitteln. 3 Fragen, sofortiges Ergebnis mit Schweißaufsicht-Anforderungen. Kein Login nötig.",
  alternates: { canonical: `${siteConfig.url}/tools/exc-navigator` },
  openGraph: {
    title: "Ausführungsklasse berechnen — EXC-Navigator EN 1090",
    description:
      "EXC1 bis EXC4 nach EN 1090-2 berechnen — kostenloser Online-Navigator für Schweißaufsichtspersonen.",
    url: `${siteConfig.url}/tools/exc-navigator`,
  },
};

export default function ExcNavigatorPage() {
  return (
    <>
      <WebPageSchema
        title="Ausführungsklasse berechnen — EXC-Navigator EN 1090"
        description="Kostenloses Tool zur Bestimmung der Ausführungsklasse nach EN 1090-2."
        url="/tools/exc-navigator"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools/exc-navigator" },
          { label: "EXC-Navigator", href: "/tools/exc-navigator" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools/exc-navigator" },
            { label: "EXC-Navigator", href: "/tools/exc-navigator" },
          ]}
        />
      </div>
      <ExcNavigatorClient />
    </>
  );
}
