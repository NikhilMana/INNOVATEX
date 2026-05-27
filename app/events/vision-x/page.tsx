import type { Metadata } from "next";
import { VisionXPage } from "./VisionXPage";

export const metadata: Metadata = {
  title: "Vision X — Department Fest 2025",
  description:
    "Vision X is the flagship Department Fest 2025 of CSE AI & ML at MIT Mysore — hackathons, talks, workshops, and a tech expo across three days.",
};

export default function Page() {
  return <VisionXPage />;
}
