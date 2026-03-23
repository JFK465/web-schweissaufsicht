import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Impressum – SchweißAufsicht",
  description: "Impressum von SchweißAufsicht gemäß § 5 TMG.",
  alternates: { canonical: `${siteConfig.url}/impressum` },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="container-custom py-16 max-w-3xl">
      <h1 className="heading-hero mb-8">Impressum</h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Angaben gemäß § 5 TMG
          </h2>
          <p>Jonas Krüger</p>
          <p>Einzelunternehmen</p>
          <p>Meisenweg 13</p>
          <p>78465 Konstanz</p>
          <p>Deutschland</p>
          <p className="mt-2">E-Mail: hallo@schweissaufsicht-software.de</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p>Jonas Krüger</p>
          <p>Meisenweg 13</p>
          <p>78465 Konstanz</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte dieser Website wurden sorgfältig erstellt. Dennoch
            können wir keine Gewähr für die Richtigkeit, Vollständigkeit und
            Aktualität der bereitgestellten Inhalte übernehmen. Die Nutzung der
            Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Mit der
            reinen Nutzung der Website kommt keinerlei Vertragsverhältnis
            zwischen dem Nutzer und uns zustande.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Haftung für Links
          </h2>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <p className="text-sm">Stand: März 2026</p>
      </div>
    </div>
  );
}
