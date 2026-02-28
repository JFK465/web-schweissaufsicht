import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "AGB – SchweißAufsicht",
  description: "Allgemeine Geschäftsbedingungen von SchweißAufsicht.",
  alternates: { canonical: `${siteConfig.url}/agb` },
  robots: { index: false, follow: false },
};

export default function AGBPage() {
  return (
    <div className="container-custom py-16 max-w-3xl">
      <h1 className="heading-hero mb-8">Allgemeine Geschäftsbedingungen</h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 1 Geltungsbereich
          </h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen
            von SchweißAufsicht. Mit der Nutzung unserer Software und Dienste
            akzeptierst du diese AGB.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 2 Beta-Phase
          </h2>
          <p>
            Während der Beta-Phase ist die Nutzung von SchweißAufsicht
            kostenlos. Die Beta-Phase kann jederzeit beendet werden, wobei
            Beta-Nutzer mindestens 30 Tage vor Übergang zu einem
            kostenpflichtigen Modell informiert werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 3 Leistungsumfang
          </h2>
          <p>
            SchweißAufsicht stellt eine Cloud-basierte Software für
            Schweißaufsichtspersonen zur Verfügung. Der genaue Leistungsumfang
            ergibt sich aus der jeweiligen Produktbeschreibung auf der Website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 4 Nutzerpflichten
          </h2>
          <p>Der Nutzer verpflichtet sich:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nur wahrheitsgemäße Angaben zu machen</li>
            <li>Zugangsdaten sicher zu verwahren</li>
            <li>Die Software nur für rechtmäßige Zwecke zu nutzen</li>
            <li>Keine schädlichen Inhalte oder Malware einzubringen</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 5 Haftungsbeschränkung
          </h2>
          <p>
            SchweißAufsicht haftet nicht für indirekte Schäden, entgangenen
            Gewinn oder Datenverlust, soweit gesetzlich zulässig. Die Haftung
            für Vorsatz und grobe Fahrlässigkeit bleibt unberührt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 6 Kündigung
          </h2>
          <p>
            Der kostenpflichtige Vertrag kann monatlich gekündigt werden. Die
            Kündigung wird zum Ende des jeweiligen Abrechnungszeitraums wirksam.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            § 7 Anwendbares Recht
          </h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Für Verbraucher
            gelten die zwingenden Schutzvorschriften des Landes, in dem der
            Verbraucher seinen gewöhnlichen Aufenthalt hat.
          </p>
        </section>

        <p className="text-sm">Stand: Februar 2026</p>
      </div>
    </div>
  );
}
