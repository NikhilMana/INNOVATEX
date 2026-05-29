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
  feedbackUrl?: string;
  brochureUrl: string;
}

export const visionX: VisionXContent = {
  /* Tagline from brochure */
  tagline: "CROSS THE HORIZON CREATE THE FUTURE",

  /* Fest date */
  date: "2026-06-04T09:00:00+05:30",
  dateLong: "June 4, 2026",
  venue: "Maharaja Institute of Technology, Mysore",

  /* Overview from brochure */
  overview:
    "VisionX is an inter-college technical fest organized by the Department of Computer Science and Engineering – Artificial Intelligence & Machine Learning, in association with the Student Club – Innovatex, held at Maharaja Institute of Technology, Mysore, on 4th of June 2026. It is a celebration of technology, creativity, and innovation, bringing together some of the brightest minds to compete, collaborate, and create. The fest features flagship events — Robogenesis, BrandVerse — each designed to test different dimensions of technical expertise, problem-solving, and teamwork. VisionX aims to inspire students to push boundaries, think beyond the ordinary, and showcase their talents in a dynamic and engaging environment that blends fun with learning.",

  /* TODO: confirm KPIs from brochure */
  kpis: [
    { value: "1", label: "Day" },
    { value: "3+", label: "Flagship Events" },
    { value: "500+", label: "Expected Footfall" },
    { value: "₹50k+", label: "Prize Pool" },
  ],

  /* Tracks listed in brochure */
  tracks: [
    {
      id: "robogenesis",
      title: "Robogenesis",
      description: "AI Robotics Ideathon & Protothon",
      format: "hackathon",
      icon: "cpu",
    },
    {
      id: "brandverse",
      title: "BrandVerse",
      description: "AI Conclave. Dive into the world of AI brands and strategy.",
      format: "talk",
      icon: "mic",
    },
    {
      id: "relay-brand",
      title: "Relay",
      description: "Build a Brand in a relay format challenge.",
      format: "competition",
      icon: "layers",
    },
  ],

  schedule: [
    {
      date: "JUN 04",
      label: "VisionX 2026",
      sessions: [
        {
          time: "09:00",
          title: "Inauguration Ceremony & Welcome Address",
          venue: "Main Auditorium",
          format: "talk",
        },
        {
          time: "10:00",
          title: "Department Magazine & Applications Launch",
          venue: "Main Auditorium",
          format: "talk",
        },
        {
          time: "11:00",
          title: "Robogenesis — AI Robotics Ideathon",
          venue: "Lab Block",
          format: "hackathon",
        },
        {
          time: "11:00",
          title: "BrandVerse — AI Conclave",
          venue: "Seminar Hall",
          format: "talk",
        },
        {
          time: "14:00",
          title: "Relay — Build a Brand",
          venue: "Lab Block",
          format: "competition",
        },
        {
          time: "16:00",
          title: "Evaluation & Result Compilation",
          venue: "Lab Block",
          format: "competition",
        },
        {
          time: "17:00",
          title: "Valedictory Ceremony & Prize Distribution",
          venue: "Main Auditorium",
          format: "cultural",
        },
        {
          time: "18:00",
          title: "Vote of Thanks & Group Photo",
          venue: "Main Auditorium",
          format: "cultural",
        },
      ],
    },
  ],

  speakers: [
    {
      name: "Dr. Ranjith K C",
      designation: "HoD CSE-AI&ML",
      org: "MIT Mysore",
      talk: "Welcome Address",
      initials: "RK",
      gradient: "from-magenta to-purple-500",
    },
  ],

  sponsorTiers: [
    {
      tier: "title",
      label: "Title Sponsor (₹50,000)",
      sponsors: [{ name: "Available" }],
    },
    {
      tier: "gold",
      label: "Platinum Sponsor (₹35,000)",
      sponsors: [{ name: "Available" }, { name: "Available" }],
    },
    {
      tier: "silver",
      label: "Gold Sponsor (₹25,000)",
      sponsors: [
        { name: "Available" },
        { name: "Available" },
        { name: "Available" },
        { name: "Available" },
      ],
    },
    {
      tier: "community",
      label: "Silver Sponsor (₹15,000)",
      sponsors: [
        { name: "Available" },
        { name: "Available" },
        { name: "Available" },
        { name: "Available" },
        { name: "Available" },
        { name: "Available" },
      ],
    },
  ],

  faqs: [
    {
      q: "Who can attend Vision X?",
      a: "Students, faculty, and industry guests are welcome. Some events (Robogenesis, Relay) require pre-registration.",
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
      a: "The MIT Mysore campus is at Belawadi, Srirangapatna Taluk. Shuttle from Mysore city on the fest day — schedule on the registration page.",
    },
    {
      q: "Where do I stay if I'm coming from outside Mysore?",
      a: "We have a list of partner hotels and PG accommodations near campus — sent on registration confirmation.",
    },
  ],

  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc5AzoVq5hm6DNC_WGkoAEEffK1KmvNmx-6RRkPDLu4H9u5tA/viewform?usp=header",
  feedbackUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc6TuL9uxv791thUJklHKpcjDONz2PP7ybOQzVwzoOiclQrpQ/viewform?usp=header",
  brochureUrl: "/vision-x-brochure.pdf",
};
