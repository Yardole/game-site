import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "FreeOnlineGames privacy policy — how we handle your data, cookies, and advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>

          <p className="text-sm text-muted mb-8">
            Last updated: June 2026
          </p>

          <div className="prose prose-zinc max-w-none text-muted space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              1. Information We Collect
            </h2>
            <p>
              FreeOnlineGames does not require user accounts or collect
              personal information directly. However, we use third-party
              services that may collect data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google AdSense</strong> — Uses cookies to serve
                personalized ads based on browsing history. Learn more at{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  className="text-accent hover:text-accent-hover underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Advertising Policies
                </a>
                .
              </li>
              <li>
                <strong>Google Analytics</strong> — Collects anonymized usage
                data (pages visited, time on site, browser type) to help us
                improve the site.
              </li>
              <li>
                <strong>Vercel Analytics</strong> — Basic anonymized traffic
                metrics collected by our hosting provider.
              </li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              2. Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device. We use
              cookies for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ad personalization (Google AdSense)</li>
              <li>Analytics (Google Analytics, Vercel)</li>
              <li>Remembering your cookie consent preferences</li>
            </ul>
            <p>
              You can disable cookies in your browser settings or use the
              cookie consent banner on our site to manage preferences.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              3. How We Use Information
            </h2>
            <p>The information collected is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Display relevant advertisements</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Improve the website and game selection</li>
            </ul>
            <p>
              We do not sell, trade, or share personal information with third
              parties beyond what is described above.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              4. Third-Party Links
            </h2>
            <p>
              Games hosted on this site may contain links to external websites.
              We are not responsible for the privacy practices or content of
              these third-party sites.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              5. Children&apos;s Privacy
            </h2>
            <p>
              Our games are family-friendly and do not knowingly collect
              personal information from children under 13. If you believe your
              child has provided personal information through this site, please
              contact us.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              6. Contact
            </h2>
            <p>
              Questions about this privacy policy? Contact us at{" "}
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
