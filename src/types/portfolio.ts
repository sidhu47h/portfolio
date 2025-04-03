export interface PersonalInfo {
  logoName: string;
  name: string;
  title: string;
  tagline: string;
  email: string;
  profileImage: string;
}

export interface SocialLink {
  url: string;
  username: string;
}

export interface SocialLinks {
  github: SocialLink;
  linkedin: SocialLink;
  twitter: SocialLink;
}

export interface WorkPosition {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Experience {
  title: string;
  positions: WorkPosition[];
}

export interface Degree {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
  relevantCourses: string[];
}

export interface Education {
  title: string;
  degrees: Degree[];
}

export interface About {
  title: string;
  description: string;
  details: {
    experience: {
      position: string;
      company: string;
      period: string;
    }[];
    education: {
      degree: string;
      institution: string;
      year: string;
    }[];
  };
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skills {
  title: string;
  categories: SkillCategory[];
}

export interface ProjectLink {
  github: string;
  live: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github: string;
    live: string;
  };
}

export interface Projects {
  title: string;
  list: Project[];
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export interface Contact {
  title: string;
  description: string;
  formFields: FormField[];
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface Navigation {
  links: NavigationLink[];
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Awards {
  title: string;
  list: Award[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLinks;
  about: About;
  skills: Skills;
  projects: Projects;
  contact: Contact;
  navigation: Navigation;
  experience: Experience;
  education: Education;
  awards: Awards;
} 