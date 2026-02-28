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
  title: "Externe Schweißaufsicht & Beratungsbüros",
  description:
    "Verwalte mehrere Mandanten als externe Schweißaufsicht: getrennte Dokumentation pro Betrieb, mobil auf dem Hallenflur. Multi-Tenant, DSGVO-konform. Jetzt testen.",
  alternates: { canonical: `${siteConfig.url}/externe-schweissaufsicht` },
  openGraph: {
    title: "Externe Schweißaufsicht & Beratungsbüros",
    description:
      "Verwalte mehrere Mandanten als externe Schweißaufsicht: getrennte Dokumentation pro Betrieb, mobil auf dem Hallenflur. Multi-Tenant, DSGVO-konform.",
    url: `${siteConfig.url}/externe-schweissaufsicht`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Externe Schweißaufsicht & Beratungsbüros",
    description:
      "Multi-Mandanten-Verwaltung für externe Schweißaufsichtspersonen. Saubere Datentrennung, mobil nutzbar.",
  },
};

const faqItems = [
  {
    question:
      "Kann ich als externe Schweißaufsicht mehrere Betriebe verwalten?",
    answer:
      "Ja, das Enterprise-Paket unterstützt Multi-Mandanten-Verwaltung mit sauberer Datentrennung pro Mandant.",
  },
  {
    question: "Sind die Daten der einzelnen Mandanten voneinander getrennt?",
    answer:
      "Ja, die Datentrennung ist technisch sichergestellt. Kein Mandant kann auf Daten eines anderen zugreifen.",
  },
  {
    question: "Wie funktioniert die Abrechnung für Beratungsbüros?",
    answer:
      "Das Enterprise-Paket wird individuell kalkuliert. Sprich uns an für ein Angebot.",
  },
  {
    question: "Kann ich SchweißAufsicht meinen Kunden empfehlen?",
    answer:
      "Ja, du kannst Kunden eine eigene Lizenz empfehlen oder als externe Schweißaufsicht den Mandanten-Zugang nutzen.",
  },
];

export default function ExterneSchweissaufsichtPage() {
  return (
    <>
      <WebPageSchema
        title="Als externe Schweißaufsicht alle Mandanten im Griff"
        description="SchweißAufsicht für externe Schweißaufsichtspersonen und Beratungsbüros."
        url="/externe-schweissaufsicht"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Externe Schweißaufsicht",
            href: "/externe-schweissaufsicht",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Externe Schweißaufsicht",
              href: "/externe-schweissaufsicht",
            },
          ]}
        />
      </div>
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-hero mb-4">
            Als externe Schweißaufsicht alle Mandanten im Griff — auch auf dem
            Hallenflur
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Fünf Betriebe, fünf WPS-Register, fünf Audit-Termine.
            SchweißAufsicht trennt deine Mandanten sauber — und gibt dir einen
            Überblick über alle auf einen Blick.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/kontakt">
              Demo anfragen — für externe Schweißaufsicht
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">
            Was SchweißAufsicht für externe Auftragnehmer löst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Multi-Mandanten-Verwaltung",
                description:
                  "Alle Betriebe in einer App. Saubere Datentrennung — kein Mandant sieht die Daten des anderen.",
              },
              {
                title: "Mandanten-Übersicht auf einen Blick",
                description:
                  "Welcher Betrieb hat bald eine Schweißer-Qualifikation ablaufen? Wo steht der nächste Audit?",
              },
              {
                title: "Mobiler Zugriff für alle Mandanten",
                description:
                  "Beim Kunden vor Ort sofort zugreifen — WPS, Schweißer-Profile, NCRs direkt auf dem Tablet.",
              },
              {
                title: "DSGVO-konforme Datentrennung",
                description:
                  "Technische Mandantentrennung nach DSGVO-Anforderungen. Kein Datenmischmasch zwischen Betrieben.",
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
            FAQ für externe Schweißaufsicht
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
            Demo anfragen — für externe Schweißaufsicht
          </h2>
          <Button className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/kontakt">
              Demo anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
