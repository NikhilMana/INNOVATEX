export type NavBadge = "UPCOMING" | "SOON" | "NEW" | "FLAGSHIP";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  badge?: NavBadge;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Events",
    href: "/events",
    children: [
      {
        label: "Vision X",
        href: "/events/vision-x",
        description: "Department Fest 2026 — upcoming flagship",
        badge: "FLAGSHIP",
      },
      {
        label: "Arivu",
        href: "/events/arivu",
        description: "Knowledge-sharing initiative",
      },
      {
        label: "Arghya",
        href: "/events/arghya",
        description: "Industry talks & speaker series",
      },
      {
        label: "Aarohan",
        href: "/events/aarohan",
        description: "Skill-building workshops",
      },
    ],
  },
  {
    label: "Magazine",
    href: "/magazine",
    children: [
      {
        label: "COSMIC 1.0",
        href: "/magazine/cosmic-1",
        description: "Inaugural edition",
      },
      {
        label: "COSMIC 2.0",
        href: "/magazine/cosmic-2",
        description: "Year two",
      },
      {
        label: "COSMIC 3.0",
        href: "/magazine/cosmic-3",
        description: "Year three",
      },
      {
        label: "COSMIC 4.0",
        href: "/magazine/cosmic-4",
        description: "Launching soon",
        badge: "SOON",
      },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
] as const;

export const contactInfo = {
  department: "CSE — Artificial Intelligence & Machine Learning",
  institution: "Maharaja Institute of Technology, Mysore",
  address: "Belawadi, Srirangapatna Taluk, Mandya District, Karnataka 571477",
  email: "innovatex@mitmysore.in",
  phone: "+91 00000 00000",
};
