import { createElement, ReactNode } from "react";
import {
  SiCss3,
  SiDrizzle,
  SiGithub,
  SiJavascript,
  SiMantine,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";

// ─────────────────────────────────────────────────────────
// PERSONAL INFO
// Edit this to update your name, bio, and contact links.
// ─────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Sulaiman Yaacob",
  title: "Full-Stack Developer",
  bio: "Self-taught Full Stack Developer specializing in Next.js, TypeScript, and Tailwind CSS. I focus on highly performant, scalable enterprise platforms, with a strong preference for deep architecture, testing, and system optimization over surface-level UI functionality.",
  quote:
    "If it works, that's only the baseline. I keep refining until it's fast, reliable, and worth maintaining.",
  location: "Kota Bharu, Kelantan, MY",
  email: "sulaimanyaacob99@gmail.com",
  phone: "(+60)167167638",
  github: "https://github.com/SulaimanYaacob",
  linkedin: "https://linkedin.com/in/sulaiman-yaacob",
  portfolio: "https://sulaimanyaacob-portfolio.vercel.app/",
  // Unsplash placeholder — replace with your actual photo
  avatar: "/personal-images/profile.png",
  // "https://images.unsplash.com/photo-1734009589019-7c557c4e7e11?q=80&w=1974&auto=format&fit=crop",
};

// ─────────────────────────────────────────────────────────
// TECH STACK
// Add/remove items to update the Skills section.
// icon: ReactNode (react-icons)   OR   image: URL string
// ─────────────────────────────────────────────────────────
export type TechItem = {
  id: number;
  name: string;
  icon?: ReactNode;
  image?: string;
  category?: "frontend" | "backend" | "database" | "tooling";
};

export const techList: TechItem[] = [
  {
    id: 0,
    name: "React",
    icon: createElement(SiReact, { color: "#61DAFB" }),
    category: "frontend",
  },
  {
    id: 1,
    name: "Node.js",
    icon: createElement(SiNodedotjs, { color: "#339933" }),
    category: "backend",
  },
  {
    id: 2,
    name: "Next.js",
    image: "https://nextjs.org/favicon.ico",
    category: "frontend",
  },
  {
    id: 3,
    name: "CSS",
    icon: createElement(SiCss3, { color: "#1572B6" }),
    category: "frontend",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: createElement(SiTailwindcss, { color: "#06B6D4" }),
    category: "frontend",
  },
  {
    id: 5,
    name: "Mantine",
    icon: createElement(SiMantine, { color: "#339af0" }),
    category: "frontend",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: createElement(SiTypescript, { color: "#3178c6" }),
    category: "frontend",
  },
  {
    id: 7,
    name: "JavaScript",
    icon: createElement(SiJavascript, { color: "#f7df1e" }),
    category: "frontend",
  },
  {
    id: 8,
    name: "tRPC",
    icon: createElement(SiTrpc, { color: "#398ccb" }),
    category: "backend",
  },
  {
    id: 9,
    name: "n8n",
    image: "https://n8n.io/favicon.ico",
    category: "tooling",
  },
  {
    id: 10,
    name: "Jest",
    image: "https://jestjs.io/img/favicon/favicon.ico",
    category: "tooling",
  },
  {
    id: 11,
    name: "Liveblocks",
    image: "https://liveblocks.io/favicon.ico",
    category: "tooling",
  },
  {
    id: 12,
    name: "Postman",
    icon: createElement(SiPostman, { color: "#FF6B00" }),
    category: "tooling",
  },
  {
    id: 13,
    name: "GitHub",
    icon: createElement(SiGithub, null),
    category: "tooling",
  },
  {
    id: 14,
    name: "Drizzle",
    icon: createElement(SiDrizzle, { color: "#c5f74f" }),
    category: "database",
  },
  {
    id: 15,
    name: "Prisma",
    icon: createElement(SiPrisma, { color: "#2d3748" }),
    category: "database",
  },
  {
    id: 16,
    name: "Supabase",
    icon: createElement(SiSupabase, { color: "#3ECF8E" }),
    category: "database",
  },
  {
    id: 17,
    name: "Playwright",
    image: "https://playwright.dev/img/playwright-logo.svg",
    category: "tooling",
  },
  {
    id: 18,
    name: "PostgreSQL",
    icon: createElement(SiPostgresql, { color: "#336791" }),
    category: "database",
  },
  {
    id: 19,
    name: "Figma",
    image: "https://static.figma.com/app/icon/1/favicon.svg",
    category: "tooling",
  },
];

