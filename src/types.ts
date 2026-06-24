export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  gpaOrStatus: string;
  location: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  badgeColor: string;
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: string;
}

export interface NavLink {
  label: string;
  href: string;
}
