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
import { ArrowRight, AlertTriangle, Clock, FileX, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Schweißaufsicht für Metallbau & Schlosserei",
  description:
    "SchweißAufsicht für Metallbauer und Schlosser mit EN 1090 EXC2: Schweißer-Prüfbescheinigungen, WPS-Register, Audit-Trail. Jetzt kostenlos testen.",
  alternates: {
    canonical: `${siteConfig.url}/metallbau-schweissaufsicht`,
  },
  openGraph: {
    title: "Schweißaufsicht für Metallbau & Schlosserei",
    description:
      "SchweißAufsicht für Metallbauer und Schlosser mit EN 1090 EXC2: Schweißer-Prüfbescheinigungen, WPS-Register, Audit-Trail. Jetzt kostenlos testen.",
    url: `${siteConfig.url}/metallbau-schweissaufsicht`,
  },
};

const faqItems = [
  {
    question: "Reicht SchweißAufsicht für EN 1090 EXC2?",
    answer:
      "Ja, der Funktionsumfang ist auf die Anforderungen von EXC2-Betrieben ausgelegt: WPS-Register, Schweißer-Qualifikationen, ZfP-Grunddokumentation und Audit-Trail.",
  },
  {
    question:
      "Kann ich als IWS SchweißAufsicht nutzen, oder ist das nur für IWE?",
    answer:
      "SchweißAufsicht ist für alle Kompetenzniveaus (IWS/IWT/IWE) ausgelegt. Die relevanten Funktionen passen sich an deinen Verantwortungsbereich an.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "Kontozugang anlegen, Schweißer eintragen, WPS importieren — in weniger als einem Tag einsatzbereit.",
  },
  {
    question:
      "Funktioniert SchweißAufsicht auch ohne Internetzugang in der Werkstatt?",
    answer:
      "Die App ist für mobile Nutzung optimiert. Für vollständige Offline-Funktionalität: auf der Roadmap für Version 2.",
  },
  {
    question:
      "Wie viel kostet SchweißAufsicht für einen kleinen Metallbaubetrieb?",
    answer:
      "Aktuell in der Beta kostenlos. Nach der Beta: Starter-Paket ab 49 EUR/Monat.",
  },
];

export default function MetallbauSchweissaufsichtPage() {
  return (
    <>
      <WebPageSchema
        title="Schweißaufsicht für Metallbau & Schlosserei"
        description="SchweißAufsicht für Metallbauer mit EN 1090 EXC2."
        url="/metallbau-schweissaufsicht"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Metallbau & Schlosserei",
            href: "/metallbau-schweissaufsicht",
          },
        ]}
      />
      <FAQSchema items={faqItems} />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Metallbau & Schlosserei",
              href: "/metallbau-schweissaufsicht",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-hero mb-4">
                Schweißaufsicht für Metallbau und Schlosserei — EN 1090 EXC2
                ohne Papierchaos
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Als IWS oder IWT in einem kleinen Betrieb trägst du die gesamte
                Dokumentationspflicht allein. SchweißAufsicht übernimmt die
                Verwaltung — du übernimmst die Technik.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  Jetzt Beta-Zugang sichern — kostenlos für Metallbauer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 space-y-4">
              <h2 className="font-semibold text-lg">
                3 häufige Probleme im Metallbau
              </h2>
              {[
                {
                  icon: Clock,
                  title: "Schweißer-Prüfbescheinigungen laufen still ab",
                  text: "8 Schweißer, jeder mit anderem Prüfdatum. Die 6-Monats-Unterschrift nach ISO 9606-1 wird vergessen — beim DVS-Audit ist es zu spät.",
                },
                {
                  icon: FileX,
                  title: "Audit-Unterlagen brauchen Stunden",
                  text: "WPS-Register, Zertifikate, ZfP-Berichte über Ordner und SharePoint verteilt. Zusammensuchen kostet einen halben Arbeitstag.",
                },
                {
                  icon: AlertTriangle,
                  title: "Papierdokumente verschwinden",
                  text: "Handgeschriebene Freigaben, fehlende Unterschriften. Beim Reklamationsfall fehlen die Nachweise.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">
            Was SchweißAufsicht für Metallbauer löst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title:
                  "Automatische Erinnerungen an ablaufende Qualifikationen",
                description:
                  "6-Monats-Bestätigung und 3-Jahres-Verlängerung nach ISO 9606-1 — automatisch erinnert, digital unterschrieben.",
              },
              {
                title: "Digitale Unterschrift für 6-Monats-Bestätigung",
                description:
                  "Schweißer unterschreiben direkt auf dem Tablet in der Werkstatt. Kein Zettel-Chaos, lückenlose Dokumentation.",
              },
              {
                title: "WPS-Register mit Suchfunktion",
                description:
                  "WPS nach Verfahren, Werkstoff, Dicke und Position suchbar. Geltungsbereich direkt sichtbar — keine Ordner mehr.",
              },
              {
                title: "Audit-Trail: alle Freigaben dokumentiert",
                description:
                  "Alle Aktionen mit Zeitstempel und Benutzer. Export als vollständiges Audit-Paket für den TÜV-Termin.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card border rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-sub text-center mb-10">
            Häufige Fragen von Metallbauern
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="heading-section text-primary-foreground mb-4">
            Jetzt Beta-Zugang sichern — kostenlos für Metallbauer
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Während der Beta kostenlos. 30 % Rabatt auf das erste Jahr nach der
            Beta.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Beta-Zugang sichern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <h3 className="font-semibold mb-4">Weiterführende Artikel</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "ISO 14731 erklärt", href: "/wissen/iso-14731" },
              {
                label: "ISO 9606-1: Schweißerprüfung",
                href: "/wissen/iso-9606-1",
              },
              {
                label: "Ausführungsklassen EXC1-EXC4",
                href: "/wissen/ausführungsklassen",
              },
              { label: "Stahlbau EXC3", href: "/stahlbau-schweissaufsicht" },
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
      </section>
    </>
  );
}
