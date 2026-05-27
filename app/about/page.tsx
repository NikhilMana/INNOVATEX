import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About — InnovateX",
  description:
    "InnovateX is the innovation ecosystem of the CSE AI & ML department at MIT Mysore.",
};

export default function Page() {
  return <AboutPage />;
}
