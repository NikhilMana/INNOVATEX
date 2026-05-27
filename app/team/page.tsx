import type { Metadata } from "next";
import { TeamPage } from "./TeamPage";

export const metadata: Metadata = {
  title: "Team — InnovateX",
  description: "Meet the student core and faculty mentors of InnovateX.",
};

export default function Page() {
  return <TeamPage />;
}
