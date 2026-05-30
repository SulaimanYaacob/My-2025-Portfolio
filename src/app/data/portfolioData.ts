import { createElement, ReactNode } from "react";
import {
  SiCss3,
  SiDrizzle,
  SiExpress,
  SiGithub,
  SiGooglegemini,
  SiJavascript,
  SiMantine,
  SiN8N,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";

export const personalInfo = {
  name: "Sulaiman Yaacob",
  title: "Full-Stack Developer",
  bio: "Full-stack developer building production CRM, campaign, loyalty, booking, dashboard, and automation systems with Next.js, TypeScript, Node.js, PostgreSQL, Prisma, REST APIs, and n8n. I work across UI, APIs, database design, testing, and production support, with a focus on reliable systems that teams can maintain.",
  quote:
    "I like systems that survive real users: clear data, tested flows, and changes that are easy to maintain.",
  location: "Kota Bharu, Kelantan, MY",
  email: "sulaimanyaacob99@gmail.com",
  phone: "(+60)167167638",
  github: "https://github.com/SulaimanYaacob",
  linkedin: "https://linkedin.com/in/sulaiman-yaacob",
  portfolio: "https://sulaimanyaacob-portfolio.vercel.app/",
  resume: "/SulaimanYaacob-Resume.pdf",
  avatar: "/personal-images/profile-new.jpeg",
};

export type TechItem = {
  id: number;
  name: string;
  icon?: ReactNode;
  image?: string;
  category?: "frontend" | "backend" | "database" | "tooling" | "ai";
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
    name: "Next.js",
    image: "https://nextjs.org/favicon.ico",
    category: "frontend",
  },
  {
    id: 2,
    name: "TypeScript",
    icon: createElement(SiTypescript, { color: "#3178c6" }),
    category: "frontend",
  },
  {
    id: 3,
    name: "Node.js",
    icon: createElement(SiNodedotjs, { color: "#339933" }),
    category: "backend",
  },
  {
    id: 4,
    name: "Express",
    icon: createElement(SiExpress, null),
    category: "backend",
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: createElement(SiPostgresql, { color: "#336791" }),
    category: "database",
  },
  {
    id: 6,
    name: "Prisma",
    icon: createElement(SiPrisma, { color: "#2d3748" }),
    category: "database",
  },
  {
    id: 7,
    name: "tRPC",
    icon: createElement(SiTrpc, { color: "#398ccb" }),
    category: "backend",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: createElement(SiTailwindcss, { color: "#06B6D4" }),
    category: "frontend",
  },
  {
    id: 9,
    name: "Mantine UI",
    icon: createElement(SiMantine, { color: "#339af0" }),
    category: "frontend",
  },
  {
    id: 10,
    name: "n8n",
    icon: createElement(SiN8N, { color: "#ea4b71" }),
    category: "tooling",
  },
  {
    id: 11,
    name: "REST APIs",
    icon: createElement(SiPostman, { color: "#FF6B00" }),
    category: "backend",
  },
  {
    id: 12,
    name: "Jest",
    image: "https://jestjs.io/img/favicon/favicon.ico",
    category: "tooling",
  },
  {
    id: 13,
    name: "Playwright",
    image: "https://playwright.dev/img/playwright-logo.svg",
    category: "tooling",
  },
  {
    id: 14,
    name: "Vite",
    icon: createElement(SiVite, { color: "#646cff" }),
    category: "tooling",
  },
  {
    id: 15,
    name: "Supabase",
    icon: createElement(SiSupabase, { color: "#3ECF8E" }),
    category: "database",
  },
  {
    id: 16,
    name: "Drizzle",
    icon: createElement(SiDrizzle, { color: "#c5f74f" }),
    category: "database",
  },
  {
    id: 17,
    name: "Zod",
    icon: createElement(SiZod, { color: "#3068b7" }),
    category: "tooling",
  },
  {
    id: 18,
    name: "Gemini API",
    icon: createElement(SiGooglegemini, { color: "#8e75b2" }),
    category: "ai",
  },
  {
    id: 19,
    name: "JavaScript",
    icon: createElement(SiJavascript, { color: "#f7df1e" }),
    category: "frontend",
  },
  {
    id: 20,
    name: "GitHub",
    icon: createElement(SiGithub, null),
    category: "tooling",
  },
  {
    id: 21,
    name: "Figma",
    image: "https://static.figma.com/app/icon/1/favicon.svg",
    category: "tooling",
  },
  {
    id: 22,
    name: "CSS",
    icon: createElement(SiCss3, { color: "#1572B6" }),
    category: "frontend",
  },
];

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
    company: "The D Group / TDG Holdings Sdn Bhd",
    role: "Software Developer",
    type: "Full-time",
    period: "May 2025 - Present",
    location: "Kuala Lumpur, MY",
    bullets: [
      "Develop and support production CRM, loyalty, campaign, booking, reward, and field-force applications for clients including Chanel, Alcon, Abbott, Jasmine, Drypers, GoodMorning, Haleon, MJN, BlueScope, and ADC.",
      "Build web applications with Next.js, React, TypeScript, Vite, Node.js, Express, Prisma, PostgreSQL, Tailwind CSS, Redux, REST APIs, n8n, and external webhook integrations.",
      "Ship campaign platforms, admin portals, appointment booking tools, dashboards, receipt workflows, reward redemption flows, scheduling tools, reporting features, and bulk upload flows.",
      "Support production systems by debugging issues, improving existing features, testing user flows, and coordinating updates with project managers, operators, and senior developers.",
    ],
  },
  {
    id: 2,
    company: "Port of Tanjung Pelepas (PTP)",
    role: "Full-Stack Developer Intern / Part-Time Developer",
    type: "Part-time & Intern",
    period: "Sep 2023 - Feb 2024",
    location: "Gelang Patah, Johor",
    bullets: [
      "Built internal business system modules with Next.js, tRPC, Mantine UI, SQL, and backend logic for port operation workflows.",
      "Developed PTP iConnect modules including incentive tracking, PPE item request forms, newsfeed features, reusable UI components, and table-based management screens.",
      "Created a Joget DX fire extinguisher inspection system that helped digitize manual checks and reduce inspection time by 40%.",
      "Contributed to SQL handling, frontend components, backend integration, and reusable UI patterns for internal applications.",
    ],
  },
  {
    id: 3,
    company: "Talaqqi, AJXB, PTP iConnect",
    role: "Freelance Full-Stack / Frontend Developer",
    type: "Freelance",
    period: "Nov 2022 - Jan 2025",
    location: "Remote",
    bullets: [
      "Delivered frontend and full-stack features across education, event-management, and internal portal projects using Next.js, TypeScript, tRPC, Prisma, SWR, Mantine UI, and Laravel APIs.",
      "Implemented authentication, onboarding flows, API integrations, reusable UI components, responsive layouts, and client-side data rendering.",
      "Refined UI and UX with clients and teams, resolved frontend bugs, refactored components, and improved cross-device usability.",
    ],
  },
];

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
    degree: "Bachelor of Computer Science (Software Engineering)",
    field: "Software Engineering",
    gpa: "3.65",
    period: "Oct 2020 - Feb 2025",
    location: "Johor, MY",
  },
];

