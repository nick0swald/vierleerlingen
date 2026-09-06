import { Link } from "@tanstack/react-router";
import { MatrixMark } from "@/components/matrix-mark";
import { BOOK, NAV, SITE } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <MatrixMark invert className="size-7" />
              <p className="font-display text-xl leading-tight">{BOOK.title}</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              {BOOK.subtitle}
            </p>
            <p className="mt-6 text-sm text-cream/75">
              {BOOK.author}
              <br />
              {BOOK.publisher} · {BOOK.edition.toLowerCase()} {BOOK.year}
              <br />
              ISBN {BOOK.isbnDisplay}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/70">
              Op deze site
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-cream/80 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-cream">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/70">
              Uitnodigen
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              Studiedag, workshop of lezing. Benjamin komt naar de school.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
            >
              Nodig Benjamin uit
            </Link>
            <p className="mt-6 text-sm text-cream/80">
              <a
                href={`mailto:${SITE.email}`}
                className="underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
        <img
          src="/images/animals-strip-light.png?v=4"
          alt=""
          className="mt-12 h-16 w-full object-contain object-left opacity-70 sm:h-20"
        />
        <p className="mt-8 text-xs leading-relaxed text-cream/65">
          © {BOOK.author} · {BOOK.publisher} · ISBN {BOOK.isbnDisplay}
          <br />
          Geen tracking behalve wat de host nodig heeft.
        </p>
      </div>
    </footer>
  );
}
