"use client";
import * as m from "motion/react-m";
import Image from "next/image";
import { TechItem, techList } from "@/app/data/portfolioData";
import NeoCard from "@/components/ui/NeoCard";
import SectionHeading from "@/components/ui/SectionHeading";

const MyTechCard = ({ tech, index }: { tech: TechItem; index: number }) => {
  const isTwoItemRow = Math.floor((index % 5) / 3) === 1;

  return (
    <NeoCard
      size="sm"
      interactive
      className={`z-10 col-span-4 flex min-h-14 touch-manipulation items-center justify-center bg-white p-2 outline-none sm:min-h-16 sm:gap-3 sm:p-4 ${
        isTwoItemRow && index % 5 === 3 ? "col-start-3" : ""
      }`}
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
        <p className="truncate text-sm font-bold uppercase md:text-base dark:text-slate-50">
          {tech.name}
        </p>
      </div>
    </NeoCard>
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
      className="relative grid min-h-[calc(100svh-84px)] w-full place-items-center overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.08] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.09]" />

      <div className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 py-16 sm:px-6 md:gap-12 lg:py-24">
        <SectionHeading
          title="Tools I Use"
          subtitle="Frontend, APIs, databases, automation, testing, and practical AI."
          align="center"
        />

        <div className="relative z-0 grid grid-cols-12 gap-3 sm:gap-5">
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
