import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "Arghya — Speaker Series",
  description:
    "Arghya is the InnovateX speaker series — bringing industry leaders, researchers, and innovators on-campus to share insights from the frontier of AI.",
};

const data: EventPageData = {
  title: "Arghya",
  tagline: "Voices that shape the future",
  description:
    "A speaker series bringing industry leaders, researchers, and AI innovators on-campus to share what they're building, what they've learned, and where the field is heading.",
  logo: "/images/logos/argya.jpeg",
  heroGradient: "from-blue-500 to-indigo-700",
  pillLabel: "Speaker Series · Annual",
  meta: [
    { label: "Format", value: "Talks + Q&A", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Venue", value: "Main Auditorium", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "Arghya — an offering — is the InnovateX speaker series. Each edition features a curated lineup of voices from industry, academia, and the founder community. The format is intentional: a focused 30-minute talk followed by an extended Q&A and on-campus interaction so that attendees walk away with insight, not just inspiration.",
  timeline: [
    { phase: "Curate", description: "We identify themes and reach out to speakers aligned with the program." },
    { phase: "Schedule", description: "Speakers confirmed, talks scheduled, and themes published a month out." },
    { phase: "Talk Day", description: "30-minute keynote followed by extended Q&A and student interaction." },
    { phase: "Follow-up", description: "Recordings published; connections facilitated for interested students." },
  ],
  stats: [
    { value: "8+", label: "Speakers Hosted" },
    { value: "500+", label: "Cumulative Attendance" },
    { value: "3", label: "Editions" },
    { value: "Multiple", label: "Industries" },
  ],
  ctaText: "Suggest a Speaker",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
