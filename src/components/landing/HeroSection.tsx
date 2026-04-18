"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import NeoButton from "@/components/ui/NeoButton";
import Star from "@/components/doodles/Star";
import Lightning from "@/components/doodles/Lightning";
import DoodleDecor from "@/components/ui/DoodleDecor";
import { personalInfo } from "@/app/data/portfolioData";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.from(".hero-badge", {
      y: -30,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    })
      .from(
        ".hero-name",
        { y: 80, opacity: 0, duration: 0.8, ease: "power4.out" },
        "-=0.3",
      )
      .from(
        ".hero-role",
        { scale: 0.9, opacity: 0, duration: 0.6, ease: "back.out(1.2)" },
        "-=0.5",
      )
      .from(".hero-tagline", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(
        ".hero-cta",
        { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 },
        "-=0.3",
      )
      .from(
        ".hero-photo-wrapper",
        {
          x: 100,
          rotation: 15,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.75)",
        },
        "-=0.8",
      )
      .from(
        ".doodle-pop",
        {
          scale: 0,
          rotation: -45,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(2)",
        },
        "-=0.5",
      );

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

    gsap.to(".corner-accent", {
      scale: 1.05,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Star field — small white dots */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" />

      {/* Constellation layer — sparse violet clusters */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#a78bfa_1.5px,transparent_1.5px)] [background-size:88px_88px] opacity-[0.08]" />

      {/* Corner accents */}
      <div className="corner-accent absolute right-0 top-0 h-48 w-48 rounded-bl-lg border-b-4 border-l-4 border-violet-400 bg-[radial-gradient(#7c3aed_1px,transparent_2px)] transition-all duration-500 [background-position:4px_4px] [background-size:16px_16px] hover:h-64 hover:w-64" />
      <div className="corner-accent absolute bottom-0 left-0 h-32 w-32 rounded-tr-lg border-r-4 border-t-4 border-violet-400 bg-[radial-gradient(#7c3aed_1px,transparent_2px)] transition-all duration-500 [background-position:4px_4px] [background-size:16px_16px] hover:h-48 hover:w-48" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-violet-700/15 blur-3xl" />

      {/* Doodle: Satellite — top right, slow orbit */}
      <div className="doodle-pop absolute right-52 top-20 hidden animate-orbit-slow lg:block">
        <Image
          src="/doodles/misc/satellite.svg"
          alt=""
          aria-hidden="true"
          width={48}
          height={48}
          style={{ filter: "invert(1) sepia(1) saturate(2) hue-rotate(170deg)", opacity: 0.7 }}
        />
      </div>

      {/* Doodle: Rocket — bottom left, float with amber glow */}
      <div className="doodle-pop doodle-float absolute bottom-24 left-36 hidden lg:block">
        <DoodleDecor
          src="/doodles/misc/rocket.svg"
          size={72}
          rotate={-45}
          opacity={70}
          glowColor="#f59e0b"
        />
      </div>

      {/* Doodle: Lightning — bottom right, amber pulse glow */}
      <div className="doodle-pop doodle-float absolute bottom-28 right-24 hidden animate-pulse-glow-amber text-amber-400 lg:block">
        <Lightning className="h-20 w-14" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-400/60 blur-xl" />
      </div>

      {/* Main content */}
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 xl:py-0">
        <div className="flex w-full flex-col items-center gap-16 xl:flex-row xl:items-center xl:justify-between">
          {/* Text content */}
          <div className="flex max-w-xl flex-col items-center gap-6 text-center xl:items-start xl:text-left">
            <div className="hero-badge inline-flex items-center gap-2 rounded border-2 border-violet-400 bg-amber-500 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0_0_#7c3aed]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for work
            </div>

            <h1 className="hero-name text-6xl font-black leading-none tracking-tight text-slate-50 md:text-7xl xl:text-8xl">
              Sulaiman
              <br />
              <span className="relative mt-2 inline-block">
                Yaacob
                <span className="absolute -bottom-2 left-0 -z-10 h-4 w-full skew-x-[-6deg] bg-amber-500/60" />
              </span>
            </h1>

            <p className="hero-role text-2xl font-bold md:text-3xl xl:text-4xl">
              <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </p>

            <p className="hero-tagline max-w-md text-lg leading-relaxed text-slate-400">
              Turning complex problems into clean, scalable software.
              <span className="block font-medium text-slate-300">
                Building for the web since 2022.
              </span>
            </p>

            <div className="hero-cta flex flex-wrap items-center justify-center gap-4 xl:justify-start">
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
                  className="transition-colors hover:bg-slate-800"
                >
                  Contact Me
                </NeoButton>
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo-wrapper group relative flex-shrink-0">
            <div className="relative -rotate-3 transition-transform duration-500 group-hover:rotate-0">
              <div className="rounded border-4 border-violet-400 bg-slate-800 p-3 shadow-[12px_12px_0_0_#7c3aed]">
                <Image
                  priority
                  src={personalInfo.avatar}
                  alt="Sulaiman Yaacob"
                  width={320}
                  height={400}
                  className="rounded object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              {/* Star doodle on photo */}
              <span className="doodle-pop absolute -right-8 -top-8 transition-transform duration-300 group-hover:scale-125">
                <Star className="h-12 w-12 animate-twinkle text-amber-400" />
                <span className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-amber-400/60 blur-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider → About section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-16 w-full" aria-hidden="true">
          <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" fill="#080f2a" fillOpacity="0.9" />
        </svg>
      </div>
    </section>
  );
}
