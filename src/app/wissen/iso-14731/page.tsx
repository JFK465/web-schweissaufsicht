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
  title: "ISO 14731: Aufgaben der Schweißaufsicht",
  description:
    "ISO 14731 definiert 23+ Aufgabenbereiche für Schweißaufsichtspersonen. Dieser Ratgeber erklärt die Norm praxisnah für IWE, IWT und IWS.",
  alternates: { canonical: `${siteConfig.url}/wissen/iso-14731` },
  openGraph: {
    type: "article",
    title: "ISO 14731: Aufgaben der Schweißaufsicht",
    description:
      "ISO 14731 definiert 23+ Aufgabenbereiche für Schweißaufsichtspersonen. Praxisratgeber für IWE, IWT und IWS.",
    url: `${siteConfig.url}/wissen/iso-14731`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO 14731: Aufgaben der Schweißaufsicht",
    description:
      "ISO 14731 definiert 23+ Aufgabenbereiche für Schweißaufsichtspersonen. Praxisratgeber für IWE, IWT und IWS.",
  },
};

export default function Iso14731Page() {
  return (
    <>
      <WebPageSchema
        title="ISO 14731: Aufgaben der Schweißaufsicht"
        description="Die 23+ Aufgabenbereiche nach ISO 14731:2019 praxisnah erklärt."
        url="/wissen/iso-14731"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "ISO 14731", href: "/wissen/iso-14731" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "ISO 14731", href: "/wissen/iso-14731" },
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
                <Clock className="h-3 w-3" /> 8 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              ISO 14731: Aufgaben und Verantwortlichkeiten der Schweißaufsicht
            </h1>
            <p className="text-xl text-muted-foreground">
              ISO 14731 definiert, welche Aufgaben eine Schweißaufsichtsperson
              erfüllen muss. Dieser Ratgeber erklärt die Norm praxisnah für
              deinen Alltag als IWE, IWT oder IWS.
            </p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Was ist ISO 14731?</h2>
              <p className="text-muted-foreground leading-relaxed">
                ISO 14731 ist die internationale Norm für die Aufgaben und
                Verantwortlichkeiten von Schweißaufsichtspersonen. Die aktuelle
                Version ist ISO 14731:2019 (in Deutschland als DIN EN ISO 14731
                umgesetzt). Sie gilt als Grundlage für alle Schweißbetriebe, die
                nach EN 1090, ISO 3834 oder vergleichbaren Normen zertifiziert
                sind.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Die 23+ Aufgabenbereiche nach Anhang B
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Anhang B der ISO 14731 listet die Aufgabenbereiche der
                Schweißaufsicht auf. Diese umfassen unter anderem:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 font-semibold">
                        Aufgabenbereich
                      </th>
                      <th className="text-left p-3 font-semibold">
                        Beschreibung
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Überprüfung von WPS",
                        "Schweißanweisungen auf Normkonformität prüfen",
                      ],
                      [
                        "Schweißerqualifikation",
                        "Gültigkeit aller ISO 9606-1 Zeugnisse überwachen",
                      ],
                      [
                        "Grundwerkstoff-Überprüfung",
                        "Materialzertifikate prüfen und archivieren",
                      ],
                      ["ZfP-Planung", "Prüfumfang nach EXC-Klasse planen"],
                      [
                        "NCR-Bearbeitung",
                        "Abweichungen erfassen und Korrekturmaßnahmen verfolgen",
                      ],
                      [
                        "Audit-Vorbereitung",
                        "Dokumentation für externe Audits bereitstellen",
                      ],
                    ].map(([t, d]) => (
                      <tr key={t} className="border-t">
                        <td className="p-3 font-medium">{t}</td>
                        <td className="p-3 text-muted-foreground">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Qualifikationsniveaus: IWS, IWT, IWE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die ISO 14731 unterscheidet drei Qualifikationsniveaus: IWS
                (Internationaler Schweißfachmann), IWT (Internationaler
                Schweißtechniker) und IWE (Internationaler Schweißingenieur).
                Das erforderliche Niveau hängt von der Ausführungsklasse (EXC)
                und dem eingesetzten Schweißverfahren ab. Für EXC3 und EXC4 ist
                ein IWE oder EWT Pflicht.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. ISO 14731 und ISO 9606-1: Zusammenspiel
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Eine der häufigsten praktischen Aufgaben nach ISO 14731 ist die
                Überwachung der Schweißerqualifikationen nach{" "}
                <Link
                  href="/wissen/iso-9606-1"
                  className="text-primary hover:underline"
                >
                  ISO 9606-1
                </Link>
                . Die Schweißaufsicht muss alle 6 Monate bestätigen, dass der
                Schweißer im Geltungsbereich seiner Qualifikation tätig war.
                Wird diese Bestätigung vergessen, erlischt die Qualifikation.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. ISO 14731 und EN 1090: Was fordert der Auditor?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei einem{" "}
                <Link
                  href="/wissen/en-1090-audit"
                  className="text-primary hover:underline"
                >
                  EN 1090-Überwachungsaudit
                </Link>{" "}
                prüft der Auditor, ob die Schweißaufsicht die Aufgaben nach ISO
                14731 nachweisbar erfüllt. Typische Prüfpunkte: Sind alle WPS
                aktuell und freigegeben? Sind alle Schweißerqualifikationen
                gültig? Gibt es einen dokumentierten NCR-Prozess?
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Wie SchweißAufsicht die ISO 14731 umsetzt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SchweißAufsicht bildet alle 23+ Aufgabenbereiche nach ISO 14731
                in einer digitalen Aufgabenmatrix ab. Du siehst täglich, welche
                Aufgaben offen sind, erhältst automatische Erinnerungen und
                kannst alle Aktivitäten lückenlos nachweisen — für das nächste
                Audit.
              </p>
              <Button asChild>
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  ISO 14731 digital umsetzen — kostenlos testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Weiterführende Artikel</h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "ISO 9606-1: Schweißerprüfung",
                  href: "/wissen/iso-9606-1",
                },
                { label: "EN 1090 Audit", href: "/wissen/en-1090-audit" },
                {
                  label: "Ausführungsklassen",
                  href: "/wissen/ausfuehrungsklassen",
                },
                { label: "ISO 3834", href: "/wissen/iso-3834" },
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
