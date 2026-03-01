"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const trustChips = [
  "DSGVO-konform",
  "ISO 14731-konform",
  "Mobile-First für die Werkstatt",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Dein digitaler Arbeitsplatz als Schweißaufsicht"
        fill
        className="object-cover object-right-top"
        priority
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-gray-950/30" />

      {/* Content */}
      <div className="relative container-custom py-24 flex-1 flex items-center">
        <div className="max-w-2xl">
          {/* Accent Line + Category */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/0" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
              Für IWE, IWT und IWS — persönliche Haftung absichern
            </span>
          </motion.div>

          {/* H1 — Oversized, 3-zeilig */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            Dein digitaler
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-primary to-indigo-400 bg-clip-text text-transparent">
              Arbeitsplatz
            </span>
            <br />
            als Schweißaufsicht
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg"
          >
            ISO 14731-konform dokumentieren. Schweißer-Qualifikationen im Griff.
            Audit-ready — auch auf dem Hallenflur. Lückenlos, normgerecht,
            mobil.
          </motion.p>

          {/* CTAs — Compact Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              href="/schweissaufsicht-software#beta-anmeldung"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold bg-white text-gray-900 rounded-lg hover:bg-white/90 transition-all"
            >
              Beta-Zugang sichern — kostenlos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/tools/schweisser-tracker"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Qualifikations-Tracker testen →
            </Link>
          </motion.div>

          {/* Trust Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-16 h-px bg-white/10 mb-6" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 text-[13px] text-white/40"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/70" />
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
          Mehr erfahren
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
