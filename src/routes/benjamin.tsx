import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { BOOK } from "@/lib/content";

export const Route = createFileRoute("/benjamin")({
  head: () => ({
    meta: [
      { title: "Benjamin van der Speck — Ik heb maar vier leerlingen" },
      {
        name: "description",
        content:
          "Kort over Benjamin van der Speck. Hij schrijft vanuit de les: kan hij het, wil hij het.",
      },
    ],
  }),
  component: BenjaminPage,
});

function BenjaminPage() {
  return (
    <main>
      <Section>
        <Kicker>De schrijver</Kicker>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          {BOOK.author}
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink">
          <p>
            Benjamin staat al jaren voor de klas, het grootste deel in het vmbo.
            Hij zag te veel onderwijsboekjes van mensen die zelden met de
            voeten in dezelfde klei stonden. Dit boek is een mengsel van
            praktijk en wat hij onderweg leerde — geen nieuw etiket, wel een
            kader voor dit uur.
          </p>
          <p>
            Hij schrijft zodat collega’s een gedeelde taal hebben: kan hij het,
            wil hij het. Hulp als hij het niet kan. Grenzen als hij het niet
            wil.
          </p>
        </div>
      </Section>

      <Section tone="forest">
        <h2 className="font-display text-3xl sm:text-4xl">
          Nodig Benjamin uit
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/75">
          Studiedag, workshop, lezing of een gesprek met schoolleiding.
        </p>
        <Button asChild variant="cream" size="lg" className="mt-8">
          <Link to="/contact">
            Studiedag aanvragen
            <ArrowRight />
          </Link>
        </Button>
      </Section>
    </main>
  );
}
