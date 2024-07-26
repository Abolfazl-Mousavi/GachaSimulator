export interface IGame {
  id: number;
  name: string;
  slug: string;
  imageSlug: string;
  bannerImageSlug: string;
  officialWebsite: string;
  isAvailable: boolean;
  description: string;
  colorHex: string;
}

const supportedGames: IGame[] = [
  {
    id: 1,
    name: "Genshin Impact",
    slug: "https://wishsimulator.app/",
    imageSlug: "/assets/images/logos/Genshin_Impact.webp",
    bannerImageSlug: "/assets/images/hero/genshin_hero.png",
    officialWebsite: "https://genshin.hoyoverse.com/",
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
    bannerImageSlug: "/assets/images/hero/arknights_hero.png",
    officialWebsite: "https://www.arknights.global/",
    isAvailable: false,
    description:
      "Together with your leader Amiya, you'll recruit Operators, train them, then assign them to various operations to protect the innocent and resist those who would thrust the world into turmoil. Your tactics will determine the future of Rhodes Island. Fight for the Dawn!",
    colorHex: "#41F1FE",
  },
  {
    id: 3,
    name: "Honkai Star Rail",
    slug: "https://hsr.wishsimulator.app/",
    imageSlug: "/assets/images/logos/Honkai_Star_Rail.png",
    bannerImageSlug: "/assets/images/hero/starrail_hero.png",
    officialWebsite: "https://hsr.hoyoverse.com",
    isAvailable: true,
    description:
      "Hop aboard the Astral Express and experience the galaxy's infinite wonders filled with adventure and thrills. Players will meet new companions across various worlds and maybe even run into some familiar faces.",
    colorHex: "#E2B3C7",
  },
  {
    id: 4,
    name: "Goddess of Victory:Nikke",
    slug: "nikke",
    imageSlug: "/assets/images/logos/Nikke.png",
    bannerImageSlug: "/assets/images/hero/nikke_hero.png",
    officialWebsite: "https://nikke-en.com/",
    isAvailable: false,
    description:
      "an immersive sci-fi RPG shooter game, where you recruit and command various maidens to form a beautiful anime girl squad that specializes in wielding guns and other unique sci-fi weapons.",
    colorHex: "#B90809",
  },
  {
    id: 5,
    name: "Wuthering Waves",
    slug: "wuthering-waves",
    imageSlug: "/assets/images/logos/Wuthering_Waves.png",
    bannerImageSlug: "/assets/images/hero/wuwa_hero.png",
    officialWebsite: "https://wutheringwaves.kurogames.com",
    isAvailable: false,
    description:
      "Wuthering Waves is set in a futuristic post-apocalyptic world after a catastrophe called the Lament wiped out most of humanity and caused unknown beings and monsters, called Tacet Discords, to appear. Humanity adapted to the threat and over time rebuilt civilization.",
    colorHex: "#335498",
  },
];

export default supportedGames;
