export interface Sponsor {
  name: string;
  tier: "title" | "gold" | "silver" | "community";
  logo?: string;
}

export const sponsors: Sponsor[] = [
  { name: "MIT Mysore", tier: "title" },
  { name: "CSE AI & ML Dept.", tier: "title" },
  { name: "TechCorp", tier: "gold" },
  { name: "AI Labs", tier: "gold" },
  { name: "Vertex", tier: "gold" },
  { name: "Nebula", tier: "silver" },
  { name: "Quantum", tier: "silver" },
  { name: "Orbit", tier: "silver" },
  { name: "Pulse", tier: "community" },
  { name: "Beacon", tier: "community" },
  { name: "Spark", tier: "community" },
  { name: "Forge", tier: "community" },
];
