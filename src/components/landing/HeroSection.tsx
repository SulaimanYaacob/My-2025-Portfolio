"use client";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

//TODO Drag constraint

//! inset-0 (absolute) // h-screen
export default function HeroSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    // <div className="lg:py-54 mx-auto max-w-4xl bg-red-400 px-6 py-36 text-center">
    <div className="relative overflow-hidden dark:bg-slate-900">
      <LazyMotion features={domAnimation}>
        <m.div
          className="absolute -right-36 -top-20 h-72 w-72 rounded border-4 border-slate-900 bg-[radial-gradient(#8b5cf6_1px,transparent_2px)] [background-position:4px_4px] [background-size:16px_16px] dark:border-violet-500"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
        />
        <m.div
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border-4 border-slate-900 bg-[radial-gradient(#8b5cf6_1px,transparent_2px)] [background-position:-8px_8px] [background-size:16px_16px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
        />
      </LazyMotion>

      <div
        ref={constraintsRef}
        className="mx-4 flex h-screen items-center justify-center"
      >
        <div className="relative flex max-w-xl flex-col items-center gap-4 md:max-w-2xl lg:gap-4 xl:max-w-7xl xl:shrink-0 xl:flex-row">
          <div className="absolute left-0 top-0 hidden h-full w-full xl:block">
            <div className="gradient-to-r absolute -left-6 -top-6 z-10 h-2 w-1/6 border-slate-900 bg-violet-500 [box-shadow:4px_4px_0_0_#0f172a]" />
            <div className="absolute -left-6 -top-5 z-10 h-1/2 w-2 border-slate-900 bg-violet-500 [box-shadow:4px_4px_0_0_#0f172a]" />
            <div className="absolute -bottom-6 -right-6 z-10 h-2 w-1/6 border-slate-900 bg-violet-500 [box-shadow:4px_4px_0_0_#0f172a]" />
            <div className="w-w absolute -bottom-6 -right-6 z-10 h-1/2 w-2 border-slate-900 bg-violet-500 [box-shadow:4px_4px_0_0_#0f172a]" />
          </div>
          <div className="relative mx-auto mt-20 h-full rounded border-2 border-slate-900 bg-slate-50 [box-shadow:4px_4px_0_0_#0f172a] lg:h-full lg:w-fit xl:mt-0">
            <Image
              fetchPriority="high"
              priority
              src="https://images.unsplash.com/photo-1734009589019-7c557c4e7e11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="My image"
              sizes="100vw"
              // fill
              // style={{ objectFit: "contain" }}
              width={200}
              height={0}
              className="p-4"
            />
          </div>
          <div className="relative flex h-full max-w-3xl flex-col rounded border-2 border-slate-900 bg-slate-50 p-6 [box-shadow:4px_4px_0_0_#0f172a]">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl/normal font-bold md:text-4xl/normal xl:text-5xl/normal">
                Hi! I&apos;m Sulaiman,{" "}
                <span className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  a Web Developer
                </span>{" "}
              </h1>
              <p className="max-w-full text-xl/normal text-slate-500 md:text-2xl/normal">
                I first started learning web development in 2022. Since then, I
                have been constantly learning and exploring new technologies to
                improve my skills. I am passionate about web development and am
                always looking for new challenges to solve.
              </p>
              {/* <Link className="mx-auto" href="/sign-up">
                <button className="mx-auto h-12 rounded-xl border-2 border-slate-900 bg-violet-400 px-4 text-2xl/normal font-semibold transition-all [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]">
                  Share
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//? Shadow with animate
//[box-shadow:4px_4px_0_0_#0f172a] hover:[box-shadow:0_0px_0_0_#0f172a] border-2 border-slate-900 bg-violet-400 hover:translate-x-1 hover:translate-y-1 transition-all

//? Shadow only
// [box-shadow:4px_4px_0_0_#0f172a] border-2 border-slate-900
