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
    <div className="relative overflow-hidden">
      <LazyMotion features={domAnimation}>
        <m.div
          className="absolute -right-36 -top-20 h-72 w-72 border-4 border-slate-900 bg-[radial-gradient(#0f172a_1px,transparent_2px)] [background-size:16px_16px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
        />
        <m.div
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border-4 border-slate-900 bg-[radial-gradient(#0f172a_1px,transparent_2px)] [background-size:16px_16px]"
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
        <div className="grid max-w-2xl grid-cols-4 items-center gap-8 lg:max-w-7xl lg:gap-4">
          <div className="relative col-span-full mx-auto mt-10 border-2 border-slate-900 bg-slate-200 [box-shadow:4px_4px_0_0_#0f172a] lg:col-span-1 lg:mt-0">
            <Image
              fetchPriority="high"
              priority
              src="https://images.unsplash.com/photo-1734009589019-7c557c4e7e11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="My image"
              width={200}
              height={0}
              className="p-4"
            />
          </div>
          <div className="relative col-span-4 flex flex-col border-2 border-slate-900 bg-slate-50 p-6 [box-shadow:4px_4px_0_0_#0f172a] lg:col-span-3">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <h1 className="text-3xl/normal font-bold lg:text-5xl/normal">
                Hi! I&apos;m Sulaiman,{" "}
                <span className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  a Web Developer
                </span>{" "}
              </h1>
              <p className="max-w-xl text-xl/normal text-slate-500 md:max-w-3xl lg:text-2xl/normal">
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
