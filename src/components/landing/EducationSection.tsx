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
  "API Development",
  "Quality Engineering",
  "UX Optimization",
  "Product Development",
];

const stats = [
  { label: "CGPA", value: "3.65", accent: "amber" },
  { label: "Years", value: "4.5", accent: "violet" },
  { label: "Graduated", value: "2025", accent: "amber" },
  { label: "Scholarship", value: "JPA", accent: "violet" },
] as const;

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative flex min-h-[calc(100svh-132px)] items-center overflow-hidden bg-slate-50 px-4 py-12 md:min-h-[calc(100svh-84px)] dark:bg-slate-900 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.08] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.09]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-violet-500/15 blur-3xl" />
      <div
        className="bg-amber-400/12 pointer-events-none absolute bottom-1/4 right-1/4 h-56 w-56 animate-glow rounded-full blur-3xl"
        style={{ animationDelay: "1.6s" }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <SectionHeading
          title="Education"
          subtitle="Software Engineering foundation backed by practical product, database, and quality work."
          className="mb-6"
        />

        <LazyMotion features={domAnimation}>
          {educationList.map((edu, i) => (
            <m.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-5"
            >
              <NeoCard size="md" className="relative overflow-hidden">
                <div className="absolute right-4 top-4 rounded border-2 border-slate-900 bg-violet-600 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-50 [box-shadow:3px_3px_0_0_#0f172a] dark:border-violet-400 dark:bg-violet-700 dark:[box-shadow:3px_3px_0_0_#7c3aed]">
                  JPA Scholar
                </div>
                <div className="pr-0 pt-10 sm:pr-28 sm:pt-0">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                        {edu.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-black leading-tight text-slate-900 md:text-3xl dark:text-slate-50">
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
                          CGPA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NeoCard>

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
                      className="flex flex-col items-center gap-1 py-4 text-center"
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
