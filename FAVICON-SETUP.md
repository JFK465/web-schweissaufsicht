# Favicon & PWA-Manifest Checkliste

Diese Dateien müssen vorhanden sein im `public/` Verzeichnis:

```
public/
├── favicon.ico                    # Fallback
├── favicon.svg                    # Vektorgrafik (Lucide Icon)
├── favicon-16x16.png             # Klein
├── favicon-32x32.png             # Normal
├── apple-touch-icon.png          # iOS Home Screen (180x180)
├── android-chrome-192x192.png    # Android
└── android-chrome-512x512.png    # Android
```

## 1. layout.tsx Icons aktualisieren

In `src/app/layout.tsx` die `icons`-Sektion erweitern:

```tsx
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon.svg", type: "image/svg+xml" },
  ],
  shortcut: "/favicon.ico",
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  other: [
    { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
},
```

## 2. manifest.ts erstellen

Neue Datei `src/app/manifest.ts`:

```tsx
import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5B4CD8",  // Anpassen an Corporate-Farbe
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
```

## 3. Referenz-Projekt

- `web-schweissaufsicht` — Complete Implementierung
- `theme_color` in manifest.ts anpassen (Corporate-Farbe des Projekts)
