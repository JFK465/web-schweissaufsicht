# Research Brief: SchweißAufsicht

> Erstellt am: 2026-02-28

## Executive Summary

SchweißAufsicht adressiert eine klar umrissene Nische: die 30.000 bis 50.000 aktiven Schweißaufsichtspersonen (IWE/IWT/IWS/EWE/EWT/EWS/SFI) in der DACH-Region, die als einzige Fachkraft im Betrieb für die gesamte schweißtechnische Qualitätssicherung nach ISO 14731 persönlich haften. Bestehende Softwarelösungen kommen entweder aus dem angelsächsischen Raum (ASME-Fokus, kein EN 1090-Verständnis) oder von Hardware-Herstellern (EWM Xnet — nur eigene Maschinen), die den deutschen KMU-Markt mit seiner spezifischen Normenwelt nicht wirklich bedienen. Die Marktlücke ist ein deutschsprachiger, mobilfähiger digitaler Arbeitsplatz, der genau die 23+ Aufgaben der ISO 14731 abbildet — mit lückenlosem Audit-Trail und Unterschrift-Workflow für die tägliche Werkstattpraxis.

---

## Marktuberblick

### Branche

Schweißtechnik / Metallbau / Stahlbau im Kontext der EU-Bauproduktenverordnung (BauPVO). EN 1090 ist seit 2014 verpflichtend für alle tragenden Stahl- und Aluminiumkonstruktionen, die auf dem europäischen Markt in Verkehr gebracht werden. Jeder davon betroffene Betrieb benötigt eine benannte Schweißaufsichtsperson — und genau diese Person ist die Zielgruppe.

**Normativer Rahmen (Kurzfassung):**
- **EN 1090-1/2**: Herstellungszertifizierung für Stahl- und Aluminiumkonstruktionen, verpflichtende CE-Kennzeichnung
- **DIN EN ISO 14731:2019** (aktualisiert 2023): Aufgaben und Verantwortung der Schweißaufsicht — 23+ Aufgabenbereiche in Anhang B, Wechsel von Qualifikationsstufen zu Kompetenzniveaus (C/S/B)
- **DIN EN ISO 3834-2/-3/-4**: Qualitätsanforderungen an das Schweißen — Zertifizierungsbasis für Betriebe
- **ISO 9606-1**: Schweißerprüfung — die Aufsicht muss jede Prüfbescheinigung alle 6 Monate durch Unterschrift verlängern

### Marktgroesse (TAM/SAM/SOM)

**TAM — Total Addressable Market:**
- Ca. 30.000 bis 50.000 aktive Schweißaufsichtspersonen in der DACH-Region (IWE/IWT/IWS/EWE/EWT/EWS/SFI; Schätzung auf Basis von DVS-Aktivitäten und IIW-Diplomzahlen)
- DVS: rund 100.000 Fachkräfte qualifizieren sich pro Jahr im DVS-Verbund — ein Teil davon als Schweißaufsicht
- Ca. 16.000 EN 1090-zertifizierungspflichtige Metallbaubetriebe in Deutschland allein (von ca. 40.000 Metallbaubetrieben mit ca. 434.000 Beschäftigten)
- Jeder Betrieb ab EXC2 braucht mindestens eine qualifizierte Schweißaufsicht

**SAM — Serviceable Addressable Market:**
- KMU mit 5–200 Mitarbeitern, die eine interne Schweißaufsichtsperson beschäftigen (keine externe Vergabe), in der DACH-Region
- Schätzung: 8.000–15.000 Betriebe, die eine interne Aufsichtsperson als Software-User abonnieren könnten
- Bei durchschnittlich 1–2 Software-Lizenzen pro Betrieb: 8.000–30.000 zahlende Seats

