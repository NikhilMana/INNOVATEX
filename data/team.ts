export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  gradient: string;
  socials?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export const coreTeam: TeamMember[] = [
  {
    name: "Faculty Coordinator",
    role: "Head — InnovateX",
    initials: "FC",
    gradient: "from-magenta to-purple-500",
  },
  {
    name: "Student Lead",
    role: "President",
    initials: "SL",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    name: "Tech Lead",
    role: "Engineering",
    initials: "TL",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Design Lead",
    role: "Brand & Visual",
    initials: "DL",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Events Lead",
    role: "Operations",
    initials: "EL",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Editorial Lead",
    role: "COSMIC",
    initials: "EM",
    gradient: "from-emerald-500 to-teal-500",
  },
];
