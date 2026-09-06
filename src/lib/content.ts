export type PrimaryAnimal = "leeuw" | "paard" | "meeuw" | "mol";

export type AnimalKey =
  | PrimaryAnimal
  | "wolf"
  | "lynx"
  | "panter"
  | "ezel"
  | "os"
  | "kameel"
  | "papegaai"
  | "adelaar"
  | "struisvogel"
  | "vos"
  | "zwijn"
  | "hert";

export type FaceLetter = "A" | "B" | "C" | "D";

export type Face = {
  code: string;
  letter: FaceLetter;
  animal: string;
  animalKey: AnimalKey;
  title: string;
  extravert: boolean;
  tone: "positief" | "negatief";
  sees: string;
  pitfall: string;
  aanpak: string;
};

export type Quadrant = {
  id: "beheerser" | "worstelaar" | "kenner" | "zoeker";
  number: 1 | 2 | 3 | 4;
  name: string;
  short: string;
  animal: string;
  animalKey: PrimaryAnimal;
  family: string;
  effort: "hoog" | "laag";
  understanding: "hoog" | "laag";
  want: boolean;
  can: boolean;
  kern: string;
  valkuil: string;
  monday: string;
  faces: Face[];
};

export const BOOK = {
  title: "Ik heb maar vier leerlingen",
  subtitle: "Hulp als hij het niet kan. Grenzen als hij het niet wil.",
  author: "Benjamin van der Speck",
  publisher: "Uitgeverij Noordhoek",
  year: 2025,
  edition: "Eerste druk",
  format: "A5 paperback",
  isbn: "9789403937533",
  isbnDisplay: "978-94-039-3753-3",
} as const;

/** Zet emailReady op true zodra de mailbox live is. orderUrl vullen = bestelknop. */
export const SITE = {
  domain: "benjaminvanderspeck.nl",
  email: "info@benjaminvanderspeck.nl",
  emailReady: false,
  /** Leeg = bestellink volgt (geen shop-knop). */
  orderUrl: "",
} as const;

/** Fragment uit het boek (hfdst. 12), voor op de boekpagina. */
export const TUSSENUUR = {
  kicker: "Voor in een tussenuur",
  lines: [
    "Twee vragen. Kan hij het. Wil hij het. Dan hulp, grenzen of vuist.",
    "Eerst vier lijsten, dan plotten. Last van structuur. Positief opvallend. Vergeten. Bij de hand.",
    "Check kunnen vóór wil. Gevolg op gewicht.",
    "Geen etiket. Geen LVS-dier. Geen nakaarten.",
  ],
} as const;

export const NAV = [
  { to: "/boek", label: "Het boek" },
  { to: "/model", label: "Het model" },
  { to: "/benjamin", label: "Benjamin" },
  { to: "/scholingen", label: "Scholingen" },
] as const;

