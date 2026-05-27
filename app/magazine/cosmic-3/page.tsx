import type { Metadata } from "next";
import { EditionTemplate } from "@/components/magazine/EditionTemplate";
import { editionDetails } from "@/data/magazine";

export const metadata: Metadata = {
  title: "COSMIC 3.0 — Frontier",
  description: "Pushing the edges — student research, industry voices, and the questions shaping tomorrow.",
};

export default function Page() {
  return <EditionTemplate edition={editionDetails["cosmic-3"]} />;
}
