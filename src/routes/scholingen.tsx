import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { OFFERINGS } from "@/lib/content";

export const Route = createFileRoute("/scholingen")({
  head: () => ({
    meta: [
      { title: "Scholingen — Ik heb maar vier leerlingen" },
      {
        name: "description",
        content:
          "Studiedag, workshop, lezing of gesprek met schoolleiding. Benjamin van der Speck komt naar de school.",
      },
    ],
  }),
  component: ScholingenPage,
});

function ScholingenPage() {
  return (
    <main>
      <Section>
        <Kicker>Scholingen</Kicker>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Het boek is het visitekaartje.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">
          Een studiedag of workshop maakt het tastbaar: eigen klassen, eigen
          cases, één maandagactie mee naar huis.
        </p>
        <p className="mt-6 max-w-2xl font-display text-xl italic leading-snug text-forest">
          Dagdeel: hulp als hij het niet kan, grenzen als hij het niet wil.
          Inclusief boek. Direct toepasbaar in de les van morgen.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact">
            Studiedag aanvragen
            <ArrowRight />
          </Link>
        </Button>
      </Section>

      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-2">
          {OFFERINGS.map((o) => (
            <article
              key={o.id}
              className="flex flex-col rounded-2xl bg-cream p-6 shadow-[var(--shadow-border)] sm:p-8"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                {o.duration}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{o.title}</h2>
              <p className="mt-1 text-sm text-forest">{o.forWhom}</p>
              <p className="mt-4 text-base leading-relaxed text-ink">{o.lead}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                {o.points.map((p) => (
                  <li key={p} className="border-l-2 border-forest/25 pl-4">
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grow" />
              <Button asChild className="mt-6 self-start">
                <Link to="/contact" search={{ soort: o.id }}>
                  Deze vorm aanvragen
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Voor wie</Kicker>
            <h2 className="mt-3 font-display text-3xl">
              Docenten, mentoren, teams, schoolleiding, leraren in opleiding.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Groepsgrootte, als richtlijn: workshop en studiedag prettig bij
              ongeveer 8 tot 16. Een lezing kan groter.
            </p>
            <h3 className="mt-10 font-display text-xl">Wat deelnemers meenemen</h3>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-ink">
              <li>Gedeelde taal (vier posities)</li>
              <li>Check kunnen vóór wil</li>
              <li>Minstens één actie voor maandag</li>
              <li>Optioneel: exemplaar van het boek</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-forest p-6 text-cream sm:p-8">
            <h3 className="font-display text-2xl">Prijs</h3>
            <p className="mt-4 text-base leading-relaxed text-cream/80">
              Prijs op aanvraag — hangt af van vorm, groepsgrootte en of boeken
              meegaan.
            </p>
            <Button asChild variant="cream" className="mt-8">
              <Link to="/contact">Studiedag aanvragen</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
