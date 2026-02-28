"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

interface Welder {
  id: string;
  name: string;
  certDate: string;
  lastConfirmDate: string;
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function getDaysUntil(date: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = date.getTime() - now.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function WelderStatus({ welder }: { welder: Welder }) {
  if (!welder.certDate || !welder.lastConfirmDate) return null;

  const certDate = new Date(welder.certDate);
  const lastConfirm = new Date(welder.lastConfirmDate);
  const nextConfirmDue = addMonths(lastConfirm, 6);
  const certExpiry = addMonths(certDate, 36);
  const daysToConfirm = getDaysUntil(nextConfirmDue);
  const daysToCertExpiry = getDaysUntil(certExpiry);

  const confirmStatus =
    daysToConfirm < 0 ? "expired" : daysToConfirm <= 30 ? "warning" : "ok";
  const certStatus =
    daysToCertExpiry < 0
      ? "expired"
      : daysToCertExpiry <= 90
        ? "warning"
        : "ok";

  return (
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
      <div
        className={`rounded-lg p-3 ${confirmStatus === "expired" ? "bg-destructive/10 text-destructive" : confirmStatus === "warning" ? "bg-amber-500/10 text-amber-700 dark:text-amber-400" : "bg-green-500/10 text-green-700 dark:text-green-400"}`}
      >
        {confirmStatus === "expired" ? (
          <AlertCircle className="h-4 w-4 inline mr-1" />
        ) : confirmStatus === "warning" ? (
          <Clock className="h-4 w-4 inline mr-1" />
        ) : (
          <CheckCircle className="h-4 w-4 inline mr-1" />
        )}
        <span className="font-medium">6-Monats-Bestätigung:</span>{" "}
        {confirmStatus === "expired"
          ? `Abgelaufen seit ${Math.abs(daysToConfirm)} Tagen`
          : `Fällig am ${formatDate(nextConfirmDue)} (in ${daysToConfirm} Tagen)`}
      </div>
      <div
        className={`rounded-lg p-3 ${certStatus === "expired" ? "bg-destructive/10 text-destructive" : certStatus === "warning" ? "bg-amber-500/10 text-amber-700 dark:text-amber-400" : "bg-green-500/10 text-green-700 dark:text-green-400"}`}
      >
        {certStatus === "expired" ? (
          <AlertCircle className="h-4 w-4 inline mr-1" />
        ) : certStatus === "warning" ? (
          <Clock className="h-4 w-4 inline mr-1" />
        ) : (
          <CheckCircle className="h-4 w-4 inline mr-1" />
        )}
        <span className="font-medium">Zertifikat (3 Jahre):</span>{" "}
        {certStatus === "expired"
          ? `Abgelaufen seit ${Math.abs(daysToCertExpiry)} Tagen`
          : `Läuft ab am ${formatDate(certExpiry)} (in ${daysToCertExpiry} Tagen)`}
      </div>
    </div>
  );
}

export function SchweisserTrackerClient() {
  const [welders, setWelders] = useState<Welder[]>([
    { id: "1", name: "", certDate: "", lastConfirmDate: "" },
  ]);

  const addWelder = useCallback(() => {
    setWelders((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: "",
        certDate: "",
        lastConfirmDate: "",
      },
    ]);
  }, []);

  const removeWelder = useCallback((id: string) => {
    setWelders((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const updateWelder = useCallback(
    (id: string, field: keyof Welder, value: string) => {
      setWelders((prev) =>
        prev.map((w) => (w.id === id ? { ...w, [field]: value } : w)),
      );
    },
    [],
  );

  return (
    <>
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container-custom max-w-3xl">
          <div className="mb-2">
            <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Kostenloses Tool
            </span>
          </div>
          <h1 className="heading-hero mb-3 mt-4">
            Schweißer-Qualifikations-Tracker
          </h1>
          <p className="text-lg text-muted-foreground">
            Trage Prüfdatum und letzte 6-Monats-Bestätigung ein — das Tool
            berechnet sofort, wann die nächste Bestätigung (ISO 9606-1 Klausel
            9.1) und die 3-Jahres-Verlängerung fällig sind.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Keine Registrierung. Keine Speicherung. Läuft komplett im Browser.
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="container-custom max-w-3xl space-y-6">
          {welders.map((welder, index) => (
            <div key={welder.id} className="bg-card border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Schweißer {index + 1}</h2>
                {welders.length > 1 && (
                  <button
                    onClick={() => removeWelder(welder.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    htmlFor={`name-${welder.id}`}
                  >
                    Name
                  </label>
                  <input
                    id={`name-${welder.id}`}
                    type="text"
                    placeholder="Max Mustermann"
                    value={welder.name}
                    onChange={(e) =>
                      updateWelder(welder.id, "name", e.target.value)
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    htmlFor={`cert-${welder.id}`}
                  >
                    Prüfdatum (Zertifikat)
                  </label>
                  <input
                    id={`cert-${welder.id}`}
                    type="date"
                    value={welder.certDate}
                    onChange={(e) =>
                      updateWelder(welder.id, "certDate", e.target.value)
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    htmlFor={`confirm-${welder.id}`}
                  >
                    Letzte 6-Monats-Bestätigung
                  </label>
                  <input
                    id={`confirm-${welder.id}`}
                    type="date"
                    value={welder.lastConfirmDate}
                    onChange={(e) =>
                      updateWelder(welder.id, "lastConfirmDate", e.target.value)
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <WelderStatus welder={welder} />
            </div>
          ))}
          <button
            onClick={addWelder}
            className="w-full border-2 border-dashed border-border rounded-xl py-4 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" /> Schweißer hinzufügen
          </button>
          <div className="bg-muted/30 rounded-xl p-6 mt-8">
            <h3 className="font-semibold mb-2">
              Automatische Erinnerungen statt manuellem Tracking
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dieses Tool gibt dir einen schnellen Überblick. SchweißAufsicht
              erinnert dich automatisch 30 Tage vor Ablauf der 6-Monats-Frist —
              und du bestätigst direkt in der App, mit Zeitstempel und digitalem
              Audit-Trail.
            </p>
            <Button asChild size="sm">
              <Link href="/schweissaufsicht-software#beta-anmeldung">
                Automatische Erinnerungen — kostenlos testen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="text-xs text-muted-foreground mt-4 leading-relaxed">
            <strong>Hinweis:</strong> Dieses Tool ist ein Hilfsmittel und
            ersetzt keine rechtsverbindliche Dokumentation nach ISO 9606-1. Alle
            eingegebenen Daten verbleiben ausschließlich in deinem Browser und
            werden nicht übertragen oder gespeichert.
          </div>
        </div>
      </div>
    </>
  );
}
