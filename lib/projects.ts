import { projectType } from "./types";

export const projects: projectType[] = [
  {
    title: "Online-Opptak",
    shortDescription:
      "Opptaksside for medlemmer av Online linjeforening som ønsker å søke verv.",
    description: `
Online Opptak er et prosjekt som ble lansert ved semesterstart 2024, med mål om å forenkle og effektivisere opptaksprosessen i linjeforeningen Online. Systemet samler alle opptak under én plattform, noe som gir en smidigere opplevelse både for søkere og komiteene. 


Tidligere var det tidkrevende for komiteansvarlige å koordinere intervjutider, men med det nye systemet matches ledige tider automatisk mellom søkerne og de komiteene de har søkt på. Søkerne kan på forhånd legge inn når de er opptatt, slik at de kun får tildelt intervjutider som passer, uten behov for manuell bytting.

Systemet er bygget med Next.js for server-side rendering og effektiv ytelse, mens TailwindCSS er brukt for å sørge for en konsistent og responsiv styling. MongoDB brukes som database for å håndtere alle søknads- og intervjudata, og innlogging er sikret gjennom Auth0, som implementerer innlogging via OW for trygg og enkel brukerautentisering.


    `,
    imageUri: "/prosjekt/online-opptak.png",
    href: "/prosjekt/online-opptak",
    link: "https://opptak.online.ntnu.no",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "AWS",
      "MongoDB",
      "Twilio",
    ],
    github: "https://github.com/appKom/online-opptak",
    people: [
      {
        role: "Prosjektleder",
        name: "/medlem/Julian-Ammouche-Ottosen",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Fredrik-Hansteen",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Sindre-Emil-Halleraker",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Jorgen-Galdal",
      },
    ],
  },

  {
    title: "Online-Appen",
    shortDescription:
      "En app for Online linjeforening. Der brukere kan se nyheter, arrangementer og annet innhold.",
    description: "Online Appen",
    imageUri: "/prosjekt/online-appen.jpg",
    href: "/prosjekt/online-appen",
    techStack: ["Flutter", "Firebase", "Dart", "Google Cloud Platform"],
    github: "https://github.com/appKom/online_events",
    people: [
      {
        role: "Prosjektleder",
        name: "/medlem/Erlend-Lovoll-Strom",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Fredrik-Hansteen",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Johannes-Hage",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Mads-Hermansen",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Amund-Dahlmo-Berge",
      },
    ],
  },
  {
    title: "Autobank",
    shortDescription: "Autobank",
    description: `Autobank er et prosjekt som skal gjøre det enklere for studenter i Online å søke om økonomisk støtte og sende inn kvitteringer. Prosjektet skal også gjøre det enklere for økonomiansvarlige i Online å behandle søknader og kvitteringer.
      
      Prosjektets frontend bruker React med Typescript og Tailwind CSS. Backend er skrevet i Kotlin med Spring Boot. For lagring av data bruker vi en sql database og en storagecontainer i Azure. For autentisering av brukere bruker vi auth0, som implementerer innlogging via OW for trygg og enkel brukerautentisering.
    `,
    imageUri: "/prosjekt/autobank.png", 
    techStack: ["React", "Tailwind CSS", "Spring Boot", "Azure"],
    href: "/prosjekt/autobank",
    github: "https://github.com/appKom/autobank-frontend",
    people: [
      {
        role: "Prosjektleder",
        name: "/medlem/Emily-Malcomsen",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Mats-Nyfloet",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Aksel-Fosaas",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Dina-Marie-Stensrud",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Adel-Strysse",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Victoria-Naesheim",
      },
    ],
  },
  {
    title: "Online-Fondet",
    shortDescription: "Fondside",
    description: "Fondside",
    imageUri: "/prosjekt/online-fondet.png",
    href: "/prosjekt/online-fondet",
    link: "https://onlinefondet.no",
    github: "https://github.com/appKom/onlinefondet",
    people: [
      {
        role: "Prosjektleder",
        name: "/medlem/Aksel-Fosaas",
      },
    ],
  },
  {
    title: "Infoskjerm",
    shortDescription: "Infoskjerm for Online på A4",
    description: `
Infoskjermen på A4 har vært i produksjon siden semesterstart 2022 og ble oppgradert med et nytt design våren 2024. Skjermen kjører kontinuerlig 24/7 på TV-skjermen i A4, og er en sentral informasjonskilde for alle i linjeforeningen Online.

Den viser variert informasjon som er relevant for onlinere, inkludert detaljer om kommende arrangementer med påmeldingsinformasjon. I tillegg vises de nyeste meldingene fra utvalgte Slack-kanaler på Online-Slacken, slik at medlemmene enkelt kan holde seg oppdatert på viktige beskjeder.

Frontend er bygget med React med TailwindCSS, mens backend er utviklet med Express.


    `,
    imageUri: "/prosjekt/infoskjerm.png",
    href: "/prosjekt/infoskjerm",
    github: "https://github.com/appKom/infoskjerm",
    techStack: ["React", "Tailwind CSS", "Express"],
    people: [
      {
        role: "Prosjektleder",
        name: "/medlem/Julian-Ammouche-Ottosen",
      },
      {
        role: "Prosjektmedlem",
        name: "/medlem/Sylvia-Yung",
      },
    ],
  },
];
