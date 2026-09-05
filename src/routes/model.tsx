import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimalImg } from "@/components/animal";
import { MatrixGrid } from "@/components/matrix-grid";
import { Kicker, Section } from "@/components/section";
import { QUAD_BY_ID, type Quadrant } from "@/lib/content";

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Het model — Ik heb maar vier leerlingen" },
      {
        name: "description",
        content:
          "Twee assen: wil en kan. Vier posities. Een kader voor dit uur, geen etiket.",
      },
    ],
  }),
  component: ModelPage,
});

function ModelPage() {
  const hash = useRouterState({
    select: (s) => s.location.hash.replace("#", ""),
  });
  const initial = (
    ["beheerser", "worstelaar", "kenner", "zoeker"] as const
  ).includes(hash as Quadrant["id"])
    ? (hash as Quadrant["id"])
    : "beheerser";
  const [selected, setSelected] = useState<Quadrant["id"]>(initial);
  const q = QUAD_BY_ID[selected];

  useEffect(() => {
    if (hash && hash in QUAD_BY_ID) {
      setSelected(hash as Quadrant["id"]);
      document
        .getElementById("positie")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <main>
      <Section>
        <Kicker>Het model</Kicker>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Twee assen: wil en kan.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Geen knoppen aan/uit — eerder als een rapportcijfer. Links wil niet,
          rechts wil. Boven kan, onder kan niet. Daaruit vier posities.
        </p>
        <figure className="mt-10 max-w-lg">
          <img
            src="/images/matrix-boek.png?v=3"
            alt="Vier posities: links wil niet, rechts wil; boven kan, onder kan niet. Rechtsboven de Betrokken Beheerser, linksboven de Afgeleide Kenner, rechtsonder de Enthousiaste Worstelaar, linksonder de Afhakende Zoeker."
            className="w-full outline outline-1 -outline-offset-1 outline-ink/10"
          />
          <figcaption className="mt-3 text-sm text-muted">
            De matrix uit het boek. Klik hieronder een positie.
          </figcaption>
        </figure>
        <div className="mt-10 md:pl-8">
          <MatrixGrid
            selected={selected}
            onSelect={(id) => {
              setSelected(id);
              window.location.hash = id;
            }}
          />
        </div>
      </Section>

      <Section tone="paper" id="positie">
        <article className="grid items-start gap-10 lg:grid-cols-[minmax(0,16rem)_1fr]">
          <div className="rounded-2xl bg-cream p-6">
            <AnimalImg
              name={q.animalKey}
              className={
                q.animalKey === "mol"
                  ? "mx-auto h-28 w-auto object-contain"
                  : "mx-auto h-36 w-auto max-w-full object-contain"
              }
            />
            <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              {q.number}. {q.animal}
            </p>
            <h2 className="mt-2 text-center font-display text-2xl">{q.name}</h2>
            <p className="mt-3 text-center text-sm text-muted">{q.short}</p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                Kern
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{q.kern}</p>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                Valkuil
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{q.valkuil}</p>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                Wat je maandag doet
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{q.monday}</p>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                Vier gezichten
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.faces.map((f) => (
                  <li
                    key={f.code}
                    className="border border-ink/10 bg-cream px-3 py-2.5 text-sm"
                  >
                    <span className="font-medium tabular-nums text-forest">
                      {f.code}
                    </span>
                    <span className="text-ink"> {f.animal}</span>
                    <span className="block text-muted">{f.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Section>

      <Section id="gezichten">
        <h2 className="font-display text-3xl sm:text-4xl">Zestien gezichten</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          In het boek staan per positie vier gezichten als ezelsbrug — onder
          meer Leeuw (1A), Paard (2A), Meeuw (3B), mol (4D). Lynx is 1C, geen
          uil. Het is een ezelsbrug voor dit uur, geen diagnostische quiz en
          geen stempel voor het dossier.
        </p>
        <figure className="mt-10">
          <img
            src="/images/matrix-16.png?v=1"
            alt="Zestien gezichten op de assen wil en kan. Kenner linksboven: Meeuw, Papegaai, Struisvogel, Adelaar. Beheerser rechtsboven: Wolf, Leeuw, Panter, Lynx. Zoeker linksonder: wild zwijn, Vos, mol, Hert. Worstelaar rechtsonder: Ezel, Paard, Kameel, Os."
            className="w-full max-w-4xl outline outline-1 -outline-offset-1 outline-ink/10"
          />
          <figcaption className="mt-3 max-w-3xl text-sm text-muted">
            A extravert-positief · B extravert-negatief · C introvert-positief ·
            D introvert-negatief. De dieren helpen je het dit uur te zien — niet
            om iemand vast te zetten.
          </figcaption>
        </figure>
        <p className="mt-6">
          <Link
            to="/boek"
            className="text-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
          >
            Naar het boek
          </Link>
        </p>
      </Section>

      <Section tone="paper">
        <p className="max-w-2xl font-display text-2xl leading-snug text-ink sm:text-3xl">
          Gedrag eerst definiëren, daarna interveniëren. Op het juiste niveau,
          met de juiste zwaarte.
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
          Hulp als hij het niet kan. Grenzen als hij het niet wil. De vuist als
          dat niet bijdraait of de groep wordt gegijzeld.
        </p>
      </Section>
    </main>
  );
}
