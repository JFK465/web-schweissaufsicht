"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, CheckCircle, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium"
            >
              Für IWE, IWT und IWS — persönliche Haftung absichern
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="heading-hero text-balance mb-6"
          >
            Dein digitaler Arbeitsplatz als{" "}
            <span className="text-primary">Schweißaufsicht</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
          >
            ISO 14731-konform dokumentieren. Schweißer-Qualifikationen im Griff.
            Audit-ready — auch auf dem Hallenflur. Lückenlos, normgerecht,
            mobil.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-12 px-8"
              asChild
            >
              <Link href="/schweissaufsicht-software#beta-anmeldung">
                Beta-Zugang sichern — kostenlos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <Link href="/tools/schweisser-tracker">
                Qualifikations-Tracker testen
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              ISO 14731-konform
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-primary" />
              Mobile-First für die Werkstatt
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
