"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function SEOContentSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container-custom max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeInUp}
            className="prose prose-slate max-w-none"
          >
            <h2 className="heading-sub mb-6">
              Schweißaufsicht Software: Warum IWE und IWT jetzt digitalisieren
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die{" "}
              <Link
                href="/wissen/iso-14731"
                className="text-primary hover:underline"
              >
                ISO 14731
              </Link>{" "}
              definiert über 23 Aufgabenbereiche für Schweißaufsichtspersonen —
              von der WPS-Freigabe über die Schweißerqualifikation bis zur
              ZfP-Planung. In der Praxis trägt oft ein einziger IWE oder IWT die
              gesamte Verantwortung allein. SchweißAufsicht ist der digitale
              Arbeitsplatz, der genau diesen Alltag abbildet: strukturiert,
              normgerecht und mobil.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ein zentrales Problem in der täglichen Praxis ist die{" "}
              <Link
                href="/wissen/iso-9606-1"
                className="text-primary hover:underline"
              >
                Verwaltung von Schweißer-Qualifikationen nach ISO 9606-1
              </Link>
              . Die 6-Monats-Bestätigung wird in vielen Betrieben per Excel oder
              gar nicht verwaltet — und beim nächsten Überwachungsaudit fehlen
              die Nachweise. SchweißAufsicht sendet automatische Erinnerungen
              und ermöglicht die digitale Unterschrift direkt auf dem Tablet in
              der Werkstatt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die{" "}
              <Link
                href="/wissen/en-1090-audit"
                className="text-primary hover:underline"
              >
                Vorbereitung auf EN 1090-Audits
              </Link>{" "}
              kostet viele Schweißaufsichtspersonen täglich Stunden.
              WPS-Register, Prüfbescheinigungen und ZfP-Berichte sind über
              Ordner, E-Mails und SharePoint verteilt. Mit SchweißAufsicht sind
              alle Dokumente jederzeit abrufbar — Export als vollständiges
              Audit-Paket auf Knopfdruck.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              SchweißAufsicht richtet sich an alle Kompetenzniveaus: IWS für
              EXC2-Betriebe im{" "}
              <Link
                href="/metallbau-schweissaufsicht"
                className="text-primary hover:underline"
              >
                Metallbau und in der Schlosserei
              </Link>
              , IWT und IWE für EXC3-Projekte im{" "}
              <Link
                href="/stahlbau-schweissaufsicht"
                className="text-primary hover:underline"
              >
                Stahlbau und Hallenbau
              </Link>
              , sowie für{" "}
              <Link
                href="/externe-schweissaufsicht"
                className="text-primary hover:underline"
              >
                externe Schweißaufsicht
              </Link>{" "}
              mit mehreren Mandanten. Eine Software — alle Normbereiche.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
