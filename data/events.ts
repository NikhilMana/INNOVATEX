export interface EventEntry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  logo?: string;
  gradient: string;
  href: string;
  status: "active" | "upcoming" | "annual";
  highlights: string[];
}

export const events: EventEntry[] = [
  {
    slug: "arivu",
    title: "Arivu",
    tagline: "Where knowledge meets curiosity",
    description:
      "A peer-led knowledge-sharing initiative where students explore emerging topics in AI, ML, and computing through curated sessions.",
    logo: "/images/logos/arivulogo.jpg",
    gradient: "from-emerald-500 to-teal-700",
    href: "/events/arivu",
    status: "annual",
    highlights: ["Peer learning", "Topic deep-dives", "Open discussions"],
  },
  {
    slug: "arghya",
    title: "Arghya",
    tagline: "Voices that shape the future",
    description:
      "A speaker series bringing industry leaders, researchers, and innovators on-campus to share insights from the frontier of AI.",
    logo: "/images/logos/argya.jpeg",
    gradient: "from-blue-500 to-indigo-700",
    href: "/events/arghya",
    status: "annual",
    highlights: ["Industry talks", "Speaker series", "Live Q&A"],
  },
  {
    slug: "aroohan",
    title: "Aroohan",
    tagline: "Skills that take flight",
    description:
      "Hands-on workshops covering practical tooling, frameworks, and end-to-end project builds across the AI/ML stack.",
    gradient: "from-orange-500 to-rose-700",
    href: "/events/aroohan",
    status: "active",
    highlights: ["Hands-on workshops", "Project sprints", "Mentor sessions"],
  },
  {
    slug: "innovatex",
    title: "InnovateX",
    tagline: "Build. Ship. Repeat.",
    description:
      "The flagship hackathon-and-build series. 36-hour sprints, ambitious problem statements, real shipping.",
    logo: "/images/logos/innovateX.jpg",
    gradient: "from-purple-500 to-fuchsia-700",
    href: "/events/innovatex",
    status: "active",
    highlights: ["Hackathons", "Build sprints", "Demo days"],
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 30, suffix: "+", label: "Events Hosted" },
  { value: 4, suffix: "", label: "Flagship Programs" },
  { value: 4, suffix: "", label: "COSMIC Editions" },
];
