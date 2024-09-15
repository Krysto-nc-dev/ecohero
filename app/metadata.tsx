import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoHero - Plateforme Zéro Déchet",
  description:
    "EcoHero est une plateforme de gestion des déchets participative propulsée par l'intelligence artificielle. Elle permet aux citoyens et aux organisations de signaler, suivre et collecter les déchets de manière efficace, tout en gagnant des récompenses pour leurs actions éco-responsables. Rejoignez le mouvement pour un avenir plus propre et plus vert.",
  keywords: [
    "EcoHero",
    "gestion des déchets",
    "zéro déchet",
    "écologie",
    "recyclage",
    "développement durable",
    "communauté",
    "intelligence artificielle",
    "éco-responsable",
  ],

  authors: [{ name: "Stoyann Velten", url: "https://krysto.nc" }],
  openGraph: {
    title: "EcoHero - Plateforme Zéro Déchet",
    description:
      "Rejoignez EcoHero et participez à la réduction des déchets pour un avenir durable. Signalez, suivez et gérez les déchets tout en obtenant des récompenses pour vos actions environnementales.",
    url: "https://ecohero.nc",
    siteName: "EcoHero",
    // images: [
    //   {
    //     url: "/images/ecohero-banner.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Bannière EcoHero",
    //   },
    // ],
    locale: "fr_FR",
    type: "website",
  },
};
