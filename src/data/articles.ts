export type Article = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  category: string;
  readTime: string;
  html: string;
};

export const articles = [
  {
    slug: "getting-started",
    title: "Getting Started with Subnautica: Your First Safe Dives",
    description:
      "A practical beginner route for the first minutes of Subnautica: oxygen, food, water, early materials, and the first tools worth crafting.",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    keywords: ["Subnautica beginner guide", "Subnautica first tools", "Subnautica safe shallows"],
    category: "Beginner Guide",
    readTime: "5 min read",
    html: `
<p>Subnautica begins with a simple problem: you are alive, but only barely. The lifepod gives you a fabricator and a few moments of safety, while the ocean outside contains everything else you need. Your first goal is not deep exploration. Your first goal is to build a reliable loop: leave the pod, collect useful materials, return before oxygen runs out, craft one upgrade, and repeat.</p>
<h2>Stay Close at First</h2>
<p>The shallow water around the pod contains titanium, copper ore, quartz, acid mushrooms, table coral, bladderfish, and peepers. Those resources support your first batteries, water, food, and core tools. Do not chase distant wreckage until you understand how long you can stay underwater and how quickly you can return.</p>
<h2>Craft the Scanner Early</h2>
<p>The scanner is progression disguised as a tool. It unlocks blueprints from fragments, adds useful data entries, and turns wreckage into opportunity. A scanner plus a larger oxygen tank makes the early game far less random because each dive can produce new information, not just raw material.</p>
<h2>Make Oxygen Your Timer</h2>
<p>Every new player underestimates the return trip. Start heading back before the warning feels urgent. As you craft better tanks, a seaglide, bases, and vehicles, the ocean expands naturally. Rushing depth without a return plan is the fastest way to lose progress.</p>
<h2>First Crafting Priorities</h2>
<p>A strong early order is scanner, repair tool, survival knife, high-capacity oxygen tank, fins, and seaglide. This set gives you information, mobility, safety, and longer dives. Once those are in place, following radio signals becomes much more productive.</p>`,
  },
  {
    slug: "base-building-guide",
    title: "Subnautica Base Building Guide: Build a Useful First Habitat",
    description:
      "Learn where to place your first Subnautica base, what modules matter most, and how storage, power, oxygen, and food change exploration.",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    keywords: ["Subnautica base building", "Subnautica habitat guide", "Subnautica storage"],
    category: "Base Building",
    readTime: "7 min read",
    html: `
<p>Your first base should solve practical problems before it tries to look impressive. A useful habitat shortens resource trips, gives you safe oxygen, stores materials, supports crafting, and creates a calm place to plan the next dive.</p>
<h2>Choose a Useful Location</h2>
<p>Build near the boundary between safe shallow water and a resource-rich neighboring biome. A location near kelp, table coral, quartz, and copper saves time for the entire early game. Flat ground helps, but easy navigation matters more than perfect terrain.</p>
<h2>Start Small</h2>
<p>A basic compartment, hatch, solar panel, fabricator, and lockers can transform the early game. Add a radio or scanner room later when you have the resources to power and use them properly. Expansion is easier when the first base has a clear purpose.</p>
<h2>Storage Is Progress</h2>
<p>Disorganized lockers waste more time than most predators. Label storage by resource type: metals, electronics, food, samples, tools, and vehicle parts. When you know where resources live, crafting becomes a planning problem instead of a search problem.</p>
<h2>Power Before Luxury</h2>
<p>Solar works well in shallow water, but deeper bases need stronger planning. Thermal plants, bioreactors, and power transmitters become important as you move away from sunlight. Add power capacity before installing hungry modules.</p>`,
  },
  {
    slug: "biome-progression",
    title: "Subnautica Biome Progression: When to Push Deeper",
    description:
      "A depth-focused guide to moving from safe shallows into kelp forests, plateaus, caves, and deeper Subnautica biomes without rushing.",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    keywords: ["Subnautica biome progression", "Subnautica depth guide", "Subnautica deep biomes"],
    category: "Exploration",
    readTime: "6 min read",
    html: `
<p>Subnautica does not place a wall in front of dangerous water. It lets you swim there before you are ready. That freedom is the point, but a planned progression makes the game far less frustrating.</p>
<h2>Learn the Shallows</h2>
<p>The safe shallows teach oxygen timing, food collection, fabricator recipes, and short resource loops. Leave only when you have basic tools and a habit of returning with time to spare.</p>
<h2>Use Kelp and Plateaus for Blueprints</h2>
<p>Kelp forests and grassy plateaus introduce better fragments, more wreckage, and more threatening creatures. These areas are ideal for scanner practice because every fragment can unlock a stronger route into the mid game.</p>
<h2>Do Not Treat Depth as a Dare</h2>
<p>Deeper biomes should be approached with beacons, spare food and water, repair supplies, and a vehicle or base plan. If you cannot explain how you will return, the dive is not ready.</p>
<h2>Let Vehicles Change the Map</h2>
<p>The seaglide, Seamoth, Prawn Suit, and larger vehicles do more than increase speed. They change oxygen, storage, safety, and depth limits. Revisit old boundaries after every major upgrade.</p>`,
  },
  {
    slug: "crafting-priorities",
    title: "Subnautica Crafting Priorities: What to Build First",
    description:
      "A clear crafting priority guide for Subnautica players who want better tools, safer dives, and less wasted material.",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    keywords: ["Subnautica crafting priorities", "Subnautica tools", "Subnautica scanner"],
    category: "Crafting",
    readTime: "6 min read",
    html: `
<p>The fabricator can make many things, but not every recipe improves your next dive equally. Strong crafting choices increase range, information, storage, and safety. Weak crafting choices create clutter before your survival loop is stable.</p>
<h2>Information Comes First</h2>
<p>The scanner should be near the top of your list because blueprints unlock future options. A player with fewer materials but more scanned fragments is often ahead of a player carrying random ore with no plan.</p>
<h2>Mobility Extends Every Dive</h2>
<p>Fins and the seaglide reduce the time cost of movement. Faster travel means more exploration before oxygen runs low and fewer panicked returns to the surface.</p>
<h2>Storage Supports Ambition</h2>
<p>Lockers and a starter base are not glamorous, but they make every later recipe easier. Store materials by category and keep rare resources separate so major upgrades do not stall.</p>
<h2>Craft for the Next Goal</h2>
<p>Before building, ask what the next dive needs. If the goal is wreck scanning, bring batteries and oxygen. If the goal is base expansion, collect titanium and quartz. If the goal is deeper exploration, prepare vehicle upgrades and beacons.</p>`,
  },
  {
    slug: "creature-safety",
    title: "Subnautica Creature Safety: How to Read Danger Underwater",
    description:
      "Learn how sound, visibility, biome boundaries, and escape planning help you survive Subnautica creature encounters.",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    keywords: ["Subnautica creature safety", "Subnautica predators", "Subnautica survival tips"],
    category: "Safety",
    readTime: "5 min read",
    html: `
<p>Subnautica's creatures are part of the atmosphere, not just obstacles. The game often warns you through sound, movement, and biome mood before danger reaches you. Learning those signals makes exploration tense without becoming reckless.</p>
<h2>Listen Before You See</h2>
<p>Many dangerous creatures announce themselves with calls or movement sounds. If an area suddenly feels loud, dark, or unfamiliar, slow down and identify your route back before pushing forward.</p>
<h2>Keep an Exit Path</h2>
<p>Never enter caves, wrecks, or deep trenches without knowing the exit direction. Beacons help, but so does turning around and memorizing what the return path looks like before you need it.</p>
<h2>Vehicles Are Not Invincible</h2>
<p>Vehicles improve safety, but they also make players overconfident. Carry repair supplies, avoid parking in hostile paths, and do not assume armor can replace awareness.</p>
<h2>Retreat Is Progress</h2>
<p>A successful dive does not have to reach the deepest point. Scanning one fragment, marking one entrance, or confirming one resource location is still progress if you return alive.</p>`,
  },
] satisfies Article[];