**SOM — Serviceable Obtainable Market (Jahr 1–3):**
- Realistisches Ziel: 300–800 zahlende Kunden in den ersten 36 Monaten über DVS-Netzwerk, LinkedIn (IWE-Community), Fachpresse (Metallbau-Magazin, Schweißaufsicht Aktuell)
- Bei 79 EUR/Monat pro Seat: 300 Kunden = 284.400 EUR ARR, 800 Kunden = 758.400 EUR ARR

### Digitalisierungsgrad

Niedrig bis sehr niedrig. Die Branche arbeitet überwiegend mit:
- Excel-Listen für Schweißer-Qualifikationen und WPS-Register
- Papierdokumente für Sicht-/ZfP-Berichte und Freigaben
- E-Mail-Anhänge für Zertifikatsaustausch
- Ordner-/SharePoint-Ablage ohne strukturierten Audit-Trail

Der häufigste Fehler im Audit: Schweißerprüfungsbescheinigungen wurden nicht alle 6 Monate durch Unterschrift der Aufsicht verlängert (ISO 9606-1 Clause 9). Das ist ein klassisches Excel-Problem.

---

## Wettbewerber-Analyse

| Wettbewerber | URL | Pricing | Starke | Schwache |
|---|---|---|---|---|
| **DVS Media "Schweißaufsicht im Betrieb"** | dvs-media.eu | ~200–400 EUR/Jahr (Jahreslizenz) | Offizielle DVS-Marke, normatives Fachwissen, bekannte Marke in Zielgruppe | Kein Workflow-Tool, kein Audit-Trail, kein Unterschrift-Feature — reines Nachschlagewerk |
| **weldassistant (Schweißassistent)** | weldassistant.com / schweissassistent.de | Starter: kostenlos; PRO-Edition: Preis auf Anfrage (~500–2.000 EUR einmalig) | Desktop-Software, WPS/WPQR nach ISO/ASME, etabliert in DACH | Keine Mobile-App, kein Tagesaufgaben-Workflow, kein NCR-Modul, Desktop-Only, kein SaaS |
| **WeldEye (Kemppi)** | weldeye.com | 490 EUR/Jahr (ArcVision) / 1.290 EUR/Jahr (Welding Procedures) | Cloud-basiert, Echtzeit-Maschinendaten, stabile finnische Firma | Kemppi-Hardware-Fokus, englischsprachig, kein EN 1090-spezifischer Workflow, kein ISO 14731 Aufgabenmatrix-Konzept |
| **DIWE PRO** | diwepro.com | Preis auf Anfrage | WPS/WPQR/NDT in einem System, PDF-Scan-Funktion, elektronische Signatur | Finnischer Markt (SFS-Normen), englischsprachig, kein DACH-Support, keine öffentliche Preisliste |
| **WeldNote (InduSuite)** | weldnote.com | ab 50 USD/Monat | Cloud, WPS/PQR-Verwaltung, Welder-Tracking, kostenloser Test | ASME-fokussiert, englischsprachig, kein ISO 14731 Aufgaben-Konzept, kein deutsches UI |
| **EWM Xnet** | ewm-group.com | Modul-Lizenz ~1.372 EUR (einmalig) + Abo | Echtzeit-Schweißparameter, integriert in EWM-Maschinenwelt | Nur EWM-Schweißgeräte, kein herstellerunabhängiger Einsatz, kein ISO 14731 Aufgabenmatrix |
| **WQApp** | wq-app.com | 2 Wochen kostenlos, dann Preisliste | Mobile-First, ISO 9606-1 Qualifikationsverwaltung, elektronische Signatur | Finnisches Produkt, englischsprachig, kein EN 1090-Kontext, keine DACH-Lokalisierung |

### Differenzierungspotenzial

