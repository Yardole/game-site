import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "FreeOnlineGames terms of service — usage rules, disclaimers, and intellectual property.",
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>

          <p className="text-sm text-muted mb-8">
            Last updated: June 2026
          </p>

          <div className="prose prose-zinc max-w-none text-muted space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using FreeOnlineGames, you agree to be bound by
              these Terms of Service. If you do not agree with any part of
              these terms, please do not use the site.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              2. Use of the Website
            </h2>
            <p>
              FreeOnlineGames provides free browser-based games for personal
              entertainment. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the site for lawful purposes only</li>
              <li>
                Not attempt to disrupt, hack, or overload the website
              </li>
              <li>
                Not use automated tools to scrape or mirror game content
              </li>
              <li>
                Respect the intellectual property rights of game creators
              </li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              3. Intellectual Property
            </h2>
            <p>
              The games hosted on this site are open-source projects created by
              their respective authors. Each game is subject to its own license
              terms. FreeOnlineGames does not claim ownership of the games —
              we provide a platform for discovery and play. If you believe your
              copyrighted work appears on this site without authorization,
              please contact us for prompt removal.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              4. Disclaimer of Warranties
            </h2>
            <p>
              FreeOnlineGames is provided &ldquo;as is&rdquo; without
              warranties of any kind, either express or implied. We do not
              guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The site will be available at all times</li>
              <li>Games will be free of bugs or errors</li>
              <li>Game content is suitable for all audiences</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              FreeOnlineGames and its operators shall not be liable for any
              damages arising from the use or inability to use the website,
              including but not limited to direct, indirect, incidental, or
              consequential damages.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              6. Advertisements
            </h2>
            <p>
              The site displays advertisements through Google AdSense and
              potentially other advertising networks. We are not responsible
              for the content of advertisements displayed. Clicking on ads is
              at your own discretion.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated date. Continued use
              of the site after changes constitutes acceptance of the new
              terms.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              8. Contact
            </h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a
                href="mailto:contact@yourpdfpal.com"
                className="text-accent hover:text-accent-hover underline"
              >
                contact@yourpdfpal.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
