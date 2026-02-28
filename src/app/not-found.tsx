import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-custom py-24 text-center">
      <h1 className="heading-hero mb-4">404 – Seite nicht gefunden</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Diese Seite existiert nicht. Vielleicht wurde sie verschoben oder der
        Link ist falsch.
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/">Zur Startseite</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/kontakt">Kontakt</Link>
        </Button>
      </div>
    </div>
  );
}
