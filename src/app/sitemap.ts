import type { MetadataRoute } from "next";
import GAMES, { getAllCategories } from "@/lib/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = "https://games.yourpdfpal.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.1 },
  ];

  const categoryRoutes = getAllCategories().map((cat) => ({
    url: `${BASE}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const gameRoutes = GAMES.map((game) => ({
    url: `${BASE}/game/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...gameRoutes];
}