1. **Deutschsprachig + normenkonform**: Kein einziger relevanter Wettbewerber hat ein vollständig deutschsprachiges Produkt mit explizitem ISO 14731-Aufgabenmatrix-Konzept (23+ Aufgabenbereiche als UI-Struktur)
2. **Mobile-First für die Werkstatt**: Die Konkurrenz ist entweder Desktop-Software (weldassistant) oder Cloud-Apps ohne deutsche Lokalisierung. Schweißaufsicht arbeitet auf dem Hallenflur, nicht am Schreibtisch.
3. **Persönliche Haftung als Kernbotschaft**: Kein Wettbewerber kommuniziert das Haftungsrisiko der IWE als Kaufmotiv — dabei ist das der stärkste Treiber
4. **KMU-Fokus mit Sofortnutzen**: Die großen Lösungen (WeldEye, DIWE Pro) setzen Implementierungsprojekte voraus. SchweißAufsicht muss in einem Tag einsatzbereit sein.
5. **Unterschrift-Workflow für 6-Monats-Verlängerungen**: Dieser spezifische, extrem häufige Audit-Fehler (Schweißer-Bestätigung nach ISO 9606-1) ist bei keinem Wettbewerber als Feature sichtbar

---

## Ideal Customer Profile (ICP)

### Demografie

- **Rolle**: Schweißfachingenieur (IWE/SFI), Schweißtechniker (IWT/ST) oder Schweißfachmann (IWS/SFM) — in kleineren Betrieben auch EWE/EWT/EWS (europäische Äquivalente)
- **Betrieb**: Metallbaubetrieb, Stahlbauer, Schlosserei, Fassadenbauer, Treppenbauer, Maschinenbauer, Druckbehälterhersteller mit 5–150 Mitarbeitern
- **DACH-Region**: Primär Deutschland, dann Österreich und Schweiz (gleicher Normenraum EN 1090 / ISO 14731)
- **Alter**: 30–55 Jahre — typisch ist ein erfahrener Praktiker mit DVS-Abschluss
- **Ausbildungsweg**: DVS-Ausbildung an GSI SLV, SLV München, SLV Hamburg, Schweißtechnische Lehr- und Versuchsanstalten; oft begleitend zum Ingenieurstudium oder Meister

### Pain Points (Top 5)

1. **Ertrinken in Papierkram**: Die Schweißaufsicht verwaltet WPS-Register, Schweißer-Prüfbescheinigungen, NCR-Listen, ZfP-Berichte, Materialzertifikate — in der Regel in parallelen Excel-Sheets und Ordnern ohne Konsistenz
2. **Persönliche Haftung ohne Sicherheitsnetz**: Bei Schäden durch fehlerhafte Schweißarbeiten haftet die benannte Schweißaufsicht zivilrechtlich und strafrechtlich. Eine fehlende Unterschrift, ein übersehenes Ablaufdatum einer Schweißerprüfung — das genügt für volle Haftung (vorsätzliche Normenverletzung bei Kenntnis der Anforderungen)
3. **6-Monats-Unterschriften-Falle**: ISO 9606-1 verlangt, dass die Schweißaufsicht alle 6 Monate schriftlich bestätigt, dass jeder Schweißer innerhalb seines Gültigkeitsbereichs tätig war. Ohne digitale Erinnerung und Unterschrift-Workflow ist das ein permanentes Audit-Risiko
4. **Audit-Überraschungen**: Externe Audits (TÜV, DVS ZERT) kommen angekündigt, aber die Unterlagen sind verstreut — Aufsicht muss stundenlang suchen und zusammenstellen
5. **Neue ISO 14731 (2023-Revision) verschärft Anforderungen**: Die Kompetenznachweispflicht liegt nun beim Hersteller, nicht mehr allein beim persönlichen Zertifikat — der Betrieb muss die Kompetenz aktiv dokumentieren und bewerten

### Kaufmotivation

