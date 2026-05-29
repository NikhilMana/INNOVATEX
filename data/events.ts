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
    slug: "aarohan",
    title: "Aarohan",
    tagline: "Building the foundations",
    description:
      "Skill-building workshops focusing on foundational knowledge, hands-on programming, and core technologies.",
    logo: "/images/logos/Aarohanlogo.jpg",
    gradient: "from-rose-500 to-pink-700",
    href: "/events/aarohan",
    status: "active",
    highlights: ["Workshops", "Hands-on coding", "Skill-building"],
  },
];

export const stats = [
  { value: 137, suffix: "+", label: "Active Members" },
  { value: 30, suffix: "+", label: "Events Hosted" },
  { value: 2, suffix: "", label: "Flagship Programs" },
  { value: 4, suffix: "", label: "COSMIC Editions" },
];
