"use client";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import Image from "next/image";
import { TechItem, techList } from "@/app/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";

const MyTechCard = ({ tech, index }: { tech: TechItem; index: number }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: (index + 1) * 0.08 }}
        className={`flex gap-2 p-2 ${
          index % 5 < 3 ? "col-span-2 w-full" : "col-span-3 lg:w-96"
        } z-10 border-2 border-slate-900 bg-white transition-all ease-out [box-shadow:4px_4px_0_0_#0f172a] hover:!scale-110 dark:border-violet-400 dark:bg-slate-800 dark:[box-shadow:4px_4px_0_0_#7c3aed]`}
      >
        <div className="m-auto flex h-full items-center">
          {tech.icon && tech.icon}
          {tech.image && (
            <div className="relative z-10 h-[30px] w-[30px]">
              <Image
                className="absolute select-none object-contain"
                src={tech.image}
                fill
                alt=""
              />
            </div>
          )}
        </div>
        <div className="my-auto hidden w-full text-xl md:block lg:text-3xl dark:text-slate-50">
          <p>{tech.name}</p>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default function MyTechSection() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.08] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.09]" />

      <div className="relative z-0 mx-4 flex max-w-xs flex-col gap-8 py-24 md:max-w-7xl">
        <SectionHeading
          title="Tools I Use"
          subtitle="Technologies I'm familiar with across the full stack"
          align="center"
        />
        <div className="relative z-0 grid grid-cols-6 gap-6">
          {/* Animated violet glow blob */}
          <div className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] animate-glow rounded-full bg-violet-500/20 blur-3xl transition-all" />
          <div
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 animate-glow rounded-full bg-amber-400/15 blur-3xl"
            style={{ animationDelay: "1.3s" }}
          />
          {techList.map((tech, index) => (
            <MyTechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
