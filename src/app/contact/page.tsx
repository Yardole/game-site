import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FreeOnlineGames — questions, feedback, or game removal requests.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Contact Us
          </h1>

          <div className="prose prose-zinc max-w-none text-muted space-y-4">
            <p>
              Have a question, suggestion, or feedback? Found a bug in one of
              the games? We&apos;d love to hear from you.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              Email Us
            </h2>

            <p>
              Reach us at{" "}
              <a
                href="mailto:contact@yourpdfpal.com"
                className="text-accent hover:text-accent-hover underline"
              >
                contact@yourpdfpal.com
              </a>
              . We typically respond within 24–48 hours.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              Game Removal Requests
            </h2>

            <p>
              If you are the copyright holder of a game featured on this site
              and would like it removed, please email us with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The name of the game</li>
              <li>Proof of ownership or rights</li>
              <li>Your preferred contact information</li>
            </ul>
            <p>We will process your request within 72 hours.</p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              Submit a Game
            </h2>

            <p>
              Have an open-source HTML5 game you&apos;d like featured on the
              site? Send us a link to the GitHub repository and we&apos;ll
              review it for inclusion.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
