import Link from "next/link";
import type { Game } from "@/lib/games";

const CATEGORY_COLORS: Record<string, string> = {
  action: "bg-cat-action",
  puzzle: "bg-cat-puzzle",
  arcade: "bg-cat-arcade",
  board: "bg-cat-board",
  memory: "bg-cat-memory",
  typing: "bg-cat-typing",
  casual: "bg-cat-casual",
};

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group block rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Thumbnail */}
      <div
        className={`relative w-full ${game.aspectRatio === "9/16" ? "aspect-[9/16]" : game.aspectRatio === "1/1" ? "aspect-square" : game.aspectRatio === "16/9" ? "aspect-video" : "aspect-[4/3]"} ${CATEGORY_COLORS[game.category] || "bg-accent-soft"} flex items-center justify-center`}
      >
        <span className="text-3xl sm:text-4xl font-display font-bold text-white/80 select-none">
          {game.title.charAt(0)}
        </span>
        {/* Category badge */}
        <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-white/20 text-white backdrop-blur-sm">
          {game.categoryLabel}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {game.title}
        </h3>
        <p className="mt-1 text-sm text-muted line-clamp-2">
          {game.description}
        </p>
      </div>
    </Link>
  );
}
