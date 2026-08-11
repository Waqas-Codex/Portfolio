export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  suffix?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  iconName: string;
}

export interface AboutData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  avatarUrl: string;
  location: string;
  status: string;
  stats: StatItem[];
  focusAreas: FocusArea[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experience: string;
  iconName: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  grade?: string;
  location?: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description?: string;
  courses?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl: string;
  badgeIcon: string;
  skills: string[];
}

export interface ProjectArchitectureNode {
  title: string;
  type: 'client' | 'gateway' | 'service' | 'cache' | 'database' | 'queue';
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  bannerUrl: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureSummary: string;
  problemStatement: string;
  solutionDetails: string;
  keyFeatures: string[];
  technicalChallenges: {
    challenge: string;
    resolution: string;
  }[];
  performanceMetrics: {
    metric: string;
    value: string;
    impact: string;
  }[];
  futureImprovements: string[];
  architectureDiagramNodes?: ProjectArchitectureNode[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  authorRole: string;
  company: string;
  avatarUrl: string;
  quote: string;
  linkedinUrl?: string;
  relationship: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentSnippet: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImageUrl: string;
  url?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  resumeUrl: string;
  statusBadge: string;
  videoBgUrl: string;
  socials: SocialLink[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skillCategories: SkillCategory[];
  education: EducationItem[];
  projects: ProjectData[];
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  blogPosts: BlogPostItem[];
  contactDetails: {
    phone: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    timezone: string;
    availability: string;
  };
}
