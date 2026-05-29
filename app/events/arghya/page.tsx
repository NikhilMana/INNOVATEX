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
  tagline: "Practical AI Tools Workshop",
  description:
    "An interactive workshop introducing practical AI tools in a simple, engaging way, adding a new layer to the learning journey.",
  logo: "/images/logos/argya.jpeg",
  heroGradient: "from-blue-500 to-indigo-700",
  pillLabel: "Workshop · Tools & Tech",
  meta: [
    { label: "Format", value: "Hands-on Workshop", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Focus", value: "Practical AI Tools", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "The Arghya AI Tools Workshop was designed to add a practical layer to the student journey by introducing cutting-edge AI tools in a simple, engaging, and hands-on manner. Instead of just theoretical concepts, Arghya focuses on real-world applications of Artificial Intelligence, helping students understand how to leverage these tools to enhance their productivity, creativity, and problem-solving skills.\n\nThrough interactive sessions and live demonstrations, participants were guided on how to integrate AI seamlessly into their workflows, making complex technology accessible and highly practical for everyday academic and professional tasks.",
  timeline: [
    { phase: "Introduction", description: "Demystifying AI and introducing the landscape of modern AI tools." },
    { phase: "Hands-on Demos", description: "Live demonstrations of practical AI tools in action." },
    { phase: "Interactive Practice", description: "Students actively applying the tools to solve simple tasks." },
    { phase: "Future Scope", description: "Discussions on the evolving capabilities and ethics of AI." },
  ],
  stats: [
    { value: "100%", label: "Hands-on Learning" },
    { value: "Multiple", label: "AI Tools Covered" },
    { value: "High", label: "Student Engagement" },
    { value: "Practical", label: "Focus Area" },
  ],
  gallery: [
    "/images/events/arghya/IMG_7697.JPG",
    "/images/events/arghya/IMG_7703.JPG",
    "/images/events/arghya/IMG_7750.JPG",
    "/images/events/arghya/IMG_7797.JPG",
    "/images/events/arghya/IMG_7799 (1).JPG",
    "/images/events/arghya/IMG_7989.JPG",
  ],
  ctaText: "Request a Workshop",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
