"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectItem, projectList } from "@/app/data/portfolioData";

const ProjectVisual = ({
  project,
}: {
  project: ProjectItem;
}) => {
  return (
    <Image
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="bg-slate-100 object-contain p-1 dark:bg-slate-900"
      fill
      loading={project.category === "personal" ? "eager" : "lazy"}
      src={project.src ?? "/project-images/inter-iqra.png"}
      alt={`${project.name} screenshot`}
    />
  );
};

const tabs: Array<{ label: string; value: ProjectItem["category"] }> = [
  { label: "Personal", value: "personal" },
  { label: "Company Work", value: "company" },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectItem["category"]>("personal");
  const filteredProjects = projectList.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <section
      id="projects"
      className="relative flex min-h-[calc(100svh-132px)] items-center overflow-hidden bg-white px-4 py-12 md:min-h-[calc(100svh-84px)] dark:bg-slate-950 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.08]" />

      <div className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 animate-glow rounded-full bg-violet-500/15 blur-3xl" />
      <div
        className="bg-amber-400/12 pointer-events-none absolute bottom-1/4 left-1/3 h-56 w-56 animate-glow rounded-full blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected product work, grouped by personal builds and careful company snapshots."
          className="mb-6"
        />

        <div
          className="mb-6 flex justify-center"
          role="tablist"
          aria-label="Project category"
        >
          <div className="inline-flex rounded border-2 border-slate-900 bg-white p-1 [box-shadow:5px_5px_0_0_#0f172a] dark:border-violet-400 dark:bg-slate-900 dark:[box-shadow:5px_5px_0_0_#7c3aed]">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.value)}
                  className={`rounded px-4 py-2 text-sm font-black transition-colors sm:px-5 ${
                    isActive
                      ? "bg-violet-600 text-white dark:bg-amber-400 dark:text-slate-950"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <LazyMotion features={domAnimation}>
          <div
            className={`grid gap-4 md:grid-cols-2 ${
              activeCategory === "personal" ? "xl:grid-cols-4" : "xl:grid-cols-3"
            }`}
          >
            {filteredProjects.map((project, i) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <NeoCard
                  size="sm"
                  interactive
                  className="flex h-full flex-col gap-3"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded border-2 border-slate-900 bg-slate-100 dark:border-violet-400 dark:bg-slate-900">
                    <ProjectVisual project={project} />
                    {project.highlight && (
                      <span className="absolute right-2 top-2 rounded border-2 border-slate-900 bg-amber-400 px-2 py-0.5 text-xs font-bold text-slate-900 [box-shadow:3px_3px_0_0_#0f172a] dark:border-violet-400 dark:[box-shadow:3px_3px_0_0_#7c3aed]">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    {(project.period || project.roleSummary) && (
                      <div>
                        <NeoTag variant="neutral">
                          {project.period ?? project.roleSummary}
                        </NeoTag>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                      {project.name}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.desc ||
                        "A full-stack web application built with modern technologies."}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <NeoTag key={t} variant="violet">
                          {t}
                        </NeoTag>
                      ))}
                    </div>

                    {(project.links?.github || project.links?.live) && (
                      <div className="mt-2 flex gap-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
                          >
                            <FaGithub /> Code
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400"
                          >
                            <FaExternalLinkAlt /> Live
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </NeoCard>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
