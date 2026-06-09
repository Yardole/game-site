import Link from "next/link";
import Image from "next/image";
import type { Game } from "@/lib/games";

const ASPECT_CLASSES: Record<string, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
};

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group block rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Thumbnail */}
      <div
        className={`relative w-full ${ASPECT_CLASSES[game.aspectRatio] || "aspect-[4/3]"} bg-zinc-900`}
      >
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category badge */}
        <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-black/40 text-white backdrop-blur-sm">
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
