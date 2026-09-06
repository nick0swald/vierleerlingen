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
          "Benjamin van der Speck is docent en auteur van Ik heb maar vier leerlingen. Hij schrijft vanuit de les: kunnen en willen.",
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
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink">
          <p>
            Benjamin van der Speck is docent en auteur van{" "}
            <em>Ik heb maar vier leerlingen</em>. Hij schrijft vanuit de les,
            niet vanaf de studiedag: over wat er gebeurt als een leerling het
            niet kan — en wat er gebeurt als hij het niet wil.
          </p>
          <p>
            In zijn werk staat een eenvoudig maar hardnekkig idee centraal. In
            elke klas zie je eindeloos unieke leerlingen, en toch herken je
            steeds dezelfde patronen. Benjamin bundelt die tot vier types langs
            twee assen: kunnen en willen. Wie het niet kan, verdient hulp. Wie
            het niet wil, verdient grenzen. Die twee door elkaar halen is de
            duurste fout in een lesuur.
          </p>
          <p>
            Het boek is bedoeld als gedeelde taal voor teams, niet als zoveelste
            theorie van buitenaf. Geen Magister-labels, geen HR-jargon — wel een
            manier van kijken die je maandagochtend al kunt gebruiken. Benjamin
            werkt vanuit de praktijk van het Nederlandse voortgezet onderwijs en
            zoekt bewust de gulden middenweg tussen “iedere leerling is uniek”
            en “de leerling”.
          </p>
          <p>
            <em>Ik heb maar vier leerlingen</em> (Uitgeverij Noordhoek, 2025) is
            zijn eerste boek. Daarmee wil hij scholen en opleidingen een
            gemeenschappelijk vocabulaire geven voor gedrag in de les — zodat
            teams sneller eens zijn over wat ze zien, en sneller weten wat ze
            moeten doen.
          </p>
        </div>
      </Section>

      <Section tone="forest">
        <h2 className="font-display text-3xl sm:text-4xl">
          Nodig Benjamin uit
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
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
