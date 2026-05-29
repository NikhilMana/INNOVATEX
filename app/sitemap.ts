import type { MetadataRoute } from "next";

const BASE_URL = "https://innovatex.mitmysore.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/events",
    "/events/vision-x",
    "/events/arivu",
    "/events/arghya",
    "/events/aarohan",
    "/events/innovatex",
    "/magazine",
    "/magazine/cosmic-1",
    "/magazine/cosmic-2",
    "/magazine/cosmic-3",
    "/magazine/cosmic-4",
    "/team",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/events/vision-x" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/events/vision-x" ? 0.95 : 0.8,
  }));
}
