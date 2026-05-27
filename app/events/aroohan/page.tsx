import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "Aroohan — Skill Workshops",
  description:
    "Aroohan is the InnovateX workshop program — hands-on, practical, project-driven training across the AI/ML stack.",
};

const data: EventPageData = {
  title: "Aroohan",
  tagline: "Skills that take flight",
  description:
    "Hands-on workshops covering practical tooling, frameworks, and end-to-end project builds across the AI/ML stack — from prompt engineering to model deployment.",
  heroGradient: "from-orange-500 to-rose-700",
  pillLabel: "Workshops · Active",
  meta: [
    { label: "Format", value: "Hands-on Build", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Venue", value: "Lab Block B", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "Aroohan — Sanskrit for 'ascent' — is built for builders. Every workshop is hands-on: laptops open, code committed, something working by the end. Topics rotate every month based on what the community is curious about and where the field is moving — from agent frameworks to fine-tuning to production deployment.",
  timeline: [
    { phase: "Pick a topic", description: "Community votes on the next workshop topic and format." },
    { phase: "Pre-work", description: "Setup guide and primer shared a week before so we can hit the ground running." },
    { phase: "Build session", description: "3-4 hour hands-on build with mentors floating around the room." },
    { phase: "Ship", description: "Everyone walks out with a working project pushed to their GitHub." },
  ],
  stats: [
    { value: "16+", label: "Workshops Run" },
    { value: "300+", label: "Builders Trained" },
    { value: "100%", label: "Hands-on" },
    { value: "Open", label: "To All Years" },
  ],
  ctaText: "Join Next Workshop",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
