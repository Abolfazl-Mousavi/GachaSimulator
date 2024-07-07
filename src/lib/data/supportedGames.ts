export interface Game {
  id: number;
  name: string;
  slug: string;
  imageSlug: string;
  isAvailable: boolean;
  description: string;
  colorHex: string;
}

const supportedGames: Game[] = [
  {
    id: 1,
    name: "Genshin Impact",
    slug: "/genshin-impact/",
    imageSlug: "/assets/images/logos/Genshin_Impact.webp",
    isAvailable: true,
    description:
      "Genshin Impact is an open-world action RPG. In the game, set forth on a journey across a fantasy world called Teyvat. In this vast world, you can explore seven nations, meet a diverse cast of characters with unique personalities and abilities, and fight powerful enemies together with them, all on the way during your quest to find your lost sibling. You can also wander freely, immersing yourself in a world filled with life, and let your sense of wonder lead you to uncover all of its mysteries... Until you are at long last reunited with your lost sibling and bear witness to the culmination of all things at the end of your journey.",
    colorHex: "#111256",
  },
  {
    id: 2,
    name: "Arknights",
    slug: "/arknights/",
    imageSlug: "/assets/images/logos/Arknights.png",
    isAvailable: false,
    description:
      "Together with your leader Amiya, you'll recruit Operators, train them, then assign them to various operations to protect the innocent and resist those who would thrust the world into turmoil. Your tactics will determine the future of Rhodes Island. Fight for the Dawn!",
    colorHex: "#41F1FE",
  },
  {
    id: 3,
    name: "Honkai Star Rail",
    slug: "honkai-star-rail",
    imageSlug: "/assets/images/logos/Honkai_Star_Rail.png",
    isAvailable: false,
    description: "A warm green jacket perfect for winter.",
    colorHex: "#E2B3C7",
  },
  {
    id: 4,
    name: "Nikke",
    slug: "nikke",
    imageSlug: "/assets/images/logos/Nikke.png",
    isAvailable: false,
    description: "A warm green jacket perfect for winter.",
    colorHex: "#B90809",
  },
  {
    id: 5,
    name: "Wuthering Waves",
    slug: "wuthering-waves",
    imageSlug: "/assets/images/logos/Wuthering_Waves.png",
    isAvailable: false,
    description: "A warm green jacket perfect for winter.",
    colorHex: "#335498",
  },
];

export default supportedGames;
