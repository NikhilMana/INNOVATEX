import type { Metadata } from "next";
import { EditionTemplate } from "@/components/magazine/EditionTemplate";
import { editionDetails } from "@/data/magazine";

export const metadata: Metadata = {
  title: "COSMIC 1.0 — Genesis",
  description: "The inaugural edition of COSMIC — origin stories and foundational ideas.",
};

export default function Page() {
  return <EditionTemplate edition={editionDetails["cosmic-1"]} />;
}
