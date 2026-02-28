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
  title: "Ausführungsklassen EXC1–EXC4: NDT & Qualifikation",
  description:
    "EXC2 vs. EXC3: Unterschiede bei NDT-Anforderungen, Schweißaufsichts-Qualifikation und WPS-Abdeckung praxisnah erklärt für IWE, IWT und IWS.",
  alternates: { canonical: `${siteConfig.url}/wissen/ausfuehrungsklassen` },
  openGraph: {
    type: "article",
    title: "Ausführungsklassen EXC1–EXC4: NDT & Qualifikation",
    description:
      "EXC2 vs. EXC3: Unterschiede bei NDT-Anforderungen, Schweißaufsichts-Qualifikation und WPS-Abdeckung praxisnah erklärt.",
    url: `${siteConfig.url}/wissen/ausfuehrungsklassen`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ausführungsklassen EXC1–EXC4: NDT & Qualifikation",
    description:
      "EXC2 vs. EXC3: NDT-Anforderungen, Schweißaufsichts-Qualifikation und WPS-Abdeckung erklärt für IWE, IWT und IWS.",
  },
};

export default function AusfuehrungsklassenPage() {
  return (
    <>
      <WebPageSchema
        title="Ausführungsklassen EXC1 bis EXC4 — Schweißaufsicht-Anforderungen"
        description="Unterschiede bei NDT, Qualifikation und WPS-Abdeckung je Ausführungsklasse."
        url="/wissen/ausfuehrungsklassen"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "Ausführungsklassen", href: "/wissen/ausfuehrungsklassen" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "Ausführungsklassen",
              href: "/wissen/ausfuehrungsklassen",
            },
          ]}
        />
      </div>
      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                Grundlagen
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 7 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              Ausführungsklassen EXC1 bis EXC4 — was das für die Schweißaufsicht
              bedeutet
            </h1>
            <p className="text-xl text-muted-foreground">
              Die Ausführungsklasse bestimmt, welche Anforderungen an
              Dokumentation, NDT-Prüfumfang und die Qualifikation der
              Schweißaufsicht gelten. EXC2 und EXC3 sind im deutschen Metallbau
              am häufigsten.
            </p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Was sind Ausführungsklassen nach EN 1090-2?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ausführungsklassen (EXC1 bis EXC4) legen fest, wie streng die
                Anforderungen bei der Herstellung von Stahl- und
                Aluminiumtragwerken sein müssen. Je höher die Klasse, desto
                umfangreicher sind die Dokumentations-, Qualifikations- und
                Prüfpflichten. Die Klasse wird vom Tragwerksplaner oder
                Auftraggeber vorgegeben — du als Schweißaufsicht musst
                sicherstellen, dass dein WPK-System die entsprechenden
                Anforderungen erfüllt.
              </p>
            </section>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm rounded-xl overflow-hidden border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-3 font-semibold">Klasse</th>
                    <th className="text-left p-3 font-semibold">Konsequenz</th>
                    <th className="text-left p-3 font-semibold">
                      NDT Stumpfnähte
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Schweißkoordinator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["EXC1", "CC1 (gering)", "Nur VT", "Nicht zwingend"],
                    ["EXC2", "CC2 (mittel)", "5–10 %", "IWS / EWS / SFI"],
                    ["EXC3", "CC3 (hoch)", "10–20 %", "IWE / IWT / EWE / EWT"],
                    ["EXC4", "CC4 (extrem)", "Bis 100 %", "IWE (Vollzeit)"],
                  ].map(([exc, cc, ndt, sk]) => (
                    <tr key={exc} className="border-t">
                      <td className="p-3 font-semibold text-primary">{exc}</td>
                      <td className="p-3 text-muted-foreground">{cc}</td>
                      <td className="p-3 text-muted-foreground">{ndt}</td>
                      <td className="p-3 text-muted-foreground">{sk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. EXC2 — der Standard für die meisten Metallbau-Betriebe
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC2 gilt für normale Gebäude, Hallen und übliche
                Stahlbaukonstruktionen — das ist die häufigste Ausführungsklasse
                im deutschen Metallbau. Als Schweißaufsichtsperson (IWS, EWS
                oder höher) bist du in EXC2 formal ausreichend qualifiziert. Der
                NDT-Umfang beträgt 5–10 % bei Stumpfnähten (zusätzlich zur
                Sichtprüfung VT).
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. EXC3 — erweiterte Anforderungen für die Schweißaufsicht
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC3 gilt für Tragwerke mit hoher Konsequenz bei Versagen —
                wichtige Gebäude, Brücken mit hohem Verkehr. Ab EXC3 ist ein IWE
                oder IWT (bzw. EWE oder EWT nach DVS/EWF-System) als
                Schweißkoordinator Pflicht. Der NDT-Umfang steigt auf 10–20 %.
                Alle WPS müssen durch WPQR nach ISO 15614-1 abgedeckt sein.
              </p>
              <div className="mt-4 bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  EXC3 im Vergleich zu EXC2 — zusätzliche Pflichten
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    ✓ Höher qualifizierter Schweißkoordinator (IWE/IWT statt
                    IWS)
                  </li>
                  <li>✓ NDT-Prüfumfang 10–20 % statt 5–10 %</li>
                  <li>
                    ✓ Vollständiges Änderungsprotokoll aller WPK-Dokumente
                  </li>
                  <li>
                    ✓ Strengere Anforderungen an Materialzertifikate (EN 10204
                    Typ 3.1)
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. EXC4 — sicherheitskritische Konstruktionen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                EXC4 erfordert 100 % NDT-Prüfung, vollständige
                Rückverfolgbarkeit aller Materialien und Schweißnähte sowie
                einen IWE-qualifizierten Schweißkoordinator in Vollzeit. In der
                Praxis selten — betrifft z. B. Kernkraftwerksbauteile oder
                sicherheitskritische Offshore-Konstruktionen.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. WPK-System und Ausführungsklasse: Was musst du anpassen?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das WPK-System muss auf die höchste Ausführungsklasse
                ausgerichtet sein, die dein Betrieb regelmäßig ausführt. Nimmst
                du sowohl EXC2- als auch EXC3-Aufträge an, muss das WPK EXC3
                erfüllen. Beim nächsten{" "}
                <Link
                  href="/wissen/en-1090-audit"
                  className="text-primary hover:underline"
                >
                  EN 1090-Audit
                </Link>{" "}
                prüft der Auditor genau, ob Dokumentation, NDT-Planung und
                Qualifikationen zur deklarierten Ausführungsklasse passen.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Wie SchweißAufsicht die Ausführungsklasse berücksichtigt
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In SchweißAufsicht hinterlegst du einmalig deine
                Ausführungsklasse. Das System passt NDT-Planungsvorgaben,
                Dokumentationspflichten und Qualifikationsanforderungen
                automatisch an. Beim Audit siehst du sofort, welche
                Anforderungen für deine EXC-Klasse erfüllt sind — und welche
                noch fehlen.
              </p>
              <Button asChild>
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  EXC-konforme Dokumentation — kostenlos testen
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
                { label: "EN 1090 Audit", href: "/wissen/en-1090-audit" },
                { label: "ISO 3834", href: "/wissen/iso-3834" },
                { label: "Für Stahlbau", href: "/stahlbau-schweissaufsicht" },
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
