import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import GAMES, { getGameBySlug, getRelatedGames } from "@/lib/games";
import { GameCard } from "@/components/GameCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game Not Found" };

  return {
    title: game.title,
    description: game.description,
    openGraph: {
      title: `${game.title} — Play Free Online`,
      description: game.description,
      type: "website",
    },
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const related = getRelatedGames(game, 4);

  return (
    <main className="flex-1">
      {/* Top ad */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="text-center">
          <div
            className="inline-block w-full max-w-[728px] h-[90px] bg-accent-soft/50 rounded-xl border border-border flex items-center justify-center text-xs text-muted"
            aria-label="Advertisement"
          >
            Ad Unit — 728×90
          </div>
        </div>
      </div>

      {/* Game embed */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/category/${game.category}`}
              className="hover:text-foreground transition-colors"
            >
              {game.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{game.title}</span>
          </div>

          {/* Game title */}
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
            {game.title}
          </h1>

          {/* Iframe */}
          <div
            className={`relative w-full bg-black rounded-2xl overflow-hidden border border-border ${
              game.aspectRatio === "9/16"
                ? "aspect-[9/16] max-w-[400px] mx-auto"
                : game.aspectRatio === "1/1"
                  ? "aspect-square max-w-[600px] mx-auto"
                  : game.aspectRatio === "16/9"
                    ? "aspect-video"
                    : "aspect-[4/3]"
            }`}
          >
            <iframe
              src={game.embedPath}
              title={game.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; gyroscope"
              sandbox="allow-scripts allow-same-origin allow-modals"
            />
          </div>
        </div>
      </section>

      {/* Game info */}
      <section className="py-8 px-4 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              About this game
            </h2>
            <p className="text-muted leading-relaxed">{game.description}</p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">
              How to Play
            </h3>
            <p className="text-muted">{game.controls}</p>
          </div>

          {/* Meta sidebar */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Category
              </span>
              <Link
                href={`/category/${game.category}`}
                className="block mt-1 font-medium text-accent hover:text-accent-hover transition-colors"
              >
                {game.categoryLabel}
              </Link>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Controls
              </span>
              <p className="mt-1 text-sm text-muted">{game.controls}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom ad */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center">
          <div
            className="inline-block w-full max-w-[728px] h-[90px] bg-accent-soft/50 rounded-xl border border-border flex items-center justify-center text-xs text-muted"
            aria-label="Advertisement"
          >
            Ad Unit — 728×90
          </div>
        </div>
      </div>

      {/* Related games */}
      <section className="py-12 px-4 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6">
            More Games You&apos;ll Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {related.map((g) => (
              <GameCard key={g.slug} game={g} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
