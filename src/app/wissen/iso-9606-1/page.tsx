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
  title: "ISO 9606-1: Schweißerprüfung & 6-Monats-Regel",
  description:
    "Schweißerprüfung nach ISO 9606-1: Gültigkeitsdauer, 6-Monats-Bestätigung durch Schweißaufsicht und 3-Jahres-Verlängerung praxisnah erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/iso-9606-1` },
  openGraph: {
    type: "article",
    title: "ISO 9606-1: Schweißerprüfung & 6-Monats-Regel",
    description:
      "Gültigkeitsdauer, 6-Monats-Bestätigung durch Schweißaufsicht und 3-Jahres-Verlängerung nach ISO 9606-1 praxisnah erklärt.",
    url: `${siteConfig.url}/wissen/iso-9606-1`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO 9606-1: Schweißerprüfung & 6-Monats-Regel",
    description:
      "6-Monats-Bestätigung und 3-Jahres-Verlängerung nach ISO 9606-1 — praxisnah für Schweißaufsichtspersonen.",
  },
};

export default function Iso9606Page() {
  return (
    <>
      <WebPageSchema
        title="ISO 9606-1: Schweißerprüfung verlängern — 6-Monats-Regel erklärt"
        description="6-Monats-Bestätigung und 3-Jahres-Verlängerung nach ISO 9606-1."
        url="/wissen/iso-9606-1"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "ISO 9606-1", href: "/wissen/iso-9606-1" },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "ISO 9606-1", href: "/wissen/iso-9606-1" },
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
                <Clock className="h-3 w-3" /> 6 Minuten Lesezeit
              </span>
            </div>
            <h1 className="heading-hero mb-4">
              ISO 9606-1: Schweißerprüfung verlängern — die 6-Monats-Regel
              erklärt
            </h1>
            <p className="text-xl text-muted-foreground">
              ISO 9606-1 regelt die Qualifikation von Schweißern. Die Gültigkeit
              hängt von zwei Fristen ab: einer halbjährlichen Bestätigung durch
              die Schweißaufsicht und einer 3-jährigen Verlängerungsprüfung.
            </p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Wie lange ist eine Schweißerprüfung nach ISO 9606-1 gültig?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ein Schweißerzertifikat nach ISO 9606-1 ist grundsätzlich für 3
                Jahre gültig, vorausgesetzt: Der Schweißer bleibt im
                Geltungsbereich seiner Qualifikation tätig, und die
                Schweißaufsicht bestätigt dies alle 6 Monate schriftlich. Fehlt
                auch nur eine 6-Monats-Bestätigung, erlischt das Zertifikat —
                auch wenn die 3 Jahre noch nicht abgelaufen sind.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Die 6-Monats-Bestätigung: Was muss die Schweißaufsicht tun?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nach Klausel 9.1 der ISO 9606-1 muss die zuständige
                Schweißaufsichtsperson (oder der verantwortliche Koordinator)
                alle 6 Monate bestätigen, dass der Schweißer im Geltungsbereich
                seiner Qualifikation tätig war. Diese Bestätigung muss
                schriftlich erfolgen — mit Datum und Unterschrift der
                Schweißaufsicht.
              </p>
              <div className="mt-4 bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold mb-2">
                  Was muss bestätigt werden?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    ✓ Der Schweißer war im Geltungsbereich seiner Qualifikation
                    tätig
                  </li>
                  <li>
                    ✓ Das Schweißverfahren entspricht dem geprüften Verfahren
                  </li>
                  <li>
                    ✓ Die Bestätigung erfolgt durch die zuständige
                    Schweißaufsicht
                  </li>
                  <li>
                    ✓ Datum und Unterschrift werden im Zertifikat eingetragen
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Die 3-Jahres-Verlängerung: Wiederholungsprüfung oder
                Bestätigung?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nach 3 Jahren muss das Zertifikat erneuert werden. Dazu gibt es
                zwei Wege: Wiederholungsprüfung vor einem anerkannten Prüfer
                (Neuausstellung eines Zertifikats) oder Verlängerung durch
                Bestätigung eines verantwortlichen Koordinators, wenn bestimmte
                Bedingungen erfüllt sind (Zerstörungsfreie Prüfung der
                Schweißnähte, Produktionskontrollen).
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Was passiert, wenn die 6-Monats-Frist vergessen wird?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Das Zertifikat erlischt rückwirkend ab dem letzten
                Bestätigungsdatum. Der Schweißer darf ab diesem Zeitpunkt nicht
                mehr im Geltungsbereich schweißen — auch wenn er die Technik
                beherrscht. Beim nächsten EN 1090-Audit ist dies ein kritisches
                Nichtkonformitätsproblem.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Wie SchweißAufsicht die 6-Monats-Regel automatisiert
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SchweißAufsicht erinnert dich automatisch 30 Tage vor Ablauf der
                6-Monats-Frist. Du kannst die Bestätigung direkt in der App
                vornehmen — digital, mit Zeitstempel, auf dem Tablet in der
                Werkstatt. Keine Excel-Kalender, kein Papierchaos.
              </p>
              <Button asChild>
                <Link href="/schweissaufsicht-software#beta-anmeldung">
                  6-Monats-Erinnerungen automatisieren
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
                {
                  label: "Für Metallbauer",
                  href: "/metallbau-schweissaufsicht",
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
