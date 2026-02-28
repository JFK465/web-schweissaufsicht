import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { FAQSchema } from "@/components/seo/StructuredData";
import {
  HeroSection,
  SocialProofBar,
  PainPointsSection,
  HowItWorksSection,
  FeaturesGrid,
  PricingPreview,
  HomepageFAQ,
  SEOContentSection,
  CTASection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "SchweißAufsicht – Software für IWE, IWT und IWS",
  description:
    "Schweißaufsicht Software für DACH: ISO 14731 Aufgabenmatrix, digitale Schweißer-Unterschriften, Audit-Trail. Mobile-First für die Werkstatt. Jetzt kostenlos testen.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "SchweißAufsicht – Software für IWE, IWT und IWS",
    description:
      "Schweißaufsicht Software für DACH: ISO 14731 Aufgabenmatrix, digitale Schweißer-Unterschriften, Audit-Trail. Mobile-First für die Werkstatt. Jetzt kostenlos testen.",
    images: [
      {
        url: `${siteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: "SchweißAufsicht – Digitaler Arbeitsplatz für Schweißaufsichtspersonen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SchweißAufsicht – Software für IWE, IWT und IWS",
    description:
      "Schweißaufsicht Software für DACH: ISO 14731 Aufgabenmatrix, digitale Schweißer-Unterschriften, Audit-Trail.",
    images: [`${siteConfig.url}/og.png`],
  },
};

const faqItems = [
  {
    question: "Für wen ist SchweißAufsicht gemacht?",
    answer:
      "SchweißAufsicht richtet sich an Schweißaufsichtspersonen (IWE, IWT, IWS) im DACH-Raum, die die Schweißdokumentation in ihrem Betrieb allein verantworten.",
  },
  {
    question: "Was bedeutet ISO 14731-konform?",
    answer:
      "ISO 14731 definiert die Aufgaben und Verantwortlichkeiten von Schweißaufsichtspersonen. SchweißAufsicht bildet alle 23+ Aufgabenbereiche digital ab.",
  },
  {
    question: "Wie funktioniert die 6-Monats-Erinnerung für Schweißer?",
    answer:
      "ISO 9606-1 erfordert alle 6 Monate eine Bestätigung. SchweißAufsicht erinnert automatisch und ermöglicht die digitale Unterschrift auf dem Tablet.",
  },
  {
    question: "Was kostet SchweißAufsicht nach der Beta?",
    answer:
      "Nach der Beta: Starter ab 49 EUR/Monat. Beta-Nutzer erhalten 30 % Rabatt auf das erste Jahr. Aktuell kostenlos für Beta-Registrierungen.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <HeroSection />
      <SocialProofBar />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <PricingPreview />
      <HomepageFAQ />
      <SEOContentSection />
      <CTASection />
    </>
  );
}
