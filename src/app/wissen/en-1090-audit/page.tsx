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
  title: "EN 1090 Audit vorbereiten — Checkliste",
  description:
    "Wie bereitest du dich als Schweißaufsicht auf ein EN 1090-Überwachungsaudit vor? Checkliste, häufige Fehler und Praxistipps für IWE, IWT und IWS.",
  alternates: { canonical: `${siteConfig.url}/wissen/en-1090-audit` },
  openGraph: {
    type: "article",
    title: "EN 1090 Audit vorbereiten — Checkliste",
    description:
      "Checkliste, häufige Fehler und Praxistipps für EN 1090-Überwachungsaudits. Für IWE, IWT und IWS.",
    url: `${siteConfig.url}/wissen/en-1090-audit`,
  },
  twitter: {
    card: "summary_large_image",
    title: "EN 1090 Audit vorbereiten — Checkliste",
    description:
      "Checkliste, häufige Fehler und Praxistipps für EN 1090-Überwachungsaudits. Für IWE, IWT und IWS.",
  },
};

export default function En1090AuditPage() {
  return (
    <>
      <WebPageSchema
        title="EN 1090 Audit vorbereiten — Checkliste"
        description="Checkliste und Praxistipps für EN 1090-Audits."
        url="/wissen/en-1090-audit"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "EN 1090 Audit", href: "/wissen/en-1090-audit" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "EN 1090 Audit", href: "/wissen/en-1090-audit" },
          ]}
        />
      </div>
      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Praxis
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 10 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              EN 1090 Audit vorbereiten — die Checkliste für
              Schweißaufsichtspersonen
            </h1>
            <p className="text-xl text-muted-foreground">
              Ein EN 1090-Überwachungsaudit ist der Stresstest für deine
              Dokumentation. Mit dieser Checkliste bist du vorbereitet — in
              Minuten statt Stunden.
            </p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was prüft der Auditor beim EN 1090-Audit?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Auditor bewertet, ob das Werkseigene
                Produktionskontrollsystem (WPK) den Anforderungen der EN 1090-1
                und der jeweiligen Ausführungsklasse entspricht. Schwerpunkte:
                Schweißaufsicht (ISO 14731), Schweißerqualifikationen (ISO
                9606-1), WPS-Abdeckung (ISO 15609-1/15614-1), ZfP-Dokumentation
                und NCR-Prozess.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Checkliste: Diese Dokumente muss du bereithalten
              </h2>
              <div className="space-y-3">
                {[
                  {
                    kategorie: "Schweißaufsicht",
                    items: [
                      "Nachweis der Qualifikation (IWS/IWT/IWE-Zertifikat)",
                      "Bestellungsschreiben als verantwortliche Schweißaufsicht",
                      "Aufgabenbeschreibung nach ISO 14731",
                    ],
                  },
                  {
                    kategorie: "Schweißerqualifikationen",
                    items: [
                      "Alle gültigen ISO 9606-1 Zertifikate",
                      "6-Monats-Bestätigungen für alle Schweißer",
                      "Nachweis der letzten Verlängerungsprüfung oder -bestätigung",
                    ],
                  },
                  {
                    kategorie: "WPS-Register",
                    items: [
                      "Alle gültigen WPS mit Freigabedatum",
                      "Zugehörige WPQR als Grundlage",
                      "Geltungsbereichsnachweis nach ISO 15614-1",
                    ],
                  },
                  {
                    kategorie: "ZfP-Dokumentation",
                    items: [
                      "ZfP-Plan für aktuelle/abgeschlossene Projekte",
                      "Prüfprotokolle (VT, MT, UT, RT)",
                      "Prüferberichte und Freigaben",
                    ],
                  },
                  {
                    kategorie: "NCR-Nachweise",
                    items: [
                      "Liste aller offenen und geschlossenen NCRs",
                      "Korrekturmaßnahmen dokumentiert",
                      "Verifizierung abgeschlossen",
                    ],
                  },
                ].map((group) => (
                  <div
                    key={group.kategorie}
                    className="bg-card border rounded-xl p-5"
                  >
                    <h3 className="font-semibold mb-3">{group.kategorie}</h3>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Die häufigsten Nichtkonformitäten beim EN 1090-Audit
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Fehlende 6-Monats-Bestätigung bei Schweißer-Qualifikationen",
                  "WPS ohne gültige WPQR als Grundlage",
                  "ZfP-Prüfumfang nicht dokumentiert oder unterschritten",
                  "NCR-Prozess nicht nachvollziehbar dokumentiert",
                  "Schweißaufsicht ohne schriftliche Bestellung",
                  "Abgelaufene Schweißerqualifikationen im aktiven Einsatz",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. So bereite ich mich mit SchweißAufsicht vor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SchweißAufsicht hält alle Dokumente jederzeit griffbereit.
                Audit-Trail, Schweißer-Qualifikationen, WPS-Register und
                ZfP-Dokumentation sind in einer App zusammengefasst. Export als
                vollständiges Audit-Paket — auf Knopfdruck, nicht nach
                stundenlanger Suche.
              </p>
              <Button asChild>
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  Audit-ready werden — kostenlos testen
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
                { label: "ISO 9606-1", href: "/wissen/iso-9606-1" },
                {
                  label: "Ausführungsklassen",
                  href: "/wissen/ausfuehrungsklassen",
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
