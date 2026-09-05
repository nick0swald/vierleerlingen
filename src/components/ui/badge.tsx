import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 text-[0.7rem] font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-forest text-cream",
        cream: "bg-cream-dark text-forest",
        outline: "border border-forest/20 text-forest",
        outlineCream: "border border-cream/30 text-cream",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
