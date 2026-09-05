import { SITE } from "@/lib/content";
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
          "text-sm",
          invert ? "text-cream/55" : "text-muted",
          className,
        )}
      >
        Binnenkort te bestellen
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
