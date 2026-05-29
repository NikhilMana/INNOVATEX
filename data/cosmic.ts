export interface CosmicEdition {
  slug: string;
  edition: string;
  title: string;
  theme: string;
  releaseDate: string;
  description: string;
  href: string;
  status: "released" | "upcoming";
  gradient: string;
  articleCount?: number;
  pageCount?: number;
}

export const cosmicEditions: CosmicEdition[] = [
  {
    slug: "cosmic-1",
    edition: "01",
    title: "COSMIC 1.0",
    theme: "Genesis",
    releaseDate: "2022",
    description:
      "The inaugural edition — origin stories, foundational ideas, and the first chapter of the InnovateX universe.",
    href: "/magazine/cosmic-1",
    status: "released",
    gradient: "from-indigo-600 to-purple-700",
    articleCount: 12,
    pageCount: 40,
  },
  {
    slug: "cosmic-2",
    edition: "02",
    title: "COSMIC 2.0",
    theme: "Convergence",
    releaseDate: "2023",
    description:
      "Where disciplines meet — exploring the intersections of AI, design, and human experience.",
    href: "/magazine/cosmic-2",
    status: "released",
    gradient: "from-blue-600 to-cyan-700",
    articleCount: 16,
    pageCount: 44,
  },
  {
    slug: "cosmic-3",
    edition: "03",
    title: "COSMIC 3.0",
    theme: "Frontier",
    releaseDate: "2024",
    description:
      "Pushing the edges — featuring student research, industry voices, and the questions shaping tomorrow.",
    href: "/magazine/cosmic-3",
    status: "released",
    gradient: "from-violet-600 to-fuchsia-700",
    articleCount: 18,
    pageCount: 43,
  },
  {
    slug: "cosmic-4",
    edition: "04",
    title: "COSMIC 4.0",
    theme: "Reveal · Coming Soon",
    releaseDate: "2025",
    description:
      "The next edition is in the works. Themes, voices, and stories — coming Q4 2025.",
    href: "/magazine/cosmic-4",
    status: "upcoming",
    gradient: "from-magenta to-purple-600",
  },
];
