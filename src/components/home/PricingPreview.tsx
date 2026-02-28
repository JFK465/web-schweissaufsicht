"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const tiers = [
  {
    name: "Starter",
    price: "49",
    description: "Für IWS/IWT in kleinen Betrieben mit 1–10 Schweißern",
    features: [
      "ISO 14731 Aufgabenmatrix",
      "Bis zu 10 Schweißer-Profile",
      "Bis zu 30 WPS",
      "Automatische Ablauf-Erinnerungen",
      "Digitale Unterschriften",
      "1 Benutzer",
      "E-Mail-Support",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "99",
    description: "Für IWE in mittleren Betrieben mit 10–50 Schweißern",
    features: [
      "Alles aus Starter",
      "Unbegrenzte Schweißer-Profile",
      "Unbegrenzte WPS & WPQR",
      "NCR-Workflow",
      "ZfP-Planung",
      "Audit-Trail & Export",
      "Bis zu 5 Benutzer",
      "Projektbezogene Dokumentation",
      "Prioritärer Support",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    description: "Für externe Schweißaufsicht & größere Betriebe",
    features: [
      "Alles aus Professional",
      "Multi-Mandanten-Verwaltung",
      "Unbegrenzte Benutzer",
      "API-Zugang",
      "SSO/SAML",
      "Dedizierter Support",
      "SLA",
    ],
    cta: "Demo anfragen",
    highlighted: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-4">
            <h2 className="heading-section">
              Jetzt in der Beta — kostenlos testen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Während der Beta-Phase ist SchweißAufsicht für alle registrierten
              Nutzer kostenlos. Beta-Nutzer erhalten 30 % Rabatt auf das erste
              Jahr.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              BETA — Jetzt 0 EUR statt regulärem Preis
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                className={`rounded-xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg scale-105 bg-card"
                    : "bg-card"
                }`}
              >
                {tier.highlighted && (
                  <Badge className="self-start mb-4 bg-primary text-primary-foreground">
                    Beliebt
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="mb-2">
                  <span className="line-through text-muted-foreground text-sm">
                    {tier.price === "Auf Anfrage"
                      ? ""
                      : `${tier.price} EUR/Monat`}
                  </span>
                  <div className="text-2xl font-bold text-primary">
                    {tier.price === "Auf Anfrage"
                      ? "Auf Anfrage"
                      : "BETA: 0 EUR"}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
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
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
