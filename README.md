# Subnautica Astro Version

Standalone Astro website for the browser-playable Subnautica game at `subnautica.online`.

## Included

- Astro static build
- Subnautica game wrapper at `public/game/index.html`
- Home, play, guide, FAQ, support, legal, robots, and sitemap routes
- Google Tag Manager helper using `GTM-MVN4QXX7`
- Subnautica-specific SEO metadata and JSON-LD

## Setup

```bash
npm install
npm run dev
```

Set production values in `.env`:

```bash
SITE_URL=https://subnautica.online
PUBLIC_GTM_ID=GTM-MVN4QXX7
```

## Build

```bash
npm run build
npm run preview
```

The play page embeds `/game/index.html`, which contains the external game iframe wrapper copied from the Subnautica reference project.
