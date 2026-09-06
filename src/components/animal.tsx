import { cn } from "@/lib/utils";
import type { AnimalKey, PrimaryAnimal } from "@/lib/content";

const ALTS: Record<AnimalKey, string> = {
  leeuw: "Leeuw — Betrokken Beheerser",
  wolf: "Wolf — Dominante Presteerder",
  lynx: "Lynx — Stille Expert",
  panter: "Panter — Teruggetrokken Topper",
  paard: "Paard — Enthousiaste Worstelaar",
  ezel: "Ezel — Chaotische Hulpzoeker",
  os: "Os — Stille Doorzetter",
  kameel: "Kameel — Frustrerende Zwijger",
  meeuw: "Meeuw — Afgeleide Kenner",
  papegaai: "Papegaai — Charmante Slimmerik",
  adelaar: "Adelaar — Onafhankelijke Denker",
  struisvogel: "Struisvogel — Passieve Vermijder",
  mol: "Mol — Afhakende Zoeker",
  vos: "Vos — Sociale Opzoeker",
  zwijn: "Wild zwijn — Disruptieve Afhaker",
  hert: "Hert — Stille Observator",
};

/** Walk toward “wil” (right). Lynx already faces that way. */
const MIRROR_WIL = new Set<AnimalKey>([
  "leeuw",
  "wolf",
  "panter",
  "paard",
  "ezel",
  "os",
  "kameel",
]);

/** In the 2×2 the mole is wide and low, so a shared height shrinks the others. */
export const MATRIX_ANIMAL_CLASS: Record<PrimaryAnimal, string> = {
  leeuw: "h-[6.25rem] w-auto max-w-[92%] object-contain sm:h-28",
  paard: "h-[6.5rem] w-auto max-w-[92%] object-contain sm:h-[7.25rem]",
  meeuw: "h-[6.25rem] w-auto max-w-[92%] object-contain sm:h-28",
  mol: "h-16 w-auto max-w-[92%] object-contain sm:h-20",
};

export function AnimalImg({
  name,
  light = false,
  flip = false,
  className,
  alt,
}: {
  name: AnimalKey;
  light?: boolean;
  flip?: boolean;
  className?: string;
  alt?: string;
}) {
  const mirror = flip || MIRROR_WIL.has(name);
  return (
    <img
      src={`/images/${name}${light ? "-light" : ""}.png?v=6`}
      alt={alt ?? ALTS[name]}
      className={cn(
        "pointer-events-none select-none",
        mirror && "-scale-x-100",
        className,
      )}
      draggable={false}
    />
  );
}
