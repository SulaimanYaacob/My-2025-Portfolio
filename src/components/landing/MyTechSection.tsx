import Image from "next/image";
import { ReactNode } from "react";
import {
  SiCss3,
  SiGithub,
  SiJavascript,
  SiMantine,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";

type MyTech = {
  id: number;
  name: string;
  icon?: ReactNode;
  image?: string;
};

const myTech: MyTech[] = [
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
];
//TODO  blur, framer motion scroll, more tech to add
export default function MyTechSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <h1>MyTechSection</h1>
      <div className="relative z-0 grid grid-cols-6 gap-0 transition-all hover:gap-6">
        <div className="absolute inset-0 m-auto h-[80%] w-[80%] rounded-full bg-violet-500/50 blur-3xl transition-all" />
        {myTech.map((tech, index) => (
          <div
            key={tech.id}
            className={`flex gap-2 p-2 ${
              index % 5 < 3 ? "col-span-2" : "col-span-3"
            } z-10 border-2 border-slate-900 bg-white transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:z-20 hover:scale-110`}
          >
            <div className="m-auto flex h-full items-center">
              {tech.icon && tech.icon}

              {tech.image && (
                <div className="relative z-10 h-[30px] w-[30px]">
                  <Image
                    className="absolute select-none"
                    src={tech.image}
                    // width={38}
                    // height={38}
                    fill
                    alt={""}
                  />
                </div>
              )}
            </div>
            <ul className="my-auto hidden w-full text-xl md:block lg:text-4xl">
              <li>{tech.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
