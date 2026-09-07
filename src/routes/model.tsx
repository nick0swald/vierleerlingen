import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimalImg } from "@/components/animal";
import { MatrixGrid } from "@/components/matrix-grid";
import { Kicker, Section } from "@/components/section";
import {
  DEFAULT_FACE,
  QUAD_BY_ID,
  type Face,
  type Quadrant,
} from "@/lib/content";
import { cn } from "@/lib/utils";

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

function faceFor(q: Quadrant, code: string): Face {
  return q.faces.find((f) => f.code === code) ?? q.faces[0];
}

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
  const [faceCode, setFaceCode] = useState(DEFAULT_FACE[initial]);
  const q = QUAD_BY_ID[selected];
  const face = faceFor(q, faceCode);

  function pickQuadrant(id: Quadrant["id"]) {
    setSelected(id);
    setFaceCode(DEFAULT_FACE[id]);
    window.location.hash = id;
  }

  useEffect(() => {
    if (hash && hash in QUAD_BY_ID) {
      const id = hash as Quadrant["id"];
      setSelected(id);
      setFaceCode(DEFAULT_FACE[id]);
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
          Links wil niet, rechts wil. Boven kan, onder kan niet. Een positie
          dit uur — geen etiket. Klik een vak.
        </p>
        <div className="mt-10 md:pl-8">
          <MatrixGrid selected={selected} onSelect={pickQuadrant} />
        </div>
      </Section>

      <Section tone="paper" id="positie">
        <article className="grid items-start gap-10 lg:grid-cols-[minmax(0,17rem)_1fr]">
          <div className="rounded-2xl bg-cream p-6">
            <AnimalImg
              name={face.animalKey}
              alt={`${face.animal} — ${face.title}`}
              className="mx-auto h-36 w-auto max-w-full object-contain object-top sm:h-40"
            />
            <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              {face.code} {face.animal}
            </p>
            <h2 className="mt-2 text-center font-display text-2xl">{q.name}</h2>
            <p className="mt-1 text-center font-display text-lg text-ink/80">
              {face.title}
            </p>
            <p className="mt-3 text-center text-sm text-muted">{q.short}</p>
          </div>
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              Gezicht
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {q.faces.map((f) => (
                <button
                  key={f.code}
                  type="button"
                  data-face={f.code}
                  aria-pressed={f.code === face.code}
                  onClick={() => setFaceCode(f.code)}
                  className={cn(
                    "rounded-lg border px-2 py-2.5 text-center transition-colors",
                    f.code === face.code
                      ? "border-forest bg-forest text-cream"
                      : "border-ink/10 bg-cream text-ink hover:border-forest/40",
                  )}
                >
                  <span className="block text-sm font-medium">{f.letter}</span>
                  <span
                    className={cn(
                      "mt-0.5 block truncate text-[0.65rem] tracking-wide",
                      f.code === face.code ? "text-cream/75" : "text-muted",
                    )}
                  >
                    {f.animal}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-[0.7rem] text-muted">
              A extravert-positief · B extravert-negatief · C introvert-positief
              · D introvert-negatief
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Wat je ziet
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {face.sees}
                </p>
              </div>
              <div>
                <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Valkuil
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {face.pitfall}
                </p>
              </div>
              <div>
                <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Aanpak
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {face.aanpak}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Section>
    </main>
  );
}
