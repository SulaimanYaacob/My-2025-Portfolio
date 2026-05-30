"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import { personalInfo } from "@/app/data/portfolioData";
import FloatingGrid from "../ui/FloatingGrid";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 84;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - headerHeight,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.from(".hero-badge", {
      y: -30,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".hero-name",
        { y: 80, autoAlpha: 0, duration: 0.8, ease: "power4.out" },
        "-=0.3",
      )
      .from(
        ".hero-role",
        { scale: 0.94, autoAlpha: 0, duration: 0.6, ease: "power3.out" },
        "-=0.5",
      )
      .from(".hero-tagline", { autoAlpha: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(
        ".hero-cta",
        { autoAlpha: 0, y: 20, duration: 0.5, stagger: 0.1 },
        "-=0.3",
      )
      .from(".hero-quote", { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.35");
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-132px)] overflow-hidden bg-slate-50 md:min-h-[calc(100svh-84px)] dark:bg-slate-900">
      <FloatingGrid />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:28px_28px] dark:bg-[radial-gradient(#7c3aed_1px,transparent_1px)] dark:opacity-[0.09]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-132px)] max-w-4xl items-center justify-center px-5 py-10 sm:px-6 md:min-h-[calc(100svh-84px)] lg:py-12">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 rounded border-2 border-slate-900 bg-amber-400 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0_0_#0f172a] dark:border-violet-400 dark:bg-amber-500 dark:shadow-[4px_4px_0_0_#7c3aed]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-600 dark:bg-green-400" />
            Open to roles
          </div>

          <h1 className="hero-name text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-50">
            Sulaiman
            <br />
            <span className="relative mt-2 inline-block">
              Yaacob
              <span className="absolute -bottom-2 left-0 -z-10 h-4 w-full skew-x-[-6deg] bg-amber-400/80 dark:bg-amber-500/60" />
            </span>
          </h1>

          <p className="hero-role text-2xl font-bold sm:text-3xl dark:text-slate-50">
            <span className="text-violet-600 dark:text-violet-400">
              {personalInfo.title}
            </span>
          </p>

          <p className="hero-tagline max-w-xl text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400">
            I build production web systems across CRM, campaigns, dashboards,
            automations, APIs, and data workflows.
            <span className="block font-medium text-slate-700 dark:text-slate-300">
              Practical full-stack delivery for teams that need dependable
              software.
            </span>
          </p>

          <NeoCard
            size="sm"
            className="hero-quote relative max-w-xl bg-amber-100 text-left dark:bg-slate-800"
          >
            <span className="absolute -left-1 top-3 h-10 w-2 border-2 border-slate-900 bg-violet-600 dark:border-violet-400 dark:bg-amber-400" />
            <p className="pl-3 text-base font-bold leading-relaxed text-slate-900 sm:text-lg dark:text-slate-50">
              {personalInfo.quote}
            </p>
          </NeoCard>

          <div className="hero-cta flex flex-wrap items-center justify-center gap-4">
            <NeoButton
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </NeoButton>
            <NeoButton
              variant="ghost"
              size="lg"
              className="hover:bg-slate-200 dark:hover:bg-slate-800"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </NeoButton>
          </div>
        </div>
      </div>
    </section>
  );
}
