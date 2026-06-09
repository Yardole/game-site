# Game Site — Plan & Architecture

> Free browser games hub. Fork + embed open-source HTML5 games, monetize with ads.

## Overview

- **What:** A free online gaming site — browse and play HTML5 games in the browser
- **Model:** Fork open-source game repos from GitHub, embed games via iframe, serve ads
- **Domain:** `games.yourpdfpal.com` (free, subdomain of existing domain; move to own domain later if it takes off)
- **Cost:** $0 — all static, all client-side, deployed on Vercel free tier

## Game Sourcing

| Source | Games | License |
|---|---|---|
| [GameHub](https://github.com/SinceraXY/GameHub) | 42 games across 7 categories | Open source |
| [awesome-open-source-games](https://github.com/michelpereira/awesome-open-source-games) | Curated index (hundreds) | Varies (MIT, GPL, etc.) |
| [Game-Zone](https://github.com/omar00629/Game-Zone) | Poki-style platform, ~10 games | Open source |
| [digitaldicegames/edu](https://github.com/digitaldicegames/edu) | 350–500+ games | Open (no attribution required) |

**Strategy:** Start with GameHub's 42 games as the core catalog. Add more from awesome-open-source-games over time.

## Tech Stack

Same as YourPDFPal — proven, free, already familiar:

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| Deployment | Vercel (free tier) |
| Analytics | Vercel Analytics + GA4 |
| Ads | Google AdSense (same publisher ID) |
| Fonts | Geist + Lora (or a more playful heading font) |

## Architecture

### Game Hosting Pattern

Each game lives as a static folder under `/public/games/<slug>/`:

```
public/
  games/
    snake/
      index.html
      script.js
      style.css
    2048/
      index.html
      ...
```

Game pages embed via iframe:

```tsx
<iframe src={`/games/${slug}/index.html`} />
```

### Site Structure

```
/                           Homepage — hero, featured games, categories, search
/category/[slug]            Category page — filtered game grid
/game/[slug]                Game detail page — iframe embed + ads + info
/about                      About the site
/contact                    Contact form
/privacy-policy             Privacy policy (adapt from YourPDFPal)
/terms                      Terms of service (adapt from YourPDFPal)
```

### Page Template — Game Detail

```
┌─────────────────────────────┐
│  Navbar (sticky, same       │
│  pattern as YourPDFPal)     │
├─────────────────────────────┤
│  Ad Unit (horizontal)       │
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   Game iframe         │  │
│  │   (responsive,        │  │
│  │    fills available    │  │
│  │    width)             │  │
│  │                       │  │
│  └───────────────────────┘  │
├─────────────────────────────┤
│  Game info / controls       │
├─────────────────────────────┤
│  Ad Unit (horizontal)       │
├─────────────────────────────┤
│  Related games grid         │
├─────────────────────────────┤
│  Footer                     │
└─────────────────────────────┘
```

### Data Model

```ts
interface Game {
  slug: string;           // "snake"
  title: string;          // "Snake"
  description: string;    // SEO description
  category: string;       // "arcade"
  categoryLabel: string;  // "Arcade"
  controls: string;       // "Arrow keys to move"
  thumbnail: string;      // "/thumbnails/snake.png"
  embedPath: string;      // "/games/snake/index.html"
  aspectRatio: string;    // "16/9" or "4/3"
}
```

### Categories (from GameHub)

- Puzzle
- Action
- Arcade
- Board
- Memory
- Typing
- Casual

## Monetization

- **AdSense** — same publisher ID as YourPDFPal (`ca-pub-3376393844735945`)
- **Ad placements:**
  - Homepage: between hero and game grid, below game grid
  - Category pages: top banner
  - Game pages: above game iframe, below game iframe, sidebar (desktop)
- **Advantage:** Gaming sessions are long (5–30 min), so ad impressions per visitor are much higher than utility sites
- **Tradeoff:** Gaming RPMs are lower than finance/utility keywords, but volume of impressions can make up for it

## Design Direction

- **Vibe:** Playful but clean — more colorful than YourPDFPal but still trustworthy
- **Fonts:** Keep Geist for body/UI. Consider a more playful heading font (or keep Lora for consistency with YourPDFPal brand)
- **Palette:** Brighter accent colors, game-category-specific color coding
- **Cards:** Game thumbnails in card grid, hover lift effect (same pattern as tool cards)

## Implementation Plan

### Phase 1: Foundation (1 session)
1. `npx create-next-app@latest` — scaffold project
2. Set up Tailwind, fonts, globals.css
3. Copy over Navbar, Footer, AdUnit, CookieConsent from YourPDFPal
4. Create layout.tsx with metadata, AdSense script, GA

### Phase 2: Game Catalog (1 session)
5. Clone GameHub, extract game files into `/public/games/`
6. Build the games config/data file (title, description, category, etc.)
7. Generate thumbnails (screenshot each game, or use placeholder)
8. Build game card component + game grid

### Phase 3: Pages (1 session)
9. Homepage — hero, search, category tabs, game grid
10. Game detail page — iframe embed, ads, related games
11. Category pages — filtered grid
12. Static pages — about, contact, privacy, terms

### Phase 4: Polish & Launch (1 session)
13. SEO — meta descriptions, sitemap, JSON-LD
14. Search/filter on homepage
15. Responsive testing
16. Deploy to Vercel, configure subdomain DNS

## Differences from YourPDFPal

| Aspect | YourPDFPal | Game Site |
|---|---|---|
| Content model | 16 tool pages, mostly unique code per tool | Many game pages, same template |
| User interaction | File upload, processing, download | Page view, play game, browse |
| Page weight | Heavy (pdf-lib, pdfjs-dist) | Light (just iframes and static content) |
| Time on page | 1–3 min per tool | 5–30 min per game |
| Build complexity | Each tool is a custom React component | Each game is static HTML in an iframe |
| SEO strategy | Long-tail tool keywords | Game name + category keywords |
