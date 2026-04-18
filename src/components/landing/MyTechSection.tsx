"use client";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import Image from "next/image";
import { TechItem, techList } from "@/app/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import Squiggle from "@/components/doodles/Squiggle";
import BotFace from "@/components/doodles/BotFace";

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
        } z-10 border-2 border-violet-400 bg-slate-900/70 transition-all ease-out [box-shadow:4px_4px_0_0_#7c3aed] hover:!scale-110`}
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
        <div className="my-auto hidden w-full text-xl text-slate-50 md:block lg:text-3xl">
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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#061a2f]/90"
    >
      {/* Dot-grid texture — cyan dots for ocean surface */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]" />

      {/* Doodle: BotFace — top right, violet glow */}
      <div
        className="absolute right-16 top-16 hidden animate-float text-violet-300 lg:block"
        style={{ filter: "drop-shadow(0 0 8px rgba(124,58,237,0.55))" }}
      >
        <BotFace className="h-16 w-20" />
      </div>

      {/* Doodle: Squiggle — bottom left, cyan shimmer */}
      <div className="absolute bottom-20 left-16 hidden animate-shimmer-x text-cyan-400 lg:block">
        <Squiggle className="h-10 w-24" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/30 blur-xl" />
      </div>

      <div className="relative z-0 mx-4 flex max-w-xs flex-col gap-8 py-24 md:max-w-7xl">
        <SectionHeading
          title="Tools I Use"
          subtitle="Technologies I'm familiar with across the full stack"
          align="center"
        />
        <div className="relative z-0 grid grid-cols-6 gap-6">
          {/* Glow blobs — ocean palette */}
          <div className="animate-glow pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] rounded-full bg-cyan-900/20 blur-3xl transition-all" />
          <div className="animate-glow pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-900/15 blur-3xl" style={{ animationDelay: "1.3s" }} />
          {techList.map((tech, index) => (
            <MyTechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>

      {/* Wave divider → Projects section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" fill="#051423" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
