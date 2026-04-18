"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectList } from "@/app/data/portfolioData";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-4 py-24 dark:bg-slate-950"
    >
      {/* Dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:20px_20px] dark:bg-[radial-gradient(#a78bfa_1px,transparent_1px)] dark:opacity-[0.08]" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 animate-glow rounded-full bg-violet-500/15 blur-3xl" />
      <div
        className="bg-amber-400/12 pointer-events-none absolute bottom-1/4 left-1/3 h-56 w-56 animate-glow rounded-full blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <LazyMotion features={domAnimation}>
          <div className="grid gap-8 lg:grid-cols-2">
            {projectList.map((project, i) => (
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
                  className="flex h-full flex-col gap-4"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden rounded border-2 border-slate-900 dark:border-violet-400">
                    <Image
                      priority={i < 2}
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      fill
                      src={
                        project.src ??
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                      }
                      alt={project.name}
                    />
                    {project.highlight && (
                      <span className="absolute right-2 top-2 rounded border-2 border-slate-900 bg-amber-400 px-2 py-0.5 text-xs font-bold dark:border-violet-400">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                      {project.name}
                    </h3>
                    <p className="flex-1 text-slate-600 dark:text-slate-300">
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