1. **Compliance-Sicherheit**: Lückenloser Audit-Trail = kein Haftungsrisiko bei der nächsten Überwachung
2. **Zeitersparnis**: Statt 2–3 Stunden Suchen vor einem Audit: alle Dokumente sofort abrufbar
3. **Beruhigung**: Automatische Erinnerungen an ablaufende Schweißerprüfungen eliminieren das wichtigste Vergessensrisiko
4. **Professionelles Auftreten**: Digitale Freigabe-Workflows (mit Unterschrift) statt handgeschriebener Zettel
5. **Kosten**: Einzige IWE im Betrieb — jede Stunde gespart ist direkte Produktivitätsgewinnung; Fehler kosten viel mehr als eine Abo-Gebühr

### Digitale Reife

- Mehrheitlich: Excel + Papier + Ordner
- Fortgeschrittene: SharePoint/Teams-Ablage, aber ohne strukturierte Workflows
- Sehr wenige: weldassistant oder DVS-Software (aber nur als Nachschlagewerk)
- Smartphone-Nutzung in der Werkstatt ist Standard — Mobile-Readiness wird vorausgesetzt

---

## Branchen-Segmente

### Segment 1: Metallbau und Schlosserei (EXC2)

- **Zielgruppe**: Kleine Metallbaubetriebe (5–30 MA) mit EN 1090 EXC2-Zertifizierung — Treppen, Geländer, Tore, Konstruktionen; IWS oder IWT als Schweißaufsicht
- **Spezifische Pain Points**: Schweißer-Prüfbescheinigungen ablaufen lassen, keine strukturierte WPS-Verwaltung, Audit alle 3 Jahre überraschend mühsam
- **Ansprache**: "Dein nächstes Audit kommt sicher — bist du bereit?" / "Nie wieder vergessene Schweißer-Unterschriften"
- **Segment-Potenzial**: Größtes Volumen, geringste digitale Reife, niedrigster Preis-Punkt nötig

### Segment 2: Stahlbau und Hallenbau (EXC2/EXC3)

- **Zielgruppe**: Stahlbauer, Hallenlieferanten (15–100 MA), oft EXC2/EXC3; IWT oder IWE als Schweißaufsicht; komplexere Projekte mit Fertigungsunterlagen
- **Spezifische Pain Points**: Projekt-spezifische WPS-Zuordnung, ZfP-Planung und Dokumentation, NCR-Verfolgung bei Nacharbeiten
- **Ansprache**: "Alle WPS, Prüfpläne und NCRs projektbezogen abrufbar — auch für den Subunternehmer"
- **Segment-Potenzial**: Mittelgroßer Markt, höhere Zahlungsbereitschaft (komplexer Betrieb)

### Segment 3: Maschinenbau und Druckbehälterhersteller (ISO 3834)

- **Zielgruppe**: Maschinenbauer und Druckbehälterhersteller (20–200 MA) mit ISO 3834-2 Zertifizierung; IWE zwingend erforderlich; oft auch ASME- oder AD2000-Anforderungen
- **Spezifische Pain Points**: Umfangreiche Qualifikations-Matrix (Prozesse x Positionen x Werkstoffe), Doppelzertifizierung (ISO + ASME), Fertigungsbegleitdokumentation für jede Baugruppe
- **Ansprache**: "ISO 3834-2 konform dokumentieren — ohne Papierchaos"
- **Segment-Potenzial**: Kleineres Volumen, höchste Zahlungsbereitschaft, längere Sales-Cycle

### Segment 4: Fassaden- und Treppenbau (EXC2/EXC3 Aluminium)

- **Zielgruppe**: Fassadenbauer, Glasfassaden-Spezialisten, Treppenbauer mit Aluminium-Konstruktionen (EN 1090-3); IWT oder IWE; oft Kombination Stahl + Aluminium
- **Spezifische Pain Points**: Zwei parallele Zertifizierungen (Stahl EXC2 + Aluminium), getrennte WPS-Register für unterschiedliche Grundwerkstoffe, Schweißer-Qualifikationen in beiden Materialgruppen
- **Ansprache**: "Stahl und Aluminium in einer Software — ein Audit-Trail für alles"
- **Segment-Potenzial**: Nischenmarkt mit wachsendem Anteil (Gebäudehülle-Boom)

