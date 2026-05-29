import type { Metadata } from "next";
import { EventsLandingPage } from "./EventsLandingPage";

export const metadata: Metadata = {
  title: "Events — InnovateX",
  description:
    "Explore all programs at InnovateX — Arivu, Arghya, Aarohan, InnovateX, and the flagship Vision X 2026 Department Fest.",
};

export default function Page() {
  return <EventsLandingPage />;
}
