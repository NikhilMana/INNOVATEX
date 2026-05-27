export type TrackFormat =
  | "hackathon"
  | "workshop"
  | "talk"
  | "expo"
  | "cultural"
  | "competition";

export interface Track {
  id: string;
  title: string;
  description: string;
  format: TrackFormat;
  icon: string;
}

export interface Session {
  time: string;
  title: string;
  speaker?: string;
  venue?: string;
  format: TrackFormat;
}

export interface Day {
  date: string;
  label: string;
  sessions: Session[];
}

export interface Speaker {
  name: string;
  designation: string;
  org?: string;
  talk?: string;
  initials: string;
  gradient: string;
}

export interface SponsorTier {
  tier: "title" | "gold" | "silver" | "community";
  label: string;
  sponsors: { name: string }[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface VisionXContent {
  tagline: string;
  date: string;
  dateLong: string;
  venue: string;
  overview: string;
  kpis: { value: string; label: string }[];
  tracks: Track[];
  schedule: Day[];
  speakers: Speaker[];
  sponsorTiers: SponsorTier[];
  faqs: FAQ[];
  registerUrl: string;
  brochureUrl: string;
}

export const visionX: VisionXContent = {
  /* TODO: replace tagline with the actual brochure tagline */
  tagline: "Where Tomorrow Begins — Department Fest 2025",

  /* TODO: replace with actual fest start date in ISO format (used for countdown) */
  date: "2025-12-15T09:00:00+05:30",
  dateLong: "December 15–17, 2025",
  venue: "MIT Mysore — CSE AI & ML Campus",

  /* TODO: paste overview paragraph from brochure */
  overview:
    "Vision X is the flagship department fest of CSE AI & ML at MIT Mysore — a three-day celebration of ideas, builds, and the people pushing the field forward. Hackathons, workshops, expert talks, a tech expo, and cultural showcases come together under one roof. Designed for builders, researchers, and curious minds across disciplines.",

  /* TODO: confirm KPIs from brochure */
  kpis: [
    { value: "1,500+", label: "Expected Footfall" },
    { value: "8", label: "Tracks" },
    { value: "3", label: "Days" },
    { value: "₹2L+", label: "Prize Pool" },
  ],

  /* TODO: replace tracks list with full brochure event roster */
  tracks: [
    {
      id: "hack-x",
      title: "Hack-X 36",
      description:
        "36-hour flagship hackathon. Open theme, real problems, working demos.",
      format: "hackathon",
      icon: "code",
    },
    {
      id: "frontier-talks",
      title: "Frontier Talks",
      description:
        "Keynotes from industry leaders and researchers on the edge of AI.",
      format: "talk",
      icon: "mic",
    },
    {
      id: "build-workshops",
      title: "Build Workshops",
      description:
        "Hands-on sessions covering RAG systems, fine-tuning, agents, and more.",
      format: "workshop",
      icon: "tool",
    },
    {
      id: "tech-expo",
      title: "Tech Expo",
      description:
        "Department project showcase + sponsor booths + recruitment fair.",
      format: "expo",
      icon: "layers",
    },
    {
      id: "data-cup",
      title: "Data Cup",
      description:
        "Inter-college data science competition with a curated dataset.",
      format: "competition",
      icon: "trophy",
    },
    {
      id: "ai-quiz",
      title: "AI Quiz Bowl",
      description: "Team-based quiz on AI history, papers, and trivia.",
      format: "competition",
      icon: "brain",
    },
    {
      id: "design-sprint",
      title: "Design Sprint",
      description:
        "48-hour UX challenge — design an AI product end-to-end.",
      format: "competition",
      icon: "palette",
    },
    {
      id: "cultural-night",
      title: "Cultural Night",
      description: "Closing-day celebration — music, performances, awards.",
      format: "cultural",
      icon: "music",
    },
  ],

  /* TODO: replace with full day-by-day schedule from brochure */
  schedule: [
    {
      date: "DEC 15",
      label: "Day 1 · Open",
      sessions: [
        {
          time: "09:00",
          title: "Opening Ceremony",
          venue: "Main Auditorium",
          format: "talk",
        },
        {
          time: "10:30",
          title: "Keynote: The State of AI in 2026",
          speaker: "TBD",
          venue: "Main Auditorium",
          format: "talk",
        },
        {
          time: "14:00",
          title: "Hack-X 36 — Kickoff",
          venue: "Lab Block A",
          format: "hackathon",
        },
        {
          time: "16:00",
          title: "Workshop: Building RAG Systems",
          speaker: "TBD",
          venue: "Lab Block B",
          format: "workshop",
        },
      ],
    },
    {
      date: "DEC 16",
      label: "Day 2 · Build",
      sessions: [
        {
          time: "09:00",
          title: "Industry Panel: From Lab to Product",
          venue: "Main Auditorium",
          format: "talk",
        },
        {
          time: "11:00",
          title: "Workshop: Fine-tuning Open Models",
          venue: "Lab Block B",
          format: "workshop",
        },
        {
          time: "14:00",
          title: "Tech Expo Opens",
          venue: "Expo Hall",
          format: "expo",
        },
        {
          time: "18:00",
          title: "Data Cup — Round 1",
          venue: "Lab Block A",
          format: "competition",
        },
      ],
    },
    {
      date: "DEC 17",
      label: "Day 3 · Showcase",
      sessions: [
        {
          time: "10:00",
          title: "Hack-X 36 — Demos",
          venue: "Main Auditorium",
          format: "hackathon",
        },
        {
          time: "13:00",
          title: "Design Sprint — Finals",
          venue: "Studio",
          format: "competition",
        },
        {
          time: "16:00",
          title: "Awards & Closing",
          venue: "Main Auditorium",
          format: "talk",
        },
        {
          time: "19:00",
          title: "Cultural Night",
          venue: "Outdoor Stage",
          format: "cultural",
        },
      ],
    },
  ],

  /* TODO: replace with confirmed speakers from brochure */
  speakers: [
    {
      name: "Speaker One",
      designation: "Principal Researcher",
      org: "TBD",
      talk: "The State of AI in 2026",
      initials: "S1",
      gradient: "from-magenta to-purple-500",
    },
    {
      name: "Speaker Two",
      designation: "Engineering Lead",
      org: "TBD",
      talk: "From Lab to Product",
      initials: "S2",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Speaker Three",
      designation: "AI Founder",
      org: "TBD",
      talk: "Founding an AI Company",
      initials: "S3",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Speaker Four",
      designation: "Research Scientist",
      org: "TBD",
      talk: "Open Models, Open Future",
      initials: "S4",
      gradient: "from-emerald-500 to-teal-500",
    },
  ],

  /* TODO: replace sponsor tiers with confirmed sponsors from brochure */
  sponsorTiers: [
    {
      tier: "title",
      label: "Title Sponsor",
      sponsors: [{ name: "TBD" }],
    },
    {
      tier: "gold",
      label: "Gold Partners",
      sponsors: [{ name: "TBD" }, { name: "TBD" }, { name: "TBD" }],
    },
    {
      tier: "silver",
      label: "Silver Partners",
      sponsors: [
        { name: "TBD" },
        { name: "TBD" },
        { name: "TBD" },
        { name: "TBD" },
      ],
    },
    {
      tier: "community",
      label: "Community Partners",
      sponsors: [
        { name: "TBD" },
        { name: "TBD" },
        { name: "TBD" },
        { name: "TBD" },
        { name: "TBD" },
      ],
    },
  ],

  /* TODO: replace FAQ with brochure FAQ */
  faqs: [
    {
      q: "Who can attend Vision X?",
      a: "Students, faculty, and industry guests are welcome. Some events (Hack-X 36, Data Cup) require pre-registration.",
    },
    {
      q: "Is there a registration fee?",
      a: "General attendance is free. Competitive tracks have a nominal team registration fee.",
    },
    {
      q: "Can I participate from outside MIT Mysore?",
      a: "Yes — most events are open to inter-college participation. See individual track pages for details.",
    },
    {
      q: "What should I bring?",
      a: "A laptop with your dev setup if you're competing. Conference pass and college ID for everything else.",
    },
    {
      q: "How do I get on-campus?",
      a: "The MIT Mysore campus is at Belawadi, Srirangapatna Taluk. Shuttle from Mysore city on each fest day — schedule on the registration page.",
    },
    {
      q: "Where do I stay if I'm coming from outside Mysore?",
      a: "We have a list of partner hotels and PG accommodations near campus — sent on registration confirmation.",
    },
  ],

  /* TODO: replace with the live registration URL when confirmed */
  registerUrl: "#register",
  brochureUrl: "/vision-x-brochure.pdf",
};
