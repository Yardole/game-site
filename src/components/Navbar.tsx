import Link from "next/link";

const CATEGORIES = [
  { slug: "action", label: "Action" },
  { slug: "puzzle", label: "Puzzle" },
  { slug: "arcade", label: "Arcade" },
  { slug: "board", label: "Board" },
  { slug: "memory", label: "Memory" },
  { slug: "typing", label: "Typing" },
  { slug: "casual", label: "Casual" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          FreeOnlineGames
        </Link>

        {/* Category links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="px-3 py-1.5 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-accent-soft/50 transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Mobile — simplified for now */}
        <Link
          href="/"
          className="md:hidden text-sm font-medium text-muted hover:text-foreground"
        >
          Browse Games
        </Link>
      </div>
    </nav>
  );
}
