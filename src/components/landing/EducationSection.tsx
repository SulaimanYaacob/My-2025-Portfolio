"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import { educationList } from "@/app/data/portfolioData";

const focusAreas = [
  "Software Engineering",
  "Web Development",
  "Database Systems",
  "UI/UX Design",
  "Agile Methodology",
  "System Architecture",
  "Testing & QA",
  "API Development",
];

const stats = [
  { label: "GPA", value: "3.65", accent: "amber" },
  { label: "Years", value: "4.5", accent: "violet" },
  { label: "Graduated", value: "2025", accent: "amber" },
  { label: "Rank", value: "Top 10%", accent: "violet" },
] as const;

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-50 px-4 py-24 dark:bg-slate-900"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.08] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.09]" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-violet-500/15 blur-3xl" />
      <div
        className="bg-amber-400/12 pointer-events-none absolute bottom-1/4 right-1/4 h-56 w-56 animate-glow rounded-full blur-3xl"
        style={{ animationDelay: "1.6s" }}
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading title="Education" subtitle="Where it all started" />

        <LazyMotion features={domAnimation}>
          {educationList.map((edu, i) => (
            <m.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-8"
            >
              {/* Main card */}
              <NeoCard size="lg" className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-2 bg-violet-600 dark:bg-violet-500" />
                <div className="pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                        {edu.period}
                      </p>
                      <h3 className="mt-2 text-3xl font-black leading-tight text-slate-900 md:text-4xl dark:text-slate-50">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-xl font-semibold text-violet-600 dark:text-violet-400">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400">
                        {edu.location}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="rounded border-4 border-slate-900 bg-amber-400 px-6 py-4 text-center [box-shadow:4px_4px_0_0_#0f172a] dark:border-violet-400 dark:[box-shadow:4px_4px_0_0_#7c3aed]">
                        <p className="text-4xl font-black text-slate-900">
                          {edu.gpa}
                        </p>
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-700">
                          GPA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NeoCard>

              {/* Stats grid */}
              <m.div
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {stats.map((s) => (
                  <m.div
                    key={s.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <NeoCard
                      size="sm"
                      interactive
                      className="flex flex-col items-center gap-1 py-6 text-center"
                    >
                      <p
                        className={`text-3xl font-black ${
                          s.accent === "amber"
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-violet-600 dark:text-violet-400"
                        }`}
                      >
                        {s.value}
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        {s.label}
                      </p>
                    </NeoCard>
                  </m.div>
                ))}
              </m.div>

              {/* Areas of focus */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <NeoCard>
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Areas of Focus
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {focusAreas.map((area, idx) => (
                      <NeoTag
                        key={area}
                        variant={idx % 2 === 0 ? "violet" : "amber"}
                        className="text-sm"
                      >
                        {area}
                      </NeoTag>
                    ))}
                  </div>
                </NeoCard>
              </m.div>
            </m.div>
          ))}
        </LazyMotion>
      </div>
    </section>
  );
}
