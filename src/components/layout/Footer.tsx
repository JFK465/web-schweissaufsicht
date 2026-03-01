"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Flag, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-custom py-12">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold mb-2">
              Nie wieder abgelaufene Schweißer-Qualifikationen
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Praxiswissen zu ISO 14731, ISO 9606-1 und EN 1090 — direkt in dein
              Postfach.
            </p>
            {subscribed ? (
              <p className="text-green-400 text-sm font-medium">
                Angemeldet! Wir melden uns bald bei dir.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="deine@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 shrink-0"
                >
                  Anmelden
                </Button>
              </form>
            )}
            <p className="text-background/50 text-xs mt-2">
              DSGVO-konform. Keine Weitergabe an Dritte. Jederzeit abmeldbar.
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Marke */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg mb-4"
            >
              <Image
                src="/logo-dark.svg"
                alt="SchweißAufsicht"
                width={24}
                height={24}
              />
              <span>SchweißAufsicht</span>
            </Link>
            <p className="text-background/60 text-sm">
              Digitaler Arbeitsplatz für IWE, IWT und IWS — ISO 14731-konform.
            </p>
          </div>

          {/* Produkt */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/funktionen"
                  className="hover:text-background transition-colors"
                >
                  Funktionen
                </Link>
              </li>
              <li>
                <Link
                  href="/preise"
                  className="hover:text-background transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/schweissaufsicht-software"
                  className="hover:text-background transition-colors"
                >
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/schweisser-tracker"
                  className="hover:text-background transition-colors"
                >
                  Schweißer-Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Branchen */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Branchen</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/metallbau-schweissaufsicht"
                  className="hover:text-background transition-colors"
                >
                  Metallbau & Schlosserei
                </Link>
              </li>
              <li>
                <Link
                  href="/stahlbau-schweissaufsicht"
                  className="hover:text-background transition-colors"
                >
                  Stahlbau
                </Link>
              </li>
              <li>
                <Link
                  href="/maschinenbau-schweissaufsicht"
                  className="hover:text-background transition-colors"
                >
                  Maschinenbau
                </Link>
              </li>
              <li>
                <Link
                  href="/externe-schweissaufsicht"
                  className="hover:text-background transition-colors"
                >
                  Externe Schweißaufsicht
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Ressourcen</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-background transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/wissen"
                  className="hover:text-background transition-colors"
                >
                  Wissen & Normen
                </Link>
              </li>
              <li>
                <Link
                  href="/wissen/iso-14731"
                  className="hover:text-background transition-colors"
                >
                  ISO 14731
                </Link>
              </li>
              <li>
                <Link
                  href="/wissen/iso-9606-1"
                  className="hover:text-background transition-colors"
                >
                  ISO 9606-1
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-background transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-background transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-background transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="hover:text-background transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2026 SchweißAufsicht. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-background/60 text-xs">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-1">
              <Flag className="h-3 w-3" />
              Made in Germany
            </span>
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              256-Bit SSL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