### Segment 5: Externe Schweißaufsicht und Beratungsbüros

- **Zielgruppe**: Freiberufliche IWE/IWT, die mehrere Betriebe gleichzeitig betreuen (externe Schweißaufsicht), sowie Ingenieurbüros mit Audit-/Beratungsmandat
- **Spezifische Pain Points**: Mandanten-Trennung (Multi-Tenant), Überblick über mehrere Betriebe gleichzeitig, Reporting an den Auftraggeber, mobiles Arbeiten vor Ort
- **Ansprache**: "Verwalte alle deine Mandanten in einer App — überall, auch auf dem Hallenflur"
- **Segment-Potenzial**: Multiplikator-Effekt: ein IWE = mehrere Betriebe; ideal für Empfehlungsmarketing

---

## Regulatorischer Kontext und Wissens-Themen

### Norm/Thema 1: DIN EN ISO 14731 — Schweißaufsicht: Aufgaben und Verantwortung

- **Was es ist**: Die zentrale Norm für Schweißaufsichtspersonen — definiert 23+ Aufgabenbereiche (Anhang B), drei Kompetenzniveaus (C = umfassend, S = speziell, B = Basis) und die Verantwortungsteilung zwischen Hersteller und Aufsicht
- **Warum relevant**: Jeder Betrieb mit EN 1090 oder ISO 3834-Zertifizierung muss diese Norm einhalten; die 2019/2023-Revision hat den Fokus auf Kompetenznachweise verstärkt
- **Eignet sich als Wissens-Seite**: Ja — "Was sagt ISO 14731 konkret?", "Was hat sich 2023 geändert?", "Wie dokumentiere ich die 23 Aufgaben?"

### Norm/Thema 2: DIN EN ISO 9606-1 — Schweißerprüfung Stahl

- **Was es ist**: Norm für die Prüfung und Zertifizierung von Schweißern — definiert Geltungsbereiche, Verlängerungsfristen (6 Monate Unterschrift, 3 Jahre Wiederholungsprüfung) und die Verantwortung der Aufsicht bei der Bestätigung
- **Warum relevant**: Die 6-Monats-Unterschrift ist der häufigste Audit-Fehler — ein perfekter Einstiegspunkt für SchweißAufsicht
- **Eignet sich als Wissens-Seite**: Ja — "Schweißerprüfung: Was läuft wann ab?", "6-Monats-Bestätigung nach ISO 9606-1: So geht es richtig"

### Norm/Thema 3: EN 1090-2 — Technische Anforderungen für Stahlkonstruktionen

- **Was es ist**: Die Ausführungsnorm für Stahlkonstruktionen — definiert Ausführungsklassen EXC1–EXC4, WPS-Anforderungen, NDT-Umfänge und die Anforderungen an die Schweißaufsicht je Klasse
- **Warum relevant**: Kein Betrieb mit CE-Kennzeichnung Stahlbau kommt an EN 1090-2 vorbei; die Ausführungsklasse bestimmt den Aufwand der Schweißaufsicht direkt
- **Eignet sich als Wissens-Seite**: Ja — "EXC2 vs. EXC3: Was ändert sich für die Schweißaufsicht?", "ZfP-Umfänge nach EN 1090-2 Tabelle 24"

### Norm/Thema 4: DIN EN ISO 3834 — Qualitätsanforderungen für das Schmelzschweißen

- **Was es ist**: Zertifizierungsbasis für schweißende Betriebe — drei Anforderungsstufen (3834-2 umfassend, 3834-3 Standard, 3834-4 elementar); bildet zusammen mit EN 1090 den vollständigen normativen Rahmen
- **Warum relevant**: Alle Betriebe mit EN 1090 EXC2+ müssen sinngemäß die ISO 3834-Anforderungen erfüllen; viele streben die explizite ISO 3834-Zertifizierung an (Druckbehälter, Maschinen)
- **Eignet sich als Wissens-Seite**: Ja — "ISO 3834-2 vs. 3834-3: Welche Stufe brauche ich?", "Was prüft der TÜV beim ISO-3834-Audit?"

