"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  FileX,
  Gavel,
  Layers,
  Phone,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const pains = [
  {
    icon: Clock,
    title: "Hälfte der Zeit mit Papierkram",
    description:
      "Du bist Ingenieur, kein Büroarbeiter — aber du verbringst Stunden in Excel-Listen, statt dich um die Technik zu kümmern.",
  },
  {
    icon: AlertTriangle,
    title: "Schweißer-Qualifikationen laufen still ab",
    description:
      "8 Schweißer, jeder mit anderem Prüfdatum. Die 6-Monats-Unterschrift nach ISO 9606-1 wird vergessen — beim nächsten Audit ist es zu spät.",
  },
  {
    icon: Gavel,
    title: "Persönliche Haftung bei jedem Fehler",
    description:
      "Eine übersehene Verlängerung. Ein fehlender Stempel. Und bei einem Schaden haftest du persönlich — nicht der Betrieb.",
  },
  {
    icon: FileX,
    title: "Audit-Vorbereitung kostet Tage",
    description:
      "WPS-Register, Prüfbescheinigungen, ZfP-Berichte verteilt über Ordner, E-Mails und SharePoint. Zusammensuchen kostet einen halben Arbeitstag.",
  },
  {
    icon: Layers,
    title: "23+ ISO 14731 Aufgabenbereiche ohne System",
    description:
      "Die neue ISO 14731 (2023) definiert über 23 Aufgabenbereiche. Ohne digitale Aufgabenmatrix behältst du den Überblick kaum.",
  },
  {
    icon: Phone,
    title: "Kein mobiler Zugriff in der Werkstatt",
    description:
      "Der Montag, 6:30 Uhr auf dem Hallenflur — und du brauchst eine WPS-Nummer, die nur im Büro-PC liegt.",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">
              Kennst du das als Schweißaufsicht?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Als einziger IWE im Betrieb trägst du die gesamte
              Dokumentationspflicht allein — und haftest persönlich bei Fehlern.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain) => (
              <motion.div
                key={pain.title}
                variants={fadeInUp}
                className="border rounded-xl p-6 bg-card"
              >
                <pain.icon className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-semibold mb-2">{pain.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
