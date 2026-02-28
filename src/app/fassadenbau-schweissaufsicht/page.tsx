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
  title: "Schweißaufsicht für Fassaden- & Treppenbau",
  description:
    "SchweißAufsicht für Fassadenbauer und Treppenbauer mit Stahl und Aluminium (EN 1090-3): Ein Audit-Trail für beide Materialien. Jetzt kostenlos testen.",
  alternates: { canonical: `${siteConfig.url}/fassadenbau-schweissaufsicht` },
  openGraph: {
    title: "Schweißaufsicht für Fassaden- & Treppenbau",
    description:
      "SchweißAufsicht für Fassadenbauer und Treppenbauer mit Stahl und Aluminium (EN 1090-3): Ein Audit-Trail für beide Materialien.",
    url: `${siteConfig.url}/fassadenbau-schweissaufsicht`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Schweißaufsicht für Fassaden- & Treppenbau",
    description:
      "Stahl und Aluminium in einer Software — für Fassaden- und Treppenbauer mit EN 1090.",
  },
};

const faqItems = [
  {
    question: "Unterstützt SchweißAufsicht EN 1090-3 für Aluminium?",
    answer:
      "Die aktuelle Beta fokussiert auf Stahl (EN 1090-2). Aluminium (EN 1090-3) ist für Version 1.5 geplant. Beta-Nutzer werden zuerst benachrichtigt.",
  },
  {
    question: "Kann ich Stahl- und Alu-Schweißer getrennt verwalten?",
    answer:
      "Ja, Schweißer-Profile unterscheiden nach Grundwerkstoff-Gruppe. Qualifikationen nach ISO 9606-1 und ISO 9606-2 werden getrennt geführt.",
  },
  {
    question:
      "Eignet sich SchweißAufsicht für kleine Treppenbauer mit 5 Schweißern?",
    answer:
      "Ja, der Starter-Tarif ist auf kleine Betriebe ausgelegt. Keine Mindestanzahl an Schweißern.",
  },
];

export default function FassadenbauSchweissaufsichtPage() {
  return (
    <>
      <WebPageSchema
        title="Stahl und Aluminium in einer Software — Schweißaufsicht für Fassaden- und Treppenbau"
        description="SchweißAufsicht für Fassaden- und Treppenbauer."
        url="/fassadenbau-schweissaufsicht"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Fassaden- & Treppenbau",
            href: "/fassadenbau-schweissaufsicht",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Fassaden- & Treppenbau",
              href: "/fassadenbau-schweissaufsicht",
            },
          ]}
        />
      </div>
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-hero mb-4">
            Stahl und Aluminium in einer Software — Schweißaufsicht für
            Fassaden- und Treppenbau
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            EXC2 Stahl und EXC3 Aluminium. Zwei Zertifizierungen, ein
            Audit-Trail. SchweißAufsicht vereint beide in einem digitalen
            Arbeitsplatz.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Jetzt Beta-Zugang sichern — für Fassaden- und Treppenbauer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">
            Was SchweißAufsicht für Fassaden- und Treppenbauer löst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Materialgruppen-Trennung: Stahl und Aluminium",
                description:
                  "Parallele WPS-Register für Stahl und Aluminium. Qualifikationen nach ISO 9606-1 und ISO 9606-2 getrennt geführt.",
              },
              {
                title: "Projektstruktur für Treppenanlagen",
                description:
                  "Bauteile dem Auftrag zuordnen. Welche WPS gilt für welches Bauteil?",
              },
              {
                title: "Schweißer-Profile mit getrennten Qualifikationen",
                description:
                  "ISO 9606-1 (Stahl) und ISO 9606-2 (Aluminium) in einem System verwaltet.",
              },
              {
                title: "Audit-Trail für beide Normbereiche",
                description:
                  "Ein gemeinsamer Export für alle TÜV-Termine — Stahl und Aluminium.",
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
            FAQ für Fassaden- und Treppenbauer
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
            Jetzt Beta-Zugang sichern
          </h2>
          <Button className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Kostenlos testen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
