import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise – Schweißaufsicht Software ab 0 EUR",
  description:
    "SchweißAufsicht Preise: Starter, Professional und Enterprise. Aktuell in der Beta kostenlos testen. Keine versteckten Kosten, DSGVO-konform, Made in Germany.",
  alternates: { canonical: `${siteConfig.url}/preise` },
  openGraph: {
    title: "Preise – Schweißaufsicht Software ab 0 EUR",
    description:
      "Starter, Professional, Enterprise. Beta kostenlos. 30 % Rabatt für Beta-Nutzer.",
    url: `${siteConfig.url}/preise`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise – Schweißaufsicht Software ab 0 EUR",
    description:
      "Starter, Professional, Enterprise. Beta kostenlos. 30 % Rabatt für Beta-Nutzer. Keine Mindestlaufzeit.",
  },
};

const tiers = [
  {
    name: "Starter",
    price: "49",
    period: "/Monat",
    description: "Für IWS und IWT in kleinen Betrieben mit 1–10 Schweißern",
    features: [
      "ISO 14731 Aufgabenmatrix",
      "Bis zu 10 Schweißer-Profile",
      "Bis zu 30 WPS",
      "Automatische Ablauf-Erinnerungen",
      "6-Monats-Unterschrift digital",
      "1 Benutzer",
      "E-Mail-Support",
      "PDF-Export",
    ],
    notIncluded: [
      "NCR-Workflow",
      "ZfP-Planung",
      "Projektbezogene Dokumentation",
      "Multi-Benutzer",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "99",
    period: "/Monat",
    description: "Für IWE in mittleren Betrieben mit 10–50 Schweißern",
    features: [
      "Alles aus Starter",
      "Unbegrenzte Schweißer-Profile",
      "Unbegrenzte WPS & WPQR",
      "NCR-Workflow (ISO 9001)",
      "ZfP-Planung nach EN 1090-2",
      "Audit-Trail & Export",
      "Projektbezogene Dokumentation",
      "Bis zu 5 Benutzer",
      "Rollenverwaltung",
      "Prioritärer Support",
    ],
    notIncluded: ["Multi-Mandanten", "API-Zugang", "SSO"],
    cta: "Beta-Zugang sichern",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    period: "",
    description: "Für externe Schweißaufsicht & Betriebe ab 50 Schweißern",
    features: [
      "Alles aus Professional",
      "Multi-Mandanten-Verwaltung",
      "Unbegrenzte Benutzer",
      "API-Zugang",
      "SSO/SAML",
      "Dedizierter Account Manager",
      "SLA",
      "Onboarding-Support",
    ],
    notIncluded: [],
    cta: "Demo anfragen",
    highlighted: false,
  },
];

const faq = [
  {
    q: "Was passiert nach der Beta-Phase?",
    a: "Beta-Nutzer erhalten 30 % Rabatt auf das erste Jahr nach der Beta. Du wirst rechtzeitig informiert und kannst dann wählen, welches Paket am besten passt.",
  },
  {
    q: "Gibt es eine Mindestlaufzeit?",
    a: "Nein. SchweißAufsicht ist monatlich kündbar. Keine Einrichtungsgebühren.",
  },
  {
    q: "Kann ich das Paket später wechseln?",
    a: "Ja, jederzeit. Upgrade oder Downgrade wird sofort wirksam.",
  },
  {
    q: "Welches Paket brauche ich für EXC3?",
    a: "Für EXC3-Betriebe empfehlen wir Professional — der NCR-Workflow, die ZfP-Planung und der vollständige Audit-Trail sind enthalten.",
  },
];

export default function PreisePage() {
  return (
    <>
      <WebPageSchema
        title="Preise – Schweißaufsicht Software ab 0 EUR"
        description="Starter, Professional, Enterprise. Beta kostenlos. DSGVO-konform."
        url="/preise"
      />
      <BreadcrumbSchema items={[{ label: "Preise", href: "/preise" }]} />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Preise", href: "/preise" }]} />
      </div>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom text-center max-w-3xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            BETA — Aktuell kostenlos
          </Badge>
          <h1 className="heading-hero mb-4">
            Einfache Preise, keine Überraschungen
          </h1>
          <p className="text-xl text-muted-foreground">
            Während der Beta-Phase ist SchweißAufsicht kostenlos. Beta-Nutzer
            erhalten 30 % Rabatt auf das erste Jahr.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-xl scale-105 bg-card"
                    : "bg-card"
                }`}
              >
                {tier.highlighted && (
                  <Badge className="self-start mb-4 bg-primary text-primary-foreground">
                    Beliebt
                  </Badge>
                )}
                <h2 className="text-2xl font-bold mb-1">{tier.name}</h2>
                <div className="mb-2">
                  <span className="line-through text-muted-foreground text-sm">
                    {tier.price === "Auf Anfrage"
                      ? ""
                      : `${tier.price} EUR${tier.period}`}
                  </span>
                  <div className="text-3xl font-bold text-primary">
                    {tier.price === "Auf Anfrage" ? "Auf Anfrage" : "0 EUR"}
                    {tier.price !== "Auf Anfrage" && (
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        in der Beta
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground/60"
                    >
                      <span className="shrink-0 mt-0.5">–</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={tier.highlighted ? "default" : "outline"}
                  className={
                    tier.highlighted ? "bg-primary hover:bg-primary/90" : ""
                  }
                >
                  <Link
                    href={
                      tier.name === "Enterprise"
                        ? "/kontakt"
                        : "/schweissaufsicht-software#beta-anmeldung"
                    }
                  >
                    {tier.cta}
                    {tier.name !== "Enterprise" && (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-sub text-center mb-10">
            Häufige Fragen zu den Preisen
          </h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group border rounded-xl p-6 bg-card"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
