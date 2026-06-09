import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "FreeOnlineGames brings you the best free HTML5 browser games — no downloads, no installs, just play.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About FreeOnlineGames
          </h1>

          <div className="prose prose-zinc max-w-none text-muted space-y-4">
            <p>
              FreeOnlineGames is a curated collection of free HTML5 games you
              can play right in your browser. No downloads, no installs, no
              sign-ups — just click and play.
            </p>

            <p>
              All games on this site are open-source projects created by
              talented developers around the world. We host them here to make
              them easy to find and play, with attribution to the original
              creators.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              Why This Site Exists
            </h2>

            <p>
              We believe great games should be accessible to everyone. By
              collecting open-source HTML5 games in one place, we make it easy
              to discover new favorites without hunting through GitHub repos or
              app stores.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              How It Works
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pick a game</strong> — Browse by category or search for
                something specific
              </li>
              <li>
                <strong>Click to play</strong> — Games load instantly in your
                browser
              </li>
              <li>
                <strong>No installs</strong> — Everything runs as pure HTML5,
                JavaScript, and CSS
              </li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              For Game Developers
            </h2>

            <p>
              If you have an open-source HTML5 game and would like it featured
              here, or if you are the creator of a game on this site and would
              like it removed, please reach out via our contact page. We
              respect creators&apos; rights and will respond promptly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
