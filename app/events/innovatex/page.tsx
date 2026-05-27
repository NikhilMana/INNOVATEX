import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "InnovateX — Hackathons & Builds",
  description:
    "The flagship InnovateX hackathon-and-build series — 36-hour sprints, ambitious problem statements, real shipping.",
};

const data: EventPageData = {
  title: "InnovateX",
  tagline: "Build. Ship. Repeat.",
  description:
    "The flagship hackathon-and-build series. 36-hour sprints. Real problems. Working demos. Built by the community, for the community — and judged on what ships.",
  logo: "/images/logos/innovateX.jpg",
  heroGradient: "from-purple-500 to-fuchsia-700",
  pillLabel: "Hackathon · Active",
  meta: [
    { label: "Format", value: "36-hour sprint", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Venue", value: "Lab Block A", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "InnovateX is the flagship build series — and the namesake of the club. The format is intentional: a 36-hour hackathon with ambitious open-ended problem statements, on-campus mentors, sponsor APIs, and a strict 'ship something that runs' rule. No slides. No pitch decks. Only working demos.",
  timeline: [
    { phase: "Theme drop", description: "Theme and problem statements announced a week before. Teams form." },
    { phase: "Kickoff", description: "Friday evening kickoff — sponsor APIs unlocked, mentors on-site." },
    { phase: "Build", description: "36 hours of building. Food, coffee, mentors, and the occasional cot." },
    { phase: "Demo", description: "Sunday afternoon — 4 minute demos, judging, and awards." },
  ],
  stats: [
    { value: "4", label: "Editions" },
    { value: "60+", label: "Teams Built" },
    { value: "240+", label: "Builders" },
    { value: "12+", label: "Projects Shipped" },
  ],
  ctaText: "Register Your Team",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
