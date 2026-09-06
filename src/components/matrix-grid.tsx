import { Link } from "@tanstack/react-router";
import { AnimalImg, MATRIX_ANIMAL_CLASS } from "@/components/animal";
import { QUAD_BY_ID, type Quadrant } from "@/lib/content";
import { cn } from "@/lib/utils";

function Cell({
  q,
  selected,
  onSelect,
}: {
  q: Quadrant;
  selected?: boolean;
  onSelect?: (id: Quadrant["id"]) => void;
}) {
  const inner = (
    <>
      <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted">
        {q.number}. {q.animal}
      </span>
      <AnimalImg
        name={q.animalKey}
        alt={`${q.animal} — ${q.name}`}
        className={cn("mx-auto my-3", MATRIX_ANIMAL_CLASS[q.animalKey])}
      />
      <p className="font-display text-lg leading-tight text-ink sm:text-xl">
        {q.name}
      </p>
      <p className="mt-1 text-sm text-muted">{q.short}</p>
    </>
  );

  const cls = cn(
    "flex h-full min-h-0 w-full flex-col rounded-lg bg-paper p-3 text-left shadow-[var(--shadow-border)] transition-[transform,background-color,box-shadow] duration-200 sm:p-4",
    selected && "ring-2 ring-forest",
    "hover:-translate-y-0.5 hover:shadow-md",
  );

  if (onSelect) {
    return (
      <button type="button" onClick={() => onSelect(q.id)} className={cls}>
        {inner}
      </button>
    );
  }

  return (
    <Link to="/model" hash={q.id} className={cls}>
      {inner}
    </Link>
  );
}

function Axis({ children }: { children: string }) {
  return (
    <span className="self-center justify-self-center text-center text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted [writing-mode:vertical-rl] rotate-180">
      {children}
    </span>
  );
}

export function MatrixGrid({
  selected,
  onSelect,
}: {
  selected?: Quadrant["id"];
  onSelect?: (id: Quadrant["id"]) => void;
}) {
  return (
    <div className="grid grid-cols-[1.6rem_1fr_1fr] gap-2 sm:grid-cols-[2.25rem_1fr_1fr] sm:gap-4">
      <span />
      <span className="text-center text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted sm:text-[0.7rem]">
        Wil niet
      </span>
      <span className="text-center text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted sm:text-[0.7rem]">
        Wil
      </span>
      <Axis>Kan</Axis>
      <Cell
        q={QUAD_BY_ID.kenner}
        selected={selected === "kenner"}
        onSelect={onSelect}
      />
      <Cell
        q={QUAD_BY_ID.beheerser}
        selected={selected === "beheerser"}
        onSelect={onSelect}
      />
      <Axis>Kan niet</Axis>
      <Cell
        q={QUAD_BY_ID.zoeker}
        selected={selected === "zoeker"}
        onSelect={onSelect}
      />
      <Cell
        q={QUAD_BY_ID.worstelaar}
        selected={selected === "worstelaar"}
        onSelect={onSelect}
      />
    </div>
  );
}
