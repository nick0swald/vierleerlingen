import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { OrderCta } from "@/components/order-cta";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { BOOK, TUSSENUUR } from "@/lib/content";

export const Route = createFileRoute("/boek")({
  head: () => ({
    meta: [
      { title: "Het boek — Ik heb maar vier leerlingen" },
      {
        name: "description",
        content:
          "Ik heb maar vier leerlingen is een compact praktijkboek: niet kunnen versus niet willen. Uitgeverij Noordhoek, 2025.",
      },
    ],
  }),
  component: BoekPage,
});

function BoekPage() {
  return (
    <main>
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <figure>
            <img
              src="/images/cover.png?v=3"
              alt={`Kaft van ${BOOK.title}`}
              className="w-full max-w-xs outline outline-1 -outline-offset-1 outline-ink/10"
            />
            <figcaption className="mt-4 text-sm text-muted">
              {BOOK.publisher} · {BOOK.edition} {BOOK.year} · {BOOK.format}
              <br />
              ISBN {BOOK.isbnDisplay}
            </figcaption>
          </figure>
          <div>
            <Kicker>Het boek</Kicker>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              {BOOK.title}
            </h1>
            <p className="mt-4 font-display text-xl italic text-forest">
              {BOOK.subtitle}
            </p>
            <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-ink">
              <p>
                <em>Ik heb maar vier leerlingen</em> is een compact
                praktijkboek voor wie voor de klas staat. Geen nieuwe grote
                visie. Wel één kader om gedrag te lezen vóór je reageert.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Studiedag aanvragen
                  <ArrowRight />
                </Link>
              </Button>
              <OrderCta />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Geen etiket</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
          Dezelfde leerling is Leeuw in de gymzaal en Meeuw bij wiskunde.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink">
          De vier posities zijn geen stempels voor het rapport of het LVS.
          Dezelfde leerling is Leeuw in de gymzaal en Meeuw bij wiskunde. Wie
          dat vastzet voor het hele rooster, mist het punt. Wie het elke les
          opnieuw kan zien, heeft iets om op te sturen.
        </p>
      </Section>

      <Section>
        <Kicker>{TUSSENUUR.kicker}</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
          Wat je in de zak houdt.
        </h2>
        <blockquote className="mt-8 max-w-xl space-y-3 border-l-2 border-forest pl-5 text-base leading-relaxed text-ink">
          {TUSSENUUR.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </blockquote>
        <p className="mt-6 text-sm text-muted">
          Fragment uit hoofdstuk 12, <em>Wat je morgen doet</em>.
        </p>
      </Section>

      <Section tone="forest">
        <h2 className="font-display text-3xl sm:text-4xl">Verder</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
          Het boek lezen, of het kader eerst horen op een studiedag.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="cream" size="lg">
            <Link to="/contact">Studiedag aanvragen</Link>
          </Button>
          <OrderCta invert />
        </div>
      </Section>
    </main>
  );
}
