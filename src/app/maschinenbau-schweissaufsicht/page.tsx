import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Schweißaufsicht für Maschinenbau & ISO 3834",
  description:
    "SchweißAufsicht für ISO 3834-2 zertifizierte Betriebe: Qualifikationsmatrix, Fertigungsbegleitdokumentation, Audit-Trail. IWE-Software. Jetzt testen.",
  alternates: { canonical: `${siteConfig.url}/maschinenbau-schweissaufsicht` },
  openGraph: {
    title: "Schweißaufsicht für Maschinenbau & ISO 3834",
    description:
      "SchweißAufsicht für ISO 3834-2 zertifizierte Betriebe: Qualifikationsmatrix, Fertigungsbegleitdokumentation, Audit-Trail.",
    url: `${siteConfig.url}/maschinenbau-schweissaufsicht`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Schweißaufsicht für Maschinenbau & ISO 3834",
    description:
      "SchweißAufsicht für ISO 3834-2 Betriebe: Qualifikationsmatrix, Fertigungsbegleitdokumentation, Audit-Trail. IWE-Software.",
  },
};

const faqItems = [
  {
    question: "Unterstützt SchweißAufsicht ISO 3834-2?",
    answer:
      "Ja, die Dokumentationsstruktur ist an ISO 3834-2 ausgerichtet: Schweißerqualifikationen, WPS-Register, Fertigungsbegleitdokumentation, Audit-Trail.",
  },
  {
    question:
      "Kann ich Qualifikationen nach mehreren Normen (ISO + ASME) verwalten?",
    answer:
      "Die aktuelle Version ist auf ISO 9606-1 fokussiert. ASME-Unterstützung ist auf der Roadmap.",
  },
  {
    question: "Wie verwalte ich die Qualifikationsmatrix für 30 Schweißer?",
    answer:
      "In SchweißAufsicht pflegst du Schweißer-Profile mit allen Qualifikationsnachweisen. Die Gültigkeitsmatrix (Prozess × Position × Werkstoff) wird automatisch dargestellt.",
  },
  {
    question: "Ist SchweißAufsicht für IWE-pflichtige Betriebe geeignet?",
    answer:
      "Ja, der Funktionsumfang entspricht dem Verantwortungsbereich eines IWE nach ISO 14731.",
  },
];

export default function MaschinenbauSchweissaufsichtPage() {
  return (
    <>
      <WebPageSchema
        title="ISO 3834-2 konform dokumentieren — Schweißaufsicht Software für Maschinenbau"
        description="SchweißAufsicht für ISO 3834-2 Betriebe."
        url="/maschinenbau-schweissaufsicht"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Maschinenbau & Druckbehälter",
            href: "/maschinenbau-schweissaufsicht",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Maschinenbau & Druckbehälter",
              href: "/maschinenbau-schweissaufsicht",
            },
          ]}
        />
      </div>
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-hero mb-4">
            ISO 3834-2 konform dokumentieren — Schweißaufsicht Software für
            Maschinenbau
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Als IWE im Maschinenbau verantworten Sie eine komplexe
            Qualifikationsmatrix über Prozesse, Positionen und Werkstoffe.
            SchweißAufsicht bringt Struktur in die Komplexität.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Jetzt Beta-Zugang für ISO 3834-Betriebe sichern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">
            Was SchweißAufsicht für Maschinenbauer löst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title:
                  "Qualifikationsmatrix: Prozess × Position × Werkstoffgruppe",
                description:
                  "Überblick über alle Schweißer-Qualifikationen. Automatische Darstellung der Gültigkeitsmatrix.",
              },
              {
                title: "Fertigungsbegleitdokumentation",
                description:
                  "Pro Baugruppe oder Auftrag. IWE-Freigabe mit digitalem Stempel.",
              },
              {
                title: "ISO 3834-Audit-Checkliste",
                description:
                  "Integriertes Modul für ISO 3834-2 Audit-Vorbereitung. Alle Pflichtdokumente auf einen Blick.",
              },
              {
                title: "IWE-Unterschrift-Workflow",
                description:
                  "Freigaben auf Auftragsebene. Lückenloser Nachweis aller Schweißaufsichts-Aktivitäten.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-card border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/20">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-sub text-center mb-10">
            FAQ für Maschinenbauer
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border rounded-xl p-6 bg-card"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="heading-section text-primary-foreground mb-4">
            Beta-Zugang für ISO 3834-Betriebe sichern
          </h2>
          <Button className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Jetzt kostenlos testen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
