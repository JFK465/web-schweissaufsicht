import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "ISO 3834: Schweißqualitätsmanagement erklärt",
  description:
    "ISO 3834-2 Anforderungen, Dokumentationspflichten und Audit-Vorbereitung. Praxisratgeber für Schweißaufsicht im Maschinenbau und Druckbehälterbau.",
  alternates: { canonical: `${siteConfig.url}/wissen/iso-3834` },
  openGraph: {
    type: "article",
    title: "ISO 3834: Schweißqualitätsmanagement erklärt",
    description:
      "ISO 3834-2 Anforderungen, Dokumentationspflichten und Audit-Vorbereitung für Maschinenbau und Druckbehälterbau.",
    url: `${siteConfig.url}/wissen/iso-3834`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO 3834: Schweißqualitätsmanagement erklärt",
    description:
      "ISO 3834-2 Anforderungen und Audit-Vorbereitung für Schweißbetriebe im Maschinenbau und Druckbehälterbau.",
  },
};

export default function Iso3834Page() {
  return (
    <>
      <WebPageSchema
        title="ISO 3834: Schweißqualitätsmanagement für Maschinenbau und Druckbehälterbau"
        description="ISO 3834-2 Anforderungen und Dokumentation für Schweißbetriebe."
        url="/wissen/iso-3834"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "ISO 3834", href: "/wissen/iso-3834" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "ISO 3834", href: "/wissen/iso-3834" },
          ]}
        />
      </div>
      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Normen
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 9 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              ISO 3834: Schweißqualitätsmanagement — Anforderungen und Praxis
            </h1>
            <p className="text-xl text-muted-foreground">
              ISO 3834 ist die Qualitätsmanagementnorm für Schweißprozesse. Im
              Maschinenbau und Druckbehälterbau ist sie die zentrale
              Zertifizierungsgrundlage — oft parallel zu EN 1090 im Metallbau.
            </p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Was ist ISO 3834?</h2>
              <p className="text-muted-foreground leading-relaxed">
                ISO 3834 legt die Qualitätsanforderungen für das
                Schmelzschweißen von metallischen Werkstoffen fest. Die Norm ist
                in vier Teile gegliedert, die sich nach dem Anforderungsniveau
                unterscheiden. Für die meisten Fertigungsbetriebe im
                Maschinenbau und Druckbehälterbau ist ISO 3834-2 (umfassende
                Qualitätsanforderungen) relevant — die strengste regelmäßig
                verwendete Stufe.
              </p>
            </section>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-3 font-semibold">Teil</th>
                    <th className="text-left p-3 font-semibold">
                      Anforderungsniveau
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Typischer Anwendungsbereich
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "ISO 3834-2",
                      "Umfassend",
                      "Druckbehälter, Kranbau, anspruchsvoller Maschinenbau",
                    ],
                    [
                      "ISO 3834-3",
                      "Standard",
                      "Allgemeiner Maschinenbau, Stahlbau",
                    ],
                    [
                      "ISO 3834-4",
                      "Elementar",
                      "Einfache Konstruktionen, geringes Risiko",
                    ],
                  ].map(([teil, niveau, anwendung]) => (
                    <tr key={teil} className="border-t">
                      <td className="p-3 font-medium text-primary">{teil}</td>
                      <td className="p-3 text-muted-foreground">{niveau}</td>
                      <td className="p-3 text-muted-foreground">{anwendung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. ISO 3834-2: Umfassende Qualitätsanforderungen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ISO 3834-2 fordert ein vollständiges
                Schweißqualitätsmanagementsystem. Die Anforderungen umfassen
                alle Phasen des Schweißprozesses — von der
                Anforderungsüberprüfung bis zur Nacharbeitssteuerung.
              </p>
              <div className="bg-card border rounded-xl p-5">
                <h3 className="font-semibold mb-3">
                  Kernforderungen ISO 3834-2
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Schweißkoordination nach ISO 14731 (qualifizierte Schweißaufsicht)",
                    "WPS und WPQR für alle eingesetzten Schweißverfahren",
                    "Schweißerqualifikationen nach ISO 9606-1 (mit 6-Monats-Bestätigung)",
                    "Geräte- und Ausrüstungsüberwachung",
                    "Grundwerkstoffkontrolle und Materialzertifikate",
                    "ZfP-Planung und Prüfprotokolle",
                    "Nichtkonformitätsprozess (NCR) und Korrekturmaßnahmen",
                    "Lückenlose Qualitätsdokumentation und Audit-Trail",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. ISO 3834 vs. EN 1090: Was ist der Unterschied?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EN 1090 gilt für Stahl- und Aluminiumtragwerke und ist
                CE-Kennzeichnungspflichtig. ISO 3834 ist produktneutral — sie
                gilt für Schweißprozesse allgemein und ist die Grundlage für
                Schweißqualitätsmanagementsysteme im Maschinenbau,
                Druckbehälterbau und anderen Branchen. Beide Normen fordern eine
                qualifizierte{" "}
                <Link
                  href="/wissen/iso-14731"
                  className="text-primary hover:underline"
                >
                  Schweißaufsicht nach ISO 14731
                </Link>
                . Viele Betriebe benötigen beide Zertifizierungen.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Audit nach ISO 3834: Was prüft der Zertifizierer?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Zertifizierer prüft, ob alle Forderungen der ISO 3834-2
                nachweisbar erfüllt sind. Schwerpunkte: Qualifikationsnachweis
                der Schweißaufsicht, Vollständigkeit der WPS/WPQR-Dokumentation,
                Gültigkeit aller Schweißerqualifikationen, Funktionsfähigkeit
                des NCR-Prozesses und Nachvollziehbarkeit des gesamten
                Audit-Trails. Fehlende 6-Monats-Bestätigungen bei
                Schweißerqualifikationen sind ein häufiger Befund.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Wie SchweißAufsicht ISO 3834 unterstützt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SchweißAufsicht bildet alle Kernanforderungen der ISO 3834-2
                digital ab: Aufgabenmatrix nach{" "}
                <Link
                  href="/wissen/iso-14731"
                  className="text-primary hover:underline"
                >
                  ISO 14731
                </Link>
                , WPS-Register mit WPQR-Verknüpfung, automatische{" "}
                <Link
                  href="/wissen/iso-9606-1"
                  className="text-primary hover:underline"
                >
                  6-Monats-Erinnerungen
                </Link>{" "}
                für Schweißerqualifikationen, ZfP-Dokumentation und NCR-Prozess.
                Export als vollständiges Audit-Paket — für ISO 3834 und EN 1090
                gleichermaßen.
              </p>
              <Button asChild>
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  ISO 3834 digital umsetzen — kostenlos testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Weiterführende Artikel</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "ISO 14731 Aufgaben", href: "/wissen/iso-14731" },
                {
                  label: "ISO 9606-1 Schweißerprüfung",
                  href: "/wissen/iso-9606-1",
                },
                { label: "EN 1090 Audit", href: "/wissen/en-1090-audit" },
                {
                  label: "Ausführungsklassen",
                  href: "/wissen/ausführungsklassen",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
