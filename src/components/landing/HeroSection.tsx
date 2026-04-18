"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import NeoButton from "@/components/ui/NeoButton";
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

    // Alive animation
    gsap.to(".doodle-float", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-8, 8)",
      duration: "random(2.5, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { amount: 2 },
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* 1. LAYER: Floating Boxes */}
      <FloatingGrid />

      {/* 2. LAYER: Background Texture & Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] opacity-[0.07] [background-size:28px_28px] dark:bg-[radial-gradient(#7c3aed_1px,transparent_1px)] dark:opacity-[0.09]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/20" />

      {/* 3. LAYER: Content (High Z-Index) */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 xl:py-0">
        <div className="flex w-full flex-col items-center gap-16 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex max-w-xl flex-col items-center gap-6 text-center xl:items-start xl:text-left">
            <div className="hero-badge invisible inline-flex items-center gap-2 rounded border-2 border-slate-900 bg-amber-400 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0_0_#0f172a] dark:border-violet-400 dark:bg-amber-500 dark:shadow-[4px_4px_0_0_#7c3aed]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-600 dark:bg-green-400" />
              Available for work
            </div>

            <h1 className="hero-name invisible text-6xl font-black leading-none tracking-tight text-slate-900 md:text-7xl xl:text-8xl dark:text-slate-50">
              Sulaiman
              <br />
              <span className="relative mt-2 inline-block">
                Yaacob
                <span className="absolute -bottom-2 left-0 -z-10 h-4 w-full skew-x-[-6deg] bg-amber-400/80 dark:bg-amber-500/60" />
              </span>
            </h1>

            <p className="hero-role invisible text-2xl font-bold md:text-3xl xl:text-4xl">
              <span className="bg-gradient-to-r from-violet-600 to-amber-600 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </p>

            <p className="hero-tagline invisible max-w-md text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              Turning complex problems into clean, scalable software.
              <span className="block font-medium text-slate-700 dark:text-slate-300">
                Building for the web since 2022.
              </span>
            </p>

            <div className="hero-cta invisible flex flex-wrap items-center justify-center gap-4 xl:justify-start">
              <Link href="#projects">
                <NeoButton
                  variant="primary"
                  size="lg"
                  className="transition-transform hover:scale-105"
                >
                  View Projects
                </NeoButton>
              </Link>
              <Link href="#contact">
                <NeoButton
                  variant="ghost"
                  size="lg"
                  className="transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                  Contact Me
                </NeoButton>
              </Link>
            </div>
          </div>

          <div className="hero-photo-wrapper group invisible relative flex-shrink-0">
            <div className="relative -rotate-3 transition-transform duration-500 group-hover:rotate-0">
              <div className="rounded border-4 border-slate-900 bg-slate-50 p-3 shadow-[12px_12px_0_0_#0f172a] dark:border-violet-400 dark:bg-slate-800 dark:shadow-[12px_12px_0_0_#7c3aed]">
                <Image
                  priority
                  src={personalInfo.avatar}
                  alt="Sulaiman Yaacob"
                  width={320}
                  height={400}
                  className="rounded object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
