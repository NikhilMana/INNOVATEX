import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import { EventPageTemplate, type EventPageData } from "@/components/events/EventPageTemplate";

export const metadata: Metadata = {
  title: "Arghya — Speaker Series",
  description:
    "Arghya is the InnovateX speaker series — bringing industry leaders, researchers, and innovators on-campus to share insights from the frontier of AI.",
};

const data: EventPageData = {
  title: "Arghya 2.0",
  tagline: "Empowering Engineers with Next-Gen AI Tools",
  description:
    "An interactive workshop exploring the transformative potential of next-generation AI tools, adding a new layer to the learning journey.",
  logo: "/images/logos/argya.jpeg",
  heroGradient: "from-blue-500 to-indigo-700",
  pillLabel: "Workshop · Tools & Tech",
  meta: [
    { label: "Format", value: "Hands-on Workshop", icon: <Calendar size={14} className="text-purple-400" /> },
    { label: "Focus", value: "Practical AI Tools", icon: <MapPin size={14} className="text-purple-400" /> },
  ],
  overview:
    "The Department of CSE - AI&ML MIT Mysore-Belavadi, in association with InnovateX and the Google Developer Student Clubs (GDSC), successfully organized ARGHYA 2.0, a workshop dedicated to exploring the transformative potential of next-generation AI tools.\n\nThe workshop featured sessions by Skanda M Rao, Suhas Mahadev, Beulah Deva and Prakruthi D, who shared their knowledge and experiences on leveraging AI tools to enhance productivity, innovation, and problem-solving. Through live demonstrations and interactive discussions, participants were introduced to cutting-edge technologies shaping the future of engineering and development.",
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
    "/images/events/arghya-2/IMG_3694.JPG.jpeg",
    "/images/events/arghya-2/IMG_3909.JPG.jpeg",
    "/images/events/arghya-2/IMG_3951.JPG.jpeg",
    "/images/events/arghya-2/IMG_4299.JPG.jpeg",
    "/images/events/arghya-2/IMG_4359.JPG.jpeg",
  ],
  ctaText: "View Highlights",
  ctaHref: "/contact",
  guidelinesHref: "/documents/arghya-guidelines.pdf",
};

export default function Page() {
  return <EventPageTemplate data={data} />;
}
