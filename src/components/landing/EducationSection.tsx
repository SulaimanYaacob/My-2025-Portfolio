"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import DoodleDecor from "@/components/ui/DoodleDecor";
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
    <section id="education" className="relative overflow-hidden bg-[#040e1a]/90 px-4 py-24">
      {/* Dot-grid texture — muted deep cyan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0e7490_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]" />

      {/* Glow blobs — deep ocean */}
      <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-950/30 blur-3xl" />
      <div className="animate-glow pointer-events-none absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-indigo-950/30 blur-3xl" style={{ animationDelay: "1.6s" }} />

      {/* Doodle: Crown — top right, amber glow */}
      <div className="absolute right-16 top-16 hidden animate-float lg:block">
        <DoodleDecor
          src="/doodles/objects/crown.svg"
          size={64}
          opacity={70}
          glowColor="#d97706"
        />
      </div>

      {/* Doodle: Trophy — bottom left, violet glow */}
      <div className="absolute bottom-24 left-16 hidden animate-float-slow lg:block">
        <DoodleDecor
          src="/doodles/misc/trophy.svg"
          size={64}
          opacity={65}
          glowColor="#7c3aed"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading title="Education" subtitle="Where it all started" dotColor="cyan" />

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
                <div className="absolute left-0 top-0 h-full w-2 bg-violet-500" />
                <div className="pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                        {edu.period}
                      </p>
                      <h3 className="mt-2 text-3xl font-black leading-tight text-slate-50 md:text-4xl">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-xl font-semibold text-violet-400">
                        {edu.institution}
                      </p>
                      <p className="text-slate-400">{edu.location}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="rounded border-4 border-violet-400 bg-amber-400 px-6 py-4 text-center [box-shadow:4px_4px_0_0_#7c3aed]">
                        <p className="text-4xl font-black text-slate-900">{edu.gpa}</p>
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
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  >
                    <NeoCard
                      size="sm"
                      interactive
                      className="flex flex-col items-center gap-1 py-6 text-center"
                    >
                      <p
                        className={`text-3xl font-black ${
                          s.accent === "amber" ? "text-amber-400" : "text-violet-400"
                        }`}
                      >
                        {s.value}
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
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
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
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

      {/* Wave divider → Contact section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" fill="#020810" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