export const QUADRANTS: Quadrant[] = [
  {
    id: "beheerser",
    number: 1,
    name: "Betrokken Beheerser",
    short: "Kan het, wil het.",
    animal: "Leeuw",
    animalKey: "leeuw",
    family: "Roofdieren",
    effort: "hoog",
    understanding: "hoog",
    want: true,
    can: true,
    kern: "Doet mee, heeft de stof, de les kan door.",
    valkuil:
      "Je laat hem met rust omdat het loopt — dan zakt hij onder niveau, of hij trekt de les op een manier die jij niet koos.",
    monday:
      "Erken, daag uit, geef autonomie. Gebruik hem niet als gratis assistent zonder dat hij groeit.",
    faces: [
      {
        code: "1A",
        letter: "A",
        animal: "Leeuw",
        animalKey: "leeuw",
        title: "Enthousiaste Leider",
        extravert: true,
        tone: "positief",
        sees: "Hij trekt de les jouw kant op, wil winnen met de stof, steekt overal de vinger op.",
        pitfall: "Je laat hem de hiërarchie runnen omdat het zo lekker loopt.",
        aanpak: "Erken, daag uit, geef autonomie. Niet als gratis assistent.",
      },
      {
        code: "1B",
        letter: "B",
        animal: "Wolf",
        animalKey: "wolf",
        title: "Dominante Presteerder",
        extravert: true,
        tone: "negatief",
        sees: "Hij kan het en doet het, om eerste te zijn, om de ander kleiner te maken.",
        pitfall: "Je verwart presteren met bijdragen. De toets zit, de groep niet.",
        aanpak: "Presteren is geen bijdragen. Zet de groep terug in het midden.",
      },
      {
        code: "1C",
        letter: "C",
        animal: "Lynx",
        animalKey: "lynx",
        title: "Stille Expert",
        extravert: false,
        tone: "positief",
        sees: "Stil, goed, geen gedoe. Ze schrijft, het klopt, ze vraagt niks.",
        pitfall: "Je vergeet haar. Ze zakt onder niveau omdat niemand haar werk geeft dat haar aankan.",
        aanpak: "Werk op haar niveau. Vergeet haar niet omdat het stil is.",
      },
      {
        code: "1D",
        letter: "D",
        animal: "Panter",
        animalKey: "panter",
        title: "Teruggetrokken Topper",
        extravert: false,
        tone: "negatief",
        sees: "Hij kan het en laat het niet zien. Hij houdt de voorsprong binnen.",
        pitfall: "Je leest de stilte als onmacht. Hulp ervaart hij als betutteling.",
        aanpak: "Hij kan het. Daag uit, betuttel niet.",
      },
    ],
  },
  {
    id: "worstelaar",
    number: 2,
    name: "Enthousiaste Worstelaar",
    short: "Wil het, kan het niet.",
    animal: "Paard",
    animalKey: "paard",
    family: "Last- en boerderijdieren",
    effort: "hoog",
    understanding: "laag",
    want: true,
    can: false,
    kern: "Wil wel, begrijpt nog niet. Daarom zit je voor.",
    valkuil:
      "“Werk zelfstandig” terwijl de stof niet zit — frustratie, later afhaken.",
    monday:
      "Korte uitleg, scaffolding, kleine successen. Bescherm de inzet.",
    faces: [
      {
        code: "2A",
        letter: "A",
        animal: "Paard",
        animalKey: "paard",
        title: "Sociale Doorzetter",
        extravert: true,
        tone: "positief",
        sees: "Ze vraagt, helpt de buurman, blijft. Ze wil erbij horen én de stof.",
        pitfall: "Je zet haar in als hulplijn terwijl ze het zelf nog niet heeft.",
        aanpak: "Scaffolding, kleine successen. Niet inzetten als hulplijn.",
      },
      {
        code: "2B",
        letter: "B",
        animal: "Ezel",
        animalKey: "ezel",
        title: "Chaotische Hulpzoeker",
        extravert: true,
        tone: "negatief",
        sees: "Hij wil hulp, hard, nu. Uit de stoel, aan jouw bureau, werk nog niet begonnen.",
        pitfall: "Hij eet je tijd. Jij wordt geïrriteerd, en je straft de wil.",
        aanpak: "Korte hulp, dan terug naar de taak. Straf de wil niet.",
      },
      {
        code: "2C",
        letter: "C",
        animal: "Os",
        animalKey: "os",
        title: "Stille Doorzetter",
        extravert: false,
        tone: "positief",
        sees: "Ze blijft schrijven, het is fout, ze klaagt niet en steekt geen vinger op.",
        pitfall: "Je denkt dat het loopt omdat het stil is. Het schrift vult zich met dezelfde misser.",
        aanpak: "Check het schrift. Stilte is geen begrip.",
      },
      {
        code: "2D",
        letter: "D",
        animal: "Kameel",
        animalKey: "kameel",
        title: "Frustrerende Zwijger",
        extravert: false,
        tone: "negatief",
        sees: "Hij wil, zit vast, sluit af. Pen neer, kaken op elkaar, “laat maar.”",
        pitfall: "Je leest de hitte als onwil. Je geeft een grens waar een andere instap hoort.",
        aanpak: "Andere instap, geen grens-als-onwil. De hitte is vastzitten.",
      },
    ],
  },
  {
    id: "kenner",
    number: 3,
    name: "Afgeleide Kenner",
    short: "Kan het, wil het niet.",
    animal: "Meeuw",
    animalKey: "meeuw",
    family: "Vogels",
    effort: "laag",
    understanding: "hoog",
    want: false,
    can: true,
    kern: "Redt het zelf; kost de klas dit uur. Geen karaktervonnis — wel een probleem voor de groep dit uur.",
    valkuil:
      "Meer uitleg geven alsof hij het niet kan; of alleen straffen zonder opdracht op niveau.",
    monday:
      "Challenge, relevantie, autonomie — en een duidelijke grens als hij de les omver trekt.",
    faces: [
      {
        code: "3A",
        letter: "A",
        animal: "Papegaai",
        animalKey: "papegaai",
        title: "Charmante Slimmerik",
        extravert: true,
        tone: "positief",
        sees: "Hij praat, charmeert, kan het als het moet. De les is een podium.",
        pitfall: "Je mag hem. Daarom laat je de lage inzet lopen. Charme is geen inzet.",
        aanpak: "Charme is geen inzet. Opdracht op niveau, grens op de show.",
      },
      {
        code: "3B",
        letter: "B",
        animal: "Meeuw",
        animalKey: "meeuw",
        title: "Disruptieve Grappenmaker",
        extravert: true,
        tone: "negatief",
        sees: "De grap is status. Drie minuten werk, de rest van het uur de les slopen.",
        pitfall: "Je stuurt hem de gang op en hij wint de hiërarchie vanaf de gang.",
        aanpak: "Challenge plus grens. De gang op is winst voor hem.",
      },
      {
        code: "3C",
        letter: "C",
        animal: "Adelaar",
        animalKey: "adelaar",
        title: "Onafhankelijke Denker",
        extravert: false,
        tone: "positief",
        sees: "Hij heeft het, doet het op zijn manier, doet niet mee aan jóuw les.",
        pitfall: "Je vecht de methode in plaats van de afwezigheid.",
        aanpak: "Laat de methode, eis aanwezigheid. Autonomie binnen de les.",
      },
      {
        code: "3D",
        letter: "D",
        animal: "Struisvogel",
        animalKey: "struisvogel",
        title: "Passieve Vermijder",
        extravert: false,
        tone: "negatief",
        sees: "Ze kan het, doet het niet, kop in het zand. Lijkt een Zoeker.",
        pitfall: "Je geeft extra uitleg die ze niet nodig heeft. Hulp beloont hier het wegduiken.",
        aanpak: "Geen extra uitleg. Zichtbare taak, grens op het wegduiken.",
      },
    ],
  },
  {
    id: "zoeker",
    number: 4,
    name: "Afhakende Zoeker",
    short: "Kan het niet, wil het niet.",
    animal: "Mol",
    animalKey: "mol",
    family: "Bosdieren",
    effort: "laag",
    understanding: "laag",
    want: false,
    can: false,
    kern: "Eerst check kunnen vóór wil. Ontbreekt kunnen: hulp eerst, grens als de houding de les stopt. Is de check raak: houding eerst; hulp is dan het verkeerde gereedschap.",
    valkuil: "Meteen “lui”, of meteen eindeloos helpen zonder houding.",
    monday:
      "Relatie, structuur, een kleine stap. De vuist als de groep wordt gegijzeld.",
    faces: [
      {
        code: "4A",
        letter: "A",
        animal: "Vos",
        animalKey: "vos",
        title: "Sociale Opzoeker",
        extravert: true,
        tone: "positief",
        sees: "Hij zoekt contact, niet de taak. Vriendelijk, kwijt, aan het lopen.",
        pitfall: "Je geniet van het contact. Het werk gebeurt niet.",
        aanpak: "Contact mag, de taak blijft. Korte opdracht, dan check.",
      },
      {
        code: "4B",
        letter: "B",
        animal: "Wild zwijn",
        animalKey: "zwijn",
        title: "Disruptieve Afhaker",
        extravert: true,
        tone: "negatief",
        sees: "Hij haakt af met herrie. Stoel, commentaar, werk onaangeraakt.",
        pitfall: "Je ziet alleen de herrie. Straf zonder check maakt van onmacht een karakter.",
        aanpak: "Eerst kunnen-check. Herrie is geen karakter.",
      },
      {
        code: "4C",
        letter: "C",
        animal: "Hert",
        animalKey: "hert",
        title: "Stille Observator",
        extravert: false,
        tone: "positief",
        sees: "Ze kijkt, knikt, begint niet. Geen vijand. Geen werk.",
        pitfall: "Je laat haar zitten omdat ze geen last is. Geen last is geen inzet.",
        aanpak: "Mini-stap, nabijheid. Niet laten zitten omdat ze stil is.",
      },
      {
        code: "4D",
        letter: "D",
        animal: "Mol",
        animalKey: "mol",
        title: "Geïsoleerde Terugtrekker",
        extravert: false,
        tone: "negatief",
        sees: "Kap op, tas op tafel, geen oog: weg uit de les terwijl hij er nog zit.",
        pitfall: "Je wacht tot hij komt. Hij komt niet. Wachten is ook een gevolg.",
        aanpak: "Relatie, kleine stap. Wachten is ook een gevolg.",
      },
    ],
  },
];

