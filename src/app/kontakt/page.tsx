import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { KontaktForm } from "./KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Fragen zu SchweißAufsicht? Schreib uns — wir antworten innerhalb von 24 Stunden. Für IWE, IWT und IWS in Deutschland, Österreich und der Schweiz.",
  alternates: { canonical: `${siteConfig.url}/kontakt` },
  openGraph: {
    title: "Kontakt",
    description:
      "Fragen zu SchweißAufsicht? Schreib uns — wir antworten innerhalb von 24 Stunden.",
    url: `${siteConfig.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <>
      <WebPageSchema
        title="Kontakt – SchweißAufsicht"
        description="Kontaktformular und Kontaktdaten von SchweißAufsicht."
        url="/kontakt"
      />
      <BreadcrumbSchema items={[{ label: "Kontakt", href: "/kontakt" }]} />
      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
      </div>
      <KontaktForm />
    </>
  );
}
