# Ik heb maar vier leerlingen

Website bij het boek *Ik heb maar vier leerlingen* van Benjamin van der Speck (Uitgeverij Noordhoek, 2025, ISBN 9789403937533).

Publieke site: **vierleerlingen.nl** (in aanvraag). Soft landing voor het boek en studiedagen. Geen harde verkoop, geen diagnostische quiz.

## Lokaal draaien

```bash
npm install
npm run dev
```

De site luistert op poort **8080**.

| Commando | Wat het doet |
| --- | --- |
| `npm run dev` | ontwikkelserver |
| `npm run build` | productiebundel |
| `npm run typecheck` | TypeScript-check |

## Nog in te vullen

In [`src/lib/content.ts`](src/lib/content.ts), object `SITE`:

| Veld | Nu | Als je het hebt |
| --- | --- | --- |
| `email` | `info@vierleerlingen.nl` | echte mailbox |
| `emailReady` | `false` | `true` → mailto-link op Contact |
| `orderUrl` | `""` | URL van de boekverkoper → knop *Bestel het boek* |

Zolang `orderUrl` leeg is, toont de site “Binnenkort te bestellen”.

## Pagina’s

| Pad | Inhoud |
| --- | --- |
| `/` | Home — wet, 2×2, CTA studiedag |
| `/boek` | Het boek, 13 hoofdstukken, ISBN |
| `/model` | Vier posities + zestien gezichten |
| `/benjamin` | Auteursportret |
| `/scholingen` | Studiedag, workshop, lezing, schoolleiding |
| `/contact` | Aanvraagformulier |

## Deploy

De stack is **TanStack Start** + **Vite** + **Tailwind**.

1. Koppel deze repo aan [Vercel](https://vercel.com) (of Netlify).
2. Build command: `npm run build`
3. Koppel daarna `vierleerlingen.nl` in de hoster (DNS CNAME/A zoals de hoster aangeeft).
4. Zet een mailforward `info@vierleerlingen.nl` → je echte inbox.
5. Vul `orderUrl` en `emailReady` in, commit, opnieuw deployen.

Het contactformulier slaat nu lokaal op (bevestiging op scherm). Voor echte mail: later Formspree, Resend of een server-actie koppelen.

## Inhoud en rechten

Tekst en beeld (kaft, dieren, matrices) horen bij het boek. © Benjamin van der Speck / Uitgeverij Noordhoek. Niet hergebruiken buiten deze site zonder toestemming.

Code in deze repo: alle rechten voorbehouden.
