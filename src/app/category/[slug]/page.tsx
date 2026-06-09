import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import GAMES, { getGamesByCategory, getAllCategories } from "@/lib/games";
import { GameCard } from "@/components/GameCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = getAllCategories();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.label} Games`,
    description: `Play free ${cat.label.toLowerCase()} games online. ${cat.count} browser games — no downloads, just click and play.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const games = getGamesByCategory(slug);
  const categories = getAllCategories();
  const cat = categories.find((c) => c.slug === slug);

  if (!cat || games.length === 0) {
    notFound();
  }

  return (
    <main className="flex-1">
      {/* Category header */}
      <section className="py-12 sm:py-16 px-4 bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#categories"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-4"
          >
            ← All Categories
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            {cat.label} Games
          </h1>
          <p className="mt-2 text-muted">
            {games.length} free {cat.label.toLowerCase()} games to play in your
            browser — no downloads required.
          </p>
        </div>
      </section>

      {/* Game grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
