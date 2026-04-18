"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import RightArrow from "@/components/doodles/RightArrow";
import FireDoodle from "@/components/doodles/FireDoodle";
import { experienceList } from "@/app/data/portfolioData";

const typeVariant: Record<string, "violet" | "amber" | "neutral"> = {
  "Full-time": "violet",
  Freelance: "amber",
  Internship: "neutral",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#071a35]/90 px-4 py-24">
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]" />

      {/* Glow blobs */}
      <div className="animate-glow pointer-events-none absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-indigo-900/30 blur-3xl" />
      <div className="animate-glow pointer-events-none absolute right-1/3 top-1/4 h-48 w-48 rounded-full bg-indigo-900/30 blur-3xl" style={{ animationDelay: "1.8s" }} />

      {/* Doodle: RightArrow — mid right, violet glow */}
      <div
        className="absolute right-20 top-1/2 hidden -translate-y-1/2 animate-float text-violet-300 lg:block"
        style={{ filter: "drop-shadow(0 0 6px rgba(124,58,237,0.5))" }}
      >
        <RightArrow className="h-12 w-24" />
      </div>

      {/* Doodle: FireDoodle — bottom right, amber pulse glow */}
      <div className="absolute bottom-24 right-16 hidden animate-pulse-glow-amber text-amber-500 lg:block">
        <FireDoodle className="h-16 w-10" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-500/40 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I've built"
        />

        <LazyMotion features={domAnimation}>
          <div className="relative flex flex-col gap-0">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-violet-900/50 md:block" />

            {experienceList.map((exp, i) => (
              <m.div
                key={exp.id}
                className="relative mb-8 md:pl-14"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border-2 border-violet-400 bg-violet-600 md:block" />

                <NeoCard interactive>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-50">
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-violet-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <NeoTag variant={typeVariant[exp.type] ?? "neutral"}>
                        {exp.type}
                      </NeoTag>
                      <span className="text-sm text-slate-400">
                        {exp.period}
                      </span>
                      <span className="text-sm text-slate-500">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-slate-300">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </NeoCard>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </div>

      {/* Wave divider → Tech section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" fill="#061a2f" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
