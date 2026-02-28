import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SchweisserTrackerClient } from "./SchweisserTrackerClient";

export const metadata: Metadata = {
  title: "Schweißer-Tracker — ISO 9606-1 Ablaufdaten",
  description:
    "Kostenloses Tool: Berechne 6-Monats-Bestätigung und 3-Jahres-Verlängerung für Schweißer-Qualifikationen nach ISO 9606-1. Kein Login, kein Datenspeicher.",
  alternates: { canonical: `${siteConfig.url}/tools/schweisser-tracker` },
  openGraph: {
    title: "Schweißer-Qualifikations-Tracker — ISO 9606-1 Ablaufdaten",
    description:
      "Kostenloser Online-Tracker: 6-Monats-Bestätigung und 3-Jahres-Verlängerung nach ISO 9606-1 berechnen.",
    url: `${siteConfig.url}/tools/schweisser-tracker`,
  },
};

export default function SchweisserTrackerPage() {
  return (
    <>
      <WebPageSchema
        title="Schweißer-Qualifikations-Tracker — ISO 9606-1 Ablaufdaten"
        description="Kostenloses Online-Tool zur Berechnung von Ablaufdaten nach ISO 9606-1."
        url="/tools/schweisser-tracker"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools/schweisser-tracker" },
          { label: "Schweißer-Tracker", href: "/tools/schweisser-tracker" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools/schweisser-tracker" },
            { label: "Schweißer-Tracker", href: "/tools/schweisser-tracker" },
          ]}
        />
      </div>
      <SchweisserTrackerClient />
    </>
  );
}
