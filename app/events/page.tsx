import type { Metadata } from "next";
import { EventsLandingPage } from "./EventsLandingPage";

export const metadata: Metadata = {
  title: "Events — InnovateX",
  description:
    "Explore all programs at InnovateX — Arivu, Arghya, Aroohan, InnovateX, and the flagship Vision X 2025 Department Fest.",
};

export default function Page() {
  return <EventsLandingPage />;
}
