import type { Metadata } from "next";
import { VisionXPage } from "./VisionXPage";

export const metadata: Metadata = {
  title: "Vision X — Department Fest 2026",
  description:
    "Vision X is the flagship Department Fest 2026 of CSE AI & ML at MIT Mysore — hackathons, talks, workshops, and a tech expo packed into a single day event.",
};

export default function Page() {
  return <VisionXPage />;
}
