import { SITE } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function OrderCta({
  variant = "outline",
  size = "lg",
  className,
}: {
  variant?: "outline" | "cream" | "outlineCream" | "default";
  size?: "lg" | "default" | "sm";
  className?: string;
  invert?: boolean;
}) {
  if (!SITE.orderUrl) return null;

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={SITE.orderUrl} target="_blank" rel="noreferrer">
        Bestel het boek
      </a>
    </Button>
  );
}