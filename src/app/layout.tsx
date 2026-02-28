import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareAppSchema,
} from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SchweißAufsicht – Digitaler Arbeitsplatz für IWE, IWT und IWS",
    template: "%s | SchweißAufsicht",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "SchweißAufsicht – Digitaler Arbeitsplatz für IWE, IWT und IWS",
    description: siteConfig.description,
    siteName: siteConfig.name,
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
    title: "SchweißAufsicht – Digitaler Arbeitsplatz für IWE, IWT und IWS",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <WebSiteSchema />
        <OrganizationSchema />
        <SoftwareAppSchema
          name={siteConfig.name}
          description={siteConfig.description}
          url=""
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
