export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  gradient: string;
  image?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export const coreTeam: TeamMember[] = [
  { name: "Suhas M", role: "General Secretary", initials: "SM", gradient: "from-purple-500 to-indigo-600", image: "/images/team/Suhas M.jpeg" },
  { name: "Tharun M P", role: "Deputy General Secretary", initials: "TM", gradient: "from-magenta to-purple-500" },
  { name: "Harshitha K S", role: "Deputy General Secretary", initials: "HK", gradient: "from-pink-500 to-rose-500", image: "/images/team/Harshitha K S.jpeg" },
  { name: "Beulah D", role: "Treasurer", initials: "BD", gradient: "from-emerald-500 to-teal-500", image: "/images/team/Beulah D.jpeg" },
  { name: "M J Purushotham Gowda", role: "Event Coordinator", initials: "MP", gradient: "from-orange-500 to-amber-500" },
  { name: "Thabish Gafar M", role: "Event Coordinator", initials: "TG", gradient: "from-blue-500 to-cyan-500", image: "/images/team/Thabish Gafar M.jpeg" },
  { name: "Monisha M J", role: "Event Coordinator", initials: "MM", gradient: "from-purple-500 to-fuchsia-500" },
  { name: "K C Roopa Shetty", role: "Executive Coordinator", initials: "KR", gradient: "from-teal-400 to-emerald-600", image: "/images/team/K C Roopa Shetty.jpeg" },
  { name: "Dicken Kumar K", role: "Executive Coordinator", initials: "DK", gradient: "from-rose-400 to-red-600", image: "/images/team/Dicken Kumar K.jpeg" },
  { name: "Janavi N S", role: "Executive Coordinator", initials: "JN", gradient: "from-pink-400 to-rose-600", image: "/images/team/Janavi N S.jpeg" },
  { name: "Kishan S Shetty", role: "Technical Coordinator", initials: "KS", gradient: "from-cyan-400 to-blue-600", image: "/images/team/Kishan S Shetty.jpeg" },
  { name: "Samarth M N", role: "Technical Coordinator", initials: "SM", gradient: "from-indigo-400 to-purple-600" },
  { name: "Amith K", role: "Non-Technical Coordinator", initials: "AK", gradient: "from-amber-400 to-orange-600", image: "/images/team/Amith K.jpeg" },
  { name: "Anvitha A", role: "Non-Technical Coordinator", initials: "AA", gradient: "from-fuchsia-400 to-pink-600", image: "/images/team/Anvitha A.jpeg" },
];
