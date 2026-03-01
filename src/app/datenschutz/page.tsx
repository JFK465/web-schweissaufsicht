import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Datenschutz – SchweißAufsicht",
  description: "Datenschutzerklärung von SchweißAufsicht gemäß DSGVO.",
  alternates: { canonical: `${siteConfig.url}/datenschutz` },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="container-custom py-16 max-w-3xl">
      <h1 className="heading-hero mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            1. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist
            SchweißAufsicht, Deutschland. Kontakt:
            hallo@schweissaufsicht-software.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            2. Erhobene Daten
          </h2>
          <p>
            Beim Besuch unserer Website werden folgende Daten automatisch
            erhoben: IP-Adresse (anonymisiert), Browsertyp, Betriebssystem,
            Referrer-URL und Uhrzeit des Zugriffs. Diese Daten werden
            ausschließlich zur Analyse und Verbesserung unseres Angebots
            verwendet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            3. Kontaktformular und Beta-Anmeldung
          </h2>
          <p>
            Wenn du das Kontaktformular oder die Beta-Anmeldung nutzt, speichern
            wir die übermittelten Daten (Name, E-Mail, Qualifikation,
            Unternehmen) ausschließlich zur Bearbeitung deiner Anfrage. Die
            Daten werden nicht an Dritte weitergegeben und nach Abschluss der
            Kommunikation gelöscht.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            4. Newsletter
          </h2>
          <p>
            Wenn du dich für unseren Newsletter anmeldest, speichern wir deine
            E-Mail-Adresse. Du kannst dich jederzeit über den Abmeldelink im
            Newsletter oder per E-Mail abmelden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            5. Deine Rechte (DSGVO)
          </h2>
          <p>Du hast das Recht auf:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3">
            Anfragen richte bitte an: hallo@schweissaufsicht-software.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            6. Hosting und technische Infrastruktur
          </h2>
          <p>
            Diese Website wird auf Servern innerhalb der EU gehostet (Vercel,
            Inc., mit Datenverarbeitung in der EU). Alle Verbindungen sind
            SSL-verschlüsselt (256-Bit).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Cookies</h2>
          <p>
            Diese Website verwendet technisch notwendige Cookies für den
            Betrieb. Es werden keine Marketing- oder Tracking-Cookies gesetzt
            ohne deine Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            8. Beschwerderecht
          </h2>
          <p>
            Du hast das Recht, dich bei der zuständigen Datenschutzbehörde zu
            beschweren. Die zuständige Behörde ist der jeweilige
            Landesbeauftragte für Datenschutz und Informationsfreiheit.
          </p>
        </section>

        <p className="text-sm">Stand: Februar 2026</p>
      </div>
    </div>
  );
}
