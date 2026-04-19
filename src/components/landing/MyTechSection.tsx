"use client";
import * as m from "motion/react-m";
import Image from "next/image";
import { TechItem, techList } from "@/app/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
const MyTechCard = ({ tech, index }: { tech: TechItem; index: number }) => {
  const isTwoItemRow = Math.floor((index % 5) / 3) === 1;

  return (
    <div
      className={`/* 1. THE BASE SHADOW */ /* 2. THE ANIMATION SPEED */ /* 3. DESKTOP HOVER: Moves card and removes */ /* 4. MOBILE/ACTIVE PRESS: Ensures it snaps on click/tap */ z-10 col-span-4 flex cursor-pointer items-center justify-center border-2 border-slate-900 bg-white p-3 shadow transition-all duration-75 ease-linear [box-shadow:4px_4px_0_0_#0f172a] active:translate-x-[4px] active:translate-y-[4px] active:[box-shadow:0_0_0_0_#0f172a] sm:p-4 sm:hover:translate-x-[4px] sm:hover:translate-y-[4px] sm:hover:[box-shadow:0_0_0_0_#0f172a] dark:border-violet-400 dark:bg-slate-800 dark:[box-shadow:4px_4px_0_0_#7c3aed] dark:active:[box-shadow:0_0_0_0_#7c3aed] dark:sm:hover:[box-shadow:0_0_0_0_#7c3aed] ${isTwoItemRow && index % 5 === 3 ? "col-start-3" : ""} touch-manipulation gap-0 outline-none sm:gap-3`}
    >
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10">
        {tech.icon && <div className="text-2xl sm:text-3xl">{tech.icon}</div>}
        {tech.image && (
          <Image
            src={tech.image}
            alt={tech.name}
            fill
            className="select-none object-contain"
            sizes="40px"
          />
        )}
      </div>

      <div className="hidden min-w-0 flex-1 sm:block">
        <p className="truncate text-sm font-bold uppercase tracking-tight md:text-base dark:text-slate-50">
          {tech.name}
        </p>
      </div>
    </div>
  );
};

const TechTrace = ({
  color,
  className,
  delay = 0,
}: {
  color: string;
  className: string;
  delay?: number;
}) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className={`pointer-events-none absolute opacity-20 dark:opacity-40 ${className}`}
  >
    <m.path
      d="M0 0 L100 100 M20 0 L120 100"
      fill="none"
      stroke={color}
      strokeWidth="0.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "linear" }}
    />
  </svg>
);

export default function MyTechSection() {
  return (
    <section
      id="skills"
      className="relative grid min-h-screen w-full place-items-center overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.08] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.09]" />

      <div className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-24">
        <SectionHeading
          title="Tools I Use"
          subtitle="Technologies I'm familiar with across the full stack"
          align="center"
        />

        <div className="relative z-0 grid grid-cols-12 gap-4 sm:gap-6">
          <div className="absolute inset-0 z-[-1] flex items-center justify-center">
            <div className="h-[120%] w-[1px] rotate-45 bg-gradient-to-b from-transparent via-violet-500/50 to-transparent" />
            <div className="h-[120%] w-[1px] -rotate-45 bg-gradient-to-b from-transparent via-violet-500/50 to-transparent" />
          </div>

          <TechTrace
            color="#8b5cf6"
            className="left-0 top-0 h-full w-1/2"
            delay={0}
          />
          <TechTrace
            color="#fbbf24"
            className="bottom-0 right-0 h-full w-1/3"
            delay={2}
          />

          {techList.map((tech, index) => (
            <MyTechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
