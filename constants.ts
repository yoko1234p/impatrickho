import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Patrick Ho",
  role: "Full Stack Developer & Front-End Specialist",
  location: "Hong Kong",
  email: "pathoworkmail@gmail.com",
  phone: "+852 5301 1499",
  portfolio: "https://patrick-portfolio.vercel.app",
  summary: "Focused on UX & Engineering Quality. Expert in React/Next.js ecosystems, Enterprise CMS solutions, Cloud Infrastructure, and DevOps automation. Dedicates to bridging visual design with business goals through performant code."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Omniwe",
    role: "Front-End Developer",
    period: "Sep 2024 – Jul 2025",
    description: [
      "Maintained and optimized Chow Tai Fook Retail App (React Native iOS).",
      "Built Chow Tai Fook Group website from scratch using Adobe AEM Sites, including knowledge transfer.",
    ],
    tech: ["React Native", "iOS", "Adobe AEM", "Java", "React"],
    url: "https://www.ctfjewellerygroup.com/",
    relatedLinks: [
      { label: "App Development Showcase", url: "https://drive.google.com/drive/folders/1UUcSfW5Brwz74jaoVIxpZAO1qb_U_cYQ?usp=drive_link" }
    ]
  },
  {
    company: "Datawords",
    role: "Web Developer",
    period: "Sep 2021 – Jul 2024",
    description: [
      "Modernized client UI/UX through cross-functional collaboration.",
      "Built modular React components with Docker & Jenkins automation pipelines.",
      "Maintained O2O platforms, executing SEO optimization and user behavior analysis."
    ],
    tech: ["React", "Docker", "Jenkins", "SEO", "DevOps"],
    url: "https://www.valentino-beauty.hk/"
  },
  {
    company: "Kickscrew",
    role: "Programmer",
    period: "Sep 2020 – Aug 2021",
    description: [
      "Refactored internal systems; added persistent sorting and database updates.",
      "Integrated third-party APIs (Twilio, eDM, WhatsApp) into multiple platforms.",
      "Implemented AliCloud deployment automation."
    ],
    tech: ["PHP", "MySQL", "AliCloud", "Twilio", "API Integration"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Enterprise E-Commerce Platform",
    category: "Full Stack",
    tech: ["Next.js", "React", "MySQL", "Laravel"],
    description: "High-performance SSR/SWR optimization with a comprehensive custom backend management system."
  },
  {
    title: "POS Sales System",
    category: "Retail Tech",
    tech: ["React", "Node.js", "MySQL"],
    description: "Real-time inventory management dashboard with multi-payment gateway integration."
  },
  {
    title: "Enterprise CMS Platform",
    category: "Corporate",
    tech: ["Java", "React", "AEM"],
    description: "Multi-language content management system with advanced SEO optimization structure."
  },
  {
    title: "Retail Mobile App",
    category: "Mobile",
    tech: ["React Native", "TypeScript", "GraphQL"],
    description: "Consumer-facing app featuring offline mode capabilities and smart push notification logic."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "PHP", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "React Native", "Node.js", "Adobe AEM"]
  },
  {
    category: "Cloud/DevOps",
    items: ["AWS", "GCP", "Docker", "Jenkins", "Ubuntu"]
  },
  {
    category: "Tools",
    items: ["Figma", "Photoshop", "Git", "Webpack"]
  }
];