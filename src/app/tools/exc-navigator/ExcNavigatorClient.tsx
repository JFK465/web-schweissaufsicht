"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

type ExcResult = "EXC1" | "EXC2" | "EXC3" | "EXC4" | null;

interface Question {
  id: string;
  text: string;
  hint?: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: "consequence",
    text: "Was gilt für dein Bauwerk bei Versagen?",
    hint: "Konsequenzklasse nach EN 1990 Anhang B",
    options: [
      { label: "Geringe Konsequenz (Nebengebäude, Garagen)", value: "CC1" },
      {
        label:
          "Mittlere Konsequenz (normale Wohn-/Bürogebäude, einfache Brücken)",
        value: "CC2",
      },
      {
        label: "Hohe Konsequenz (öffentliche Gebäude, wichtige Infrastruktur)",
        value: "CC3",
      },
    ],
  },
  {
    id: "service_category",
    text: "Welcher Beanspruchungskategorie gehört die Konstruktion an?",
    hint: "Service Category nach EN 1090-2 Tabelle B.1",
    options: [
      {
        label: "SC1 — vorwiegend ruhende Lasten (keine Ermüdung)",
        value: "SC1",
      },
      {
        label: "SC2 — wechselnde Lasten / Ermüdungsbeanspruchung",
        value: "SC2",
      },
    ],
  },
  {
    id: "production_category",
    text: "Welcher Fertigungskategorie entspricht die Herstellung?",
    hint: "Production Category nach EN 1090-2 Tabelle B.2",
    options: [
      {
        label: "PC1 — Standardmäßige Fertigung, keine besonderen Anforderungen",
        value: "PC1",
      },
      {
        label:
          "PC2 — Vorgespannte Schrauben, Warmumformung, kaltgeformte Bleche, schwere Profile",
        value: "PC2",
      },
    ],
  },
];

function calculateExc(answers: Record<string, string>): ExcResult {
  const cc = answers.consequence;
  const sc = answers.service_category;
  const pc = answers.production_category;
  if (!cc || !sc || !pc) return null;
  if (cc === "CC1" && sc === "SC1" && pc === "PC1") return "EXC1";
  if (cc === "CC1") return "EXC2";
  if (cc === "CC2" && sc === "SC1" && pc === "PC1") return "EXC2";
  if (cc === "CC2") return "EXC2";
  if (cc === "CC3" && sc === "SC1" && pc === "PC1") return "EXC3";
  if (cc === "CC3" && sc === "SC2") return "EXC4";
  if (cc === "CC3") return "EXC3";
  return "EXC2";
}

const excInfo: Record<
  string,
  { color: string; coordinator: string; ndt: string; desc: string }
> = {
  EXC1: {
    color: "text-green-600 dark:text-green-400",
    coordinator: "Nicht zwingend vorgeschrieben",
    ndt: "Nur Sichtprüfung (VT)",
    desc: "Geringste Anforderungen. In der Praxis selten für Neubau — nur einfachste Konstruktionen.",
  },
  EXC2: {
    color: "text-blue-600 dark:text-blue-400",
    coordinator: "IWS / EWS oder höher",
    ndt: "5–10 % ergänzende ZfP bei Stumpfnähten",
    desc: "Der Standard im deutschen Metallbau. WPS, WPQR, ISO 9606-1 und 6-Monats-Bestätigung sind Pflicht.",
  },
  EXC3: {
    color: "text-amber-600 dark:text-amber-400",
    coordinator: "IWE oder IWT (EWE / EWT)",
    ndt: "10–20 % ergänzende ZfP bei Stumpfnähten",
    desc: "Erhöhte Anforderungen für wichtige Infrastruktur. Vollständiges WPK mit Änderungsprotokoll.",
  },
  EXC4: {
    color: "text-destructive",
    coordinator: "IWE (Vollzeit)",
    ndt: "Bis 100 % ZfP",
    desc: "Höchste Anforderungen für sicherheitskritische Konstruktionen. Volle Rückverfolgbarkeit.",
  },
};

export function ExcNavigatorClient() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);

  const currentQuestion = questions[step];
  const result =
    Object.keys(answers).length === questions.length
      ? calculateExc(answers)
      : null;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container-custom max-w-2xl">
          <div className="mb-2">
            <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Kostenloses Tool
            </span>
          </div>
          <h1 className="heading-hero mb-3 mt-4">
            Ausführungsklassen-Navigator
          </h1>
          <p className="text-lg text-muted-foreground">
            Beantworte 3 Fragen — das Tool ermittelt die empfohlene
            Ausführungsklasse (EXC1–EXC4) nach EN 1090-2 Anhang B für dein
            Projekt.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Orientierungshilfe, kein Ersatz für die Festlegung durch den
            Tragwerksplaner.
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="container-custom max-w-2xl">
          {!result ? (
            <div className="bg-card border rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                {questions.map((q, i) => (
                  <div key={q.id} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i < step ? "bg-primary text-primary-foreground" : i === step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      {i + 1}
                    </div>
                    {i < questions.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-1">{currentQuestion.text}</h2>
              {currentQuestion.hint && (
                <p className="text-sm text-muted-foreground mb-5">
                  {currentQuestion.hint}
                </p>
              )}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left border rounded-xl p-4 hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Zurück
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-card border rounded-xl p-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Empfohlene Ausführungsklasse
                </p>
                <div
                  className={`text-5xl font-black mb-3 ${excInfo[result].color}`}
                >
                  {result}
                </div>
                <p className="text-muted-foreground">{excInfo[result].desc}</p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">
                  Anforderungen für {result}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-medium w-32 shrink-0">
                      Schweißkoordinator
                    </span>
                    <span className="text-muted-foreground">
                      {excInfo[result].coordinator}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-medium w-32 shrink-0">
                      ZfP-Umfang
                    </span>
                    <span className="text-muted-foreground">
                      {excInfo[result].ndt}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-medium w-32 shrink-0">
                      Schweißer
                    </span>
                    <span className="text-muted-foreground">
                      ISO 9606-1 Qualifikation mit 6-Monats-Bestätigung
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-medium w-32 shrink-0">
                      WPS/WPQR
                    </span>
                    <span className="text-muted-foreground">
                      Vollständige WPS nach ISO 15609-1 mit WPQR-Grundlage
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={reset}
                  className="flex-1 border rounded-xl py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
                >
                  Neu berechnen
                </button>
                <Button asChild className="flex-1">
                  <Link href="/wissen/ausfuehrungsklassen">
                    Mehr zu Ausführungsklassen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold mb-2">
                  Dokumentation für {result} — automatisch richtig
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  SchweißAufsicht kennt deine Ausführungsklasse und passt
                  Anforderungen, NDT-Planung und Qualifikationsprüfungen
                  automatisch an. Kein manuelles Nachschlagen in der Norm.
                </p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/schweissaufsicht-software#beta-anmeldung">
                    SchweißAufsicht kostenlos testen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
            <strong>Hinweis:</strong> Dieses Tool ist eine unverbindliche
            Orientierungshilfe. Die rechtlich verbindliche Festlegung der
            Ausführungsklasse obliegt dem Tragwerksplaner bzw. dem Auftraggeber
            auf Basis der EN 1990 Anhang B.
          </p>
        </div>
      </div>
    </>
  );
}
