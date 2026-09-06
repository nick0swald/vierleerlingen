import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { OrderCta } from "@/components/order-cta";
import { Kicker, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { BOOK } from "@/lib/content";

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
        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/model">
              Het model
              <ArrowRight />
            </Link>
          </Button>
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
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80">
            Een school die eerst wil lezen:{" "}
            <Link
              to="/contact"
              search={{ soort: "exemplaar" }}
              className="underline decoration-cream/35 underline-offset-4 hover:decoration-cream"
            >
              vraag een exemplaar aan
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