// ─────────────────────────────────────────────────────────
// WORK EXPERIENCE
// Edit bullets[] to update job descriptions.
// ─────────────────────────────────────────────────────────
export type ExperienceItem = {
  id: number;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experienceList: ExperienceItem[] = [
  {
    id: 1,
    company: "TDG Holdings",
    role: "Software Developer",
    type: "Full-time",
    period: "May 2025 - Present",
    location: "Kuala Lumpur, MY",
    bullets: [
      "Engineered scalable PostgreSQL architectures for Abbott, Chanel, Alcon, and Jasmine campaign configurations.",
      "Built n8n and custom API workflows for Email, WhatsApp, and SMS preference automation.",
      "Protected legacy systems, including Drypers Baby Club, with Jest, Playwright, and disciplined Git workflows.",
    ],
  },
  {
    id: 2,
    company: "Port of Pelabuhan Tanjung Pelepas (PTP)",
    role: "Full Stack Developer",
    type: "Part-time & Intern",
    period: "Sep 2023 - Feb 2024",
    location: "Gelang Patah, Johor",
    bullets: [
      "Built the responsive PTP iConnect portal with Next.js, tRPC, and Mantine UI for frontline operations.",
      "Designed a Joget DX inspection app that reduced manual fire extinguisher checks by 40%.",
      "Managed SQL data work and reusable UI components for cross-platform consistency.",
    ],
  },
  {
    id: 3,
    company: "Talaqqi",
    role: "Full Stack Developer",
    type: "Freelance",
    period: "Jan 2023 - May 2023",
    location: "Remote",
    bullets: [
      "Engineered secure authentication and onboarding flows using the T3 Stack.",
      "Improved reliability by resolving critical errors, refactoring components, and tightening responsive Mantine UI flows.",
    ],
  },
  {
    id: 4,
    company: "AJXB",
    role: "Frontend Developer",
    type: "Freelance",
    period: "Nov 2022 - Jan 2023",
    location: "Remote",
    bullets: [
      "Developed an Eventbrite-style responsive platform with Next.js and Mantine UI.",
      "Improved data fetching efficiency by integrating SWR with a Laravel backend API.",
    ],
  },
];

// ─────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────
export type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  period: string;
  location: string;
};

export const educationList: EducationItem[] = [
  {
    id: 1,
    institution: "Universiti Teknologi Malaysia (UTM)",
    degree: "Bachelor of Software Engineering",
    field: "Software Engineering",
    gpa: "3.65",
    period: "Oct 2020 - Feb 2025",
    location: "Johor, MY",
  },
];

// ─────────────────────────────────────────────────────────
// PROJECTS
// src: local path in /public/project-images/ or Unsplash URL
// links: optional GitHub / live URLs
// ─────────────────────────────────────────────────────────
export type ProjectItem = {
  id: number;
  name: string;
  desc: string;
  tech: string[];
  src?: string;
  links?: {
    github?: string;
    live?: string;
  };
  highlight?: boolean;
};

export const projectList: ProjectItem[] = [
  {
    id: 1,
    name: "Interactive IQRA",
    desc: "Final Year Project: real-time EdTech platform using Next.js, tRPC, and Liveblocks with secure Stripe and NeonDB integrations.",
    tech: [
      "Next.js",
      "tRPC",
      "Mantine UI",
      "Liveblocks",
      "Clerk",
      "Stripe",
      "NeonDB",
    ],
    src: "/project-images/inter-iqra.png",
    highlight: true,
  },
  {
    id: 2,
    name: "IntelliBraille",
    desc: "AI-driven Braille translation web app built from concept to deployment within 24 hours.",
    tech: ["Next.js", "AI"],
    src: "/project-images/intelliBraille.png",
    highlight: true,
  },
  {
    id: 3,
    name: "iConnect Components",
    desc: "Reusable UI and portal components for PTP iConnect, supporting consistent frontline operation workflows.",
    tech: ["Next.js", "tRPC", "Mantine UI"],
    src: "/project-images/iconnect.png",
  },
  {
    id: 4,
    name: "Student Welfare",
    desc: "Internal student welfare tracking platform with management dashboards, reporting tools, and responsive admin flows.",
    tech: ["Next.js", "TypeScript"],
    src: "/project-images/student-welfare.png",
  },
];
