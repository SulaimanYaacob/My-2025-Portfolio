"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import NeoCard from "@/components/ui/NeoCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/app/data/portfolioData";

const traits = [
  {
    label: "Production Systems",
    desc: "Builds and supports apps that have to keep working for real teams.",
  },
  {
    label: "Data & API Work",
    desc: "Works across PostgreSQL, Prisma, REST APIs, tRPC, and typed flows.",
  },
  {
    label: "Automation",
    desc: "Uses n8n, webhooks, exports, and schedulers to reduce manual work.",
  },
  {
    label: "Quality Mindset",
    desc: "Tests changes with Jest, Playwright, Postman, and careful Git flow.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100svh-132px)] items-center overflow-hidden bg-slate-50 px-4 py-12 md:min-h-[calc(100svh-84px)] lg:py-10 dark:bg-slate-900"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="How I work across product, data, and support."
        />

        <LazyMotion features={domAnimation}>
          <div className="grid items-stretch gap-6 md:grid-cols-[340px_1fr] xl:grid-cols-[390px_1fr]">
            <m.div
              className="h-full"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NeoCard size="sm" className="h-full">
                <div className="relative h-full min-h-[340px] w-full md:min-h-[430px]">
                  <div className="relative h-full overflow-hidden rounded border-2 border-slate-900 dark:border-violet-400">
                    <Image
                      src={personalInfo.avatar}
                      alt="Sulaiman Yaacob"
                      fill
                      className="rounded object-cover [object-position:center_45%]"
                      sizes="(max-width: 768px) 100vw, 390px"
                    />
                  </div>
                </div>
              </NeoCard>
            </m.div>

            <div className="flex flex-col gap-6">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <NeoCard>
                  <p className="text-base/relaxed text-slate-600 md:text-lg/relaxed dark:text-slate-300">
                    {personalInfo.bio}
                  </p>
                  <p className="mt-3 text-base/relaxed text-slate-600 md:text-lg/relaxed dark:text-slate-300">
                    My current work sits close to production: existing systems,
                    client-facing flows, scheduled automations, reporting,
                    uploads, support fixes, and the small details that make
                    software easier to operate after launch.
                  </p>
                </NeoCard>
              </m.div>

              <m.div
                className="grid flex-grow grid-cols-1 gap-4 sm:grid-cols-2"
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
