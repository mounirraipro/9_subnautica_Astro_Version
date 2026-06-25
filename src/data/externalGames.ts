export type ExternalGame = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoOverview: string;
  howToPlay: string;
  strategyGuide: string;
  playerTips: string[];
  category: string;
  thumbnail: string;
  iframeUrl: string;
  accent: string;
  accentClass: string;
};

export const externalGames: ExternalGame[] = [];

export const getExternalGameBySlug = (slug: string) => externalGames.find((game) => game.slug === slug);
