"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import { personalInfo } from "@/app/data/portfolioData";
import FloatingGrid from "../ui/FloatingGrid";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.from(".hero-badge", {
      y: -30,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    })
      .from(
        ".hero-name",
        { y: 80, autoAlpha: 0, duration: 0.8, ease: "power4.out" },
        "-=0.3",
      )
      .from(
        ".hero-role",
        { scale: 0.9, autoAlpha: 0, duration: 0.6, ease: "back.out(1.2)" },
        "-=0.5",
      )
      .from(".hero-tagline", { autoAlpha: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(
        ".hero-cta",
        { autoAlpha: 0, y: 20, duration: 0.5, stagger: 0.1 },
        "-=0.3",
      )
      .from(".hero-quote", { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.35")
      .from(
        ".hero-photo-wrapper",
        {
          x: 100,
          rotation: 15,
          autoAlpha: 0,
          duration: 1,
          ease: "elastic.out(1, 0.75)",
        },
        "-=0.8",
      );
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-132px)] overflow-hidden bg-slate-50 md:min-h-[calc(100svh-84px)] dark:bg-slate-900">
      <FloatingGrid />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:28px_28px] dark:bg-[radial-gradient(#7c3aed_1px,transparent_1px)] dark:opacity-[0.09]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-132px)] max-w-7xl items-center px-5 py-8 sm:px-6 md:min-h-[calc(100svh-84px)] lg:py-8">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="hero-badge inline-flex items-center gap-2 rounded border-2 border-slate-900 bg-amber-400 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0_0_#0f172a] dark:border-violet-400 dark:bg-amber-500 dark:shadow-[4px_4px_0_0_#7c3aed]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-600 dark:bg-green-400" />
              Available for work
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
              <span className="bg-gradient-to-r from-violet-600 to-amber-600 bg-clip-text text-transparent">
                {personalInfo.title}
              </span>
            </p>

            <p className="hero-tagline max-w-md text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400">
              Turning complex problems into clean, scalable software.
              <span className="block font-medium text-slate-700 dark:text-slate-300">
                Building for the web since 2022.
              </span>
            </p>

            <NeoCard
              size="sm"
              className="hero-quote relative max-w-md bg-amber-100 text-left dark:bg-slate-800"
            >
              <span className="absolute -left-1 top-3 h-10 w-2 border-2 border-slate-900 bg-violet-600 dark:border-violet-400 dark:bg-amber-400" />
              <p className="pl-3 text-base font-bold leading-relaxed text-slate-900 sm:text-lg dark:text-slate-50">
                {personalInfo.quote}
              </p>
            </NeoCard>

            <div className="hero-cta flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link href="#projects">
                <NeoButton variant="primary" size="lg">
                  View Projects
                </NeoButton>
              </Link>
              <NeoButton
                variant="ghost"
                size="lg"
                className="hover:bg-slate-200 dark:hover:bg-slate-800"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (!el) return;
                  const headerHeight =
                    document.querySelector("header")?.getBoundingClientRect()
                      .height ?? 84;
                  window.scrollTo({
                    top:
                      el.getBoundingClientRect().top +
                      window.scrollY -
                      headerHeight,
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me
              </NeoButton>
            </div>
          </div>

          <div className="hero-photo-wrapper group relative flex-shrink-0">
            <div className="relative -rotate-3 transition-transform duration-500 group-hover:rotate-0">
              <div className="rounded border-4 border-slate-900 bg-slate-50 p-3 [box-shadow:12px_12px_0_0_#0f172a] dark:border-violet-400 dark:bg-slate-800 dark:[box-shadow:12px_12px_0_0_#7c3aed]">
                <div className="h-[230px] w-[186px] overflow-hidden rounded sm:h-[260px] sm:w-[210px] md:h-[340px] md:w-[272px]">
                  <Image
                    priority
                    src={personalInfo.avatar}
                    alt="Sulaiman Yaacob"
                    width={320}
                    height={400}
                    sizes="100vw"
                    className="h-full w-full origin-bottom scale-[1.6] object-cover grayscale-[20%] transition-all duration-700 ease-out [object-position:center_20%] group-hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
