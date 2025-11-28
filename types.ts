export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  url?: string;
  relatedLinks?: { label: string; url: string }[];
}

export interface Project {
  title: string;
  category: string;
  tech: string[];
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export type RecruiterState = {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  setRecruiterMode: (value: boolean) => void;
};