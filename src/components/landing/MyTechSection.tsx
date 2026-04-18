"use client";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import Image from "next/image";
import { TechItem, techList } from "@/app/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import Squiggle from "@/components/doodles/Squiggle";
import Star from "@/components/doodles/Star";

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
        <div className="my-auto hidden w-full text-xl dark:text-slate-50 md:block lg:text-3xl">
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.08] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.09]" />

      {/* Doodle: Squiggle — top right */}
      <div className="absolute right-16 top-16 hidden animate-float text-slate-900 dark:text-amber-300 lg:block">
        <Squiggle className="h-10 w-24" />
      </div>

      {/* Doodle: Star — bottom left */}
      <div className="absolute bottom-20 left-16 hidden animate-float-slow lg:block">
        <Star className="h-12 w-12 dark:invert" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-400/30 blur-xl" />
      </div>

      {/* Doodle: Chip — top left */}
      <div className="absolute left-16 top-16 hidden animate-float lg:block">
        <Image
          src="/doodles/misc/chip.svg"
          alt=""
          aria-hidden="true"
          width={64}
          height={64}
          className="opacity-65 dark:invert"
        />
      </div>

      {/* Doodle: Bot — bottom right */}
      <div className="absolute bottom-20 right-16 hidden animate-float-delay lg:block">
        <Image
          src="/doodles/misc/bot.svg"
          alt=""
          aria-hidden="true"
          width={60}
          height={60}
          className="opacity-60 dark:invert"
        />
      </div>

      {/* Doodle: Server — mid left */}
      <div className="absolute left-10 top-1/2 hidden -translate-y-1/2 animate-float-slow lg:block">
        <Image
          src="/doodles/misc/server.svg"
          alt=""
          aria-hidden="true"
          width={48}
          height={48}
          className="opacity-55 dark:invert"
        />
      </div>

      <div className="relative z-0 mx-4 flex max-w-xs flex-col gap-8 py-24 md:max-w-7xl">
        <SectionHeading
          title="Tools I Use"
          subtitle="Technologies I'm familiar with across the full stack"
          align="center"
        />
        <div className="relative z-0 grid grid-cols-6 gap-6">
          {/* Animated violet glow blob */}
          <div className="animate-glow pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] rounded-full bg-violet-500/20 blur-3xl transition-all" />
          <div className="animate-glow pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl" style={{ animationDelay: "1.3s" }} />
          {techList.map((tech, index) => (
            <MyTechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
