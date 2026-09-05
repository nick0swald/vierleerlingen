import { cn } from "@/lib/utils";
import type { AnimalKey } from "@/lib/content";

const ALTS: Record<AnimalKey, string> = {
  leeuw: "Leeuw — de Betrokken Beheerser",
  paard: "Paard — de Enthousiaste Worstelaar",
  meeuw: "Meeuw — de Afgeleide Kenner",
  mol: "Mol — de Afhakende Zoeker",
};

/** In the 2×2 the mole is wide and low, so a shared height shrinks the others. */
export const MATRIX_ANIMAL_CLASS: Record<AnimalKey, string> = {
  leeuw: "h-[6.25rem] w-auto max-w-[92%] object-contain sm:h-28",
  paard: "h-[6.5rem] w-auto max-w-[92%] object-contain sm:h-[7.25rem]",
  meeuw: "h-[6.25rem] w-auto max-w-[92%] object-contain sm:h-28",
  mol: "h-16 w-auto max-w-[92%] object-contain sm:h-20",
};

export function AnimalImg({
  name,
  light = false,
  className,
  alt,
}: {
  name: AnimalKey;
  light?: boolean;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={`/images/${name}${light ? "-light" : ""}.png?v=4`}
      alt={alt ?? ALTS[name]}
      className={cn("pointer-events-none select-none", className)}
      draggable={false}
    />
  );
}
