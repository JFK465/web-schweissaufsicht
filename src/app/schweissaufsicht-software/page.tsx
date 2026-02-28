import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  SoftwareAppSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SchweissaufsichtSoftwareClient } from "./SchweissaufsichtSoftwareClient";

export const metadata: Metadata = {
  title: "Schweißaufsicht Software — ISO 14731",
  description:
    "Schweißaufsicht Software für IWE, IWT und IWS: ISO 14731 Aufgabenmatrix, automatische 6-Monats-Erinnerungen, Audit-Trail. Jetzt kostenlos als Beta testen.",
  alternates: { canonical: `${siteConfig.url}/schweissaufsicht-software` },
  openGraph: {
    type: "website",
    title: "Schweißaufsicht Software — ISO 14731",
    description:
      "Schweißaufsicht Software für IWE, IWT und IWS: ISO 14731 Aufgabenmatrix, automatische 6-Monats-Erinnerungen, Audit-Trail. Jetzt kostenlos als Beta testen.",
    url: `${siteConfig.url}/schweissaufsicht-software`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Schweißaufsicht Software — ISO 14731",
    description:
      "Schweißaufsicht Software für IWE, IWT und IWS: ISO 14731 Aufgabenmatrix, automatische 6-Monats-Erinnerungen, Audit-Trail.",
  },
};

export default function SchweissaufsichtSoftwarePage() {
  return (
    <>
      <SoftwareAppSchema
        name="SchweißAufsicht"
        description="Digitaler Arbeitsplatz für Schweißaufsichtspersonen: ISO 14731 Aufgabenmatrix, Schweißer-Qualifikationen, Audit-Trail."
        url="/schweissaufsicht-software"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Schweißaufsicht Software",
            href: "/schweissaufsicht-software",
          },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Schweißaufsicht Software",
              href: "/schweissaufsicht-software",
            },
          ]}
        />
      </div>
      <SchweissaufsichtSoftwareClient />
    </>
  );
}
