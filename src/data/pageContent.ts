import { siteConfig } from "@/data/siteConfig";

export type ContentSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ContentPage = {
  title: string;
  description: string;
  seoTitle?: string;
  keywords?: string[];
  schemaType?: "AboutPage" | "Article" | "Blog" | "ContactPage" | "FAQPage" | "HowTo" | "PrivacyPolicy" | "TermsOfService" | "WebPage";
  eyebrow?: string;
  updated?: string;
  intro: string;
  sections: ContentSection[];
};

const gameName = siteConfig.name;
const contact = siteConfig.contactEmail;
const updated = siteConfig.legalLastUpdated;

export const pageContent = {
  about: {
    title: "About Subnautica",
    seoTitle: `About ${gameName} - Free Underwater Survival Game`,
    description: `Learn about ${gameName}, the browser-playable underwater survival adventure focused on exploration, crafting, and ocean discovery.`,
    keywords: ["about Subnautica", "underwater survival game", "Subnautica browser"],
    schemaType: "AboutPage",
    intro: "A focused browser destination for players who want to dive into an alien ocean quickly.",
    sections: [
      {
        heading: "What This Site Offers",
        body: "Subnautica.online is built around instant access to a browser-playable underwater adventure. The site keeps the game, guides, support pages, and policy information in one fast Astro project.",
      },
      {
        heading: "Why Subnautica Works",
        body: "The appeal is the tension between wonder and survival. Every dive can reveal a new resource, blueprint, creature, cave, or story clue, but oxygen and distance make preparation matter.",
      },
      {
        heading: "Player Promise",
        items: [
          "No account required to open the game.",
          "A dedicated play page with fullscreen and share controls.",
          "Guides that explain survival, crafting, base building, and deep exploration.",
          "Clear legal, privacy, accessibility, and contact pages.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    seoTitle: `Accessibility Statement | ${gameName}`,
    description: `${gameName} is committed to making the website clear, responsive, and usable for as many players as possible.`,
    keywords: ["Subnautica accessibility", "accessible browser game", "web accessibility"],
    updated,
    intro: "Our accessibility work covers the Astro website and the surrounding play experience.",
    sections: [
      {
        heading: "Our Commitment",
        body: "We aim to provide readable pages, keyboard-friendly navigation, strong contrast, responsive layouts, and clear page structure.",
      },
      {
        heading: "Current Measures",
        items: [
          "Semantic headings and landmarks on content pages.",
          "Visible focus states through browser defaults and accessible links.",
          "Responsive layouts for desktop, tablet, and mobile visitors.",
          "Descriptive page titles, meta descriptions, and labels.",
        ],
      },
      {
        heading: "Known Limitations",
        body: "The embedded game is provided through an iframe and may have control or accessibility constraints outside the Astro site's direct code. We still keep the surrounding page as accessible as practical.",
      },
      {
        heading: "Feedback",
        body: `If you find an accessibility barrier, contact us at ${contact}. Include the page URL, device, browser, and a short description of the issue.`,
      },
    ],
  },
  blog: {
    title: "Subnautica Guides",
    seoTitle: `Subnautica Guides - Survival, Crafting and Exploration`,
    description: `Read practical ${gameName} guides for first dives, crafting priorities, base building, biome progression, and safer exploration.`,
    keywords: ["Subnautica guides", "Subnautica strategy", "Subnautica tips"],
    schemaType: "Blog",
    eyebrow: "Guides",
    intro: "Practical notes for surviving longer dives and understanding the ocean one system at a time.",
    sections: [
      {
        heading: "Guide Focus",
        items: [
          "Beginner survival and first-craft priorities.",
          "Base building, storage, power, and food planning.",
          "Biome progression and deep-water preparation.",
          "Creature awareness and safer route planning.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    seoTitle: `Contact ${gameName} Support`,
    description: `Contact the ${gameName} team for support, feedback, accessibility concerns, privacy questions, or game loading issues.`,
    keywords: ["contact Subnautica", "Subnautica support", "Subnautica feedback"],
    schemaType: "ContactPage",
    intro: "Use this page for support, feedback, and policy questions.",
    sections: [
      {
        heading: "Contact Details",
        items: [`Email: ${contact}`, "Response time: usually within 48 hours.", "Availability: players worldwide."],
      },
      {
        heading: "Game Loading Reports",
        body: "If the iframe does not load, include your browser, device, operating system, the page URL, and whether fullscreen mode works.",
      },
      {
        heading: "Content and Safety Feedback",
        body: "Parents, teachers, and players can contact us about guide clarity, age suitability, accessibility issues, or confusing page content.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    seoTitle: `${gameName} Cookie Policy`,
    description: `Learn how ${gameName} uses cookies, local storage, embedded content, ads, and browser preferences.`,
    keywords: ["Subnautica cookies", "cookie policy", "browser game cookies"],
    updated,
    intro: "This Cookie Policy explains how cookies and similar technologies may be used on this website.",
    sections: [
      {
        heading: "What Cookies Are",
        body: "Cookies are small files stored by your browser. They can keep websites functional, remember preferences, support security, and help third-party services operate.",
      },
      {
        heading: "Embedded Game Content",
        body: "The game is loaded through an iframe. The embedded provider may use its own cookies, local storage, or similar technologies according to its own policies.",
      },
      {
        heading: "Analytics and Tags",
        body: "The site includes Google Tag Manager. Depending on your region and browser settings, Google or related services may use cookies or equivalent storage.",
      },
      {
        heading: "Managing Cookies",
        body: "Most browsers let you block, delete, or limit cookies in settings. Blocking some storage may affect embedded game loading or saved local preferences.",
      },
      {
        heading: "Questions",
        body: `Cookie questions can be sent to ${contact}.`,
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    seoTitle: `${gameName} Disclaimer`,
    description: `Read the ${gameName} disclaimer for website information, embedded game access, external links, and general use.`,
    keywords: ["Subnautica disclaimer", "browser game disclaimer", "external iframe disclaimer"],
    updated,
    intro: `${gameName} is provided for general entertainment and informational purposes.`,
    sections: [
      {
        heading: "Embedded Game Disclaimer",
        body: "The playable game iframe may rely on an external provider. We cannot guarantee uninterrupted availability, compatibility with every browser, or third-party service behavior.",
      },
      {
        heading: "Guide Accuracy",
        body: "Guides are written to help players understand survival, crafting, and exploration. They are informational and may not cover every version, update, or platform difference.",
      },
      {
        heading: "External Links",
        body: "Some pages may link to third-party resources. External sites are responsible for their own content, privacy practices, and availability.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    seoTitle: `${gameName} FAQ - Gameplay, Devices and Safety`,
    description: `Find answers about ${gameName}, browser play, devices, progress, controls, safety, and support.`,
    keywords: ["Subnautica FAQ", "Subnautica browser questions", "Subnautica help"],
    schemaType: "FAQPage",
    intro: "Quick answers before you dive in.",
    sections: [
      {
        heading: "Is Subnautica free here?",
        body: "Yes. Open the Play page and the browser game loads through /game/index.html with no account requirement.",
      },
      {
        heading: "What devices are supported?",
        body: "Modern desktop browsers are recommended. Mobile browsers can load the site, but the game controls may be easier on larger screens.",
      },
      {
        heading: "How do I progress?",
        body: "Scan fragments, craft better equipment, build a base, follow radio signals, and upgrade vehicles before entering deeper biomes.",
      },
      {
        heading: "Is progress saved?",
        body: "Save behavior depends on the embedded browser game and local browser storage. Avoid clearing site data if you want to preserve local progress.",
      },
      {
        heading: "Is it safe for younger players?",
        body: "Subnautica has tense ocean exploration, darkness, and large creature encounters. Parent review is recommended for younger children.",
      },
    ],
  },
  "how-to-play": {
    title: "How To Play",
    seoTitle: `How to Play ${gameName} - Beginner Survival Guide`,
    description: `Learn how to play ${gameName}: manage oxygen, gather resources, craft tools, scan fragments, build bases, and explore deeper biomes.`,
    keywords: ["how to play Subnautica", "Subnautica beginner guide", "Subnautica survival tips"],
    schemaType: "HowTo",
    intro: "Subnautica rewards careful loops: dive, gather, return, craft, and go farther next time.",
    sections: [
      {
        heading: "Start Near the Lifepod",
        body: "The shallow area around the pod is the safest place to learn oxygen timing, collect titanium and quartz, catch food, and understand basic resource loops.",
      },
      {
        heading: "Craft Priority Tools",
        items: [
          "Scanner for fragments and data entries.",
          "Survival knife for samples and defense utility.",
          "Repair tool for lifepod systems.",
          "High-capacity oxygen tank for longer dives.",
          "Seaglide for faster travel and safer returns.",
        ],
      },
      {
        heading: "Read Signals and PDA Entries",
        body: "Radio signals and PDA logs are not just story flavor. They point toward wreckage, lifepods, blueprints, and clues about where to explore next.",
      },
      {
        heading: "Build a First Base",
        body: "A simple base with storage, fabricator access, power, and food or water production removes friction from every future expedition.",
      },
      {
        heading: "Prepare Before Diving Deep",
        body: "Do not rush depth. Bring beacons, repair supplies, food, water, a clear retreat path, and a vehicle or oxygen plan before entering dangerous zones.",
      },
    ],
  },
  parents: {
    title: "Parents & Safety Guide",
    seoTitle: `Parents & Safety Guide | ${gameName}`,
    description: `A parent-focused overview of ${gameName}, including age suitability, online access, content intensity, and healthy play suggestions.`,
    keywords: ["Subnautica parents", "Subnautica safe for kids", "underwater game safety"],
    intro: "A practical overview for parents and guardians.",
    sections: [
      {
        heading: "Content Overview",
        body: "Subnautica focuses on underwater exploration, survival, crafting, and science-fiction mystery. It does not rely on graphic violence, but deep ocean tension can feel intense.",
      },
      {
        heading: "Age Considerations",
        body: "Large creatures, darkness, low oxygen, and isolation may be frightening for younger players. A parent preview is recommended before unsupervised play.",
      },
      {
        heading: "Online Safety",
        items: [
          "No account is required on this site.",
          "The game runs inside an iframe from a third-party game host.",
          "There is no site chat or player messaging system.",
          "Parents can use browser controls or device settings for additional limits.",
        ],
      },
      {
        heading: "Healthy Play Tips",
        body: "Encourage breaks between long dives, discuss tense scenes, and help younger players understand that oxygen management and creature avoidance are part of the challenge.",
      },
    ],
  },
  strategy: {
    title: "Strategy Guide",
    seoTitle: `${gameName} Strategy Guide - Survive Longer Dives`,
    description: "Learn practical Subnautica strategy for oxygen planning, scanning, base placement, storage, vehicles, and deep exploration.",
    keywords: ["Subnautica strategy", "Subnautica tips", "Subnautica survival strategy"],
    schemaType: "Article",
    intro: "Good strategy in Subnautica is mostly preparation: know why you are diving, what you need, and how you will get back.",
    sections: [
      {
        heading: "Think in Dive Loops",
        body: "A strong dive has a clear goal, enough oxygen or vehicle support, storage space, and a planned return. Random wandering becomes dangerous as distance and depth increase.",
      },
      {
        heading: "Scan Before You Stockpile",
        body: "Raw materials matter, but blueprints change what is possible. Scan fragments and data boxes whenever you reach a wreck or new biome.",
      },
      {
        heading: "Use Beacons Aggressively",
        body: "Beacons turn a disorienting ocean into a readable map. Mark wrecks, cave entrances, resource nodes, thermal vents, and temporary hazards.",
      },
      {
        heading: "Build for Function First",
        body: "Your first base should solve oxygen, storage, crafting, food, water, and power before it becomes decorative.",
      },
    ],
  },
  "game-mechanics": {
    title: "Survival Systems",
    seoTitle: `${gameName} Survival Systems - Oxygen, Crafting and Base Building`,
    description: "Understand the core Subnautica systems: oxygen, food, water, scanning, crafting, vehicles, habitats, and biome depth.",
    keywords: ["Subnautica mechanics", "Subnautica crafting", "Subnautica oxygen", "Subnautica base building"],
    schemaType: "Article",
    intro: "Subnautica's systems are simple alone, but they combine into meaningful survival decisions.",
    sections: [
      {
        heading: "Oxygen and Depth",
        body: "Oxygen is the first timer. Larger tanks, seaglides, bases, and vehicles extend your range, but deeper areas punish poor route planning.",
      },
      {
        heading: "Food and Water",
        body: "Basic survival needs keep you returning to safe areas until you build reliable production through cooked fish, cured food, plants, or filtration.",
      },
      {
        heading: "Scanning and Blueprints",
        body: "The scanner turns discoveries into progression. Wreck fragments, alien objects, plants, and creatures all add knowledge or unlock equipment.",
      },
      {
        heading: "Habitats and Vehicles",
        body: "Bases create safe staging points. Vehicles extend depth, speed, storage, and protection, making late-game exploration practical instead of reckless.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    seoTitle: `${gameName} Privacy Policy`,
    description: `Read the ${gameName} Privacy Policy to understand data collection, embedded game behavior, cookies, contact messages, and user rights.`,
    keywords: ["Subnautica privacy policy", "browser game privacy", "iframe privacy"],
    schemaType: "PrivacyPolicy",
    updated,
    intro: "We aim to collect only what is needed to operate and improve the website.",
    sections: [
      {
        heading: "Information You Provide",
        body: "If you contact us, you may provide your email address, message content, and any technical details you choose to include.",
      },
      {
        heading: "Automatically Collected Information",
        body: "Hosting, browser, security, analytics, or tag services may process basic technical information such as device type, browser, pages visited, and approximate region.",
      },
      {
        heading: "Embedded Game Provider",
        body: "The playable iframe may be served by a third party. That provider may process technical data needed to deliver the game.",
      },
      {
        heading: "How We Use Data",
        items: [
          "Respond to support and privacy requests.",
          "Maintain and improve the website.",
          "Diagnose loading, compatibility, and security issues.",
          "Comply with legal obligations.",
        ],
      },
      {
        heading: "Privacy Questions",
        body: `Send privacy questions to ${contact}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    seoTitle: `Terms of Service | ${gameName}`,
    description: `Read the ${gameName} Terms of Service for website use, embedded game access, acceptable conduct, and limitations.`,
    keywords: ["Subnautica terms", "Subnautica terms of service", "browser game terms"],
    schemaType: "TermsOfService",
    updated,
    intro: `By using ${gameName}, you agree to these terms.`,
    sections: [
      {
        heading: "Use of the Website",
        body: "You may use this website for personal entertainment and informational purposes. Do not misuse, disrupt, scrape, attack, or attempt unauthorized access to the service.",
      },
      {
        heading: "Embedded Game Access",
        body: "The game iframe may depend on third-party hosting. Availability, performance, and compatibility can vary by browser, network, and provider status.",
      },
      {
        heading: "Intellectual Property",
        body: "Website text, layout, and supporting content are protected by applicable rights. Third-party game content remains the property of its respective owners or licensors.",
      },
      {
        heading: "No Warranty",
        body: "The website and embedded game access are provided as is and as available without guarantees of uninterrupted or error-free operation.",
      },
      {
        heading: "Contact",
        body: `Questions about these terms can be sent to ${contact}.`,
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
