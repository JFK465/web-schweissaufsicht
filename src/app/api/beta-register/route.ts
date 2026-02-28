import { NextResponse } from "next/server";
import { z } from "zod";

const betaSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(1),
  company: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = betaSchema.parse(body);
    // TODO: Beta-Nutzer in Datenbank speichern und Bestätigungs-E-Mail senden
    console.log("Beta-Anmeldung:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
