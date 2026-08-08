export interface Profile {
  name: string;
  studentId: string;
  degree: string;
  university: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  githubUsername: string;
  tagline: string;
  bio: string;
  highlights: string[];
  stats: {
    projectsCount: number;
    certificationsCount: number;
    ctfSolved: number;
    skillsCount: number;
  };
}

export interface Project {
  id: string;
  title: string;
  featured: boolean;
  summary: string;
  description: string;
  category: 'AI & Security' | 'SOC & Defense' | 'Network Security' | 'Tools & Utilities';
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  keyFeatures: string[];
  architectureDetails: string;
  status: 'Completed' | 'Active Development' | 'Maintained';
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  badge: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  skillsLearned: string[];
  credentialUrl?: string;
  badgeType: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Education' | 'Lab & Hands-on' | 'CTF & Practical';
  location: string;
  description: string;
  achievements: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  category: 'General' | 'Education' | 'Skills' | 'Projects' | 'Career Goals' | 'Contact';
  answer: string;
  relatedLinks?: { label: string; action: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  tags: string[];
  content: string;
}
