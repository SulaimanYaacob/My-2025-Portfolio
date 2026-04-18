"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import { experienceList } from "@/app/data/portfolioData";

const typeVariant: Record<string, "violet" | "amber" | "neutral"> = {
  "Full-time": "violet",
  Freelance: "amber",
  Internship: "neutral",
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-4 py-24 dark:bg-slate-950"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.08]" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-64 w-64 animate-glow rounded-full bg-violet-500/15 blur-3xl" />
      <div
        className="bg-amber-400/12 pointer-events-none absolute right-1/3 top-1/4 h-48 w-48 animate-glow rounded-full blur-3xl"
        style={{ animationDelay: "1.8s" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I've built"
        />

        <LazyMotion features={domAnimation}>
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-slate-200 md:block dark:bg-slate-700" />

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
                <div className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border-2 border-slate-900 bg-violet-600 md:block dark:border-violet-400" />

                <NeoCard interactive>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-violet-600 dark:text-violet-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <NeoTag variant={typeVariant[exp.type] ?? "neutral"}>
                        {exp.type}
                      </NeoTag>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {exp.period}
                      </span>
                      <span className="text-sm text-slate-400 dark:text-slate-500">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-slate-600 dark:text-slate-300"
                      >
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
    </section>
  );
}
