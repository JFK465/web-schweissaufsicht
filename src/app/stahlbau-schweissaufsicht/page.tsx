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
  title: "Schweißaufsicht für Stahlbau & Hallenbau",
  description:
    "SchweißAufsicht für Stahlbauer mit EN 1090 EXC2/EXC3: Projektzuordnung, WPS-Register, ZfP-Planung, NCR-Workflow. Audit-ready in Minuten. Jetzt testen.",
  alternates: { canonical: `${siteConfig.url}/stahlbau-schweissaufsicht` },
  openGraph: {
    title: "Schweißaufsicht für Stahlbau & Hallenbau",
    description:
      "SchweißAufsicht für Stahlbauer mit EN 1090 EXC2/EXC3: Projektzuordnung, WPS-Register, ZfP-Planung, NCR-Workflow. Audit-ready in Minuten.",
    url: `${siteConfig.url}/stahlbau-schweissaufsicht`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Schweißaufsicht für Stahlbau & Hallenbau",
    description:
      "SchweißAufsicht für Stahlbauer mit EN 1090 EXC2/EXC3: Projektzuordnung, WPS-Register, ZfP-Planung, NCR-Workflow.",
  },
};

const faqItems = [
  {
    question: "Kann ich mehrere Projekte gleichzeitig verwalten?",
    answer:
      "Ja, Projekte sind voneinander getrennt. Du kannst je Projekt eigene WPS-Sets, ZfP-Pläne und NCR-Listen führen.",
  },
  {
    question: "Wie funktioniert die ZfP-Planung für EXC3?",
    answer:
      "Du trägst Nahtart, Ausführungsklasse und Prüfverfahren ein. SchweißAufsicht schlägt den Mindest-Prüfumfang nach EN 1090-2 Tabelle 24 vor.",
  },
  {
    question: "Kann ich Dokumente von Subunternehmern ablegen?",
    answer:
      "Ja, Subunternehmer-Zertifikate können projektzugeordnet abgelegt werden.",
  },
  {
    question: "Eignet sich SchweißAufsicht für EXC3?",
    answer:
      "Ja, der Funktionsumfang deckt EXC3-Anforderungen ab: ZfP-Planung, NCR-Dokumentation, vollständiger Audit-Trail.",
  },
];

export default function StahlbauSchweissaufsichtPage() {
  return (
    <>
      <WebPageSchema
        title="Schweißaufsicht für Stahlbau & Hallenbau"
        description="SchweißAufsicht für Stahlbauer EXC2/EXC3."
        url="/stahlbau-schweissaufsicht"
      />
      <BreadcrumbSchema
        items={[
          { label: "Stahlbau & Hallenbau", href: "/stahlbau-schweissaufsicht" },
        ]}
      />
      <FAQSchema items={faqItems} />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Stahlbau & Hallenbau",
              href: "/stahlbau-schweissaufsicht",
            },
          ]}
        />
      </div>
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-hero mb-4">
            Schweißaufsicht für Stahlbau und Hallenbau — EXC2 und EXC3 auf dem
            Tablet
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Komplexe Projekte, viele Subunternehmer, EXC3-Anforderungen.
            SchweißAufsicht strukturiert deine Dokumentation projektbezogen —
            überall abrufbar.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Jetzt kostenlos testen — für Stahlbauer mit EXC2 und EXC3
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">
            Was SchweißAufsicht für Stahlbauer löst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Projektbezogene Dokumentation",
                description:
                  "WPS, ZfP-Plan und NCRs einem Projekt zuordnen. Klare Struktur für EXC3-Projekte.",
              },
              {
                title: "ZfP-Planung mit Umfangsberechnung",
                description:
                  "ZfP-Umfang nach EXC-Klasse und Nahtart — EN 1090-2 Tabelle 24 als Grundlage.",
              },
              {
                title: "NCR-Workflow",
                description:
                  "OPEN → INVESTIGATING → CORRECTIVE ACTION → CLOSED. Jede Abweichung lückenlos nachverfolgbar.",
              },
              {
                title: "Subunternehmer-Dokumente verwalten",
                description:
                  "Externe Schweißer-Zertifikate und WPS-Qualifikationen projektzugeordnet ablegen.",
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
            Häufige Fragen von Stahlbauern
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
            Jetzt kostenlos testen — für Stahlbauer mit EXC2 und EXC3
          </h2>
          <Button className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Beta-Zugang sichern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