export const QUAD_BY_ID = Object.fromEntries(
  QUADRANTS.map((q) => [q.id, q]),
) as Record<Quadrant["id"], Quadrant>;

/** Cover-dier per positie (2×2): Leeuw 1A, Paard 2A, Meeuw 3B, mol 4D. */
export const DEFAULT_FACE: Record<Quadrant["id"], string> = {
  beheerser: "1A",
  worstelaar: "2A",
  kenner: "3B",
  zoeker: "4D",
};

export const CHAPTERS = [
  {
    n: 1,
    title: "De uitdaging: individu versus groep, niet kunnen versus niet willen",
  },
  {
    n: 2,
    title: "De matrix: herkennen, identificeren, valkuilen",
  },
  {
    n: 3,
    title: "De Betrokken Beheerser. Hoog inzet, hoog begrip.",
  },
  {
    n: 4,
    title: "De Enthousiaste Worstelaar. Hoog inzet, laag begrip.",
  },
  {
    n: 5,
    title: "De Afgeleide Kenner. Laag inzet, hoog begrip.",
  },
  {
    n: 6,
    title: "De Afhakende Zoeker. Laag inzet, laag begrip.",
  },
  { n: 7, title: "Zacht, hard, de deur." },
  {
    n: 8,
    title: "Transities: dezelfde leerling, andere positie",
  },
  {
    n: 9,
    title: "De klas is geen optelsom. Samenstelling en dynamiek.",
  },
  {
    n: 10,
    title: "Dezelfde leerling, verschillende ogen",
  },
  { n: 11, title: "Wat de schoolleiding levert" },
  { n: 12, title: "Wat je morgen doet" },
  { n: 13, title: "Conclusie. Wat blijft." },
];

