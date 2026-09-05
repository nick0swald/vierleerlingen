import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MatrixMark } from "@/components/matrix-mark";
import { BOOK, NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-forest text-cream">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-cream"
          onClick={() => setOpen(false)}
        >
          <MatrixMark invert className="size-6" />
          <span className="max-w-[14rem] truncate font-display text-[1.05rem] leading-none tracking-tight sm:max-w-none">
            {BOOK.title}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-cream/75 transition-colors duration-150 hover:text-cream",
                pathname === item.to && "text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="cream" size="sm" className="ml-3">
            <Link to="/contact">Studiedag aanvragen</Link>
          </Button>
        </nav>

        <Button
          variant="ghostCream"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-cream/10 bg-forest-deep lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base text-cream/80",
                  pathname === item.to && "bg-cream/10 text-cream",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="cream" className="mt-3">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Studiedag aanvragen
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
