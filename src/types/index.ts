export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshots: string[];
  icon: "folder" | "folder-code" | "folder-chart" | "folder-star";
  featured: boolean;
  origin?: "personal" | "production";
  note?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  honeypot?: string;
}