export const OFFERINGS: {
  id: "studiedag" | "workshop" | "lezing" | "leiding";
  title: string;
  duration: string;
  forWhom: string;
  lead: string;
  points: string[];
}[] = [
  {
    id: "studiedag",
    title: "Studiedag (team)",
    duration: "Een hele dag, op locatie",
    forWhom: "Teams van docenten, mentoren, schoolleiding",
    lead: "Kader kan/wil, plotten van eigen leerlingen en klas, oefenen hulp versus grenzen, afronden met concrete afspraken voor morgen.",
    points: [
      "Twee vragen: kan hij het, wil hij het.",
      "Eigen klassen plotten, geen etiketten.",
      "Hulp versus grenzen, op gewicht.",
      "Afspraken die maandag in de les staan.",
    ],
  },
  {
    id: "workshop",
    title: "Workshop (dagdeel)",
    duration: "Twee tot vier uur",
    forWhom: "Secties, mentoren, kleinere teams",
    lead: "Korter. Focus op herkennen, en één interventie per deelnemer.",
    points: [
      "Herkennen: wat je ziet dit uur.",
      "Check kunnen vóór wil.",
      "Eén actie mee naar huis.",
    ],
  },
  {
    id: "lezing",
    title: "Lezing",
    duration: "45 tot 75 minuten",
    forWhom: "Studiedag-opening, team, grotere zaal",
    lead: "De wet, de vier posities, herkenbare scènes. Daarna vragen.",
    points: [
      "Hulp als hij het niet kan. Grenzen als hij het niet wil.",
      "Vier posities, geen karaktervonnis.",
      "Ruimte voor vragen.",
    ],
  },
  {
    id: "leiding",
    title: "Schoolleiding",
    duration: "Dagdeel of gesprek",
    forWhom: "Directie, teamleiders",
    lead: "Klimaat, gesprek in het team, wat leiding wel en niet moet dragen. Geen HR-matrix uitrollen.",
    points: [
      "Wat het team nodig heeft van jullie.",
      "Eén lijn, geen campagne.",
      "De groep offeren we niet aan één leerling.",
    ],
  },
];
