"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import NeoCard from "@/components/ui/NeoCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Balloon from "@/components/doodles/Balloon";
import Arrow from "@/components/doodles/Arrow";
import { personalInfo } from "@/app/data/portfolioData";

const traits = [
  {
    label: "Self-Taught",
    desc: "Mastered the stack by reading docs, not waiting for classes.",
  },
  {
    label: "Problem Solver",
    desc: "Bridges technical architecture with real-world business needs.",
  },
  {
    label: "Fast Learner",
    desc: "Concept to deployment in 24 hours — see IntelliBraille.",
  },
  {
    label: "Team Player",
    desc: "Regular cross-functional collaboration with PMs and operators.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080f2a]/90 px-4 py-24"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />

      {/* Ambient glow */}
      <div className="animate-glow pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-violet-800/20 blur-3xl" />

      {/* Doodle: Balloon — right side, amber glow */}
      <div
        className="absolute right-16 top-24 hidden animate-float text-amber-300 lg:block"
        style={{ filter: "drop-shadow(0 0 8px rgba(251,191,36,0.5))" }}
      >
        <Balloon className="h-28 w-16" />
      </div>

      {/* Doodle: Arrow — bottom left, violet shimmer */}
      <div className="absolute bottom-24 left-16 hidden animate-shimmer-x text-violet-400 lg:block">
        <Arrow className="h-16 w-20" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-violet-400/30 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="The person behind the code"
        />

        <LazyMotion features={domAnimation}>
          <div className="grid items-stretch gap-8 lg:grid-cols-[400px_1fr]">
            {/* Portrait Column */}
            <m.div
              className="h-full"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NeoCard size="sm" className="h-full">
                <div className="relative h-full min-h-[400px] w-full">
                  <Image
                    src={personalInfo.avatar}
                    alt="Sulaiman Yaacob"
                    fill
                    className="rounded object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </NeoCard>
            </m.div>

            {/* Bio + traits Column */}
            <div className="flex flex-col gap-6">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <NeoCard>
                  <p className="text-lg/relaxed text-slate-300">
                    {personalInfo.bio}
                  </p>
                  <p className="mt-3 text-lg/relaxed text-slate-300">
                    Whether building enterprise platforms or rapid prototypes,
                    I&apos;m driven by curiosity to build things that are fast,
                    reliable, and actually make life easier for the people using
                    them.
                  </p>
                </NeoCard>
              </m.div>

              <m.div
                className="grid flex-grow grid-cols-2 gap-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {traits.map((t) => (
                  <m.div
                    key={t.label}
                    className="h-full"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <NeoCard size="sm" interactive className="h-full">
                      <p className="font-bold text-violet-400">
                        {t.label}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {t.desc}
                      </p>
                    </NeoCard>
                  </m.div>
                ))}
              </m.div>
            </div>
          </div>
        </LazyMotion>
      </div>

      {/* Wave divider → Experience section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" fill="#071a35" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
