"use client";

import { useState, useMemo } from "react";
import type { Game } from "@/lib/games";
import { GameCard } from "@/components/GameCard";

const ALL_CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "action", label: "Action" },
  { slug: "puzzle", label: "Puzzle" },
  { slug: "arcade", label: "Arcade" },
  { slug: "board", label: "Board" },
  { slug: "memory", label: "Memory" },
  { slug: "typing", label: "Typing" },
  { slug: "casual", label: "Casual" },
];

export function GameGrid({ games }: { games: Game[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    let result = games;

    if (category !== "all") {
      result = result.filter((g) => g.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.categoryLabel.toLowerCase().includes(q) ||
          g.controls.toLowerCase().includes(q)
      );
    }

    return result;
  }, [games, search, category]);

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-shadow"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`shrink-0 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                category === cat.slug
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground hover:bg-accent-soft/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {search || category !== "all" ? (
        <p className="text-sm text-muted mb-4">
          {filtered.length} game{filtered.length !== 1 ? "s" : ""} found
          {search && (
            <>
              {" "}
              for &ldquo;<span className="text-foreground">{search}</span>&rdquo;
            </>
          )}
          {category !== "all" && (
            <>
              {" "}
              in{" "}
              <span className="text-foreground">
                {ALL_CATEGORIES.find((c) => c.slug === category)?.label}
              </span>
            </>
          )}
        </p>
      ) : null}

      {/* Game grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted text-lg">No games found</p>
          <p className="text-sm text-muted mt-1">
            Try a different search or category
          </p>
        </div>
      )}
    </div>
  );
}
