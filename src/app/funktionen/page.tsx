import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  UserCheck,
  FileText,
  PenLine,
  AlertOctagon,
  Eye,
  BarChart3,
  Smartphone,
  Bell,
  Search,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funktionen – ISO 14731 Aufgabenmatrix & mehr",
  description:
    "Alle Funktionen von SchweißAufsicht: ISO 14731 Aufgabenmatrix (23+ Bereiche), Schweißer-Tracking, WPS-Register, NCR-Workflow, ZfP-Planung. Mobile-First.",
  alternates: { canonical: `${siteConfig.url}/funktionen` },
  openGraph: {
    title: "Funktionen – ISO 14731 Aufgabenmatrix & mehr",
    description:
      "Alle Funktionen für IWE, IWT und IWS: Aufgabenmatrix, Qualifikationsverwaltung, Audit-Trail.",
    url: `${siteConfig.url}/funktionen`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Funktionen – ISO 14731 Aufgabenmatrix & mehr",
    description:
      "ISO 14731 Aufgabenmatrix, Schweißer-Tracking, WPS-Register, NCR-Workflow, ZfP-Planung — für IWE, IWT und IWS.",
  },
};

const featureGroups = [
  {
    title: "Tagesansicht & ISO 14731 Aufgabenmatrix",
    icon: ClipboardList,
    description:
      "Die ISO 14731 (aktuell: 2019) definiert 23+ Aufgabenbereiche für Schweißaufsichtspersonen. SchweißAufsicht bildet alle diese Bereiche in einer strukturierten Aufgabenmatrix ab — mit täglicher Prioritätsliste und Statusverfolgung.",
    features: [
      "Alle 23+ ISO 14731 Aufgabenbereiche vorstrukturiert",
      "Tagesansicht: Was ist offen, was ist erledigt?",
      "Aufgaben nach Dringlichkeit priorisiert",
      "Aufgabenhistorie mit Zeitstempel",
      "Rollenzuordnung (IWE, IWT, IWS)",
    ],
  },
  {
    title: "Schweißer-Qualifikationsverwaltung (ISO 9606-1)",
    icon: UserCheck,
    description:
      "Verwalte alle Schweißer-Prüfbescheinigungen nach ISO 9606-1. Automatische Erinnerungen bei ablaufenden Qualifikationen — 6-Monats-Bestätigung und 3-Jahres-Verlängerung nie wieder vergessen.",
    features: [
      "Schweißer-Profile mit allen Qualifikationsnachweisen",
      "Gültigkeitsmatrix (Prozess × Position × Werkstoffgruppe)",
      "Automatische 6-Monats-Erinnerung (ISO 9606-1 Klausel 9)",
      "Digitale Unterschrift für Bestätigung direkt auf dem Tablet",
      "3-Jahres-Verlängerung mit Wiederholungsprüfung tracken",
      "Export aller Prüfbescheinigungen als PDF",
    ],
  },
  {
    title: "WPS- & WPQR-Register",
    icon: FileText,
    description:
      "Vollständiges Register aller Schweißanweisungen (WPS) und Verfahrensprüfungen (WPQR). Suchfunktion mit Geltungsbereich-Anzeige — immer die richtige WPS für jede Naht.",
    features: [
      "WPS-Register nach ISO 15609-1 strukturiert",
      "Geltungsbereich nach ISO 15614-1 berechnet",
      "WPQR-Referenzierung und Abdeckungsmatrix",
      "Suchfunktion nach Prozess, Werkstoff, Dicke, Position",
      "Mobile Ansicht für die Werkstatt",
      "Versionierung und Änderungshistorie",
    ],
  },
  {
    title: "Digitaler Unterschrift-Workflow",
    icon: PenLine,
    description:
      "Freigaben, Protokolle und Bestätigungen werden digital auf dem Tablet unterschrieben — kein Papierchaos mehr. Alle Unterschriften mit Zeitstempel und Benutzer gespeichert.",
    features: [
      "Digitale Unterschrift auf Tablet und Handy",
      "Zeitstempel und Benutzer-Authentifizierung",
      "Workflow für Freigaben (WPS, ZfP, NCR)",
      "E-Mail-Benachrichtigung bei ausstehenden Unterschriften",
      "Revisionshistorie aller Signaturen",
    ],
  },
  {
    title: "NCR-Workflow (Non-Conformance-Reports)",
    icon: AlertOctagon,
    description:
      "Abweichungen erfassen, verfolgen und abschließen nach ISO 9001-Muster. Von OPEN bis VERIFIED — jeder NCR lückenlos dokumentiert.",
    features: [
      "NCR-Workflow: OPEN → INVESTIGATING → CORRECTIVE ACTION → CLOSED → VERIFIED",
      "Ursachenanalyse und Korrekturmaßnahmen dokumentieren",
      "Projektzuordnung für NCRs",
      "Statusbenachrichtigungen per E-Mail",
      "NCR-Statistiken und Trendanalyse",
    ],
  },
  {
    title: "ZfP-Planung & Freigaben",
    icon: Eye,
    description:
      "ZfP-Umfang nach EN 1090-2 Tabelle 24 planen, Prüfer beauftragen und Ergebnisse dokumentieren. Alle Freigaben digital und nachvollziehbar.",
    features: [
      "ZfP-Umfangsberechnung nach EXC-Klasse und Nahtart",
      "VT immer 100 %, MT/UT/RT als Ergänzungsprüfung",
      "Prüfergebnisse mit Beurteilung dokumentieren",
      "Freigabe-Workflow mit digitalem Stempel",
      "ZfP-Berichte als PDF exportieren",
    ],
  },
  {
    title: "Audit-Trail & Reporting",
    icon: BarChart3,
    description:
      "Lückenloser Audit-Trail aller Aktionen mit Zeitstempel, Benutzer und Änderungsprotokoll. Export als vollständiges Audit-Paket für den nächsten TÜV-Termin.",
    features: [
      "Unveränderlicher Audit-Trail (ISO 9001 konform)",
      "Export als vollständiges Audit-Paket (PDF)",
      "Filterbare Protokollansicht",
      "Compliance-Dashboard mit Statusübersicht",
      "Regulatorische Berichte auf Knopfdruck",
    ],
  },
  {
    title: "Mobile App (Tablet & Handy)",
    icon: Smartphone,
    description:
      "SchweißAufsicht ist Mobile-First entwickelt. Vollständige Funktionalität auf dem Hallenflur — WPS abrufen, unterschreiben, dokumentieren, ohne zurück ins Büro zu müssen.",
    features: [
      "Optimiert für Tablet und Handy (Web-App, keine Installation)",
      "Schneller Zugriff auf WPS und Schweißer-Profile",
      "Offline-Basisfunktionalität (Roadmap v2)",
      "Touch-optimierte Oberfläche",
      "Kamera-Integration für Fotos und Dokumente",
    ],
  },
];

