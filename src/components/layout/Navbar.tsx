"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/seo-config";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

function DropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
        {dropdown.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="absolute left-0 right-0 h-2" />
          <div className="absolute left-0 top-full pt-2 w-64 z-50">
            <div className="bg-white rounded-lg shadow-lg border p-2 animate-in fade-in slide-in-from-top-1 duration-150">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.description && (
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const navItems: NavDropdown[] = [
  {
    label: "Produkt",
    items: [
      {
        name: "Alle Funktionen",
        href: "/funktionen",
        description: "Übersicht aller Module",
      },
      {
        name: "SchweißAufsicht Software",
        href: "/schweissaufsicht-software",
        description: "Beta-Zugang sichern",
      },
      {
        name: "Preise",
        href: "/preise",
        description: "Starter, Professional, Enterprise",
      },
    ],
  },
  {
    label: "Branchen",
    items: [
      {
        name: "Metallbau & Schlosserei",
        href: "/metallbau-schweissaufsicht",
        description: "EN 1090 EXC2",
      },
      {
        name: "Stahlbau & Hallenbau",
        href: "/stahlbau-schweissaufsicht",
        description: "EXC2/EXC3, Projektverwaltung",
      },
      {
        name: "Maschinenbau & Druckbehälter",
        href: "/maschinenbau-schweissaufsicht",
        description: "ISO 3834-2",
      },
      {
        name: "Fassaden- & Treppenbau",
        href: "/fassadenbau-schweissaufsicht",
        description: "Stahl + Aluminium",
      },
      {
        name: "Externe Schweißaufsicht",
        href: "/externe-schweissaufsicht",
        description: "Multi-Mandanten",
      },
    ],
  },
  {
    label: "Wissen",
    items: [
      {
        name: "Wissen & Ratgeber",
        href: "/wissen",
        description: "Alle Normen-Artikel",
      },
      {
        name: "ISO 14731 erklärt",
        href: "/wissen/iso-14731",
        description: "Aufgaben der Schweißaufsicht",
      },
      {
        name: "ISO 9606-1: Schweißerprüfung",
        href: "/wissen/iso-9606-1",
        description: "Verlängerung, 6-Monats-Regel",
      },
      {
        name: "EN 1090 Audit vorbereiten",
        href: "/wissen/en-1090-audit",
        description: "Checkliste, Häufige Fehler",
      },
      {
        name: "Ausführungsklassen EXC1-EXC4",
        href: "/wissen/ausfuehrungsklassen",
        description: "EXC2 vs EXC3 Unterschied",
      },
      {
        name: "ISO 3834 Anforderungen",
        href: "/wissen/iso-3834",
        description: "Schweißqualitätsmanagement",
      },
      {
        name: "Blog",
        href: "/blog",
        description: "Praxiswissen für IWE/IWT/IWS",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        name: "Schweißer-Qualifikations-Tracker",
        href: "/tools/schweisser-tracker",
        description: "Ablaufdaten berechnen",
      },
      {
        name: "EXC-Navigator",
        href: "/tools/exc-navigator",
        description: "Ausführungsklasse bestimmen",
      },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <Image
            src="/logo-icon.svg"
            alt="SchweißAufsicht"
            width={28}
            height={28}
          />
          <span>SchweißAufsicht</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <DropdownMenu key={item.label} dropdown={item} />
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href={siteConfig.appUrl}>Anmelden</a>
          </Button>
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/schweissaufsicht-software#beta-anmeldung">
              Kostenlos testen
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t">
              <Button variant="outline" className="w-full" asChild>
                <a href={siteConfig.appUrl}>Anmelden</a>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link
                  href="/schweissaufsicht-software#beta-anmeldung"
                  onClick={() => setMobileOpen(false)}
                >
                  Kostenlos testen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
