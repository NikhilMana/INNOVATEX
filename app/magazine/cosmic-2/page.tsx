import type { Metadata } from "next";
import { EditionTemplate } from "@/components/magazine/EditionTemplate";
import { editionDetails } from "@/data/magazine";

export const metadata: Metadata = {
  title: "COSMIC 2.0 — Convergence",
  description: "Where disciplines meet — exploring the intersections of AI, design, and human experience.",
};

export default function Page() {
  return <EditionTemplate edition={editionDetails["cosmic-2"]} />;
}
