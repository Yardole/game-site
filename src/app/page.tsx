import Link from "next/link";
import GAMES, { getAllCategories } from "@/lib/games";
import { GameGrid } from "@/components/GameGrid";

const CATEGORY_ICONS: Record<string, string> = {
  action: "🎮",
  puzzle: "🧩",
  arcade: "🕹️",
  board: "♟️",
  memory: "🧠",
  typing: "⌨️",
  casual: "🎯",
};

export default function Home() {
  const categories = getAllCategories();

  return (
    <main className="flex-1">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Free Online Games — Play Instantly, No Downloads",
            description: `${GAMES.length} free HTML5 games in your browser. No installs, no sign-ups — just pick a game and play.`,
            url: "https://games.yourpdfpal.com",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: GAMES.map((game, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "VideoGame",
                  name: game.title,
                  description: game.description,
                  url: `https://games.yourpdfpal.com/game/${game.slug}`,
                  genre: game.categoryLabel,
                  playMode: "SinglePlayer",
                  gamePlatform: "Web browser",
                },
              })),
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Free Online Games
            <br />
            <span className="text-accent">Play Instantly, No Downloads</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            {GAMES.length} free HTML5 games in your browser. No installs, no sign-ups —
            just pick a game and play.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="#all-games"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors"
            >
              Browse All Games
            </Link>
            <span className="text-sm text-muted">or explore by category below</span>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section id="categories" className="py-16 px-4 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center mb-10">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-3xl">
                  {CATEGORY_ICONS[cat.slug] || "🎯"}
                </span>
                <span className="font-display text-base font-medium text-foreground group-hover:text-accent transition-colors">
                  {cat.label}
                </span>
                <span className="text-xs text-muted">{cat.count} games</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All games grid — interactive with search & filter */}
      <section id="all-games" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center mb-10">
            All Games
          </h2>
          <GameGrid games={GAMES} />
        </div>
      </section>
    </main>
  );
}
