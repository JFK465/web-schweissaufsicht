"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="heading-section text-primary-foreground mb-4"
          >
            Du haftest persönlich. Wir sichern dich ab.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8"
          >
            Jetzt Beta-Zugang sichern — kostenlos, keine Kreditkarte nötig.
            SchweißAufsicht übernimmt die Verwaltung. Du übernimmst wieder die
            Technik.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-12 px-8"
              asChild
            >
              <Link href="/schweissaufsicht-software#beta-anmeldung">
                Beta-Zugang sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-primary-foreground hover:bg-white/10 h-12 px-8"
              asChild
            >
              <Link href="/kontakt">Fragen? Schreib uns</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
