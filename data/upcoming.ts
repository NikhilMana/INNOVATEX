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
    id: "hack-for-hire",
    date: "2026",
    month: "OCT",
    day: "16-17",
    title: "HACK for HIRE",
    subtitle: "Innovate. Build. Get Hired.",
    description: "A 24-hour national-level hackathon designed to give final-year students a platform to solve real-world industry problems.",
    href: "/events/hack-for-hire",
    badge: "FLAGSHIP",
  },
];
