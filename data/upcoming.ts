export interface UpcomingEvent {
  id: string;
  date: string;
  month: string;
  day: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  badge?: "FLAGSHIP" | "UPCOMING" | "LAUNCHING";
  featured?: boolean;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "vision-x",
    date: "2025",
    month: "DEC",
    day: "TBD",
    title: "Vision X",
    subtitle: "Department Fest 2025",
    description:
      "The flagship Department Fest — bringing together hackathons, talks, workshops, and a tech expo under one roof. Where tomorrow begins.",
    href: "/events/vision-x",
    badge: "FLAGSHIP",
    featured: true,
  },
  {
    id: "arghya-2",
    date: "2025",
    month: "TBD",
    day: "—",
    title: "Arghya 2.0",
    subtitle: "Speaker Series · Edition Two",
    description:
      "Next chapter of the speaker series — a curated lineup of industry leaders and researchers from across the AI ecosystem.",
    href: "/events/arghya",
    badge: "UPCOMING",
  },
  {
    id: "cosmic-4",
    date: "2025",
    month: "Q4",
    day: "—",
    title: "COSMIC 4.0",
    subtitle: "Magazine · Edition Four",
    description:
      "The fourth edition of our editorial publication. New themes, new voices, new stories from the InnovateX universe.",
    href: "/magazine/cosmic-4",
    badge: "LAUNCHING",
  },
];
