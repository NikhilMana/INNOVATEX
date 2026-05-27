import type { Metadata } from "next";
import { MagazineLandingPage } from "./MagazineLandingPage";

export const metadata: Metadata = {
  title: "COSMIC — InnovateX Magazine",
  description:
    "COSMIC is the editorial publication of InnovateX. Four editions of essays, deep-dives, interviews, and student writing from the frontier of AI.",
};

export default function Page() {
  return <MagazineLandingPage />;
}
