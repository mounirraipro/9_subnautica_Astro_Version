export type GameStat = {
  value: string;
  label: string;
};

export type GuideCard = {
  title: string;
  description: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export const gameMeta = {
  name: "Subnautica",
  slug: "subnautica",
  domain: "subnautica.online",
  iframeUrl: "/game/index.html",
  embedSource: "GameMonetize - Aquanaut Adventure",
  externalEmbedUrl: "https://html5.gamemonetize.co/giff5xqx84d9mrl24y6uycqkdkpwxsjp/",
  title: "Subnautica - Free Underwater Adventure Game Online",
  shortDescription:
    "Dive into an alien ocean, collect resources, craft survival tools, and push deeper into a mysterious underwater world.",
};

export const stats: GameStat[] = [
  { value: "20+", label: "Ocean biomes" },
  { value: "300+", label: "Crafting paths" },
  { value: "0", label: "Downloads" },
  { value: "Free", label: "Browser play" },
];

export const survivalLoop: GuideCard[] = [
  {
    title: "Leave the lifepod",
    description:
      "Start in shallow water, gather quartz, copper, titanium, and food, then return to the fabricator before your oxygen runs out.",
  },
  {
    title: "Craft the essentials",
    description:
      "Prioritize the scanner, survival knife, repair tool, larger oxygen tank, and seaglide so each dive reaches farther than the last.",
  },
  {
    title: "Follow the signals",
    description:
      "Radio messages, wreckage, fragments, and alien structures point you toward blueprints, story clues, and safer routes into deeper zones.",
  },
  {
    title: "Build a base",
    description:
      "A small habitat gives you oxygen, storage, food production, and a practical staging point for long expeditions.",
  },
];

export const features: FeatureCard[] = [
  {
    title: "Open-ended ocean exploration",
    description:
      "There is no rigid level ladder. Progress comes from curiosity, preparation, depth upgrades, and the courage to enter unfamiliar water.",
  },
  {
    title: "Survival with purpose",
    description:
      "Food, water, health, and oxygen create pressure, while the story gives every risky dive a reason beyond resource collection.",
  },
  {
    title: "Crafting-led progression",
    description:
      "New tools, vehicles, habitat modules, and depth upgrades transform unreachable spaces into navigable routes.",
  },
  {
    title: "Browser-first access",
    description:
      "The playable wrapper lives at /game/index.html and loads directly inside the Astro play page iframe.",
  },
];

export const playSteps: GuideCard[] = [
  {
    title: "Secure air and supplies",
    description:
      "Treat every early dive as a short loop: leave the pod, gather essentials, surface or return, craft, then repeat with better equipment.",
  },
  {
    title: "Scan every fragment",
    description:
      "Blueprints unlock when you scan wreckage fragments. The scanner is the key to vehicles, habitat tools, and long-range exploration.",
  },
  {
    title: "Descend in stages",
    description:
      "Move from shallow reefs to kelp forests, plateaus, caves, and deep biomes only when oxygen, vehicles, and escape routes are ready.",
  },
];

export const tips = [
  "Craft a scanner and larger oxygen tank before chasing distant signals.",
  "Use beacons to mark wrecks, entrances, resource nodes, and safe routes back home.",
  "Build storage early so valuable materials do not disappear into scattered lockers.",
  "Listen for creature sounds; the ocean warns you before many threats become visible.",
];

export const faqItems = [
  [
    "What is Subnautica?",
    "Subnautica is an underwater survival adventure about exploring an alien ocean, gathering resources, crafting equipment, building habitats, and uncovering a science-fiction mystery.",
  ],
  [
    "Is Subnautica free to play here?",
    "Yes. This Astro site embeds the browser-playable version from /game/index.html so visitors can start without an account or installer.",
  ],
  [
    "Does the game work on mobile?",
    "The site is responsive and the iframe can load on modern mobile browsers, though the best control experience is usually on desktop or a larger tablet.",
  ],
  [
    "How do I make progress?",
    "Progress comes from scanning fragments, crafting better equipment, building bases, upgrading vehicles, and following radio or PDA clues into deeper biomes.",
  ],
  [
    "Is Subnautica safe for children?",
    "The game has no graphic violence, but deep-water tension and large creature encounters can be intense. Parent review is recommended for younger players.",
  ],
] satisfies [string, string][];
