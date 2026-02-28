"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "Konto anlegen & Schweißer importieren",
    description:
      "In weniger als 30 Minuten eingerichtet: Konto anlegen, Schweißer mit ihren Prüfbescheinigungen eintragen, WPS hochladen. Keine IT-Kenntnisse nötig.",
  },
  {
    number: 2,
    title: "Aufgabenmatrix nach ISO 14731 einrichten",
    description:
      "Alle 23+ Aufgabenbereiche nach ISO 14731 sind vorstrukturiert. Du weist sie deiner Rolle zu — und siehst täglich, was offen ist.",
  },
  {
    number: 3,
    title: "Täglich in der Werkstatt nutzen",
    description:
      "Tablet in der Hand, Hallenflur. WPS abrufen, Schweißer-Unterschrift digital erfassen, NCR dokumentieren — alles in einer App.",
  },
  {
    number: 4,
    title: "Audit-ready auf Knopfdruck",
    description:
      "Nächster TÜV-Termin? Export aller Dokumente, lückenloser Audit-Trail, vollständige Prüfbescheinigungen — in Minuten statt Stunden.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">
              In 4 Schritten zur digitalen Schweißaufsicht
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              SchweißAufsicht ist für Ingenieure entwickelt, nicht für
              Buchhalter — einfach, schnell, praxisnah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
