import { createElement, ReactNode } from "react";
import {
  SiCss3,
  SiDrizzle,
  SiGithub,
  SiJavascript,
  SiMantine,
  SiMysql,
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
  bio: "Passionate, self-taught Full-Stack Developer who thrives on turning complex problems into clean, scalable software. I love diving into documentation to master new tools and bridging the gap between technical architecture and real-world business needs.",
  location: "Kota Bharu, MY",
  email: "sulaimanyaacob99@gmail.com",
  phone: "(+60)167167638",
  github: "https://github.com/SulaimanYaacob",
  linkedin: "https://linkedin.com/in/sulaimanyaacob",
  // Unsplash placeholder — replace with your actual photo
  avatar:
    "https://images.unsplash.com/photo-1734009589019-7c557c4e7e11?q=80&w=1974&auto=format&fit=crop",
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
  { id: 0, name: "React", icon: createElement(SiReact, { color: "#61DAFB" }), category: "frontend" },
  { id: 1, name: "NodeJS", icon: createElement(SiNodedotjs, { color: "#339933" }), category: "backend" },
  { id: 2, name: "NextJS", image: "https://nextjs.org/favicon.ico", category: "frontend" },
  { id: 3, name: "CSS", icon: createElement(SiCss3, { color: "#1572B6" }), category: "frontend" },
  { id: 4, name: "TailwindCSS", icon: createElement(SiTailwindcss, { color: "#06B6D4" }), category: "frontend" },
  { id: 5, name: "Mantine", icon: createElement(SiMantine, { color: "#339af0" }), category: "frontend" },
  { id: 6, name: "TypeScript", icon: createElement(SiTypescript, { color: "#3178c6" }), category: "frontend" },
  { id: 7, name: "JavaScript", icon: createElement(SiJavascript, { color: "#f7df1e" }), category: "frontend" },
  { id: 8, name: "tRPC", icon: createElement(SiTrpc, { color: "#398ccb" }), category: "backend" },
  { id: 9, name: "Uploadthing", image: "https://uploadthing.com/favicon.ico", category: "tooling" },
  { id: 10, name: "Clerk", image: "https://clerk.com/v2/favicon.ico", category: "tooling" },
  { id: 11, name: "Liveblocks", image: "https://liveblocks.io/favicon.ico", category: "tooling" },
  { id: 12, name: "Postman", icon: createElement(SiPostman, { color: "#FF6B00" }), category: "tooling" },
  { id: 13, name: "GitHub", icon: createElement(SiGithub, null), category: "tooling" },
  { id: 14, name: "Drizzle", icon: createElement(SiDrizzle, { color: "#c5f74f" }), category: "database" },
  { id: 15, name: "Prisma", icon: createElement(SiPrisma, { color: "#2d3748" }), category: "database" },
  { id: 16, name: "Supabase", icon: createElement(SiSupabase, { color: "#3ECF8E" }), category: "database" },
  { id: 17, name: "Convex", image: "https://www.convex.dev/favicon.ico", category: "database" },
  { id: 18, name: "PostgreSQL", icon: createElement(SiPostgresql, { color: "#336791" }), category: "database" },
  { id: 19, name: "MySQL", icon: createElement(SiMysql, { color: "#4479A1" }), category: "database" },
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
    period: "May 2025 – Present",
    location: "Kuala Lumpur, MY",
    bullets: [
      "Engineered scalable PostgreSQL architectures for high-profile clients (Abbott, Chanel, Mead Johnson, Alcon), managing complex campaign configurations and automated reward distribution.",
      "Partnered with Project Managers to translate business requirements into technical scopes, ensuring clear communication on constraints and delivery timelines.",
      "Developed WhatsApp-integrated campaigns and automated support workflows using N8N and custom APIs.",
      "Designed new database modules with Senior Developers and ensured zero downtime for legacy projects using Jest and Playwright testing suites.",
    ],
  },
  {
    id: 2,
    company: "AJXB",
    role: "Frontend Developer",
    type: "Freelance",
    period: "Nov 2022 – Jan 2025",
    location: "Remote",
    bullets: [
      "Developed and maintained responsive web applications using Next.js and Mantine UI.",
      "Improved application performance by integrating SWR with a Laravel backend API.",
    ],
  },
  {
    id: 3,
    company: "PTP iConnect",
    role: "Fullstack Developer",
    type: "Freelance",
    period: "Nov 2022 – Jan 2025",
    location: "Remote",
    bullets: [
      "Built a responsive internal portal using Next.js, tRPC, and Mantine UI for frontline workers.",
      "Designed table management systems for incentives, newsfeeds, and equipment request modules.",
      "Developed a library of reusable UI components to accelerate development and ensure consistency.",
    ],
  },
  {
    id: 4,
    company: "Talaqqi",
    role: "Full Stack Developer",
    type: "Freelance",
    period: "Nov 2022 – Jan 2025",
    location: "Remote",
    bullets: [
      "Engineered secure authentication and onboarding flows using the T3-Stack (Next.js, tRPC, Prisma).",
      "Enhanced reliability by resolving critical errors, refactoring card components, and implementing responsive designs.",
    ],
  },
  {
    id: 5,
    company: "Port of Pelabuhan Tanjung Pelepas (PTP)",
    role: "Intern — FullStack Developer",
    type: "Internship",
    period: "Sep 2023 – Feb 2024",
    location: "Johor, MY",
    bullets: [
      "Built enterprise-grade web applications using Full-Code (Next.js, tRPC, Express) and Low-Code (Joget DX) frameworks.",
      "Designed an internal inspection app reducing manual fire extinguisher inspection time by 40%.",
      "Developed the PTP iConnect platform delivering digital tools for real-time port operations.",
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
    period: "Oct 2020 – Feb 2025",
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
    desc: "Real-time EdTech platform featuring live collaborative cursors via Liveblocks, multi-role authentication with Clerk, Stripe payments, and serverless Postgres. Built as Final Year Project.",
    tech: ["Next.js", "tRPC", "Mantine UI", "Liveblocks", "Clerk", "Stripe", "Neon"],
    src: "/project-images/inter-iqra.png",
    highlight: true,
  },
  {
    id: 2,
    name: "IntelliBraille",
    desc: "AI-powered Braille translation web app with character recognition features. Concept-to-deployment within a 24-hour dev cycle.",
    tech: ["Next.js", "AI"],
    src: "/project-images/intelliBraille.png",
    highlight: true,
  },
  {
    id: 3,
    name: "iConnect Components",
    desc: "Component library built for PTP iConnect internal portal, providing consistent reusable UI for frontline workers across port operations.",
    tech: ["Next.js", "tRPC", "Mantine UI"],
    src: "/project-images/iconnect.png",
  },
  {
    id: 4,
    name: "Student Welfare",
    desc: "Internal student welfare tracking platform with management dashboards and reporting tools.",
    tech: ["Next.js", "TypeScript"],
    src: "/project-images/student-welfare.png",
  },
];