### Norm/Thema 5: ISO 15614-1 — Schweißverfahrensprüfung (WPQR)

- **Was es ist**: Norm für die Qualifizierung von Schweißverfahren durch Prüfung — definiert wie ein WPQR erstellt wird, welche Prüfungen nötig sind und welche Geltungsbereiche eine WPS aus einem WPQR ableiten kann
- **Warum relevant**: Die Schweißaufsicht muss sicherstellen, dass für jede Schweißaufgabe eine gültige WPS mit zugehörigem WPQR vorliegt; die Geltungsbereiche (Dicke, Material, Position) sind komplex
- **Eignet sich als Wissens-Seite**: Ja — "Geltungsbereich einer WPS: Was deckt das WPQR ab?", "Level 1 vs. Level 2 nach EN 1090-2 Tabelle 12"

---

## Tool-/Rechner-Ideen

### Rechner 1: Schweißerprüfungs-Tracker und Ablauf-Checker

- **Was er berechnet/prüft**: Gibt der Nutzer Prüfdatum, Prozess, Position und Werkstoff eines Schweißers ein, zeigt das Tool das Ablaufdatum der Prüfbescheinigung (3 Jahre), den nächsten 6-Monats-Bestätigungs-Termin und den Geltungsbereich nach ISO 9606-1 Tabellen
- **Inputs**: Prüfdatum, Schweißprozess (111/135/141/...), Prüfstückdicke, Grundwerkstoff-Gruppe, Nahtart (BW/FW), Position
- **Output**: Kalendarischer Ablaufplan, nächste Fälligkeiten, Geltungsbereich (Prozess, Dicke, Position, Material)
- **Lead-Magnet-Potenzial**: Sehr hoch — jeder IWE mit 5+ Schweißern kämpft genau mit diesem Problem täglich; direkte Conversion in Trial-Signup

### Rechner 2: EXC-Klassen-Navigator

- **Was er berechnet**: Hilft dem Nutzer zu bestimmen, welche Ausführungsklasse (EXC1–EXC4) eine geplante Konstruktion erfordert und was das für Schweißaufsicht, WPS und ZfP bedeutet
- **Inputs**: Folgerisiko, Belastungsart, Werkstofffestigkeitsklasse, Nutzungskategorie
- **Output**: Empfohlene EXC-Klasse, Anforderungen an Schweißaufsicht-Kompetenzniveau, ZfP-Umfang aus EN 1090-2 Tabelle 24
- **Lead-Magnet-Potenzial**: Mittel — nützlich für Konstrukteure und Schweißaufsicht gemeinsam; gutes SEO-Thema

### Rechner 3: ISO 3834-Anforderungs-Check

- **Was er prüft**: Anhand von Betriebsparametern (Fertigungsumfang, Normenverpflichtung, Produktbereich) ermittelt der Checker, welche ISO-3834-Stufe (2/3/4) sinnvoll ist und welche Dokumentenpflichten damit verbunden sind
- **Inputs**: Produktbereich (EN 1090 / PED / Maschinen), Ausführungsklasse, Fertigungsvolumen, externe Auditverpflichtungen
- **Output**: Empfohlene ISO-3834-Stufe, Dokumenten-Checkliste, typische Auditpunkte
- **Lead-Magnet-Potenzial**: Mittel bis hoch — besonders für Betriebe, die eine ISO-3834-Zertifizierung anstreben

---

## Blog-Themen

