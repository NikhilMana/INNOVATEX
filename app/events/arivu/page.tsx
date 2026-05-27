import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "Arivu — Knowledge Sharing",
  description:
    "Arivu is the peer-led knowledge-sharing initiative of InnovateX — exploring emerging topics in AI, ML, and computing.",
};

const data: EventPageData = {
  title: "Arivu",
  tagline: "Where knowledge meets curiosity",
  description:
    "A peer-led knowledge-sharing initiative where students explore emerging topics in AI, ML, and computing through curated sessions, deep-dives, and open discussions.",
  logo: "/images/logos/arivulogo.jpg",
  heroGradient: "from-emerald-500 to-teal-700",
  pillLabel: "Peer Learning · Annual",
  meta: [
    { label: "Format", value: "Sessions + Discussions", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Venue", value: "On-campus", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "Arivu — Sanskrit for 'knowledge' — is built on the idea that the fastest way to learn is to teach. Students prepare curated sessions on cutting-edge AI/ML topics and present them to peers, sparking discussion and deeper inquiry. Every session is recorded and added to the InnovateX archive.",
  timeline: [
    { phase: "Topic Pick", description: "Members propose topics they want to dive into. The community votes." },
    { phase: "Prep", description: "Each presenter spends two weeks researching and structuring their session." },
    { phase: "Session", description: "60-minute deep-dive — half presentation, half open discussion." },
    { phase: "Archive", description: "Notes, slides, and recordings published to the InnovateX library." },
  ],
  stats: [
    { value: "24+", label: "Sessions Hosted" },
    { value: "12+", label: "Topic Areas" },
    { value: "150+", label: "Active Participants" },
    { value: "100%", label: "Student-Led" },
  ],
  ctaText: "Propose a Session",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
