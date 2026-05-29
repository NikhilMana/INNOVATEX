import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "Arivu — Knowledge Sharing",
  description:
    "Arivu is the peer-led knowledge-sharing initiative of InnovateX — exploring emerging topics in AI, ML, and computing.",
};

const data: EventPageData = {
  title: "ARIVU",
  tagline: "Bridging the gap in education",
  description:
    "An outreach initiative by the students of the CSE–AIML Department under InnovateX, bringing curiosity, awareness, and technology-based learning to rural and government schools.",
  logo: "/images/logos/arivulogo.jpg",
  heroGradient: "from-emerald-500 to-teal-700",
  pillLabel: "Outreach Initiative · Rural Education",
  meta: [
    { label: "Coordinator", value: "Prakruthi D", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Recent Visit", value: "Govt. High School, Naguvanahalli", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "ARIVU is an outreach initiative by the students of the CSE–AIML Department under InnovateX, created with the aim of bringing curiosity, awareness, and technology-based learning to rural and government schools. The programme focuses on making education more engaging and accessible by introducing students to concepts that go beyond their regular curriculum. ARIVU works to bridge the gap between traditional learning environments and the rapidly evolving world of science and technology, while nurturing confidence, critical thinking, and a spirit of exploration among young learners. The ARIVU programme is coordinated by Prakruthi D.\n\nAs part of this initiative, our team visited Govt. High School, Naguvanahalli, where students were engaged through sessions that blended aptitude, reasoning, and the role of AI in everyday life. Logical puzzles, quick-thinking tasks, and simple problem-solving activities helped strengthen their analytical abilities in a fun and interactive manner. Alongside this, relatable demonstrations and discussions on artificial intelligence allowed students to connect modern technology with real-life situations and understand its growing relevance.\n\nThe visit created an energetic and encouraging learning atmosphere, motivating students to participate actively, ask curious questions, and think beyond textbook boundaries. Programmes like ARIVU continue to inspire young minds, broaden their perspectives, and plant the seeds of innovation and confidence needed to explore the world of technology.",
  timeline: [
    { phase: "Aptitude & Reasoning", description: "Logical puzzles, quick-thinking tasks, and simple problem-solving activities." },
    { phase: "AI in Everyday Life", description: "Relatable demonstrations connecting modern technology with real-life situations." },
    { phase: "Interactive Discussions", description: "Motivating students to participate actively and ask curious questions." },
    { phase: "Mentorship", description: "Planting seeds of innovation and confidence in young learners." },
  ],
  stats: [
    { value: "100%", label: "Student-Led Initiative" },
    { value: "Rural", label: "Focus Area" },
    { value: "AI & Logic", label: "Core Topics" },
    { value: "Infinite", label: "Curiosity Sparked" },
  ],
  gallery: [
    "/images/events/arivu/45.jpg",
    "/images/events/arivu/46.jpg",
    "/images/events/arivu/47.jpg",
    "/images/events/arivu/image (1).png",
    "/images/events/arivu/image.png",
  ],
  ctaText: "Join the Initiative",
  ctaHref: "/contact",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
