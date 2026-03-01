"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertOctagon, Eye, BarChart3, Smartphone } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const showcaseFeatures = [
  {
    title: "ISO 14731 Aufgabenmatrix",
    description:
      "Alle 23+ Aufgabenbereiche nach ISO 14731 digital verwalten. Tagesansicht zeigt offene Aufgaben — priorisiert nach Dringlichkeit.",
    image: "/images/feature-1.png",
    imageAlt: "ISO 14731 Aufgabenmatrix Tagesansicht",
  },
  {
    title: "Mobile-First für die Werkstatt",
    description:
      "Optimiert für Tablet und Handy. Auf dem Hallenflur, beim Kunden oder im Büro — überall der gleiche Zugriff auf alle Dokumente.",
    image: "/images/feature-2.png",
    imageAlt: "SchweißAufsicht Mobile App in der Werkstatt",
  },
  {
    title: "Digitaler Unterschrift-Workflow",
    description:
      "Schweißer unterschreiben digital auf dem Tablet. Freigaben, Protokolle und Bestätigungen lückenlos dokumentiert — kein Zettel-Chaos mehr.",
    image: "/images/feature-3.png",
    imageAlt: "Digitaler Unterschrift-Workflow für Schweißdokumentation",
  },
  {
    title: "Audit-Trail & Reporting",
    description:
      "Lückenloser Audit-Trail aller Aktionen mit Zeitstempel und Benutzer. Export als PDF für den nächsten TÜV-Termin — in Minuten.",
    image: "/images/feature-4.png",
    imageAlt: "Lückenloser Audit-Trail und EN 1090 Reporting",
  },
];

const gridFeatures = [
  {
    icon: AlertOctagon,
    title: "NCR-Workflow",
    description:
      "Non-Conformance-Reports nach ISO 9001: OPEN → INVESTIGATING → CORRECTIVE ACTION → CLOSED. Jede Abweichung vollständig nachverfolgbar.",
  },
  {
    icon: Eye,
    title: "ZfP-Planung & Freigaben",
    description:
      "ZfP-Umfang nach EN 1090-2 Tabelle 24 planen, Prüfergebnisse dokumentieren, Freigaben erteilen — alles in einem System.",
  },
  {
    icon: BarChart3,
    title: "WPS- & WPQR-Register",
    description:
      "Vollständiges WPS-Register mit Suchfunktion und Geltungsbereich-Anzeige. Immer die richtige WPS für jede Naht.",
  },
  {
    icon: Smartphone,
    title: "Schweißer-Qualifikationsverwaltung",
    description:
      "ISO 9606-1 Prüfbescheinigungen mit automatischen Erinnerungen. 6-Monats-Unterschrift und 3-Jahres-Verlängerung.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="heading-section">
              Alles, was du als Schweißaufsicht brauchst
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Entwickelt für IWE, IWT und IWS — mit dem genauen Funktionsumfang,
              den ISO 14731 und EN 1090 erfordern.
            </p>
          </motion.div>

          {/* Alternating Showcase */}
          <div className="space-y-20 mb-20">
            {showcaseFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className={`flex flex-col gap-8 items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden ring-1 ring-inset ring-black/5 shadow-2xl group">
                    <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={600}
                      height={450}
                      className="relative w-full h-auto object-contain p-6 bg-white transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <h3 className="heading-sub mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact Grid for remaining features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
