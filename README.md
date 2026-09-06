# Ik heb maar vier leerlingen

Website bij het boek *Ik heb maar vier leerlingen* van Benjamin van der Speck (Uitgeverij Noordhoek, 2025, ISBN 9789403937533).

Publieke site: **[benjaminvanderspeck.nl](https://benjaminvanderspeck.nl)**. Soft landing voor het boek en studiedagen. Geen harde verkoop, geen diagnostische quiz.

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
| `email` | `info@benjaminvanderspeck.nl` | live, forward |
| `emailReady` | `true` | — |
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

Live: [benjaminvanderspeck.nl](https://benjaminvanderspeck.nl) (Vercel, vanuit deze GitHub-repo).

1. Push naar `main` → Vercel bouwt opnieuw.
2. Domein `benjaminvanderspeck.nl` + `www` staan al op Vercel.
3. Mailforward `info@benjaminvanderspeck.nl` staat.
4. Vul `orderUrl` in als de bestellink er is.

Het contactformulier mailt naar `info@benjaminvanderspeck.nl`.

## Inhoud en rechten

Tekst en beeld (kaft, dieren, matrices) horen bij het boek. © Benjamin van der Speck / Uitgeverij Noordhoek. Niet hergebruiken buiten deze site zonder toestemming.

Code in deze repo: alle rechten voorbehouden.
