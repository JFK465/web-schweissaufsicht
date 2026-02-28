"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  Smartphone,
  Clock,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const betaSchema = z.object({
  name: z.string().min(2, "Name erforderlich"),
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  role: z.string().min(1, "Bitte Qualifikation angeben"),
  company: z.string().optional(),
});

type BetaFormData = z.infer<typeof betaSchema>;

const features = [
  {
    icon: Clock,
    title: "ISO 14731 Aufgabenmatrix",
    description: "23+ Aufgabenbereiche strukturiert, Tagesansicht, Prioritäten",
  },
  {
    icon: UserCheck,
    title: "Schweißer-Qualifikationsverwaltung",
    description: "ISO 9606-1 Prüfbescheinigungen, 6-Monats-Erinnerungen",
  },
  {
    icon: Shield,
    title: "Lückenloser Audit-Trail",
    description: "Alle Aktionen dokumentiert, PDF-Export für TÜV-Termin",
  },
  {
    icon: Smartphone,
    title: "Mobile-First für die Werkstatt",
    description: "Tablet und Handy optimiert, überall einsatzbereit",
  },
];

export function SchweissaufsichtSoftwareClient() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BetaFormData>({
    resolver: zodResolver(betaSchema),
  });

  const onSubmit = async (data: BetaFormData) => {
    try {
      await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-primary text-primary-foreground px-4 py-1.5">
                BETA — Jetzt kostenlos testen
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="heading-hero text-balance mb-6"
            >
              Schweißaufsicht Software —
              <br />
              <span className="text-primary">
                ISO 14731 digital in der Werkstatt
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Der digitale Arbeitsplatz für IWE, IWT und IWS: Aufgabenmatrix,
              Schweißer-Qualifikationen, Audit-Trail. Mobile-First entwickelt
              für den Alltag in der Werkstatt.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 h-12 px-8"
                onClick={() => {
                  document
                    .getElementById("beta-anmeldung")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Beta-Zugang sichern — kostenlos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border rounded-xl p-6"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta includes */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-section text-center mb-12">
            Was du in der Beta bekommst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Vollständige ISO 14731 Aufgabenmatrix (23+ Bereiche)",
              "Schweißer-Profile mit ISO 9606-1 Qualifikationsnachweisen",
              "Automatische 6-Monats-Erinnerungen mit digitaler Unterschrift",
              "WPS-Register mit Geltungsbereich-Anzeige",
              "NCR-Workflow (OPEN → CLOSED)",
              "ZfP-Planung nach EN 1090-2 Tabelle 24",
              "Lückenloser Audit-Trail mit PDF-Export",
              "Mobile-App (Tablet & Handy, kein Install nötig)",
              "30 % Rabatt auf das erste Jahr nach der Beta",
              "Direktes Feedback-Kanal zum Entwicklerteam",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Registration Form */}
      <section
        id="beta-anmeldung"
        className="py-16 md:py-24 bg-primary/5 border-y"
      >
        <div className="container-custom max-w-xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Beta-Anmeldung
            </Badge>
            <h2 className="heading-section mb-4">Jetzt Beta-Zugang sichern</h2>
            <p className="text-muted-foreground">
              Kostenlos während der gesamten Beta-Phase. Keine Kreditkarte
              nötig. Kündigung nicht erforderlich.
            </p>
          </div>

          {sent ? (
            <div className="bg-card border rounded-xl p-10 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">
                Du bist auf der Beta-Liste!
              </h3>
              <p className="text-muted-foreground mb-6">
                Wir melden uns in Kürze mit deinen Zugangsdaten. Als Beta-Nutzer
                erhältst du 30 % Rabatt auf das erste Jahr.
              </p>
              <Button asChild variant="outline">
                <Link href="/funktionen">Alle Funktionen ansehen</Link>
              </Button>
            </div>
          ) : (
            <div className="bg-card border rounded-xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Vorname & Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className="mt-1"
                      placeholder="Max Mustermann"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="role">Qualifikation *</Label>
                    <select
                      id="role"
                      {...register("role")}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="IWE">
                        IWE (Internationaler Schweißingenieur)
                      </option>
                      <option value="IWT">
                        IWT (Internationaler Schweißtechniker)
                      </option>
                      <option value="IWS">
                        IWS (Internationaler Schweißfachmann)
                      </option>
                      <option value="EWE">
                        EWE (Europäischer Schweißingenieur)
                      </option>
                      <option value="EWT">
                        EWT (Europäischer Schweißtechniker)
                      </option>
                      <option value="EWS">
                        EWS (Europäischer Schweißfachmann)
                      </option>
                      <option value="SFI">SFI (Schweißfachingenieur)</option>
                      <option value="andere">Andere</option>
                    </select>
                    {errors.role && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.role.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-Mail-Adresse *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-1"
                    placeholder="deine@email.de"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Unternehmen (optional)</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="mt-1"
                    placeholder="Mustermann Metallbau GmbH"
                  />
                </div>

                {submitError && (
                  <p className="text-destructive text-sm">
                    Fehler beim Senden. Bitte schreib uns direkt an
                    hallo@schweissaufsicht.app.
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Wird gesendet..."
                    : "Beta-Zugang sichern — kostenlos"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  DSGVO-konform. Keine Weitergabe an Dritte. Du kannst dich
                  jederzeit abmelden.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">
            Warum SchweißAufsicht?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">
                    Funktion
                  </th>
                  <th className="text-center p-3 font-semibold text-primary">
                    SchweißAufsicht
                  </th>
                  <th className="text-center p-3 font-semibold rounded-tr-lg">
                    Excel & Papier
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ISO 14731 Aufgabenmatrix", "✓", "✗"],
                  ["Automatische Ablauf-Erinnerungen", "✓", "✗"],
                  ["Digitale Unterschrift auf Tablet", "✓", "✗"],
                  ["Mobiler Zugriff in der Werkstatt", "✓", "✗"],
                  ["Lückenloser Audit-Trail", "✓", "—"],
                  ["PDF-Export auf Knopfdruck", "✓", "—"],
                  ["DSGVO-konforme Cloud-Speicherung", "✓", "—"],
                ].map(([feature, a, b]) => (
                  <tr key={feature} className="border-t">
                    <td className="p-3">{feature}</td>
                    <td className="p-3 text-center text-primary font-medium">
                      {a}
                    </td>
                    <td className="p-3 text-center text-muted-foreground">
                      {b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="#beta-anmeldung">
                Beta-Zugang sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
