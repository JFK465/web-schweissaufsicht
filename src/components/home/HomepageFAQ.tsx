"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqItems = [
  {
    question: "Für wen ist SchweißAufsicht gemacht?",
    answer:
      "SchweißAufsicht richtet sich an Schweißaufsichtspersonen (IWE, IWT, IWS, EWE, EWT, EWS) im DACH-Raum, die die Schweißdokumentation in ihrem Betrieb allein verantworten.",
  },
  {
    question: "Was bedeutet ISO 14731-konform?",
    answer:
      "ISO 14731 definiert die Aufgaben und Verantwortlichkeiten von Schweißaufsichtspersonen. SchweißAufsicht bildet alle 23+ Aufgabenbereiche dieser Norm digital ab — mit strukturierter Aufgabenmatrix und Tagesansicht.",
  },
  {
    question: "Wie funktioniert die 6-Monats-Erinnerung für Schweißer?",
    answer:
      "ISO 9606-1 erfordert alle 6 Monate eine Bestätigung durch die Schweißaufsicht, dass der Schweißer im Geltungsbereich seiner Qualifikation tätig war. SchweißAufsicht erinnert dich automatisch und ermöglicht die digitale Unterschrift direkt auf dem Tablet.",
  },
  {
    question:
      "Kann ich SchweißAufsicht als externe Schweißaufsicht für mehrere Betriebe nutzen?",
    answer:
      "Ja. Das Enterprise-Paket unterstützt Multi-Mandanten-Verwaltung. Du kannst mehrere Betriebe mit getrennter Dokumentation in einer App verwalten.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "Für einen typischen EXC2-Betrieb mit 8–15 Schweißern rechne mit 30–60 Minuten Einrichtungszeit. Konto anlegen, Schweißer eintragen, WPS importieren — fertig.",
  },
  {
    question: "Ist SchweißAufsicht auch für EXC3-Betriebe geeignet?",
    answer:
      "Ja. Der Funktionsumfang deckt EXC2 und EXC3 ab: umfassende ZfP-Planung, NCR-Dokumentation, vollständiger Audit-Trail und Fertigungsbegleitdokumentation.",
  },
  {
    question: "Wie ist die Software auf dem Handy nutzbar?",
    answer:
      "SchweißAufsicht ist Mobile-First entwickelt — die Benutzeroberfläche ist für Tablet und Handy optimiert. Keine Installation nötig, läuft im Browser.",
  },
  {
    question: "Was kostet SchweißAufsicht nach der Beta?",
    answer:
      "Nach der Beta: Starter ab 49 EUR/Monat, Professional ab 99 EUR/Monat. Beta-Nutzer erhalten 30 % Rabatt auf das erste Jahr. Aktuell ist die Nutzung für Beta-Registrierungen kostenlos.",
  },
];

export function HomepageFAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Häufige Fragen</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
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
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                  {item.answer}
                </p>
              </details>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
