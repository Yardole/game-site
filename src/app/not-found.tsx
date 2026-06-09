import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <p className="font-display text-6xl font-bold text-accent mb-4">
          404
        </p>
        <h1 className="font-display text-2xl font-semibold text-foreground mb-2">
          Page Not Found
        </h1>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Maybe try a game instead?
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors"
        >
          ← Back to Games
        </Link>
      </div>
    </main>
  );
}