export type ProjectItem = {
  id: number;
  name: string;
  desc: string;
  tech: string[];
  category: "personal" | "company";
  src?: string;
  period?: string;
  roleSummary?: string;
  links?: {
    github?: string;
    live?: string;
  };
  highlight?: boolean;
};

export const projectList: ProjectItem[] = [
  {
    id: 1,
    name: "MY Birthday Freebies",
    desc: "Malaysia reward discovery app with brand filtering, saved rewards, eligibility notes, reminder exports, and a Gemini-powered data refresh scheduler.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Gemini"],
    category: "personal",
    src: "/project-images/my-birthday-freebies.png",
    period: "May 2026",
    links: {
      live: "https://freebies-trip.vercel.app/",
    },
    highlight: true,
  },
  {
    id: 2,
    name: "Gemini Video Understanding Dashboard",
    desc: "AI video analysis dashboard for YouTube URLs, uploads, recordings, and camera streams with secure Gemini handling and structured JSON reports.",
    tech: ["TypeScript", "Node.js", "Express", "Vite", "Gemini API", "Vercel Blob"],
    category: "personal",
    src: "/project-images/gemini-video-understanding.png",
    period: "Apr 2026 - May 2026",
    links: {
      live: "https://ai-video-understanding.vercel.app/",
    },
    highlight: true,
  },
  {
    id: 3,
    name: "Interactive IQRA",
    desc: "Final Year Project: real-time IQRA learning platform with tutor and student flows, live collaboration, audio pronunciation, media handling, and typed API logic.",
    tech: [
      "Next.js",
      "tRPC",
      "Mantine UI",
      "Liveblocks",
      "Stripe",
      "UploadThing",
      "NeonDB",
    ],
    category: "personal",
    src: "/project-images/inter-iqra.png",
    period: "Jul 2023 - Jul 2024",
  },
  {
    id: 4,
    name: "IntelliBraille",
    desc: "AI-assisted Braille translation app delivered from concept to deployment within 24 hours, focused on responsive UI and accessible text-to-Braille output.",
    tech: ["Next.js", "AI Features", "Braille Translation", "Responsive UI"],
    category: "personal",
    src: "/project-images/intelliBraille.png",
    period: "Jul 2023",
    links: {
      live: "https://intelli-braille-i645.vercel.app/",
    },
  },
  {
    id: 5,
    name: "Chanel Facial Therapy Cabin",
    desc: "Booking and schedule management experience for retail appointment operations.",
    tech: ["Booking Tool", "Admin Portal", "Scheduling"],
    category: "company",
    src: "/project-images/chanel-main.png",
    roleSummary: "Client-facing workflow support",
  },
  {
    id: 6,
    name: "My Abbott Cares",
    desc: "Campaign microsite experience supporting contest participation and product discovery.",
    tech: ["Campaign Platform", "Reward Flow", "Responsive UI"],
    category: "company",
    src: "/project-images/abbott-power-of-care.png",
    roleSummary: "Production campaign support",
  },
  {
    id: 7,
    name: "Jasmine Gold Campaign",
    desc: "Consumer campaign interface for promotion entry, reward communication, and mobile-first participation.",
    tech: ["Campaign UI", "Mobile Flow", "Promotion"],
    category: "company",
    src: "/project-images/jasmine.png",
    roleSummary: "Campaign platform work",
  },
  {
    id: 8,
    name: "ADC Retailer Platform",
    desc: "Retailer-facing campaign and dashboard interface for structured operational workflows.",
    tech: ["Dashboard", "Retailer Flow", "Admin UI"],
    category: "company",
    src: "/project-images/adc-retailer.png",
    roleSummary: "Portal and dashboard support",
  },
  {
    id: 9,
    name: "Alcon WaterInnovation Loyalty",
    desc: "Loyalty and receipt workflow experience for campaign participation and reward tracking.",
    tech: ["Loyalty", "Receipt Flow", "Rewards"],
    category: "company",
    src: "/project-images/alconwaterinnovation loyalty.png",
    roleSummary: "Loyalty workflow support",
  },
  {
    id: 10,
    name: "Alcon ECP Portal",
    desc: "Professional-facing portal interface for campaign operations and account workflows.",
    tech: ["Portal", "Account Flow", "Operations"],
    category: "company",
    src: "/project-images/alconwaterinnovation-ecp.png",
    roleSummary: "Portal experience support",
  },
];
