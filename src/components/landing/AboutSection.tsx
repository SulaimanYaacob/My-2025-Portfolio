"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import NeoCard from "@/components/ui/NeoCard";
import SectionHeading from "@/components/ui/SectionHeading";
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
      className="relative overflow-hidden bg-slate-50 px-4 py-24 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="The person behind the code"
        />

        <LazyMotion features={domAnimation}>
          {/* Changed items-stretch to ensure children can fill height */}
          <div className="grid items-stretch gap-8 lg:grid-cols-[400px_1fr]">
            {/* Portrait Column */}
            <m.div
              className="h-full" // Added h-full here
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NeoCard size="sm" className="h-full">
                {" "}
                {/* Added h-full to the card */}
                <div className="relative h-full min-h-[400px] w-full">
                  {" "}
                  {/* Container for Next.js Image */}
                  <div className="relative h-[400px] w-full">
                    {" "}
                    {/* Set your desired height/width here */}
                    <Image
                      src={personalInfo.avatar}
                      alt="Sulaiman Yaacob"
                      fill
                      className="rounded object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                      priority // Good practice for avatars/hero images
                    />
                  </div>
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
                  <p className="text-lg/relaxed text-slate-600 dark:text-slate-300">
                    {personalInfo.bio}
                  </p>
                  <p className="mt-3 text-lg/relaxed text-slate-600 dark:text-slate-300">
                    Whether building enterprise platforms or rapid prototypes,
                    I&apos;m driven by curiosity to build things that are fast,
                    reliable, and actually make life easier for the people using
                    them.
                  </p>
                </NeoCard>
              </m.div>

              <m.div
                className="grid flex-grow grid-cols-2 gap-4" // added flex-grow to push layout
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
                      <p className="font-bold text-violet-600 dark:text-violet-400">
                        {t.label}
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
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
    </section>
  );
}
