"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NeoCard from "@/components/ui/NeoCard";
import NeoTag from "@/components/ui/NeoTag";
import SectionHeading from "@/components/ui/SectionHeading";
import DoodleDecor from "@/components/ui/DoodleDecor";
import { projectList } from "@/app/data/portfolioData";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#051423]/90 px-4 py-24"
    >
      {/* Dot-grid texture — deeper cyan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]" />

      {/* Glow blobs — teal/ocean palette */}
      <div className="animate-glow pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-teal-900/20 blur-3xl" />
      <div className="animate-glow pointer-events-none absolute bottom-1/4 left-1/3 h-56 w-56 rounded-full bg-violet-900/15 blur-3xl" style={{ animationDelay: "2s" }} />

      {/* Doodle: Rocket — top right, amber glow */}
      <div className="absolute right-16 top-16 hidden animate-float-delay lg:block">
        <DoodleDecor
          src="/doodles/misc/rocket.svg"
          size={68}
          rotate={20}
          opacity={70}
          glowColor="#f59e0b"
        />
      </div>

      {/* Doodle: Camera — bottom left, cyan glow */}
      <div className="absolute bottom-24 left-16 hidden animate-float-slow lg:block">
        <DoodleDecor
          src="/doodles/objects/camera.svg"
          size={56}
          opacity={65}
          glowColor="#22d3ee"
        />
      </div>

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
                <NeoCard size="sm" interactive className="flex h-full flex-col gap-4">
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden rounded border-2 border-violet-400">
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
                      <span className="absolute right-2 top-2 rounded border-2 border-violet-400 bg-amber-400 px-2 py-0.5 text-xs font-bold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-2xl font-bold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="flex-1 text-slate-300">
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
                            className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-violet-400"
                          >
                            <FaGithub /> Code
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-amber-400"
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

      {/* Wave divider → Education section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" fill="#040e1a" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
