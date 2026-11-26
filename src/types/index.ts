import type { LucideIcon } from "lucide-react";

export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  detailTitle: string;
  overview: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  scene: string;
  icon: LucideIcon;
};

export type Project = {
  number: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  tone: string;
  tagline: string;
  description: string;
  challenge: string;
  direction: string;
  highlights: string[];
  disciplines: string[];
};
