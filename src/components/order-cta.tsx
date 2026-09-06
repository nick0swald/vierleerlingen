import { BOOK, SITE } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OrderCta({
  variant = "outline",
  size = "lg",
  className,
  invert = false,
}: {
  variant?: "outline" | "cream" | "outlineCream" | "default";
  size?: "lg" | "default" | "sm";
  className?: string;
  invert?: boolean;
}) {
  if (!SITE.orderUrl) {
    return (
      <p
        className={cn(
          "max-w-xs text-sm leading-relaxed",
          invert ? "text-cream/80" : "text-muted",
          className,
        )}
      >
        Boek verschijnt via {BOOK.publisher} · ISBN {BOOK.isbn} — bestellink
        volgt.
      </p>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={SITE.orderUrl} target="_blank" rel="noreferrer">
        Bestel het boek
      </a>
    </Button>
  );
}