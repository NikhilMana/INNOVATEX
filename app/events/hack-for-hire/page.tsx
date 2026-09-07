import type { Metadata } from "next";
import { Calendar, MapPin, Download } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "HACK for HIRE 2026",
  description:
    "A 24-hour national-level hackathon organized by the Department of CSE – AI&ML. Innovate. Build. Get Hired.",
};

const data: EventPageData = {
  title: "HACK for HIRE",
  tagline: "Innovate. Build. Get Hired.",
  description:
    "A 24-hour national-level hackathon designed to give final-year students a platform to solve real-world industry problems, interact with industry professionals, and explore career opportunities.",
  logo: "/images/events/hack-for-hire/poster.jpg",
  heroGradient: "from-purple-500 to-indigo-700",
  pillLabel: "National Level Hackathon",
  meta: [
    { label: "Dates", value: "16th & 17th Oct 2026", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Venue", value: "Samalochana Hall, MITM", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "Hack for Hire – 2026 is a 24-hour national-level hackathon organized by the Department of CSE – AI&ML, Maharaja Institute of Technology Mysore. The event is designed to give final-year students a platform to solve real-world industry problems, demonstrate technical and problem-solving skills, interact with industry professionals, and explore career opportunities.\n\nParticipation is limited to the nominated Top 3 teams from each institution. Teams of 3–4 final-year students will work on an approved or assigned real-world problem statement and develop a working prototype or MVP.",
  timeline: [
    { phase: "Problem Statements", description: "Teams work on an approved or assigned real-world problem statement." },
    { phase: "Development", description: "Develop a working prototype or MVP wherever applicable." },
    { phase: "Evaluation", description: "Judging based on innovation, technical feasibility, and practical impact." },
    { phase: "Industry Exposure", description: "Interaction with industry experts, recruiters, and mentors." },
  ],
  stats: [
    { value: "24", label: "Hours" },
    { value: "Top 3", label: "Teams per Institution" },
    { value: "3-4", label: "Members per Team" },
    { value: "National", label: "Level Event" },
  ],
  ctaText: "Register Now",
  ctaHref: "https://forms.gle/9aCo5pD3UgwL15eL6",
  guidelinesHref: "/Hack_for_Hire_2026_Event_Details(2).pdf",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
