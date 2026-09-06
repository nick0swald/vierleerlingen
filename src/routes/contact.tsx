import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Kicker, Section } from "@/components/section";
import { SITE } from "@/lib/content";

type ContactKind = "studiedag" | "workshop" | "lezing" | "leiding" | "anders";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { soort?: ContactKind } => {
    const soort = search.soort;
    if (
      soort === "studiedag" ||
      soort === "workshop" ||
      soort === "lezing" ||
      soort === "leiding" ||
      soort === "anders"
    ) {
      return { soort };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Contact — Ik heb maar vier leerlingen" },
      {
        name: "description",
        content:
          "Vraag een studiedag, workshop, lezing of gesprek met schoolleiding aan bij Benjamin van der Speck.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { soort } = Route.useSearch();

  return (
    <main>
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div>
            <Kicker>Contact</Kicker>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Studiedag aanvragen
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink">
              Vertel kort wie je bent en wat je zoekt. Benjamin reageert op
              aanvragen voor studiedagen, workshops, lezingen en gesprekken met
              schoolleiding.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-ink">
              Mail
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="text-forest underline decoration-forest/30 underline-offset-4"
              >
                {SITE.email}
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-paper p-5 shadow-[var(--shadow-border)] sm:p-8">
            <ContactForm defaultKind={soort} />
          </div>
        </div>
      </Section>
    </main>
  );
}