| # | Titel-Idee | Ziel-Keyword | Suchintention | Geschatzte Worter |
|---|---|---|---|---|
| 1 | "Schweißerprüfung verlängern: Die 6-Monats-Unterschrift nach ISO 9606-1 — was genau muss die Aufsicht tun?" | Schweißerprüfung verlängern ISO 9606 | informational | 1.800 |
| 2 | "ISO 14731:2019 — Was hat sich geändert und was bedeutet das konkret für Schweißaufsichtspersonen?" | ISO 14731 Änderungen 2019 | informational | 2.000 |
| 3 | "EXC2 vs. EXC3: Welche Ausführungsklasse gilt für meinen Stahlbau-Auftrag?" | Ausführungsklasse EXC2 EXC3 EN 1090 | informational | 1.500 |
| 4 | "Die 5 häufigsten Audit-Fehler im EN-1090-Betrieb — und wie du sie vermeidest" | EN 1090 Audit Fehler | informational/commercial | 1.600 |
| 5 | "IWE, IWT oder IWS: Welches Kompetenzniveau reicht für welche Ausführungsklasse?" | IWE IWT IWS Unterschied Ausführungsklasse | informational | 1.400 |
| 6 | "Schweißaufsicht und Haftung: Was passiert wirklich, wenn ein Fehler passiert?" | Schweißaufsicht Haftung Konsequenzen | informational/commercial | 1.800 |
| 7 | "WPS erstellen: Schritt-für-Schritt nach ISO 15609-1 — was die Aufsicht prüfen muss" | WPS erstellen ISO 15609 | informational | 2.000 |
| 8 | "ZfP-Planung nach EN 1090-2: Wann brauche ich MT, UT oder RT — und wie viel Prozent?" | ZfP Planung EN 1090 Prozentsatz | informational | 1.500 |

---

## SEO-Hinweise fur Phase 2

### Suchintentionen der Zielgruppe

- **Normative Fragen** (informational): "Was sagt ISO 14731?", "Wie oft muss ich Schweißer-Zertifikate verlängern?" — hohes Volumen, aber kompetitiv durch DVS-Media und schweissaufsicht-kompakt.de
- **Problem-Diagnose** (commercial investigation): "Schweißaufsicht Software", "WPS Verwaltung digital", "Schweißer Qualifikationen verwalten" — niedriges Volumen, hohe Kaufabsicht
- **Compliance-Angst** (commercial): "EN 1090 Audit vorbereiten", "Schweißaufsicht Haftung" — stark emotionaler Trigger, gut für Conversion

### Erste Keyword-Ideen (Primar + Sekundar)

**Primäre Keywords:**
- "Schweißaufsicht Software" (niedrig Volumen, hoch Intent)
- "IWE Software" (Nische, direkte Zielgruppe)
- "Schweißer Qualifikationen verwalten" (Problem-Suchbegriff)
- "ISO 14731 Aufgaben" (normativ, informational)

**Sekundäre Keywords:**
- "Schweißerprüfung verlängern ISO 9606"
- "WPS Verwaltung digital"
- "EN 1090 Audit vorbereiten"
- "Schweißaufsicht Haftung"
- "ZfP Planung Software"
- "ISO 3834 Dokumentation"
- "Schweißkoordinator Aufgaben"
- "Schweißaufsicht Tagesaufgaben"

### Content-Lucken der Wettbewerber

1. **DVS Media**: Reines Nachschlagewerk-Marketing — keine Conversion-Seiten, kein SEO-Blog mit problemlösenden Artikeln
2. **schweissaufsicht-kompakt.de**: Gute Informationstiefe, aber kein Software-Angebot und kein Conversion-Ziel dahinter — reine Inhaltsseite
3. **weldassistant.com**: Keine deutschen Blog-Inhalte, keine normative Wissensvermittlung — nur Produktseiten
4. **WeldEye / DIWE**: Keine deutschen Inhalte überhaupt — vollständige Content-Lücke für DACH-Markt
5. **Alle Wettbewerber**: Kein einziger hat einen Haftungs-fokussierten Content-Ansatz — das ist die emotionalste und konversionsstärkste Botschaft in dieser Zielgruppe
