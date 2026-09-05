import { cn } from "@/lib/utils";

export function MatrixMark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const fill = invert ? "var(--color-cream)" : "var(--color-forest)";
  const empty = invert ? "transparent" : "transparent";
  const stroke = invert ? "var(--color-cream)" : "var(--color-forest)";
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="14" height="14" fill={fill} />
      <rect
        x="17"
        y="1"
        width="14"
        height="14"
        fill={empty}
        stroke={stroke}
        strokeWidth="1.6"
      />
      <rect
        x="1"
        y="17"
        width="14"
        height="14"
        fill={empty}
        stroke={stroke}
        strokeWidth="1.6"
      />
      <rect x="17" y="17" width="14" height="14" fill={fill} />
    </svg>
  );
}
