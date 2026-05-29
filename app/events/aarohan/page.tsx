import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "Aarohan — Skill-Building Workshops",
  description:
    "Aarohan focuses on foundational knowledge, hands-on programming, and core technologies.",
};

const data: EventPageData = {
  title: "Aarohan",
  tagline: "Building the foundations",
  description:
    "Skill-building workshops focusing on foundational knowledge, hands-on programming, and core technologies.",
  logo: "/images/logos/aarohan.jpg",
  heroGradient: "from-rose-500 to-pink-700",
  pillLabel: "Workshop · Foundational Tech",
  meta: [
    { label: "Format", value: "Hands-on Workshop", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Focus", value: "Core Technologies", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "Aarohan is designed to build strong foundations in emerging technologies. Through structured, hands-on workshops, students learn the fundamentals of programming, logic building, and core concepts essential for navigating the modern tech landscape. The program bridges the gap between theoretical learning and practical application, ensuring participants are equipped with the skills needed for future challenges and hackathons.",
  timeline: [
    { phase: "Foundations", description: "Introduction to core concepts and basic logic." },
    { phase: "Hands-on Practice", description: "Guided coding sessions to apply newly learned concepts." },
    { phase: "Mini Projects", description: "Building small, functional projects to solidify understanding." },
    { phase: "Advanced Pathways", description: "Roadmaps for further learning and specialization." },
  ],
  stats: [
    { value: "100%", label: "Practical Learning" },
    { value: "Beginner", label: "Friendly" },
    { value: "Multiple", label: "Tech Stacks" },
    { value: "High", label: "Success Rate" },
  ],
  gallery: [
    "/images/events/aarohan/45.jpg",
    "/images/events/aarohan/46.jpg",
    "/images/events/aarohan/47.jpg",
    "/images/events/aarohan/48.jpg",
  ],
  ctaText: "Join Next Workshop",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
