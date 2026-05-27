import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact — InnovateX",
  description: "Get in touch with InnovateX — MIT Mysore CSE AI & ML.",
};

export default function Page() {
  return <ContactPage />;
}