export default function FunktionenPage() {
  return (
    <>
      <WebPageSchema
        title="Funktionen – ISO 14731 Aufgabenmatrix & mehr"
        description="Alle Funktionen für IWE, IWT und IWS: ISO 14731 Aufgabenmatrix, Schweißer-Tracking, Audit-Trail."
        url="/funktionen"
      />
      <BreadcrumbSchema
        items={[{ label: "Funktionen", href: "/funktionen" }]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Funktionen", href: "/funktionen" }]} />
      </div>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom text-center max-w-3xl">
          <h1 className="heading-hero mb-4">Alle Funktionen auf einen Blick</h1>
          <p className="text-xl text-muted-foreground">
            Entwickelt für IWE, IWT und IWS — mit dem genauen Funktionsumfang,
            den ISO 14731 und EN 1090 erfordern.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild>
              <Link href="/schweissaufsicht-software#beta-anmeldung">
                Beta-Zugang sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-16">
            {featureGroups.map((group, idx) => (
              <div
                key={group.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <group.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{group.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {group.description}
                  </p>
                  <ul className="space-y-2">
                    {group.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${idx % 2 === 1 ? "lg:order-1" : ""} bg-muted/30 rounded-2xl p-12 flex items-center justify-center`}
                >
                  <group.icon className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional features row */}
      <section className="py-16 bg-muted/20">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">
            Weitere Funktionen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Bell,
                title: "Automatische Erinnerungen",
                description:
                  "E-Mail-Benachrichtigungen bei ablaufenden Qualifikationen, anstehenden Prüfungen und ausstehenden Unterschriften.",
              },
              {
                icon: Search,
                title: "Volltext-Suche",
                description:
                  "Alle Dokumente, WPS, Schweißer und Berichte sofort findbar — auch mobil in der Werkstatt.",
              },
              {
                icon: Download,
                title: "PDF-Export",
                description:
                  "Alle Dokumente als PDF exportieren — einzeln oder als vollständiges Audit-Paket für den TÜV-Termin.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border rounded-xl p-6">
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="heading-section text-primary-foreground mb-4">
            Jetzt kostenlos testen
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Während der Beta-Phase kostenlos. Beta-Nutzer erhalten 30 % Rabatt
            auf das erste Jahr.
          </p>
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
