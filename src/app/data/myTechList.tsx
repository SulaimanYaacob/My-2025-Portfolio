import { ReactNode } from "react";
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

export type MyTech = {
  id: number;
  name: string;
  icon?: ReactNode;
  image?: string;
};

export const myTechList: MyTech[] = [
  //Frontend / Client Side
  {
    id: 0,
    name: "React",
    icon: <SiReact color="#61DAFB" />,
  },
  {
    id: 1,
    name: "NodeJS",
    icon: <SiNodedotjs color="#339933" />,
  },
  {
    id: 2,
    name: "NextJS",
    image: "https://nextjs.org/favicon.ico",
  },
  {
    id: 3,
    name: "CSS",
    icon: <SiCss3 color="#1572B6" />,
  },
  {
    id: 4,
    name: "TailwindCSS",
    icon: <SiTailwindcss color="#06B6D4" />,
  },
  {
    id: 5,
    name: "Mantine",
    icon: <SiMantine color="#339af0" />,
  },
  {
    id: 6,
    name: "Typescript",
    icon: <SiTypescript color="#3178c6" />,
  },
  {
    id: 7,
    name: "Javascript",
    icon: <SiJavascript color="#f7df1e" />,
  },
  {
    id: 8,
    name: "tRPC",
    icon: <SiTrpc color="#398ccb" className="rounded-full" />,
  },
  {
    id: 9,
    name: "Uploadthing",
    image: "https://uploadthing.com/favicon.ico",
  },
  {
    id: 10,
    name: "Clerk",
    image: "https://clerk.com/v2/favicon.ico",
    // icon: <SiClerk />,
  },
  {
    id: 11,
    name: "Liveblocks",
    image: "https://liveblocks.io/favicon.ico",
  },
  {
    id: 12,
    name: "Postman",
    icon: <SiPostman color="#FF6B00" />,
  },
  {
    id: 13,
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    id: 14,
    name: "Drizzle",
    icon: <SiDrizzle color="#c5f74f" />,
  },
  {
    id: 15,
    name: "Prisma",
    icon: <SiPrisma color="#2d3748" />,
  },
  {
    id: 16,
    name: "Supabase",
    icon: <SiSupabase color="#3ECF8E" />,
  },
  {
    id: 17,
    name: "Convex",
    image: "https://www.convex.dev/favicon.ico",
  },
  {
    id: 18,
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" />,
  },
  {
    id: 19,
    name: "MySQL",
    icon: <SiMysql color="#4479A1" />,
  },
];
