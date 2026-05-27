import type { Metadata } from "next";
import { EditionTemplate } from "@/components/magazine/EditionTemplate";
import { editionDetails } from "@/data/magazine";

export const metadata: Metadata = {
  title: "COSMIC 4.0 — Launching Soon",
  description: "The next edition is in the works. Themes, voices, and stories — coming Q4 2025.",
};

export default function Page() {
  return <EditionTemplate edition={editionDetails["cosmic-4"]} />;
}
