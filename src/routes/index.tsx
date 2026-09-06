import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MatrixGrid } from "@/components/matrix-grid";
import { OrderCta } from "@/components/order-cta";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { BOOK, QUADRANTS } from "@/lib/content";
import { AnimalImg } from "@/components/animal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Ik heb maar vier leerlingen — Benjamin van der Speck",
      },
      {
        name: "description",
        content:
          "Hulp als hij het niet kan. Grenzen als hij het niet wil. Het boek en de studiedagen van Benjamin van der Speck.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24 lg:pt-28">
          <p className="text-sm tracking-wide text-cream/70">{BOOK.author}</p>
          <h1 className="mt-6 font-display leading-[0.92] tracking-tight">
            <span className="block text-2xl font-normal sm:text-3xl">
              Ik heb maar
            </span>
            <span className="mt-1 block text-[clamp(4.25rem,18vw,8.5rem)] font-medium">
              vier
            </span>
            <span className="mt-1 block text-2xl font-normal sm:text-3xl">
              leerlingen
            </span>
          </h1>
          <p className="mt-8 max-w-lg font-display text-xl italic leading-snug text-cream/85 sm:text-2xl">
            {BOOK.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="cream" size="lg">
              <Link to="/boek">Lees over het boek</Link>
            </Button>
            <OrderCta invert className="sm:ml-2" />
          </div>
        </div>
        <img
          src="/images/animals-strip-light.png?v=4"
          alt="Leeuw, paard, meeuw en mol — de vier posities"
          className="mx-auto mt-8 h-28 w-full max-w-5xl object-contain px-4 sm:h-36 md:h-44"
        />
        <div className="h-8 bg-cream" />
      </section>

      <Section>
        <Kicker>In elke klas</Kicker>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
          In elke klas zitten leerlingen die meedoen en leerlingen die afleiden
          of afhaken. Leerlingen die de stof hebben, en leerlingen die erop
          worstelen. Twee vragen. Vier posities. Zodat je maandag iets in de
          zak hebt.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <p className="font-display text-3xl leading-snug text-forest sm:text-4xl">
            1. Kan hij het?
          </p>
          <p className="font-display text-3xl leading-snug text-forest sm:text-4xl">
            2. Wil hij het?
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Twee assen</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
          Wil × kan. Vier posities.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Links wil niet, rechts wil wel. Boven kan wel, onder kan niet. Een
          positie dit uur — geen etiket voor het rapport.
        </p>
        <div className="mt-10 md:pl-8">
          <MatrixGrid />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {QUADRANTS.map((q) => (
            <Link
              key={q.id}
              to="/model"
              hash={q.id}
              className="group flex gap-5 rounded-2xl bg-paper p-5 shadow-[var(--shadow-border)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-6"
            >
              <AnimalImg
                name={q.animalKey}
                alt={`${q.animal} — ${q.name}`}
                className={
                  q.animalKey === "mol"
                    ? "h-20 w-28 shrink-0 object-contain object-center sm:h-24 sm:w-32"
                    : "h-24 w-28 shrink-0 object-contain object-center sm:h-28 sm:w-32"
                }
              />
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {q.number}. {q.animal}
                </p>
                <h3 className="mt-1 font-display text-2xl text-ink">{q.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{q.kern}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <Kicker className="text-cream/70">Scholingen</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
          Een studiedag maakt het tastbaar: eigen klassen, eigen cases, één
          maandagactie mee naar huis.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
          Het boek is het visitekaartje. Benjamin komt naar de school.
        </p>
        <div className="mt-8">
          <Button asChild variant="cream" size="lg">
            <Link to="/contact">
              Nodig Benjamin uit
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
