import GAMES from "@/lib/games";
import { GameGrid } from "@/components/GameGrid";

export default function Home() {
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

      {/* Games — the main thing */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Free Online Games
              </h1>
              <p className="text-sm text-muted mt-1">
                {GAMES.length} games — no downloads, just click and play
              </p>
            </div>
          </div>

          <GameGrid games={GAMES} />
        </div>
      </section>
    </main>
  );
}
