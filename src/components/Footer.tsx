import Link from "next/link";

const STATIC_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-8">
        {/* Brand */}
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} FreeOnlineGames. All games are
          property of their respective owners.
        </p>

        {/* Static links */}
        <div className="flex items-center gap-4">
          {STATIC_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
