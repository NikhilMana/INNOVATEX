import type { CosmicEdition } from "./cosmic";
import { cosmicEditions } from "./cosmic";

export interface Article {
  title: string;
  author: string;
  category: string;
  readTime: string;
}

export interface EditorialMember {
  name: string;
  role: string;
  initials: string;
}

export interface EditionDetail extends CosmicEdition {
  articles: Article[];
  editorialBoard: EditorialMember[];
  letterFromEditor?: string;
}

const sharedBoard: EditorialMember[] = [
  { name: "Editor in Chief", role: "Lead Editor", initials: "EC" },
  { name: "Managing Editor", role: "Operations", initials: "ME" },
  { name: "Design Lead", role: "Visual Direction", initials: "DL" },
  { name: "Tech Editor", role: "Technical Review", initials: "TE" },
];

export const editionDetails: Record<string, EditionDetail> = {
  "cosmic-1": {
    ...cosmicEditions[0],
    articles: [
      { title: "Genesis: Why InnovateX?", author: "Founding Team", category: "Editorial", readTime: "4 min" },
      { title: "A Brief History of AI on Campus", author: "Student Author", category: "Feature", readTime: "8 min" },
      { title: "The First Hackathon", author: "Builder Spotlight", category: "Story", readTime: "6 min" },
      { title: "Why Build in Public", author: "Student Author", category: "Essay", readTime: "5 min" },
    ],
    editorialBoard: sharedBoard,
    letterFromEditor:
      "The first edition. A community finding its voice, one essay at a time.",
  },
  "cosmic-2": {
    ...cosmicEditions[1],
    articles: [
      { title: "Convergence: Where Disciplines Meet", author: "Editorial", category: "Editorial", readTime: "5 min" },
      { title: "Design × AI: A Conversation", author: "Interview", category: "Interview", readTime: "10 min" },
      { title: "Learning by Building", author: "Student Author", category: "Essay", readTime: "7 min" },
      { title: "Research Roundup", author: "Various", category: "Roundup", readTime: "6 min" },
      { title: "Internship Diaries", author: "Multiple", category: "Story", readTime: "9 min" },
    ],
    editorialBoard: sharedBoard,
    letterFromEditor:
      "Year two. We started seeing the patterns — and the convergences.",
  },
  "cosmic-3": {
    ...cosmicEditions[2],
    articles: [
      { title: "On the Frontier", author: "Editorial", category: "Editorial", readTime: "5 min" },
      { title: "Talking to Researchers", author: "Interview Series", category: "Interview", readTime: "12 min" },
      { title: "What the Papers Say", author: "Research Team", category: "Research", readTime: "8 min" },
      { title: "Building Your First Agent", author: "Tutorial", category: "Tutorial", readTime: "11 min" },
      { title: "The Stack of 2024", author: "Engineering", category: "Feature", readTime: "9 min" },
      { title: "Voices from Industry", author: "Various", category: "Roundup", readTime: "7 min" },
    ],
    editorialBoard: sharedBoard,
    letterFromEditor:
      "Year three. Pushing further. Asking harder questions.",
  },
  "cosmic-4": {
    ...cosmicEditions[3],
    articles: [],
    editorialBoard: sharedBoard,
    letterFromEditor:
      "Coming Q4 2025. Theme reveal pending.",
  },
};
