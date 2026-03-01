"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein"),
  company: z.string().optional(),
  role: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function KontaktForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="container-custom py-4">
      <div className="py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h1 className="heading-hero mb-4">Kontakt</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Fragen zu SchweißAufsicht? Wir antworten innerhalb von 24 Stunden
              — für IWE, IWT und IWS in Deutschland, Österreich und der Schweiz.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">E-Mail</div>
                  <a
                    href="mailto:hallo@schweissaufsicht-software.de"
                    className="text-primary hover:underline"
                  >
                    hallo@schweissaufsicht-software.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Antwortzeit</div>
                  <p className="text-muted-foreground text-sm">
                    Werktags innerhalb von 24 Stunden
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Standort</div>
                  <p className="text-muted-foreground text-sm">
                    Deutschland — DSGVO-konform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card border rounded-xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-xl font-bold mb-2">Nachricht gesendet!</h2>
                <p className="text-muted-foreground">
                  Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
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
                    <Label htmlFor="role">Qualifikation</Label>
                    <Input
                      id="role"
                      {...register("role")}
                      className="mt-1"
                      placeholder="IWE / IWT / IWS"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-1"
                    placeholder="max@firma.de"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="mt-1"
                    placeholder="Mustermann Metallbau GmbH"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="mt-1 min-h-[120px]"
                    placeholder="Womit kann ich helfen?"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-destructive text-sm">
                    Fehler beim Senden. Bitte schreib uns direkt an
                    hallo@schweissaufsicht-software.de.
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  DSGVO-konform. Deine Daten werden nicht an Dritte
                  weitergegeben.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
