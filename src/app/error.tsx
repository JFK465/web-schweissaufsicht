"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-custom py-24 text-center">
      <h1 className="heading-section mb-4">Etwas ist schiefgelaufen</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.
      </p>
      <Button onClick={reset}>Erneut versuchen</Button>
    </div>
  );
}
